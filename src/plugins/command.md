# Node Functions
## command {#node.command}
```sig
node command.command(
    cmd: '& Template',
    verbose: 'bool' = true,
    echo: 'bool' = false
)
```

### Arguments
- `cmd: '& Template'` => String Command template to run
- `verbose: 'bool' = true` => Show the rendered version of command, and other messages
- `echo: 'bool' = false` => Echo the stdout from the command

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

### Errors
The function will error if,
- The command template cannot be rendered,
- The command cannot be executed,
- The attributes from command's stdout cannot be parsed properly

```task
network load_str("a -> b");
node command("echo 'nadi:var:sth={NAME}'");
node assert_eq(sth, NAME)
```

## run {#node.run}
```sig
node command.run(
    command: '& str',
    inputs: '& str',
    outputs: '& str',
    verbose: 'bool' = true,
    echo: 'bool' = false
)
```

### Arguments
- `command: '& str'` => Node Attribute with the command to run
- `inputs: '& str'` => Node attribute with list of input files
- `outputs: '& str'` => Node attribute with list of output files
- `verbose: 'bool' = true` => Print the command being run
- `echo: 'bool' = false` => Show the output of the command

Run the node as if it's a command if inputs are changed

This function will not run a command node if all outputs are older
than all inputs. This is useful to networks where each nodes are
tasks with input files and output files.
# Network Functions
## parallel {#network.parallel}
```sig
network command.parallel(
    cmd: '& Template',
    workers: 'i64' = 16,
    verbose: 'bool' = true,
    echo: 'bool' = false
)
```

### Arguments
- `cmd: '& Template'` => String Command template to run
- `workers: 'i64' = 16` => Number of workers to run in parallel
- `verbose: 'bool' = true` => Print the command being run
- `echo: 'bool' = false` => Show the output of the command

Run the given template as a shell command for each nodes in the network in parallel.

Other than parallel execution this is same as the `node` function `command`

```task
network load_str("a -> b");
network parallel("echo 'nadi:var:sth={NAME}'");
node assert_eq(sth, NAME)
```

## command {#network.command}
```sig
network command.command(
    cmd: 'Template',
    verbose: 'bool' = true,
    echo: 'bool' = false
)
```

### Arguments
- `cmd: 'Template'` => String Command template to run
- `verbose: 'bool' = true` => Print the command being run
- `echo: 'bool' = false` => Show the output of the command

Run the given template as a shell command.

Run any command in the shell. The standard output of the command
will be consumed and if there are lines starting with `nadi:var:`
and followed by `key=val` pairs, it'll be read as new attributes
to the network. If you want to pass node attributes add node name
with `nadi:var:name:` as the prefix for `key=val`.

See `node command.command` for more details as they have
the same implementation

The examples below run `echo` command to set the variables, you
can use any command that are scripting languages (python, R,
Julia, etc) or individual programs.

```task
network load_str("a -> b");
network command("echo 'nadi:var:sth=123'");
network assert_eq(sth, 123)
network command("echo 'nadi:var:a:sth=123'");
node[a] assert_eq(sth, 123)
```
