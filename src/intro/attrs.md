# Attributes
Attributes are [TOML](https://toml.io/en/) like values. They can be one of the following types:

| Type Name     | Rust Type         | Description                             |
|---------------|-------------------|-----------------------------------------|
| Bool          | `bool`            | Boolean values (`true` or `false`)      |
| String        | `RString`         | Quoted String Values                    |
| Integer       | `i64`             | Integer values (numbers)                |
| Float         | `f64`             | Float values (numbers with decimals)    |
| Date          | `Date`            | Date (`yyyy-mm-dd` formatted)           |
| Time          | `Time`            | Time (`HH:MM`, `HH:MM:SS` formatted)    |
| DateTime      | `DateTime`        | Date and Time separed by ` ` or `T`     |
| Array         | `RVec<Attribute>` | List of any attribute values            |
| Table/AttrMap | `AttrMap`         | Key Value pairs of any attribute values |


You can write attributes directly into the task system to assign them, use them in functions. You can also load attributes from a file into the env/node/network.


Following are some example values that are evaluated as literal values (themselves).
```task run
true
"string value"
12.21
```

Please note that, the date and time by themselves are not valid in a tasks file. While they are valid attributes in a ".toml" file or while parsing attributes, in a task file they are interpreted as integer expression and integer range.
```task run
2024-12-21
12:24
12:04:24
```

You can assign attribute values to variable names. We will discuss nodes and network later, but let's assign environmental values:


```task run
env.river = "Ohio River"
env.river
```

Besides writing them in the code directly, you can also load attributes from a file.
Example Attribute File that can be loaded:
```toml
{{#include ../data/attrs/ohio.toml}}
```

Here loading the files we can see only ohio has the attributes loaded
```task run
! network load_file("./data/mississippi.net")
node[ohio] load_attrs("./data/attrs/{NAME}.toml")
nodesmap.outlet
```

With plugins, you can load attributes from different file types.
