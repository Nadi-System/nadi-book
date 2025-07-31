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

```task
env.val = strmap("Joe", {Dave = 2, Joe = 20});
env assert_eq(val, 20)
env.val2 = strmap("Joe", {Dave=2}, default = 12);
env assert_eq(val2, 12)
```
## parse_attr {#env.parse_attr}
```sig
env attributes.parse_attr(toml: '& str')
```

### Arguments
- `toml: '& str'` => String to parse into attribute

Parse attribute from string

```task
env assert_eq(parse_attr("true"), true)
env assert_eq(parse_attr("123"), 123)
env assert_eq(parse_attr("12.34"), 12.34)
env assert_eq(parse_attr("\"my value\""), "my value")
env assert_eq(parse_attr("1234-12-12"), 1234-12-12)
```
## parse_attrmap {#env.parse_attrmap}
```sig
env attributes.parse_attrmap(toml: 'String')
```

### Arguments
- `toml: 'String'` => String to parse into attribute

Parse attribute map from string

```task
env assert_eq(parse_attrmap("y = true"), {y = true})
env assert_eq(parse_attrmap(
"x = [1234-12-12, true]"),
{x = [1234-12-12, true]}
)
```
## get {#env.get}
```sig
env attributes.get(
    parent: 'Attribute',
    index: 'Attribute',
    default: 'Option < Attribute >'
)
```

### Arguments
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
## powi {#env.powi}
```sig
env attributes.powi(value: 'f64', power: 'i64')
```

### Arguments
- `value: 'f64'` => base value
- `power: 'i64'` => 

Integer power

```task
env assert_eq(powi(10.0, 2), 100.0)
```
## powf {#env.powf}
```sig
env attributes.powf(value: 'f64', power: 'f64')
```

### Arguments
- `value: 'f64'` => base value
- `power: 'f64'` => 

Float power

```task
env assert_eq(powf(100.0, 0.5), 10.0)
```
## exp {#env.exp}
```sig
env attributes.exp(value: 'f64')
```

### Arguments
- `value: 'f64'` => 

Exponential

```task
env assert_eq(log(exp(5.0)), 5.0)
```
## sqrt {#env.sqrt}
```sig
env attributes.sqrt(value: 'f64')
```

### Arguments
- `value: 'f64'` => 

Square Root
```task
env assert_eq(sqrt(25.0), 5.0)
```
## log {#env.log}
```sig
env attributes.log(value: 'f64', base: 'Option < f64 >')
```

### Arguments
- `value: 'f64'` => 
- `base: 'Option < f64 >'` => 

Logarithm of a value, natural if base not given

```task
env assert_eq(log(exp(2.0)), 2.0)
env assert_eq(log(2.0, 2.0), 1.0)
```
## float_div {#env.float_div}
```sig
env attributes.float_div(value1: 'f64', value2: 'f64')
```

### Arguments
- `value1: 'f64'` => numerator
- `value2: 'f64'` => denominator

Float Division (same as / operator)

```task
env assert_eq(float_div(10.0, 2), 10.0 / 2)
```
## float_mult {#env.float_mult}
```sig
env attributes.float_mult(value1: 'f64', value2: 'f64')
```

### Arguments
- `value1: 'f64'` => numerator
- `value2: 'f64'` => denominator

Float Multiplication (same as * operator)

```task
env assert_eq(float_mult(5.0, 2), 5.0 * 2)
```
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
network load_str("A -> B\n B -> D");
node[A -> D] set_attrs(a2d = true)
```
This is equivalent to the following:
```task
node[A->D].a2d = true;
```
## get_attr {#node.get_attr}
```sig
node attributes.get_attr(attr: '& str', default: 'Option < Attribute >')
```

### Arguments
- `attr: '& str'` => Name of the attribute to get
- `default: 'Option < Attribute >'` => Default value if the attribute is not found

Retrive attribute

```task
network load_str("A -> B\n B -> D");
node assert_eq(get_attr("NAME"), NAME);
```
## has_attr {#node.has_attr}
```sig
node attributes.has_attr(attr: '& str')
```

### Arguments
- `attr: '& str'` => Name of the attribute to check

Check if the attribute is present

```task
network load_str("A -> B\n B -> D");
node.x = 90;
node assert(has_attr("x"))
node assert(!has_attr("y"))
```
## first_attr {#node.first_attr}
```sig
node attributes.first_attr(attrs: '& [String]', default: 'Option < Attribute >')
```

### Arguments
- `attrs: '& [String]'` => attribute names
- `default: 'Option < Attribute >'` => Default value if not found

Return the first Attribute that exists

This is useful when you have a bunch of attributes that might
be equivalent but are using different names. Normally due to
them being combined from different datasets.

```task
network load_str("A -> B\n B -> D");
node.x = 90;
node assert_eq(first_attr(["y", "x"]), 90)
node assert_eq(first_attr(["x", "NAME"]), 90)
```
## set_attrs_ifelse {#node.set_attrs_ifelse}
```sig
node attributes.set_attrs_ifelse(cond: 'bool', **values)
```

### Arguments
- `cond: 'bool'` => Condition to check
- `**values` => key = [val1, val2] where key is set as first if `cond` is true else second

if else condition with multiple attributes

```task
network load_str("a -> b");
env.some_condition = true;
node set_attrs_ifelse(
env.some_condition,
val1 = [1, 2],
val2 = ["a", "b"]
);
env assert_eq(nodes.val1, [1, 1])
env assert_eq(nodes.val2, ["a", "a"])
```
This is equivalent to using the if-else expression directly,

```task
node.val1 = if (env.some_condition) {1} else {2};
env assert_eq(nodes.val1, [1, 1])
```

Furthermore if-else expression will give a lot more
flexibility than this function in normal use cases. But this
function is useful when you have to do something in a batch.
## set_attrs_render {#node.set_attrs_render}
```sig
node attributes.set_attrs_render(**kwargs)
```

### Arguments
- `**kwargs` => key value pair of attribute to set and the Template to render

Set node attributes based on string templates

This renders the template for each node, then it sets the
values from the rendered results.

```task
network load_str("a -> b");
node set_attrs_render(val1 = "Node: {_NAME}");
node[a] assert_eq(val1, "Node: a")
```
## load_toml_render {#node.load_toml_render}
```sig
node attributes.load_toml_render(toml: '& Template', echo: 'bool' = false)
```

### Arguments
- `toml: '& Template'` => String template to render and load as toml string
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
node load_toml_render("label = \\\"Node: {_NAME}\\\"")
node assert_eq(label, render("Node: {_NAME}"))
```
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

```task
network set_attrs(val = 23.4)
network assert_eq(val, 23.4)
```
## set_attrs_render {#network.set_attrs_render}
```sig
network attributes.set_attrs_render(**kwargs)
```

### Arguments
- `**kwargs` => Kwargs of attr = String template to render

Set network attributes based on string templates

It will set the attribute as a String

```task
network.val = 23.4
network set_attrs_render(val2 = "{val}05")
network assert_eq(val2, "23.405")
```
