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
will have all the variables from node attributes will be available as
strings for template. For string variables, their name can be used to
access quoted string format, while their name with underscore prefix
will be unquoted raw string. (e.g. if we have attribute
`name="smithland"`, then `{name}` will render to `"smithland"`, while
`{_name}` will render to `smithland`).
