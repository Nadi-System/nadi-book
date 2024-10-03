# How to use this book

You can read this book sequentially to understand the concepts used in the NADI system. And then go through the references sections for a specific use cases you want to get into the details of.

If you are in a hurry, but this is your first time reading this book,
at least read the [Core Concepts](./intro.md), then refer to the
section you are interested in.

## Code Blocks

The code blocks will have example codes for various languages, most common will be `string template`, `task`, and `rust` codes.

String template and task have custom syntax highlights that is
intended to make it easier for the reader to understand different
semantic blocks.

For `task` scripts/functions, if relevant to the topic, they might
have `Results` block following immediately showing the results of the
execution.

For example:
```task run
!network load_file("./data/mississippi.net")
node[ohio] render("{_NAME:case(title)} River")
```

Task and Rust code block might also include lines that are needed to
get the results, but hidden due to being irrelevant to the
discussion. In those cases you can use the eye icon on the top right
side of the code blocks to make them visible. Similarly use the copy
icon to copy the visible code into clipboard.

## String Template Syntax Highlight
The syntax highlight here in this book makes it so that any unknown
transformers will be marked for easy detection to mistakes.

```stp
This shows var = {var:unknown()}, {_var:case(title)}
```

Besides this, the syntax highlight can help you detect the variables
part (within `{}`), lisp expression (within `=()`), or commands
(within `$()`) in the template.

Note: commands are disabled, so they won't run during template
rendering process. But if you are rendering a template to run as a
command, then they will be executed during that process.
