# Network

A Network is a collection of nodes. The network can also have
attributes associated with it. The connection information is stored
within the nodes itself. But Network will have nodes ordered based on
their connection information. So that when you loop from node from
first to last, you will always find output node before its input
nodes.

A condition a nadi network is that it can only be a directed graph
with tree structure.

Example Network file:
```net
{{#include ../data/mississippi.net}}
```

The given network can be loaded and visualized using functions from `typst` plugin.
```task run image ../output/network-mississippi.svg
network load_file("./data/mississippi.net")
!network command("mkdir -p output")

node.title = str_replace(NAME, "-", " ");

network cairo.table("Index => {INDEX}\n<Name => {title}\n",
   "./output/network-mississippi.svg"
)
```

You can assign different graphical properties through node properties. 

```task run image ../output/network-mississippi-colors.svg
!network load_file("./data/mississippi.net")
node[red].visual.nodecolor = "red";
node["upper-mississippi", red].visual.nodesize = 8;
node.title = str_replace(NAME, "-", " ");

network cairo.table("Index => {INDEX}\n<Name => {title}\n",
   "./output/network-mississippi-colors.svg"
)
```

