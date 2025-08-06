# Software Architecture

NADI System consists of multiple components. The top-most division is in the GIS component and the DSL component.

## NADI GIS
This is the GIS component that helps with network detection, dealing with GIS files, and other utilities.

[NADI GIS repository](https://github.com/Nadi-System/nadi-gis) contains 3 important components:
### `cli_tool`
This contains the CLI for the NADI GIS tool (this compiles to generate `nadi-gis` binary). The `main.rs` file contains the code for the CLI, with files inside it providing data types, or code for the subcommands.

Currently it has the following subcommands:

| Command   | File         | Description                                                   |
|-----------|--------------|---------------------------------------------------------------|
| `nid`     | `nid.rs`     | Download the National Inventory of Dams dataset               |
| `usgs`    | `usgs.rs`    | Download data from USGS National Hydrography Dataset (NHD+)   |
| `layers`  | `layers.rs`  | Show list of layers in a GIS file                             |
| `check`   | `check.rs`   | Check the stream network to see outlet, branches, etc         |
| `order`   | `order.rs`   | Order the streams, adds order attribute to each segment       |
| `network` | `network.rs` | Find the network information from streams file between points |

### `qgis`
This directory contains the NADI QGIS plugin. The plugin is written in Python. This is an experiemental plugin that calls the `nadi-gis` command line utility with appropriate flags.

### `nadi_plugin`
This is the plugin for NADI DSL that has GIS functions. This compiles into a shared library that can be loaded with NADI System, refer to the nadi plugins documentation on how to load plugins.

The repo contains `lib.rs` that generates the plugin codes and function available for loading/saving GIS files from the NADI DSL.

## NADI DSL
The NADI DSL also called the Task System consists of components that are related to the programming language that helps with network analysis. 

The figure below shows the internal data structure and components that support the NADI DSL execution.

![Tasks Architecture](images/task-architecture.svg)

The task context is the main runtime environment for the DSL. The Context contains a Network (starts as empty network), functions loaded from the plugins, and the environmental variables. As the DSL is executed Task by Task, the context is modified with mutable functions or assignment operator. For example running a `network load_file(...)` will load a network from file and save that in the context. When a user runs a `node` task, the expression/function is run on each node of the network in the current context.

If a user is using NADI from Python library instead of the DSL, then they have access to the Functions, and the data types to generate the Network from files/strings/edges. But they don't have access to environment variables (they can use python variables), and other syntax advantages of DSL. They also have to run the node functions in loop yourself.
Because of this `nadi-py` should provide data types from NADI, as well as the functions from the plugins as callable objects in python along side their documentation. We use `maturin` to generate the python bindings from the rust code.

NADI DSL can also load `nadi_gis` plugin that provides the functions to read/write GIS files.

[The NADI DSL repository](https://github.com/Nadi-System/nadi-system) contains the following components:

### `nadi_plugin`
This is crate for proc-macros that `nadi_core` uses, and can be used to make plugin development easier. This contains the codes for the macros `nadi_plugin`, `env_func`, `node_func`, and `network_func`. This is re-exported by `nadi_core` so that it is not used directly by the users.

### `nadi_core`
This is the main/core library for NADI System. This contains the data types, APIs and mechanisms for the Plugin system to work.

### `nadi-cli`
This contains the code for generating the `nadi` binary. It uses the `nadi_core` library and just runs the tasks. The binary has command line options (using `clap`) to run in interactive mode, run a file, show help/code for functions, list functions, etc.

### `nadi-ide`
This is the main GUI component of NADI system. This provides a graphical interface (written in `iced`), that has tiling window style panes that each have different components that can display information, or let user interact with it.

This also contains codes to generate custom highlight for the DSL, generate custom widget with network diagram, and such.

The `nadi-ide/src/` directory contains multiple rust source code files, many of them are for corresponding component of the GUI window.

### `nadi-serve`
This contains experimental server for running NADI Tasks from a browser. It uses `rocket` to open a local server, then listens for requests. The requests to run tasks are run independently of one another. The security of letting users run tasks in the server is not well explored, and might need more experimentation before it can be recommended to be used.

### `extra`
This directory contains some extra scripts. Currently it contains codes and examples for syntax highlighing task scripts in sublime, typst, latex, HTML (using javascript), etc.
