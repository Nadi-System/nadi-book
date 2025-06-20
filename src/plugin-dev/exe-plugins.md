# Executable Plugins

Executable plugins are programs that can be called from terminal. The [node `command` function](../plugins/command.md#node.command), [network `command` function](../plugins/command.md#network.command) and their families in the [`command` plugin](../plugins/command.md) have the capacity to run external programs through the command line.

The inputs to the program is given through the command line arguments, while the output of the programs are read through the standard output of the program. This can be used to call different/same commands for nodes with arguments dependent on their attributes.

And the output from the programs are taken by reading their stdout (standard output). Any lines starting from `nadi:var:` (prefix) is considered a communication attempt with Nadi. Currently, you can set attribute values by providing `key=val` pairs after the prefix. The node function will set it for current node, and network function will set it for the network. Furthermore, in network function, you can add one more section after prefix to set node attributes. For example, `nadi:var:node1:value=12` will set the `value` attribute to `12` in the node named `node1` in the current network.

The executable plugin or commands are language agnostic, as long as the command is available to run from the parent shell they will be run.

To learn how to write code in your language to parse command line arguments refer to the [Wikipedia page on Command Line Arguments](https://en.wikipedia.org/wiki/Command-line_argument_parsing)

The following section shows example programs written in python and R that can interact with nadi in this way.
## Python
Here is an example python script that can be called from nadi for each node. This script just reads a CSV file and passes the attributes to nadi, but more complicated programs can be written by the users.

First part is importing libraries and getting the arguments from nadi. The code below reads one string as a commandline argument and saves that into `station` variable.
```python
import sys
import pandas as pd

try:
    station = sys.argv[1]
except IndexError:
    print("Give station")
    exit(1)
```

Then we can use any python logic with any libraries to do what we want. Here it reads the CSV and extracts values based on the station name. This is just an example, but you can load different csv files for each station and do a lot of analysis before sending those variables to nadi.
```python
! import sys
! import pandas as pd
! 
! try:
!     station = sys.argv[1]
! except IndexError:
!     print("Give station")
!     exit(1)
! 
df = pd.read_csv(f"data/streamflow/{station}.csv", header=None)
sf = df.iloc[:, 4]
sf.index = pd.to_datetime(df.iloc[:, 2])
sf = sf.resample('1d').mean()
```

Once we have our variables from analysis, we can simply print them with `nadi:var:` prefix so that nadi knows they are the variables it should read and load into each node.
```python
! import sys
! import pandas as pd
! 
! try:
!     station = sys.argv[1]
! except IndexError:
!     print("Give station")
!     exit(1)
! 
! df = pd.read_csv(f"data/streamflow/{station}.csv", header=None)
! sf = df.iloc[:, 4]
! sf.index = pd.to_datetime(df.iloc[:, 2])
! sf = sf.resample('1d').mean()
print("nadi:var:sf_mean=", float(sf.mean()))

for year, flow in sf.groupby(sf.index.year).mean().items():
    print(f"nadi:var:sf_year_{year}={flow}")
```

Now we can call this script from inside the nadi tasks system like the following, assuming the python file is saved as `streamflow.py`.

```task
node command("python streamflow.py {_NAME}")
```

If you want to know what the template will be rendered as, use `render` function, and if you want to check whether it exists or not, you can use `exists` function.


## RScript
Similar to most programming languages R can also read command line arguments when ran with `RScript` command instead of `R`. 


For example if you run the following script in a file called `test.r` and ran it with command `Rscript test.r some args 2`, you get the output of `[1] "some" "args" "2"`
```r
args <- commandArgs(trailingOnly = TRUE)
print(args)
```

So you can use the same method like in python to pass arguments, do analysis and pass it back using the `cat` function in r as shown below. `cat` function avoids printing the `[1]` type indices to the stdout.

```r
cat(sprintf("nadi:var:this_val=%d\n", 1200))
```

