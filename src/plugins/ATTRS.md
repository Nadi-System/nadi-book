# Env Functions
## none {#env.none}
```sig
env ATTRS.none()
```

**Arguments:**


None function that returns None
## is_none {#env.is_none}
```sig
env ATTRS.is_none(inp: 'Option < FunctionInput >')
```

**Arguments:**
- `inp: 'Option < FunctionInput >'` => 

check for none value

```task
assert_eq(is_none(none()), true)
```
## strmap {#env.strmap}
```sig
env ATTRS.strmap(
    attr: 'String',
    attrmap: '& AttrMap',
    default: 'Option < Attribute >'
)
```

**Arguments:**
- `attr: 'String'` => Value to transform the attribute
- `attrmap: '& AttrMap'` => Dictionary of key=value to map the data to
- `default: 'Option < Attribute >'` => Default value if key not found in `attrmap`

map values from the attribute based on the given table

```task
env.val = strmap("Joe", {Dave = 2, Joe = 20});
env assert_eq(val, 20)
env.val2 = strmap("Joe", {Dave=2}, default = 12);
env assert_eq(val2, 12)
```
## parse_attr {#env.parse_attr}
```sig
env ATTRS.parse_attr(toml: '& str')
```

**Arguments:**
- `toml: '& str'` => String to parse into attribute

Parse attribute from string

```task
env assert_eq(parse_attr("true"), true)
env assert_eq(parse_attr("123"), 123)
env assert_eq(parse_attr("12.34"), 12.34)
env assert_eq(parse_attr("\"my value\""), "my value")
env assert_eq(parse_attr("1234-12-12 00:00"), 1234-12-12T00:00)
```
## parse_attrmap {#env.parse_attrmap}
```sig
env ATTRS.parse_attrmap(toml: 'String')
```

**Arguments:**
- `toml: 'String'` => String to parse into attribute

Parse attribute map from string

```task
env assert_eq(parse_attrmap("y = true"), {y = true})
env assert_eq(parse_attrmap(
"x = [1234, true]"),
{x = [1234, true]}
)
```
## keys {#env.keys}
```sig
env ATTRS.keys(attrmap: 'AttrMap')
```

**Arguments:**
- `attrmap: 'AttrMap'` => 

keys of the attribute map
## values {#env.values}
```sig
env ATTRS.values(attrmap: 'AttrMap')
```

**Arguments:**
- `attrmap: 'AttrMap'` => 

values of the attribute map
## get {#env.get}
```sig
env ATTRS.get(
    parent: 'Attribute',
    index: 'Attribute',
    default: 'Option < Attribute >'
)
```

**Arguments:**
- `parent: 'Attribute'` => Array or AttrMap Attribute to index
- `index: 'Attribute'` => Index value (Integer for Array, String for AttrMap)
- `default: 'Option < Attribute >'` => Default value if the index is not present

get the choosen attribute from Array or AttrMap

```task
env.some_ar = ["this", 12, true];
env.some_am = {x = "this", y = [12, true]};
env assert_eq(get(some_ar, 0), "this")
env assert_eq(get(some_ar, 2), true)
env assert_eq(get(some_am, "x"), "this")
env assert_eq(get(some_am, "y"), [12, true])
```
## float_div {#env.float_div}
```sig
env ATTRS.float_div(value1: 'f64', value2: 'f64')
```

**Arguments:**
- `value1: 'f64'` => numerator
- `value2: 'f64'` => denominator

Float Division (same as / operator)

```task
env assert_eq(float_div(10.0, 2), 10.0 / 2)
```
## float_mult {#env.float_mult}
```sig
env ATTRS.float_mult(value1: 'f64', value2: 'f64')
```

**Arguments:**
- `value1: 'f64'` => numerator
- `value2: 'f64'` => denominator

Float Multiplication (same as * operator)

```task
env assert_eq(float_mult(5.0, 2), 5.0 * 2)
```
# Node Functions
## load_attrs {#node.load_attrs}
```sig
node ATTRS.load_attrs(filename: 'PathBuf')
```

**Arguments:**
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
node ATTRS.print_all_attrs()
```

**Arguments:**


Print all attrs in a node

No arguments and no errors, it'll just print all the attributes in a node with
`node::attr=val` format, where,
- node is node name
- attr is attribute name
- val is attribute value (string representation)

## print_attrs {#node.print_attrs}
```sig
node ATTRS.print_attrs(*attrs, name: 'bool' = false)
```

**Arguments:**
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
node ATTRS.set_attrs(**attrs)
```

