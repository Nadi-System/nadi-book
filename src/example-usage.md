# Example Usage

## Ohio River Streamflow Routing Project

The Network for the flow routing is as follows:

```task run svg ../output/ohio.svg
!network load_file("./data/ohio.network")
network svg_save(label="{_NAME}", outfile = "./output/ohio.svg", height=1000)
```
