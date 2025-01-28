# Node Functions
## load_csv_fill {#node.load_csv_fill}
```sig
node datafill.load_csv_fill(
    name: 'String',
    file: 'Template',
    columns: '(String, String)',
    timefmt: 'String',
    method: 'DataFillMethod' = Linear,
    dtype: 'String' = "Floats"
)
```

### Arguments
- `name: 'String'` => Name of the timeseries
- `file: 'Template'` => Template of the CSV file for the nodes
- `columns: '(String, String)'` => Names of date column and value column
- `timefmt: 'String'` => date time format, if you only have date, but have time on format string, it will panic
- `method: 'DataFillMethod' = Linear` => Method to use for data filling: forward/backward/linear
- `dtype: 'String' = "Floats"` => DataType to load into timeseries


