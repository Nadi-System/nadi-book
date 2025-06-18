# Nadi Python Library

This can be installed from `pypi` with `pip install nadi-py` command.

Then you can simply import and use it:

```python
import nadi

net = nadi.Network.from_str("a -> b")
print([n.NAME for n in net.nodes])
```

The functions are available inside the `nadi.functions` submodule.

```python
import nadi
import nadi.functions as fn

net = nadi.Network.from_str("a -> b")
fn.network.svg_save(net, "test.svg")
```

The difference from Task system is that now we use python syntax and the python functions. The environment from task system is no longer available, and the node functions are not automatically run in a loop.

We lose the advantages brought by the Domain Specific Programming Language, while gaining the flexibility and the well developed libraries of the python language.

To use this book from python, you just have to change the syntax, some examples are:

## Example 1
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

## Example 2
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

# Combining the power of python and Task System
You can combine the power of python with task system using the `command` function from Nadi. Basically, you write your logic that cannot be written in nadi in python, you can use `nadi-py` if you need to parse network files, load attributes or call any other nadi functions. And you can pass the results of the python script at the end by simply printing it to the standard output.

Future work is under consideration to have a tight couple between the python and nadi system.
