# Env Functions
## root_node {#env.root_node}
```sig
env connections.root_node()
```

### Arguments


default name used for ROOT node of the network
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

Load network from the given string

This replaces the current network with the one loaded from the
string.

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

Load the given edges as a network

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
## subset_from {#network.subset_from}
```sig
network connections.subset_from(node: '& str')
```

### Arguments
- `node: '& str'` => 

Take a subset of network by taking the given node as new outlet

```task
network load_str("a -> b\n b->c\n x -> y");
network subset_from("b")
env assert_eq(nodes.NAME, ["b", "a"])
```
## subset_largest {#network.subset_largest}
```sig
network connections.subset_largest(node: '& str' = "*ROOT*")
```

### Arguments
- `node: '& str' = "*ROOT*"` => 

Take a subset of network by only including the largest blob of connected nodes

When you load a network that have disconnected nodes, nadi
includes a ROOT note by default and collects all the outlets
as inputs to that node. This function allows you to filter out
all the nodes except the one belonging to the largest
connected network (number of nodes). Alternatively, you can
also use ORDER and other logic in the task system to do that.

If your network doesn't have a root node, then it'll just keep
the network as it is.

```task
network load_str("a -> b\n b->c\n x -> y");
network subset_largest()
env assert_eq(nodes.NAME, ["c", "b", "a"])
```
