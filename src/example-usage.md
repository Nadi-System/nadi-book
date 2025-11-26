# Ohio River Streamflow Routing Project

The Network for the flow routing is as follows:

```task run svg ../output/ohio.svg
!network load_file("./data/ohio.network")

!network cairo.table("Index => {INDEX}\nName => {NAME}\n", "./output/ohio.svg")
```
