// custom syntax highlight for the nadi related syntax

const STRING_TEMPLATE_MODE = hljs.inherit(
    hljs.QUOTE_STRING_MODE,
    // assume strings are also templates, and highlight them
    // that way actually they are used as template or not
    // depends on the function (TODO maybe use different data
    // type for templates something like: `t""`)
    {
	subLanguage: "string-template"
    },
);

hljs.registerLanguage("task", (hljs) => ({
    name: "Task",
    keywords: {
	keyword: "help node network sequential inverse inputsfirst outputfirst",
	built_in: "command show_ts load_attrs set_attrs_render print_attrs set_attrs render list_ts print_all_attrs dummy_ts render set_attrs parallel set_attrs_render debug",
	literal: "false true",
    },
    contains: [
	STRING_TEMPLATE_MODE,
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

// for function signatures saved in plugin help system
hljs.registerLanguage("signature", (hljs) => ({
    name: "Signature",
    aliases: ["sig"],
    keywords: {
	keyword: "Bool String Integer Float Date Time DateTime Array Table PathBuf Template Attribute AttrMap",
	built_in: "Option",
    },
    contains: [
	STRING_TEMPLATE_MODE,
	{
	    begin: '^[a-zA-Z_]+',
	    end: '\\(',
	    excludeEnd: true,
	    className: "addition",
	}
    ]

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

// syntax highlight for the string template system

const IDENTIFIER = '[a-zA-Z_]+';

// this breaks the syntax, not used right now
const DATE_TIME_FMT = {
    contains: [
	{
	    begin:'[%][a-zA-Z]',
	    className: "string"
	}
    ]
};
const TRANSFORMER = {
    begin: ':[a-zA-Z_]+(.*?)',
    keywords: "f case calc count repl take trim comma group q",
    // if the function is not a known transformer for string-template
    className:"deletion",
    contains: [
	hljs.QUOTE_STRING_MODE,
	{
	    begin: '\\(',
	    end: '\\)',
	    excludeBegin: true,
	    excludeEnd: true,
	    className: "literal",
	}
    ]
}
const LISP_LIST = {
    begin: '\\(\\s*',
    end: '\\)'
};

LISP_LIST.contains = [
    LISP_LIST,
    hljs.QUOTE_STRING_MODE,
    hljs.C_NUMBER_MODE,
    hljs.COMMENT(';', '$'),
    {
	begin: "'",
	className: 'built_in',
    }
]

const LISP_EXPR = {
    scope: "meta",
    begin: '=\\(',
    end: '\\)',
    keywords: {
	// these are not working right now, idk why?
	keyword: "print is_null is_number is_symbol is_boolean is_procedure is_pair car cdr cons list nth sort reverse map filter length range hash hash_get hash_set truncate not apply eval",
	built_in: "st+num st+has st+var",
	literal: "nil t",
    },
    className: 'title',
    contains: [LISP_LIST]
};

const TEMPLATE_PART = {
    variants: [
	hljs.QUOTE_STRING_MODE,
	TRANSFORMER,
	LISP_EXPR,
	// DATE_TIME_FMT,
    ]
}
const TEMPLATE = {
    scope: "meta",
    begin: '{',
    end: '}',
    className:"regexp",
    contains: [
	TEMPLATE_PART,
	{
	    begin: '[?]',
	    className:"built_in",
	}
    ]
};
const CMD = {
    scope: "meta",
    begin: '[$]\\(',
    end: '\\)',
    className: 'deletion',
    contains: [
	hljs.QUOTE_STRING_MODE,
	{
	    begin: '--.*?\\s',
	    className: 'keyword',
	},
	{
	    begin: '-[a-zA-Z]\\s',
	    className: 'keyword',
	},
	TEMPLATE,
    ]
};

hljs.registerLanguage("string-template", (hljs) => ({
    name: "String Template",
    aliases: [ 'stp' ],
    contains: [
	{
	    variants: [
		TEMPLATE,
		LISP_EXPR,
		CMD,
	    ],
	},
	// this will make it so that the escaped braces don't get
	// caught with template
	{
	    begin: '\\\\{',
	    className: "addition",
	},
	{
	    begin: '\\\\}',
	    className: "addition",
	},
	{
	    begin: '\\\\"',
	    className: "addition",
	},
	{
	    begin: '\\\\\\\\',
	    className: "addition",
	}
    ]
}));

hljs.initHighlightingOnLoad();
