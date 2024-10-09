# Network Function


Network function runs on the network as a whole. It takes arguments and keyword arguments.

For example following network function takes file path as input to save the network in graphviz format:
```sig
save_graphviz(
	outfile [PathBuf],
	name [String] = "network",
	global_attrs [String] = "",
	node_attr [Option < Template >],
	edge_attr [Option < Template >]
)
```

Note that, if the arguments have default values, or are optional, then you do not need to provide them.

For example, you can simply call the above function like this.
```task run file
!network load_file("./data/mississippi.net")
network save_graphviz("./output/test.gv")
!network clip()
!# the path link are relative to /src
!network echo("./output/test.gv")
```

With extra commands you can also convert it into an image
```task run image
!network load_file("./data/mississippi.net")
!network save_graphviz("./output/test.gv")
network command("dot -Tsvg ./output/test.gv -o ./output/test.svg")
!network clip()
!# the link path needs to be relative to this file
!network echo("../output/test.svg")
```
