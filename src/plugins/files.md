# Env Functions
## exists {#env.exists}
```sig
env files.exists(path: 'PathBuf', min_lines: 'Option < usize >')
```

### Arguments
- `path: 'PathBuf'` => Path to check
- `min_lines: 'Option < usize >'` => Minimum number of lines the file should have

Checks if the given path exists
## from_file {#env.from_file}
```sig
env files.from_file(path: 'PathBuf', default: 'Option < String >')
```

### Arguments
- `path: 'PathBuf'` => File Path to load the contents from
- `default: 'Option < String >'` => default value

Reads the file contents as string
## to_file {#env.to_file}
```sig
env files.to_file(
    contents: 'String',
    path: 'PathBuf',
    append: 'bool' = false,
    end: 'String' = "\n"
)
```

### Arguments
- `contents: 'String'` => Contents to write
- `path: 'PathBuf'` => Path to write the file
- `append: 'bool' = false` => Append to the file
- `end: 'String' = "\n"` => End the write with this

Writes the string to the file
# Node Functions
## exists {#node.exists}
```sig
node files.exists(path: 'Template', min_lines: 'Option < usize >')
```

### Arguments
- `path: 'Template'` => Path to check
- `min_lines: 'Option < usize >'` => Minimum number of lines the file should have

Checks if the given path exists when rendering the template
