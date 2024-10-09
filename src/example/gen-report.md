# Generating Reports
So we write this template:
```stp-md
{{#include ../data/ohio-report.template}}
```

Which makes the table only for the main-stem ohio:
```task run markdown
!network load_file("./data/ohio.network")
!node load_attrs("./data/attrs/{_NAME}.toml")
!network clip()
network render("./data/ohio-report.template")
```
