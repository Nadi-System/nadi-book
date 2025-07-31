# Env Functions
## sleep {#env.sleep}
```sig
env debug.sleep(time: 'u64' = 1000)
```

### Arguments
- `time: 'u64' = 1000` => 

sleep for given number of milliseconds
## debug {#env.debug}
```sig
env debug.debug(*args, **kwargs)
```

### Arguments
- `*args` => Function arguments
- `**kwargs` => Function Keyword arguments

Print the args and kwargs on this function

This function will just print out the args and kwargs the
function is called with. This is for debugging purposes to see
if the args/kwargs are identified properly. And can also be
used to see how the nadi system takes the input from the
function call.
## echo {#env.echo}
```sig
env debug.echo(
    line: 'String',
    error: 'bool' = false,
    newline: 'bool' = true
)
```

### Arguments
- `line: 'String'` => line to print
- `error: 'bool' = false` => print to stderr instead of stdout
- `newline: 'bool' = true` => print newline at the end

Echo the string to stdout or stderr

This simply echoes anything given to it. This can be used in
combination with nadi tasks that create files (image, text,
etc). The `echo` function can be called to get the link to
those files back to the stdout.

Also useful for nadi preprocessor.
## clip {#env.clip}
```sig
env debug.clip(error: 'bool' = false)
```

### Arguments
- `error: 'bool' = false` => print in stderr instead of in stdout

Echo the `----8<----` line for clipping syntax

This function is a utility function for the generation of nadi
book. This prints out the `----8<----` line when called, so
that `mdbook` preprocessor for `nadi` knows where to clip the
output for displaying it in the book.

This makes it easier to only show the relevant parts of the
output in the documentation instead of having the user see
output of other unrelated parts which are necessary for
generating the results.

### Example
Given the following tasks file:
```task,ignore
net load_file("...")
net load_attrs("...")
net clip()
net render("{_NAME} {attr1}")
```

The clip function's output will let the preprocessor know that
only the parts after that are relevant to the user. Hence,
it'll discard outputs before that during documentation
generation.
