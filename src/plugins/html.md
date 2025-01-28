# Network Functions
## export_map {#network.export_map}
```sig
network html.export_map(
    outfile: '& Path',
    template: 'Template',
    pagetitle: '& str' = "NADI Network",
    nodetitle: 'Template' = Template { original: "{_NAME}", parts: [Var("_NAME", "")] },
    connections: 'bool' = true
)
```

### Arguments
- `outfile: '& Path'` => 
- `template: 'Template'` => 
- `pagetitle: '& str' = "NADI Network"` => 
- `nodetitle: 'Template' = Template { original: "{_NAME}", parts: [Var("_NAME", "")] }` => 
- `connections: 'bool' = true` => 

Exports the network as a HTML map
