# Env Functions
## count {#env.count}
```sig
env core.count(vars: '& [bool]')
```

### Arguments
- `vars: '& [bool]'` => 

Count the number of true values in the array

```task
env assert_eq(count([true, false, true, false]), 2)
```
## type_name {#env.type_name}
```sig
env core.type_name(value: 'Attribute', recursive: 'bool' = false)
```

### Arguments
- `value: 'Attribute'` => Argument to get type
- `recursive: 'bool' = false` => Recursively check types for array and table

Type name of the arguments

```task
env assert_eq(type_name(true), "Bool")
env assert_eq(type_name([true, 12]), "Array")
env assert_eq(type_name([true, 12], recursive=true), ["Bool", "Integer"])
env assert_eq(type_name("true"), "String")
```
## isna {#env.isna}
```sig
env core.isna(val: 'f64')
```

### Arguments
- `val: 'f64'` => 

check if a float is nan

```task
env assert(isna(nan + 5))
```
## isinf {#env.isinf}
```sig
env core.isinf(val: 'f64')
```

### Arguments
- `val: 'f64'` => 

check if a float is +/- infinity

```task
env assert(isinf(12.0 / 0))
```
## float {#env.float}
```sig
env core.float(value: 'Attribute', parse: 'bool' = true)
```

### Arguments
- `value: 'Attribute'` => Argument to convert to float
- `parse: 'bool' = true` => parse string to float

make a float from value

```task
env assert_eq(float(5), 5.0)
env assert_eq(float("5.0"), 5.0)
```
## str {#env.str}
```sig
env core.str(value: 'Attribute', quote: 'bool' = false)
```

### Arguments
- `value: 'Attribute'` => Argument to convert to float
- `quote: 'bool' = false` => quote it if it's literal string

make a string from value

```task
env assert_eq(str(nan + 5), "nan")
env assert_eq(str(2 + 5), "7")
env assert_eq(str(12.34), "12.34")
env assert_eq(str("nan + 5"), "nan + 5")
env assert_eq(str("true", quote=true), "\"true\"")
```
## int {#env.int}
```sig
env core.int(
    value: 'Attribute',
    parse: 'bool' = true,
    round: 'bool' = true,
    strfloat: 'bool' = false
)
```

### Arguments
- `value: 'Attribute'` => Argument to convert to int
- `parse: 'bool' = true` => parse string to int
- `round: 'bool' = true` => round float into integer
- `strfloat: 'bool' = false` => parse string first as float before converting to int

make an int from the value

```task
env assert_eq(int(5.0), 5)
env assert_eq(int(5.1), 5)
env assert_eq(int("45"), 45)
env assert_eq(int("5.0", strfloat=true), 5)
```
## array {#env.array}
```sig
env core.array(*attributes)
```

### Arguments
- `*attributes` => List of attributes

make an array from the arguments

```task
env assert_eq(array(5, true), [5, true])
```
## attrmap {#env.attrmap}
```sig
env core.attrmap(**attributes)
```

### Arguments
- `**attributes` => name and values of attributes

make an attrmap from the arguments

```task
env assert_eq(attrmap(val=5), {val=5})
```
## json {#env.json}
```sig
env core.json(value: 'Attribute')
```

### Arguments
- `value: 'Attribute'` => attribute to format

format the attribute as a json string

```task
env assert_eq(json(5), "5")
env assert_eq(json([5, true]), "[5, true]")
env assert_eq(json({a=5}), "{\"a\": 5}")
```
## append {#env.append}
```sig
env core.append(array: 'Vec < Attribute >', value: 'Attribute')
```

### Arguments
- `array: 'Vec < Attribute >'` => List of attributes
- `value: 'Attribute'` => 

append a value to an array

```task
env assert_eq(append([4], 5), [4, 5])
```
## length {#env.length}
```sig
env core.length(value: '& Attribute')
```

### Arguments
- `value: '& Attribute'` => Array or a HashMap

length of an array or hashmap

```task
env assert_eq(length([4, 5]), 2)
env assert_eq(length({x=4, y=5}), 2)
```
## year {#env.year}
```sig
env core.year(value: 'Attribute')
```

### Arguments
- `value: 'Attribute'` => Date or DateTime

year from date/datetime

