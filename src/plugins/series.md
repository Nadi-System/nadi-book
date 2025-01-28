# Node Functions
## sr_count {#node.sr_count}
```sig
node series.sr_count()
```

### Arguments


Number of series in the node
## sr_list {#node.sr_list}
```sig
node series.sr_list()
```

### Arguments


List all series in the node
## sr_dtype {#node.sr_dtype}
```sig
node series.sr_dtype(name: '& str', safe: 'bool' = false)
```

### Arguments
- `name: '& str'` => Name of the series
- `safe: 'bool' = false` => Do not error if series does't exist

Type name of the series
## sr_len {#node.sr_len}
```sig
node series.sr_len(name: '& str', safe: 'bool' = false)
```

### Arguments
- `name: '& str'` => Name of the series
- `safe: 'bool' = false` => Do not error if series does't exist

Length of the series
## sr_mean {#node.sr_mean}
```sig
node series.sr_mean(name: '& str')
```

### Arguments
- `name: '& str'` => Name of the series

Type name of the series
## sr_sum {#node.sr_sum}
```sig
node series.sr_sum(name: '& str')
```

### Arguments
- `name: '& str'` => Name of the series

Sum of the series
## set_series {#node.set_series}
```sig
node series.set_series(
    name: '& str',
    value: 'Attribute',
    dtype: '& str'
)
```

### Arguments
- `name: '& str'` => Name of the series to save as
- `value: 'Attribute'` => Argument to convert to series
- `dtype: '& str'` => type

set the following series to the node
## sr_to_array {#node.sr_to_array}
```sig
node series.sr_to_array(name: '& str', safe: 'bool' = false)
```

### Arguments
- `name: '& str'` => Name of the series
- `safe: 'bool' = false` => Do not error if series does't exist

Make an array from the series
