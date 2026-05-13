# Env Functions
## image {#env.image}
```sig
env VISUALS.image(path: 'RString')
```

**Arguments:**
- `path: 'RString'` => 


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
## svg_open {#env.svg_open}
```sig
env VISUALS.svg_open(path: 'RString')
```

**Arguments:**
- `path: 'RString'` => 


## svg_open_multi {#env.svg_open_multi}
```sig
env VISUALS.svg_open_multi(paths: 'RVec < RString >')
```

**Arguments:**
- `paths: 'RVec < RString >'` => 


# Node Functions
## set_xy {#node.set_xy}
```sig
node VISUALS.set_xy(x: 'f64', y: 'f64')
```

**Arguments:**
- `x: 'f64'` => 
- `y: 'f64'` => 


## get_xy {#node.get_xy}
```sig
node VISUALS.get_xy()
```

**Arguments:**



# Network Functions
## flatten {#network.flatten}
```sig
network VISUALS.flatten()
```

**Arguments:**



## set_nodesize_attrs {#network.set_nodesize_attrs}
```sig
network VISUALS.set_nodesize_attrs(
    attrs: 'Vec < f64 >',
    minsize: 'f64' = 4.0,
    maxsize: 'f64' = 12.0
)
```

**Arguments:**
- `attrs: 'Vec < f64 >'` => Attribute values to use for size scaling
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


