# Documentation for NADI System

This repository contains the user documentation for the NADI System. This is hosted at: https://nadi-system.github.io/


# Building

To build the documentation, you have to install `mdbook` and use the `mdbook build` command. You can use `mdbook serve` to serve the documentation locally. Refer to [`mdbook` documentation](https://rust-lang.github.io/mdBook/) for more details on installation and use of `mdbook` as well as `mdbook` plugins.

This book uses the following `preprocessor` and `backend`s:
- `nadi` preprocessor takes the `task` code blocks and processes them according to the arugments after that. You can use `clip()` function to print `----8<----` string that can be used to clip the output of the tasks so the preprocessor can ignore those parts.
  - `task run` is run in isolated context and results are inserted after the code block.
  - `task run continue` is run with previous context, which is useful when you are writing a chapter with segments that are related to each other.
  - `task run image <path>` runs the task in isolated context, and instead of verbose output, inserts the image from `<path>` as the output. This is useful if your task writes to an image file. You can use `svg` instead of `image` as well.
  - `task run file` will interpret the output as file path and upload the contents of that file.
  - `task run markdown` runs the task in isolated context, and inserts the results interpreted as markdown. This allows you to generate markdown code from tasks and load them into the documentation as contents.
- `typst` backend is for generating the `typst` code for documentation. I was using the [`LegNeato/mdbook-typst`](https://github.com/LegNeato/mdbook-typst) earlier, but it is outdated and required a lot of manual edits. So I wrote a basic backend that writes a `typst` file [Atreyagaurav/mdbook-nadi-typst](https://github.com/Atreyagaurav/mdbook-nadi-typst). This has to be cloned and build locally, and put in your `PATH` if you want to generate `typst`, if not remove/comment the line `[output.typst]` in `book.toml`.
- `linkcheck` backend checks for dead links and other problems. Install `mdbook-linkcheck` using `cargo` for this to work.
