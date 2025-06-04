# Environment Functions

Environment functions are like any normal function on programming languages that take arguments and run code. In Nadi environment functions can be called from any scope. For example, if a node function and environement function share the same name, then in a node task node function is called, but in network task env function is called.

Environment functions are denoted in the plugins with `#[env_func]` macro. All the arguments this function takes need to be provided by user or through default values.

Here is an example of a environment function `and` in plugin `logic`.

```rust
    /// Boolean and
    #[env_func]
    fn and(
        /// List of attributes that can be cast to bool
        #[args]
        conds: &[Attribute],
    ) -> bool {
        let mut ans = true;
        for c in conds {
            ans = ans && bool::from_attr_relaxed(c).unwrap();
        }
        ans
    }
```

This function can be called inside the task system in different context like follows:

```task run
env and(true, 12)
env.something = false
env and(something, true) == (something & true)

network and(what?, and(true, true))
```

