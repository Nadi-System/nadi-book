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
