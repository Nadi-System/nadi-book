# Example Usage

## Ohio River Streamflow Routing Project

The Network for the flow routing is as follows:

```task run svg
!network load_file("./data/ohio.network")
network export_svg(label="{_NAME}", outfile = "./output/ohio.svg")
!network echo("../output/ohio.svg")
```
