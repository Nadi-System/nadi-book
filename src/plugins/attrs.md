# Node Functions
## load_attrs {#node.load_attrs}
```sig
node attrs.load_attrs(filename)
```

Loads attrs from file for all nodes based on the given template

### Arguments
- `filename`: Template for the filename to load node attributes from

The template will be rendered for each node, and that filename from the
rendered template will be used to load the attributes.

### Errors
The function will error out in following conditions:
- Template for filename is not given,
- The template couldn't be rendered,
- There was error loading attributes from the file.

## print_all_attrs {#node.print_all_attrs}
```sig
node attrs.print_all_attrs()
```

Print all attrs in a node

No arguments and no errors, it'll just print all the attributes in a node with
`node::attr=val` format, where,
- node is node name
- attr is attribute name
- val is attribute value (string representation)

## print_attrs {#node.print_attrs}
```sig
node attrs.print_attrs(*args, name: 'bool')
```

Print the given node attributes if present

### Arguments
- attrs,... : list of attributes to print
- name: Bool for whether to show the node name or not

### Error
The function will error if
- list of arguments are not `String`
- the `name` argument is not Boolean

The attributes will be printed in `key=val` format.
## set_attrs {#node.set_attrs}
```sig
node attrs.set_attrs(**kwargs)
```

Set node attributes

Use this function to set the node attributes of all nodes, or
a select few nodes using the node selection methods (path or
list of nodes)

### Arguments
- `key=value` - Kwargs of attr = value

### Error
The function should not error.

### Example
Following will set the attribute `a2d` to `true` for all nodes
from `A` to `D`

```task
node[A -> D] set_attrs(a2d = true)
```
## set_attrs_render {#node.set_attrs_render}
```sig
node attrs.set_attrs_render(**kwargs)
```

Set node attributes based on string templates

### Arguments
- `attr=template` - Kwargs of attr = String template to render
# Network Functions
## set_attrs {#network.set_attrs}
```sig
network attrs.set_attrs(**kwargs)
```

Set network attributes

### Arguments
- `key=value` - Kwargs of attr = value
## set_attrs_render {#network.set_attrs_render}
```sig
network attrs.set_attrs_render(**kwargs)
```

Set network attributes based on string templates

### Arguments
- `attr=template` - Kwargs of attr = String template to render
