# Network Functions
## plot_timeseries {#network.plot_timeseries}
```sig
network gnuplot.plot_timeseries (
    csvfile:'Template',
    datecol:'&str',
    datacol:'&str',
    outfile:'&Path',
    timefmt:'&str'="%Y-%m-%d",
    config:'&GnuplotConfig'=GnuplotConfig{outfile:None,
    terminal:None,
    csv:false,
    preamble:""},
    skip_missing:'bool'=false
)
```

Generate a gnuplot file that plots the timeseries data in the network
