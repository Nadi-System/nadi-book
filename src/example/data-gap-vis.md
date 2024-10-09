# Visualizing Data Gaps

To look at the temporal distribution of the gaps, we can use this function.

```task run svg
!network load_file("./data/ohio.network")
network csv_count_na("./data/ts/natural.csv", outattr = "nat_na")
network csv_data_blocks_svg(
	csvfile="./data/ts/natural.csv",
	outfile="./output/natural-blocks.svg",
	label="{_NAME} ({=(/ (st+num 'nat_na) 365.0):f(1)} yr)"
)
!network clip()
!network echo("../output/natural-blocks.svg")
```

```task run svg
!network load_file("./data/ohio.network")
network csv_count_na("./data/ts/observed.csv", outattr = "obs_na")
network csv_data_blocks_svg(
	csvfile="./data/ts/observed.csv",
	outfile="./output/observed-blocks.svg",
	label="{_NAME} ({obs_na})"
)
!network clip()
!network echo("../output/observed-blocks.svg")
```
