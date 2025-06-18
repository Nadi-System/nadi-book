# Expression

Expressions are airthmetic or logical operations. They can appear inside the conditional statements, or as input to a task, or nested in other expression or function calls.

Expressions are defined into the following categories:
## Literal Values
```task run
env [1, true, "no maybe"]
```
## Variable
```task run
env.value = [1, true, "no maybe"];
env.value
```

Variables also have a "check" mode, where it returns true if variable exists, false if it does not.

```task run
env.value = [1, true, "no maybe"];
env value?
env other_var?
```
You can also use use varible from node, or network in other context. For example:

```task run
env.value = [1, true, "no maybe"];
network echo(json(env.value))
```
Special variable types like `nodes`, `inputs`, `output` are available besides `env`, `network` and `node` based on what type of task the expression is on.

You will learn more about this on [Cross Context Functions and Variables](/intro/cross-context.md) chapter.

## Unary Operator
```task run
env !true
env - 12.0
```

## Binary Operator
```task run
env (12 > 34) & true
env "x" in "xyz"
env 12 in [123, true]
env "my name is" match "^my.*"
```

## If Else

```task run
env if(!true) {"if true"} else {"if false"}
```


## Function
```task run
env.value = [1, true, "no maybe"];
env get(value, 2)
```

Out of all expressions, only the function is not garanteed to return a value. If you are using a function expression and expect a value and it does not return it, it'll be a runtime error.


```task run
env echo("Hello world!") + 12
```

Special function types like `nodes`, `inputs`, `output` are available besides `env`, `network` and `node` based on what type of task the expression is on.

You will learn more about this on [Cross Context Functions and Variables](/intro/cross-context.md) chapter.
