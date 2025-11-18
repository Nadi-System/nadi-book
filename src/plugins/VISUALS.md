# Env Functions
## svg_settings {#env.svg_settings}
```sig
env VISUALS.svg_settings(
    top: 'f64' = 40.0,
    left: 'f64' = 10.0,
    right: 'f64' = 30.0,
    bottom: 'f64' = 10.0,
    deltax: 'f64' = 10.0,
    deltay: 'f64' = 10.0,
    fontsize: 'f64' = 8.0
)
```

**Arguments:**
- `top: 'f64' = 40.0` => 
- `left: 'f64' = 10.0` => 
- `right: 'f64' = 30.0` => 
- `bottom: 'f64' = 10.0` => 
- `deltax: 'f64' = 10.0` => 
- `deltay: 'f64' = 10.0` => 
- `fontsize: 'f64' = 8.0` => 

Generate the margins for the SVGs
# Network Functions
## set_nodesize_attrs {#network.set_nodesize_attrs}
```sig
network VISUALS.set_nodesize_attrs(
    attrs: '& [f64]',
    minsize: 'f64' = 4.0,
    maxsize: 'f64' = 12.0
)
```

**Arguments:**
- `attrs: '& [f64]'` => Attribute values to use for size scaling
- `minsize: 'f64' = 4.0` => minimum size of the node
- `maxsize: 'f64' = 12.0` => maximum size of the node

Set the node size of the nodes based on the attribute value
## svg_save {#network.svg_save}
```sig
network VISUALS.svg_save(
    outfile: '& Path',
    label: 'Template' = Template { parts: [Variable(TemplateVar { name: "NAME", optional: false, format: None })], positions: [1], original: "{NAME}" },
    width: 'Option < f64 >',
    height: 'Option < f64 >',
    bgcolor: 'Option < String >',
    settings: 'Settings' = Settings { top: 40.0, bottom: 10.0, right: 30.0, left: 10.0, deltax: 10.0, deltay: 10.0, fontsize: 8.0 }
)
```

**Arguments:**
- `outfile: '& Path'` => 
- `label: 'Template' = Template { parts: [Variable(TemplateVar { name: "NAME", optional: false, format: None })], positions: [1], original: "{NAME}" }` => 
- `width: 'Option < f64 >'` => 
- `height: 'Option < f64 >'` => 
- `bgcolor: 'Option < String >'` => 
- `settings: 'Settings' = Settings { top: 40.0, bottom: 10.0, right: 30.0, left: 10.0, deltax: 10.0, deltay: 10.0, fontsize: 8.0 }` => 

Exports the network as a svg
## svg_ts_blocks {#network.svg_ts_blocks}
```sig
network VISUALS.svg_ts_blocks(
    outfile: '& Path',
    label: 'Template',
    ts_name: 'String',
    width: 'f64',
    arr_width: 'f64',
    bgcolor: 'Option < String >',
    settings: 'Settings' = Settings { top: 40.0, bottom: 10.0, right: 30.0, left: 10.0, deltax: 10.0, deltay: 10.0, fontsize: 8.0 }
)
```

**Arguments:**
- `outfile: '& Path'` => Output SVG file
- `label: 'Template'` => label to put for nodes
- `ts_name: 'String'` => Name of the timeseries
- `width: 'f64'` => Width of the SVG
- `arr_width: 'f64'` => width of the arrows
- `bgcolor: 'Option < String >'` => Background color
- `settings: 'Settings' = Settings { top: 40.0, bottom: 10.0, right: 30.0, left: 10.0, deltax: 10.0, deltay: 10.0, fontsize: 8.0 }` => 


