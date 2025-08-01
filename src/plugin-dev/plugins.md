# Compiled Plugins

As it is not possible to forsee all the use cases in advance, the nadi
software can be easily extended (easy being an relative term) to
account for different use cases.

The program can load compiled shared libraries (`.dll` in windows,
`.so` in linux, and `.dylib` on mac). Since they are shared libraries
compiled into binaries, any programming languages can be used to
generate those. So far, the `nadi_core` library is available for
`Rust` only. Using that, plugins can be written and those functions
can be made available from the system.

NADI core library automatically loads:
- internal plugins if feature `functions` is used in `nadi_core` to compile it,
- external plugins in the directories inside the `NADI_PLUGIN_DIRS` environmental variables. The plugins must be compiled using the same `nadi_core` version and must have the same internal ABI for data types.


The syntax for functions in plugins are same for internal and external
plugins. While the way to register the plugin differ slightly.

The difference between the internal and external plugins are that, internal plugins are compiled with the `nadi_core` and come with the program, while external plugins are separately compiled and loaded through dynamic libraries.

The methods for writing the plugins are the same, except at the top level: to export plugins, you have to use [`nadi_core::nadi_plugin::nadi_plugin`] macro
for external plugins while
[`nadi_core::nadi_plugin::nadi_internal_plugin`] for internal ones.

In the next sections we will go in detail about how to write plugins and load them in nadi.
