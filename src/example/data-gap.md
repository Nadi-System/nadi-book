# Looking at Data Gaps

Couting the gaps in a csv data with all the nodes is easy. Let's look
at the top 5 nodes with data gaps.

```task run markdown
!network load_file("./data/ohio.network")
!network clip()
network csv_count_na(
	"./data/ts/observed.csv",
	sort=true,
	head = 5
)
```

Running it for two timeseries, and comparing them base don network
information. We can see the downstream part have more missing data on
natural timeseries.

```task run markdown
!network load_file("./data/ohio.network")
network csv_count_na("./data/ts/observed.csv", outattr = "observed_missing")
network csv_count_na("./data/ts/natural.csv", outattr = "natural_missing")
!network table_to_svg(
!	template="
!<Node=> {_NAME}
!>Observed => {observed_missing}
!>Natural => {natural_missing}
!",
!	outfile="./output/natural-gaps.svg"
!)
!network clip()
!network echo("
!<center>
!Number of Missing Days in Timeseries Data
!
! ![](../output/natural-gaps.svg)
!<center>
!")
```
