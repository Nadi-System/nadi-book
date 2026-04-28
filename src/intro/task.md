# Task
Task is an execution body in the task system. Think of it like a line of code that is executed when you use any programming language.

Most common task is an expression. The expression is simply evaluated and the result is reported.

For example the following is a task that simply performs an airthmatic operation:

```task run
1 + 2 * 10
```

Similarly following two tasks call a function, assign a value, and read a value:
```task run
sum([1,2,3])
env.x = true;
env.x
```



There are different types of tasks, specially environment, network and node type tasks, and there can be conditional tasks that only execute based on a condition or loops.

So types of task can be summarized as:
1. Help Task
2. Exit Task
3. Expressions
4. Series Task

Some examples of different tasks are given below to show a general overview, but the concepts inside the tasks system will be introduced as we progress through the chapters,

Expression tasks that can evaluate expressions, assign variables, or call functions:
```task run
env 1 + 2 * 8
env render("my name is {name}", name="John")
env.x = 12 > 2;
env.x
```

While the example above shows `env` keyword being used, you can omit the keyword to work under the local variables, or you can use other keywords like `nodes`, `network`, etc for expressions in that context.

```task run
1 + 2 * 8
render("my name is {name}", name="John")
x = 12 > 2;
x
```


network task loading a network, and node task getting node attributes:
```task run
network load_str("a->b\nb->c")
nm.NAME
```

<!-- TODO: mdbook delays the stdout from this process and prints it out in next chapter -->
Conditional and Loop task
```task run
if ( !val? | (val > 5) ) {
	# if val is not defined or greater than 5, set it to 0
    val = 0
}
while (val < 5) {
    val = val + 1;
}
val
```

Tasks system acts like a scripting language for nadi system. A
Task consists of getting/evaluating/setting attributes in environment, network or nodes. The value that can be evaluated are expressions that consists of literal values, variables, or function calls that can either be a environment, node or a network function. Functions are unique based on their names, and can
have default values if users do not pass all arguments.

The code examples throughout this book, that are being used to
generate network diagrams, tables, etc are run using the task system.

Here is an example contents of a more complex task file, do not concern with what each task does, we will go through them in other chapters.

```task
{{#include ../data/example.tasks}}
```

