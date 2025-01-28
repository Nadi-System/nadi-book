# Env Functions
## type_name {#env.type_name}
```sig
env core.type_name(value: 'Attribute', recursive: 'bool' = false)
```

### Arguments
- `value: 'Attribute'` => Argument to get type
- `recursive: 'bool' = false` => Recursively check types for array and table

Type name of the arguments
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
# Network Functions
## count {#network.count}
```sig
network core.count()
```

### Arguments


Count the number of nodes in the network

If propagation is present, only counts those nodes
