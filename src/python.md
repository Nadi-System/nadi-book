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
