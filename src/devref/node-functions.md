# Node Functions
Node functions are functions that take a node, and the function
context to do some operations on it. They take mutable reference to
the node, hence can read all node attributes, inputs, outputs, their
attributes and timeseries.

Node functions can be run from the system for all the nodes in the
network in different orders.

Currently the task system only supports running node functions for all
nodes in the following 6 ways,
- Sequential order,
- Reverse order,
- Run input nodes before the current node (recursively),
- Run output node before the current node (recursively),
- Run a list of nodes, and
- Run on a path between two nodes (inclusive).
  
Depending on the way the function works, it might be required to be
run in a particular order. For example, a function that counts the
number of dams upstream of each point, might have to be run inputs
first, so that you can cumulate the number as you move downstream.
