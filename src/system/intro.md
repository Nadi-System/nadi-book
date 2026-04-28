# Core Concepts
This section contains a brief explanation of core concepts.

The main concepts that you need to know are:

- **Attributes** are values, it can be float, integer, boolean, strings, or list of attributes, or a map of attributes (key=value),
- **Expression** is something that can be evaluated or executed, it consists of literal values (attributes), variables (node, network, env variables that could hold attributes), function calls, or a mathmatical or logical operation.
- **Nodes** are points in the network, they can have attributes, input nodes and an output node. Different types of nodes are:
  - Input Node: node that leads into a node,
  - Output Node: node that the current node leads into,
  - Edge Node: node that is connected to the current node,
  - Leaf Node: node with no input nodes, and
  - Root Node: node with no output nodes.
- **Network** is a collection of nodes, network can also have attributes. Loading a network that is not a directed tree is undefined behaviour.
- **Task** is an execution body of the task system. It can be of env, network or node type. It can be conditional (If-Else) or loop (While) consisting of more tasks inside it. Task can assign values to the env/network/node attributes, or call mutable functions on the top level.
- **Functions** in nadi are of 3 types, env functions are normal functions that take values and run, network functions take values and run on the network, while node functions run at each node (they also provide a way to subset which nodes to run it on).
- **String Template**: Some functions take string inputs that are interpreted dynamically to represent different strings based on variables.
- **Plugins** provide the functions used by the nadi task system. There are internal plugins and external plugins. Internal plugins comes with the installation, while external plugins are loaded from dynamic libraries.

## Keywords

The keywords in the language are listed below. You can not use keywords as variables or function names. If you use `nadi_plugin` to generate your plugin functions, it will check for that.

Know that the keywords here are a bit more numerous than a typical language as nadi is a domain specific language, and it is designed to make it easier to represent and work with network related structures. As such, many keywords are available to directly denote many types of nodes in a given context. For more details on node related keywords goto [Evaluation Context](../intro/context.md)
 Chapter
| Keyword       | Description                                                            |
|---------------|------------------------------------------------------------------------|
| clear         | Clear the task context                                                 |
| import        | import functions from an external tasks file                           |
| exec          | execute an external tasks file                                         |
| from          | to use paths other than current directory for `exec` and `import`      |
| node          | represents the current node                                            |
| network/net   | represents the current network (only one in this version)              |
| env           | the environment task type, function or variable                        |
| exit          | exit the program                                                       |
| end           | end the execution of tasks without exiting                             |
| help          | display help for functions                                             |
| input         | represents a single input node of a node                               |
| inputs        | represents multiple input nodes of a node                              |
| inputsmap/im  | represents a map for input nodes of a node                             |
| output        | represents a single output node of a node (only one in this version)   |
| outputs       | represents multiple output nodes of a node (only one in this version)  |
| outputsmap/om | represents a map for output nodes of a node (only one in this version) |
| edge          | represents a single edge node of a node                                |
| edges         | represents multiple edge nodes of a node                               |
| edgesmap/em   | represents a map for edge nodes of a node                              |
| root          | represents a single root node of a network                             |
| roots         | represents all root nodes of a network                                 |
| rootsmap/rm   | represents a map of all root nodes of a network                        |
| leavess       | represents all leaf nodes in the network                               |
| leavesmap/lm  | represents a map of all leaf nodes in the network                      |
| nodes         | represents all nodes in the network                                    |
| nodesmap/nm   | represents a map of all nodes in the network                           |
| if            | if statement for conditional task/expression                           |
| else          | else statement for conditional task/expression                         |
| for           | for loop task for looping through array/attrmap                        |
| while         | while statement for loops                                              |
| loop          | infinite loop that can only be broken through break statements         |
| break         | break statement inside a loop                                          |
| continue      | continue statement inside a loop                                       |
| try           | try statement to contain tasks                                         |
| catch         | catch statement when error occurs on try block                         |
| in            | binary operator to check if something is in another (list/string)      |
| in            | keyword in for loop to determine the parent attribute to loop from     |
| match         | binary operator to check patterns on string (regex)                    |
| hook          | hook tasks to run at each execution                                    |
| local/loc     | Local; similar to environment but within current locale                |
| function/func | user defined functions                                                 |
| return        | return statement inside function                                       |
| error         | raises an error while evaluating                                       |
| progress      | send a progress signal from anywhere                                   |
| do            | execute the current context without expecting value                    |

And here are some keywords reserved for future:
| Keyword          | Description                                                     |
|------------------|-----------------------------------------------------------------|
| networks         | represents all the networks (only one in this version)          |
| networksmap/netm | represents a map of all the networks (only one in this version) |
| par              | execute the current context in parallel                         |
| dopar            | execute the current context in parallel without expecting value |
| map              | map values in an array/attrmap to a function                    |
| attrs            | attributes of the current context                               |

As seen in the keywords, there are plans to support multiple networks, as well as parallel execution.

## Symbols
Some special symbols and their functions are listed below:
- `.` dot accessor for variables, e.g. `node.var`, `node.var.another`, etc.,
- `?` variable check (only used after a variable) e.g. `node.var?` evaluates to a `true` or `false`,
- `()`, `{}`, `[]` brackets for functions/expressions, attrmaps and arrays,
- `;` suppress current task output (only used at the end of a task),
- `+`, `-`, `*`, `/`, and `//` are mathematical operators,
- `&`, `|`, and `!` are logical operators,
- `>`, `<`, `>=`, `<=`, and `==` are comparision operators,
- `->` path operator (only used in node propagation, or network),
- `=` is assignment operator,
- `#` starts a comment,
- `$` for series/timeseries access,
- `@` for Function pointers

There might be more functions of each symbol depending on the context.


Continue with the chapters for details on each concept. Or skip ahead to [Learn by Examples](../learn-examples.md) if you want to jump into the examples.
