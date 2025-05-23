# Attributes

There are 3 kind of attributes in nadi. Environment, Network and Node attributes. as their name suggests environment attributes are general attributes available in the current context. Network attributes are associated with the currenly loaded network. and node attributes are associated with each nodes.

nadi has special syntax where you can get/set attributes for multiple nodes at once.

```task run
network load_str("a -> b\n b -> d\n c -> d\n");
# environmental attribute
env.someattr = 123;
env.other = 1998-12-21;
env array(someattr, other)
# network attribute
network.someattr = true;
network.someattr
# node attributes
node.someattr = "string val";

node.someattr
```


like you saw with the array function, variables used are inferred as the attributes of the current env/network/node task.

you can use attributes from outside of current task type in some cases like:

- env/network variables can be used anywhere
- node variables are valid in node tasks
- node tasks has special variables types like `inputs` and `output`

```task run
network load_str("a -> b\n b -> d\n c -> d\n");
# environmental attribute
env.someattr = 123;
env.other = 1998-12-21;
# network attribute
network.someattr = true;

# using network attr in env task
env array(network.someattr, other)

# using nodes in network task
network nodes.NAME
```

Similarly inputs:
```task run
network load_str("a -> b\n b -> d\n c -> d\n");

node inputs.NAME
```

Refer to the network diagram below to verify the output are correct:

```task run image ../output/attrs-simp.svg
network load_str("a -> b\n b -> d\n c -> d\n");
!network svg_save("./output/attrs-simp.svg")
```
