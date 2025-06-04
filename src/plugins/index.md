# All Plugin Functions
All the functions available on this instance of nadi, are listed here.

## Env Functions
| Plugin                        | Function                                               | Help                                                      |
|:------------------------------|:-------------------------------------------------------|:----------------------------------------------------------|
| [`attributes`](attributes.md) | [`float_div`](attributes.md#env.float_div)             | map values from the attribute based on the given table    |
| [`attributes`](attributes.md) | [`float_transform`](attributes.md#env.float_transform) | map values from the attribute based on the given table    |
| [`core`](core.md)             | [`int`](core.md#env.int)                               | make an int from the value                                |
| [`files`](files.md)           | [`from_file`](files.md#env.from_file)                  | Reads the file contents as string                         |
| [`debug`](debug.md)           | [`echo`](debug.md#env.echo)                            | Echo the string to stdout or stderr                       |
| [`core`](core.md)             | [`min`](core.md#env.min)                               | Minimum of the variables                                  |
| [`core`](core.md)             | [`sum`](core.md#env.sum)                               | Sum of the variables                                      |
| [`core`](core.md)             | [`concat`](core.md#env.concat)                         | Concat the strings                                        |
| [`logic`](logic.md)           | [`ifelse`](logic.md#env.ifelse)                        | Simple if else condition                                  |
| [`logic`](logic.md)           | [`lt`](logic.md#env.lt)                                | Greater than check                                        |
| [`core`](core.md)             | [`max`](core.md#env.max)                               | Minimum of the variables                                  |
| [`core`](core.md)             | [`day`](core.md#env.day)                               | day from date/datetime                                    |
| [`core`](core.md)             | [`append`](core.md#env.append)                         | append a value to an array                                |
| [`core`](core.md)             | [`count_str`](core.md#env.count_str)                   | Get a count of unique string values                       |
| [`core`](core.md)             | [`float`](core.md#env.float)                           | make a float from value                                   |
| [`core`](core.md)             | [`month`](core.md#env.month)                           | month from date/datetime                                  |
| [`attributes`](attributes.md) | [`parse_attr`](attributes.md#env.parse_attr)           | Set node attributes based on string templates             |
| [`debug`](debug.md)           | [`debug`](debug.md#env.debug)                          | Print the args and kwargs on this function                |
| [`attributes`](attributes.md) | [`strmap`](attributes.md#env.strmap)                   | map values from the attribute based on the given table    |
| [`core`](core.md)             | [`year`](core.md#env.year)                             | year from date/datetime                                   |
| [`core`](core.md)             | [`length`](core.md#env.length)                         | length of an array or hashmap                             |
| [`core`](core.md)             | [`unique_str`](core.md#env.unique_str)                 | Get a list of unique string values                        |
| [`debug`](debug.md)           | [`clip`](debug.md#env.clip)                            | Echo the ----8<---- line for clipping syntax              |
| [`debug`](debug.md)           | [`sleep`](debug.md#env.sleep)                          | sleep for given number of milliseconds                    |
| [`files`](files.md)           | [`to_file`](files.md#env.to_file)                      | Writes the string to the file                             |
| [`logic`](logic.md)           | [`gt`](logic.md#env.gt)                                | Greater than check                                        |
| [`logic`](logic.md)           | [`eq`](logic.md#env.eq)                                | Greater than check                                        |
| [`logic`](logic.md)           | [`and`](logic.md#env.and)                              | Boolean and                                               |
| [`logic`](logic.md)           | [`or`](logic.md#env.or)                                | boolean or                                                |
| [`logic`](logic.md)           | [`not`](logic.md#env.not)                              | boolean not                                               |
| [`core`](core.md)             | [`prod`](core.md#env.prod)                             | Product of the variables                                  |
| [`core`](core.md)             | [`array`](core.md#env.array)                           | make an array from the arguments                          |
| [`attributes`](attributes.md) | [`parse_attrmap`](attributes.md#env.parse_attrmap)     | Set node attributes based on string templates             |
| [`regex`](regex.md)           | [`str_match`](regex.md#env.str_match)                  | Check if the given pattern matches the value or not       |
| [`regex`](regex.md)           | [`str_replace`](regex.md#env.str_replace)              | Replace the occurances of the given match                 |
| [`core`](core.md)             | [`count`](core.md#env.count)                           | Count the number of true values in the array              |
| [`core`](core.md)             | [`type_name`](core.md#env.type_name)                   | Type name of the arguments                                |
| [`core`](core.md)             | [`isna`](core.md#env.isna)                             | check if a float is nan                                   |
| [`core`](core.md)             | [`str`](core.md#env.str)                               | make a string from value                                  |
| [`core`](core.md)             | [`isinf`](core.md#env.isinf)                           | check if a float is +/- infinity                          |
| [`attributes`](attributes.md) | [`float_mult`](attributes.md#env.float_mult)           | map values from the attribute based on the given table    |
| [`core`](core.md)             | [`attrmap`](core.md#env.attrmap)                       | make an array from the arguments                          |
| [`core`](core.md)             | [`max_num`](core.md#env.max_num)                       | Minimum of the variables                                  |
| [`files`](files.md)           | [`exists`](files.md#env.exists)                        | Checks if the given path exists                           |
| [`logic`](logic.md)           | [`all`](logic.md#env.all)                              | check if all of the bool are true                         |
| [`regex`](regex.md)           | [`str_filter`](regex.md#env.str_filter)                | Check if the given pattern matches the value or not       |
| [`core`](core.md)             | [`min_num`](core.md#env.min_num)                       | Minimum of the variables                                  |
| [`regex`](regex.md)           | [`str_find`](regex.md#env.str_find)                    | Find the given pattern in the value                       |
| [`logic`](logic.md)           | [`any`](logic.md#env.any)                              | check if any of the bool are true                         |
| [`regex`](regex.md)           | [`str_find_all`](regex.md#env.str_find_all)            | Find all the matches of the given pattern in the value    |
| [`regex`](regex.md)           | [`str_count`](regex.md#env.str_count)                  | Count the number of matches of given pattern in the value |
| [`render`](render.md)         | [`render`](render.md#env.render)                       | Render the template based on the node attributes          |


## Node Functions
| Plugin                        | Function                                                         | Help                                                                                |
|:------------------------------|:-----------------------------------------------------------------|:------------------------------------------------------------------------------------|
| [`series`](series.md)         | [`sr_to_array`](series.md#network.sr_to_array)                   | Make an array from the series                                                       |
| [`timeseries`](timeseries.md) | [`ts_list`](timeseries.md#network.ts_list)                       | List all timeseries in the node                                                     |
| [`attributes`](attributes.md) | [`print_attrs`](attributes.md#network.print_attrs)               | Print the given node attributes if present                                          |
| [`series`](series.md)         | [`sr_dtype`](series.md#network.sr_dtype)                         | Type name of the series                                                             |
| [`timeseries`](timeseries.md) | [`ts_print`](timeseries.md#network.ts_print)                     | Print the given timeseries values in csv format                                     |
| [`dams`](dams.md)             | [`count_node_if`](dams.md#network.count_node_if)                 | Count the number of nodes upstream at each point that satisfies a certain condition |
| [`streamflow`](streamflow.md) | [`check_negative`](streamflow.md#network.check_negative)         | Check the given streamflow timeseries for negative values                           |
| [`errors`](errors.md)         | [`calc_ts_error`](errors.md#network.calc_ts_error)               | Calculate Error from two timeseries values in the node                              |
| [`attributes`](attributes.md) | [`set_attrs_ifelse`](attributes.md#network.set_attrs_ifelse)     | if else condition with multiple attributes                                          |
| [`series`](series.md)         | [`set_series`](series.md#network.set_series)                     | set the following series to the node                                                |
| [`errors`](errors.md)         | [`calc_ts_errors`](errors.md#network.calc_ts_errors)             | Calculate Error from two timeseries values in the node                              |
| [`datafill`](datafill.md)     | [`datafill_experiment`](datafill.md#network.datafill_experiment) |                                                                                     |
| [`timeseries`](timeseries.md) | [`ts_count`](timeseries.md#network.ts_count)                     | Number of timeseries in the node                                                    |
| [`attributes`](attributes.md) | [`first_attr`](attributes.md#network.first_attr)                 | Return the first Attribute that exists                                              |
| [`command`](command.md)       | [`run`](command.md#network.run)                                  | Run the node as if it's a command if inputs are changed                             |
| [`timeseries`](timeseries.md) | [`ts_dtype`](timeseries.md#network.ts_dtype)                     | Type name of the timeseries                                                         |
| [`render`](render.md)         | [`render`](render.md#network.render)                             | Render the template based on the node attributes                                    |
| [`attributes`](attributes.md) | [`load_toml_render`](attributes.md#network.load_toml_render)     | Set node attributes based on string templates                                       |
| [`series`](series.md)         | [`sr_list`](series.md#network.sr_list)                           | List all series in the node                                                         |
| [`series`](series.md)         | [`sr_mean`](series.md#network.sr_mean)                           | Type name of the series                                                             |
| [`timeseries`](timeseries.md) | [`ts_len`](timeseries.md#network.ts_len)                         | Length of the timeseries                                                            |
| [`print_node`](print_node.md) | [`print_node`](print_node.md#network.print_node)                 | Print the node with its inputs and outputs                                          |
| [`files`](files.md)           | [`exists`](files.md#network.exists)                              | Checks if the given path exists when rendering the template                         |
| [`core`](core.md)             | [`inputs_count`](core.md#network.inputs_count)                   | Count the number of input nodes in the node                                         |
| [`series`](series.md)         | [`sr_sum`](series.md#network.sr_sum)                             | Sum of the series                                                                   |
| [`attributes`](attributes.md) | [`get_attr`](attributes.md#network.get_attr)                     | Retrive attribute                                                                   |
| [`attributes`](attributes.md) | [`has_attr`](attributes.md#network.has_attr)                     | Check if the attribute is present                                                   |
| [`series`](series.md)         | [`sr_len`](series.md#network.sr_len)                             | Length of the series                                                                |
| [`attributes`](attributes.md) | [`print_all_attrs`](attributes.md#network.print_all_attrs)       | Print all attrs in a node                                                           |
| [`core`](core.md)             | [`output_attr`](core.md#network.output_attr)                     | Get attributes of the output node                                                   |
| [`command`](command.md)       | [`command`](command.md#network.command)                          | Run the given template as a shell command.                                          |
| [`attributes`](attributes.md) | [`set_attrs`](attributes.md#network.set_attrs)                   | Set node attributes                                                                 |
| [`datafill`](datafill.md)     | [`load_csv_fill`](datafill.md#network.load_csv_fill)             |                                                                                     |
| [`dams`](dams.md)             | [`min_year`](dams.md#network.min_year)                           | Propagate the minimum year downstream                                               |
| [`core`](core.md)             | [`inputs_attr`](core.md#network.inputs_attr)                     | Get attributes of the input nodes                                                   |
| [`core`](core.md)             | [`has_outlet`](core.md#network.has_outlet)                       | Node has an outlet or not                                                           |
| [`attributes`](attributes.md) | [`set_attrs_render`](attributes.md#network.set_attrs_render)     | Set node attributes based on string templates                                       |
| [`attributes`](attributes.md) | [`load_attrs`](attributes.md#network.load_attrs)                 | Loads attrs from file for all nodes based on the given template                     |
| [`series`](series.md)         | [`sr_count`](series.md#network.sr_count)                         | Number of series in the node                                                        |


## Network Functions
| Plugin                          | Function                                                        | Help                                                                                 |
|:--------------------------------|:----------------------------------------------------------------|:-------------------------------------------------------------------------------------|
| [`connections`](connections.md) | [`subset`](connections.md#node.subset)                          | Take a subset of network by only including the selected nodes                        |
| [`print_node`](print_node.md)   | [`print_attr_csv`](print_node.md#node.print_attr_csv)           | Print the given attributes in csv format with first column with node name            |
| [`table`](table.md)             | [`table_to_markdown`](table.md#node.table_to_markdown)          | Render the Table as a rendered markdown                                              |
| [`connections`](connections.md) | [`load_str`](connections.md#node.load_str)                      | Load the given file into the network                                                 |
| [`render`](render.md)           | [`render_template`](render.md#node.render_template)             | Render a File template for the nodes in the whole network                            |
| [`connections`](connections.md) | [`load_file`](connections.md#node.load_file)                    | Load the given file into the network                                                 |
| [`command`](command.md)         | [`parallel`](command.md#node.parallel)                          | Run the given template as a shell command for each nodes in the network in parallel. |
| [`render`](render.md)           | [`render_nodes`](render.md#node.render_nodes)                   | Render each node of the network and combine to same variable                         |
| [`timeseries`](timeseries.md)   | [`series_csv`](timeseries.md#node.series_csv)                   | Write the given nodes to csv with given attributes and series                        |
| [`table`](table.md)             | [`save_csv`](table.md#node.save_csv)                            | Save CSV                                                                             |
| [`attributes`](attributes.md)   | [`set_attrs`](attributes.md#node.set_attrs)                     | Set network attributes                                                               |
| [`render`](render.md)           | [`render`](render.md#node.render)                               | Render from network attributes                                                       |
| [`graphviz`](graphviz.md)       | [`save_graphviz`](graphviz.md#node.save_graphviz)               | Save the network as a graphviz file                                                  |
| [`visuals`](visuals.md)         | [`set_nodesize_attrs`](visuals.md#node.set_nodesize_attrs)      | Set the node size of the nodes based on the attribute value                          |
| [`visuals`](visuals.md)         | [`svg_save`](visuals.md#node.svg_save)                          | Exports the network as a svg                                                         |
| [`command`](command.md)         | [`command`](command.md#node.command)                            | Run the given template as a shell command.                                           |
| [`core`](core.md)               | [`count`](core.md#node.count)                                   | Count the number of nodes in the network                                             |
| [`timeseries`](timeseries.md)   | [`ts_print_csv`](timeseries.md#node.ts_print_csv)               | Save timeseries from all nodes into a single csv file                                |
| [`gis`](gis.md)                 | [`gis_load_attrs`](gis.md#node.gis_load_attrs)                  | Load node attributes from a GIS file                                                 |
| [`html`](html.md)               | [`export_map`](html.md#node.export_map)                         | Exports the network as a HTML map                                                    |
| [`attributes`](attributes.md)   | [`set_attrs_render`](attributes.md#node.set_attrs_render)       | Set network attributes based on string templates                                     |
| [`fancy_print`](fancy_print.md) | [`fancy_print`](fancy_print.md#node.fancy_print)                | Fancy print a network                                                                |
| [`datafill`](datafill.md)       | [`save_experiments_csv`](datafill.md#node.save_experiments_csv) | Write the given nodes to csv with given attributes and experiment results            |
| [`gis`](gis.md)                 | [`gis_load_network`](gis.md#node.gis_load_network)              | Load network from a GIS file                                                         |
| [`errors`](errors.md)           | [`calc_attr_error`](errors.md#node.calc_attr_error)             | Calculate Error from two attribute values in the network                             |
| [`gis`](gis.md)                 | [`gis_save_nodes`](gis.md#node.gis_save_nodes)                  | Save GIS file of the nodes                                                           |
| [`gis`](gis.md)                 | [`gis_save_connections`](gis.md#node.gis_save_connections)      | Save GIS file of the connections                                                     |
| [`connections`](connections.md) | [`save_file`](connections.md#node.save_file)                    | Save the network into the given file                                                 |
| [`connections`](connections.md) | [`load_edges`](connections.md#node.load_edges)                  | Load the given edges into the network                                                |
| [`gnuplot`](gnuplot.md)         | [`plot_timeseries`](gnuplot.md#node.plot_timeseries)            | Generate a gnuplot file that plots the timeseries data in the network                |