**Arguments:**
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
network load_str("A -> B\n B -> D");
nodes[A -> D] set_attrs(a2d = true)
```
This is equivalent to the following:
```task
nodes[A->D].a2d = true;
```
## del_attrs {#node.del_attrs}
```sig
node ATTRS.del_attrs(delete: 'Vec < String >')
```

**Arguments:**
- `delete: 'Vec < String >'` => the attributes to delete

Delete attributes from the given node

```task
network load_str("a -> b");
nodes set_attrs(val = true);
node[a] del_attrs(["val"]);
node[a] assert_eq(val?, false)
node[b] assert_eq(val?, true)
```
## get_attr {#node.get_attr}
```sig
node ATTRS.get_attr(attr: '& str', default: 'Option < Attribute >')
```

**Arguments:**
- `attr: '& str'` => Name of the attribute to get
- `default: 'Option < Attribute >'` => Default value if the attribute is not found

Retrive attribute

```task
network load_str("A -> B\n B -> D");
nodes assert_eq(get_attr("NAME"), NAME);
```
## get_attrs {#node.get_attrs}
```sig
node ATTRS.get_attrs(*attr_names)
```

**Arguments:**
- `*attr_names` => Name of the attribute to get

Retrive multiple attributes

```task
network load_str("A -> B\n B -> D");
nodes assert_eq(get_attrs("NAME"), array(NAME));
nodes assert_eq(get_attrs("NAME", "ORDER"), array(NAME, ORDER));
```
## has_attr {#node.has_attr}
```sig
node ATTRS.has_attr(attr: '& str')
```

**Arguments:**
- `attr: '& str'` => Name of the attribute to check

Check if the attribute is present

```task
network load_str("A -> B\n B -> D");
nodes.x = 90;
nodes assert(has_attr("x"))
nodes assert(!has_attr("y"))
```
## first_attr {#node.first_attr}
```sig
node ATTRS.first_attr(attrs: 'Vec < RString >', default: 'Option < Attribute >')
```

**Arguments:**
- `attrs: 'Vec < RString >'` => attribute names
- `default: 'Option < Attribute >'` => Default value if not found

Return the first Attribute that exists

This is useful when you have a bunch of attributes that might
be equivalent but are using different names. Normally due to
them being combined from different datasets.

```task
network load_str("A -> B\n B -> D");
nodes.x = 90;
nodes assert_eq(first_attr(["y", "x"]), 90)
nodes assert_eq(first_attr(["x", "NAME"]), 90)
```
## set_attrs_ifelse {#node.set_attrs_ifelse}
```sig
node ATTRS.set_attrs_ifelse(cond: 'bool', **values)
```

**Arguments:**
- `cond: 'bool'` => Condition to check
- `**values` => key = [val1, val2] where key is set as first if `cond` is true else second

if else condition with multiple attributes

```task
network load_str("a -> b");
env.some_condition = true;
nodes set_attrs_ifelse(
env.some_condition,
val1 = [1, 2],
val2 = ["a", "b"]
);
env assert_eq(nodes.val1, [1, 1])
env assert_eq(nodes.val2, ["a", "a"])
```
This is equivalent to using the if-else expression directly,

```task
nodes.val1 = if (env.some_condition) {1} else {2};
env assert_eq(nodes.val1, [1, 1])
```

Furthermore if-else expression will give a lot more
flexibility than this function in normal use cases. But this
function is useful when you have to do something in a batch.
## set_attrs_render {#node.set_attrs_render}
```sig
node ATTRS.set_attrs_render(**values)
```

**Arguments:**
- `**values` => key value pair of attribute to set and the Template to render

Set node attributes based on string templates

This renders the template for each node, then it sets the
values from the rendered results.

```task
network load_str("a -> b");
nodes set_attrs_render(val1 = "Node: {NAME}");
node[a] assert_eq(val1, "Node: a")
```
## load_toml_render {#node.load_toml_render}
```sig
node ATTRS.load_toml_render(toml: 'Template', echo: 'bool' = false)
```

**Arguments:**
- `toml: 'Template'` => String template to render and load as toml string
- `echo: 'bool' = false` => Print the rendered toml or not

Set node attributes by loading a toml from rendered template

This function will render a string, and loads it as a toml
string. This is useful when you need to make attributes based
on some other variables that you can combine using the string
template system.

In most cases it is better to use the string manipulation
functions and other environmental functions to get new
attribute values to set.

```task
network load_str("a -> b");
nodes load_toml_render("label = \"Node: {NAME}\"")
nodes assert_eq(label, render("Node: {NAME}"))
```
# Network Functions
## set_attrs {#network.set_attrs}
```sig
network ATTRS.set_attrs(**values)
```

**Arguments:**
- `**values` => key value pair of attributes to set

Set network attributes

### Arguments
- `key=value` - Kwargs of attr = value

```task
network set_attrs(val = 23.4)
network assert_eq(val, 23.4)
```
## set_node_attrs {#network.set_node_attrs}
```sig
network ATTRS.set_node_attrs(attr_name: '& str', node_values: 'TableOrArray')
```

**Arguments:**
- `attr_name: '& str'` => Name of the attribute to set,
- `node_values: 'TableOrArray'` => array or a key value pair of attributes to set (key = node name)

Set node attributes in a network using a attrmap or array

Currenly you can only set all nodes using array, if you want
to set a subset of the nodes, use the attrmap option.

```task
network load_str("a -> b")
network set_node_attrs("val", {a = 23.4})
network assert_eq(node[a].val, 23.4)
network set_node_attrs("val", [2, 4])
network assert_eq(nodes.val, [2, 4])
```
## set_attrs_render {#network.set_attrs_render}
```sig
network ATTRS.set_attrs_render(**kwargs)
```

**Arguments:**
- `**kwargs` => Kwargs of attr = String template to render

Set network attributes based on string templates

It will set the attribute as a String

```task
network.val = 23.4
network set_attrs_render(val2 = "{val}05")
network assert_eq(val2, "23.405")
```
## nodemap {#network.nodemap}
```sig
network ATTRS.nodemap(
    attr: 'String',
    filter: 'Option < Vec < bool > >',
    safe: 'bool' = false
)
```

**Arguments:**
- `attr: 'String'` => attribute to be the value of the attrmap
- `filter: 'Option < Vec < bool > >'` => Only include these nodes
- `safe: 'bool' = false` => Exclude nodes if they do not have the attribute

Generate attribute map for the given attribute for the nodes
