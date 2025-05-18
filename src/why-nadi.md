# What is NADI System?

Network Analysis amd Data Integration (NADI) System is a system of programs made to make network based data analysis easier and more accessible.

It consists of multiple tools, that do two important functions, network detection and network analysis. First part is done throuh the Geographic Information (GIS) Tool, while the second part is done using a Domain Specific Programming Language (DSPL) called NADI Task system.

![Nadi Workflow](./images/nadi-workflow-simple.svg)

# Why use NADI System?
## Network Based Data Analysis
If you have data that are network based, like in case of data related to points in a river. 

## Task System
The Domain Specific Programming Language (DSPL) developed for network analysis in NADI makes network analysis simple and intutive. So, it is easier to understand, interpret and catch mistakes. While the NADI IDE has network visualization tools built in that can help you visualiza the network attributes for visual analysis.

For example, implementing "cumulative sum of streamflow" in nadi:

```task
node<inputsfirst>.cum_sf = node.streamflow + sum(inputs.streamflow);
```

The trying to do this in Python while making sure input nodes are run before the output. So you might have to write a recursive algorithm like this:

```python
def cum_sf(node):
	node.cum_sf = node.streamflow + sum([cum_sf(i) for i in node.inputs()])
	return node.cum_sf

cum_sf(network.outlet())
```

While a common mistake people might make is to write a simple loop like this:
```python
for node in network.nodes():
    node.cum_sf = node.streamflow + sum(
	    [i.streamflow for i in node.inputs()]
	)
```
Which doesn't make sure input nodes are run before output in this case, and can error out when some variables are not present. NADI provides special syntax for cases where you can make sure variables exist before running something.

## Extensibility
NADI has two types of plugin systems, which means users can write their own analysis in any programming language and have it interact with NADI through attributes, or they can write it in rust and have even more direct interaction.
