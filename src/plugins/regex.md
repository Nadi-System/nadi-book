# Env Functions
## str_match {#env.str_match}
```sig
env regex.str_match(pattern: 'Regex', attr: '& str')
```

### Arguments
- `pattern: 'Regex'` => Regex pattern to match
- `attr: '& str'` => attribute to check for pattern

Check if the given pattern matches the value or not
## str_replace {#env.str_replace}
```sig
env regex.str_replace(
    pattern: 'Regex',
    attr: '& str',
    rep: '& str'
)
```

### Arguments
- `pattern: 'Regex'` => Regex pattern to match
- `attr: '& str'` => attribute to replace
- `rep: '& str'` => replacement string

Replace the occurances of the given match
## str_find {#env.str_find}
```sig
env regex.str_find(pattern: 'Regex', attr: '& str')
```

### Arguments
- `pattern: 'Regex'` => Regex pattern to match
- `attr: '& str'` => attribute to check for pattern

Find the given pattern in the value
## str_find_all {#env.str_find_all}
```sig
env regex.str_find_all(pattern: 'Regex', attr: '& str')
```

### Arguments
- `pattern: 'Regex'` => Regex pattern to match
- `attr: '& str'` => attribute to check for pattern

Find all the matches of the given pattern in the value
## str_count {#env.str_count}
```sig
env regex.str_count(pattern: 'Regex', attr: '& str')
```

### Arguments
- `pattern: 'Regex'` => Regex pattern to match
- `attr: '& str'` => attribute to check for pattern

Count the number of matches of given pattern in the value
