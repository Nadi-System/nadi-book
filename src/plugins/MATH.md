# Env Functions
## powi {#env.powi}
```sig
env MATH.powi(value: 'f64', power: 'i64')
```

**Arguments:**
- `value: 'f64'` => base value
- `power: 'i64'` => 

Integer power

```task
env assert_eq(powi(10.0, 2), 100.0)
```
## powf {#env.powf}
```sig
env MATH.powf(value: 'f64', power: 'f64')
```

**Arguments:**
- `value: 'f64'` => base value
- `power: 'f64'` => 

Float power

```task
env assert_eq(powf(100.0, 0.5), 10.0)
```
## exp {#env.exp}
```sig
env MATH.exp(value: 'f64')
```

**Arguments:**
- `value: 'f64'` => 

Exponential

```task
env assert_eq(log(exp(5.0)), 5.0)
```
## sqrt {#env.sqrt}
```sig
env MATH.sqrt(value: 'f64')
```

**Arguments:**
- `value: 'f64'` => 

Square Root
```task
env assert_eq(sqrt(25.0), 5.0)
```
## log {#env.log}
```sig
env MATH.log(value: 'f64', base: 'Option < f64 >')
```

**Arguments:**
- `value: 'f64'` => 
- `base: 'Option < f64 >'` => 

Logarithm of a value, natural if base not given

```task
env assert_eq(log(exp(2.0)), 2.0)
env assert_eq(log(2.0, 2.0), 1.0)
```
