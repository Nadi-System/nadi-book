# Node Functions
## count_node_if {#node.count_node_if}
```sig
node dams.count_node_if(count_attr: '& str', cond: 'bool')
```

### Arguments
- `count_attr: '& str'` => 
- `cond: 'bool'` => 

Count the number of nodes upstream at each point that satisfies a certain condition
## min_year {#node.min_year}
```sig
node dams.min_year(yearattr: '& str', write_var: '& str' = "MIN_YEAR")
```

### Arguments
- `yearattr: '& str'` => 
- `write_var: '& str' = "MIN_YEAR"` => 

Propagate the minimum year downstream
