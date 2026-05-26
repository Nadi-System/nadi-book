# Flow routing in River Network

This example shows how you can build a basic routing model using NADI.

Here is a random network that is a directed tree, without any bifurcations.
```task run image ../output/rm-routing-net.svg
net random_tree(25, 5, seed=10)
net.cairo.network("./output/rm-routing-net.svg")
```

Lets do a simple streamflow routing, few assumptions,
- there is random precipitation of upto 50 units, precipitation only happens 20% of the days
- the evaporation/interception etc loss are 10% of the precip or 5 units, whichever is higher
- all the nodes represent basin area of 1 unit

```task run continue
func rand_precip(s) {
  if (random_bool(0.2, seed=s%7+node.INDEX)) {
    v = random(seed=s+node.INDEX) * 50
	int(v * 4) / 4
  } else { 0.0 }
}

func precip_loss(p) {
	min([max([p * 0.1, 5], 0), p], inf)
}

nodes$precip = [rand_precip(i*17) for i in 1:10]
nodes$loss = $precip -> @precip_loss

nodes$runoff = ($precip, $loss) -> func(p, l) {p - l}
leaves$sf = $runoff

nodes.inps = len(inputs._) > 0

nodes<inp>(inps)$sf = (inputs$sf, $runoff) -> @sum

nm $sf
```

We have the results but let's visualize it

```task run continue
env.progr = ["▁" ,"▂" ,"▃" ,"▄" ,"▅", "▇"]
max_sf = max(nodes { max([v for v in $sf], 0) }, 0)
max_pr = max(nodes { max([v for v in $precip], 0) }, 0)

func get_bar(p, m) {get(env.progr, int(p * (len(env.progr) - 1) / m))}

nodes.pvis = str_join([get_bar(p, max_pr) for p in $precip])

nodes.svis = str_join([get_bar(p, max_sf) for p in $sf])
nm<inv> [pvis, svis]
```

The first set of bars is pecipitation, and second set is the streamflow. Let's draw it with network diagram.

```task run continue
net.svg_save("./output/rm-prec2.svg", label="{pvis} -> {svis}", width=200.0, height=325.0, bgcolor="white")
```

![Output Image from svg](../output/rm-prec2.svg)

Because our precipitation was random, as we move downstream the streamflow starts to get more regular.

We can also see how the streamflow is collected through the routing process.

A better visualization could be done through future plugins, but this is just an example of how you can program things in NADI to do what you want.
