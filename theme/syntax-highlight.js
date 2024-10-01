// custom syntax highlight for the nadi related syntax
hljs.registerLanguage("task", (hljs) => ({
    name: "Task",
    keywords: {
	keyword: "node network sequential inverse inputsfirst outputfirst",
	built_in: "command show_ts load_attrs set_attrs_render print_attrs set_attrs render list_ts print_all_attrs dummy_ts render set_attrs parallel set_attrs_render debug",
	literal: "false true",
    },
    contains: [
	hljs.inherit(
	    hljs.QUOTE_STRING_MODE,
	    // assume strings are also templates, and highlight them
	    // that way actually they are used as template or not
	    // depends on the function (TODO maybe use different data
	    // type for templates something like: `t""`)
	    {
		contains : [
		    {
			begin: '\\{',
			end: '\\}',
			subLanguage: "string-template"
		    }
		]
	    }
	),
	hljs.HASH_COMMENT_MODE,
	hljs.C_NUMBER_MODE,
	{
	    // This is for the nodes list or path for the node functions
	    scope: "meta",
	    begin: '\\[',
	    end: '\\]',
	    className:"string",
            excludeBegin: true,
            excludeEnd: true,
	    contains: [
		hljs.HASH_COMMENT_MODE,
		hljs.QUOTE_STRING_MODE,
		{
		    scope: "meta",
		    begin: '->',
		    className:"built_in",
		},
		{
		    scope: "meta",
		    begin: ',',
		    className:"built_in",
		},
	    ]
	},
    ],
}));

// network connections comments and node -> node syntax
hljs.registerLanguage("network", (hljs) => ({
    name: "Network",
    aliases: [ 'net' ],
    contains: [
	hljs.QUOTE_STRING_MODE,
	hljs.HASH_COMMENT_MODE,
	{
	    scope: "meta",
	    begin: '->',
	    className:"built_in",
	},
    ]
}));

// syntax for the table template format
hljs.registerLanguage("table", (hljs) => ({
    name: "Table",
    aliases: [ 'tab' ],
    contains: [
	hljs.QUOTE_STRING_MODE,
	hljs.HASH_COMMENT_MODE,
	{
	    scope: "meta",
	    begin: /^/,
	    end: /$/,
	    className:"title",
	    contains: [
		{
		    begin: '[<>]',
		    className: "built_in",
		},
		{
		    begin: '=>',
		    end: '$',
		    excludeBegin: true,
		    className:"name",
		    subLanguage: "string-template"
		},

	    ]
	},
    ]
}));

// network connections comments and node -> node syntax
hljs.registerLanguage("string-template", (hljs) => ({
    name: "String Template",
    aliases: [ 'stp', 'st', 'template' ],
    contains: [
	hljs.QUOTE_STRING_MODE,
	{
	    scope: "meta",
	    begin: '{',
	    end: '[?]?}',
            excludeBegin: true,
            excludeEnd: true,
	    className:"regexp",
	    contains: [
		{
		    scope: "meta",
		    begin: ':',
		    end: '\\(',
		    excludeBegin: true,
		    excludeEnd: true,
		    keywords: "f case calc count repl take trim comma group q",
		    // if the function is not a known transformer for string-template
		    className:"deletion",
		},
		{
		    scope: "meta",
		    begin: ',',
		    className:"built_in",
		},
	    ]
	},
    ]
}));

hljs.initHighlightingOnLoad();
