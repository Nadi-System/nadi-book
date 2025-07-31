# Earliest Dam Year


First load the network, and attributes
```task run
network load_file("data/ohio-river/ohio.network")
network gis_load_attrs("data/ohio-river/nid-uniq.gpkg", "nidId")

node.is_usgs = NAME match "^[0-9]+";
node.is_dam = !is_usgs;
network count(nodes.is_usgs)
network count(nodes.is_dam)
```

Counting the upstream dams again,
```task run continue
node<inp>.ndam = int(is_dam) + sum(inputs.ndam);
node.no_dam_us = ndam == 0;
network count(nodes.no_dam_us & nodes.is_usgs)
network count(nodes.no_dam_us & nodes.is_usgs) / count(nodes.is_usgs)
```

We can see 33% of the USGS gages do not have dams upstream.

And for those that do, let's look at the construction year,
```task run continue
env.max_year = 9999; # todo test it with nan
node.dam_year = int(get_attr("yearCompleted", env.max_year));

node<inp>.dam_aff_yr = min_num(inputs.dam_aff_yr, dam_year);
node<inp>.dam_affected = dam_aff_yr < env.max_year;

network count(nodes.dam_affected & nodes.is_usgs)
network count(!nodes.no_dam_us & nodes.is_usgs)
network count(nodes.dam_affected & nodes.is_usgs) / count(!nodes.no_dam_us & nodes.is_usgs)
```

This shows we have the construction year for 95% of the USGS gages that were constructed after at least one upstream dams.

<!-- After exporting this result, and loading them in Python, we can use the following python script, we can load CSV files and see how much of the streamflow data was before, and after the dam. -->
