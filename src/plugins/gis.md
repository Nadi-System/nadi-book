<div class="warning">
This plugin uses gdal to read/write GIS files, it can be compiled easily in Linux and Mac by installing gdal as a prerequisite, but on windows that step might be complicated. Please refer to the documentation of gdal to know how to install it in windows. Or use the provided dlls from the plugin repo.
</div>

# Network Functions
## gis_load_network {#network.gis_load_network}
```sig
network gis.gis_load_network(
    file: 'PathBuf',
    source: 'String',
    destination: 'String',
    layer: 'Option < String >',
    ignore_null: 'bool' = false
)
```

### Arguments
- `file: 'PathBuf'` => GIS file to load (can be any format GDAL can understand)
- `source: 'String'` => Field in the GIS file corresponding to the input node name
- `destination: 'String'` => layer of the GIS file corresponding to the output node name
- `layer: 'Option < String >'` => layer of the GIS file, first one picked by default
- `ignore_null: 'bool' = false` => Ignore feature if it has fields with null value

Load network from a GIS file

Loads the network from a gis file containing the edges in fields
## gis_load_attrs {#network.gis_load_attrs}
```sig
network gis.gis_load_attrs(
    file: 'PathBuf',
    node: 'String',
    layer: 'Option < String >',
    geometry: 'String' = "GEOM",
    ignore: 'String' = "",
    sanitize: 'bool' = true,
    err_no_node: 'bool' = false
)
```

### Arguments
- `file: 'PathBuf'` => GIS file to load (can be any format GDAL can understand)
- `node: 'String'` => Field in the GIS file corresponding to node name
- `layer: 'Option < String >'` => layer of the GIS file, first one picked by default
- `geometry: 'String' = "GEOM"` => Attribute to save the GIS geometry in
- `ignore: 'String' = ""` => Field names separated by comma, to ignore
- `sanitize: 'bool' = true` => sanitize the name of the fields
- `err_no_node: 'bool' = false` => Error if all nodes are not found in the GIS file

Load node attributes from a GIS file

The function reads a GIS file in any format (CSV, GPKG, SHP,
JSON, etc) and loads their fields as attributes to the nodes.
## gis_save_connections {#network.gis_save_connections}
```sig
network gis.gis_save_connections(
    file: 'PathBuf',
    geometry: 'String',
    driver: 'Option < String >',
    layer: 'String' = "network",
    filter: 'Option < Vec < bool > >'
)
```

### Arguments
- `file: 'PathBuf'` => 
- `geometry: 'String'` => 
- `driver: 'Option < String >'` => 
- `layer: 'String' = "network"` => 
- `filter: 'Option < Vec < bool > >'` => 

Save GIS file of the connections
## gis_save_nodes {#network.gis_save_nodes}
```sig
network gis.gis_save_nodes(
    file: 'PathBuf',
    geometry: 'String',
    attrs: 'HashMap < String, String >' = {},
    driver: 'Option < String >',
    layer: 'String' = "nodes",
    filter: 'Option < Vec < bool > >'
)
```

### Arguments
- `file: 'PathBuf'` => 
- `geometry: 'String'` => 
- `attrs: 'HashMap < String, String >' = {}` => 
- `driver: 'Option < String >'` => 
- `layer: 'String' = "nodes"` => 
- `filter: 'Option < Vec < bool > >'` => 

Save GIS file of the nodes
