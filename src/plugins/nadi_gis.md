# Network Functions
## gis_load_attrs {#network.gis_load_attrs}
```sig
network nadi_gis.gis_load_attrs (
    file:'PathBuf',
    node:'String',
    layer:'Option<String>',
    geometry:'String'="GEOM",
    ignore:'String'="",
    sanitize:'bool'=true,
    err_no_node:'bool'=false
)
```

Load node attributes from a GIS file
## gis_save_connections {#network.gis_save_connections}
```sig
network nadi_gis.gis_save_connections (
    file:'PathBuf',
    geometry:'String',
    driver:'Option<String>',
    layer:'String'="network"
)
```

Save GIS file of the connections
## gis_save_nodes {#network.gis_save_nodes}
```sig
network nadi_gis.gis_save_nodes (
    file:'PathBuf',
    geometry:'String',
    attrs:'HashMap<String,
    String>'={},
    driver:'Option<String>',
    layer:'String'="nodes"
)
```

Save GIS file of the nodes
