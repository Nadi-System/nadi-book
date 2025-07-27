# Counting Ohio Dams

In the previous example we validated the network using basin_area. You can also use other properties like river mile to validate the network connection. Or to validate the metadata.

In this example, we'll be assuming there are some errors and continue with our analysis. Because the errors are mostly in the placement of dams, the count of dam upstream of a gage is still the same. For example:

If our network is:
```network
gage1 -> dam1
dam1 -> gage2
```
instead of:
```network
gage1 -> gage2
dam1 -> gage2
```
For both gage, number of dams upstream (or the first dam construction year upstead) is still the same, even though there is error on the same calculation in the dam.

## Load Network and Attributes
First load the network
```task run
network load_file("data/ohio-river/ohio.network")
network count()
network outlet()
```

## Identify Dams and Gages
Since we need a quick and easy way to identify USGS gage and NID dam, we use regex to categorize them.

```task run continue
node.is_usgs = NAME match "^[0-9]+";
node.is_dam = !is_usgs;
network count(nodes.is_usgs)
network count(nodes.is_dam)
```

## Count Dams/Gages Upstream
Now we simply count the number of dams and gages upstream recursively. We run it inputs first, so that the count begins with leaf nodes where we get 1 for the category we're counting and 0 otherwise, then we propagate that value downstream.

```task run continue
node<inp>.ngage = int(is_usgs) + sum(inputs.ngage);
node<inp>.ndam = int(!is_usgs) + sum(inputs.ndam);

node(INDEX < 10) array(ngage, ndam)
```
If we run this code without the `inputsfirst`/`inp` propagation, we get an error because the node's `inputs` will not have `ngage` and `ndam` values.

The counting is done, super simple right? NADI's ability to work with networks mean that some things are super simple compared to other languages.

## GIS Visualization
Again, if we use `nadi-gis` plugin, then we can export this result and visualize it in QGIS.

```task
network gis_save_nodes(
	"output/ohio-gages-count.gpkg",
	"GEOM",
	{
		NAME="String",
		is_usgs="String",
		ndam="Integer",
		ngage="Integer"
	}
)
```
After applying some filters and styles in QGIS, we can look at the numbers visually,

![Gage/Dam Count](../images/counts-combined.png)

## Extra: Counting Large Dams
The definition of large dam: https://www.icold-cigb.org/GB/dams/definition_of_a_large_dam.asp

- height of more than 15 meters,
- height between 5m and 15m impounding more than 3 million cubic meters.

Converting them to imperial units we get:

| Metric     | Imperial         |
|------------|------------------|
| 15m        | 49.21ft          |
| 5m         | 16.40ft          |
| 3 x 10⁶ m³ | 810.71 acre feet |

Now, we need to load the dam attributes from NID database.

<!-- And extract the dam height, the database has different dam heights, and not all of them have everything available, so let's try our best by prioritizing different variables. -->

```task run continue
network gis_load_attrs("data/ohio-river/nid-uniq.gpkg", "nidId")
node(is_dam).dam_height = float(nidHeight);
node(is_dam).dam_storage = float(nidStorage);

network count(nodes.is_dam)
network count(nodes.dam_height? & nodes.dam_storage?)
node(is_dam & (INDEX < 10)) array(dam_height, dam_storage)
```
Lot's of basins do not have basin area.

First, using the previous requirements for large dams:

```task run continue
node.large_dam = is_dam & ((dam_height > 49) | ((dam_height > 16) & (dam_storage > 811)));
network count(nodes.large_dam)
network count(nodes.large_dam) / count(nodes.is_dam)
```

This will allow us to run the same counting as before:

```task run continue
node<inp>.nldam = int(large_dam) + sum(inputs.nldam);
node(INDEX < 10) array(ndam, nldam)
```

Although not obivious, the numbers were quite large, so when I inspected the NID data, some dams seem to have very high height values that do not match.

Let's load basin area and flag any locations with more than 50ft of dam height, and less than 10 square miles of basin area.

```task run continue
node(is_dam & drainageArea?).basin_area = float(drainageArea);
network count(nodes.basin_area?)
node(! basin_area?).basin_area = nan;

node.flag = large_dam & ((dam_height > 50) & (basin_area < 10));
network count(nodes.flag)
node(flag & (INDEX < 1000)) array(dam_height, dam_storage, basin_area)
```

We don't have all basin areas, but from this we flagged around 300 dams. Looking at the values, `IL50678` basically says it has a dam with height of 110, but basin area of 0.1, which seems very unreasonable. To remove these from our identification process, let's add another category.

```task run continue
node.large_dam = is_dam & (((dam_height > 49) | ((dam_height > 16) & (dam_storage > 811))) & (basin_area > 10));
network count(nodes.large_dam)
network count(nodes.large_dam) / count(nodes.is_dam)
```

The number of dams that are now categorized as large dams have been reduced significantly.

## Extra: Looking at Main Stem of the River

Let's look at the values along the main stem. `LEVEL == 0` means the mainstem of the network.

```task run continue
node(LEVEL==0) array(ngage, ndam, nldam)
```

If you want to be more accurate, we can load the `SiteName` from GIS file and match the node with "Ohio River" in its name with the lowest order to find the first Ohio River Node.
