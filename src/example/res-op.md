# Reservoir Operating Rules

This example shows an example of a simple network with a reservoir and how it impacts the downstream flows.

First let us generate a random network
```task run image ../output/ro-reservoir-table.svg
net.random_tree(8, seed=1232434)
nodes.reservoir = false
# define two reservoirs
nodes[7,1].reservoir = true

# a function to generate flows
func gen_flow(seed, ind){
	random(seed+ind) * int(random_bool(0.3, seed+ind)) * (1 + int(random_bool(0.1, seed+ind)))
}

N = 40
# define flows at the leaves
nodes.noleaves = true;
leaves.noleaves = false;
leaves$flows = [gen_flow(INDEX, i) for i in 1:N]
nodes(noleaves)$local_flows = [{gen_flow(INDEX,i)/2} for i in 1:N]
nodes<inp>(noleaves)$flows = $local_flows + (inputs$flows -> @sum)

nodes.mean_flow = sr_mean("flows")
nodes.max_flow = $flows ->+ func(a, LAST=0) {max([a, LAST], 0)}

# rudimentary visualization of the network with flow series
nodes(reservoir).visual = {nodeshape="box", nodecolor="black"}
net.cairo.plot("flows", "./output/ro-reservoir-table.svg", normalize=true)
```

```task run continue
nm<inv> {sr_min("flows")}
```

Now let us have a simple rule, that reservoirs operate by providing flows at a constant if it is less than mean flow at that location


```task run continue
nodes[7].low_flow_limit = 0.05
nodes[1].low_flow_limit = 0.1
leaves$c_flows = $flows
nodes<inp>(noleaves)$c_flows = if (reservoir) {
	($local_flows, inputs$c_flows) -> func(l, i) {
		x = l + sum(i);
		# we can use node variables because it is a node context
		max([x], node.low_flow_limit)
	}
} else {
	$local_flows + (inputs$c_flows -> @sum)
}

!net.cairo.plot("c_flows", "./output/ro-reservoir-table-2.svg", normalize=true)
```

![Output Image](../output/ro-reservoir-table-2.svg)


If we look at the minimum flows, we can see how it has maintained the provided minimum flows from the reservoirs onwards.
```task run continue
nm<inv> {[sr_min("flows"), sr_min("c_flows")]}
```

Of course we did not put any mass balance into the equation. We can't simply provide the extra flow without taking it from somewhere, so we should make a storage value and save it.

Let's provide both reservoirs with storage values of 5 unit. And see how it changes when we provide the minimum flow by augmenting the flow using storage.

```task run continue
nodes(reservoir).storage = 5.0

leaves$c_flows = $flows
nodes<inp>(noleaves)$c_flows = if (reservoir) {
	($local_flows, inputs$c_flows) -> func(l, i) {
		x = l + sum(i);
	    if (x < node.low_flow_limit) {
			aug = node.low_flow_limit - x
			node.storage = node.storage - aug
			node.low_flow_limit
		} else {x}
	}
} else {
	$local_flows + (inputs$c_flows -> @sum)
}
nm<inv>.storage
```

The storage at the end shows how much of the water was used up to provide the minimum flows.


Now, let's try to maintain the storage at a certain level by taking excess values from the flows when it has more than the minimum.

```task run continue
nodes(reservoir).storage = 5.0

leaves$c_flows = $flows
nodes<inp>(noleaves)$c_flows = if (reservoir) {
	($local_flows, inputs$c_flows) -> func(l, i) {
		x = l + sum(i);
	    if (x < node.low_flow_limit) {
			aug = node.low_flow_limit - x
			node.storage = node.storage - aug
			node.low_flow_limit
		} else {
			if (node.storage >= 5.0) { x } else {
				excess = x - node.low_flow_limit
				take = excess * 0.8
				node.storage = storage + take
				x - take
			}
		}
	}
} else {
	$local_flows + (inputs$c_flows -> @sum)
}
nm<inv>.storage
```

While we have more water in storage here compared to the previous, we still did not recover the storage loss, this is because our minimum flow was arbritary

```task run continue
net.cairo.plot("c_flows", "./output/ro-reservoirs-final.svg", normalize=true, config={delta_y=40.0})
```

![Output Image](../output/ro-reservoirs-final.svg)


Let's look at the mean, minimum and maximum flows at the nodes before and after the reservoir operation rules.
```task run continue
nm<inv> {[sr_mean('flows'), sr_mean('c_flows')]}
```
```task run continue
nm<inv> {[sr_min('flows'), sr_min('c_flows')]}
```
```task run continue
nm<inv> {[sr_max('flows'), sr_max('c_flows')]}
```

# Conclusion

In this chapter we generated a sample network, assigned two nodes as reservoirs and defined rules to provide minimum flows as well as algorithms to recover storage volume.


# Bonus HEC-DSS

For bonus, let's save the data into HEC-DSS format.

```task run continue
nodes do dss.save_series($flows, "./output/ro-reservoir-test.dss", r"/{NAME}/Flow/1910Jan01//1Day/F/")
nodes do dss.save_series($flows, "./output/ro-reservoir-test.dss", r"/{NAME}/ModFlow/1910Jan01//1Day/F/")
```

You can download the dss and test it [here](../output/ro-reservoir-test.dss)
