# Tables

Tables are data types with headers and the value template. Tables can
be rendered/exported into CSV, JSON, and LaTeX format. Other formats
can be added later. Although tables are not exposed to the plugin
system, functions to export different table formats can be written as
a network function.

A sample Table file showing two columns, left aligned name for station
in title case, and right aligned columns for latitude and longitude
with float value of 4 digits after decimal:

```table run markdown
!network load_file("./data/mississippi.net")
<Name => {_NAME:repl(-, ):case(title)}
^Ind => =(+ (st+num 'INDEX) 1)
>Order => {ORDER}
^Level => {LEVEL}
# something is wrong with the set_level algorithm
# Ohio - tenessee should be level 1, and missouri/yellowstone should be 0
```

Here the part before `=>` is the column header and the part after is the template. Presence of `<` or `>` in the beginning of the line makes the column left or right aligned, with center aligned (`^`) by default.

<!-- NOTE -->
<!-- Currently, the table template is run as a task internally. -->

<!-- ```task -->
<!-- !network load_file("./data/mississippi.net") -->
<!-- !network table_to_markdown(template=" -->
<!-- <Name => {_NAME:repl(-, ):case(title)} -->
<!-- >Ind => {INDEX} -->
<!-- ^Index +1 => =(+ (st+num 'INDEX) 1) -->
<!-- !") -->
<!-- ``` -->


Exporting the table in svg instead of markdown allows us better
network diagram.

```table run svg outfile="./output/example-table2.svg"
!network load_file("./data/mississippi.net")
!network echo("../output/example-table2.svg")
<Name => {_NAME:repl(-, ):case(title)}
^Ind => =(+ (st+num 'INDEX) 1)
>Order => {ORDER}
^Level => {LEVEL}
```

A SVG Table can also be generated using the table file, using the task system like this:
```task run image
!network load_file("./data/mississippi.net")
network table_to_svg(
	table = "./data/sample.table",
	# either table = "path/to/table", or template = "table template"
	outfile = "./output/example-table.svg",
	config = {fontsize = 16, delta_y = 20, fontface="Noto Serif"}
)
!network clip()
!# the link path needs to be relative to this file
!network echo("../output/example-table.svg")

```
