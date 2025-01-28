# Node Functions
## calc_ts_error {#node.calc_ts_error}
```sig
node errors.calc_ts_error(
    ts1: '& str',
    ts2: '& str',
    error: '& str' = "rmse"
)
```

### Arguments
- `ts1: '& str'` => Timeseries value to use as actual value
- `ts2: '& str'` => Timeseries value to be used to calculate the error
- `error: '& str' = "rmse"` => Error type, one of rmse/nrmse/abserr/nse

Calculate Error from two timeseries values in the node

It calculates the error between two timeseries values from the node
## calc_ts_errors {#node.calc_ts_errors}
```sig
node errors.calc_ts_errors(
    ts1: '& String',
    ts2: '& String',
    errors: '& [String]'
)
```

### Arguments
- `ts1: '& String'` => Timeseries value to use as actual value
- `ts2: '& String'` => Timeseries value to be used to calculate the error
- `errors: '& [String]'` => Error types to calculate, one of rmse/nrmse/abserr/nse

Calculate Error from two timeseries values in the node

It calculates the error between two timeseries values from the node.
# Network Functions
## calc_attr_error {#network.calc_attr_error}
```sig
network errors.calc_attr_error(
    attr1: 'String',
    attr2: 'String',
    error: 'String' = "rmse"
)
```

### Arguments
- `attr1: 'String'` => Attribute value to use as actual value
- `attr2: 'String'` => Attribute value to be used to calculate the error
- `error: 'String' = "rmse"` => Error type, one of rmse/nrmse/abserr/nse

Calculate Error from two attribute values in the network

It calculates the error using two attribute values from all the nodes.
