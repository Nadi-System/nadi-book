# Env Functions
## ifelse {#env.ifelse}
```sig
env logic.ifelse(
    cond: 'bool',
    iftrue: 'Attribute',
    iffalse: 'Attribute'
)
```

### Arguments
- `cond: 'bool'` => Attribute that can be cast to bool value
- `iftrue: 'Attribute'` => Output if `cond` is true
- `iffalse: 'Attribute'` => Output if `cond` is false

Simple if else condition
## gt {#env.gt}
```sig
env logic.gt(a: '& Attribute', b: '& Attribute')
```

### Arguments
- `a: '& Attribute'` => first attribute
- `b: '& Attribute'` => second attribute

Greater than check
## lt {#env.lt}
```sig
env logic.lt(a: '& Attribute', b: '& Attribute')
```

### Arguments
- `a: '& Attribute'` => first attribute
- `b: '& Attribute'` => second attribute

Greater than check
## eq {#env.eq}
```sig
env logic.eq(a: '& Attribute', b: '& Attribute')
```

### Arguments
- `a: '& Attribute'` => first attribute
- `b: '& Attribute'` => second attribute

Greater than check
## and {#env.and}
```sig
env logic.and(*conds)
```

### Arguments
- `*conds` => List of attributes that can be cast to bool

Boolean and
## or {#env.or}
```sig
env logic.or(*conds)
```

### Arguments
- `*conds` => List of attributes that can be cast to bool

boolean or
## not {#env.not}
```sig
env logic.not(cond: 'bool')
```

### Arguments
- `cond: 'bool'` => attribute that can be cast to bool

boolean not
## all {#env.all}
```sig
env logic.all(vars: '& [bool]')
```

### Arguments
- `vars: '& [bool]'` => 

check if all of the bool are true
## any {#env.any}
```sig
env logic.any(vars: '& [bool]')
```

### Arguments
- `vars: '& [bool]'` => 

check if any of the bool are true
