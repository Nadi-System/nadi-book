# Network Functions
## set_nodesize_attrs {#network.set_nodesize_attrs}
```sig
network visuals.set_nodesize_attrs(
    attrs: '& [f64]',
    minsize: 'f64' = 4.0,
    maxsize: 'f64' = 12.0
)
```

### Arguments
- `attrs: '& [f64]'` => Attribute values to use for size scaling
- `minsize: 'f64' = 4.0` => minimum size of the node
- `maxsize: 'f64' = 12.0` => maximum size of the node

Set the node size of the nodes based on the attribute value
## svg_save {#network.svg_save}
```sig
network visuals.svg_save(
    outfile: '& Path',
    label: 'Template' = Template { original: "{_NAME}", parts: [Var("_NAME", "")] },
    x_spacing: 'u64' = 25,
    y_spacing: 'u64' = 25,
    offset: 'u64' = 10,
    twidth: 'f64' = 9.0,
    width: 'u64' = 500,
    height: 'u64' = 240,
    bgcolor: 'Option < String >',
    page_width: 'Option < u64 >',
    page_height: 'Option < u64 >'
)
```

### Arguments
- `outfile: '& Path'` => 
- `label: 'Template' = Template { original: "{_NAME}", parts: [Var("_NAME", "")] }` => 
- `x_spacing: 'u64' = 25` => 
- `y_spacing: 'u64' = 25` => 
- `offset: 'u64' = 10` => 
- `twidth: 'f64' = 9.0` => in average how many units each text character takes

For auto calculating width of the page since we don't have Cairo
- `width: 'u64' = 500` => 
- `height: 'u64' = 240` => 
- `bgcolor: 'Option < String >'` => 
- `page_width: 'Option < u64 >'` => 
- `page_height: 'Option < u64 >'` => 

Exports the network as a svg
