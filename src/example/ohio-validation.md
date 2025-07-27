# Validating Network

<div class="warning">
In this example we will use `nadi-gis` plugin to load and write GIS files, while using QGIS to generate the map visualization. The plugin is external, refer to the installation page to install it into the NADI System.

Different from other chapters, the code in this chapters are run in the order they are given, meaning each task code blocks are not independent.
</div>

## Load Network and Attributes
We'll use the same network from the Dams count example.

```task run
network load_file("data/ohio-river/ohio.network")
network count()
network outlet()

node.is_usgs = NAME match "^[0-9]+";
node.is_dam = !is_usgs;
network count(nodes.is_usgs)
network count(nodes.is_dam)
```

Then we load the node attributes from the gis files, we can see some of the variables are loaded from NID website.
```task run continue
network gis_load_attrs("data/ohio-river/nid-uniq.gpkg", "nidId")
network gis_load_attrs("data/ohio-river/GageLoc.shp.zip", "SOURCE_FEA")
network gis_load_attrs("data/ohio-river/gages-II.gpkg", "STAID")
network gis_load_attrs("data/ohio-river/usgs-drainage.csv", "SiteNumber")

node[03399800].SiteNumber # only USGS gages have it
node(INDEX < 5).yearCompleted # only NID dams have it
node(INDEX < 5).GEOM # all nodes have it although from different sources
```
Also note that, while loading GIS files it also loads the geometry into "GEOM" attribute (you can change it through `change` function argument).

<!-- Let's make them into same format to avoid future problems. -->

<!-- ```task run continue -->
<!-- node(GEOM?).GEOM = str_replace(GEOM, " 0\\)", ")"); -->
<!-- node(INDEX < 5).GEOM -->
<!-- ``` -->

## Process Attributes
Since we need a quick and easy way to identify USGS gage and NID dam, we use regex to categorize them.

```task run continue
node.is_usgs = NAME match "^[0-9]+";
node.is_dam = !is_usgs;
network count(nodes.is_usgs)
network count(nodes.is_dam)
```

The basin area is stored as different variable in each dataset, we want to combine them into a single one.

```task run continue
node.ba = first_attr(["drainageArea", "DRAIN_SQKM", "Drainage"])
network count(nodes.ba?) / count()
```
Even then we only have 75% of the nodes with basin area. Since the `DrainageArea` is in sqmiles

If we look at some examples here on two sources of basin area of USGS gages, we can see the problems:
```task run continue
node(is_usgs & Drainage? & DRAIN_SQKM? & INDEX < 100) array(Drainage, DRAIN_SQKM)
```
1. The `Drainage` value are `String`,
2. The units are different (confirmed from metadata of datasets).

So we reconcile that,
```task run continue
node(Drainage?).basin_area = float(Drainage);
node(DRAIN_SQKM?).basin_area = DRAIN_SQKM * 0.38610216;
```
We got an error, seems like `Drainage` contains empty strings as well. That and the `String` part comes from loading a CSV without data types (`.csvt` file).

Let's fix the code for that, and also let's get the `basin_area` for dams.


```task run continue
node(Drainage? & Drainage match "[0-9]+(.[0-9]+)?").basin_area = float(Drainage);
node(DRAIN_SQKM?).basin_area = DRAIN_SQKM * 0.38610216;
node(drainageArea?).basin_area = float(drainageArea);

node(INDEX < 10).basin_area
network count(nodes.basin_area?) / count()
```

## Check for Incorrect Basin Areas
Now we have all the different variables combined into a single one with same data type and unit. Let's do a quick analysis to see if there are points in the network where nodes have larger area than input nodes.

```task run continue
node.incorrect = basin_area < sum(inputs.basin_area);
network count(nodes.incorrect)
```
The error here comes from the fact that not all nodes contain `basin_area` attribute. Since `basin_area?` will only check for the current node, we use a default value when the values are not available into a temporary variable.


```task run continue
node.temp_ba = basin_area ? 0.0;
node.incorrect = basin_area? & (basin_area < sum(inputs.temp_ba));
network count(nodes.incorrect)
network count(nodes.incorrect) / count()
```
That's around 10% error rate.

Looking at the actual values, few of them seem to be due to minor errors in values, while most of them seem to be from large input area.
```task run continue
node(incorrect & INDEX < 400) array(basin_area, sum(inputs.temp_ba))
```
This could be due to the error in snapping to the streamlines. It is also possible that some basin area that are missing are contributing to the unaccounted area.
 
Let's try to fix them, or avoid points without data.
```task run continue
node.all_inputs_ba = all(inputs.basin_area?);
node.incorrect = basin_area? & all_inputs_ba & (
	basin_area < (0.975 * sum(inputs.basin_area))
);
network count(nodes.incorrect)
network count(nodes.incorrect) / count()
```
Looks like 7.5% of the errors are reasonable errors from network detection.

```task run continue
network count(nodes.incorrect & nodes.is_usgs)
network count(nodes.incorrect & nodes.is_dam)
```
This shows that the majority of the errors come from the NID dams, which makes sense given the `GageLoc.shp` data has points indexed to the NHDPlus streamlines, while the NID Dams are not indexed to it. Furthermore, looking at the attributes in QGIS shows, many dams are in locations without streamlines, and even then sometimes they have unusually large basin area values for their location.

## Export to GIS for visualization
We can export this result to a GIS file and look into individual cases in QGIS.

```task run continue
network gis_save_nodes(
    "output/ohio-gages-check.gpkg",
	"GEOM",
	{
		NAME="String",
		is_usgs="String",
		incorrect="String",
		basin_area="Float"
	}
)
```
We also need connection information to cross reference, let's make them through some string manipulation. NADI GIS plugin uses WKT format for geometries, which are string values, so we can manipulate them using string functions.

Note: we should probably add a function for this in future. A WKT plugin to work with geometries.
```task run continue
node.xy_coords = str_find_all(node.GEOM, "-?[0-9]+[.][0-9]+");
node(output._?).out_coords = str_find_all(output.GEOM, "-?[0-9]+[.][0-9]+");
node(! output._?).conn_geom = GEOM
node(output._?).conn_geom = env.render(
	"LINESTRING ({_x1} {_y1}, {_x2} {_y2})",
	x1=get(node.xy_coords, 0),
	y1=get(node.xy_coords, 1),
	x2=get(node.out_coords, 0),
	y2=get(node.out_coords, 1)
)
node(output._? & (INDEX < 10)).conn_geom

network gis_save_connections("output/ohio-conn-all.gpkg", "conn_geom")
```

When we visualize the output in QGIS, we can see the nodes where the `basin_area` are not correct based on the network information.

![Correctness in QGIS](../images/ohio-correctness-qgis.png)

The zoomed in images at the bottom shows some of the reasons:
- [left] Incorrect Data in database (I think the dam coordinates are wrong on the blue dot with 277 basin area),
- [middle & right] Not enough streamlines for smaller details, and
- Nearest river detection algorithm problem from not considering river width.

The example for the last problem can be seen in the [Video demostration for NADI QGIS Plugin](https://youtu.be/PIGoVnXb7ck?t=770).
