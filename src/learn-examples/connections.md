# Connections

Connections between the nodes is the most important part of nadi. you can load networks by loading a file or string. The network is a simple multiline text with one edge (`input -> output`) in each line. comments starting with `#` are supported.

## Default is Empty Network

Tasks are run by default with an empty network. So you might still be able to work with network attributes, but the nodes will be empty. also note that when you load network it replaces the old one including the attributes.

```task run
network.someattr = 1234;
network.someattr
```

But we can see the nodes are not there,
```task run
network count()
network nodes.NAME
```

Trying to run node functions on the empty network means nothing is run

```task run
node render("{NAME}")
```

## Loading Network from String
Here assume we have a network consisting of nodes of dams and gages like the following where dam nodes start with d and gages with g:

```task run image ../output/simple-count.svg
network load_str("
d1 -> d2
d3 -> g2
d2 -> g1
g1 -> d4
g2 -> d4
d4 -> g3
");
!network svg_save(
!   "./output/simple-count.svg",
!	label="[{INDEX}] {_NAME}"
!)
```

## Loading Network from a File
we can load a network from a file:

```task run image ../output/ex-network-conn.svg
network load_file("./data/mississippi.net");
!network svg_save(
!   "./output/ex-network-conn.svg",
!	label="[{INDEX}] {_NAME}"
!)
```

## Modifying the network
You can modify the network after loading it as well. The example below extracts just the nodes that are dams. Compare this with the previous network to see how the connections are retained during the subsets.

```task run image ../output/simple-count-subset.svg
!network load_str("
!d1 -> d2
!d3 -> g2
!d2 -> g1
!g1 -> d4
!g2 -> d4
!d4 -> g3
!");
node.is_dam = NAME match "^d[0-9]+";
network subset(nodes.is_dam);
!network svg_save(
!   "./output/simple-count-subset.svg",
!	label="[{INDEX}] {_NAME}"
!)
```

This can be useful when you want to remove nodes that do not satisfy some selection criteria for your analysis without having to redo the network detection part.
