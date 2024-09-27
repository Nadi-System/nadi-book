# Node
Points with attributes and timeseries. These can be any point as long
as they'll be on the network and connection to each other.

The attributes can be any format. There is a special type of attribute
timeseries to deal with timeseries data that has been provided by the
system. But users are free to make their own attributes and plugins +
functions that can work with those attributes.

Since attributes are loaded using TOML file, simple attributes can be
stored and parsed from strings, moderately complex ones can be saved
as a combination of array and tables, and more complex ones can be
saved in different files and their path can be stored as node
attributes.

Here is an example node attribute file. Here we have string, float, int and boolean values, as well as a example csv timeseries

```toml
stn="smithland"
nat_7q10=12335.94850131619
orsanco_7q10=16900
lock=true

[ts.csv]
streamflow = {path="data/smithland.csv", datetime="date", data="flow"}
```
