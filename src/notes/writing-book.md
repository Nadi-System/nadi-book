# Writing this Book

I'm used to `emacs`'s `org-mode`, where you can evaluate code and show
output and all those things. Like `markdown` in steroids.

`mdbook` seems to have some of those functionality in it as
well. Though I think `emacs`'s extension through `elisp` is lot more
flexible and easier to extend. `mdbook` supporting custom
preprocessors and renderer means we can extend it as well.

In the process of writing this book. I made the following things.

## Syntax Highlight for NADI specific syntax

`mdbook` uses `highlight.js` to syntax highlight the code blocks in
it. And since nadi system has a lot of its own syntax for string
templates, task system, table system, network system etc. I wanted
syntax highlight for those things. Although the attribute files are
subset of `TOML` format, so we have syntax highlight for
it. Everything else needed a custom code.

Following the comments in this [github
issue](https://github.com/rust-lang/mdBook/issues/657) led me to find
a workaround for the custom syntax hightlight. I don't know for how
long it will work, but this works well for now.

Basically I am using the custom JS feature of `mdbook` like:

```toml
[output.html]
additional-js = ["theme/syntax-highlight.js"]
```

To insert custom highlight syntax. For example adding the syntax
highlight for network text is:

```js
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
```

The syntax for network is really simple, for others (`task`, `table`,
`string-template`, etc) refer to the `theme/syntax-highlight.js` file
in the repository for this book.  <!-- TODO add link -->

After registering all the languages, you re-initialize the `highlight.js`:
```js
hljs.initHighlightingOnLoad();
```

## `mdbook-nadi` preprocessor
Instead of just showing the syntax of how to use the task system, I
wanted to also show the output of the examples for readers. So I
started this with writing some `elisp` code to run the text in
selection and then copying the output to clipboard that I could paste
in output block. It was really easy in emacs.

Following code takes the selection, saves them in temporary tasks file, runs them and then puts the output in the clipboard that I can paste manually.
```elisp
(defun nadi-run-tasks (BEG END)
  (interactive "r")
  (let ((tasks-file (make-temp-file "tasks-")))
    (write-region BEG END tasks-file)
    (let ((output '(shell-command-to-string (format "nadi %s" tasks-file))))
	  (message output)
	  (kill-new output)
	  (delete-file tasks-file))))
```

But this is manual process with a bit of automation. So I wanted a
better solution, and that's where the `mdbook` preprocessor comes in.

With the `mdbook-nadi` preprocessor, I can extract the code blocks,
run it, and insert the contents just below the code block as output.

Once I had a working prototype for this, I also started adding support
for rendering string templates, and generating tables along with the
task system.

### String templates
For string templates, write the templates in `stp` blocks like below that will have the syntax hightlight.

```stp
Hi my name is {name}.
```

If you add `run` into it, it'll run the template with any `key=val` pairs provided after run.

Basically writing the following in the `mdbook` markdown:

    ```stp run name=John
    Hi my name is {name}.
    ```

Will become:

---

```stp run name=John
Hi my name is {name}.
```

---

### Tasks
For tasks, similary write a block with `task` as language. You can use
`!` character at the start of the line to hide it in the view. Use
them for essential code that are needed for results but are not the
current focus. And when you add `run` it'll run and show the output.

    ```task run
    !network load_file("data/mississippi.net")
    node render("Node {NAME}")
    ```


---
```task run
!network load_file("data/mississippi.net")
node render("Node {NAME}")
```
---

### Tables
The implementation for tables are little weird right now, but it works. Since we need to be able to load network, and perform actions before showing a table.

So the current implementation takes the hidden lines using `!`and runs them as task system, with additional task of rendering the table at the end.

Example:

    ```table run markdown
    !network load_file("./data/mississippi.net")
    <Name => {_NAME:repl(-, ):case(title)}
    ^Ind => =(+ (st+num 'INDEX) 1)
    >Order => {ORDER}
    ```

Becomes:

---
```table run markdown
!network load_file("./data/mississippi.net")
<Name => {_NAME:repl(-, ):case(title)}
^Ind => =(+ (st+num 'INDEX) 1)
>Order => {ORDER}
```
---


I'd like to refine this further.


Task can be used to generate markdown in the same way as the tables
can:

For example `task run` of this:
```task run
network load_file("./data/mississippi.net")
network table_to_markdown(template="
<Name => {_NAME:repl(-, ):case(title)}
^Ind => =(+ (st+num 'INDEX) 1)
>Order => {ORDER}
")
```

If you do `task run markdown` then:
```task run markdown
network load_file("./data/mississippi.net")
network table_to_markdown(template="
<Name => {_NAME:repl(-, ):case(title)}
^Ind => =(+ (st+num 'INDEX) 1)
>Order => {ORDER}
")
```

Which means it can be used for other things:
```task run markdown
network load_file("./data/mississippi.net");
network echo("**Details about the Nodes:**")
network echo(render_nodes("
=(+ (st+num 'INDEX) 1). {_NAME:repl(-, ):case(title)} River
"))
```

You can also use the same method to insert images like this, at the end of your tasks, so that the image generated by the tasks can be inserted here.
```task run image
# do some tasks
network echo("Some other output form your tasks")
network clip()
network echo("../images/ohio-low.svg")
```
