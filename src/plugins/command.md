# Node Functions
## command {#node.command}
```sig
node command.command (
    cmd:'&Template',
    verbose:'bool'=true,
    echo:'bool'=true
)
```

Run the given template as a shell command.

    Run any command in the shell. The standard output of the command
    will be consumed and if there are lines starting with `nadi:var:`
    and followed by `key=val` pairs, it'll be read as new attributes
    to that node.

    # Arguments:
    - cmd: String Command template to run
    - verbose: bool Show the rendered version of command
    - echo: bool Echo the stdin from the command
        
# Network Functions
## parallel {#network.parallel}
```sig
network command.parallel (
    cmd:'&Template',
    _workers:'i64'=4,
    verbose:'bool'=true,
    echo:'bool'=true
)
```

Run the given template as a shell command for each nodes in the network in parallel.

    Arguments:
    - cmd: String Command template to run
    - workers: Integer Number of workers to run in parallel
    - verbose: bool Show the rendered version of command
    - echo: bool Echo the stdin from the command

    Run any command in the shell. The standard output of the command will
        be ignored. Use the node function `command` for more control.
        
## command {#network.command}
```sig
network command.command (
    cmd:'Template',
    verbose:'bool'=true,
    echo:'bool'=true
)
```

Run the given template as a shell command.

    Run any command in the shell. The standard output of the command
    will be consumed and if there are lines starting with `nadi:var:`
    and followed by `key=val` pairs, it'll be read as new attributes
    to that node.

    # Arguments:
    - cmd: String Command template to run
    - verbose: bool Show the rendered version of command
    - echo: bool Echo the stdin from the command
        
