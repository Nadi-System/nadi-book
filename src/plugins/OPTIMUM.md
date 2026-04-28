# Env Functions
## uniform_crossing_over {#env.uniform_crossing_over}
```sig
env OPTIMUM.uniform_crossing_over(
    parent1: 'Vec < Attribute >',
    parent2: 'Vec < Attribute >',
    prob: 'f64' = 0.5,
    seed: 'Option < u64 >'
)
```

**Arguments:**
- `parent1: 'Vec < Attribute >'` => 
- `parent2: 'Vec < Attribute >'` => 
- `prob: 'f64' = 0.5` => 
- `seed: 'Option < u64 >'` => 

Crossing over of linear genes from two parent given uniform probability

This method gives the same probability for each gene to be
from one or the other parent.
