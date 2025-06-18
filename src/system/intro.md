# Core Concepts
This section contains a brief explanation of core concepts.

The main concepts that you need to know are:

- **Attributes** are values, it can be float, integer, boolean, strings, or list of attributes, or a map of attributes (key=value),
- **Nodes** are points in the network, they can have attributes, input nodes and an output node,
- **Network** is a collection of nodes, network can also have attributes, Network used in the Nadi system can have only one outlet, so a 'ROOT' node is added if there are multiple outlet. And loading a network that is not a directed tree is undefined behaviour.
- **Expression** is something that can be evaluated or executed, it consists of literal values (attributes), variables (node, network, env variables that could hold attributes), function calls, or a mathmatical or logical operation.
- **Functions** in nadi are of 3 types, env functions are normal functions that take values and run, network functions take values and run on the network, while node functions run at each node (they also provide a way to subset which nodes to run it on).
- **Task** is an execution body of the task system. It can be of env, network or node type. It can be conditional (If-Else) or loop (While) consisting of more tasks inside it. Task can assign values to the env/network/node attributes, or call mutable functions on the top level.
- **String Template**: Some functions take string inputs that are interpreted dynamically to represent different strings based on variables.

## Keywords

| Keyword     | Description                                                       |
|-------------|-------------------------------------------------------------------|
| node        | the node task type, function or variable                          |
| network/net | the network task type, function or variable                       |
| env         | the environment task type, function or variable                   |
| exit        | exit the program                                                  |
| end         | end the execution of tasks without exiting                        |
| help        | display help for functions                                        |
| inputs      | get node variables or function output for input nodes of a node   |
| output      | get node variable or function output for output node of a node    |
| nodes       | get node variable or function output for all nodes in the network |
| if          | if statement for conditional task/expression                      |
| else        | else statement for conditional task/expression                    |
| while       | while statement for loop task                                     |
| in          | binary operator to check if something is in another (list/string) |
| match       | binary operator to check patterns on string (regex)               |

And here are some keywords reserved for future:
| Keyword       | Description                                     |
|---------------|-------------------------------------------------|
| function/func | user defined functions                          |
| map           | map values in an array/attrmap to a function    |
| attrs         | attributes of the env/node/network              |
| loop          | loop task                                       |
| for           | for loop task for looping through array/attrmap |


Continue with the chapters for details on each concept. Or skip ahead to [Learn by Examples](/learn-examples.md) if you want to jump into the examples.
