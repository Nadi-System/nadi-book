# Functions

Plugin functions are very close to normal rust functions, with extra syntax for the function arguments, and limited function argument and return types.

## Function Types
There are 3 function types:
- environment
- node
- network

the macro used for each function type are availabel from `nadi_core::nadi_plugin`. All the macro take optional list of `key = value` pairs that can act like default arguments to the functions while called from the task system.

These macro will read the rust function and generate the necessary plugin code, function signature, documentation, and will even save the original code so that users can browse it through the `nadi-help`.

## Function Arguments
There are 5 types of function arugments, that are denoted by the following attributes

| macro attr | Type                      | Supported Types                     |
|------------|---------------------------|-------------------------------------|
|            | Node/Network              | `&`/`& mut` + `NodeInner`/`Network` |
|            | Normal arguments          | `T: FromAttribute`                  |
| #[relaxed] | Relaxed arguments         | `T: FromAttributeRelaxed`           |
| #[args]    | Positional Arguments List | `&[Attribute]`                      |
| #[kwargs]  | Keyword Arguments AttrMap | `&AttrMap`                          |

Users can not provide the argument `Node`/`Network` for node/network function as it is automatically provided based on the context. 

Furthermore, there are required and optional arguments. And users can optionally omit the arguments that are of type `Option<T>`, or have default value in the macro (e.g. `safe = false` in the codes below).

For now, the function arguments except the `Node` or `Network` cannot be `mut`. But they can be reference of `T` if `T` satisfies the trait constraints, for example, instead of `Vec<String>`, it can be `&[String]`. But because the function context is evaluated for each node/network, there is no optimization by using the references.

## Return Types
Function Return can be empty, an attribute value, or an error. When a function returns an error, the execution is halted. When it doesn't return a value and an assignment is performed, it will error as well.

The return type of the function should implement `Into<FunctinRet>`, refer to the documentation for [`nadi_core::functions::FunctionRet`](https://docs.rs/nadi_core/latest/nadi_core/functions/enum.FunctionRet.html) to see what types implement it. You can also implement that for your own types.

You can simply use any type that satisfy the trait requirement mentioned above as a function return and the nadi macros will convert them automatically for you.

## Verbosity
In future versions the functions will also get a flag that will let them know how verbose the functions can be. This will also come with a way to pass progress and other information while the function is still running.


## Examples

Refer to the nadi_core, and other plugin repositories for sample codes for plugin functions as they are always up to date with the current version.

Here is an example containing render function that is available on all function types.
```rust
    /// Render the template based on the given attributes
    ///
    /// For more details on the template system. Refer to the String
    /// Template section of the NADI book.
    #[env_func(safe = false)]
    fn render(
        /// String template to render
        template: &Template,
        #[kwargs] keyval: &AttrMap,
        /// if render fails keep it as it is instead of exiting
        safe: bool,
    ) -> Result<String, String> {
        let text = if safe {
            keyval
                .render(template)
                .unwrap_or_else(|_| template.original().to_string())
        } else {
            keyval.render(template).map_err(|e| e.to_string())?
        };
        Ok(text)
    }
```

```rust
    /// Render the template based on the node attributes
    ///
    /// For more details on the template system. Refer to the String
    /// Template section of the NADI book.
    #[node_func(safe = false)]
    fn render(
        node: &NodeInner,
        /// String template to render
        template: &Template,
        /// if render fails keep it as it is instead of exiting
        safe: bool,
    ) -> Result<String, String> {
        let text = if safe {
            node.render(template)
                .unwrap_or_else(|_| template.original().to_string())
        } else {
            node.render(template).map_err(|e| e.to_string())?
        };
        Ok(text)
    }
```

```rust
    /// Render from network attributes
    #[network_func(safe = false)]
    fn render(
        network: &Network,
        /// Path to the template file
        template: &Template,
        /// if render fails keep it as it is instead of exiting
        safe: bool,
    ) -> Result<String, String> {
        let text = if safe {
            network
                .render(template)
                .unwrap_or_else(|_| template.original().to_string())
        } else {
            network.render(template).map_err(|e| e.to_string())?
        };
        Ok(text)
    }
```
