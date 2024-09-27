# Tables

Tables are data types with headers and the value template. Tables can
be rendered/exported into CSV, JSON, and LaTeX format. Other formats
can be added later. Although tables are not exposed to the plugin
system, functions to export different table formats can be written as
a network function.

A sample Table file showing two columns, left aligned name for station
in title case, and right aligned 7Q10 column with float value of 2
digits after decimal:

```
<Name: {_stn:case(title)}
>7Q10: {nat_7q10:f(2)}
```
