// custom syntax highlight for the nadi related syntax
const NADI_INTERNAL_FUNCS = "count attr_fraction_svg csv_load_ts csv_count_na csv_data_blocks_svg export_svg table_to_svg check_negative gis_load_attrs gis_save_connections gis_save_nodes plot_timeseries load_file subset save_file save_csv table_to_markdown count_node_if min_year exists command run parallel command sr_count sr_list sr_dtype sr_len sr_mean sr_sum set_series sr_to_array set_nodesize_attrs print_node print_attr_csv render render ts_count ts_list ts_dtype ts_len ts_print ts_print_csv fancy_print load_csv_fill export_map save_graphviz load_attrs print_all_attrs print_attrs set_attrs get_attr has_attr first_attr set_attrs_ifelse set_attrs_render load_toml_render set_attrs set_attrs_render calc_ts_error calc_ts_errors calc_attr_error debug echo clip";
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

const NODE_LIST_OR_PATH = {
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
};

hljs.registerLanguage("task", (hljs) => ({
    name: "Task",
    keywords: {
	keyword: "help node network sequential inverse inputsfirst outputfirst",
	built_in: NADI_INTERNAL_FUNCS,
	literal: "false true",
    },
    contains: [
	STRING_TEMPLATE_MODE,
	hljs.HASH_COMMENT_MODE,
	hljs.C_NUMBER_MODE,
	NODE_LIST_OR_PATH,
    ],
}));

// for function signatures saved in plugin help system
hljs.registerLanguage("signature", (hljs) => ({
    name: "Signature",
    aliases: ["sig"],
    keywords: {
	keyword: "Bool String Integer Float Date Time DateTime Array Table PathBuf Template Attribute AttrMap Option str bool",
	built_in: NADI_INTERNAL_FUNCS,
	literal: "false true",
    },
    contains: [
	STRING_TEMPLATE_MODE,
	{
	    begin: '^(node|network|env)',
	    className: "deletion",
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
		    begin: '[<>^]',
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
    end: '\\)',
    keywords: {
	// functions from rust_lisp + stp are keyword
	keyword: "print is_null is_number is_symbol is_boolean is_procedure is_pair car cdr cons list nth sort reverse map filter length range hash hash_get hash_set st+num st+has st+var",
	// functions in std lisp/elisp are built_in
	built_in: "interactive format defun define set defmacro lambda quote list cons loop let message begin cond if and or apply eval not",
	literal: "t nil",
    },
};

LISP_LIST.contains = [
    LISP_LIST,
    hljs.QUOTE_STRING_MODE,
    hljs.C_NUMBER_MODE,
    hljs.COMMENT(';', '$'),
    {
	begin: "'",
	className: 'regexp',
	contains: [LISP_LIST],
    },
]


// since current hightlight.js used by mdbook doesn't have lisp, and
// the one in github doesn't look that good anyway
hljs.registerLanguage("elisp", (hljs) => ({
    name: "emacs-lisp",
    contains: [
	LISP_LIST
    ],
}));

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


hljs.registerLanguage("string-template-markdown", (hljs) => ({
    name: "String Template Markdown",
    aliases: [ 'stp-md' ],
    contains: [
	{
	    begin: '^<!-- .* -->$',
	    className: 'comment',
	    contains: [
		{
		    begin: '---8<---:[[]',
		    end: '[]]',
		    contains: [ NODE_LIST_OR_PATH]
		}
	    ]
	},
	{
	    begin: '^',
	    end: '$',
	    subLanguage: 'string-template'
	},
    ],
}));

hljs.initHighlightingOnLoad();
