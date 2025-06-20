# Plugins

Not only can you use `nadi-py` to write network based algorithms in python, you can also use it to write executable plugins that you can use to run analysis in python and feed it back to nadi system.

First thing to say about that is, you don't need `nadi-py` for writing python plugins, as they are run as a normal python scripts.

## Example without using nadi-py
Here is an example task that calls python using the `command` function:

```task
network load_file("scioto.network")

# load average streamflow from the csv file
# containing timeseries using python
node command("python area-and-streamflow.py {_NAME}")

# this just prints the attributes in csv format.
network print_attr_csv("INDEX", "area", "streamflow")
```

Here the `command` function takes a string template, renders it and runs it as a shell command for each node.

Our python script should have a way to read that node's name that we passed to the python command.

```python
import sys
import pandas as pd

try:
    station = sys.argv[1]
except IndexError:
    print("Give station")
    exit(1)

df = pd.read_csv(f"data/streamflow/{station}.csv", header=None)
sf = df.iloc[:, 4]
sf.index = pd.to_datetime(df.iloc[:, 2])
daily = sf.resample('1d').mean()
counts = daily.groupby(daily.index.year).count()
counts.index.name = "datetime"
daily.index.name = "datetime"
annual = daily.groupby(daily.index.year).mean().loc[counts > 300]

print("nadi:var:sf_mean=", float(daily.mean()))

for year, flow in annual.items():
    print(f"nadi:var:sf_year_{year}={flow}")
```

Here the line `sys.argv[1]` reads the argument from command line (node's name in this case). And reads the data for that node. The ouput is printed with prefix `nadi:var:` which tells nadi to load as `key=val` pair for that node.

## Example using nadi-py
The same example can be written using `nadi-py` so that the execution is very short (as it is being run as a network function instead of node function; `command` is a slow function as a new shell instance has to be created every time it is invoked).

Here we use the `command` network function and pass the network file as input. If your network has changed you can use `save_file` `network` function to save the network as a text file and then pass that instead.

```task
network load_file("scioto.network")

# load average streamflow from the csv file
# containing timeseries using python
network command("python area-and-streamflow.py scioto.network")

# this just prints the attributes in csv format.
network print_attr_csv("INDEX", "area", "streamflow")
```

The corresponding python script now will look like this:

```python
import sys
import pandas as pd
import nadi

try:
    network = sys.argv[1]
except IndexError:
    print("Give station")
    exit(1)

for node in nadi.Network(network).nodes():
	station = node.NAME
	df = pd.read_csv(f"data/streamflow/{station}.csv", header=None)
	sf = df.iloc[:, 4]
	sf.index = pd.to_datetime(df.iloc[:, 2])
	daily = sf.resample('1d').mean()
	counts = daily.groupby(daily.index.year).count()
	counts.index.name = "datetime"
	daily.index.name = "datetime"
	annual = daily.groupby(daily.index.year).mean().loc[counts > 300]

	print(f"nadi:var:{station}:sf_mean=", float(daily.mean()))

	for year, flow in annual.items():
		print(f"nadi:var:{station}:sf_year_{year}={flow}")
```

Here we load the network using `nadi-py`, and then loop through the node, and pass the variables back to nadi through stdout. We have to pass the node names with the `nadi:var:` as this is being run for the whole network. Without the node name, it'll take the `key=val` pair as network attribute.

This should allow users to have a lot of flexibility in using python to do complex analysis and get the results back into nadi directly. You can also save the results of the python script into a file, and check if the file exists before running the command from nadi to save the redundant computations.
