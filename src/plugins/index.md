# All Plugin Functions
All the functions available on this instance of nadi, are listed here.

## Env Functions
| Plugin                  | Function                                          | Help                                                      |
|:------------------------|:--------------------------------------------------|:----------------------------------------------------------|
| [`logic`](logic.md)     | [`eq`](logic.md#env.eq)                           | Greater than check                                        |
| [`attrs`](attrs.md)     | [`float_transform`](attrs.md#env.float_transform) | map values from the attribute based on the given table    |
| [`core`](core.md)       | [`float`](core.md#env.float)                      | make a float from value                                   |
| [`regex`](regex.md)     | [`str_replace`](regex.md#env.str_replace)         | Replace the occurances of the given match                 |
| [`logic`](logic.md)     | [`lt`](logic.md#env.lt)                           | Greater than check                                        |
| [`core`](core.md)       | [`str`](core.md#env.str)                          | make a string from value                                  |
| [`core`](core.md)       | [`int`](core.md#env.int)                          | make an int from the value                                |
| [`regex`](regex.md)     | [`str_match`](regex.md#env.str_match)             | Check if the given pattern matches the value or not       |
| [`regex`](regex.md)     | [`str_count`](regex.md#env.str_count)             | Count the number of matches of given pattern in the value |
| [`logic`](logic.md)     | [`ifelse`](logic.md#env.ifelse)                   | Simple if else condition                                  |
| [`regex`](regex.md)     | [`str_find`](regex.md#env.str_find)               | Find the given pattern in the value                       |
| [`command`](command.md) | [`exists`](command.md#env.exists)                 | Checks if the given path exists                           |
| [`core`](core.md)       | [`attrmap`](core.md#env.attrmap)                  | make an array from the arguments                          |
| [`logic`](logic.md)     | [`or`](logic.md#env.or)                           | boolean or                                                |
| [`logic`](logic.md)     | [`not`](logic.md#env.not)                         | boolean not                                               |
| [`regex`](regex.md)     | [`str_find_all`](regex.md#env.str_find_all)       | Find all the matches of the given pattern in the value    |
| [`logic`](logic.md)     | [`and`](logic.md#env.and)                         | Boolean and                                               |
| [`attrs`](attrs.md)     | [`strmap`](attrs.md#env.strmap)                   | map values from the attribute based on the given table    |
| [`core`](core.md)       | [`array`](core.md#env.array)                      | make an array from the arguments                          |
| [`logic`](logic.md)     | [`gt`](logic.md#env.gt)                           | Greater than check                                        |
| [`core`](core.md)       | [`type_name`](core.md#env.type_name)              | Type name of the arguments                                |


## Node Functions
| Plugin                        | Function                                                     | Help                                                                                |
|:------------------------------|:-------------------------------------------------------------|:------------------------------------------------------------------------------------|
| [`errors`](errors.md)         | [`calc_ts_error`](errors.md#network.calc_ts_error)           | Calculate Error from two timeseries values in the node                              |
| [`datafill`](datafill.md)     | [`load_csv_fill`](datafill.md#network.load_csv_fill)         |                                                                                     |
| [`timeseries`](timeseries.md) | [`ts_len`](timeseries.md#network.ts_len)                     | Length of the timeseries                                                            |
| [`print_node`](print_node.md) | [`print_node`](print_node.md#network.print_node)             | Print the node with its inputs and outputs                                          |
| [`command`](command.md)       | [`exists`](command.md#network.exists)                        | Checks if the given path exists when rendering the template                         |
| [`series`](series.md)         | [`sr_mean`](series.md#network.sr_mean)                       | Type name of the series                                                             |
| [`attrs`](attrs.md)           | [`print_all_attrs`](attrs.md#network.print_all_attrs)        | Print all attrs in a node                                                           |
| [`render`](render.md)         | [`render`](render.md#network.render)                         | Render the template based on the node attributes                                    |
| [`timeseries`](timeseries.md) | [`ts_dtype`](timeseries.md#network.ts_dtype)                 | Type name of the timeseries                                                         |
| [`attrs`](attrs.md)           | [`print_attrs`](attrs.md#network.print_attrs)                | Print the given node attributes if present                                          |
| [`timeseries`](timeseries.md) | [`ts_list`](timeseries.md#network.ts_list)                   | List all timeseries in the node                                                     |
| [`command`](command.md)       | [`run`](command.md#network.run)                              | Run the node as if it's a command if inputs are changed                             |
| [`series`](series.md)         | [`set_series`](series.md#network.set_series)                 | set the following series to the node                                                |
| [`series`](series.md)         | [`sr_to_array`](series.md#network.sr_to_array)               | Make an array from the series                                                       |
| [`attrs`](attrs.md)           | [`has_attr`](attrs.md#network.has_attr)                      | Check if the attribute is present                                                   |
| [`series`](series.md)         | [`sr_count`](series.md#network.sr_count)                     | Number of series in the node                                                        |
| [`series`](series.md)         | [`sr_sum`](series.md#network.sr_sum)                         | Sum of the series                                                                   |
| [`attrs`](attrs.md)           | [`set_attrs_ifelse`](attrs.md#network.set_attrs_ifelse)      | if else condition with multiple attributes                                          |
| [`errors`](errors.md)         | [`calc_ts_errors`](errors.md#network.calc_ts_errors)         | Calculate Error from two timeseries values in the node                              |
| [`attrs`](attrs.md)           | [`get_attr`](attrs.md#network.get_attr)                      | Retrive attribute                                                                   |
| [`series`](series.md)         | [`sr_dtype`](series.md#network.sr_dtype)                     | Type name of the series                                                             |
| [`streamflow`](streamflow.md) | [`check_negative`](streamflow.md#network.check_negative)     | Check the given streamflow timeseries for negative values                           |
| [`series`](series.md)         | [`sr_len`](series.md#network.sr_len)                         | Length of the series                                                                |
| [`series`](series.md)         | [`sr_list`](series.md#network.sr_list)                       | List all series in the node                                                         |
| [`timeseries`](timeseries.md) | [`ts_count`](timeseries.md#network.ts_count)                 | Number of timeseries in the node                                                    |
| [`attrs`](attrs.md)           | [`first_attr`](attrs.md#network.first_attr)                  | Return the first Attribute that exists                                              |
| [`attrs`](attrs.md)           | [`set_attrs`](attrs.md#network.set_attrs)                    | Set node attributes                                                                 |
| [`attrs`](attrs.md)           | [`load_attrs`](attrs.md#network.load_attrs)                  | Loads attrs from file for all nodes based on the given template                     |
| [`graphics`](graphics.md)     | [`attr_fraction_svg`](graphics.md#network.attr_fraction_svg) | Create a SVG file with the given network structure                                  |
| [`dams`](dams.md)             | [`count_node_if`](dams.md#network.count_node_if)             | Count the number of nodes upstream at each point that satisfies a certain condition |
| [`dams`](dams.md)             | [`min_year`](dams.md#network.min_year)                       | Propagate the minimum year downstream                                               |
| [`command`](command.md)       | [`command`](command.md#network.command)                      | Run the given template as a shell command.                                          |
| [`attrs`](attrs.md)           | [`set_attrs_render`](attrs.md#network.set_attrs_render)      | Set node attributes based on string templates                                       |
| [`attrs`](attrs.md)           | [`load_toml_render`](attrs.md#network.load_toml_render)      | Set node attributes based on string templates                                       |
| [`timeseries`](timeseries.md) | [`ts_print`](timeseries.md#network.ts_print)                 | Print the given timeseries values in csv format                                     |


## Network Functions
| Plugin                          | Function                                                        | Help                                                                                 |
|:--------------------------------|:----------------------------------------------------------------|:-------------------------------------------------------------------------------------|
| [`attrs`](attrs.md)             | [`set_attrs_render`](attrs.md#node.set_attrs_render)            | Set network attributes based on string templates                                     |
| [`graphics`](graphics.md)       | [`table_to_svg`](graphics.md#node.table_to_svg)                 | Create a SVG file with the given network structure                                   |
| [`errors`](errors.md)           | [`calc_attr_error`](errors.md#node.calc_attr_error)             | Calculate Error from two attribute values in the network                             |
| [`core`](core.md)               | [`count`](core.md#node.count)                                   | Count the number of nodes in the network                                             |
| [`command`](command.md)         | [`command`](command.md#node.command)                            | Run the given template as a shell command.                                           |
| [`graphviz`](graphviz.md)       | [`save_graphviz`](graphviz.md#node.save_graphviz)               | Save the network as a graphviz file                                                  |
| [`graphics`](graphics.md)       | [`export_svg`](graphics.md#node.export_svg)                     | Create a SVG file with the given network structure                                   |
| [`table`](table.md)             | [`save_csv`](table.md#node.save_csv)                            | Save CSV                                                                             |
| [`connections`](connections.md) | [`load_file`](connections.md#node.load_file)                    | Load the given file into the network                                                 |
| [`gnuplot`](gnuplot.md)         | [`plot_timeseries`](gnuplot.md#node.plot_timeseries)            | Generate a gnuplot file that plots the timeseries data in the network                |
| [`debug`](debug.md)             | [`debug`](debug.md#node.debug)                                  | Print the args and kwargs on this function                                           |
| [`fancy_print`](fancy_print.md) | [`fancy_print`](fancy_print.md#node.fancy_print)                | Fancy print a network                                                                |
| [`graphics`](graphics.md)       | [`csv_count_na`](graphics.md#node.csv_count_na)                 | Count the number of na values in CSV file for each nodes in a network                |
| [`debug`](debug.md)             | [`echo`](debug.md#node.echo)                                    | Echo the string to stdout or stderr                                                  |
| [`nadi_gis`](nadi_gis.md)       | [`gis_load_attrs`](nadi_gis.md#node.gis_load_attrs)             | Load node attributes from a GIS file                                                 |
| [`print_node`](print_node.md)   | [`print_attr_csv`](print_node.md#node.print_attr_csv)           | Print the given attributes in csv format with first column with node name            |
| [`render`](render.md)           | [`render`](render.md#node.render)                               | Render a File template for the nodes in the whole network                            |
| [`debug`](debug.md)             | [`clip`](debug.md#node.clip)                                    | Echo the ----8<---- line for clipping syntax                                         |
| [`graphics`](graphics.md)       | [`csv_load_ts`](graphics.md#node.csv_load_ts)                   | Count the number of na values in CSV file for each nodes in a network                |
| [`attrs`](attrs.md)             | [`set_attrs`](attrs.md#node.set_attrs)                          | Set network attributes                                                               |
| [`command`](command.md)         | [`parallel`](command.md#node.parallel)                          | Run the given template as a shell command for each nodes in the network in parallel. |
| [`timeseries`](timeseries.md)   | [`ts_print_csv`](timeseries.md#node.ts_print_csv)               | Save timeseries from all nodes into a single csv file                                |
| [`connections`](connections.md) | [`subset`](connections.md#node.subset)                          | Take a subset of network by only including the selected nodes                        |
| [`visuals`](visuals.md)         | [`set_nodesize_attrs`](visuals.md#node.set_nodesize_attrs)      | Set the node size of the nodes based on the attribute value                          |
| [`nadi_gis`](nadi_gis.md)       | [`gis_save_connections`](nadi_gis.md#node.gis_save_connections) | Save GIS file of the connections                                                     |
| [`connections`](connections.md) | [`save_file`](connections.md#node.save_file)                    | Save the network into the given file                                                 |
| [`html`](html.md)               | [`export_map`](html.md#node.export_map)                         | Exports the network as a HTML map                                                    |
| [`graphics`](graphics.md)       | [`csv_data_blocks_svg`](graphics.md#node.csv_data_blocks_svg)   | Draw the data blocks with arrows in timeline                                         |
| [`table`](table.md)             | [`table_to_markdown`](table.md#node.table_to_markdown)          | Render the Table as a rendered markdown                                              |
| [`nadi_gis`](nadi_gis.md)       | [`gis_save_nodes`](nadi_gis.md#node.gis_save_nodes)             | Save GIS file of the nodes                                                           |

