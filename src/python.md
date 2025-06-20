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


# Combining the power of python and Task System
You can combine the power of python with task system using the `command` function from Nadi. Basically, you write your logic that cannot be written in nadi in python, you can use `nadi-py` if you need to parse network files, load attributes or call any other nadi functions. And you can pass the results of the python script at the end by simply printing it to the standard output.

Future work is under consideration to have a tight couple between the python and nadi system.
