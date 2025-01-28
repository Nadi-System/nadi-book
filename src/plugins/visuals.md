# Network Functions
## set_nodesize_attrs {#network.set_nodesize_attrs}
```sig
network visuals.set_nodesize_attrs(
    attr: 'String',
    default: 'Option < f64 >',
    minsize: 'f64' = 4.0,
    maxsize: 'f64' = 12.0
)
```

### Arguments
- `attr: 'String'` => Attribute to use for size scaling
- `default: 'Option < f64 >'` => default value of the attribute if not found
- `minsize: 'f64' = 4.0` => minimum size of the node
- `maxsize: 'f64' = 12.0` => maximum size of the node

Set the node size of the nodes based on the attribute value
