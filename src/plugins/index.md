# All Plugin Functions
All the functions available on this instance of nadi, are listed here.

## Env Functions
| Plugin                        | Function                                           | Help                                                              |
|:------------------------------|:---------------------------------------------------|:------------------------------------------------------------------|
| [`attributes`](attributes.md) | [`exp`](attributes.md#env.exp)                     | Exponential                                                       |
| [`attributes`](attributes.md) | [`float_div`](attributes.md#env.float_div)         | Float Division (same as / operator)                               |
| [`attributes`](attributes.md) | [`float_mult`](attributes.md#env.float_mult)       | Float Multiplication (same as * operator)                         |
| [`attributes`](attributes.md) | [`get`](attributes.md#env.get)                     | get the choosen attribute from Array or AttrMap                   |
| [`attributes`](attributes.md) | [`log`](attributes.md#env.log)                     | Logarithm of a value, natural if base not given                   |
| [`attributes`](attributes.md) | [`parse_attr`](attributes.md#env.parse_attr)       | Parse attribute from string                                       |
| [`attributes`](attributes.md) | [`parse_attrmap`](attributes.md#env.parse_attrmap) | Parse attribute from string                                       |
| [`attributes`](attributes.md) | [`powf`](attributes.md#env.powf)                   | Float power                                                       |
| [`attributes`](attributes.md) | [`powi`](attributes.md#env.powi)                   | Integer power                                                     |
| [`attributes`](attributes.md) | [`sqrt`](attributes.md#env.sqrt)                   | Square Root                                                       |
| [`attributes`](attributes.md) | [`strmap`](attributes.md#env.strmap)               | map values from the attribute based on the given table            |
| [`core`](core.md)             | [`append`](core.md#env.append)                     | append a value to an array                                        |
| [`core`](core.md)             | [`array`](core.md#env.array)                       | make an array from the arguments                                  |
| [`core`](core.md)             | [`assert_eq`](core.md#env.assert_eq)               | Assert the two values are equal                                   |
| [`core`](core.md)             | [`assert_neq`](core.md#env.assert_neq)             | Assert the two values are not equal                               |
| [`core`](core.md)             | [`assert`](core.md#env.assert)                     | Assert the condition is true                                      |
| [`core`](core.md)             | [`attrmap`](core.md#env.attrmap)                   | make an attrmap from the arguments                                |
| [`core`](core.md)             | [`concat`](core.md#env.concat)                     | Concat the strings                                                |
| [`core`](core.md)             | [`count_str`](core.md#env.count_str)               | Get a count of unique string values                               |
| [`core`](core.md)             | [`count`](core.md#env.count)                       | Count the number of true values in the array                      |
| [`core`](core.md)             | [`day`](core.md#env.day)                           | day from date/datetime                                            |
| [`core`](core.md)             | [`float`](core.md#env.float)                       | make a float from value                                           |
| [`core`](core.md)             | [`int`](core.md#env.int)                           | make an int from the value                                        |
| [`core`](core.md)             | [`isinf`](core.md#env.isinf)                       | check if a float is +/- infinity                                  |
| [`core`](core.md)             | [`isna`](core.md#env.isna)                         | check if a float is nan                                           |
| [`core`](core.md)             | [`json`](core.md#env.json)                         | format the attribute as a json string                             |
| [`core`](core.md)             | [`length`](core.md#env.length)                     | length of an array or hashmap                                     |
| [`core`](core.md)             | [`max_num`](core.md#env.max_num)                   | Minimum of the variables                                          |
| [`core`](core.md)             | [`max`](core.md#env.max)                           | Maximum of the variables                                          |
| [`core`](core.md)             | [`min_num`](core.md#env.min_num)                   | Minimum of the variables                                          |
| [`core`](core.md)             | [`min`](core.md#env.min)                           | Minimum of the variables                                          |
| [`core`](core.md)             | [`month`](core.md#env.month)                       | month from date/datetime                                          |
| [`core`](core.md)             | [`prod`](core.md#env.prod)                         | Product of the variables                                          |
| [`core`](core.md)             | [`range`](core.md#env.range)                       | Generate integer array, end is not included                       |
| [`core`](core.md)             | [`str`](core.md#env.str)                           | make a string from value                                          |
| [`core`](core.md)             | [`sum`](core.md#env.sum)                           | Sum of the variables                                              |
| [`core`](core.md)             | [`type_name`](core.md#env.type_name)               | Type name of the arguments                                        |
| [`core`](core.md)             | [`unique_str`](core.md#env.unique_str)             | Get a list of unique string values                                |
| [`core`](core.md)             | [`year`](core.md#env.year)                         | year from date/datetime                                           |
| [`debug`](debug.md)           | [`clip`](debug.md#env.clip)                        | Echo the ----8<---- line for clipping syntax                      |
| [`debug`](debug.md)           | [`debug`](debug.md#env.debug)                      | Print the args and kwargs on this function                        |
| [`debug`](debug.md)           | [`echo`](debug.md#env.echo)                        | Echo the string to stdout or stderr                               |
| [`debug`](debug.md)           | [`sleep`](debug.md#env.sleep)                      | sleep for given number of milliseconds                            |
| [`dss`](dss.md)               | [`list_catalog`](dss.md#env.list_catalog)          | List the catalog of the dss file                                  |
| [`files`](files.md)           | [`exists`](files.md#env.exists)                    | Checks if the given path exists                                   |
| [`files`](files.md)           | [`from_file`](files.md#env.from_file)              | Reads the file contents as string                                 |
| [`files`](files.md)           | [`to_file`](files.md#env.to_file)                  | Writes the string to the file                                     |
| [`logic`](logic.md)           | [`all`](logic.md#env.all)                          | check if all of the bool are true                                 |
| [`logic`](logic.md)           | [`and`](logic.md#env.and)                          | Boolean and                                                       |
| [`logic`](logic.md)           | [`any`](logic.md#env.any)                          | check if any of the bool are true                                 |
| [`logic`](logic.md)           | [`eq`](logic.md#env.eq)                            | Equality than check                                               |
| [`logic`](logic.md)           | [`gt`](logic.md#env.gt)                            | Greater than check                                                |
| [`logic`](logic.md)           | [`ifelse`](logic.md#env.ifelse)                    | Simple if else condition                                          |
| [`logic`](logic.md)           | [`lt`](logic.md#env.lt)                            | Less than check                                                   |
| [`logic`](logic.md)           | [`not`](logic.md#env.not)                          | boolean not                                                       |
| [`logic`](logic.md)           | [`or`](logic.md#env.or)                            | boolean or                                                        |
| [`nadi_pdf`](nadi_pdf.md)     | [`typst_compile`](nadi_pdf.md#env.typst_compile)   | convert the typst content into pdf/svg/png                        |
| [`regex`](regex.md)           | [`str_count`](regex.md#env.str_count)              | Count the number of matches of given pattern in the string        |
| [`regex`](regex.md)           | [`str_filter`](regex.md#env.str_filter)            | Filter from the string list with only the values matching pattern |
| [`regex`](regex.md)           | [`str_find_all`](regex.md#env.str_find_all)        | Find all the matches of the given pattern in the value            |
| [`regex`](regex.md)           | [`str_find`](regex.md#env.str_find)                | Find the given pattern in the value                               |
| [`regex`](regex.md)           | [`str_match`](regex.md#env.str_match)              | Check if the given pattern matches the value or not               |
| [`regex`](regex.md)           | [`str_replace`](regex.md#env.str_replace)          | Replace the occurances of the given match                         |
| [`regex`](regex.md)           | [`str_split`](regex.md#env.str_split)              | Split the string with the given pattern                           |
| [`render`](render.md)         | [`render`](render.md#env.render)                   | Render the template based on the node attributes                  |


## Node Functions
| Plugin                        | Function                                                         | Help                                                                                |
|:------------------------------|:-----------------------------------------------------------------|:------------------------------------------------------------------------------------|
| [`attributes`](attributes.md) | [`first_attr`](attributes.md#network.first_attr)                 | Return the first Attribute that exists                                              |
| [`attributes`](attributes.md) | [`get_attr`](attributes.md#network.get_attr)                     | Retrive attribute                                                                   |
| [`attributes`](attributes.md) | [`has_attr`](attributes.md#network.has_attr)                     | Check if the attribute is present                                                   |
| [`attributes`](attributes.md) | [`load_attrs`](attributes.md#network.load_attrs)                 | Loads attrs from file for all nodes based on the given template                     |
| [`attributes`](attributes.md) | [`load_toml_render`](attributes.md#network.load_toml_render)     | Set node attributes by loading a toml from rendered template                        |
| [`attributes`](attributes.md) | [`print_all_attrs`](attributes.md#network.print_all_attrs)       | Print all attrs in a node                                                           |
| [`attributes`](attributes.md) | [`print_attrs`](attributes.md#network.print_attrs)               | Print the given node attributes if present                                          |
| [`attributes`](attributes.md) | [`set_attrs_ifelse`](attributes.md#network.set_attrs_ifelse)     | if else condition with multiple attributes                                          |
| [`attributes`](attributes.md) | [`set_attrs_render`](attributes.md#network.set_attrs_render)     | Set node attributes based on string templates                                       |
| [`attributes`](attributes.md) | [`set_attrs`](attributes.md#network.set_attrs)                   | Set node attributes                                                                 |
| [`command`](command.md)       | [`command`](command.md#network.command)                          | Run the given template as a shell command.                                          |
| [`command`](command.md)       | [`run`](command.md#network.run)                                  | Run the node as if it's a command if inputs are changed                             |
| [`core`](core.md)             | [`has_outlet`](core.md#network.has_outlet)                       | Node has an outlet or not                                                           |
| [`core`](core.md)             | [`inputs_attr`](core.md#network.inputs_attr)                     | Get attributes of the input nodes                                                   |
| [`core`](core.md)             | [`inputs_count`](core.md#network.inputs_count)                   | Count the number of input nodes in the node                                         |
| [`core`](core.md)             | [`output_attr`](core.md#network.output_attr)                     | Get attributes of the output node                                                   |
| [`dams`](dams.md)             | [`count_node_if`](dams.md#network.count_node_if)                 | Count the number of nodes upstream at each point that satisfies a certain condition |
| [`dams`](dams.md)             | [`min_year`](dams.md#network.min_year)                           | Propagate the minimum year downstream                                               |
| [`datafill`](datafill.md)     | [`datafill_experiment`](datafill.md#network.datafill_experiment) |                                                                                     |
| [`datafill`](datafill.md)     | [`load_csv_fill`](datafill.md#network.load_csv_fill)             |                                                                                     |
| [`errors`](errors.md)         | [`calc_ts_error`](errors.md#network.calc_ts_error)               | Calculate Error from two timeseries values in the node                              |
| [`errors`](errors.md)         | [`calc_ts_errors`](errors.md#network.calc_ts_errors)             | Calculate Error from two timeseries values in the node                              |
| [`files`](files.md)           | [`exists`](files.md#network.exists)                              | Checks if the given path exists when rendering the template                         |
| [`print_node`](print_node.md) | [`print_node`](print_node.md#network.print_node)                 | Print the node with its inputs and outputs                                          |
| [`render`](render.md)         | [`render`](render.md#network.render)                             | Render the template based on the node attributes                                    |
| [`series`](series.md)         | [`set_series`](series.md#network.set_series)                     | set the following series to the node                                                |
| [`series`](series.md)         | [`sr_count`](series.md#network.sr_count)                         | Number of series in the node                                                        |
| [`series`](series.md)         | [`sr_dtype`](series.md#network.sr_dtype)                         | Type name of the series                                                             |
| [`series`](series.md)         | [`sr_len`](series.md#network.sr_len)                             | Length of the series                                                                |
| [`series`](series.md)         | [`sr_list`](series.md#network.sr_list)                           | List all series in the node                                                         |
| [`series`](series.md)         | [`sr_mean`](series.md#network.sr_mean)                           | Type name of the series                                                             |
| [`series`](series.md)         | [`sr_sum`](series.md#network.sr_sum)                             | Sum of the series                                                                   |
| [`series`](series.md)         | [`sr_to_array`](series.md#network.sr_to_array)                   | Make an array from the series                                                       |
| [`streamflow`](streamflow.md) | [`check_negative`](streamflow.md#network.check_negative)         | Check the given streamflow timeseries for negative values                           |
| [`timeseries`](timeseries.md) | [`ts_count`](timeseries.md#network.ts_count)                     | Number of timeseries in the node                                                    |
| [`timeseries`](timeseries.md) | [`ts_dtype`](timeseries.md#network.ts_dtype)                     | Type name of the timeseries                                                         |
| [`timeseries`](timeseries.md) | [`ts_len`](timeseries.md#network.ts_len)                         | Length of the timeseries                                                            |
| [`timeseries`](timeseries.md) | [`ts_list`](timeseries.md#network.ts_list)                       | List all timeseries in the node                                                     |
| [`timeseries`](timeseries.md) | [`ts_print`](timeseries.md#network.ts_print)                     | Print the given timeseries values in csv format                                     |


## Network Functions
| Plugin                          | Function                                                        | Help                                                                                 |
|:--------------------------------|:----------------------------------------------------------------|:-------------------------------------------------------------------------------------|
| [`attributes`](attributes.md)   | [`set_attrs_render`](attributes.md#node.set_attrs_render)       | Set network attributes based on string templates                                     |
| [`attributes`](attributes.md)   | [`set_attrs`](attributes.md#node.set_attrs)                     | Set network attributes                                                               |
| [`command`](command.md)         | [`command`](command.md#node.command)                            | Run the given template as a shell command.                                           |
| [`command`](command.md)         | [`parallel`](command.md#node.parallel)                          | Run the given template as a shell command for each nodes in the network in parallel. |
| [`connections`](connections.md) | [`load_edges`](connections.md#node.load_edges)                  | Load the given edges into the network                                                |
| [`connections`](connections.md) | [`load_file`](connections.md#node.load_file)                    | Load the given file into the network                                                 |
| [`connections`](connections.md) | [`load_str`](connections.md#node.load_str)                      | Load the given file into the network                                                 |
| [`connections`](connections.md) | [`save_file`](connections.md#node.save_file)                    | Save the network into the given file                                                 |
| [`connections`](connections.md) | [`subset`](connections.md#node.subset)                          | Take a subset of network by only including the selected nodes                        |
| [`core`](core.md)               | [`count`](core.md#node.count)                                   | Count the number of nodes in the network                                             |
| [`core`](core.md)               | [`node_attr`](core.md#node.node_attr)                           | Get the attr of the provided node                                                    |
| [`core`](core.md)               | [`outlet`](core.md#node.outlet)                                 | Get the name of the outlet node                                                      |
| [`datafill`](datafill.md)       | [`save_experiments_csv`](datafill.md#node.save_experiments_csv) | Write the given nodes to csv with given attributes and experiment results            |
| [`errors`](errors.md)           | [`calc_attr_error`](errors.md#node.calc_attr_error)             | Calculate Error from two attribute values in the network                             |
| [`fancy_print`](fancy_print.md) | [`fancy_print`](fancy_print.md#node.fancy_print)                | Fancy print a network                                                                |
| [`gis`](gis.md)                 | [`gis_load_attrs`](gis.md#node.gis_load_attrs)                  | Load node attributes from a GIS file                                                 |
| [`gis`](gis.md)                 | [`gis_load_network`](gis.md#node.gis_load_network)              | Load network from a GIS file                                                         |
| [`gis`](gis.md)                 | [`gis_save_connections`](gis.md#node.gis_save_connections)      | Save GIS file of the connections                                                     |
| [`gis`](gis.md)                 | [`gis_save_nodes`](gis.md#node.gis_save_nodes)                  | Save GIS file of the nodes                                                           |
| [`gnuplot`](gnuplot.md)         | [`plot_timeseries`](gnuplot.md#node.plot_timeseries)            | Generate a gnuplot file that plots the timeseries data in the network                |
| [`graphviz`](graphviz.md)       | [`save_graphviz`](graphviz.md#node.save_graphviz)               | Save the network as a graphviz file                                                  |
| [`html`](html.md)               | [`export_map`](html.md#node.export_map)                         | Exports the network as a HTML map                                                    |
| [`nadi_pdf`](nadi_pdf.md)       | [`typst_table`](nadi_pdf.md#node.typst_table)                   | Generate Typst code for given Table                                                  |
| [`print_node`](print_node.md)   | [`print_attr_csv`](print_node.md#node.print_attr_csv)           | Print the given attributes in csv format with first column with node name            |
| [`render`](render.md)           | [`render_nodes`](render.md#node.render_nodes)                   | Render each node of the network and combine to same variable                         |
| [`render`](render.md)           | [`render_template`](render.md#node.render_template)             | Render a File template for the nodes in the whole network                            |
| [`render`](render.md)           | [`render`](render.md#node.render)                               | Render from network attributes                                                       |
| [`table`](table.md)             | [`save_csv`](table.md#node.save_csv)                            | Save CSV                                                                             |
| [`table`](table.md)             | [`table_to_markdown`](table.md#node.table_to_markdown)          | Render the Table as a rendered markdown                                              |
| [`timeseries`](timeseries.md)   | [`series_csv`](timeseries.md#node.series_csv)                   | Write the given nodes to csv with given attributes and series                        |
| [`timeseries`](timeseries.md)   | [`ts_print_csv`](timeseries.md#node.ts_print_csv)               | Save timeseries from all nodes into a single csv file                                |
| [`visuals`](visuals.md)         | [`set_nodesize_attrs`](visuals.md#node.set_nodesize_attrs)      | Set the node size of the nodes based on the attribute value                          |
| [`visuals`](visuals.md)         | [`svg_save`](visuals.md#node.svg_save)                          | Exports the network as a svg                                                         |

