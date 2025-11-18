# All Plugin Functions
All the functions available on this instance of nadi, are listed here.

## Env Functions
| Plugin                  | Function                                          | Help                                                              |
|:------------------------|:--------------------------------------------------|:------------------------------------------------------------------|
| [`DEBUG`](DEBUG.md)     | [`echo`](DEBUG.md#env.echo)                       | Echo the string to stdout or stderr                               |
| [`ATTRS`](ATTRS.md)     | [`keys`](ATTRS.md#env.keys)                       |                                                                   |
| [`CORE`](CORE.md)       | [`float`](CORE.md#env.float)                      | make a float from value                                           |
| [`MATH`](MATH.md)       | [`exp`](MATH.md#env.exp)                          | Exponential                                                       |
| [`MATH`](MATH.md)       | [`log`](MATH.md#env.log)                          | Logarithm of a value, natural if base not given                   |
| [`CONN`](CONN.md)       | [`root_node`](CONN.md#env.root_node)              | default name used for ROOT node of the network                    |
| [`CORE`](CORE.md)       | [`count_str`](CORE.md#env.count_str)              | Get a count of unique string values                               |
| [`CORE`](CORE.md)       | [`assert_neq`](CORE.md#env.assert_neq)            | Assert the two values are not equal                               |
| [`FILES`](FILES.md)     | [`line`](FILES.md#env.line)                       | Checks if the given path exists                                   |
| [`CORE`](CORE.md)       | [`attrmap`](CORE.md#env.attrmap)                  | make an attrmap from the arguments                                |
| [`CORE`](CORE.md)       | [`assert_eq`](CORE.md#env.assert_eq)              | Assert the two values are equal                                   |
| [`gis`](gis.md)         | [`fields`](gis.md#env.fields)                     | Show the fields in the GIS file layer as a list                   |
| [`gis`](gis.md)         | [`values`](gis.md#env.values)                     | Returns the values from a feature in a GIS file from its index    |
| [`CORE`](CORE.md)       | [`append`](CORE.md#env.append)                    | append a value to an array                                        |
| [`CORE`](CORE.md)       | [`day`](CORE.md#env.day)                          | day from date/datetime                                            |
| [`CORE`](CORE.md)       | [`count`](CORE.md#env.count)                      | Count the number of true values in the array                      |
| [`CORE`](CORE.md)       | [`range`](CORE.md#env.range)                      | Generate integer array, end is not included                       |
| [`REGEX`](REGEX.md)     | [`str_filter`](REGEX.md#env.str_filter)           | Filter from the string list with only the values matching pattern |
| [`csv`](csv.md)         | [`schema`](csv.md#env.schema)                     | List the columns in a CSV file                                    |
| [`csv`](csv.md)         | [`count_usgs_years`](csv.md#env.count_usgs_years) | Count the number of data in a column from a CSV file              |
| [`ATTRS`](ATTRS.md)     | [`float_div`](ATTRS.md#env.float_div)             | Float Division (same as / operator)                               |
| [`ATTRS`](ATTRS.md)     | [`parse_attrmap`](ATTRS.md#env.parse_attrmap)     | Parse attribute map from string                                   |
| [`CORE`](CORE.md)       | [`unique_str`](CORE.md#env.unique_str)            | Get a list of unique string values                                |
| [`CORE`](CORE.md)       | [`min_num`](CORE.md#env.min_num)                  | Minimum of the variables                                          |
| [`LOGIC`](LOGIC.md)     | [`not`](LOGIC.md#env.not)                         | boolean not                                                       |
| [`CORE`](CORE.md)       | [`str`](CORE.md#env.str)                          | make a string from value                                          |
| [`CORE`](CORE.md)       | [`isna`](CORE.md#env.isna)                        | check if a float is nan                                           |
| [`LOGIC`](LOGIC.md)     | [`all`](LOGIC.md#env.all)                         | check if all of the bool are true                                 |
| [`REGEX`](REGEX.md)     | [`str_find_all`](REGEX.md#env.str_find_all)       | Find all the matches of the given pattern in the value            |
| [`REGEX`](REGEX.md)     | [`str_find`](REGEX.md#env.str_find)               | Find the given pattern in the value                               |
| [`CORE`](CORE.md)       | [`json`](CORE.md#env.json)                        | format the attribute as a json string                             |
| [`FILES`](FILES.md)     | [`to_file`](FILES.md#env.to_file)                 | Writes the string to the file                                     |
| [`CORE`](CORE.md)       | [`drop_nan`](CORE.md#env.drop_nan)                | append a value to an array                                        |
| [`ATTRS`](ATTRS.md)     | [`parse_attr`](ATTRS.md#env.parse_attr)           | Parse attribute from string                                       |
| [`CORE`](CORE.md)       | [`concat`](CORE.md#env.concat)                    | Concat the strings                                                |
| [`CORE`](CORE.md)       | [`assert`](CORE.md#env.assert)                    | Assert the condition is true                                      |
| [`CORE`](CORE.md)       | [`year`](CORE.md#env.year)                        | year from date/datetime                                           |
| [`REGEX`](REGEX.md)     | [`str_count`](REGEX.md#env.str_count)             | Count the number of matches of given pattern in the string        |
| [`VISUALS`](VISUALS.md) | [`svg_settings`](VISUALS.md#env.svg_settings)     | Generate the margins for the SVGs                                 |
| [`CORE`](CORE.md)       | [`max`](CORE.md#env.max)                          | Maximum of the variables                                          |
| [`CORE`](CORE.md)       | [`type_name`](CORE.md#env.type_name)              | Type name of the arguments                                        |
| [`LOGIC`](LOGIC.md)     | [`ifelse`](LOGIC.md#env.ifelse)                   | Simple if else condition                                          |
| [`DEBUG`](DEBUG.md)     | [`sleep`](DEBUG.md#env.sleep)                     | sleep for given number of milliseconds                            |
| [`REGEX`](REGEX.md)     | [`str_match`](REGEX.md#env.str_match)             | Check if the given pattern matches the value or not               |
| [`CORE`](CORE.md)       | [`max_num`](CORE.md#env.max_num)                  | Minimum of the variables                                          |
| [`LOGIC`](LOGIC.md)     | [`any`](LOGIC.md#env.any)                         | check if any of the bool are true                                 |
| [`gis`](gis.md)         | [`line`](gis.md#env.line)                         | Show the layers of the GIS file as a list                         |
| [`CORE`](CORE.md)       | [`array`](CORE.md#env.array)                      | make an array from the arguments                                  |
| [`CORE`](CORE.md)       | [`min`](CORE.md#env.min)                          | Minimum of the variables                                          |
| [`FILES`](FILES.md)     | [`exists`](FILES.md#env.exists)                   | Checks if the given path exists                                   |
| [`CORE`](CORE.md)       | [`sum`](CORE.md#env.sum)                          | Sum of the variables                                              |
| [`LOGIC`](LOGIC.md)     | [`gt`](LOGIC.md#env.gt)                           | Greater than check                                                |
| [`MATH`](MATH.md)       | [`powi`](MATH.md#env.powi)                        | Integer power                                                     |
| [`csv`](csv.md)         | [`count_data`](csv.md#env.count_data)             | Count the number of data in a column from a CSV file              |
| [`CORE`](CORE.md)       | [`length`](CORE.md#env.length)                    | length of an array or hashmap                                     |
| [`LOGIC`](LOGIC.md)     | [`lt`](LOGIC.md#env.lt)                           | Less than check                                                   |
| [`LOGIC`](LOGIC.md)     | [`or`](LOGIC.md#env.or)                           | boolean or                                                        |
| [`COMMAND`](COMMAND.md) | [`shell_env`](COMMAND.md#env.shell_env)           | Get environment variable from the shell                           |
| [`MATH`](MATH.md)       | [`sqrt`](MATH.md#env.sqrt)                        | Square Root                                                       |
| [`ATTRS`](ATTRS.md)     | [`get`](ATTRS.md#env.get)                         | get the choosen attribute from Array or AttrMap                   |
| [`CORE`](CORE.md)       | [`int`](CORE.md#env.int)                          | make an int from the value                                        |
| [`CORE`](CORE.md)       | [`flatten`](CORE.md#env.flatten)                  | flatten the given list of arrays into a single one                |
| [`CORE`](CORE.md)       | [`month`](CORE.md#env.month)                      | month from date/datetime                                          |
| [`COMMAND`](COMMAND.md) | [`command`](COMMAND.md#env.command)               | Runs a command in terminal and returns attribute map              |
| [`CORE`](CORE.md)       | [`insert`](CORE.md#env.insert)                    | Insert a key and value to a attrmap                               |
| [`DEBUG`](DEBUG.md)     | [`clip`](DEBUG.md#env.clip)                       | Echo the `----8<----` line for clipping syntax                    |
| [`CORE`](CORE.md)       | [`isinf`](CORE.md#env.isinf)                      | check if a float is +/- infinity                                  |
| [`gis`](gis.md)         | [`features_count`](gis.md#env.features_count)     | Show the fields in the GIS file layer as a list                   |
| [`LOGIC`](LOGIC.md)     | [`and`](LOGIC.md#env.and)                         | Boolean and                                                       |
| [`LOGIC`](LOGIC.md)     | [`eq`](LOGIC.md#env.eq)                           | Equality than check                                               |
| [`RENDER`](RENDER.md)   | [`render`](RENDER.md#env.render)                  | Render the template based on the node attributes                  |
| [`MATH`](MATH.md)       | [`powf`](MATH.md#env.powf)                        | Float power                                                       |
| [`ATTRS`](ATTRS.md)     | [`float_mult`](ATTRS.md#env.float_mult)           | Float Multiplication (same as * operator)                         |
| [`REGEX`](REGEX.md)     | [`str_replace`](REGEX.md#env.str_replace)         | Replace the occurances of the given match                         |
| [`json`](json.md)       | [`load_json`](json.md#env.load_json)              | Loads JSON file as a AttrMap                                      |
| [`ATTRS`](ATTRS.md)     | [`strmap`](ATTRS.md#env.strmap)                   | map values from the attribute based on the given table            |
| [`gis`](gis.md)         | [`layers`](gis.md#env.layers)                     | Show the layers of the GIS file as a list                         |
| [`DEBUG`](DEBUG.md)     | [`debug`](DEBUG.md#env.debug)                     | Print the args and kwargs on this function                        |
| [`CORE`](CORE.md)       | [`str_quote`](CORE.md#env.str_quote)              | Convert string to double quoted form                              |
| [`CORE`](CORE.md)       | [`prod`](CORE.md#env.prod)                        | Product of the variables                                          |
| [`COMMAND`](COMMAND.md) | [`set_shell_env`](COMMAND.md#env.set_shell_env)   | Set environment variable in the shell                             |
| [`REGEX`](REGEX.md)     | [`str_split`](REGEX.md#env.str_split)             | Split the string with the given pattern                           |
| [`FILES`](FILES.md)     | [`from_file`](FILES.md#env.from_file)             | Reads the file contents as string                                 |


## Node Functions
| Plugin                  | Function                                             | Help                                                            |
|:------------------------|:-----------------------------------------------------|:----------------------------------------------------------------|
| [`SERIES`](SERIES.md)   | [`set_series`](SERIES.md#node.set_series)            | set the following series to the node                            |
| [`RENDER`](RENDER.md)   | [`render`](RENDER.md#node.render)                    | Render the template based on the node attributes                |
| [`FILES`](FILES.md)     | [`exists`](FILES.md#node.exists)                     | Checks if the given path exists when rendering the template     |
| [`ATTRS`](ATTRS.md)     | [`first_attr`](ATTRS.md#node.first_attr)             | Return the first Attribute that exists                          |
| [`TS`](TS.md)           | [`ts_dtype`](TS.md#node.ts_dtype)                    | Type name of the timeseries                                     |
| [`csv`](csv.md)         | [`node_name`](csv.md#node.node_name)                 | Example Node function for the plugin                            |
| [`CORE`](CORE.md)       | [`inputs_attr`](CORE.md#node.inputs_attr)            | Get attributes of the input nodes                               |
| [`json`](json.md)       | [`load_json`](json.md#node.load_json)                | Loads JSON file as a AttrMap                                    |
| [`ATTRS`](ATTRS.md)     | [`set_attrs`](ATTRS.md#node.set_attrs)               | Set node attributes                                             |
| [`ATTRS`](ATTRS.md)     | [`load_attrs`](ATTRS.md#node.load_attrs)             | Loads attrs from file for all nodes based on the given template |
| [`CORE`](CORE.md)       | [`inputs_count`](CORE.md#node.inputs_count)          | Count the number of input nodes in the node                     |
| [`SERIES`](SERIES.md)   | [`sr_dtype`](SERIES.md#node.sr_dtype)                | Type name of the series                                         |
| [`SERIES`](SERIES.md)   | [`sr_sum`](SERIES.md#node.sr_sum)                    | Sum of the series values                                        |
| [`TS`](TS.md)           | [`ts_count`](TS.md#node.ts_count)                    | Number of timeseries in the node                                |
| [`TS`](TS.md)           | [`ts_complete`](TS.md#node.ts_complete)              | Convert the timeseries to complete if it doesn't have gaps      |
| [`SERIES`](SERIES.md)   | [`sr_list`](SERIES.md#node.sr_list)                  | List all series in the node                                     |
| [`SERIES`](SERIES.md)   | [`sr_fill`](SERIES.md#node.sr_fill)                  | Fill the series with a value                                    |
| [`ATTRS`](ATTRS.md)     | [`has_attr`](ATTRS.md#node.has_attr)                 | Check if the attribute is present                               |
| [`ATTRS`](ATTRS.md)     | [`del_attrs`](ATTRS.md#node.del_attrs)               | Delete attributes from the given node                           |
| [`COMMAND`](COMMAND.md) | [`run`](COMMAND.md#node.run)                         | Run the node as if it's a command if inputs are changed         |
| [`ATTRS`](ATTRS.md)     | [`set_attrs_render`](ATTRS.md#node.set_attrs_render) | Set node attributes based on string templates                   |
| [`CORE`](CORE.md)       | [`has_outlet`](CORE.md#node.has_outlet)              | Node has an outlet or not                                       |
| [`CORE`](CORE.md)       | [`output_attr`](CORE.md#node.output_attr)            | Get attributes of the output node                               |
| [`TS`](TS.md)           | [`ts_len`](TS.md#node.ts_len)                        | Length of the timeseries                                        |
| [`TS`](TS.md)           | [`ts_print`](TS.md#node.ts_print)                    | Print the given timeseries values in csv format                 |
| [`SERIES`](SERIES.md)   | [`sr_delete`](SERIES.md#node.sr_delete)              | Delete the series with the given name                           |
| [`ATTRS`](ATTRS.md)     | [`set_attrs_ifelse`](ATTRS.md#node.set_attrs_ifelse) | if else condition with multiple attributes                      |
| [`SERIES`](SERIES.md)   | [`sr_count`](SERIES.md#node.sr_count)                | Number of series in the node                                    |
| [`SERIES`](SERIES.md)   | [`sr_to_array`](SERIES.md#node.sr_to_array)          | Make an array from the series if it's complete                  |
| [`ATTRS`](ATTRS.md)     | [`print_attrs`](ATTRS.md#node.print_attrs)           | Print the given node attributes if present                      |
| [`ATTRS`](ATTRS.md)     | [`load_toml_render`](ATTRS.md#node.load_toml_render) | Set node attributes by loading a toml from rendered template    |
| [`TS`](TS.md)           | [`ts_list`](TS.md#node.ts_list)                      | List all timeseries in the node                                 |
| [`COMMAND`](COMMAND.md) | [`command`](COMMAND.md#node.command)                 | Run the given template as a shell command.                      |
| [`SERIES`](SERIES.md)   | [`sr_sort`](SERIES.md#node.sr_sort)                  | Sort an series                                                  |
| [`ATTRS`](ATTRS.md)     | [`print_all_attrs`](ATTRS.md#node.print_all_attrs)   | Print all attrs in a node                                       |
| [`SERIES`](SERIES.md)   | [`sr_len`](SERIES.md#node.sr_len)                    | Length of the series                                            |
| [`SERIES`](SERIES.md)   | [`sr_mean`](SERIES.md#node.sr_mean)                  | Mean of a series values                                         |
| [`csv`](csv.md)         | [`column`](csv.md#node.column)                       | read a single column from a CSV file                            |
| [`SERIES`](SERIES.md)   | [`sr_get`](SERIES.md#node.sr_get)                    | get nth member of a series                                      |
| [`ATTRS`](ATTRS.md)     | [`get_attr`](ATTRS.md#node.get_attr)                 | Retrive attribute                                               |
| [`TS`](TS.md)           | [`ts_delete`](TS.md#node.ts_delete)                  | Delete the timeseries with the given name                       |


## Network Functions
| Plugin                    | Function                                                      | Help                                                                                 |
|:--------------------------|:--------------------------------------------------------------|:-------------------------------------------------------------------------------------|
| [`CORE`](CORE.md)         | [`node_map`](CORE.md#network.node_map)                        | Get a attrmap with node name and attributes                                          |
| [`gis`](gis.md)           | [`load_attrs`](gis.md#network.load_attrs)                     | Load node attributes from a GIS file                                                 |
| [`gis`](gis.md)           | [`save_connections`](gis.md#network.save_connections)         | Save GIS file of the connections                                                     |
| [`CORE`](CORE.md)         | [`node_attr`](CORE.md#network.node_attr)                      | Get the attr of the provided node                                                    |
| [`VISUALS`](VISUALS.md)   | [`svg_ts_blocks`](VISUALS.md#network.svg_ts_blocks)           |                                                                                      |
| [`TS`](TS.md)             | [`series_csv`](TS.md#network.series_csv)                      | Write the given nodes to csv with given attributes and series                        |
| [`CONN`](CONN.md)         | [`subset_from`](CONN.md#network.subset_from)                  | Take a subset of network by taking the given node as new outlet                      |
| [`ATTRS`](ATTRS.md)       | [`set_attrs`](ATTRS.md#network.set_attrs)                     | Set network attributes                                                               |
| [`RENDER`](RENDER.md)     | [`render_nodes`](RENDER.md#network.render_nodes)              | Render each node of the network and combine to same variable                         |
| [`CONN`](CONN.md)         | [`load_str`](CONN.md#network.load_str)                        | Load network from the given string                                                   |
| [`CONN`](CONN.md)         | [`subset`](CONN.md#network.subset)                            | Take a subset of network by only including the selected nodes                        |
| [`COMMAND`](COMMAND.md)   | [`command`](COMMAND.md#network.command)                       | Run the given template as a shell command.                                           |
| [`CORE`](CORE.md)         | [`count`](CORE.md#network.count)                              | Count the number of nodes in the network                                             |
| [`TABLE`](TABLE.md)       | [`save_csv`](TABLE.md#network.save_csv)                       | Save CSV                                                                             |
| [`gis`](gis.md)           | [`load_network`](gis.md#network.load_network)                 | Load network from a GIS file                                                         |
| [`TABLE`](TABLE.md)       | [`table_to_markdown`](TABLE.md#network.table_to_markdown)     | Render the Table as a rendered markdown                                              |
| [`ATTRS`](ATTRS.md)       | [`set_attrs_render`](ATTRS.md#network.set_attrs_render)       | Set network attributes based on string templates                                     |
| [`CORE`](CORE.md)         | [`outlet`](CORE.md#network.outlet)                            | Get the name of the outlet node                                                      |
| [`CONN`](CONN.md)         | [`load_edges`](CONN.md#network.load_edges)                    | Load the given edges as a network                                                    |
| [`COMMAND`](COMMAND.md)   | [`parallel`](COMMAND.md#network.parallel)                     | Run the given template as a shell command for each nodes in the network in parallel. |
| [`RENDER`](RENDER.md)     | [`render_template`](RENDER.md#network.render_template)        | Render a File template for the nodes in the whole network                            |
| [`csv`](csv.md)           | [`load_series`](csv.md#network.load_series)                   | Load series values to nodes                                                          |
| [`CONN`](CONN.md)         | [`subset_largest`](CONN.md#network.subset_largest)            | Take a subset of network by only including the largest blob of connected nodes       |
| [`ATTRS`](ATTRS.md)       | [`set_node_attrs`](ATTRS.md#network.set_node_attrs)           | Set node attributes in a network using a attrmap                                     |
| [`VISUALS`](VISUALS.md)   | [`set_nodesize_attrs`](VISUALS.md#network.set_nodesize_attrs) | Set the node size of the nodes based on the attribute value                          |
| [`CONN`](CONN.md)         | [`save_file`](CONN.md#network.save_file)                      | Save the network into the given file                                                 |
| [`VISUALS`](VISUALS.md)   | [`svg_save`](VISUALS.md#network.svg_save)                     | Exports the network as a svg                                                         |
| [`graphviz`](graphviz.md) | [`save`](graphviz.md#network.save)                            | Save the network as a graphviz file                                                  |
| [`gis`](gis.md)           | [`save_nodes`](gis.md#network.save_nodes)                     | Save GIS file of the nodes                                                           |
| [`RENDER`](RENDER.md)     | [`render`](RENDER.md#network.render)                          | Render from network attributes                                                       |
| [`TS`](TS.md)             | [`ts_print_csv`](TS.md#network.ts_print_csv)                  | Save timeseries from all nodes into a single csv file                                |
| [`CONN`](CONN.md)         | [`load_file`](CONN.md#network.load_file)                      | Load the given file into the network                                                 |
| [`csv`](csv.md)           | [`load_timeseries`](csv.md#network.load_timeseries)           | Load timeseries values to nodes                                                      |

