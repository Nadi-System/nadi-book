# Network Functions
## network {#network.network}
```sig
network cairo.network(
    outfile: 'PathBuf',
    config: 'NetworkPlotConfig' = NetworkPlotConfig { width: 250.0, height: 300.0, delta_x: 20.0, delta_y: 20.0, offset: 30.0, radius: 3.0, fontsize: 16.0, fontface: FontFace { inner: Shared { inner: 0x5602e42d1430 } } },
    fit: 'bool' = false,
    label: 'Option < Template >'
)
```

**Arguments:**
- `outfile: 'PathBuf'` => 
- `config: 'NetworkPlotConfig' = NetworkPlotConfig { width: 250.0, height: 300.0, delta_x: 20.0, delta_y: 20.0, offset: 30.0, radius: 3.0, fontsize: 16.0, fontface: FontFace { inner: Shared { inner: 0x5602e42d1430 } } }` => 
- `fit: 'bool' = false` => 
- `label: 'Option < Template >'` => 

Create a SVG file with the given network structure
## table {#network.table}
```sig
network cairo.table(
    table: 'Table',
    outfile: 'PathBuf',
    config: 'NetworkPlotConfig' = NetworkPlotConfig { width: 250.0, height: 300.0, delta_x: 20.0, delta_y: 20.0, offset: 30.0, radius: 3.0, fontsize: 16.0, fontface: FontFace { inner: Shared { inner: 0x5602e42d1430 } } },
    fit: 'bool' = false
)
```

**Arguments:**
- `table: 'Table'` => 
- `outfile: 'PathBuf'` => 
- `config: 'NetworkPlotConfig' = NetworkPlotConfig { width: 250.0, height: 300.0, delta_x: 20.0, delta_y: 20.0, offset: 30.0, radius: 3.0, fontsize: 16.0, fontface: FontFace { inner: Shared { inner: 0x5602e42d1430 } } }` => 
- `fit: 'bool' = false` => 

Create a SVG file with the given network structure
