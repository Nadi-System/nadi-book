# Import Export Files

Similar to how you can load network files, you can load attributes from files as well. Direct load of TOML format is supported from the internal plugins, while you might need external plugins for other formats.

`load_attrs` function takes a template, and reads a different files for each node to load the attributes from.
```task run image ../output/ohio-import-export.svg
network load_file("data/ohio.network")
node attributes.load_attrs("data/attrs/{_NAME}.toml")
network svg_save(
!  "output/ohio-import-export.svg",
  label="{_NAME} (A = {basin_area?:f(2)})",
!  height=700,
  bgcolor="gray"
)
```

You can use the render function to see if the files being loaded are correct. Here we can see the examples for the first 4 nodes:
```task run
!network load_file("data/ohio.network")
node(INDEX<4) render("data/attrs/{_NAME}.toml")
```

You can also read a attributes from string, so you can combine that with `files.from_file` and load it.

```task run
network load_file("data/ohio.network")
env.somevalue = attributes.parse_attrmap(
	files.from_file("data/attrs/smithland.toml")
);
env.somevalue.basin_area
env.somevalue.length
```

You can export csv files
```task run
network load_file("data/ohio.network")
node attributes.load_attrs("data/attrs/{_NAME}.toml")
network table.save_csv("output/ohio-export.csv", ["NAME", "basin_area", "length"])
network command("cat output/ohio-export.csv | head", echo=true)
```

## GIS Files
<div class="warning">
The examples below require the `gis` external plugin from `nadi-gis` repository to work. Make sure you have the plugin file in the directory in your `NADI_PLUGIN_DIRS` environmental variable.
</div>

First we make a GIS file by exporting. The image below shows the resulting points (red) from the shapefile and connections (black) from the Geopackage file when we visualize this on QGIS (with background of Terrain and Ohio River tributaries).

```task run image ../images/ohio-nodes.png
network load_file("data/ohio.network")
node attributes.load_attrs("data/attrs/{_NAME}.toml")
node.geometry = render("POINT ({lon} {lat})");
network gis.gis_save_nodes(
  "output/ohio-nodes.shp",
  "geometry",
  {
    NAME = "String",
	basin_area = "Float",
	length = "Float"
  }
)
# Exporting the edges
network gis.gis_save_connections(
  "output/ohio-connections.gpkg",
  "geometry"
)
```

The geometry attributes should be [WKT String](https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry).
<!-- node(output._?).out_lon = output.lon; -->
<!-- node(output._?).out_lat = output.lat; -->
<!-- node(output._?).edge_geom = render("LINESTRING ({lon} {lat}, {out_lon} {out_lat})"); -->

Now we are using the generated GIS files to load the network and the attributes:

```task run image ../output/ohio-from-gis.svg
network gis.gis_load_network("output/ohio-connections.gpkg", "start", "end")
network gis.gis_load_attrs("output/ohio-nodes.shp", "NAME")

network svg_save(
!  "output/ohio-from-gis.svg",
  label="{_NAME} (A = {basin_area?:f(2)}; L = {length:f(1)})",
!  height=700,
  bgcolor="gray"
)
```

As we can see the plugins make it easier to interoperate with a lot of different data formats. Here GIS plugin will support any file types supported by `gdal`. Similarly, other formats can be supported by writing plugins.
