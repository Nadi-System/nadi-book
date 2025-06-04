# Attributes
Attributes are TOML like values. They can be one of the following types:

| Type Name | Rust Type         | Description                             |
|-----------|-------------------|-----------------------------------------|
| Bool      | `bool`            | Boolean values (`true` or `false`)      |
| String    | `RString`         | Quoted String Values                    |
| Integer   | `i64`             | Integer values (numbers)                |
| Float     | `f64`             | Float values (numbers with decimals)    |
| Date      | `Date`            | Date (`yyyy-mm-dd` formatted)           |
| Time      | `Time`            | Time (`HH:MM`, `HH:MM:SS` formatted)    |
| DateTime  | `DateTime`        | Date and Time separed by ` ` or `T`     |
| Array     | `RVec<Attribute>` | List of any attribute values            |
| Table     | `AttrMap`         | Key Value pairs of any attribute values |


You can write attributes directly into the task system to assign them, use them in functions. You can also load attributes from a file into the node/network.

Example Attribute File:
```toml
{{#include ../data/attrs/ohio.toml}}
```
