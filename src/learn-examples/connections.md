# Connections

Connections between the nodes is the most important part of nadi. you can load networks by loading a file or string. The network is a simple multiline text with one edge (`input -> output`) in each line. comments starting with `#` are supported.

## Default is Empty Network

Tasks are run by default with an empty network. So you might still be able to work with network attributes, but the nodes will be empty. also note that when you load network it replaces the old one including the attributes.

```task run
network.someattr = 1234;
net.someattr
```

But we can see the nodes are not there,
```task run
network count()
network nodes.NAME
```

Trying to run node functions on the empty network means nothing is run

```task run
nodes render("{NAME}")
```

## Loading Network from String
Here assume we have a network consisting of nodes of dams and gages like the following where dam nodes start with d and gages with g:

```task run image ../output/load-str.svg
network load_str("
d1 -> d2
d3 -> g2
d2 -> g1
g1 -> d4
g2 -> d4
d4 -> g3
");

!network cairo.table("Index => {INDEX}\nName => {NAME}\n", "./output/load-str.svg")
```

## Loading Network from a File
we can load a network from a file:

```task run image ../output/ex-network-conn.svg
command("rm output/ex-network-conn.svg")
network load_file("./data/mississippi.net");

!network cairo.table("Index => {INDEX}\nName => {NAME}\n", "./output/ex-network-conn.svg")
```

## Modifying the network

<div class="warning">
Modification of the network is currently unstable due to the expansion of support from river networks to any kind of directed networks. Further development is necessary to make sure the connections are preserved while subset of a network is taken, and enough functions are provided to modify the network from the DSL. If the results you get are not what you expected, please make an issue in the repository.
</div>

You can modify the network after loading it as well. The example below extracts just the nodes that are dams. Compare this with the previous network to see how the connections are retained during the subsets.

```task run image ../output/simple-count-before-subset.svg
!network load_str("
!d1 -> d2
!d3 -> g2
!d2 -> g1
!g1 -> d4
!g2 -> d4
!d4 -> g3
!");
nodes.is_dam = NAME match "^d[0-9]+";
nodes(is_dam).visual = {nodecolor = "red"};

!network cairo.table("Index => {INDEX}\n<Name => {NAME}\n", "./output/simple-count-before-subset.svg")
```

```task run image ../output/simple-count-subset.svg
!network load_str("
!d1 -> d2
!d3 -> g2
!d2 -> g1
!g1 -> d4
!g2 -> d4
!d4 -> g3
!");
nodes.is_dam = NAME match "^d[0-9]+";
nodes(is_dam).visual = {nodecolor = "red"};
network subset(nodes.is_dam);
!network cairo.table("Index => {INDEX}\n<Name => {NAME}\n", "./output/simple-count-subset.svg")
```

This can be useful when you want to remove nodes that do not satisfy some selection criteria for your analysis without having to redo the network detection part.

