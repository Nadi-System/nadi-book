# Node Functions
## ts_count {#node.ts_count}
```sig
node timeseries.ts_count()
```

### Arguments


Number of timeseries in the node
## ts_list {#node.ts_list}
```sig
node timeseries.ts_list()
```

### Arguments


List all timeseries in the node
## ts_dtype {#node.ts_dtype}
```sig
node timeseries.ts_dtype(name: '& str', safe: 'bool' = false)
```

### Arguments
- `name: '& str'` => Name of the timeseries
- `safe: 'bool' = false` => Do not error if timeseries does't exist

Type name of the timeseries
## ts_len {#node.ts_len}
```sig
node timeseries.ts_len(name: '& str', safe: 'bool' = false)
```

### Arguments
- `name: '& str'` => Name of the timeseries
- `safe: 'bool' = false` => Do not error if timeseries does't exist

Length of the timeseries
## ts_print {#node.ts_print}
```sig
node timeseries.ts_print(
    name: '& String',
    header: 'bool' = true,
    head: 'Option < i64 >'
)
```

### Arguments
- `name: '& String'` => name of the timeseries
- `header: 'bool' = true` => show header
- `head: 'Option < i64 >'` => number of head rows to show (all by default)

Print the given timeseries values in csv format
### TODO
- save to file instead of showing with `outfile: Option<PathBuf>`
# Network Functions
## ts_print_csv {#network.ts_print_csv}
```sig
network timeseries.ts_print_csv(
    name: 'String',
    head: 'Option < usize >',
    nodes: 'Option < HashSet < String > >'
)
```

### Arguments
- `name: 'String'` => Name of the timeseries to save
- `head: 'Option < usize >'` => number of head rows to show (all by default)
- `nodes: 'Option < HashSet < String > >'` => Include only these nodes (all by default)

Save timeseries from all nodes into a single csv file

TODO: error/not on unqual length
TODO: error/not on no timeseries, etc...
TODO: output to `file: PathBuf`
