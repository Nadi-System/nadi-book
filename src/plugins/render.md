# Env Functions
## render {#env.render}
```sig
env render.render(
    template: '& Template',
    safe: 'bool' = false,
    **keyval
)
```

### Arguments
- `template: '& Template'` => String template to render
- `safe: 'bool' = false` => if render fails keep it as it is instead of exiting
- `**keyval` => 

Render the template based on the node attributes

For more details on the template system. Refer to the String
Template section of the NADI book.

```task
env assert_eq(render("abc {_x}", x="ab"), "abc ab")
env assert_eq(render("abc {x}", x=23), "abc 23")
```

If safe parameter is true, then it doesn't error out even if
the variable is not present, and will just return the original
template. By default it errors out if there are any variables
in the template without a value.

```task
env assert_eq(render("abc {x}", safe=true), "abc {x}")
```
# Node Functions
## render {#node.render}
```sig
node render.render(template: '& Template', safe: 'bool' = false)
```

### Arguments
- `template: '& Template'` => String template to render
- `safe: 'bool' = false` => if render fails keep it as it is instead of exiting

Render the template based on the node attributes

For more details on the template system. Refer to the String
Template section of the NADI book.

```task
network load_str("a -> b")
node.x = 13
node assert_eq(render("abc {x}"), "abc 13")
```
# Network Functions
## render {#network.render}
```sig
network render.render(template: '& Template', safe: 'bool' = false)
```

### Arguments
- `template: '& Template'` => Path to the template file
- `safe: 'bool' = false` => if render fails keep it as it is instead of exiting

Render from network attributes

```task
network.x = 13
network assert_eq(render("abc {x}"), "abc 13")
```
## render_nodes {#network.render_nodes}
```sig
network render.render_nodes(
    template: '& Template',
    safe: 'bool' = false,
    join: '& str' = "\n"
)
```

### Arguments
- `template: '& Template'` => Path to the template file
- `safe: 'bool' = false` => if render fails keep it as it is instead of exiting
- `join: '& str' = "\n"` => String to join the render results

Render each node of the network and combine to same variable

```task
network load_str("a -> b")
node.x = INDEX + 1
network assert_eq(render_nodes("abc {x}"), "abc 1\nabc 2")
```
## render_template {#network.render_template}
```sig
network render.render_template(template: 'PathBuf')
```

### Arguments
- `template: 'PathBuf'` => Path to the template file

Render a File template for the nodes in the whole network

Write the file with templates for input variables in the same
way you write string templates. It's useful for markdown
files, as the curly braces syntax won't be used for anything
else that way. Do be careful about that. And the program will
replace those templates with their values when you run it with
inputs.

It'll repeat the same template for each node and render them.
If you want only a portion of the file repeated for nodes
inclose them with lines with `---8<---` on both start and the
end. The lines containing the clip syntax will be ignored,
ideally you can put them in comments.

You can also use `---include:<filename>[::line_range]` syntax to
include a file, the line_range syntax, if present, should be
in the form of `start[:increment]:end`, you can exclude start
or end to denote the line 1 or last line (e.g. `:5` is 1:5,
and `3:` is from line 3 to the end)

### Arguments
- `template`: Path to the template file
- `outfile` [Optional]: Path to save the template file, if none it'll be printed in stdout
