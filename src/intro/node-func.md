# Node Function
Node function runs on each node. It takes arguments and keyword arguments.

For example following node function takes multiple attribute names and prints them. The signature of the node function is `print_attrs(*args)`.

```task run
!network load_file("./data/mississippi.net")
node print_attrs("INDEX", name=false)
```

Only the `NAME` is printed as they do not have any other attributes.

## Selective Execution
You can selectively run only a few nodes, or change the order the
nodes are executed.

Given this network:

<center>

![Network Diagram](../data/mississippi.svg)

</center>


### Inverse Order
```task run
!network load_file("./data/mississippi.net")
node<inverse> print_attrs("NAME")
```

## List of Nodes
```task run
!network load_file("./data/mississippi.net")
node[tenessee,"lower-mississippi"] print_attrs("NAME")
```

## Path of Nodes
```task run
!network load_file("./data/mississippi.net")
node[tenessee -> "lower-mississippi"] print_attrs("NAME")
```

As we can see in the diagram, the path from tenessee to lower
mississippi includes the ohio node.
