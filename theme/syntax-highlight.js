// custom syntax highlight for the nadi related syntax
hljs.registerLanguage("task", (hljs) => ({
    name: "Task",
    keywords: {
	keyword: "node network sequential inverse inputsfirst outputfirst",
	built_in: "command show_ts load_attrs set_attrs_render print_attrs set_attrs render list_ts print_all_attrs dummy_ts render set_attrs parallel set_attrs_render debug",
	literal: "false true",
    },
    contains: [
	hljs.QUOTE_STRING_MODE,
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
		    end: '',
		    className:"built_in",
		},
		{
		    scope: "meta",
		    begin: ',',
		    end: '',
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
	    end: '',
	    className:"built_in",
	},
    ]
}));

hljs.initHighlightingOnLoad();
