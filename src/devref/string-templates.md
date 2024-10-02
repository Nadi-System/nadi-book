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

Brief explanation on the template system:
- Templates have variables, time formats, expressions, and commands
  (disabled by default);
  ```stp
  Hi my name is {name}, my address is {address?"N/A"}.
  Current time is {%H} hour  {%M} minutes.
  ```
- Variables can be chained in an optional way, so the first one that's
  found will be used (e.g. `{nickname?name}` will render nickname if
  it's present, else name);
- Variables can have optional transformers which transform the string
  based on their rules, (e.g. float transformer will truncate the
  float, upcase will make the string UPPERCASE, etc.);
- time formats are formatted current time (e.g. `{%Y}` will become
  `2024` as of now);
- expressions are lisp expressions that will be evaluated and the
  results will be used. The lisp expression can also access any
  variables and do any supported programming. (e.g. `(+ 1 1)` in lisp
  will become `2`);

Besides the above points, specific to nadi system, any node template
will have all the variables from node attributes available as strings
for template. For string variables, their name can be used to access
quoted string format, while their name with underscore prefix will be
unquoted raw string. (e.g. if we have attribute `name="smithland"`,
then `{name}` will render to `"smithland"`, while `{_name}` will
render to `smithland`).


The syntax highlight here in this book makes it so that any unknown
transformers will be marked for easy detection to mistakes.

```stp
This shows var = {var:unknown()}, {_var:case(title)}
```

Some tests for string templates:

```stp
hi there this {is?a?"test"} for $(a simple case {that?} {might} be "possible")
```

```stp
hi looks {like?a?"test"} for $(this does {work:case(up)} now) (yay)
```

```stp
more {formatting?} options on {%F} and
\\latex\{command\}\{with {variable}\}, should work.
```

```stp
let's try {every:f(2)?and?"anything":case(title)}
for $(a complex case {that?%F?} {might} be "possible")
```

```stp
see $(some-command --flag "and the value" {problem})
=(+ 1 2 (st+num 'hithere) (st+num "otherhi"))
{otherhi?=(1+ pi):f(4)}
```
