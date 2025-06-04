# External Plugins
External plugins are plugins that are their own separate programs that compile to a shared library. The shared library has information about the name of the plugin, the functions that are available, as well as the bytecode required to run the functions.

You have to use the `nadi_core` library and the macros available there to make the plugins. Although it might be possible to write it without the macros (an example is provided), it is strongly discouraged. The example only serves as a way to demonstrate the inner working of the external plugins.

Some examples of external plugins are given in the [`nadi-plugins-rust` repository](https://github.com/Nadi-System/nadi-plugins-rust).

An example of a complex external plugin can be found in the `gis` plugin from [`nadi-gis` repository](https://github.com/Nadi-System/nadi-gis).


## Steps to create a Plugin

`nadi` CLI tool has a function that can generate a plugin template. Simply run the `nadi` command with `--new-plugin` flag.

    nadi --new-plugin <plugin-name>
	
This will create a directory with plugin's name with `Cargo.toml` and `src/lib.rs` with some sample codes for plugin functions. You can then edit them as per your need.

The generated files using `nadi --new-plugin sample` look something like this:

Cargo.toml:
```toml
[package]
name = "sample"
version = "0.1.0"
edition = "2021"

[lib]
crate-type = ["cdylib"]

# make sure you use the same version of nadi_core, your nadi-system is in
[dependencies]
abi_stable = "0.11.3"
nadi_core = "0.7.0"
```

src/lib.rs:
```rust
use nadi_core::nadi_plugin::nadi_plugin;

#[nadi_plugin]
mod sample {
    use nadi_core::prelude::*;

    /// The macros imported from nadi_plugin read the rust function you
    /// write and use that as a base to write more core internally that
    /// will be compiled into the shared libraries. This means it'll
    /// automatically get the argument types, documentation, mutability,
    /// etc. For more details on what they can do, refer to nadi book.
    use nadi_core::nadi_plugin::{env_func, network_func, node_func};

    /// Example Environment function for the plugin
    ///
    /// You can use markdown format to write detailed documentation for the
    /// function you write. This will be availble from nadi-help.
    #[env_func(pre = "Message: ")]
    fn echo(message: String, pre: String) -> String {
        format!("{}{}", pre, message)
    }

    /// Example Node function for the plugin
    #[node_func]
    fn node_name(node: &NodeInner) -> String {
        node.name().to_string()
    }

    /// Example Network function for the plugin
    ///
    /// You can also write docstrings for the arguments, this syntax is not
    /// a valid rust syntax, but our macro will read those docstrings, saves
    /// it and then removes it so that rust does not get confused. This means
    /// You do not have to write separate documentation for functions.
    #[network_func]
    fn node_first_with_attr(
        net: &Network,
        /// Name of the attribute to search
        attrname: String,
    ) -> Option<String> {
        for node in net.nodes() {
            let node = node.lock();
            if node.attr_dot(&attrname).is_ok() {
                return Some(node.name().to_string());
            }
        }
        None
    }
}
```

The plugin can be compiled with the `cargo build` or `cargo build --release` command, it'll generate the shared library in the `target/debug` or `target/release` folder. You can simply copy it to directory in `NADI_PLUGIN_DIRS` for it to be loaded.
