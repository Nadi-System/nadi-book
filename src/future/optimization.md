# Optimization Algorithms

We can have input variables to change, and output variables to
optimize, but how do we take what function to run to calculate the
output variable...

One simple idea can be to take a command template to run. So we will
change the input variables, run the command for each node or network,
and then that command will update the output variable that we can
optimize for.

We might require an option to call other functions in
this case. Then maybe we can just pass the name of the function.


Complex idea could be to add the support for loop syntax in task system.

# While loop
Visiting this page was fun because I ended up implementing a while loop and the if-else statement.

Now, as long as you have functions to calculate error metrics from your variables/network you should be able to run optimization using the brute-force method.

<!-- The example below is a really bad way to search for a solution until a condition is true. More complicated code could be written  -->
<!-- ```task -->
<!-- env.param = 1; -->
<!-- env.optimum = false; -->
<!-- while (!optimum) { -->
<!--    network.err = your_function(env.param); -->
<!--    # and other things here -->
<!--    env.optimum = network.err > 0.9; -->
<!--    env.param = param + 0.1; -->
<!-- } -->
<!-- ``` -->
