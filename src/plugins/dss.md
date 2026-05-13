# Env Functions
## list_catalog {#env.list_catalog}
```sig
env dss.list_catalog(dssfile: 'String', paths: 'String' = "/*/*/*/*/*/*/")
```

**Arguments:**
- `dssfile: 'String'` => 
- `paths: 'String' = "/*/*/*/*/*/*/"` => 

List the catalog of the dss file

env list_catalog("dsslib/routed-main-stem.dss")
## load_series {#env.load_series}
```sig
env dss.load_series(dssfile: 'String', path: 'String')
```

**Arguments:**
- `dssfile: 'String'` => 
- `path: 'String'` => 


## save_series {#env.save_series}
```sig
env dss.save_series(
    series: '& Series',
    dssfile: 'String',
    path: 'String',
    start_date: 'String' = "1990-01-01",
    start_time: 'String' = "12:00",
    delta_minute: 'i64' = 1440
)
```

**Arguments:**
- `series: '& Series'` => 
- `dssfile: 'String'` => 
- `path: 'String'` => 
- `start_date: 'String' = "1990-01-01"` => start date of the series
- `start_time: 'String' = "12:00"` => start time of the series
- `delta_minute: 'i64' = 1440` => delta time in minutes


