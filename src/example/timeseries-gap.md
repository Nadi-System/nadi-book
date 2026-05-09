# Timeseries Gap Identification

<div class="warning">
In this example we will use `nadi_csv` plugin to load CSV files. The plugin is external, refer to the installation page to install it into the NADI System.

Different from other chapters, the code in this chapters are run in the order they are given, meaning each task code blocks are not independent.
</div>

Load the network
```task run image ../output/scioto-net.svg
network load_file("data/scioto/scioto.network")

!network cairo.table("<Name => {NAME}", "output/scioto-net.svg")
```

Load timeseries data from CSV, and convert any timeseries without gaps into a complete one.

We can see the number of valid data and number of total data to see that the timeseries have gaps on them.
```task run continue
network csv.load_timeseries("data/scioto/scioto.csv", "date", "streamflow");
# in future version csv.load_timeseries should do this while loading
nodes do ts_complete("streamflow")

nodesmap array(ts_len("streamflow", valid=true), ts_len("streamflow"))
```

None of the timeseries are complete. We can visualize the gaps using the 
```task run continue
nodes.good = (ts_len("streamflow", valid=true) / ts_len("streamflow")) > 0.75
nodes.visual = {};
nodes.visual.nodeshape = "circle";
nodes(good).visual.nodecolor = "darkgreen";
nodes(good).visual.textcolor = "darkgreen";
node[03221646].visual.nodecolor = "red"; # for later
network svg_ts_blocks("output/scioto-ts-gap-id.svg", "{NAME}", "streamflow", 620.0, 820.0, arr_width=500.0, bgcolor="#ffffff33")
```

![Plot Showing the Data Gaps in the CSV](../output/scioto-ts-gap-id.svg)

We can use the series map function in NADI to fill the gaps in timeseries using other nodes. The example below shows just two nodes using one to fill the other.

```task run continue
# example to fill timeseries with a value from another node
node[03229610]$sf_fix = ($$streamflow, node[03227500]$$streamflow) -> func(a=false, b=false) {
	if (a == false & b == false) {return}
	if (a == false) { float(b) } else { float(a) }
}

node[03229610]$$streamflow
node[03229610]$sf_fix
```

We can see the data is filled here, in the beginning the data comes from the node `03227500`, while at the end we can see the data comes from the node itself.
```task run continue
node[03229610]$sf_fix[0:100]
nm[03229610,03227500] {$$streamflow[0:100]}

l = node[03229610].sr_len("sf_fix")-1
s = l - 500
node[03229610]$sf_fix[s:l]
nm[03229610,03227500] {$$streamflow[s:l]}
```

Now while this was an example where we manually chose which node to use to fill the other. You probably noticed that we can't simply fill the value in many cases, or you might want to use multiple nodes, or automate it. In that case you can simply use the `inputs`/`outputs`/`edges` or any other keywords in similar manner to use the timeseries from connected nodes, as well as using other attribute values to weight or scale the values.

```task run continue
node[03229610]$sf_fix2 = ($$streamflow, im$$streamflow) -> func(a=false, b=false) {
	if (a == false & b == false) {return}
	if (a == false) {
      if (len(b) == 0) {return}
	  sum([float(i) for i in values(b)])
	} else { float(a) }
}

node[03229610]$sf_fix[1000:1200]
node[03229610]$sf_fix2[1000:1200]

node[03229610]$sf_org = $$streamflow -> func(a="") {
	if (a != "") {float(a)}
}
# need to add the ability to calculate mean of maskedseries

node[03229610] {[sr_mean("sf_org"), sr_mean("sf_fix"), sr_mean("sf_fix2")]}
```


```task run continue
nodes$$streamflow2 = $$streamflow
node[03229610]$$streamflow2 = $sf_fix2
network svg_ts_blocks("output/scioto-ts-gap-id-2.svg", "{NAME}", "streamflow2", 620.0, 820.0, arr_width=500.0, bgcolor="#ffffff33")
```

![Plot Showing the Data Gaps in the CSV](../output/scioto-ts-gap-id-2.svg)


Now if we do the same with all the nodes with more than one input nodes, we get the following result.
```task run continue

nodes(len(inputs._)>0)$sf_fix3 = ($$streamflow, im$$streamflow) -> func(a=false, b=false) {
	if (a == false & b == false) {return}
	if (a == false) {
      if (len(b) == 0) {return}
	  sum([float(i) for i in values(b)])
	} else { float(a) }
}

nodes$$streamflow3 = $$streamflow

nodes(len(inputs._)>0)$$streamflow3 = $sf_fix3
network svg_ts_blocks("../output/scioto-ts-gap-id-3.svg", "{NAME}", "streamflow3", 620.0, 820.0, arr_width=500.0, bgcolor="#ffffff33")
```
![Plot Showing the Data Gaps in the CSV](../output/scioto-ts-gap-id-3.svg)


If you compare this with the previous image side by side, you can see that now we have timeseries data available for a lot more range. Look at the red node, and the root node, how the timeseries range is now the same as the longest input node.


But it is still limited to when the data is available in the input nodes. We can run another step with output nodes to fill the gaps in the leaf nodes. We can also do that multiple times in a loop to propagate the values based on previous imputation, but of course that decreases the accuracy overall.

Note: This is a simplified algorithm to fill the gaps, you can make it more complicated.
