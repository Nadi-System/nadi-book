# Timeseries Gap Identification

<div class="warning">
In this example we will use `nadi_csv` plugin to load CSV files. The plugin is external, refer to the installation page to install it into the NADI System.

Different from other chapters, the code in this chapters are run in the order they are given, meaning each task code blocks are not independent.
</div>

Load the network
```task run
network load_file("data/scioto/scioto.network")
```

Load timeseries data from CSV, and convert any timeseries without gaps into a complete one.
```task run continue
network csv.load_timeseries("data/scioto/scioto.csv", "date", "streamflow");
# in future version csv.load_timeseries should do this while loading
node ts_complete("streamflow")
```

```task run continue
node.good = (ts_len("streamflow", valid=true) / ts_len("streamflow")) > 0.75
node.visual.nodeshape = "circle";
node(good).visual.nodecolor = "darkgreen";
node(good).visual.textcolor = "darkgreen";
network svg.ts_blocks("output/scioto-ts-gap-id.svg", "{NAME}", "streamflow", 1000, 820)
```

![Plot Showing the Data Gaps in the CSV](../output/scioto-ts-gap-id.svg)
