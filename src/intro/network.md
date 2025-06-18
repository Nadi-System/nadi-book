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

The given network can be loaded and visualized using `svg_save` function.

```task run image ../output/network-mississippi.svg
network load_file("./data/mississippi.net")
!network command("mkdir -p output")
network svg_save(
   "./output/network-mississippi.svg",
	label="[{INDEX}] {_NAME:repl(-, ):case(title)}",
	bgcolor="gray"
)
```

You can assign different graphical properties through node properties. 

```task run image ../output/network-mississippi-colors.svg
!network load_file("./data/mississippi.net")
node[red].visual.nodecolor = "red";
node[ohio].visual.linecolor = "blue";
node[ohio].visual.linewidth = 3;
node["upper-mississippi", red].visual.nodesize = 8;
node[red].visual.nodeshape = "triangle";
node["upper-mississippi"].visual.nodeshape = "ellipse:0.5";
network svg_save(
   "./output/network-mississippi-colors.svg",
   label="[{INDEX}] {_NAME:repl(-, ):case(title)}",
	bgcolor="gray"
)
```

