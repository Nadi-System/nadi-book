# Node Functions
## command {#node.command}
```sig
node command.command(
    cmd: '& Template',
    verbose: 'bool' = true,
    echo: 'bool' = false
)
```

Run the given template as a shell command.

Run any command in the shell. The standard output of the command
will be consumed and if there are lines starting with `nadi:var:`
and followed by `key=val` pairs, it'll be read as new attributes
to that node.

For example if a command writes `nadi:var:name="Joe"` to stdout,
then the for the current node the command is being run for, `name`
attribute will be set to `Joe`. This way, you can write your
scripts in any language and pass the values back to the NADI
system.

It will also print out the new values or changes from old values,
if `verbose` is true.

### Arguments
- `cmd`: String Command template to run
- `verbose`: bool Show the rendered version of command
- `echo`: bool Echo the stdin from the command

### Errors
The function will error if,
- The command template cannot be rendered,
- The command cannot be executed,
- The attributes from command's stdout cannot be parsed properly
# Network Functions
## parallel {#network.parallel}
```sig
network command.parallel(
    cmd: '& Template',
    _workers: 'i64' = 4,
    verbose: 'bool' = true,
    echo: 'bool' = false
)
```

Run the given template as a shell command for each nodes in the network in parallel.

### Warning
Currently there is no way to limit the number of parallel
processes, so please be careful with this command if you have very
large number of nodes.

### Arguments
- `cmd`: String Command template to run
- `workers`: Integer Number of workers to run in parallel
- `verbose`: bool Show the rendered version of command and variable changes
- `echo`: bool Echo the stdin from the command
## command {#network.command}
```sig
network command.command(
    cmd: 'Template',
    verbose: 'bool' = true,
    echo: 'bool' = false
)
```

Run the given template as a shell command.

Run any command in the shell. The standard output of the command
will be consumed and if there are lines starting with `nadi:var:`
and followed by `key=val` pairs, it'll be read as new attributes
to that node.

See `node command.command` for more details as they have
the same implementation

### Arguments
- `cmd`: String Command template to run
- `verbose`: bool Show the rendered version of command
- `echo`: bool Echo the stdin from the command
