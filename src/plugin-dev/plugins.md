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

The syntax for functions in plugins are same for internal and external
plugins. While the way to register the plugin differ slightly.

We will go through them very briefly here, and more details on them on their own pages.

## Exporting Plugins
To export plugins, use [`nadi_core::nadi_plugin::nadi_plugin`] macro
for external plugins while use
[`nadi_core::nadi_plugin::nadi_internal_plugin`] for internal ones.
