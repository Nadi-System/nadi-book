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

The given network can be visualized as follows:
```task run image
!network load_file("./data/mississippi.net")
network export_svg(
   "./output/mississippi.svg",
	label="[{INDEX}] {_NAME:repl(-, ):case(title)}"
)
!network clip()
!# the link path needs to be relative to this file
!network echo("../output/mississippi.svg")
```

