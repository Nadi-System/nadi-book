# String Template

String templates are strings with dynamic components that can be
rendered for each node based on the node attributes.

A simple template can be like below:
```stp run name=John; address=123 Road, USA
Hi, my name is {name}, my address is {address}.
```

With more complicated templates, we would be able to generate
documents with text and images based on the node attributes as well.

For example the following template can be used to generate a table.

```markdown
{{#include ../data/example.template}}
```

```task run markdown
!network load_file("./data/mississippi.net");
network echo(render_template("./data/example.template"))
```

Of course, there are better ways to generate table than this, but this
shows how flexible the template system is.


If you want to use a rendered template anywhere on the document use `r` before the string.

That is:

```task run
env.x = 12;
# normal string
"Some {x}"
# rendered template string
r"Some {x}"

```
