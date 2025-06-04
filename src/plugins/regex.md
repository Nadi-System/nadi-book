# Env Functions
## str_filter {#env.str_filter}
```sig
env regex.str_filter(attrs: 'Vec < String >', pattern: 'Regex')
```

### Arguments
- `attrs: 'Vec < String >'` => attribute to check for pattern
- `pattern: 'Regex'` => Regex pattern to match

Check if the given pattern matches the value or not
## str_match {#env.str_match}
```sig
env regex.str_match(attr: '& str', pattern: 'Regex')
```

### Arguments
- `attr: '& str'` => attribute to check for pattern
- `pattern: 'Regex'` => Regex pattern to match

Check if the given pattern matches the value or not

You can also use match operator for this
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
## str_find {#env.str_find}
```sig
env regex.str_find(attr: '& str', pattern: 'Regex')
```

### Arguments
- `attr: '& str'` => attribute to check for pattern
- `pattern: 'Regex'` => Regex pattern to match

Find the given pattern in the value
## str_find_all {#env.str_find_all}
```sig
env regex.str_find_all(attr: '& str', pattern: 'Regex')
```

### Arguments
- `attr: '& str'` => attribute to check for pattern
- `pattern: 'Regex'` => Regex pattern to match

Find all the matches of the given pattern in the value
## str_count {#env.str_count}
```sig
env regex.str_count(attr: '& str', pattern: 'Regex')
```

### Arguments
- `attr: '& str'` => attribute to check for pattern
- `pattern: 'Regex'` => Regex pattern to match

Count the number of matches of given pattern in the value
