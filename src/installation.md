# Installation

Nadi System is a suite of software packages each have different installation methods. The packages are planned to be uploaded to `crates.io` or `pypi.org` later to make it easier to install. For now, you can get the source code using `git`, and using `cargo` build the packages with the following commands.

## NADI CLI

Assuming you have `git` and `cargo`,
```bash
git clone https://github.com/Nadi-System/nadi-cli
cd nadi-cli
cargo build --release
```

## NADI GUI

The git repo is named `nadi-help` but it will build the binaries for `nadi`, `nadi-help`, `nadi-editor`, etc. This repo and binary will be named `nadi-ide` on future versions.

Assuming you have `git` and `cargo`,
```bash
git clone https://github.com/Nadi-System/nadi-help
cd nadi-help
cargo build --release
```
