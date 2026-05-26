# Graph Theory
# Graph Theory Examples

This notebook shows example calculations of parameters from graph theory.

```task run image ../output/gt-network.svg
net.load_str("
a->b
b->c
c->d
d->e
c->e
")
!net.cairo.table("Node => {NAME}\n", "./output/gt-network.svg")
```

## adjacency matrix
```task run continue
edge_mat = nodes {
	loc.outs = outputs.NAME
    nodes {str(int(NAME in outs))}
}
adj_mat = nodes {
	loc.inps = inputs.NAME
	loc.outs = outputs.NAME
    nodes {str(int(NAME in inps | NAME in outs))}
}

for v in edge_mat {
	echo(str_join(v, " "))
}
for v in adj_mat {
	echo(str_join(v, " "))
}
```

## Degree of Nodes

```task run continue
nodes {
	[len(inputs._), len(outputs._)]
}
```

## Check for loops
```task run continue
nodes.self_loop = NAME in inputs.NAME;
nodes(self_loop).NAME
```

Let's try one with self loop
```task run
net.load_str("
a->b
b -> c
c -> c
c -> d
")
nodes.self_loop = NAME in inputs.NAME;
nodes(self_loop).NAME
```

This doesn't capture a cycle with multiple nodes though

```task run
net.load_str("
a -> b
b -> c
c -> x
x -> b
c -> d
")
nodes.self_loop = NAME in inputs.NAME;
nodes(self_loop).NAME
```

So we have to check differently, below we check if any node has inputs with order greater or equal than its own, which should not happen in an acyclic directed graph.

Order in NADI is calculated as "max of inputs + 1", except when it has loops like this where we can not calculate that way.

```task run continue
nodes.loop_back = node {
  loc.ord = node.ORDER
  odd = inputs { ORDER >= loc.ord }
  any(*odd)
}
nodes(loop_back).NAME
```

The same logic will work for the previous self loop case.

Note that, if we modify `ORDER >= loc.ord` to have `=`, it will find self loop, if we replace by `>` only, then it will find loops other than self loops.
```task run continue
net.load_str("
a->b
b -> c
c -> c
c -> d
")
nodes.loop_back = {
  loc.ord = node.ORDER
  odd = inputs { ORDER >= loc.ord }
  any(*odd)
}
nodes(loop_back).NAME
```


## Depth of nodes
Let's get back to a simple network, and calculate depth
```task run continue image ../output/gt-network-depth.svg
net.load_str("
a->b
b->c
c->d
d->e
c->e
")
nodes<out>.depth = {
	if (len(outputs._) == 0) { 0 } 
	else { min(outputs.depth, inf) + 1 }
}
!net.cairo.table("Node => {NAME}\nDepth => {depth}", "./output/gt-network-depth.svg")
```

## Eccentricity
The eccentricity of a vertex is the farthest distance from it to any other vertex.

```task run continue
nodes<out>.out_ecc = {
	if (len(outputs._) == 0) { 0 } 
	else { max(outputs.depth, 0) + 1 }
}
nodes<inp>.in_ecc = {
	if (len(inputs._) == 0) { 0 } 
	else { max(inputs.in_ecc, 0) + 1 }
}

nodes.ecc = {
	max([max(inputs.in_ecc + 1, 0), max(outputs.out_ecc + 1, 0)], 0)
}
!net.cairo.table("Node => {NAME}\nIn E => {in_ecc}\nOut E => {out_ecc}\nEccentricity => {ecc}", "./output/gt-network-ecc.svg")
```

![Results of Eccectricity](../output/gt-network-ecc.svg)

I don't know if we can take shortcuts or not, longest distance from `e` to `a` is through `d` (4), but it can be shorter (3).

## Shortest path length

Let's see if we can find a shortest path between a and e

```task run continue
func add_dist(nd) {
    if (nd == "e") { return true }
    loc.d = node[*nd].dist + 1
	node[*nd] {
		outputs{
			node.dist = if (node.dist?) {
				min([node.dist, loc.d], inf)
			} else { loc.d }
		}
	}
    false
}

node[a].dist = 0
nodes<inp> do {
 found = add_dist(node.NAME)	
}

node[e].dist
```

Now would it work on a more complex network? Probably not, because here we depended on the NADI ordering of input nodes before output nodes. A proper algorithm would have to work irrespective of that.

So we have to write an algorithm that can seek the other point


```task run continue
net.load_str("a -> b\n c->d \n a->d \n b->d")

nodes.visual = {nodesize=5}
net.cairo.network("./output/gt-net2.svg")
```

![Example complex network](../output/gt-net2.svg)
