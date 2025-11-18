# Env Functions
## ifelse {#env.ifelse}
```sig
env LOGIC.ifelse(
    cond: 'bool',
    iftrue: 'Attribute',
    iffalse: 'Attribute'
)
```

**Arguments:**
- `cond: 'bool'` => Attribute that can be cast to bool value
- `iftrue: 'Attribute'` => Output if `cond` is true
- `iffalse: 'Attribute'` => Output if `cond` is false

Simple if else condition

This is similar to using the `if-else` expression, the
difference being the condition is relaxed. For example, for
`if-else` the condition should be true or false, but for this
function, the attribute can be anything that can be cast as
true or false. (e.g. 1 => true, 0 => false)

```task
env assert_eq(ifelse(true, 1, 2), 1)
env assert_eq(ifelse(false, 1, 2), 2)
env assert_eq(ifelse(100.0, 1, 2), 1)
env assert_eq(ifelse(true, 1, 2), if (true) {1} else {2})
```

There is a special syntax on the task system to do if-else
conditions, which should be preferred over this function for
easier readability.

```task
if (true) {
env.somevar = 12;
} else {
env.someothervar = 12;
}
env assert_eq(somevar, 12)
env assert_eq(someothervar?, false)
```
## gt {#env.gt}
```sig
env LOGIC.gt(a: '& Attribute', b: '& Attribute')
```

**Arguments:**
- `a: '& Attribute'` => first attribute
- `b: '& Attribute'` => second attribute

Greater than check

```task
env assert_eq(gt(1, 2), 1 > 2)
env assert_eq(gt(1.0, 20), 1.0 > 20)
```
## lt {#env.lt}
```sig
env LOGIC.lt(a: '& Attribute', b: '& Attribute')
```

**Arguments:**
- `a: '& Attribute'` => first attribute
- `b: '& Attribute'` => second attribute

Less than check

```task
env assert_eq(lt(1, 2), 1 < 2)
env assert_eq(lt(1.0, 20), 1.0 < 20)
```
## eq {#env.eq}
```sig
env LOGIC.eq(a: '& Attribute', b: '& Attribute')
```

**Arguments:**
- `a: '& Attribute'` => first attribute
- `b: '& Attribute'` => second attribute

Equality than check

```task
env assert_eq(eq(1, 2), 1 == 2)
env assert_eq(eq(2.0, 2.0), 2.0 == 2.0)
env assert_eq(eq(2.0, 2), 2.0 == 2)
```
## and {#env.and}
```sig
env LOGIC.and(*conds)
```

**Arguments:**
- `*conds` => List of attributes that can be cast to bool

Boolean and

Similar to the operator `&` but the values are cast to boolean

```task
env assert_eq(and(true, true), true)
env assert_eq(and(true, false), false)
env assert_eq(and(true, false), false & true)
```
## or {#env.or}
```sig
env LOGIC.or(*conds)
```

**Arguments:**
- `*conds` => List of attributes that can be cast to bool

boolean or

Similar to the operator `|` but the values are cast to boolean

```task
env assert_eq(or(true, false), true)
env assert_eq(or(false, false), false)
env assert_eq(or(true, false), false | true)
```
## not {#env.not}
```sig
env LOGIC.not(cond: 'bool')
```

**Arguments:**
- `cond: 'bool'` => attribute that can be cast to bool

boolean not

Similar to the operator `!` but the values are cast to boolean
```task
env assert_eq(not(true), false)
env assert_eq(not(false), true)
env assert_eq(not(true), !true)
env assert_eq(not(false), !false)
```
## all {#env.all}
```sig
env LOGIC.all(vars: '& [bool]')
```

**Arguments:**
- `vars: '& [bool]'` => 

check if all of the bool are true

```task
env assert_eq(all([true]), true)
env assert_eq(all([false, true]), false)
env assert_eq(all([true, true]), true)
env assert_eq(all([false]), false)
```
## any {#env.any}
```sig
env LOGIC.any(vars: '& [bool]')
```

**Arguments:**
- `vars: '& [bool]'` => 

check if any of the bool are true

```task
env assert_eq(any([true]), true)
env assert_eq(any([false, true]), true)
env assert_eq(any([false, false]), false)
env assert_eq(any([false]), false)
```
