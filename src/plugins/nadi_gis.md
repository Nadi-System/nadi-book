# Network Functions
## gis_load_attrs {#network.gis_load_attrs}
```sig
network nadi_gis.gis_load_attrs(
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
network nadi_gis.gis_save_connections(
    file: 'PathBuf',
    geometry: 'String',
    driver: 'Option < String >',
    layer: 'String' = "network"
)
```

### Arguments
- `file: 'PathBuf'` => 
- `geometry: 'String'` => 
- `driver: 'Option < String >'` => 
- `layer: 'String' = "network"` => 

Save GIS file of the connections
## gis_save_nodes {#network.gis_save_nodes}
```sig
network nadi_gis.gis_save_nodes(
    file: 'PathBuf',
    geometry: 'String',
    attrs: 'HashMap < String, String >' = {},
    driver: 'Option < String >',
    layer: 'String' = "nodes"
)
```

### Arguments
- `file: 'PathBuf'` => 
- `geometry: 'String'` => 
- `attrs: 'HashMap < String, String >' = {}` => 
- `driver: 'Option < String >'` => 
- `layer: 'String' = "nodes"` => 

Save GIS file of the nodes
