# Plugins

Plugins are the main source of functions in the task system. There are two types of plugins,
- internal plugins: come with your nadi distribution, and
- external plugins: you can install them using shared libraries.

The functions available from the internal plugins are available in any format. You can access the functions with their name, or with `plugin.name` syntax.

External plugins are loaded from the directory in `NADI_PLUGIN_DIRS` environmental variable. If the shared library in that directory does not match the specification of NADI plugin, is compiled using different version, or compiled with different internal data structures, it will print warning and skip that file. 

# Security
**Plugins can run arbitrary code**, so users are expected to be careful while loading plugins by making sure it is not malicious.

Rust plugins give option to look at the code used to build the function, but it is only intended to be helpful, a malicious actor can still obfuscate, omit, or show different code than the actual function.

Furthermore, plugins can also replace functions if they have same name, look out for the warnings while running nadi.

Expect these Changes in the Future Versions to make the plugins system more secure in terms of function replacement problem:
- internal plugin names will be uppercase, and external lowercase, so that external plugins are not mistaken as internal ones, and no overwriting functions,
- external plugin functions always need to be accessed with dot syntax (`plugin.function(...)`). And so that external functions are not called accidently.

This still will not solve the first problem, so always be vigilant using plugins. It is recommended to only use plugins developed in house, or those that you have source code of and can compile it yourself.
