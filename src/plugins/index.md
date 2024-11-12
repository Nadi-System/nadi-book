# All Plugin Functions
All the functions available on this instance of nadi, are listed here.

## Node Functions
| Plugin                        | Function                                                 | Help                                                            |
|:------------------------------|:---------------------------------------------------------|:----------------------------------------------------------------|
| [`command`](command.md)       | [`command`](command.md#network.command)                  | Run the given template as a shell command.                      |
| [`attrs`](attrs.md)           | [`load_attrs`](attrs.md#network.load_attrs)              | Loads attrs from file for all nodes based on the given template |
| [`attrs`](attrs.md)           | [`print_all_attrs`](attrs.md#network.print_all_attrs)    | Print all attrs in a node                                       |
| [`render`](render.md)         | [`render`](render.md#network.render)                     | Render the template based on the node attributes                |
| [`errors`](errors.md)         | [`calc_ts_errors`](errors.md#network.calc_ts_errors)     | Calculate Error from two timeseries values in the node          |
| [`streamflow`](streamflow.md) | [`check_negative`](streamflow.md#network.check_negative) | Check the given streamflow timeseries for negative values       |
| [`print_node`](print_node.md) | [`print_node`](print_node.md#network.print_node)         | Print the node with its inputs and outputs                      |
| [`dams`](dams.md)             | [`min_year`](dams.md#network.min_year)                   | Propagage the minimum year downstream                           |
| [`attrs`](attrs.md)           | [`set_attrs`](attrs.md#network.set_attrs)                | Set node attributes                                             |
| [`timeseries`](timeseries.md) | [`show_ts`](timeseries.md#network.show_ts)               | Print the given timeseries values in csv format                 |
| [`errors`](errors.md)         | [`calc_ts_error`](errors.md#network.calc_ts_error)       | Calculate Error from two timeseries values in the node          |
| [`timeseries`](timeseries.md) | [`list_ts`](timeseries.md#network.list_ts)               | Print the list of available timeseries for the node             |
| [`dams`](dams.md)             | [`count_dams`](dams.md#network.count_dams)               | Count the number of dams upstream at each point                 |
| [`dams`](dams.md)             | [`count_gages`](dams.md#network.count_gages)             | Count the number of gages upstream at each point                |
| [`attrs`](attrs.md)           | [`print_attrs`](attrs.md#network.print_attrs)            | Print the given node attributes if present                      |
| [`attrs`](attrs.md)           | [`set_attrs_render`](attrs.md#network.set_attrs_render)  | Set node attributes based on string templates                   |


## Network Functions
| Plugin                          | Function                                                        | Help                                                                                 |
|:--------------------------------|:----------------------------------------------------------------|:-------------------------------------------------------------------------------------|
| [`nadi_gis`](nadi_gis.md)       | [`gis_load_attrs`](nadi_gis.md#node.gis_load_attrs)             | Load node attributes from a GIS file                                                 |
| [`nadi_gis`](nadi_gis.md)       | [`gis_save_connections`](nadi_gis.md#node.gis_save_connections) | Save GIS file of the connections                                                     |
| [`connections`](connections.md) | [`load_file`](connections.md#node.load_file)                    | Load the given file into the network                                                 |
| [`debug`](debug.md)             | [`clip`](debug.md#node.clip)                                    | Echo the ----8<---- line for clipping sytax                                          |
| [`graphics`](graphics.md)       | [`csv_count_na`](graphics.md#node.csv_count_na)                 | Count the number of na values in CSV file for each nodes in a network                |
| [`debug`](debug.md)             | [`echo`](debug.md#node.echo)                                    | Echo the string to stdout or stderr                                                  |
| [`attrs`](attrs.md)             | [`set_attrs`](attrs.md#node.set_attrs)                          | Set network attributes                                                               |
| [`nadi_gis`](nadi_gis.md)       | [`gis_save_nodes`](nadi_gis.md#node.gis_save_nodes)             | Save GIS file of the nodes                                                           |
| [`command`](command.md)         | [`parallel`](command.md#node.parallel)                          | Run the given template as a shell command for each nodes in the network in parallel. |
| [`print_node`](print_node.md)   | [`print_attr_csv`](print_node.md#node.print_attr_csv)           | Print the given attributes in csv format with first column with node name            |
| [`gnuplot`](gnuplot.md)         | [`plot_timeseries`](gnuplot.md#node.plot_timeseries)            | Generate a gnuplot file that plots the timeseries data in the network                |
| [`attrs`](attrs.md)             | [`set_attrs_render`](attrs.md#node.set_attrs_render)            | Set network attributes based on string templates                                     |
| [`command`](command.md)         | [`command`](command.md#node.command)                            | Run the given template as a shell command.                                           |
| [`render`](render.md)           | [`render`](render.md#node.render)                               | Render a File template for the nodes in the whole network                            |
| [`graphviz`](graphviz.md)       | [`save_graphviz`](graphviz.md#node.save_graphviz)               | Save the network as a graphviz file                                                  |
| [`errors`](errors.md)           | [`calc_attr_error`](errors.md#node.calc_attr_error)             | Calculate Error from two attribute values in the network                             |
| [`fancy_print`](fancy_print.md) | [`fancy_print`](fancy_print.md#node.fancy_print)                | Fancy print a network                                                                |
| [`graphics`](graphics.md)       | [`csv_load_ts`](graphics.md#node.csv_load_ts)                   | Count the number of na values in CSV file for each nodes in a network                |
| [`table`](table.md)             | [`table_to_markdown`](table.md#node.table_to_markdown)          | Render the Table as a rendered markdown                                              |
| [`connections`](connections.md) | [`save_file`](connections.md#node.save_file)                    | Save the network into the given file                                                 |
| [`graphics`](graphics.md)       | [`csv_data_blocks_svg`](graphics.md#node.csv_data_blocks_svg)   | Draw the data blocks with arrows in timeline                                         |
| [`debug`](debug.md)             | [`debug`](debug.md#node.debug)                                  | Print the args and kwargs on this function                                           |
| [`graphics`](graphics.md)       | [`export_svg`](graphics.md#node.export_svg)                     | Create a SVG file with the given network structure                                   |
| [`graphics`](graphics.md)       | [`table_to_svg`](graphics.md#node.table_to_svg)                 | Create a SVG file with the given network structure                                   |

