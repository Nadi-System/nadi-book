# Node Functions
## load_csv_fill {#node.load_csv_fill}
```sig
node datafill.load_csv_fill(
    name: 'String',
    file: 'Template',
    timefmt: 'String',
    columns: '(String, String)',
    method: 'DataFillMethod' = Linear,
    dtype: 'String' = "Floats"
)
```

### Arguments
- `name: 'String'` => Name of the timeseries
- `file: 'Template'` => Template of the CSV file for the nodes
- `timefmt: 'String'` => date time format, if you only have date, but have time on format string, it will panic
- `columns: '(String, String)'` => Names of date column and value column
- `method: 'DataFillMethod' = Linear` => Method to use for data filling: forward/backward/linear
- `dtype: 'String' = "Floats"` => DataType to load into timeseries


## datafill_experiment {#node.datafill_experiment}
```sig
node datafill.datafill_experiment(
    name: 'String',
    file: 'Template',
    ratio_var: 'String',
    columns: 'Option < (String, String) >',
    experiments: 'usize' = 10,
    samples: 'usize' = 100
)
```

### Arguments
- `name: 'String'` => Prefix for name of the series to save metrics on
- `file: 'Template'` => Template of the CSV file for the nodes
- `ratio_var: 'String'` => Variable to use for inputratio/outputratio methods
- `columns: 'Option < (String, String) >'` => Names of date column and value column
- `experiments: 'usize' = 10` => Number of experiements to run
- `samples: 'usize' = 100` => Number of samples on each experiment


# Network Functions
## save_experiments_csv {#network.save_experiments_csv}
```sig
network datafill.save_experiments_csv(
    outfile: 'PathBuf',
    attrs: 'Vec < String >',
    prefix: 'String',
    errors: 'Vec < String >',
    filter: 'Option < Vec < bool > >'
)
```

### Arguments
- `outfile: 'PathBuf'` => Path to the output csv
- `attrs: 'Vec < String >'` => list of attributes to write
- `prefix: 'String'` => Prefix
- `errors: 'Vec < String >'` => list of errors to write
- `filter: 'Option < Vec < bool > >'` => 

Write the given nodes to csv with given attributes and experiment results
