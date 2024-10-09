# Making Tables

```table run markdown
!network load_file("./data/ohio.network")
!node load_attrs("./data/attrs/{_NAME}.toml")
!network clip()
!# ^Ind => =(+ (st+num 'INDEX) 1)
<Node ID => {_NAME}
<Title => {_description:case(title):repl(Ky,KY):repl(In,IN):repl(Wv,WV):repl(Oh,OH)?}
>Latitude => {lat:f(4)}
>Longitude => {lon:f(4)}
```

Nadi style table with network information:
```table run svg outfile="./output/ohio-table.svg"
!network load_file("./data/ohio.network")
!node load_attrs("./data/attrs/{_NAME}.toml")
!network clip()
!network echo("../output/ohio-table.svg")
!# ^Ind => =(+ (st+num 'INDEX) 1)
<Node ID => {_NAME}
<Title => {_description:case(title):repl(Ky,KY):repl(In,IN):repl(Wv,WV):repl(Oh,OH)?}
>Latitude => {lat:f(4)}
>Longitude => {lon:f(4)}
```
