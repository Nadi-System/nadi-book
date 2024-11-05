# Node Functions
## render {#node.render}
```sig
node render.render (template: '& Template', safe: 'bool' = false)
```

Render the template based on the node attributes

### Arguments
- `template` - String template to render
- `safe` - if render fails keep it as it is instead of exiting
# Network Functions
## render {#network.render}
```sig
network render.render (template: 'PathBuf', outfile: 'Option < PathBuf >')
```

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
