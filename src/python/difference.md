# Differences with Task System

The difference from Task system is that now we use python syntax and the python functions. The environment from task system is no longer available, and the node functions are not automatically run in a loop.

We lose the advantages brought by the Domain Specific Programming Language, while gaining the flexibility and the well developed libraries of the python language.

Some examples showing how you'd have to write python codes from equivalent examples in the book are shown below.

## Example 1: looping through the nodes
```task run
network load_str("a -> b\nc -> b")
node(output._?) echo(env.render("{i} -> {o}", i=node.INDEX, o=output.INDEX))
```

Equivalent Python:
```python
import nadi

net = nadi.Network.from_str("a -> b\nc -> b")
for node in net.nodes:
    out = node.output()
	if out is None:
	    continue
    print(f"{node.INDEX} -> {out.INDEX}")
```

Here the code for python is longer because it is general purpose and doesn't have the syntax tailored for network analysis like with Nadi Task System.

## Example 2: Skip execution when variable is absent
If we had to check for an attribute, then it becomes even more complicated.

```task
node(somevar?) somefunc(somevar)
```

```python
import nadi
import nadi.functions as fn

net = nadi.Network.from_str("a -> b\nc -> b")
for node in net.nodes():
	try:
	    fn.node.somefun(node, node.somevar)
	except AttributeError:
	    continue
```
In case of multiple variables being used, the `AttributeError` might catch all of them, further fine tuning in python could make the code far longer than in nadi.
