# All Plugin Functions
All the functions available on this instance of nadi, are listed here.

## Env Functions
| Plugin                  | Function                                                        | Help                                                                    |
|:------------------------|:----------------------------------------------------------------|:------------------------------------------------------------------------|
| [`ATTRS`](ATTRS.md)     | [`float_div`](ATTRS.md#env.float_div)                           | Float Division (same as / operator)                                     |
| [`ATTRS`](ATTRS.md)     | [`float_mult`](ATTRS.md#env.float_mult)                         | Float Multiplication (same as * operator)                               |
| [`ATTRS`](ATTRS.md)     | [`get`](ATTRS.md#env.get)                                       | get the choosen attribute from Array or AttrMap                         |
| [`ATTRS`](ATTRS.md)     | [`is_none`](ATTRS.md#env.is_none)                               | check for none value                                                    |
| [`ATTRS`](ATTRS.md)     | [`keys`](ATTRS.md#env.keys)                                     | keys of the attribute map                                               |
| [`ATTRS`](ATTRS.md)     | [`none`](ATTRS.md#env.none)                                     | None function that returns None                                         |
| [`ATTRS`](ATTRS.md)     | [`parse_attr`](ATTRS.md#env.parse_attr)                         | Parse attribute from string                                             |
| [`ATTRS`](ATTRS.md)     | [`parse_attrmap`](ATTRS.md#env.parse_attrmap)                   | Parse attribute map from string                                         |
| [`ATTRS`](ATTRS.md)     | [`strmap`](ATTRS.md#env.strmap)                                 | map values from the attribute based on the given table                  |
| [`ATTRS`](ATTRS.md)     | [`values`](ATTRS.md#env.values)                                 | values of the attribute map                                             |
| [`COMMAND`](COMMAND.md) | [`command`](COMMAND.md#env.command)                             | Runs a command in terminal and returns attribute map                    |
| [`COMMAND`](COMMAND.md) | [`set_shell_env`](COMMAND.md#env.set_shell_env)                 | Set environment variable in the shell                                   |
| [`COMMAND`](COMMAND.md) | [`shell_env`](COMMAND.md#env.shell_env)                         | Get environment variable from the shell                                 |
| [`CORE`](CORE.md)       | [`append`](CORE.md#env.append)                                  | append a value to an array                                              |
| [`CORE`](CORE.md)       | [`array`](CORE.md#env.array)                                    | make an array from the arguments                                        |
| [`CORE`](CORE.md)       | [`assert_eq`](CORE.md#env.assert_eq)                            | Assert the two values are equal                                         |
| [`CORE`](CORE.md)       | [`assert_neq`](CORE.md#env.assert_neq)                          | Assert the two values are not equal                                     |
| [`CORE`](CORE.md)       | [`assert`](CORE.md#env.assert)                                  | Assert the condition is true                                            |
| [`CORE`](CORE.md)       | [`attrmap`](CORE.md#env.attrmap)                                | make an attrmap from the arguments                                      |
| [`CORE`](CORE.md)       | [`concat`](CORE.md#env.concat)                                  | Concat the strings                                                      |
| [`CORE`](CORE.md)       | [`count_str`](CORE.md#env.count_str)                            | Get a count of unique string values                                     |
| [`CORE`](CORE.md)       | [`count`](CORE.md#env.count)                                    | Count the number of true values in the array                            |
| [`CORE`](CORE.md)       | [`day`](CORE.md#env.day)                                        | day from date/datetime                                                  |
| [`CORE`](CORE.md)       | [`drop_nan`](CORE.md#env.drop_nan)                              | append a value to an array                                              |
| [`CORE`](CORE.md)       | [`flatten`](CORE.md#env.flatten)                                | flatten the given list of arrays into a single one                      |
| [`CORE`](CORE.md)       | [`float`](CORE.md#env.float)                                    | make a float from value                                                 |
| [`CORE`](CORE.md)       | [`hour`](CORE.md#env.hour)                                      | hour from time/datetime                                                 |
| [`CORE`](CORE.md)       | [`insert`](CORE.md#env.insert)                                  | Insert a key and value to a attrmap                                     |
| [`CORE`](CORE.md)       | [`int`](CORE.md#env.int)                                        | make an int from the value                                              |
| [`CORE`](CORE.md)       | [`isinf`](CORE.md#env.isinf)                                    | check if a float is +/- infinity                                        |
| [`CORE`](CORE.md)       | [`isna`](CORE.md#env.isna)                                      | check if a float is nan                                                 |
| [`CORE`](CORE.md)       | [`json`](CORE.md#env.json)                                      | format the attribute as a json string                                   |
| [`CORE`](CORE.md)       | [`len`](CORE.md#env.len)                                        | length of an array or hashmap                                           |
| [`CORE`](CORE.md)       | [`max_num`](CORE.md#env.max_num)                                | Minimum of the variables                                                |
| [`CORE`](CORE.md)       | [`max`](CORE.md#env.max)                                        | Maximum of the variables                                                |
| [`CORE`](CORE.md)       | [`min_num`](CORE.md#env.min_num)                                | Minimum of the variables                                                |
| [`CORE`](CORE.md)       | [`min`](CORE.md#env.min)                                        | Minimum of the variables                                                |
| [`CORE`](CORE.md)       | [`minute`](CORE.md#env.minute)                                  | minute from time/datetime                                               |
| [`CORE`](CORE.md)       | [`month`](CORE.md#env.month)                                    | month from date/datetime                                                |
| [`CORE`](CORE.md)       | [`nanosecond`](CORE.md#env.nanosecond)                          | nanosecond from time/datetime                                           |
| [`CORE`](CORE.md)       | [`now`](CORE.md#env.now)                                        | get the current date time                                               |
| [`CORE`](CORE.md)       | [`prod`](CORE.md#env.prod)                                      | Product of the variables                                                |
| [`CORE`](CORE.md)       | [`range`](CORE.md#env.range)                                    | Generate integer array, end is not included                             |
| [`CORE`](CORE.md)       | [`second`](CORE.md#env.second)                                  | second from time/datetime                                               |
| [`CORE`](CORE.md)       | [`str_quote`](CORE.md#env.str_quote)                            | Convert string to double quoted form                                    |
| [`CORE`](CORE.md)       | [`str`](CORE.md#env.str)                                        | make a string from value                                                |
| [`CORE`](CORE.md)       | [`sum`](CORE.md#env.sum)                                        | Sum of the variables                                                    |
| [`CORE`](CORE.md)       | [`timediff`](CORE.md#env.timediff)                              | get the current date time                                               |
| [`CORE`](CORE.md)       | [`to_attrmap`](CORE.md#env.to_attrmap)                          | make an attrmap from a list of (k, v)                                   |
| [`CORE`](CORE.md)       | [`today`](CORE.md#env.today)                                    | get the current date                                                    |
| [`CORE`](CORE.md)       | [`type_name`](CORE.md#env.type_name)                            | Type name of the arguments                                              |
| [`CORE`](CORE.md)       | [`unique_str`](CORE.md#env.unique_str)                          | Get a list of unique string values                                      |
| [`CORE`](CORE.md)       | [`unique`](CORE.md#env.unique)                                  | Get a list of unique attribute values (only primitives)                 |
| [`CORE`](CORE.md)       | [`year`](CORE.md#env.year)                                      | year from date/datetime                                                 |
| [`CORE`](CORE.md)       | [`zip`](CORE.md#env.zip)                                        | make an array combining the arrays from arguments                       |
| [`DEBUG`](DEBUG.md)     | [`clip`](DEBUG.md#env.clip)                                     | Echo the `----8<----` line for clipping syntax                          |
| [`DEBUG`](DEBUG.md)     | [`debug`](DEBUG.md#env.debug)                                   | Print the args and kwargs on this function                              |
| [`DEBUG`](DEBUG.md)     | [`echo`](DEBUG.md#env.echo)                                     | Echo the string to stdout or stderr                                     |
| [`DEBUG`](DEBUG.md)     | [`sleep`](DEBUG.md#env.sleep)                                   | sleep for given number of milliseconds                                  |
| [`FILES`](FILES.md)     | [`exists`](FILES.md#env.exists)                                 | Checks if the given path exists                                         |
| [`FILES`](FILES.md)     | [`from_file`](FILES.md#env.from_file)                           | Reads the file contents as string                                       |
| [`FILES`](FILES.md)     | [`line`](FILES.md#env.line)                                     | Checks if the given path exists                                         |
| [`FILES`](FILES.md)     | [`to_file`](FILES.md#env.to_file)                               | Writes the string to the file                                           |
| [`LOGIC`](LOGIC.md)     | [`all`](LOGIC.md#env.all)                                       | check if all of the bool are true                                       |
| [`LOGIC`](LOGIC.md)     | [`and`](LOGIC.md#env.and)                                       | Boolean and                                                             |
| [`LOGIC`](LOGIC.md)     | [`any`](LOGIC.md#env.any)                                       | check if any of the bool are true                                       |
| [`LOGIC`](LOGIC.md)     | [`eq`](LOGIC.md#env.eq)                                         | Equality than check                                                     |
| [`LOGIC`](LOGIC.md)     | [`gt`](LOGIC.md#env.gt)                                         | Greater than check                                                      |
| [`LOGIC`](LOGIC.md)     | [`ifelse`](LOGIC.md#env.ifelse)                                 | Simple if else condition                                                |
| [`LOGIC`](LOGIC.md)     | [`lt`](LOGIC.md#env.lt)                                         | Less than check                                                         |
| [`LOGIC`](LOGIC.md)     | [`not`](LOGIC.md#env.not)                                       | boolean not                                                             |
| [`LOGIC`](LOGIC.md)     | [`or`](LOGIC.md#env.or)                                         | boolean or                                                              |
| [`MATH`](MATH.md)       | [`exp`](MATH.md#env.exp)                                        | Exponential                                                             |
| [`MATH`](MATH.md)       | [`log`](MATH.md#env.log)                                        | Logarithm of a value, natural if base not given                         |
| [`MATH`](MATH.md)       | [`powf`](MATH.md#env.powf)                                      | Float power                                                             |
| [`MATH`](MATH.md)       | [`powi`](MATH.md#env.powi)                                      | Integer power                                                           |
| [`MATH`](MATH.md)       | [`sqrt`](MATH.md#env.sqrt)                                      | Square Root                                                             |
| [`OPTIMUM`](OPTIMUM.md) | [`uniform_crossing_over`](OPTIMUM.md#env.uniform_crossing_over) | Crossing over of linear genes from two parent given uniform probability |
| [`RANDOM`](RANDOM.md)   | [`random_bool`](RANDOM.md#env.random_bool)                      | Random bool given uniform probability                                   |
| [`REGEX`](REGEX.md)     | [`str_count`](REGEX.md#env.str_count)                           | Count the number of matches of given pattern in the string              |
| [`REGEX`](REGEX.md)     | [`str_filter`](REGEX.md#env.str_filter)                         | Filter from the string list with only the values matching pattern       |
| [`REGEX`](REGEX.md)     | [`str_find_all`](REGEX.md#env.str_find_all)                     | Find all the matches of the given pattern in the value                  |
| [`REGEX`](REGEX.md)     | [`str_find`](REGEX.md#env.str_find)                             | Find the given pattern in the value                                     |
| [`REGEX`](REGEX.md)     | [`str_join`](REGEX.md#env.str_join)                             | Join the list of strings with the given string                          |
| [`REGEX`](REGEX.md)     | [`str_match`](REGEX.md#env.str_match)                           | Check if the given pattern matches the value or not                     |
| [`REGEX`](REGEX.md)     | [`str_replace`](REGEX.md#env.str_replace)                       | Replace the occurances of the given match                               |
| [`REGEX`](REGEX.md)     | [`str_split`](REGEX.md#env.str_split)                           | Split the string with the given pattern                                 |
| [`RENDER`](RENDER.md)   | [`render`](RENDER.md#env.render)                                | Render the template based on the node attributes                        |
| [`TS`](TS.md)           | [`timeseries`](TS.md#env.timeseries)                            | build timeseries from timeline and series                               |
| [`TS`](TS.md)           | [`ts_timeline`](TS.md#env.ts_timeline)                          | Get timeline of the timeseries as Series of strings                     |
| [`VISUALS`](VISUALS.md) | [`image`](VISUALS.md#env.image)                                 |                                                                         |
| [`VISUALS`](VISUALS.md) | [`svg_open_multi`](VISUALS.md#env.svg_open_multi)               |                                                                         |
| [`VISUALS`](VISUALS.md) | [`svg_open`](VISUALS.md#env.svg_open)                           |                                                                         |
| [`VISUALS`](VISUALS.md) | [`svg_settings`](VISUALS.md#env.svg_settings)                   | Generate the margins for the SVGs                                       |
| [`csv`](csv.md)         | [`count_data`](csv.md#env.count_data)                           | Count the number of data in a column from a CSV file                    |
| [`csv`](csv.md)         | [`count_usgs_years`](csv.md#env.count_usgs_years)               | Count the number of data in a column from a CSV file                    |
| [`csv`](csv.md)         | [`schema`](csv.md#env.schema)                                   | List the columns in a CSV file                                          |
| [`dss`](dss.md)         | [`list_catalog`](dss.md#env.list_catalog)                       | List the catalog of the dss file                                        |
| [`dss`](dss.md)         | [`load_series`](dss.md#env.load_series)                         |                                                                         |
| [`dss`](dss.md)         | [`save_series`](dss.md#env.save_series)                         |                                                                         |
| [`gis`](gis.md)         | [`features_count`](gis.md#env.features_count)                   | Show the fields in the GIS file layer as a list                         |
| [`gis`](gis.md)         | [`fields`](gis.md#env.fields)                                   | Show the fields in the GIS file layer as a list                         |
| [`gis`](gis.md)         | [`layers`](gis.md#env.layers)                                   | Show the layers of the GIS file as a list                               |
| [`gis`](gis.md)         | [`line`](gis.md#env.line)                                       | Show the layers of the GIS file as a list                               |
| [`gis`](gis.md)         | [`values`](gis.md#env.values)                                   | Returns the values from a feature in a GIS file from its index          |
| [`typst`](typst.md)     | [`compile`](typst.md#env.compile)                               | convert the typst content into pdf/svg/png                              |
| [`typst`](typst.md)     | [`svg2pdf`](typst.md#env.svg2pdf)                               | convert the svg content into pdf or png (or svg)                        |


## Node Functions
| Plugin                  | Function                                             | Help                                                            |
|:------------------------|:-----------------------------------------------------|:----------------------------------------------------------------|
| [`ATTRS`](ATTRS.md)     | [`del_attrs`](ATTRS.md#node.del_attrs)               | Delete attributes from the given node                           |
| [`ATTRS`](ATTRS.md)     | [`first_attr`](ATTRS.md#node.first_attr)             | Return the first Attribute that exists                          |
| [`ATTRS`](ATTRS.md)     | [`get_attr`](ATTRS.md#node.get_attr)                 | Retrive attribute                                               |
| [`ATTRS`](ATTRS.md)     | [`get_attrs`](ATTRS.md#node.get_attrs)               | Retrive multiple attributes                                     |
| [`ATTRS`](ATTRS.md)     | [`has_attr`](ATTRS.md#node.has_attr)                 | Check if the attribute is present                               |
| [`ATTRS`](ATTRS.md)     | [`load_attrs`](ATTRS.md#node.load_attrs)             | Loads attrs from file for all nodes based on the given template |
| [`ATTRS`](ATTRS.md)     | [`load_toml_render`](ATTRS.md#node.load_toml_render) | Set node attributes by loading a toml from rendered template    |
| [`ATTRS`](ATTRS.md)     | [`print_all_attrs`](ATTRS.md#node.print_all_attrs)   | Print all attrs in a node                                       |
| [`ATTRS`](ATTRS.md)     | [`print_attrs`](ATTRS.md#node.print_attrs)           | Print the given node attributes if present                      |
| [`ATTRS`](ATTRS.md)     | [`set_attrs_ifelse`](ATTRS.md#node.set_attrs_ifelse) | if else condition with multiple attributes                      |
| [`ATTRS`](ATTRS.md)     | [`set_attrs_render`](ATTRS.md#node.set_attrs_render) | Set node attributes based on string templates                   |
| [`ATTRS`](ATTRS.md)     | [`set_attrs`](ATTRS.md#node.set_attrs)               | Set node attributes                                             |
| [`COMMAND`](COMMAND.md) | [`command`](COMMAND.md#node.command)                 | Run the given template as a shell command.                      |
| [`COMMAND`](COMMAND.md) | [`run`](COMMAND.md#node.run)                         | Run the node as if it's a command if inputs are changed         |
| [`CONN`](CONN.md)       | [`move_aside`](CONN.md#node.move_aside)              | Move the node to the side so that its inputs go to the output   |
| [`CORE`](CORE.md)       | [`has_output`](CORE.md#node.has_output)              | Node has an output or not                                       |
| [`CORE`](CORE.md)       | [`inputs_attr`](CORE.md#node.inputs_attr)            | Get attributes of the input nodes                               |
| [`CORE`](CORE.md)       | [`inputs_count`](CORE.md#node.inputs_count)          | Count the number of input nodes in the node                     |
| [`CORE`](CORE.md)       | [`inputs_map`](CORE.md#node.inputs_map)              | Get attributes of the input nodes in map format                 |
| [`CORE`](CORE.md)       | [`output_attr`](CORE.md#node.output_attr)            | Get attributes of the output node                               |
| [`FILES`](FILES.md)     | [`exists`](FILES.md#node.exists)                     | Checks if the given path exists when rendering the template     |
| [`RENDER`](RENDER.md)   | [`render`](RENDER.md#node.render)                    | Render the template based on the node attributes                |
| [`SERIES`](SERIES.md)   | [`set_series`](SERIES.md#node.set_series)            | set the following series to the node                            |
| [`SERIES`](SERIES.md)   | [`sr_count`](SERIES.md#node.sr_count)                | Number of series in the node                                    |
| [`SERIES`](SERIES.md)   | [`sr_delete`](SERIES.md#node.sr_delete)              | Delete the series with the given name                           |
| [`SERIES`](SERIES.md)   | [`sr_dtype`](SERIES.md#node.sr_dtype)                | Type name of the series                                         |
| [`SERIES`](SERIES.md)   | [`sr_fill`](SERIES.md#node.sr_fill)                  | Fill the series with a value                                    |
| [`SERIES`](SERIES.md)   | [`sr_get`](SERIES.md#node.sr_get)                    | get nth member of a series                                      |
| [`SERIES`](SERIES.md)   | [`sr_len`](SERIES.md#node.sr_len)                    | Length of the series                                            |
| [`SERIES`](SERIES.md)   | [`sr_list`](SERIES.md#node.sr_list)                  | List all series in the node                                     |
| [`SERIES`](SERIES.md)   | [`sr_max`](SERIES.md#node.sr_max)                    | Get maximum value of the series                                 |
| [`SERIES`](SERIES.md)   | [`sr_mean`](SERIES.md#node.sr_mean)                  | Mean of a series values                                         |
| [`SERIES`](SERIES.md)   | [`sr_min`](SERIES.md#node.sr_min)                    | Get minimum value of the series                                 |
| [`SERIES`](SERIES.md)   | [`sr_sort`](SERIES.md#node.sr_sort)                  | Sort an series                                                  |
| [`SERIES`](SERIES.md)   | [`sr_sum`](SERIES.md#node.sr_sum)                    | Sum of the series values                                        |
| [`SERIES`](SERIES.md)   | [`sr_to_array`](SERIES.md#node.sr_to_array)          | Make an array from the series if it's complete                  |
| [`TS`](TS.md)           | [`ts_complete`](TS.md#node.ts_complete)              | Convert the timeseries to complete if it doesn't have gaps      |
| [`TS`](TS.md)           | [`ts_count`](TS.md#node.ts_count)                    | Number of timeseries in the node                                |
| [`TS`](TS.md)           | [`ts_delete`](TS.md#node.ts_delete)                  | Delete the timeseries with the given name                       |
| [`TS`](TS.md)           | [`ts_dtype`](TS.md#node.ts_dtype)                    | Type name of the timeseries                                     |
| [`TS`](TS.md)           | [`ts_len`](TS.md#node.ts_len)                        | Length of the timeseries                                        |
| [`TS`](TS.md)           | [`ts_list`](TS.md#node.ts_list)                      | List all timeseries in the node                                 |
| [`TS`](TS.md)           | [`ts_print`](TS.md#node.ts_print)                    | Print the given timeseries values in csv format                 |
| [`VISUALS`](VISUALS.md) | [`get_xy`](VISUALS.md#node.get_xy)                   |                                                                 |
| [`VISUALS`](VISUALS.md) | [`set_xy`](VISUALS.md#node.set_xy)                   |                                                                 |
| [`csv`](csv.md)         | [`column`](csv.md#node.column)                       | read a single column from a CSV file                            |
| [`csv`](csv.md)         | [`node_name`](csv.md#node.node_name)                 | Example Node function for the plugin                            |


## Network Functions
| Plugin                  | Function                                                      | Help                                                                                 |
|:------------------------|:--------------------------------------------------------------|:-------------------------------------------------------------------------------------|
| [`ATTRS`](ATTRS.md)     | [`nodemap`](ATTRS.md#network.nodemap)                         | Generate attribute map for the given attribute for the nodes                         |
| [`ATTRS`](ATTRS.md)     | [`set_attrs_render`](ATTRS.md#network.set_attrs_render)       | Set network attributes based on string templates                                     |
| [`ATTRS`](ATTRS.md)     | [`set_attrs`](ATTRS.md#network.set_attrs)                     | Set network attributes                                                               |
| [`ATTRS`](ATTRS.md)     | [`set_node_attrs`](ATTRS.md#network.set_node_attrs)           | Set node attributes in a network using a attrmap or array                            |
| [`COMMAND`](COMMAND.md) | [`command`](COMMAND.md#network.command)                       | Run the given template as a shell command.                                           |
| [`COMMAND`](COMMAND.md) | [`parallel`](COMMAND.md#network.parallel)                     | Run the given template as a shell command for each nodes in the network in parallel. |
| [`CONN`](CONN.md)       | [`load_edges`](CONN.md#network.load_edges)                    | Load the given edges as a network                                                    |
| [`CONN`](CONN.md)       | [`load_file`](CONN.md#network.load_file)                      | Load the given file into the network                                                 |
| [`CONN`](CONN.md)       | [`load_str`](CONN.md#network.load_str)                        | Load network from the given string                                                   |
| [`CONN`](CONN.md)       | [`save_file`](CONN.md#network.save_file)                      | Save the network into the given file                                                 |
| [`CONN`](CONN.md)       | [`subset_from`](CONN.md#network.subset_from)                  | Take a subset of network by taking the given node as a new outlet                    |
| [`CONN`](CONN.md)       | [`subset_largest`](CONN.md#network.subset_largest)            | Take a subset of network by only including the largest blob of connected nodes       |
| [`CONN`](CONN.md)       | [`subset`](CONN.md#network.subset)                            | Take a subset of network by only including the selected nodes                        |
| [`CORE`](CORE.md)       | [`count`](CORE.md#network.count)                              | Count the number of nodes in the network                                             |
| [`CORE`](CORE.md)       | [`net_leaves`](CORE.md#network.net_leaves)                    | Get the name of the leaf nodes                                                       |
| [`CORE`](CORE.md)       | [`net_roots`](CORE.md#network.net_roots)                      | Get the name of the outlet nodes                                                     |
| [`CORE`](CORE.md)       | [`node_attr`](CORE.md#network.node_attr)                      | Get the attr of the provided node                                                    |
| [`CORE`](CORE.md)       | [`node_map`](CORE.md#network.node_map)                        | Get a attrmap with node name and attributes                                          |
| [`GVIZ`](GVIZ.md)       | [`load_positions`](GVIZ.md#network.load_positions)            | Load Node positions from the graphviz file                                           |
| [`GVIZ`](GVIZ.md)       | [`save_gv`](GVIZ.md#network.save_gv)                          | Save the network as a graphviz file                                                  |
| [`RENDER`](RENDER.md)   | [`render_nodes`](RENDER.md#network.render_nodes)              | Render each node of the network and combine to same variable                         |
| [`RENDER`](RENDER.md)   | [`render_template`](RENDER.md#network.render_template)        | Render a File template for the nodes in the whole network                            |
| [`RENDER`](RENDER.md)   | [`render`](RENDER.md#network.render)                          | Render from network attributes                                                       |
| [`TABLE`](TABLE.md)     | [`save_csv`](TABLE.md#network.save_csv)                       | Save CSV                                                                             |
| [`TABLE`](TABLE.md)     | [`table_to_markdown`](TABLE.md#network.table_to_markdown)     | Render the Table as a rendered markdown                                              |
| [`TS`](TS.md)           | [`series_csv`](TS.md#network.series_csv)                      | Write the given nodes to csv with given attributes and series                        |
| [`TS`](TS.md)           | [`ts_print_csv`](TS.md#network.ts_print_csv)                  | Save timeseries from all nodes into a single csv file                                |
| [`VISUALS`](VISUALS.md) | [`flatten`](VISUALS.md#network.flatten)                       |                                                                                      |
| [`VISUALS`](VISUALS.md) | [`set_nodesize_attrs`](VISUALS.md#network.set_nodesize_attrs) | Set the node size of the nodes based on the attribute value                          |
| [`VISUALS`](VISUALS.md) | [`svg_save`](VISUALS.md#network.svg_save)                     | Exports the network as a svg                                                         |
| [`VISUALS`](VISUALS.md) | [`svg_ts_blocks`](VISUALS.md#network.svg_ts_blocks)           |                                                                                      |
| [`cairo`](cairo.md)     | [`network`](cairo.md#network.network)                         | Create a SVG file with the given network structure                                   |
| [`cairo`](cairo.md)     | [`table`](cairo.md#network.table)                             | Create a SVG file with the given network structure                                   |
| [`csv`](csv.md)         | [`load_series`](csv.md#network.load_series)                   | Load series values to nodes                                                          |
| [`csv`](csv.md)         | [`load_timeseries`](csv.md#network.load_timeseries)           | Load timeseries values to nodes                                                      |
| [`gis`](gis.md)         | [`load_attrs`](gis.md#network.load_attrs)                     | Load node attributes from a GIS file                                                 |
| [`gis`](gis.md)         | [`load_network`](gis.md#network.load_network)                 | Load network from a GIS file                                                         |
| [`gis`](gis.md)         | [`save_connections`](gis.md#network.save_connections)         | Save GIS file of the connections                                                     |
| [`gis`](gis.md)         | [`save_nodes`](gis.md#network.save_nodes)                     | Save GIS file of the nodes                                                           |
| [`typst`](typst.md)     | [`table`](typst.md#network.table)                             | Generate Typst code for given Table                                                  |