```task
env assert_eq(year(1223-12-12), 1223)
env assert_eq(year(1223-12-12T12:12), 1223)
env assert_eq(year(1223-12-12 12:12:08), 1223)
```
## month {#env.month}
```sig
env core.month(value: 'Attribute')
```

### Arguments
- `value: 'Attribute'` => Date or DateTime

month from date/datetime

```task
env assert_eq(month(1223-12-14), 12)
env assert_eq(month(1223-12-14T15:19), 12)
```
## day {#env.day}
```sig
env core.day(value: 'Attribute')
```

### Arguments
- `value: 'Attribute'` => Date or DateTime

day from date/datetime

```task
env assert_eq(day(1223-12-14), 14)
env assert_eq(day(1223-12-14T15:19), 14)
```
## min_num {#env.min_num}
```sig
env core.min_num(vars: 'Vec < Attribute >', start: 'Attribute' = Float(inf))
```

### Arguments
- `vars: 'Vec < Attribute >'` => 
- `start: 'Attribute' = Float(inf)` => 

Minimum of the variables

```task
env assert_eq(min_num([1, 2, 3]), 1)
env assert_eq(min_num([1.0, 2, 3]), 1.0)
env assert_eq(min_num([1, 2, 3], start = 0), 0)
```
## max_num {#env.max_num}
```sig
env core.max_num(vars: 'Vec < Attribute >', start: 'Attribute' = Float(-inf))
```

### Arguments
- `vars: 'Vec < Attribute >'` => 
- `start: 'Attribute' = Float(-inf)` => 

Minimum of the variables

```task
env assert_eq(max_num([1, 2, 3.0]), 3.0)
env assert_eq(max_num([1.0, 2, 3]), 3)
env assert_eq(max_num([1, inf, 3], 0), inf)
```
## min {#env.min}
```sig
env core.min(vars: 'Vec < Attribute >', start: 'Attribute')
```

### Arguments
- `vars: 'Vec < Attribute >'` => 
- `start: 'Attribute'` => 

Minimum of the variables

```task
env assert_eq(min([1, 2, 3], 100), 1)
env assert_eq(min([1.0, 2, 3], 100), 1.0)
env assert_eq(min([1, 2, 3], inf), 1)
env assert_eq(min(["b", "a", "d"], "zzz"), "a")
```
## max {#env.max}
```sig
env core.max(vars: 'Vec < Attribute >', start: 'Attribute')
```

### Arguments
- `vars: 'Vec < Attribute >'` => 
- `start: 'Attribute'` => 

Maximum of the variables

```task
env assert_eq(max([1, 2, 3], -1), 3)
env assert_eq(max([1.0, 2, 3], -1), 3)
env assert_eq(max([1, 2, 3], -inf), 3)
env assert_eq(max(["b", "a", "d"], ""), "d")
```
## sum {#env.sum}
```sig
env core.sum(vars: 'Vec < Attribute >', start: 'Attribute' = Integer(0))
```

### Arguments
- `vars: 'Vec < Attribute >'` => 
- `start: 'Attribute' = Integer(0)` => 

Sum of the variables

This function is for numeric attributes. You need to give the
start attribute so that data type is valid.

```task
env assert_eq(sum([2, 3, 4]), 9)
env assert_eq(sum([2, 3, 4], start=0.0), 9.0)
```
## prod {#env.prod}
```sig
env core.prod(vars: 'Vec < Attribute >', start: 'Attribute' = Integer(1))
```

### Arguments
- `vars: 'Vec < Attribute >'` => 
- `start: 'Attribute' = Integer(1)` => 

Product of the variables

This function is for numerical values/attributes

```task
env assert_eq(prod([1, 2, 3]), 6)
env assert_eq(prod([1.0, 2, 3]), 6.0)
```
## unique_str {#env.unique_str}
```sig
env core.unique_str(vars: 'Vec < String >')
```

### Arguments
- `vars: 'Vec < String >'` => 

Get a list of unique string values

The order of the strings returned is not guaranteed

```task
env.uniq = unique_str(["hi", "me", "hi", "you"]);
env assert_eq(length(uniq), 3)
```
## count_str {#env.count_str}
```sig
env core.count_str(vars: 'Vec < String >')
```

### Arguments
- `vars: 'Vec < String >'` => 

Get a count of unique string values

