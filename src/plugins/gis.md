# Env Functions
## layers {#env.layers}
```sig
env gis.layers(file: 'PathBuf')
```

**Arguments:**
- `file: 'PathBuf'` => Path to the GIS file

Show the layers of the GIS file as a list
## fields {#env.fields}
```sig
env gis.fields(file: 'PathBuf', layer: 'Option < String >')
```

**Arguments:**
- `file: 'PathBuf'` => Path to the GIS file
- `layer: 'Option < String >'` => Layer of the file, if not given defaults to the first layer

Show the fields in the GIS file layer as a list
## features_count {#env.features_count}
```sig
env gis.features_count(file: 'PathBuf', layer: 'Option < String >')
```

**Arguments:**
- `file: 'PathBuf'` => Path to the GIS file
- `layer: 'Option < String >'` => Layer of the file, if not given defaults to the first layer

Show the fields in the GIS file layer as a list
## values {#env.values}
```sig
env gis.values(
    file: 'PathBuf',
    layer: 'Option < String >',
    feature: 'u64' = 0,
    sanitize: 'bool' = false
)
```

**Arguments:**
- `file: 'PathBuf'` => Path to the GIS file
- `layer: 'Option < String >'` => Layer of the file, if not given defaults to the first layer
- `feature: 'u64' = 0` => Feature to get the attribute values from
- `sanitize: 'bool' = false` => Sanitize the key

Returns the values from a feature in a GIS file from its index
## line {#env.line}
```sig
env gis.line(*points)
```

**Arguments:**
- `*points` => list of points/geometries to join (takes first point only)

Show the layers of the GIS file as a list
# Network Functions
## load_network {#network.load_network}
```sig
network gis.load_network(
    file: 'PathBuf',
    source: 'String',
    destination: 'String',
    layer: 'Option < String >',
    ignore_null: 'bool' = false,
    force: 'bool' = false
)
```

**Arguments:**
- `file: 'PathBuf'` => GIS file to load (can be any format GDAL can understand)
- `source: 'String'` => Field in the GIS file corresponding to the input node name
- `destination: 'String'` => layer of the GIS file corresponding to the output node name
- `layer: 'Option < String >'` => layer of the GIS file, first one picked by default
- `ignore_null: 'bool' = false` => Ignore feature if it has fields with null value
- `force: 'bool' = false` => Force overwrite the output if already present

Load network from a GIS file

Loads the network from a gis file containing the edges in fields
## load_attrs {#network.load_attrs}
```sig
network gis.load_attrs(
    file: 'PathBuf',
    node: 'String',
    layer: 'Option < String >',
    geometry: 'String' = "GEOM",
    ignore: 'String' = "",
    sanitize: 'bool' = true,
    err_no_node: 'bool' = false
)
```

**Arguments:**
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
## save_connections {#network.save_connections}
```sig
network gis.save_connections(
    file: 'PathBuf',
    geometry: 'String',
    driver: 'Option < String >',
    layer: 'String' = "network",
    filter: 'Option < Vec < bool > >'
)
```

**Arguments:**
- `file: 'PathBuf'` => 
- `geometry: 'String'` => 
- `driver: 'Option < String >'` => 
- `layer: 'String' = "network"` => 
- `filter: 'Option < Vec < bool > >'` => 

Save GIS file of the connections
## save_nodes {#network.save_nodes}
```sig
network gis.save_nodes(
    file: 'PathBuf',
    geometry: 'String',
    fields: 'HashMap < String, String >' = {},
    driver: 'Option < String >',
    layer: 'String' = "nodes",
    filter: 'Option < Vec < bool > >'
)
```

**Arguments:**
- `file: 'PathBuf'` => 
- `geometry: 'String'` => 
- `fields: 'HashMap < String, String >' = {}` => 
- `driver: 'Option < String >'` => 
- `layer: 'String' = "nodes"` => 
- `filter: 'Option < Vec < bool > >'` => 

Save GIS file of the nodes
