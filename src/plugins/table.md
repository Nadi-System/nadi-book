# Network Functions
## table_to_markdown {#network.table_to_markdown}
```sig
network table.table_to_markdown(
    table: 'Option < PathBuf >',
    template: 'Option < String >',
    outfile: 'Option < PathBuf >',
    connections: 'Option < String >'
)
```

Render the Table as a rendered markdown

### Arguments
- `table`: Path to the table file
- `template`: String template for table
- `outfile`: Path to the output file
- `connetions`: Show connections column or not

### Error
The function will error out if,
- error reading the table file,
- error parsing table template,
- neither one of table file or table template is provided,
- error while rendering markdown
  (caused by error on rendering cell values from templates)
- error while writing to the output file
