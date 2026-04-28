# Expression

Expressions are airthmetic or logical operations. They can appear inside the conditional statements, or as input to a task, or nested in other expression or function calls.

Expressions are defined into the following categories:
## Literal Values
```task run
[1, true, "no maybe"]
12.2
```
## Variable
```task run
value = [1, true, "no maybe"];
value
```

Variables also have a "check" mode, where it returns true if variable exists, false if it does not.

```task run
value = [1, true, "no maybe"];
value?
other_var?
```

If you use variable that does not exist, then it will throw an error. You can use `try-catch` block to catch that error. This is computationally better than checking if a variable exists. But the checking is useful in case of filtering the node functions (explained later).

```task run
value = [1, true, "no maybe"];
try { other_var } catch { value }
```

You can also use varible from node, or network in other context. For example:

```task run
value = [1, true, "no maybe"];
network echo(json(value))
```
Special variable types like `nodes`, `inputs`, `output` are available besides `env`, `network` and `node` based on what type of task the expression is on.

You will learn more about this on [Cross Context Functions and Variables](cross-context.md) chapter.

## Unary Operator
```task run
env !true
- 12.0
```

## Binary Operator
```task run
(12 > 34) & true
"x" in "xyz"
12 in [123, true]
"my name is" match "^my.*"
```

## If Else

```task run
if(!true) {"if true"} else {"if false"}
```


## Function
```task run
value = [1, true, "no maybe"];
get(value, 2)
```

All expressions are not garanteed to return a value. If you are using a function expression and expect a value and it does not return it, it'll be a runtime error. Similar case for `if` block without `else` if condition is false, and so on.


```task run
echo("Hello world!") + 12
```

Special function types like `nodes`, `inputs`, `output` are available besides `env`, `network` and `node` based on what type of task the expression is on.

You will learn more about this on [Cross Context Functions and Variables](cross-context.md) chapter.
