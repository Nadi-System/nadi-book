# All Plugin Functions
All the functions available on this instance of nadi, are listed here.

## Env Functions
| Plugin                          | Function                                           | Help                                                              |
|:--------------------------------|:---------------------------------------------------|:------------------------------------------------------------------|
| [`core`](core.md)               | [`int`](core.md#env.int)                           | make an int from the value                                        |
| [`debug`](debug.md)             | [`clip`](debug.md#env.clip)                        | Echo the `----8<----` line for clipping syntax                    |
| [`attributes`](attributes.md)   | [`log`](attributes.md#env.log)                     | Logarithm of a value, natural if base not given                   |
| [`regex`](regex.md)             | [`str_split`](regex.md#env.str_split)              | Split the string with the given pattern                           |
| [`core`](core.md)               | [`type_name`](core.md#env.type_name)               | Type name of the arguments                                        |
| [`core`](core.md)               | [`min_num`](core.md#env.min_num)                   | Minimum of the variables                                          |
| [`core`](core.md)               | [`count`](core.md#env.count)                       | Count the number of true values in the array                      |
| [`core`](core.md)               | [`range`](core.md#env.range)                       | Generate integer array, end is not included                       |
| [`core`](core.md)               | [`assert_eq`](core.md#env.assert_eq)               | Assert the two values are equal                                   |
| [`debug`](debug.md)             | [`debug`](debug.md#env.debug)                      | Print the args and kwargs on this function                        |
| [`logic`](logic.md)             | [`gt`](logic.md#env.gt)                            | Greater than check                                                |
| [`connections`](connections.md) | [`root_node`](connections.md#env.root_node)        | default name used for ROOT node of the network                    |
| [`core`](core.md)               | [`day`](core.md#env.day)                           | day from date/datetime                                            |
| [`core`](core.md)               | [`unique_str`](core.md#env.unique_str)             | Get a list of unique string values                                |
| [`attributes`](attributes.md)   | [`sqrt`](attributes.md#env.sqrt)                   | Square Root                                                       |
| [`attributes`](attributes.md)   | [`float_mult`](attributes.md#env.float_mult)       | Float Multiplication (same as * operator)                         |
| [`logic`](logic.md)             | [`ifelse`](logic.md#env.ifelse)                    | Simple if else condition                                          |
| [`regex`](regex.md)             | [`str_replace`](regex.md#env.str_replace)          | Replace the occurances of the given match                         |
| [`core`](core.md)               | [`max_num`](core.md#env.max_num)                   | Minimum of the variables                                          |
| [`core`](core.md)               | [`json`](core.md#env.json)                         | format the attribute as a json string                             |
| [`core`](core.md)               | [`year`](core.md#env.year)                         | year from date/datetime                                           |
| [`attributes`](attributes.md)   | [`powi`](attributes.md#env.powi)                   | Integer power                                                     |
| [`core`](core.md)               | [`isinf`](core.md#env.isinf)                       | check if a float is +/- infinity                                  |
| [`core`](core.md)               | [`str`](core.md#env.str)                           | make a string from value                                          |
| [`regex`](regex.md)             | [`str_find`](regex.md#env.str_find)                | Find the given pattern in the value                               |
| [`dss`](dss.md)                 | [`list_catalog`](dss.md#env.list_catalog)          | List the catalog of the dss file                                  |
| [`core`](core.md)               | [`float`](core.md#env.float)                       | make a float from value                                           |
| [`core`](core.md)               | [`attrmap`](core.md#env.attrmap)                   | make an attrmap from the arguments                                |
| [`attributes`](attributes.md)   | [`strmap`](attributes.md#env.strmap)               | map values from the attribute based on the given table            |
| [`files`](files.md)             | [`from_file`](files.md#env.from_file)              | Reads the file contents as string                                 |
| [`logic`](logic.md)             | [`or`](logic.md#env.or)                            | boolean or                                                        |
| [`core`](core.md)               | [`sum`](core.md#env.sum)                           | Sum of the variables                                              |
| [`attributes`](attributes.md)   | [`float_div`](attributes.md#env.float_div)         | Float Division (same as / operator)                               |
| [`attributes`](attributes.md)   | [`parse_attr`](attributes.md#env.parse_attr)       | Parse attribute from string                                       |
| [`core`](core.md)               | [`month`](core.md#env.month)                       | month from date/datetime                                          |
| [`logic`](logic.md)             | [`eq`](logic.md#env.eq)                            | Equality than check                                               |
| [`core`](core.md)               | [`isna`](core.md#env.isna)                         | check if a float is nan                                           |
| [`core`](core.md)               | [`min`](core.md#env.min)                           | Minimum of the variables                                          |
| [`core`](core.md)               | [`prod`](core.md#env.prod)                         | Product of the variables                                          |
| [`logic`](logic.md)             | [`lt`](logic.md#env.lt)                            | Less than check                                                   |
| [`debug`](debug.md)             | [`echo`](debug.md#env.echo)                        | Echo the string to stdout or stderr                               |
| [`render`](render.md)           | [`render`](render.md#env.render)                   | Render the template based on the node attributes                  |
| [`logic`](logic.md)             | [`not`](logic.md#env.not)                          | boolean not                                                       |
| [`files`](files.md)             | [`exists`](files.md#env.exists)                    | Checks if the given path exists                                   |
| [`regex`](regex.md)             | [`str_match`](regex.md#env.str_match)              | Check if the given pattern matches the value or not               |
| [`core`](core.md)               | [`append`](core.md#env.append)                     | append a value to an array                                        |
| [`attributes`](attributes.md)   | [`powf`](attributes.md#env.powf)                   | Float power                                                       |
| [`regex`](regex.md)             | [`str_find_all`](regex.md#env.str_find_all)        | Find all the matches of the given pattern in the value            |
| [`files`](files.md)             | [`to_file`](files.md#env.to_file)                  | Writes the string to the file                                     |
| [`core`](core.md)               | [`assert_neq`](core.md#env.assert_neq)             | Assert the two values are not equal                               |
| [`debug`](debug.md)             | [`sleep`](debug.md#env.sleep)                      | sleep for given number of milliseconds                            |
| [`regex`](regex.md)             | [`str_filter`](regex.md#env.str_filter)            | Filter from the string list with only the values matching pattern |
| [`attributes`](attributes.md)   | [`exp`](attributes.md#env.exp)                     | Exponential                                                       |
| [`core`](core.md)               | [`max`](core.md#env.max)                           | Maximum of the variables                                          |
| [`core`](core.md)               | [`concat`](core.md#env.concat)                     | Concat the strings                                                |
| [`core`](core.md)               | [`array`](core.md#env.array)                       | make an array from the arguments                                  |
| [`logic`](logic.md)             | [`all`](logic.md#env.all)                          | check if all of the bool are true                                 |
| [`regex`](regex.md)             | [`str_count`](regex.md#env.str_count)              | Count the number of matches of given pattern in the string        |
| [`attributes`](attributes.md)   | [`get`](attributes.md#env.get)                     | get the choosen attribute from Array or AttrMap                   |
| [`nadi_pdf`](nadi_pdf.md)       | [`typst_compile`](nadi_pdf.md#env.typst_compile)   | convert the typst content into pdf/svg/png                        |
| [`core`](core.md)               | [`assert`](core.md#env.assert)                     | Assert the condition is true                                      |
| [`core`](core.md)               | [`count_str`](core.md#env.count_str)               | Get a count of unique string values                               |
| [`logic`](logic.md)             | [`any`](logic.md#env.any)                          | check if any of the bool are true                                 |
| [`attributes`](attributes.md)   | [`parse_attrmap`](attributes.md#env.parse_attrmap) | Parse attribute map from string                                   |
| [`logic`](logic.md)             | [`and`](logic.md#env.and)                          | Boolean and                                                       |
| [`core`](core.md)               | [`length`](core.md#env.length)                     | length of an array or hashmap                                     |


## Node Functions
| Plugin                        | Function                                                      | Help                                                                                |
|:------------------------------|:--------------------------------------------------------------|:------------------------------------------------------------------------------------|
| [`timeseries`](timeseries.md) | [`ts_list`](timeseries.md#node.ts_list)                       | List all timeseries in the node                                                     |
| [`timeseries`](timeseries.md) | [`ts_dtype`](timeseries.md#node.ts_dtype)                     | Type name of the timeseries                                                         |
| [`attributes`](attributes.md) | [`set_attrs_ifelse`](attributes.md#node.set_attrs_ifelse)     | if else condition with multiple attributes                                          |
| [`series`](series.md)         | [`set_series`](series.md#node.set_series)                     | set the following series to the node                                                |
| [`series`](series.md)         | [`sr_to_array`](series.md#node.sr_to_array)                   | Make an array from the series                                                       |
| [`core`](core.md)             | [`inputs_count`](core.md#node.inputs_count)                   | Count the number of input nodes in the node                                         |
| [`series`](series.md)         | [`sr_mean`](series.md#node.sr_mean)                           | Type name of the series                                                             |
| [`render`](render.md)         | [`render`](render.md#node.render)                             | Render the template based on the node attributes                                    |
| [`files`](files.md)           | [`exists`](files.md#node.exists)                              | Checks if the given path exists when rendering the template                         |
| [`series`](series.md)         | [`sr_sum`](series.md#node.sr_sum)                             | Sum of the series                                                                   |
| [`errors`](errors.md)         | [`calc_ts_error`](errors.md#node.calc_ts_error)               | Calculate Error from two timeseries values in the node                              |
| [`core`](core.md)             | [`output_attr`](core.md#node.output_attr)                     | Get attributes of the output node                                                   |
| [`attributes`](attributes.md) | [`print_all_attrs`](attributes.md#node.print_all_attrs)       | Print all attrs in a node                                                           |
| [`dams`](dams.md)             | [`count_node_if`](dams.md#node.count_node_if)                 | Count the number of nodes upstream at each point that satisfies a certain condition |
| [`dams`](dams.md)             | [`min_year`](dams.md#node.min_year)                           | Propagate the minimum year downstream                                               |
| [`attributes`](attributes.md) | [`print_attrs`](attributes.md#node.print_attrs)               | Print the given node attributes if present                                          |
| [`command`](command.md)       | [`command`](command.md#node.command)                          | Run the given template as a shell command.                                          |
| [`series`](series.md)         | [`sr_dtype`](series.md#node.sr_dtype)                         | Type name of the series                                                             |
| [`streamflow`](streamflow.md) | [`check_negative`](streamflow.md#node.check_negative)         | Check the given streamflow timeseries for negative values                           |
| [`attributes`](attributes.md) | [`set_attrs`](attributes.md#node.set_attrs)                   | Set node attributes                                                                 |
| [`timeseries`](timeseries.md) | [`ts_count`](timeseries.md#node.ts_count)                     | Number of timeseries in the node                                                    |
| [`timeseries`](timeseries.md) | [`ts_len`](timeseries.md#node.ts_len)                         | Length of the timeseries                                                            |
| [`attributes`](attributes.md) | [`load_toml_render`](attributes.md#node.load_toml_render)     | Set node attributes by loading a toml from rendered template                        |
| [`errors`](errors.md)         | [`calc_ts_errors`](errors.md#node.calc_ts_errors)             | Calculate Error from two timeseries values in the node                              |
| [`attributes`](attributes.md) | [`has_attr`](attributes.md#node.has_attr)                     | Check if the attribute is present                                                   |
| [`attributes`](attributes.md) | [`first_attr`](attributes.md#node.first_attr)                 | Return the first Attribute that exists                                              |
| [`timeseries`](timeseries.md) | [`ts_print`](timeseries.md#node.ts_print)                     | Print the given timeseries values in csv format                                     |
| [`print_node`](print_node.md) | [`print_node`](print_node.md#node.print_node)                 | Print the node with its inputs and outputs                                          |
| [`core`](core.md)             | [`has_outlet`](core.md#node.has_outlet)                       | Node has an outlet or not                                                           |
| [`core`](core.md)             | [`inputs_attr`](core.md#node.inputs_attr)                     | Get attributes of the input nodes                                                   |
| [`attributes`](attributes.md) | [`get_attr`](attributes.md#node.get_attr)                     | Retrive attribute                                                                   |
| [`datafill`](datafill.md)     | [`load_csv_fill`](datafill.md#node.load_csv_fill)             |                                                                                     |
| [`series`](series.md)         | [`sr_list`](series.md#node.sr_list)                           | List all series in the node                                                         |
| [`series`](series.md)         | [`sr_len`](series.md#node.sr_len)                             | Length of the series                                                                |
| [`command`](command.md)       | [`run`](command.md#node.run)                                  | Run the node as if it's a command if inputs are changed                             |
| [`datafill`](datafill.md)     | [`datafill_experiment`](datafill.md#node.datafill_experiment) |                                                                                     |
| [`attributes`](attributes.md) | [`load_attrs`](attributes.md#node.load_attrs)                 | Loads attrs from file for all nodes based on the given template                     |
| [`series`](series.md)         | [`sr_count`](series.md#node.sr_count)                         | Number of series in the node                                                        |
| [`attributes`](attributes.md) | [`set_attrs_render`](attributes.md#node.set_attrs_render)     | Set node attributes based on string templates                                       |


## Network Functions
| Plugin                          | Function                                                           | Help                                                                                 |
|:--------------------------------|:-------------------------------------------------------------------|:-------------------------------------------------------------------------------------|
| [`connections`](connections.md) | [`load_file`](connections.md#network.load_file)                    | Load the given file into the network                                                 |
| [`table`](table.md)             | [`table_to_markdown`](table.md#network.table_to_markdown)          | Render the Table as a rendered markdown                                              |
| [`timeseries`](timeseries.md)   | [`series_csv`](timeseries.md#network.series_csv)                   | Write the given nodes to csv with given attributes and series                        |
| [`graphviz`](graphviz.md)       | [`save_graphviz`](graphviz.md#network.save_graphviz)               | Save the network as a graphviz file                                                  |
| [`core`](core.md)               | [`node_attr`](core.md#network.node_attr)                           | Get the attr of the provided node                                                    |
| [`print_node`](print_node.md)   | [`print_attr_csv`](print_node.md#network.print_attr_csv)           | Print the given attributes in csv format with first column with node name            |
| [`command`](command.md)         | [`command`](command.md#network.command)                            | Run the given template as a shell command.                                           |
| [`connections`](connections.md) | [`subset_largest`](connections.md#network.subset_largest)          | Take a subset of network by only including the largest blob of connected nodes       |
| [`render`](render.md)           | [`render_template`](render.md#network.render_template)             | Render a File template for the nodes in the whole network                            |
| [`gis`](gis.md)                 | [`gis_load_network`](gis.md#network.gis_load_network)              | Load network from a GIS file                                                         |
| [`attributes`](attributes.md)   | [`set_attrs_render`](attributes.md#network.set_attrs_render)       | Set network attributes based on string templates                                     |
| [`connections`](connections.md) | [`subset`](connections.md#network.subset)                          | Take a subset of network by only including the selected nodes                        |
| [`errors`](errors.md)           | [`calc_attr_error`](errors.md#network.calc_attr_error)             | Calculate Error from two attribute values in the network                             |
| [`timeseries`](timeseries.md)   | [`ts_print_csv`](timeseries.md#network.ts_print_csv)               | Save timeseries from all nodes into a single csv file                                |
| [`datafill`](datafill.md)       | [`save_experiments_csv`](datafill.md#network.save_experiments_csv) | Write the given nodes to csv with given attributes and experiment results            |
| [`nadi_pdf`](nadi_pdf.md)       | [`typst_table`](nadi_pdf.md#network.typst_table)                   | Generate Typst code for given Table                                                  |
| [`connections`](connections.md) | [`save_file`](connections.md#network.save_file)                    | Save the network into the given file                                                 |
| [`render`](render.md)           | [`render_nodes`](render.md#network.render_nodes)                   | Render each node of the network and combine to same variable                         |
| [`fancy_print`](fancy_print.md) | [`fancy_print`](fancy_print.md#network.fancy_print)                | Fancy print a network                                                                |
| [`gis`](gis.md)                 | [`gis_save_nodes`](gis.md#network.gis_save_nodes)                  | Save GIS file of the nodes                                                           |
| [`connections`](connections.md) | [`load_edges`](connections.md#network.load_edges)                  | Load the given edges as a network                                                    |
| [`html`](html.md)               | [`export_map`](html.md#network.export_map)                         | Exports the network as a HTML map                                                    |
| [`gis`](gis.md)                 | [`gis_save_connections`](gis.md#network.gis_save_connections)      | Save GIS file of the connections                                                     |
| [`attributes`](attributes.md)   | [`set_attrs`](attributes.md#network.set_attrs)                     | Set network attributes                                                               |
| [`gnuplot`](gnuplot.md)         | [`plot_timeseries`](gnuplot.md#network.plot_timeseries)            | Generate a gnuplot file that plots the timeseries data in the network                |
| [`core`](core.md)               | [`outlet`](core.md#network.outlet)                                 | Get the name of the outlet node                                                      |
| [`table`](table.md)             | [`save_csv`](table.md#network.save_csv)                            | Save CSV                                                                             |
| [`visuals`](visuals.md)         | [`set_nodesize_attrs`](visuals.md#network.set_nodesize_attrs)      | Set the node size of the nodes based on the attribute value                          |
| [`core`](core.md)               | [`count`](core.md#network.count)                                   | Count the number of nodes in the network                                             |
| [`render`](render.md)           | [`render`](render.md#network.render)                               | Render from network attributes                                                       |
| [`gis`](gis.md)                 | [`gis_load_attrs`](gis.md#network.gis_load_attrs)                  | Load node attributes from a GIS file                                                 |
| [`connections`](connections.md) | [`load_str`](connections.md#network.load_str)                      | Load network from the given string                                                   |
| [`visuals`](visuals.md)         | [`svg_save`](visuals.md#network.svg_save)                          | Exports the network as a svg                                                         |
| [`command`](command.md)         | [`parallel`](command.md#network.parallel)                          | Run the given template as a shell command for each nodes in the network in parallel. |
| [`connections`](connections.md) | [`subset_from`](connections.md#network.subset_from)                | Take a subset of network by taking the given node as new outlet                      |

