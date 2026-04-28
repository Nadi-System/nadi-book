# Evaluation Context

The most important concept in NADI is the evaluation context. This determines how your expressions are evaluated, and how everything is understood.


## Variable Type
We have learned about attributes before, depending on what attribute you are setting or getting, you need to use the varible type for that.

For example, by default you set or get a local variable

```task run
x = 90
x
```

if you want to set an `env` variable, or `network` variable you need to specify. Those variable are saved as `env` or `network` attributes, and are only accessible by specifying them as variable type.
```task run
env.x = 90
env.x
net.x = 9
net.x
x
```

There are more varible types when you have access to a network, for example the `nodes`, `leaves` and `roots` are always accessible and refers to the attributes from all nodes, leaf nodes and root nodes.

```task run
network load_str("a -> b")
nodes.NAME
leaves.NAME
roots.NAME
```
And their map counterparts are also available
```task run
network load_str("a -> b")
nodesmap.NAME
leavesmap.NAME
rootsmap.NAME
```
You can shorten `nodesmap` to `nm`, `leavesmap` to `lm` and `rootsmap` to `rm`. 

Next are the variables available only in a node context
```task run
network load_str("a -> b")
node[b].NAME
node[b] input.NAME
node[a] output.NAME
node[b] inputs.NAME
node[a] outputs.NAME
```
the `inputs` and `outputs` also have map counterparts. The singular variable type `input` and `output` error out if there are more than one, or no inputs or outputs in a node.

## Context Expression
Context expression are expressions that are evaluated given a context. You can have any variable type as a context for an expression. In a way a variable is a context expression with a variable name.

Context expressions have two syntax format:

- `<context> <space> <expression>`: here the expression is simple expression, and the context is only separated by a space. We have used this variation in the codes above already
- `<context> { <expression> }`: here the expression can be more complex or nested with other contexts as well

For example the following three ways to set/get `env` expressions exist. First one directly sets and evals the environmental variable, while the bottom two do it through context expressions
```task run
env.x = 10
env.x
# or you can do
env {x = 100}
env {x}
# or you can do
env x = 200
env x
```

Be careful that, the default evaluation context is `local` context. The variables are local variables, and if variable type is not given, it will first try to resolve using `local` variables before looking at the current context.

Here, for example, we set a variable, but it can only be accessed as a local variable.
```task run
network.load_str("a -> b")
x = 12
env.x
nodes.x
network.x
x
loc.x
```

but if we are trying to evaluate in terms of some context, then the local variable will be used.

```task run
network.load_str("a -> b")
x = 12
env.x = 100
network.x = 100
env x
nodes x
network x
x
loc x
```

## Setting variables
Now that we know what context expressions are, it is important to know that while setting an attribute, we are evaluating the expression with a context.

For example, setting an environment variable means we will evaluate the right side with environment context. While setting `nodes` variable means we are evaluating the right side with each node as a context for all the nodes, and setting them individually.

Here, each time `NAME` is evaluated in the context of the current node being set, resulting in different answers set to `x`.
```task run
network.load_str("a -> b");
nodes.x = NAME
nodes.x
```

## Return Value from Context Expression

By default, the context expressions return value same as the one from variable type (array and map variant).

but you can use the `do` keyword to tell nadi to just execute the statement and not return a value. This avoids nadi reporting `None` values for statements that do not return values.

```task run
network.load_str("a -> b")
nodes {
   node.x = [NAME, ORDER]
}
"no output"
nodes do {
   node.x = [NAME, ORDER]
}
```

## Multiple Context Expressions
The context expressions can have multiple statements inside of it, and you can make the expression as complex as you want.

For example, if you want sum of input nodes's some value for all nodes:
```task run
network.load_str("a -> b");
nodes.x = 1;
nodes.y = sum(inputs.x)
nodes.y
```

Can also be done like below, but here you need to run input nodes before the output node as you want to set the `x` of input nodes before you calculate `y` of the output node. This ordering feature from nadi allows you do simplify your calculation logic.

```task run
network.load_str("a -> b");
nodes<inp> do {
	node.x = 1;
	node.y = sum(inputs.x)
}
nodes.y
```


## Nested Context Expressions

Now that you understand context expressions, you can use them in a nested format as well if you need.

Here we do the same thing as before, but in unnecessarily complex and nested way.
```task run
network.load_str("a -> b");
nodes<inp> do {
	node.y = sum(inputs {
		node.x = 1;
		x
	})
}
nodes.y
```
