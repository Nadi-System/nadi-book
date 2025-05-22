# Counting Nodes

Here assume we have a network consisting of nodes of dams and gages like the following where dam nodes start with d and gages with g:

```task run image ../output/simple-count.svg
!network load_str("
d1 -> d2
d3 -> g2
d2 -> g1
g1 -> d4
g2 -> d4
d4 -> g3
!");
!network export_svg(
!   "./output/simple-count.svg",
!	label="[{INDEX}] {_NAME}"
!)
```

Simply counting number of nodes, or certain types of nodes in a network is done through `count` function.
```task run
!network load_str("
!d1 -> d2
!d3 -> g2
!d2 -> g1
!g1 -> d4
!g2 -> d4
!d4 -> g3
!");
node.g_node = NAME match "^g[0-9]+";
network count()
network count(nodes.g_node)
network count(nodes.g_node) / count()
```
when you call a network function, you get one output, while a node function will give you the output for each node like here:
```task run
!network load_str("
!d1 -> d2
!d3 -> g2
!d2 -> g1
!g1 -> d4
!g2 -> d4
!d4 -> g3
!");
node.g_node = NAME match "^g[0-9]+";
node.g_node
```
Always be careful that node function is run for all the nodes separately, if you are running them without any variables from the node, then you can use network function, or environment function to get the results.


Counting the number of nodes upstream of each node gives us the order of the nodes.
```task run image ../output/simple-count-1.svg
!network load_str("
!d1 -> d2
!d3 -> g2
!d2 -> g1
!g1 -> d4
!g2 -> d4
!d4 -> g3
!");
node<inputsfirst>.nodes_us = 1 + sum(inputs.nodes_us);
!network export_svg(
!   "./output/simple-count-1.svg",
!	label="{_NAME} = {nodes_us}"
!)
```

We can add a condition and count the nodes that satisfy that condition only. Like counting the number of dams upstream of each node (including the node).

```task run image ../output/simple-count-2.svg
!network load_str("
!d1 -> d2
!d3 -> g2
!d2 -> g1
!g1 -> d4
!g2 -> d4
!d4 -> g3
!");
node.is_dam = NAME match "^d[0-9]+";
node<inputsfirst>.dams_us = int(is_dam) + sum(inputs.dams_us);
!network export_svg(
!   "./output/simple-count-2.svg",
!	label="{_NAME} = {dams_us}"
!)
```

You can similarly count the number of gages downstream. Here we need a conditional unlike in previous cases as not all nodes have output. In case of inputs, a leaf node would have no inputs but `sum([])` would still be a valid output of `0`. But for node without output nodes, the variable type `output` fails with `NoOutputNode` error, so we add a conditional check to avoid that.

```task run image ../output/simple-count-3.svg
!network load_str("
!d1 -> d2
!d3 -> g2
!d2 -> g1
!g1 -> d4
!g2 -> d4
!d4 -> g3
!");
node.is_gage = NAME match "^g[0-9]+";
node<outputfirst>.gages_ds = int(is_gage) + if (output._?) {
	output.gages_ds
	} else {
	0
};
!network export_svg(
!   "./output/simple-count-3.svg",
!	label="{_NAME} = {gages_ds}"
!)
```

Here the condition `(output._?)` checks if there is output on the node or not by checking for the dummy variable `_` which is present in all nodes/network.
