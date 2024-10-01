# Tasks
Task is a function call that the system performs. The function call
can be a node function or a network function. The function can have
arguments and keyword arguments that can determine its
functionality. Node functions will be called on a node at a time,
while the network function will be called with the whole network at
once.

Currently tasks are performed one after another. The functions that
any task can use can be internal functions provided by the library or
the external functions provided by the plugins.

A sample tasks file is shown below:
```task
node print_attrs()
network save_graphviz("/tmp/test.gv", offset=1.3, url="{_NAME}")
node savedss(
	"natural",
	"test.dss",
	"/OHIO-RIVER/{_NAME}/01Jan1994/01Jan2012/1Day/NATURAL/"
	)
node check_sf("sf")
node.inputsfirst route_sf("observed")
node render("Node {NAME} at index {INDEX}")
```

Here each line corresponds to one task. And if it's a node task, then
it'll be called for each node (in sequential order by default). The
last line `node.inputsfirst` will call that function in input node
before the current node. Those functions can only be called for
network with an output node.
