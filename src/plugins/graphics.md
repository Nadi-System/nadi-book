<div class="warning">
This plugin uses cairo to draw graphics, so far it has only been tested on Linux, but this should also work on Mac. Compiling it in windows might need additional steps that are not documented here.
</div>


# Node Functions
## attr_fraction_svg {#node.attr_fraction_svg}
```sig
node graphics.attr_fraction_svg(
    attr: '& str',
    outfile: '& Template',
    color: '& AttrColor',
    height: 'f64' = 80.0,
    width: 'f64' = 80.0,
    margin: 'f64' = 10.0
)
```

### Arguments
- `attr: '& str'` => 
- `outfile: '& Template'` => 
- `color: '& AttrColor'` => 
- `height: 'f64' = 80.0` => 
- `width: 'f64' = 80.0` => 
- `margin: 'f64' = 10.0` => 

Create a SVG file with the given network structure
# Network Functions
## csv_load_ts {#network.csv_load_ts}
```sig
network graphics.csv_load_ts(
    file: 'PathBuf',
    name: 'String',
    date_col: 'String' = "date",
    timefmt: 'String' = "%Y-%m-%d",
    data_type: 'String' = "Floats"
)
```

### Arguments
- `file: 'PathBuf'` => 
- `name: 'String'` => 
- `date_col: 'String' = "date"` => 
- `timefmt: 'String' = "%Y-%m-%d"` => 
- `data_type: 'String' = "Floats"` => 

Count the number of na values in CSV file for each nodes in a network

### Arguments
- `file`: Input CSV file path to read (should have column with
node names for all nodes)
- `name`: Name of the timeseries
- `date_col`: Date Column name
- `timefmt`: date time format, if you only have date, but have time on format string, it will panic
- `data_type`: Type of the data to cast into
## csv_count_na {#network.csv_count_na}
```sig
network graphics.csv_count_na(
    file: 'PathBuf',
    outattr: 'Option < String >',
    sort: 'bool' = false,
    skip_zero: 'bool' = false,
    head: 'Option < i64 >'
)
```

### Arguments
- `file: 'PathBuf'` => 
- `outattr: 'Option < String >'` => 
- `sort: 'bool' = false` => 
- `skip_zero: 'bool' = false` => 
- `head: 'Option < i64 >'` => 

Count the number of na values in CSV file for each nodes in a network

### Arguments
- `file`: Input CSV file path to read (should have column with node names for all nodes)
- `outattr`: Output attribute to save the count of NA to. If empty print to stdout
- `sort`: show the nodes with larger gaps on top, only applicable while printing
- `head`: at max show only this number of nodes
- `skip_zero`: skip nodes with zero missing numbers
## csv_data_blocks_svg {#network.csv_data_blocks_svg}
```sig
network graphics.csv_data_blocks_svg(
    csvfile: 'PathBuf',
    outfile: 'PathBuf',
    label: 'Template',
    date_col: 'String' = "date",
    config: 'NetworkPlotConfig' = NetworkPlotConfig { width: 250.0, height: 300.0, delta_x: 20.0, delta_y: 20.0, offset: 30.0, radius: 3.0, fontsize: 16.0, fontface: FontFace { inner: Shared { inner: 0x64a7356cd4c0 } } },
    blocks_width: 'f64' = 500.0,
    fit: 'bool' = false
)
```

### Arguments
- `csvfile: 'PathBuf'` => 
- `outfile: 'PathBuf'` => 
- `label: 'Template'` => 
- `date_col: 'String' = "date"` => 
- `config: 'NetworkPlotConfig' = NetworkPlotConfig { width: 250.0, height: 300.0, delta_x: 20.0, delta_y: 20.0, offset: 30.0, radius: 3.0, fontsize: 16.0, fontface: FontFace { inner: Shared { inner: 0x64a7356cd4c0 } } }` => 
- `blocks_width: 'f64' = 500.0` => 
- `fit: 'bool' = false` => 

Draw the data blocks with arrows in timeline
## export_svg {#network.export_svg}
```sig
network graphics.export_svg(
    outfile: 'PathBuf',
    config: 'NetworkPlotConfig' = NetworkPlotConfig { width: 250.0, height: 300.0, delta_x: 20.0, delta_y: 20.0, offset: 30.0, radius: 3.0, fontsize: 16.0, fontface: FontFace { inner: Shared { inner: 0x64a7356cd4c0 } } },
    fit: 'bool' = false,
    label: 'Option < Template >',
    highlight: '& [usize]' = []
)
```

### Arguments
- `outfile: 'PathBuf'` => 
- `config: 'NetworkPlotConfig' = NetworkPlotConfig { width: 250.0, height: 300.0, delta_x: 20.0, delta_y: 20.0, offset: 30.0, radius: 3.0, fontsize: 16.0, fontface: FontFace { inner: Shared { inner: 0x64a7356cd4c0 } } }` => 
- `fit: 'bool' = false` => 
- `label: 'Option < Template >'` => 
- `highlight: '& [usize]' = []` => 

Create a SVG file with the given network structure
## table_to_svg {#network.table_to_svg}
```sig
network graphics.table_to_svg(
    outfile: 'PathBuf',
    table: 'Option < PathBuf >',
    template: 'Option < String >',
    config: 'NetworkPlotConfig' = NetworkPlotConfig { width: 250.0, height: 300.0, delta_x: 20.0, delta_y: 20.0, offset: 30.0, radius: 3.0, fontsize: 16.0, fontface: FontFace { inner: Shared { inner: 0x64a7356cd4c0 } } },
    fit: 'bool' = false,
    highlight: '& [String]' = []
)
```

### Arguments
- `outfile: 'PathBuf'` => 
- `table: 'Option < PathBuf >'` => 
- `template: 'Option < String >'` => 
- `config: 'NetworkPlotConfig' = NetworkPlotConfig { width: 250.0, height: 300.0, delta_x: 20.0, delta_y: 20.0, offset: 30.0, radius: 3.0, fontsize: 16.0, fontface: FontFace { inner: Shared { inner: 0x64a7356cd4c0 } } }` => 
- `fit: 'bool' = false` => 
- `highlight: '& [String]' = []` => 

Create a SVG file with the given network structure
