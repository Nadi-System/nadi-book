# Env Functions
## count {#env.count}
```sig
env core.count(vars: '& [bool]')
```

### Arguments
- `vars: '& [bool]'` => 

Count the number of true values in the array
## type_name {#env.type_name}
```sig
env core.type_name(value: 'Attribute', recursive: 'bool' = false)
```

### Arguments
- `value: 'Attribute'` => Argument to get type
- `recursive: 'bool' = false` => Recursively check types for array and table

Type name of the arguments
## isna {#env.isna}
```sig
env core.isna(val: 'f64')
```

### Arguments
- `val: 'f64'` => 

check if a float is nan
## isinf {#env.isinf}
```sig
env core.isinf(val: 'f64')
```

### Arguments
- `val: 'f64'` => 

check if a float is +/- infinity
## float {#env.float}
```sig
env core.float(value: 'Attribute', parse: 'bool' = true)
```

### Arguments
- `value: 'Attribute'` => Argument to convert to float
- `parse: 'bool' = true` => parse string to float

make a float from value
## str {#env.str}
```sig
env core.str(value: 'Attribute', quote: 'bool' = false)
```

### Arguments
- `value: 'Attribute'` => Argument to convert to float
- `quote: 'bool' = false` => quote it if it's literal string

make a string from value
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
## array {#env.array}
```sig
env core.array(*attributes)
```

### Arguments
- `*attributes` => List of attributes

make an array from the arguments
## attrmap {#env.attrmap}
```sig
env core.attrmap(**attributes)
```

### Arguments
- `**attributes` => name and values of attributes

make an array from the arguments
## year {#env.year}
```sig
env core.year(value: 'Attribute')
```

### Arguments
- `value: 'Attribute'` => Date or DateTime

year from date/datetime
## month {#env.month}
```sig
env core.month(value: 'Attribute')
```

### Arguments
- `value: 'Attribute'` => Date or DateTime

month from date/datetime
## day {#env.day}
```sig
env core.day(value: 'Attribute')
```

### Arguments
- `value: 'Attribute'` => Date or DateTime

day from date/datetime
## min_num {#env.min_num}
```sig
env core.min_num(vars: 'Vec < Attribute >', start: 'Attribute' = Integer(9223372036854775807))
```

### Arguments
- `vars: 'Vec < Attribute >'` => 
- `start: 'Attribute' = Integer(9223372036854775807)` => 

Minimum of the variables

Starts with integer for type purpose, MAX float is larger than
max int, so it'll be incorrect for large numbers
## max_num {#env.max_num}
```sig
env core.max_num(vars: 'Vec < Attribute >', start: 'Attribute' = Integer(-9223372036854775808))
```

### Arguments
- `vars: 'Vec < Attribute >'` => 
- `start: 'Attribute' = Integer(-9223372036854775808)` => 

Minimum of the variables

Starts with integer for type purpose, MAX float is larger than
max int, so it'll be incorrect for large numbers
## min {#env.min}
```sig
env core.min(vars: 'Vec < Attribute >', start: 'Attribute')
```

### Arguments
- `vars: 'Vec < Attribute >'` => 
- `start: 'Attribute'` => 

Minimum of the variables
## max {#env.max}
```sig
env core.max(vars: 'Vec < Attribute >', start: 'Attribute')
```

### Arguments
- `vars: 'Vec < Attribute >'` => 
- `start: 'Attribute'` => 

Minimum of the variables
## sum {#env.sum}
```sig
env core.sum(vars: 'Vec < Attribute >', start: 'Attribute' = Integer(0))
```

### Arguments
- `vars: 'Vec < Attribute >'` => 
- `start: 'Attribute' = Integer(0)` => 

Sum of the variables
## prod {#env.prod}
```sig
env core.prod(vars: 'Vec < Attribute >', start: 'Attribute' = Integer(1))
```

### Arguments
- `vars: 'Vec < Attribute >'` => 
- `start: 'Attribute' = Integer(1)` => 

Product of the variables
## unique_str {#env.unique_str}
```sig
env core.unique_str(vars: 'Vec < String >')
```

### Arguments
- `vars: 'Vec < String >'` => 

Get a list of unique string values
## count_str {#env.count_str}
```sig
env core.count_str(vars: 'Vec < String >')
```

### Arguments
- `vars: 'Vec < String >'` => 

Get a count of unique string values
# Node Functions
## inputs_count {#node.inputs_count}
```sig
node core.inputs_count()
```

### Arguments


Count the number of input nodes in the node
## inputs_attr {#node.inputs_attr}
```sig
node core.inputs_attr(attr: 'String' = "NAME")
```

### Arguments
- `attr: 'String' = "NAME"` => Attribute to get from inputs

Get attributes of the input nodes
## has_outlet {#node.has_outlet}
```sig
node core.has_outlet()
```

### Arguments


Node has an outlet or not
## output_attr {#node.output_attr}
```sig
node core.output_attr(attr: 'String' = "NAME")
```

### Arguments
- `attr: 'String' = "NAME"` => Attribute to get from inputs

Get attributes of the output node
# Network Functions
## count {#network.count}
```sig
network core.count(vars: 'Option < Vec < bool > >')
```

### Arguments
- `vars: 'Option < Vec < bool > >'` => 

Count the number of nodes in the network
