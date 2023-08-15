oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g backendcraft-cli
$ backendcraft-cli COMMAND
running command...
$ backendcraft-cli (--version)
backendcraft-cli/0.0.0 linux-x64 node-v16.16.0
$ backendcraft-cli --help [COMMAND]
USAGE
  $ backendcraft-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`backendcraft-cli hello PERSON`](#backendcraft-cli-hello-person)
* [`backendcraft-cli hello world`](#backendcraft-cli-hello-world)
* [`backendcraft-cli help [COMMANDS]`](#backendcraft-cli-help-commands)
* [`backendcraft-cli plugins`](#backendcraft-cli-plugins)
* [`backendcraft-cli plugins:install PLUGIN...`](#backendcraft-cli-pluginsinstall-plugin)
* [`backendcraft-cli plugins:inspect PLUGIN...`](#backendcraft-cli-pluginsinspect-plugin)
* [`backendcraft-cli plugins:install PLUGIN...`](#backendcraft-cli-pluginsinstall-plugin-1)
* [`backendcraft-cli plugins:link PLUGIN`](#backendcraft-cli-pluginslink-plugin)
* [`backendcraft-cli plugins:uninstall PLUGIN...`](#backendcraft-cli-pluginsuninstall-plugin)
* [`backendcraft-cli plugins:uninstall PLUGIN...`](#backendcraft-cli-pluginsuninstall-plugin-1)
* [`backendcraft-cli plugins:uninstall PLUGIN...`](#backendcraft-cli-pluginsuninstall-plugin-2)
* [`backendcraft-cli plugins update`](#backendcraft-cli-plugins-update)

## `backendcraft-cli hello PERSON`

Say hello

```
USAGE
  $ backendcraft-cli hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/davi-canuto/backendcraft-cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `backendcraft-cli hello world`

Say hello world

```
USAGE
  $ backendcraft-cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ backendcraft-cli hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [dist/commands/hello/world.ts](https://github.com/davi-canuto/backendcraft-cli/blob/v0.0.0/dist/commands/hello/world.ts)_

## `backendcraft-cli help [COMMANDS]`

Display help for backendcraft-cli.

```
USAGE
  $ backendcraft-cli help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for backendcraft-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.16/src/commands/help.ts)_

## `backendcraft-cli plugins`

List installed plugins.

```
USAGE
  $ backendcraft-cli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ backendcraft-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.5/src/commands/plugins/index.ts)_

## `backendcraft-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ backendcraft-cli plugins:install PLUGIN...

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
  $ backendcraft-cli plugins add

EXAMPLES
  $ backendcraft-cli plugins:install myplugin 

  $ backendcraft-cli plugins:install https://github.com/someuser/someplugin

  $ backendcraft-cli plugins:install someuser/someplugin
```

## `backendcraft-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ backendcraft-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ backendcraft-cli plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.5/src/commands/plugins/inspect.ts)_

## `backendcraft-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ backendcraft-cli plugins:install PLUGIN...

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
  $ backendcraft-cli plugins add

EXAMPLES
  $ backendcraft-cli plugins:install myplugin 

  $ backendcraft-cli plugins:install https://github.com/someuser/someplugin

  $ backendcraft-cli plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.5/src/commands/plugins/install.ts)_

## `backendcraft-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ backendcraft-cli plugins:link PLUGIN

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
  $ backendcraft-cli plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.5/src/commands/plugins/link.ts)_

## `backendcraft-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ backendcraft-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ backendcraft-cli plugins unlink
  $ backendcraft-cli plugins remove
```

## `backendcraft-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ backendcraft-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ backendcraft-cli plugins unlink
  $ backendcraft-cli plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.5/src/commands/plugins/uninstall.ts)_

## `backendcraft-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ backendcraft-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ backendcraft-cli plugins unlink
  $ backendcraft-cli plugins remove
```

## `backendcraft-cli plugins update`

Update installed plugins.

```
USAGE
  $ backendcraft-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.2.5/src/commands/plugins/update.ts)_
<!-- commandsstop -->
