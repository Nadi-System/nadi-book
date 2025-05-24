# All Plugin Functions
All the functions available on this instance of nadi, are listed here.

## Env Functions
| Plugin                  | Function                                          | Help                                                      |
|:------------------------|:--------------------------------------------------|:----------------------------------------------------------|
| [`logic`](logic.md)     | [`and`](logic.md#env.and)                         | Boolean and                                               |
| [`regex`](regex.md)     | [`str_find`](regex.md#env.str_find)               | Find the given pattern in the value                       |
| [`attrs`](attrs.md)     | [`float_mult`](attrs.md#env.float_mult)           | map values from the attribute based on the given table    |
| [`attrs`](attrs.md)     | [`float_transform`](attrs.md#env.float_transform) | map values from the attribute based on the given table    |
| [`core`](core.md)       | [`month`](core.md#env.month)                      | month from date/datetime                                  |
| [`debug`](debug.md)     | [`sleep`](debug.md#env.sleep)                     | sleep for given number of milliseconds                    |
| [`core`](core.md)       | [`str`](core.md#env.str)                          | make a string from value                                  |
| [`attrs`](attrs.md)     | [`float_div`](attrs.md#env.float_div)             | map values from the attribute based on the given table    |
| [`core`](core.md)       | [`min`](core.md#env.min)                          | Minimum of the variables                                  |
| [`logic`](logic.md)     | [`lt`](logic.md#env.lt)                           | Greater than check                                        |
| [`logic`](logic.md)     | [`gt`](logic.md#env.gt)                           | Greater than check                                        |
| [`regex`](regex.md)     | [`str_count`](regex.md#env.str_count)             | Count the number of matches of given pattern in the value |
| [`core`](core.md)       | [`max`](core.md#env.max)                          | Minimum of the variables                                  |
| [`command`](command.md) | [`exists`](command.md#env.exists)                 | Checks if the given path exists                           |
| [`core`](core.md)       | [`type_name`](core.md#env.type_name)              | Type name of the arguments                                |
| [`core`](core.md)       | [`unique_str`](core.md#env.unique_str)            | Get a list of unique string values                        |
| [`debug`](debug.md)     | [`clip`](debug.md#env.clip)                       | Echo the ----8<---- line for clipping syntax              |
| [`core`](core.md)       | [`max_num`](core.md#env.max_num)                  | Minimum of the variables                                  |
| [`regex`](regex.md)     | [`str_replace`](regex.md#env.str_replace)         | Replace the occurances of the given match                 |
| [`core`](core.md)       | [`int`](core.md#env.int)                          | make an int from the value                                |
| [`core`](core.md)       | [`prod`](core.md#env.prod)                        | Product of the variables                                  |
| [`core`](core.md)       | [`isna`](core.md#env.isna)                        | check if a float is nan                                   |
| [`core`](core.md)       | [`sum`](core.md#env.sum)                          | Sum of the variables                                      |
| [`logic`](logic.md)     | [`eq`](logic.md#env.eq)                           | Greater than check                                        |
| [`regex`](regex.md)     | [`str_find_all`](regex.md#env.str_find_all)       | Find all the matches of the given pattern in the value    |
| [`attrs`](attrs.md)     | [`strmap`](attrs.md#env.strmap)                   | map values from the attribute based on the given table    |
| [`logic`](logic.md)     | [`ifelse`](logic.md#env.ifelse)                   | Simple if else condition                                  |
| [`core`](core.md)       | [`count`](core.md#env.count)                      | Count the number of true values in the array              |
| [`logic`](logic.md)     | [`any`](logic.md#env.any)                         | check if any of the bool are true                         |
| [`core`](core.md)       | [`isinf`](core.md#env.isinf)                      | check if a float is +/- infinity                          |
| [`regex`](regex.md)     | [`str_match`](regex.md#env.str_match)             | Check if the given pattern matches the value or not       |
| [`core`](core.md)       | [`count_str`](core.md#env.count_str)              | Get a count of unique string values                       |
| [`logic`](logic.md)     | [`all`](logic.md#env.all)                         | check if all of the bool are true                         |
| [`logic`](logic.md)     | [`not`](logic.md#env.not)                         | boolean not                                               |
| [`debug`](debug.md)     | [`debug`](debug.md#env.debug)                     | Print the args and kwargs on this function                |
| [`core`](core.md)       | [`min_num`](core.md#env.min_num)                  | Minimum of the variables                                  |
| [`core`](core.md)       | [`day`](core.md#env.day)                          | day from date/datetime                                    |
| [`debug`](debug.md)     | [`echo`](debug.md#env.echo)                       | Echo the string to stdout or stderr                       |
| [`logic`](logic.md)     | [`or`](logic.md#env.or)                           | boolean or                                                |
| [`core`](core.md)       | [`attrmap`](core.md#env.attrmap)                  | make an array from the arguments                          |
| [`core`](core.md)       | [`year`](core.md#env.year)                        | year from date/datetime                                   |
| [`core`](core.md)       | [`float`](core.md#env.float)                      | make a float from value                                   |
| [`core`](core.md)       | [`array`](core.md#env.array)                      | make an array from the arguments                          |


## Node Functions
| Plugin                        | Function                                                         | Help                                                                                |
|:------------------------------|:-----------------------------------------------------------------|:------------------------------------------------------------------------------------|
| [`core`](core.md)             | [`output_attr`](core.md#network.output_attr)                     | Get attributes of the output node                                                   |
| [`timeseries`](timeseries.md) | [`ts_print`](timeseries.md#network.ts_print)                     | Print the given timeseries values in csv format                                     |
| [`attrs`](attrs.md)           | [`get_attr`](attrs.md#network.get_attr)                          | Retrive attribute                                                                   |
| [`attrs`](attrs.md)           | [`first_attr`](attrs.md#network.first_attr)                      | Return the first Attribute that exists                                              |
| [`datafill`](datafill.md)     | [`datafill_experiment`](datafill.md#network.datafill_experiment) |                                                                                     |
| [`attrs`](attrs.md)           | [`print_all_attrs`](attrs.md#network.print_all_attrs)            | Print all attrs in a node                                                           |
| [`attrs`](attrs.md)           | [`set_attrs`](attrs.md#network.set_attrs)                        | Set node attributes                                                                 |
| [`render`](render.md)         | [`render`](render.md#network.render)                             | Render the template based on the node attributes                                    |
| [`timeseries`](timeseries.md) | [`ts_count`](timeseries.md#network.ts_count)                     | Number of timeseries in the node                                                    |
| [`errors`](errors.md)         | [`calc_ts_error`](errors.md#network.calc_ts_error)               | Calculate Error from two timeseries values in the node                              |
| [`dams`](dams.md)             | [`min_year`](dams.md#network.min_year)                           | Propagate the minimum year downstream                                               |
| [`core`](core.md)             | [`has_outlet`](core.md#network.has_outlet)                       | Node has an outlet or not                                                           |
| [`command`](command.md)       | [`run`](command.md#network.run)                                  | Run the node as if it's a command if inputs are changed                             |
| [`errors`](errors.md)         | [`calc_ts_errors`](errors.md#network.calc_ts_errors)             | Calculate Error from two timeseries values in the node                              |
| [`attrs`](attrs.md)           | [`print_attrs`](attrs.md#network.print_attrs)                    | Print the given node attributes if present                                          |
| [`series`](series.md)         | [`sr_count`](series.md#network.sr_count)                         | Number of series in the node                                                        |
| [`timeseries`](timeseries.md) | [`ts_list`](timeseries.md#network.ts_list)                       | List all timeseries in the node                                                     |
| [`core`](core.md)             | [`inputs_count`](core.md#network.inputs_count)                   | Count the number of input nodes in the node                                         |
| [`datafill`](datafill.md)     | [`load_csv_fill`](datafill.md#network.load_csv_fill)             |                                                                                     |
| [`series`](series.md)         | [`sr_len`](series.md#network.sr_len)                             | Length of the series                                                                |
| [`series`](series.md)         | [`sr_sum`](series.md#network.sr_sum)                             | Sum of the series                                                                   |
| [`attrs`](attrs.md)           | [`set_attrs_ifelse`](attrs.md#network.set_attrs_ifelse)          | if else condition with multiple attributes                                          |
| [`core`](core.md)             | [`inputs_attr`](core.md#network.inputs_attr)                     | Get attributes of the input nodes                                                   |
| [`series`](series.md)         | [`sr_list`](series.md#network.sr_list)                           | List all series in the node                                                         |
| [`timeseries`](timeseries.md) | [`ts_len`](timeseries.md#network.ts_len)                         | Length of the timeseries                                                            |
| [`series`](series.md)         | [`sr_dtype`](series.md#network.sr_dtype)                         | Type name of the series                                                             |
| [`series`](series.md)         | [`set_series`](series.md#network.set_series)                     | set the following series to the node                                                |
| [`series`](series.md)         | [`sr_to_array`](series.md#network.sr_to_array)                   | Make an array from the series                                                       |
| [`series`](series.md)         | [`sr_mean`](series.md#network.sr_mean)                           | Type name of the series                                                             |
| [`attrs`](attrs.md)           | [`load_attrs`](attrs.md#network.load_attrs)                      | Loads attrs from file for all nodes based on the given template                     |
| [`attrs`](attrs.md)           | [`has_attr`](attrs.md#network.has_attr)                          | Check if the attribute is present                                                   |
| [`streamflow`](streamflow.md) | [`check_negative`](streamflow.md#network.check_negative)         | Check the given streamflow timeseries for negative values                           |
| [`print_node`](print_node.md) | [`print_node`](print_node.md#network.print_node)                 | Print the node with its inputs and outputs                                          |
| [`command`](command.md)       | [`command`](command.md#network.command)                          | Run the given template as a shell command.                                          |
| [`command`](command.md)       | [`exists`](command.md#network.exists)                            | Checks if the given path exists when rendering the template                         |
| [`graphics`](graphics.md)     | [`attr_fraction_svg`](graphics.md#network.attr_fraction_svg)     | Create a SVG file with the given network structure                                  |
| [`attrs`](attrs.md)           | [`load_toml_render`](attrs.md#network.load_toml_render)          | Set node attributes based on string templates                                       |
| [`timeseries`](timeseries.md) | [`ts_dtype`](timeseries.md#network.ts_dtype)                     | Type name of the timeseries                                                         |
| [`attrs`](attrs.md)           | [`set_attrs_render`](attrs.md#network.set_attrs_render)          | Set node attributes based on string templates                                       |
| [`dams`](dams.md)             | [`count_node_if`](dams.md#network.count_node_if)                 | Count the number of nodes upstream at each point that satisfies a certain condition |


## Network Functions
| Plugin                          | Function                                                        | Help                                                                                 |
|:--------------------------------|:----------------------------------------------------------------|:-------------------------------------------------------------------------------------|
| [`connections`](connections.md) | [`load_str`](connections.md#node.load_str)                      | Load the given file into the network                                                 |
| [`connections`](connections.md) | [`load_file`](connections.md#node.load_file)                    | Load the given file into the network                                                 |
| [`graphics`](graphics.md)       | [`csv_data_blocks_svg`](graphics.md#node.csv_data_blocks_svg)   | Draw the data blocks with arrows in timeline                                         |
| [`nadi_gis`](nadi_gis.md)       | [`gis_save_nodes`](nadi_gis.md#node.gis_save_nodes)             | Save GIS file of the nodes                                                           |
| [`core`](core.md)               | [`count`](core.md#node.count)                                   | Count the number of nodes in the network                                             |
| [`nadi_gis`](nadi_gis.md)       | [`gis_load_attrs`](nadi_gis.md#node.gis_load_attrs)             | Load node attributes from a GIS file                                                 |
| [`attrs`](attrs.md)             | [`set_attrs_render`](attrs.md#node.set_attrs_render)            | Set network attributes based on string templates                                     |
| [`connections`](connections.md) | [`save_file`](connections.md#node.save_file)                    | Save the network into the given file                                                 |
| [`nadi_gis`](nadi_gis.md)       | [`gis_save_connections`](nadi_gis.md#node.gis_save_connections) | Save GIS file of the connections                                                     |
| [`errors`](errors.md)           | [`calc_attr_error`](errors.md#node.calc_attr_error)             | Calculate Error from two attribute values in the network                             |
| [`attrs`](attrs.md)             | [`set_attrs`](attrs.md#node.set_attrs)                          | Set network attributes                                                               |
| [`render`](render.md)           | [`render_nodes`](render.md#node.render_nodes)                   | Render each node of the network and combine to same variable                         |
| [`fancy_print`](fancy_print.md) | [`fancy_print`](fancy_print.md#node.fancy_print)                | Fancy print a network                                                                |
| [`command`](command.md)         | [`parallel`](command.md#node.parallel)                          | Run the given template as a shell command for each nodes in the network in parallel. |
| [`render`](render.md)           | [`render_template`](render.md#node.render_template)             | Render a File template for the nodes in the whole network                            |
| [`render`](render.md)           | [`render`](render.md#node.render)                               | Render from network attributes                                                       |
| [`print_node`](print_node.md)   | [`print_attr_csv`](print_node.md#node.print_attr_csv)           | Print the given attributes in csv format with first column with node name            |
| [`graphics`](graphics.md)       | [`csv_count_na`](graphics.md#node.csv_count_na)                 | Count the number of na values in CSV file for each nodes in a network                |
| [`datafill`](datafill.md)       | [`save_experiments_csv`](datafill.md#node.save_experiments_csv) | Write the given nodes to csv with given attributes and experiment results            |
| [`timeseries`](timeseries.md)   | [`ts_print_csv`](timeseries.md#node.ts_print_csv)               | Save timeseries from all nodes into a single csv file                                |
| [`connections`](connections.md) | [`subset`](connections.md#node.subset)                          | Take a subset of network by only including the selected nodes                        |
| [`gnuplot`](gnuplot.md)         | [`plot_timeseries`](gnuplot.md#node.plot_timeseries)            | Generate a gnuplot file that plots the timeseries data in the network                |
| [`table`](table.md)             | [`table_to_markdown`](table.md#node.table_to_markdown)          | Render the Table as a rendered markdown                                              |
| [`graphviz`](graphviz.md)       | [`save_graphviz`](graphviz.md#node.save_graphviz)               | Save the network as a graphviz file                                                  |
| [`table`](table.md)             | [`save_csv`](table.md#node.save_csv)                            | Save CSV                                                                             |
| [`timeseries`](timeseries.md)   | [`series_csv`](timeseries.md#node.series_csv)                   | Write the given nodes to csv with given attributes and series                        |
| [`graphics`](graphics.md)       | [`csv_load_ts`](graphics.md#node.csv_load_ts)                   | Count the number of na values in CSV file for each nodes in a network                |
| [`graphics`](graphics.md)       | [`export_svg`](graphics.md#node.export_svg)                     | Create a SVG file with the given network structure                                   |
| [`graphics`](graphics.md)       | [`table_to_svg`](graphics.md#node.table_to_svg)                 | Create a SVG file with the given network structure                                   |
| [`command`](command.md)         | [`command`](command.md#node.command)                            | Run the given template as a shell command.                                           |
| [`visuals`](visuals.md)         | [`svg_save`](visuals.md#node.svg_save)                          | Exports the network as a svg                                                         |
| [`visuals`](visuals.md)         | [`set_nodesize_attrs`](visuals.md#node.set_nodesize_attrs)      | Set the node size of the nodes based on the attribute value                          |
| [`html`](html.md)               | [`export_map`](html.md#node.export_map)                         | Exports the network as a HTML map                                                    |

