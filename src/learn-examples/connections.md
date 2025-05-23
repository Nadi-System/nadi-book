# Connections

Connections between the nodes is the most important part of nadi. you can load networks by loading a file or string. the network is a simple multiline text with one edge (`input -> output`) in each line. comments starting with `#` are supported.


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

we can load a network from a file:



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

Trying to run node functions:

```task run
node render("{NAME}")
```


you can modify the network and then save it to a file as well:
