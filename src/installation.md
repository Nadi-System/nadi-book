# Installation

Nadi System is a suite of software packages each have different installation methods. The packages are planned to be uploaded to `crates.io` or `pypi.org` later to make it easier to install. 

For now, you can either get the binaries compiled for different OS from the Releases page of the github repo. Or you can get the source code using `git`, and using `cargo` build the packages.

# Downloading Binaries
Goto the repo of each component and refer to the releases section for binaries of different versions.

- [nadi-system binaries](https://github.com/Nadi-System/nadi-system/releases)
- [nadi-gis binaries](https://github.com/Nadi-System/nadi-gis/releases)
- [plugins binaries](https://github.com/Nadi-System/nadi-plugins-rust/releases)

To setup the nadi-systme to load the plugins you have to place them inside the directory included in the `NADI_PLUGIN_DIRS` environmental variable. Refer to your Operating System's documentation on how to set environemental variables.

The binaries should be able to run directly without needing extra steps. If you get a security warnings because the binaries are not signed, you might have to ignore it.

# Building from Source
This is currently the preferred way of installing `nadi-system` (and `nadi-gis` for Linux and MacOS). Although it includes a bit more steps this makes sure the compiled program is compatible with your OS.

## Prerequisites
The prerequisites for building from source are:
- `git` [Optional]: to clone the repo, you can directly download zip from github
- `cargo`: To build the binaries from source.
- `gdal` [Optional]: Only for `nadi_gis` binary and plugin.

To install `git` refer to the instructions for your operating system from the [official page](https://git-scm.com/downloads).

For `cargo` follow the instructions to install rust toolsets for your operating system from the [official page](https://www.rust-lang.org/tools/install)

Installing `gdal` can be little complicated for windows. For Linux, use your package manager to install `gdal` and/or `gdal-dev` package. Mac users can also install `gdal` using [`homebrew`](https://brew.sh/). For windows, follow the instructions from [official website](https://gdal.org/en/stable/download.html#windows), after installation you might have to make some changes to environmental variables to let `cargo` know where your `gdal` binaries/header files are for the compilation to be successful. More details will be provided in the NADI GIS section.

If you use Linux or Mac (with homebrew), then the installation of prerequisites should be easy. But if you do not have the confidence to setup `gdal` for compiling `nadi_gis` use the binaries provided for them from the previous steps.

## NADI System
It will build the binaries for `nadi`, `nadi-ide`, `nadi-help`, `nadi-editor`, etc. `nadi` is the command line interface to run nadi tasks, parse/validate syntax etc. While `nadi-ide` is the program to graphically develop nadi tasks and run them.

Assuming you have `git` and `cargo`,
```bash
git clone https://github.com/Nadi-System/nadi-system
cd nadi-system
cargo build --release
```

To run one of the binary from nadi system, use the command `cargo run` with binary name.

For example, the following will run the `nadi-ide`:
```bash
cargo run --release --bin nadi-ide
```

The compiled binaries will be saved in the `target/release` directory, you can copy them and distribute it. The binaries do not need any other files to run.

The plugins files if present in the system are automatically loaded from `NADI_PLUGIN_DIRS` environmental variable. Look into installing the plugin section below.

Note: all programs will compile and run in Windows, Linux, and MacOS, while only `nadi-cli` and `mdbook-nadi` will run in Android (tmux). `nadi-ide` and family need the GUI libraries that are not available for android (tmux) yet.

## NADI GIS
NADI GIS uses `gdal` to read/write GIS files, so it needs to be installed. Please refer to [gdal installation documentation](https://gdal.org/en/stable/download.html) for that.

### Windows
First download compiled gdal from here:
- https://www.gisinternals.com/sdk.php
Then download clang from here:
- https://github.com/llvm/llvm-project/releases

Extract it into a folder, and then set environmental variables to point to that:
- `GDAL_VERSION`: Version of gdal e.g. '3.10.0'
- `LIBCLANG_PATH`: Path to the `lib` directory of `clang`
- `GDAL_HOME`: Path to the `gdal` that has the subdirectories like `bin`, `lib`, etc.

You can also follow the errors from the rust compilers as you compile to set the correct variables.

Finally you can get the source code and compile `nadi-gis` with the following command:

```bash
git clone https://github.com/Nadi-System/nadi-gis
cd nadi-gis
cargo build --release
```

This will generate the `nadi-gis` binary and `gis.dll` plugin in the `target/release` folder, they need to be run along side the `gdal` shared libraries (`.dll`s). Place the binaries in the same folder as the `dll`s from `gdal` and run it. To use the `gis.dll` plugin from `nadi`, `nadi-ide`, etc. same thing applies there, those binaries should be run with the `gdal`'s `dll`s to be able to load the `gis` plugin.

### Linux and Mac
Assuming you have `git`, `cargo`, and `gdal` installed in your system you can build it like this:
```bash
git clone https://github.com/Nadi-System/nadi-gis
cd nadi-gis
cargo build --release --features bindgen
```
The `bindgen` feature will link the `nadi-gis` binary with the `gdal` from your system. So that you do not have to distribute `gdal` with the binary for your OS.

If you do not have `gdal` installed in your system, then you can still build the nadi-gis without the `bindgen` feature. This will still require `gdal` to be available and distributed with the binary.
```bash
cargo build --release
```

### QGIS Plugin
The `nadi-gis` repo also contains the QGIS plugin that can be installed to run it through QGIS. The plugin will use the `nadi-gis` binary in your `PATH` if available. And it also contains the nadi plugin that can be loaded into the nadi system to import/export GIS files into/from the system.

You can download the zip file for plugin from releases page, and use the "Install from Zip" option on QGIS plugins tab. Or copy the `nadi` directory inside `qgis` to your python plugin directory for qgis.

Refer to the [QGIS plugins page](https://docs.qgis.org/3.40/en/docs/training_manual/qgis_plugins/fetching_plugins.html) for more instructions. In future we are planning on publishing the plugin so that you can simply add it from QGIS without downloading from here.

### Nadi GIS Plugin
The nadi plugin on this repo provides the functions to import attributes, geometries from GIS files, and export them into GIS files.

## Nadi Plugins
Out of the two types of plugins, the executable plugins are just simple commands, they do not need to be installed along side nadi, just make sure the executables that you are using from `nadi` can be found in path. A simple way to verify that is to try to run that from terminal and see if it works.

The compiled plugins can be loaded by setting the `NADI_PLUGIN_DIRS` environmental variable. The environment variable should be the path to the folder containing the nadi plugins (in `.dll`, `.so`, or `.dylib` formats for windows, linux and mac). You can write your own plugins based on our examples and compile them.

Officially available plugins are in the `nadi-plugins-rust` directory.

Assuming you have `git` and `cargo`,
```bash
git clone https://github.com/Nadi-System/nadi-plugins-rust
cd nadi-gis
cargo build --release
```

The plugins will be inside the `target/release` directory. Copy them to the `NADI_PLUGIN_DIRS` directory for nadi to load them.

You can take any one of the plugins as an example to build your own, or following the plugin development instructions from the plugins chapter.
