# File Templates

File templates are templates that use string templates, but they are a whole file that can be used to generate rendered text files.

File templates also have sections which can be repeated for different nodes, with corresponding syntax.

Following template will render a markdown table with headers and all the name and index of the nodes.

```stp
| Node | Index |
|------|-------|
<!-- ---8<--- -->
| {_NAME} | {INDEX} |
<!-- ---8<--- -->
```
