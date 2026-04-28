# Node Functions
## sr_count {#node.sr_count}
```sig
node SERIES.sr_count()
```

**Arguments:**


Number of series in the node
## sr_list {#node.sr_list}
```sig
node SERIES.sr_list()
```

**Arguments:**


List all series in the node
## sr_dtype {#node.sr_dtype}
```sig
node SERIES.sr_dtype(name: '& str', safe: 'bool' = false)
```

**Arguments:**
- `name: '& str'` => Name of the series
- `safe: 'bool' = false` => Do not error if series does't exist

Type name of the series
## sr_len {#node.sr_len}
```sig
node SERIES.sr_len(
    name: '& str',
    safe: 'bool' = false,
    countna: 'bool' = true
)
```

**Arguments:**
- `name: '& str'` => Name of the series
- `safe: 'bool' = false` => Do not error if series does't exist
- `countna: 'bool' = true` => count na values in the length

Length of the series
## sr_mean {#node.sr_mean}
```sig
node SERIES.sr_mean(name: '& str')
```

**Arguments:**
- `name: '& str'` => Name of the series

Mean of a series values
## sr_sum {#node.sr_sum}
```sig
node SERIES.sr_sum(name: '& str')
```

**Arguments:**
- `name: '& str'` => Name of the series

Sum of the series values
## set_series {#node.set_series}
```sig
node SERIES.set_series(
    name: '& str',
    value: 'Attribute',
    dtype: '& str'
)
```

**Arguments:**
- `name: '& str'` => Name of the series to save as
- `value: 'Attribute'` => Argument to convert to series
- `dtype: '& str'` => type

set the following series to the node
## sr_delete {#node.sr_delete}
```sig
node SERIES.sr_delete(name: '& str')
```

**Arguments:**
- `name: '& str'` => Name of the series to delete from this node

Delete the series with the given name
## sr_sort {#node.sr_sort}
```sig
node SERIES.sr_sort(name: '& str')
```

**Arguments:**
- `name: '& str'` => Name of the series

Sort an series
## sr_get {#node.sr_get}
```sig
node SERIES.sr_get(name: '& str', ind: 'usize')
```

**Arguments:**
- `name: '& str'` => Name of the series
- `ind: 'usize'` => index to get

get nth member of a series
## sr_to_array {#node.sr_to_array}
```sig
node SERIES.sr_to_array(name: '& str', safe: 'bool' = false)
```

**Arguments:**
- `name: '& str'` => Name of the series
- `safe: 'bool' = false` => Do not error if series does't exist or there are gaps

Make an array from the series if it's complete
## sr_fill {#node.sr_fill}
```sig
node SERIES.sr_fill(
    name: '& str',
    value: 'Attribute',
    inplace: 'bool' = true,
    newname: 'Option < String >'
)
```

**Arguments:**
- `name: '& str'` => Name of the series
- `value: 'Attribute'` => Value to fill the series with: needs to be same type
- `inplace: 'bool' = true` => Fill the series inplace
- `newname: 'Option < String >'` => New name for the series, adds `_filled` by default; ignored for inplace

Fill the series with a value
## sr_max {#node.sr_max}
```sig
node SERIES.sr_max(name: '& str')
```

**Arguments:**
- `name: '& str'` => Name of the series

Get maximum value of the series
## sr_min {#node.sr_min}
```sig
node SERIES.sr_min(name: '& str')
```

**Arguments:**
- `name: '& str'` => Name of the series

Get minimum value of the series
