# How to use this book

You can read this book sequentially to understand the concepts used in the NADI system. And then go through the references sections for a specific use cases you want to get into the details of.

- If you are in a hurry, but this is your first time reading this book,
at least read the [Core Concepts](./system/intro.md), then refer to the
section you are interested in.
- If you want to know a specific details, click on the search icon at the top left of the book to get the search bar. You can search text there and visit the pages.
- If you want to learn about the QGIS Plugin, NADI GIS, goto "Network Detection (GIS)" section.
- If you want to learn about the Domain Specific Programming Language (DSL), refer to the "Network Analysis (DSL)" section.
  - [Learn by Example](./learn-examples.md) contains some simple examples you can follow to learn the basic syntax of the Task System.
  - If you want more detailed examples of the use of Task System, refer to the chapters in "Example Research Problems" section on the sidebar.
- If you want reference for functions used in Task System goto "Plugin Functions", the [Internal Plugins](./plugins/intro.md) section contains details on the functions that are available with nadi system, while the external plugins are plugins that were loaded while this book was compiled.

If you have suggestions on the formatting, or arrangement of chapters in this book, please make an issue on [the GitHub repository for this book](https://github.com/Nadi-System/nadi-book).

## Code Blocks

The code blocks will have example codes for various languages, most common will be `string template`, `task`, `python`, and `rust` codes.

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
