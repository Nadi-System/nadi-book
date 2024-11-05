# Network Functions
## load_file {#network.load_file}
```sig
network connections.load_file(file: 'PathBuf')
```

Load the given file into the network

This replaces the current network with the one loaded from the
file.
## save_file {#network.save_file}
```sig
network connections.save_file(
    file: 'PathBuf',
    quote_all: 'bool' = true,
    graphviz: 'bool' = false
)
```

Save the network into the given file

### Arguments
- `file`: Path to the output file
- `quote_all` [default: true]: quote all node names.
if false, doesn't quote valid identifier names
- `graphviz` [default: false]: wrap the network into
a valid graphviz file. For more control on file
`save_graphviz` from `graphviz` plugin instead.
