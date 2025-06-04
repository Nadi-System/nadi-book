# Node Functions

Node functions are run for each node in the network (or a selected group of nodes). Hence, it takes the first argument as `& NodeInner` or `& mut NodeInner` depending on the purpose of the function. Immutable functions can be called from any place, while mutable functions can only be called once on the outermost layer on the task.

Other arguments and the return types for node functions are the same as the environement functions.
