# Network Functions
## load_file {#network.load_file}
```sig
network connections.load_file(file: 'PathBuf', append: 'bool' = false)
```

### Arguments
- `file: 'PathBuf'` => File to load the network connections from
- `append: 'bool' = false` => Append the connections in the current network

Load the given file into the network

This replaces the current network with the one loaded from the
file.
## load_str {#network.load_str}
```sig
network connections.load_str(contents: '& str', append: 'bool' = false)
```

### Arguments
- `contents: '& str'` => String containing Network connections
- `append: 'bool' = false` => Append the connections in the current network

Load the given file into the network

This replaces the current network with the one loaded from the
file.

```task
network load_str("a -> b");
env assert_eq(nodes.NAME, ["b", "a"])
```
## load_edges {#network.load_edges}
```sig
network connections.load_edges(edges: '& [(String, String)]', append: 'bool' = false)
```

### Arguments
- `edges: '& [(String, String)]'` => String containing Network connections
- `append: 'bool' = false` => Append the connections in the current network

Load the given edges into the network

This replaces the current network with the one loaded from the
file.

```task
network load_edges([["a", "b"], ["b", "c"]]);
env assert_eq(nodes.NAME, ["c", "b", "a"])
```
## subset {#network.subset}
```sig
network connections.subset(filter: '& [bool]', keep: 'bool' = true)
```

### Arguments
- `filter: '& [bool]'` => 
- `keep: 'bool' = true` => Keep the selected nodes (false = removes the selected)

Take a subset of network by only including the selected nodes
```task
network load_str("a -> b\n b->c");
node[a->b].sth = true;
node[c].sth = false;
network subset(nodes.sth);
env assert_eq(nodes.NAME, ["b", "a"])
```
## save_file {#network.save_file}
```sig
network connections.save_file(
    file: 'PathBuf',
    quote_all: 'bool' = true,
    graphviz: 'bool' = false
)
```

### Arguments
- `file: 'PathBuf'` => Path to the output file
- `quote_all: 'bool' = true` => quote all node names; if false, doesn't quote valid identifier names
- `graphviz: 'bool' = false` => wrap the network into a valid graphviz file

Save the network into the given file

For more control on graphviz file writing, use
`save_graphviz` from `graphviz` plugin instead.
