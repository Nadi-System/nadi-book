# Env Functions
## strmap {#env.strmap}
```sig
env attributes.strmap(
    attr: '& str',
    attrmap: '& AttrMap',
    default: 'Option < Attribute >'
)
```

### Arguments
- `attr: '& str'` => Value to transform the attribute
- `attrmap: '& AttrMap'` => Dictionary of key=value to map the data to
- `default: 'Option < Attribute >'` => Default value if key not found in `attrmap`

map values from the attribute based on the given table
## parse_attr {#env.parse_attr}
```sig
env attributes.parse_attr(toml: '& str')
```

### Arguments
- `toml: '& str'` => String to parse into attribute

Set node attributes based on string templates
## parse_attrmap {#env.parse_attrmap}
```sig
env attributes.parse_attrmap(toml: 'String')
```

### Arguments
- `toml: 'String'` => String to parse into attribute

Set node attributes based on string templates
## float_transform {#env.float_transform}
```sig
env attributes.float_transform(value: 'f64', transformation: '& str')
```

### Arguments
- `value: 'f64'` => value to transform
- `transformation: '& str'` => transformation function, can be one of log/log10/sqrt

map values from the attribute based on the given table
## float_div {#env.float_div}
```sig
env attributes.float_div(value1: 'f64', value2: 'f64')
```

### Arguments
- `value1: 'f64'` => numerator
- `value2: 'f64'` => denominator

map values from the attribute based on the given table
## float_mult {#env.float_mult}
```sig
env attributes.float_mult(value1: 'f64', value2: 'f64')
```

### Arguments
- `value1: 'f64'` => numerator
- `value2: 'f64'` => denominator

map values from the attribute based on the given table
# Node Functions
## load_attrs {#node.load_attrs}
```sig
node attributes.load_attrs(filename: 'PathBuf')
```

### Arguments
- `filename: 'PathBuf'` => Template for the filename to load node attributes from

Loads attrs from file for all nodes based on the given template

### Arguments
- `filename`: Template for the filename to load node attributes from
- `verbose`: print verbose message

The template will be rendered for each node, and that filename from the
rendered template will be used to load the attributes.

### Errors
The function will error out in following conditions:
- Template for filename is not given,
- The template couldn't be rendered,
- There was error loading attributes from the file.

## print_all_attrs {#node.print_all_attrs}
```sig
node attributes.print_all_attrs()
```

### Arguments


Print all attrs in a node

No arguments and no errors, it'll just print all the attributes in a node with
`node::attr=val` format, where,
- node is node name
- attr is attribute name
- val is attribute value (string representation)

## print_attrs {#node.print_attrs}
```sig
node attributes.print_attrs(*attrs, name: 'bool' = false)
```

### Arguments
- `*attrs` => 
- `name: 'bool' = false` => 

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
node attributes.set_attrs(**attrs)
```

### Arguments
- `**attrs` => Key value pairs of the attributes to set

Set node attributes

Use this function to set the node attributes of all nodes, or
a select few nodes using the node selection methods (path or
list of nodes)

### Error
The function should not error.

### Example
Following will set the attribute `a2d` to `true` for all nodes
from `A` to `D`

```task
node[A -> D] set_attrs(a2d = true)
```
## get_attr {#node.get_attr}
```sig
node attributes.get_attr(attr: '& str', default: 'Option < Attribute >')
```

### Arguments
- `attr: '& str'` => Name of the attribute to get
- `default: 'Option < Attribute >'` => Default value if the attribute is not found

Retrive attribute
## has_attr {#node.has_attr}
```sig
node attributes.has_attr(attr: '& str')
```

### Arguments
- `attr: '& str'` => Name of the attribute to check

Check if the attribute is present
## first_attr {#node.first_attr}
```sig
node attributes.first_attr(attrs: '& [String]', default: 'Option < Attribute >')
```

### Arguments
- `attrs: '& [String]'` => attribute names
- `default: 'Option < Attribute >'` => Default value if not found

Return the first Attribute that exists
## set_attrs_ifelse {#node.set_attrs_ifelse}
```sig
node attributes.set_attrs_ifelse(cond: 'bool', **values)
```

### Arguments
- `cond: 'bool'` => Condition to check
- `**values` => key = [val1, val2] where key is set as first if `cond` is true else second

if else condition with multiple attributes
## set_attrs_render {#node.set_attrs_render}
```sig
node attributes.set_attrs_render(**kwargs)
```

### Arguments
- `**kwargs` => key value pair of attribute to set and the Template to render

Set node attributes based on string templates
## load_toml_render {#node.load_toml_render}
```sig
node attributes.load_toml_render(toml: '& Template', echo: 'bool' = false)
```

### Arguments
- `toml: '& Template'` => String template to render and load as TOML string
- `echo: 'bool' = false` => Print the rendered toml or not

Set node attributes based on string templates
# Network Functions
## set_attrs {#network.set_attrs}
```sig
network attributes.set_attrs(**attrs)
```

### Arguments
- `**attrs` => key value pair of attributes to set

Set network attributes

### Arguments
- `key=value` - Kwargs of attr = value
## set_attrs_render {#network.set_attrs_render}
```sig
network attributes.set_attrs_render(**kwargs)
```

### Arguments
- `**kwargs` => Kwargs of attr = String template to render

Set network attributes based on string templates
