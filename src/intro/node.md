# Node

A Node is a point in network. A Node can have multiple input nodes and
only one output node. And a Node can also have multiple attributes
identifiable with their unique name, along with timeseries values also
identifiable with their names.

If you understand graph theory, then node in nadi network is the same
as a node in a graph.

Nodes in Nadi are identified by their name, that is loaded from the network file. Node names are string values, even if they are integer or float, they are read and internally stored as strings. If the node name contains characters outside of alphanumeric and underscore (`_`), it has to be quoted.

i.e. valid names like `123` or `node_1` can appear unquoted or quoted, but names like `node-123` needs to be quoted: `"node-123"`.

```task run
network load_str("
123 -> node_1
node_1 -> \"node-123\"
")
node.NAME
```

<div class="warning">
If the node name `node-123` appearing on the output is unquoted, it's a bug that will be fixed in the next version. It is harmless as long as you don't try to copy the output as a valid attribute value to load back into the system.
</div>

If you do not quote the name, you'll get an error:
```task run
network load_str("123 -> node-1")
node.NAME
```
