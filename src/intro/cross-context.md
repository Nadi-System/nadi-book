# Cross Context Functions and Variables

You can access variable and call functions based on their default context (e.g. node variable/function in a node task). Additionally, you can also access the variables or call functions in select few other context.

By default, if a function is not available, node/network task calls the environment function of the same name.

For example, here the `sum` and `array` functions are environment functions, while the `count` is a network function. When you use Nadi IDE, it'll show you which function is actually being called at the top of the editor.
```task run
network load_str("a->b")
network sum(array(count(), 1))
```

Besides this, you can manually call cross context variable/functions in the following ways:
## Env and Network Variables/Functions
You can use `env` and `network` variables anywhere in the task system with the dot syntax.

```task run
! network load_str("a->b")
env.var = 12;
network.sth = true;

env render("this is {x}", x = network.sth)
network str(env.var)
node array(network.sth, env.var, node.NAME)
```


Similary, env and network functions can be called anywhere. These functions cannot be mutable functions (change network internally).

Taking the previous example, if we use env function `count`, we get an error as the function arguments are different.
```task run
network load_str("a->b")
node network.count()
network sum(array(env.count(), 1))
```

## Node Variables/Functions
You can use `node`, `inputs`, `output` and `nodes` keywords to access node variables and functions from different contexts. `nodes` is valid in all tasks, while the other 3 are only valid in a node task and refer to the current node, input nodes and output node respectively.

```task run
!network load_file("./data/mississippi.net")
env count(nodes._)
node inputs.NAME
```

You can call node functions not just for the node in the context, but also for input nodes, and output node:

Please note that the root node (outlet) of the network doesn't have output node, so we need to skip that, which can be done through the `output._?` which is checking for the dummy variable `_` in `output`, which is true if the node has an output.

```task run
!network load_file("./data/mississippi.net")
node[tenessee -> "lower-mississippi"] inputs.render("{_NAME}")
node[tenessee -> "lower-mississippi"](output._?) output.render("{_NAME}")
```

You can also use `nodes` keyword to call the function on each node, it can be used anywhere, but is useful for env and network tasks.
```task run
!network load_file("./data/mississippi.net")

env nodes.render("Node [{INDEX}] {_NAME}")
```
