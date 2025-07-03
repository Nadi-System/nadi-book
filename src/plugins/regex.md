# Env Functions
## str_filter {#env.str_filter}
```sig
env regex.str_filter(attrs: 'Vec < String >', pattern: 'Regex')
```

### Arguments
- `attrs: 'Vec < String >'` => attribute to check for pattern
- `pattern: 'Regex'` => Regex pattern to match

Filter from the string list with only the values matching pattern

```task
env assert_eq(str_filter(["abc", "and", "xyz"], "^a"), ["abc", "and"])
```
## str_match {#env.str_match}
```sig
env regex.str_match(attr: '& str', pattern: 'Regex')
```

### Arguments
- `attr: '& str'` => attribute to check for pattern
- `pattern: 'Regex'` => Regex pattern to match

Check if the given pattern matches the value or not

You can also use match operator for this

```task
env assert_eq(str_match("abc", "^a"), true)
env assert_eq(str_match("abc", "^a"), "abc" match "^a")
```
## str_replace {#env.str_replace}
```sig
env regex.str_replace(
    attr: '& str',
    pattern: 'Regex',
    rep: '& str'
)
```

### Arguments
- `attr: '& str'` => original string
- `pattern: 'Regex'` => Regex pattern to match
- `rep: '& str'` => replacement string

Replace the occurances of the given match

```task
env assert_eq(str_replace("abc", "^a", 2), "2bc")
env assert_eq(str_replace("abc", "[abc]", 2), "222")
```
## str_find {#env.str_find}
```sig
env regex.str_find(attr: '& str', pattern: 'Regex')
```

### Arguments
- `attr: '& str'` => attribute to check for pattern
- `pattern: 'Regex'` => Regex pattern to match

Find the given pattern in the value

```task
env assert_eq(str_find("abc", "^[ab]"), "a")
```
## str_find_all {#env.str_find_all}
```sig
env regex.str_find_all(attr: '& str', pattern: 'Regex')
```

### Arguments
- `attr: '& str'` => attribute to check for pattern
- `pattern: 'Regex'` => Regex pattern to match

Find all the matches of the given pattern in the value

```task
env assert_eq(str_find_all("abc", "[ab]"), ["a", "b"])
```
## str_count {#env.str_count}
```sig
env regex.str_count(attr: '& str', pattern: 'Regex')
```

### Arguments
- `attr: '& str'` => attribute to check for pattern
- `pattern: 'Regex'` => Regex pattern to match

Count the number of matches of given pattern in the string

```task
env assert_eq(str_count("abc", "[ab]"), 2)
```
## str_split {#env.str_split}
```sig
env regex.str_split(
    attr: '& str',
    pattern: 'Regex',
    limit: 'Option < usize >'
)
```

### Arguments
- `attr: '& str'` => String to split
- `pattern: 'Regex'` => Regex pattern to split with
- `limit: 'Option < usize >'` => Limit the split to maximum number

Split the string with the given pattern

```task
env assert_eq(str_split("abc", "^[ab]"), ["", "bc"])
```
