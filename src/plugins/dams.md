# Node Functions
## count_dams {#node.count_dams}
```sig
node dams.count_dams (outvar: '& str' = "DAMS_COUNT")
```

Count the number of dams upstream at each point
## count_gages {#node.count_gages}
```sig
node dams.count_gages (outvar: '& str' = "GAGES_COUNT")
```

Count the number of gages upstream at each point
## min_year {#node.min_year}
```sig
node dams.min_year (yearattr: '& str', write_var: '& str' = "MIN_YEAR")
```

Propagage the minimum year downstream
