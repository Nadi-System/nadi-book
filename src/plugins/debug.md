# Network Functions
## debug {#network.debug}
```sig
network debug.debug (*args, **kwargs)
```

Print the args and kwargs on this function
## echo {#network.echo}
```sig
network debug.echo (
    line:'String',
    error:'bool'=false,
    newline:'bool'=true
)
```

Echo the string to stdout or stderr
## clip {#network.clip}
```sig
network debug.clip (error: 'bool' = false)
```

Echo the ----8<---- line for clipping sytax
