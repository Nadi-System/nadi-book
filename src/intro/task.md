# Task
Tasks system acts like a scripting language for nadi system. A
Task consists of getting/evaluating/setting attributes in environment, network or nodes. The value that can be evaluated are expressions that consists of literal values, variables, or function calls that can either be a environment, node or a network function. Functions are unique based on their names, and can
have default values if users do not pass all arguments.

The code examples throughout this book, that are being used to
generate network diagrams, tables, etc are run using the task system.

Here is an example contents of a task file:

```task
{{#include ../data/example.tasks}}
```

