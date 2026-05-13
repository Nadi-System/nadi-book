# Network Functions
## load_positions {#network.load_positions}
```sig
network GVIZ.load_positions(gv_file: '& Path', factor: 'f64' = 0.1)
```

**Arguments:**
- `gv_file: '& Path'` => 
- `factor: 'f64' = 0.1` => 

Load Node positions from the graphviz file
## save_gv {#network.save_gv}
```sig
network GVIZ.save_gv(
    outfile: '& Path',
    name: '& str' = "network",
    global_attrs: '& str' = "",
    node_attr: 'Option < Template >',
    edge_attr: 'Option < Template >'
)
```

**Arguments:**
- `outfile: '& Path'` => 
- `name: '& str' = "network"` => 
- `global_attrs: '& str' = ""` => 
- `node_attr: 'Option < Template >'` => 
- `edge_attr: 'Option < Template >'` => 

Save the network as a graphviz file
### Arguments:
- `outfile` - Path to the output file
- `name` - Name of the graph
