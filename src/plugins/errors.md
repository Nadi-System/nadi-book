# Node Functions
## calc_ts_error {#node.calc_ts_error}
```sig
node errors.calc_ts_error(
    ts1: '& str',
    ts2: '& str',
    error: '& str' = "rmse",
    outattr: 'Option < & str >',
    print: 'bool' = true
)
```

Calculate Error from two timeseries values in the node

It calculates the error between two timeseries values from the node

### Arguments:
- ts1: String      Timeseries value to use as actual value
- ts2: String      Timeseries value to be used to calculate the error
- error: String    Error type: rmse/nrmse/abserr/nse [default: rmse]
- outattr: String  Attribute to save the output on [default: ERROR]
- print: bool      Print the output to stdout [default: false]
## calc_ts_errors {#node.calc_ts_errors}
```sig
node errors.calc_ts_errors(
    ts1: '& String',
    ts2: '& String',
    errors: '& [String]' = ["rmse"],
    outattr: '& String' = "ERROR",
    print: 'bool' = false
)
```

Calculate Error from two timeseries values in the node

It calculates the error between two timeseries values from the node.

Arguments:
- ts1: String      Timeseries value to use as actual value
- ts2: String      Timeseries value to be used to calculate the error
- error: String    Error type: rmse/nrmse/abserr/nse [default: rmse]
- outattr: String  Attribute to save the output on [default: ERROR]
- print: bool      Print the output to stdout [default: false]
# Network Functions
## calc_attr_error {#network.calc_attr_error}
```sig
network errors.calc_attr_error(
    attr1: 'String',
    attr2: 'String',
    error: 'String' = "rmse"
)
```

Calculate Error from two attribute values in the network

It calculates the error using two attribute values from all the nodes.

Arguments:
- attr1: String    Attribute value to use as actual value
- attr2: String    Attribute value to be used to calculate the error
- error: String    Error type: rmse/nrmse/abserr/nse [default: rmse]
