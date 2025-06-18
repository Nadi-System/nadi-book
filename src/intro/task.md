# Task
Task is an execution body in the task system. There are different types of tasks, specially environment, network and node type tasks, and there can be conditional tasks that only execute based on a condition or loops.

Some examples of different tasks are given below to show a general overview, but the concepts inside the tasks system will be introduced as we progress through the chapters,

Environment tasks that can evaluate expressions, assign variables, or call functions:
```task run
env 1 + 2 * 8
env render("my name is {_name}", name="John")
env.x = 12 > 2;
env.x
```

network task loading a network, and node task getting node attributes:
```task run
network load_str("a->b\nb->c")
node.NAME
```

Conditional and Loop task
```task run
if ( !val? | (val > 5) ) {
	# if val is not defined or greater than 5, set it to 0
    env.val = 0
}
while (val < 5) {
	env.val = env.val + 1
}
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

