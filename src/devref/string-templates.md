# String Templates

The templating system will be used by an external library developed by
me. The library can be modified if there are specific needs for this
project.

The template system is feature rich, allowing for formatting, simple
string transformations, and airthmatic calculations based on the
variables (node attributes in this case). This can be used to generate
file paths, and similar strings based on node attributes, as well as
to format the cell values for exported table, figures, etc.

The template library is also available for `Rust`, `C` and `C++`, but
all the interactions with the templates will be done through the
`nadi` interface, so that is not required.

Documentations on the template system, can be redirected to
[the `string_template_plus` library page](https://docs.rs/string-template-plus/latest/string_template_plus/).

Brief explanation on the template system is given below.

## Template Parts
Templates have variables, time formats, expressions, and commands (disabled by default);
```stp run name=John; address=123 Road, USA
Hi, my name is {name}, my address is {address?"N/A"}.
Current time is {%H} hour  {%M} minutes.
```
## Optional Variables
Variables can be chained in an optional way, so the first one that's
found will be used (e.g. `{nickname?name}` will render nickname if
it's present, else name);

```stp run name=John; nickname=J; address=123 Road, USA
Hi, I am {nickname?name}, my address is {address?"N/A"}.
```
## String Literal
Variables when replaced with literal strings (quoted strings), they
will be used directly `{address?"N/A"}` will render `N/A` is
`address` is not present;
```stp run name=John
Hi, I am {nickname?name}, my address is {address?"N/A"}.
```

## Transformers
Variables can have optional transformers which transform the string
based on their rules, (e.g. float transformer will truncate the
float, upcase will make the string UPPERCASE, etc.);
```stp run name=Joe
Hi, I am {nickname?name:case(up)}, my address is {address?"N/A"}.
```

## Time formats
time formats are formatted current time (e.g. `{%Y}` will become
`2024` as of now);
```stp run name=John
Today is {%B %d} of the year {%Y}.
```

## Lisp Expressions
expressions are lisp expressions that will be evaluated and the
results will be used. The lisp expression can also access any
variables and do any supported programming. (e.g. `(+ 1 1)` in lisp
will become `2`);
```stp run age=20
guess my age(x) if: (x + 21) * 4 = =(* (+ (st+num 'age) 21) 4).
```

## NADI Specific options
Besides the above points, specific to nadi system, any node template
will have all the variables from node attributes available as strings
for template. For string variables, their name can be used to access
quoted string format, while their name with underscore prefix will be
unquoted raw string. (e.g. if we have attribute `name="smithland"`,
then `{name}` will render to `"smithland"`, while `{_name}` will
render to `smithland`).

NADI System uses templates in a variety of place, and plugin functions
also sometimes take templates for file path, or strings, and such
things. Look at the help string of the function to see if it takes
`String` or `Template` type.

For example `render` is a function that takes a template and prints it
after rendering it for each node.

```task run
!network load_file("./data/mississippi.net")
!node[ohio] set_attrs(river="the Ohio River", streamflow=45334.12424343)
node[ohio,red] render(
	"(=(+ 1 (st+num 'INDEX))th node) {_NAME:case(title)}
	River Flow = {streamflow:calc(/10000):f(3)?\"NA\"} x 10^4"
)
```
As seen in above example, you can render variables, transform them, use basic calculations.

Or you can use `lisp` syntax to do more complex calculations. Refer to
[NADI Extension Capabilities](../system/extensions.md) section for more
info on how to use `lisp` on string template.

```task run
!network load_file("./data/mississippi.net")
!node[ohio] set_attrs(river="the Ohio River", streamflow=45334.12424343)
node[ohio] render(
	"{_river:case(title)} Streamflow
	from lisp = {=(/ (st+num 'streamflow) 1000):f(2)} x 10^3 cfs"
)
```

## Some Complex Examples

Optional variables and a command; note that commands can have variables inside them:
```stp run might=may
hi there, this {is?a?"test"} for $(echo a simple case {that?} {might} be "possible")
```

Optional variables with transformers inside command.
```stp run work=Fantastic Job
Hi {like?a?"test"} for $(this does {work:case(up)} now) (yay)
```

If you need to use `{` and `}` in a template, you can escape them. Following template shows how LaTeX commands can be generated from templates.
```stp run command=Error;variable=Var
more {formatting?} options on {%F} and
\\latex\{command\}\{with {variable}\}, should work.
```

This just combined a lot of different things from above:
```stp run
let's try {every:f(2)?and?"everything"}
for $(a complex case {that?%F?} {might?be?not?found} be "possible")

see $(some-command --flag "and the value" {problem})
=(+ 1 2 (st+num 'hithere) (st+num "otherhi"))
{otherhi?=(1+ pi):f(4)}
```

This shows the error for the first template part that errors out, even
if `{problem}` will also error later, so while solving for problems in
string templates, you might have to give it multiple tries.

## Advanced String Template with LISP

NADI Template string is useful when you want to represent node
specific string, or file path in a network. This is not as advanced as
the formatted strings in python. But it can be used for complex
situations based on the current functionality.

The most important extension capability of the string template is the
embedded lisp system.

As we know, templates can render variables, and have some capacity of transforming them:

```stp run name=Ohio; streamflow=12000
{name:case(title):repl(-, )} River Streamflow = {streamflow} cfs
```

But for numerical operation, the transformers capabilities are limited as they are made for strings.


With lisp, we can add more logic to our templates.

```stp run name=Ohio; streamflow=12000
{name:case(title):repl(-, )} River Streamflow is =(
	if (> (st+num 'streamflow) 10000)
	'Higher 'Lower
) than the threshold of 10^5 cfs.
```

The available lisp functions are also limited, but the syntax itself
gives us better airthmetic and logical calculations.


# Note
As the template string can get complicated, and the parsing is done
through `Regex`, it is not perfect. If you come across any parsing
problems, please raise an issue at [string template
plus](https://github.com/Atreyagaurav/string-template-plus) github
repo.

# Commands
Note that running commands within the templates is disabled for
now.

```stp run
echo today=$(date +%Y-%m-%d) {%Y-%m-%d}
```

But if you are writing a command template to run in bash, then
it'll be executed as the syntax is similar.

```task run
network command("echo today=$(date +%Y-%m-%d) {%Y-%m-%d}")
```
Here although the `$(date +%Y-%m-%d)` portion was not rendered on template rendering process, the command was still valid, and was executed.