```task
env assert_eq(
count_str(["Hi", "there", "Deliah", "Hi"]),
{Hi = 2, there = 1, Deliah=1}
)
```
## concat {#env.concat}
```sig
env core.concat(*vars, join: '& str' = "")
```

### Arguments
- `*vars` => 
- `join: '& str' = ""` => 

Concat the strings

```task
env assert_eq(concat("Hello", "World", join=" "), "Hello World")
```
## range {#env.range}
```sig
env core.range(start: 'i64', end: 'i64')
```

### Arguments
- `start: 'i64'` => 
- `end: 'i64'` => 

Generate integer array, end is not included

```task
env assert_eq(range(1, 5), [1, 2, 3, 4])
```
## assert {#env.assert}
```sig
env core.assert(condition: 'bool', note: 'String' = "Condition False")
```

### Arguments
- `condition: 'bool'` => 
- `note: 'String' = "Condition False"` => 

Assert the condition is true

Use `assert_eq`/`assert_neq` if you are testing equality for
better error message.

```task
env assert(true)
```
## assert_eq {#env.assert_eq}
```sig
env core.assert_eq(left: 'Attribute', right: 'Attribute')
```

### Arguments
- `left: 'Attribute'` => 
- `right: 'Attribute'` => 

Assert the two values are equal

This function is for testing the code, as well as for
terminating the execution when certain values are not equal

```task
env assert_eq(1, 1)
env assert_eq(true, 1 > 0)
env assert_eq("string val", concat("string", " ", "val"))
```
## assert_neq {#env.assert_neq}
```sig
env core.assert_neq(left: 'Attribute', right: 'Attribute')
```

### Arguments
- `left: 'Attribute'` => 
- `right: 'Attribute'` => 

Assert the two values are not equal

This function is for testing the code, as well as for
terminating the execution when certain values are not equal

```task
env assert_neq(1, 1.0)
env assert_neq(true, 1 < 0)
env assert_neq("string val", concat("string", "val"))
```
# Node Functions
## inputs_count {#node.inputs_count}
```sig
node core.inputs_count()
```

### Arguments


Count the number of input nodes in the node

```task
network load_str("a -> b\n b -> d\n c -> d")
node assert_eq(inputs_count(), length(inputs._))
```
## inputs_attr {#node.inputs_attr}
```sig
node core.inputs_attr(attr: 'String' = "NAME")
```

### Arguments
- `attr: 'String' = "NAME"` => Attribute to get from inputs

Get attributes of the input nodes

This is equivalent to using the `inputs` keyword
```task
network load_str("a -> b\n b -> d\n c -> d")
node assert_eq(inputs_attr("NAME"), inputs.NAME)
```
## has_outlet {#node.has_outlet}
```sig
node core.has_outlet()
```

### Arguments


Node has an outlet or not

This is equivalent to using `output._?`, as `_` is a dummy
variable that will always be present in all cases, it being
absent is because there is no output/outlet of that node.

```task
network load_str("a -> b\n b -> d\n c -> d")
node assert_eq(has_outlet(), output._?)
```
## output_attr {#node.output_attr}
```sig
node core.output_attr(attr: 'String' = "NAME")
```

### Arguments
- `attr: 'String' = "NAME"` => Attribute to get from inputs

Get attributes of the output node

This is equivalent to using the `output` keyword
```task
network load_str("a -> b\n b -> d\n c -> d")
node(output._?) assert_eq(output_attr("NAME"), output.NAME)
```
# Network Functions
## count {#network.count}
```sig
network core.count(vars: 'Option < Vec < bool > >')
```

### Arguments
- `vars: 'Option < Vec < bool > >'` => 

Count the number of nodes in the network

```task
network assert_eq(count(), 0)
network load_str("a -> b")
network assert_eq(count(), 2)
node.sel = INDEX < 1
network assert_eq(count(nodes.sel), 1)
```
## outlet {#network.outlet}
```sig
network core.outlet()
```

### Arguments


Get the name of the outlet node

```task
network load_str("a -> b")
network assert_eq(outlet(), "b")
```
## node_attr {#network.node_attr}
```sig
network core.node_attr(name: 'String', attribute: 'String' = "_")
```

### Arguments
- `name: 'String'` => name of the node
- `attribute: 'String' = "_"` => attribute to get

Get the attr of the provided node

```task
network load_str("a -> b")
network assert_eq(node_attr("a", "NAME"), "a")
```
