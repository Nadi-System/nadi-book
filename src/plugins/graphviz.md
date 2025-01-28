# Network Functions
## save_graphviz {#network.save_graphviz}
```sig
network graphviz.save_graphviz(
    outfile: '& Path',
    name: '& str' = "network",
    global_attrs: '& str' = "",
    node_attr: 'Option < & Template >',
    edge_attr: 'Option < & Template >'
)
```

### Arguments
- `outfile: '& Path'` => 
- `name: '& str' = "network"` => 
- `global_attrs: '& str' = ""` => 
- `node_attr: 'Option < & Template >'` => 
- `edge_attr: 'Option < & Template >'` => 

Save the network as a graphviz file
### Arguments:
- `outfile` - Path to the output file
- `name` - Name of the graph
