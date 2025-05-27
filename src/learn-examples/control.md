# Control Flow

Task has some basic control flow required to write programs. They are if-else branches and while loops.

## Conditional (If-Else) Blocks
There are two kind of if-else branches. One is on an expression level. which means there has to be if and else branch both as it expects a return value. The following example shows the expression with if-else block.

```task run
env.newvar = if (12 > 90) {"yes"} else {"no"};
env.newvar
```

Trying to do it without else block will result in an parse error as the program will error with a syntax error, for example the code below is invalid

```task
env.newvar = if (12 > 90) {"yes"};
env.newvar
```

That's when you can use the if-else block on the task level. This can be only if block as the execution blocks are tasks instead of expressions.

Here, since the condition is negative the task inside the block is never executed, hence `env.newvar` is empty.
```task run
if (12 > 90) {
	env.newvar = "yes";
}
env.newvar
```

## While Loop
While loop runs the tasks inside the block repeatedly while the condition is satisfied. There is an iteration limit of 1,000,000 for now just in case people write infinite loop. This is arbritary.

```task run
env.somevar = 1;
while (somevar < 10) {
	env.somevar
	env.somevar = env.somevar + 1;
}
```

This can be used to repeat a set of tasks for a various reasons.


<div class="warning">
If your tasks take a long time to run, note that, the while loop needs to be completely run before the output can be processed and displayed, so that even if your output is not printed, it is being run. This will be fixed in the future version of the program.
</div>
