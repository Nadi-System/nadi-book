# Network Function

Network function runs on the network as a whole. It takes arguments and keyword arguments. Few network functions we have been using throughout the examples are `load_file`, `load_str` and `svg_save`:

```task run image ../output/network-mississippi-sdf.svg
network load_file("./data/mississippi.net")
!network command("mkdir -p output")
network svg_save(
   "./output/network-mississippi-sdf.svg",
	label="[{INDEX}] {_NAME:repl(-, ):case(title)}",
	bgcolor="gray"
)
```

<div class="warning">
The examples below use the graphviz plugin. Make sure you have it loaded. Refer to the plugins section to learn how to load the plugins in to the Nadi System.
</div>

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
