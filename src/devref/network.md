# Network

Collection of Nodes, with Connection information. The connection
information is saved in the nodes itself (=inputs= and =output=
variables), but they are assigned from the network.

The nadi system (lit, river system), is designed for the connections
between points along a river. Out of different types of river networks
possible, it can only handle non-branching tributaries system, where
each point can have zero to multiple inputs, but can only have one
output. Overall the system should have a single output point. There
can be branches in the river itself in the physical sense as long as
they converse before the next point of interests. There cannot be node
points that have more than one path to reach another node in the
representative system.

Network file are simple text files with each edge on one line. Node
names can be words with alphanumeric characters with the additional
character `_`, similar to how rust identifiers work. The Node names
can also be quoted strings, in those cases any characters are
supported inside the quotes.

Here is an example network file,

```network
cannelton -> newburgh
newburgh -> evansville
evansville -> "jt-myers"
# comments are supported
"jt-myers" -> "old-shawneetown"
"old-shawneetown" -> golconda
markland -> mcalpine
golconda -> smithland
```

Drawing it out:
```task run image ../output/mississippi.svg
!network load_file("./data/mississippi.net")
network svg_save(
   "./output/mississippi.svg",
	label="[{INDEX}] {_NAME:repl(-, ):case(title)}"
)
!network clip()
!# the link path needs to be relative to this file
!network echo("../output/mississippi.svg")
```


The program also plans to support the connection import from the [DOT
format (graphviz package)](https://graphviz.org/doc/info/lang.html).

Network file without any connection format can
be written as a node per line, but those network can only call
sequential functions, and not input dependent ones.

Depending on the use cases, it can probably be applied to other
systems that are similar to a river system. Or even without the
connection information, the functions that are independent to each
other can be run in sequential order.
