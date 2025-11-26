# User Defined Functions

User can define functions and use them. Function definition consists of function name, arguments and expression.

```task run
func add_one(v) {v + 1}

add_one(12)
```

The function arguments can be positional or keyword arguments. The keyword arguments are optional on the function call. The keyword arguments are evaluated as expression themselves in a local context, and finally the expression in the function body is evaluated and the result is returned.

For example:

```task run
func add_numbers(a, b = 1) { a + b}

add_numbers(1)
add_numbers(1, 2)
```

Although the variables are local to the function, you can not assign any variable values inside the body of the functions.

But, you can assign the function arguments dynamic values based on previous arguments, or environement/network context.

```task run
func last(vals, offset=1) { get(vals, length(vals) - offset) }

last(["a", "b", "c", "d", "e"])
last(["a", "b", "c", "d", "e"], 2)
```

while you can use `env`, `network` and `nodes` variables here as well, the expression is run in immutable context, so nothing can be changed.

```task run
func test(val=env.somevar) {
	val + 1
}

test(1)

env.somevar = 12;
test()

env.somevar = 10;
test()
```

This can allow you to reduce the number of arguments required for the function call while also allowing the user to define that if needed.


Since there is only immutable expression evaluation in the functions, anything requiring something like a loop has to be done through recursion.

```task run
func sum_vals(vals, ind=length(vals) - 1) {
	if (ind < 0) { 0 } else {
		get(vals, ind) + sum_vals(vals, ind - 1)
	}
}

sum_vals([1,2,3])
sum_vals([1, 3.5])
sum_vals([1,2,3, 4, 5, 6])
```

Do be careful of exit condition while working with recursion. This could lead into infinite loop. NADI will crash with stack overflow if that happens. This can also happen if there is too much recursion.

We will provide iteration through for loop in future so that these things can be avoided. This is the first iteration of the user defined functions.


## Default Values

Another useful feature of the functions are the default values. You can define a function with default values so that you can only overwrite some of them later.

```task run image ../output/svg-funcs.svg
network load_str("a -> b\n b -> d\n c -> d");

func settings(top=10, bottom=10, left=10, right=10, deltax=10, deltay=10) {
  attrmap(
    top=float(top), left=float(left), right=float(right), bottom=float(bottom),
    deltax=float(deltax), deltay=float(deltay), fontsize=10.0
  )
}

network cairo.table("Index => {INDEX}\n <Name => {NAME}", "./output/svg-funcs.svg")
```

You can save these functions in a file and import them later:

```task run
import utils

utils.settings()
utils.settings(top=100)
```

While importing functions from a `.tasks` file, only the function definitions are imported, other tasks are not executed.
