telmie
=================

You can ask OpenAI about anything...

[![Version](https://img.shields.io/npm/v/telmie.svg)](https://npmjs.org/package/telmie)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/telmie.svg)](https://npmjs.org/package/telmie)
[![License](https://img.shields.io/npm/l/telmie.svg)](https://github.com/DiveIntoHacking/telmie/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
    


<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g telmie
$ telmie COMMAND
running command...
$ telmie (--version)
telmie/0.0.1 darwin-x64 node-v18.12.1
$ telmie --help [COMMAND]
USAGE
  $ telmie COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`telmie help [COMMAND]`](#telmie-help-command)
* [`telmie plugins`](#telmie-plugins)
* [`telmie plugins:install PLUGIN...`](#telmie-pluginsinstall-plugin)
* [`telmie plugins:inspect PLUGIN...`](#telmie-pluginsinspect-plugin)
* [`telmie plugins:install PLUGIN...`](#telmie-pluginsinstall-plugin-1)
* [`telmie plugins:link PLUGIN`](#telmie-pluginslink-plugin)
* [`telmie plugins:uninstall PLUGIN...`](#telmie-pluginsuninstall-plugin)
* [`telmie plugins:uninstall PLUGIN...`](#telmie-pluginsuninstall-plugin-1)
* [`telmie plugins:uninstall PLUGIN...`](#telmie-pluginsuninstall-plugin-2)
* [`telmie plugins update`](#telmie-plugins-update)

## `telmie help [COMMAND]`

Display help for telmie.

```
USAGE
  $ telmie help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for telmie.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.19/src/commands/help.ts)_

## `telmie plugins`

List installed plugins.

```
USAGE
  $ telmie plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ telmie plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.7/src/commands/plugins/index.ts)_

## `telmie plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ telmie plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ telmie plugins add

EXAMPLES
  $ telmie plugins:install myplugin 

  $ telmie plugins:install https://github.com/someuser/someplugin

  $ telmie plugins:install someuser/someplugin
```

## `telmie plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ telmie plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ telmie plugins:inspect myplugin
```

## `telmie plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ telmie plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ telmie plugins add

EXAMPLES
  $ telmie plugins:install myplugin 

  $ telmie plugins:install https://github.com/someuser/someplugin

  $ telmie plugins:install someuser/someplugin
```

## `telmie plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ telmie plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ telmie plugins:link myplugin
```

## `telmie plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ telmie plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ telmie plugins unlink
  $ telmie plugins remove
```

## `telmie plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ telmie plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ telmie plugins unlink
  $ telmie plugins remove
```

## `telmie plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ telmie plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ telmie plugins unlink
  $ telmie plugins remove
```

## `telmie plugins update`

Update installed plugins.

```
USAGE
  $ telmie plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
