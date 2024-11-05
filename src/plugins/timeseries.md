# Node Functions
## list_ts {#node.list_ts}
```sig
node timeseries.list_ts (label: 'bool' = true)
```

Print the list of available timeseries for the node
### Arguments
- `label` - Label the line with node name
## show_ts {#node.show_ts}
```sig
node timeseries.show_ts (
    name:'&String',
    header:'bool'=true,
    head:'Option<i64>'
)
```

Print the given timeseries values in csv format
### Arguments
- `name` - name
