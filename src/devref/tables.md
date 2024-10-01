# Tables

Tables are data types with headers and the value template. Tables can
be rendered/exported into CSV, JSON, and LaTeX format. Other formats
can be added later. Although tables are not exposed to the plugin
system, functions to export different table formats can be written as
a network function.

A sample Table file showing two columns, left aligned name for station
in title case, and right aligned columns for latitude and longitude
with float value of 4 digits after decimal:

```table
<Name => {_stn:case(title)}
>Latitude => {Latitude:f(4)?} N
>Longitude => {Longitude:f(4)?} W
```

Here the part before `=>` is the column header and the part after is the template. Presence of `<` or `>` in the beginning of the line makes the column left or right aligned, with center aligned by default.
