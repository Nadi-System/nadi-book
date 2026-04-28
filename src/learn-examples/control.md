# Control Flow

Task has some basic control flow required to write programs. They are if-else branches and while loops.

## Conditional (If-Else) Blocks
There are two kind of if-else branches. One is on an expression level. which means there has to be if and else branch both as it expects a return value. The following example shows the expression with if-else block.

```task run
newvar = if (12 > 90) {"yes"} else {"no"};
newvar
```

Trying to do it without else block will result in an parse error as the program will error with a syntax error, for example the code below is invalid

```task
newvar = if (12 > 90) {"yes"};
newvar
```

That's when you can use the if-else block on the task level. This can be only if block as the execution blocks are tasks instead of expressions.

Here, since the condition is negative the task inside the block is never executed, hence `newvar` is empty.
```task run
if (12 > 90) {
    newvar = "yes";
}
newvar
```

## While Loop
While loop runs the tasks inside the block repeatedly while the condition is satisfied. There is an iteration limit of 1,000,000 for now just in case people write infinite loop. This is arbritary.

```task run
somevar = 1;
while (somevar < 10) {
    echo(str(somevar));
    somevar = somevar + 1
}

echo(r"Final value: {somevar}")
```

This can be used to repeat a set of tasks for a various reasons.

## Error Handling

`try-catch` blocks are similar to `if-else` where the `try` block contains the happy path (code to run if no errors are encountered), while any error will result in the code in the `catch` block being executed instead.

Currently you can only use `try-catch` inside an expression. Future versions will include the ability to use it with tasks as well.

```task run
try { 1 + 12 } catch { 2 }
try { 1 + "s" } catch { 2 }
```
