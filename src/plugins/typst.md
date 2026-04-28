# Env Functions
## svg2pdf {#env.svg2pdf}
```sig
env typst.svg2pdf(
    inpfile: 'PathBuf',
    outfile: 'PathBuf',
    height: 'String' = "auto",
    width: 'String' = "auto",
    margin: 'String' = "0pt"
)
```

**Arguments:**
- `inpfile: 'PathBuf'` => 
- `outfile: 'PathBuf'` => 
- `height: 'String' = "auto"` => 
- `width: 'String' = "auto"` => 
- `margin: 'String' = "0pt"` => 

convert the svg content into pdf or png (or svg)
## compile {#env.compile}
```sig
env typst.compile(content: 'String', outfile: 'PathBuf')
```

**Arguments:**
- `content: 'String'` => 
- `outfile: 'PathBuf'` => 

convert the typst content into pdf/svg/png
# Network Functions
## table {#network.table}
```sig
network typst.table(table: 'Table')
```

**Arguments:**
- `table: 'Table'` => 

Generate Typst code for given Table
