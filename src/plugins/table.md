# Network Functions
## save_csv {#network.save_csv}
```sig
network table.save_csv(
    path: '& Path',
    fields: '& [String]',
    filter: 'Option < Vec < bool > >'
)
```

### Arguments
- `path: '& Path'` => 
- `fields: '& [String]'` => 
- `filter: 'Option < Vec < bool > >'` => 

Save CSV
## table_to_markdown {#network.table_to_markdown}
```sig
network table.table_to_markdown(
    table: 'Option < PathBuf >',
    template: 'Option < String >',
    outfile: 'Option < PathBuf >',
    connections: 'Option < String >'
)
```

### Arguments
- `table: 'Option < PathBuf >'` => Path to the table file
- `template: 'Option < String >'` => String template for table
- `outfile: 'Option < PathBuf >'` => Path to the output file
- `connections: 'Option < String >'` => Show connections column or not

Render the Table as a rendered markdown

### Error
The function will error out if,
- error reading the table file,
- error parsing table template,
- neither one of table file or table template is provided,
- error while rendering markdown
  (caused by error on rendering cell values from templates)
- error while writing to the output file
