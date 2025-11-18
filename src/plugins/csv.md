# Env Functions
## schema {#env.schema}
```sig
env csv.schema(
    path: 'PathBuf',
    header: 'bool' = true,
    dates: 'bool' = true
)
```

**Arguments:**
- `path: 'PathBuf'` => Path to the CSV file
- `header: 'bool' = true` => CSV file has header row
- `dates: 'bool' = true` => Parse Dates in the file

List the columns in a CSV file
## count_data {#env.count_data}
```sig
env csv.count_data(path: 'PathBuf', column: 'IntOrStr')
```

**Arguments:**
- `path: 'PathBuf'` => Path to the CSV file
- `column: 'IntOrStr'` => Name or Index of the column to load

Count the number of data in a column from a CSV file

Returns the number of valid data and the number of total rows
## count_usgs_years {#env.count_usgs_years}
```sig
env csv.count_usgs_years(
    path: 'PathBuf',
    outfile: 'PathBuf',
    year: 'Option < i64 >'
)
```

**Arguments:**
- `path: 'PathBuf'` => Path to the CSV file
- `outfile: 'PathBuf'` => Output CSV file
- `year: 'Option < i64 >'` => year dam affected

Count the number of data in a column from a CSV file

Returns the number of total rows and the number of valid data
# Node Functions
## column {#node.column}
```sig
node csv.column(
    path: 'PathBuf',
    column: 'IntOrStr',
    dates: 'bool' = true,
    name: 'Option < String >'
)
```

**Arguments:**
- `path: 'PathBuf'` => Path to the CSV file
- `column: 'IntOrStr'` => Name or Index of the column to load
- `dates: 'bool' = true` => Parse Dates in the file
- `name: 'Option < String >'` => Name of the series defaults to column name

read a single column from a CSV file
## node_name {#node.node_name}
```sig
node csv.node_name()
```

**Arguments:**


Example Node function for the plugin
# Network Functions
## load_series {#network.load_series}
```sig
network csv.load_series(
    path: 'PathBuf',
    name: 'String',
    nodemap: 'Option < HashMap < String, String > >',
    dates: 'bool' = true
)
```

**Arguments:**
- `path: 'PathBuf'` => Path to the CSV file
- `name: 'String'` => Name of the Series
- `nodemap: 'Option < HashMap < String, String > >'` => HashMap of column name to Node name
- `dates: 'bool' = true` => Parse Dates in the file

Load series values to nodes

```task,ignore
network csv.load_series("/home/gaurav/work/nadi-project/codes/nadi_csv/test.csv", "test")
```
## load_timeseries {#network.load_timeseries}
```sig
network csv.load_timeseries(
    path: 'PathBuf',
    datecol: 'String',
    name: 'String',
    datefmt: 'String' = "%Y-%m-%d",
    nodemap: 'Option < HashMap < String, String > >',
    dates: 'bool' = true
)
```

**Arguments:**
- `path: 'PathBuf'` => Path to the CSV file
- `datecol: 'String'` => Name of the column with datetime
- `name: 'String'` => Name of the Series
- `datefmt: 'String' = "%Y-%m-%d"` => Date Format to save the dates
- `nodemap: 'Option < HashMap < String, String > >'` => HashMap of column name to Node name
- `dates: 'bool' = true` => Parse Dates in the file

Load timeseries values to nodes

```task,ignore
network csv.load_timeseries("/home/gaurav/work/nadi-project/codes/nadi_csv/test.csv", "date", "test")
