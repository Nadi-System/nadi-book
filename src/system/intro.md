# Core Concepts
This section contains a brief explanation of core concepts. Refer to
the Reference section for the full details on each.

## Node
A Node is a point in network. A Node can have multiple input nodes and
only one output node. And a Node can also have multiple attributes
identifiable with their unique name, along with timeseries values also
identifiable with their names.

If you understand graph theory, then node in nadi network is the same
as a node in a graph.

## Network
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

## Attributes
Attributes are TOML like values. They can be one of the following types:

| Type Name | Rust Type         | Description                             |
|-----------|-------------------|-----------------------------------------|
| Bool      | `bool`            | Boolean values (`true` or `false`)      |
| String    | `RString`         | Quoted String Values                    |
| Integer   | `i64`             | Integer values (numbers)                |
| Float     | `f64`             | Float values (numbers with decimals)    |
| Date      | `Date`            | Date (`yyyy-mm-dd` formatted)           |
| Time      | `Time`            | Time (`HH:MM`, `HH:MM:SS` formatted)    |
| DateTime  | `DateTime`        | Date and Time separed by ` ` or `T`     |
| Array     | `RVec<Attribute>` | List of any attribute values            |
| Table     | `AttrMap`         | Key Value pairs of any attribute values |

## Tasks
Tasks system acts like a pseudo scripting language for nadi system. A
Task is a function call that can either be a node function or a
network function. Functions are unique based on their names, and can
have.

Here is an example contents of a task file:

```task
{{#include ../data/example.tasks}}
```

### Node Function

Node function runs on each node. It takes arguments and keyword arguments.

For example following node function takes multiple attribute names and prints them. The signature of the node function is `print_attrs(*args)`.

```task run
!network load_file("./data/mississippi.net")
node print_attrs("NAME", "uniqueID", "streamflow")
```


Only the `NAME` is printed as they do not have any other attributes.

### Network Function

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
```task run
!network load_file("./data/mississippi.net")
!# need to save in /tmp/ because otherwise it cases
!# infinite loop of rebuilding this file
network save_graphviz("/tmp/test.gv")
!network command("cat /tmp/test.gv", verbose=false)
```

## Help
If you need help on any functions. Use the `help` as a `task`. You can use `help.node` or `help.network` for specific help.

```task run
help.node render()
```

Or you can use `nadi --fnhelp <function>` using the `nadi-cli`.
