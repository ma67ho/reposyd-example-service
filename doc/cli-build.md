# Building a Command Line Interface (CLI)

The CLI is based on the package **commander**. Run the command `npx yarn add commander` to add the package to your project.

Add the file 'index.ts' in the `src` folder of the project and add the following lines:

``` typescript
import { Commands } from './CommandLine';

program.name('reposyd-example-service')
program.parse(process.argv)
```

Create the following subfolders in the `src` folder of the project.

* CommandLine
* CommandLine/Actions
* CommandLine/Commands

Create an `index.ts` in the `CommandLine` folder and add

``` typescript
import Actions from './Actions'
import Commands from './Commands'
export {
  Actions,
  Commands
}
```

In each of the subfolders `Actions` and `Command`, create an `index.ts` file and add the following lines:
``` typescript
export default {  
}
```

## Additonal Functions

### `createRepositoryCommand(...)`

This files defines a function providing the basic options the a command at the repository level. 

Create the file `createRepositoryCommand.ts` the `Commands` folder and insert the following lines:

``` typescript
export default function (parent, name) {
  const cmd = parent.command(name)
  cmd.option('-p, --password <password>', 'admin user password to be set')
    .option('--silent', 'suppresses all outputs', false)
    .option('-u, --user <name>', 'name of the admin user', 'admin')
    .option('--url <url>', 'url of the repository. If not specified, env variable REPOSYD_URL is used as default')
  return cmd
}
```

### `logger(...)`

Create the file `logger.ts` the `Commands` folder and insert the following lines:

``` typescript
import { Logger } from "@reposyd/service-core";
import { isUndefined } from "lodash";

export default function (options?) {
  if (!isUndefined(options.logger)) {
    return options.logger
  }
  return Logger.console(options)
}
```
This completes the basic structure of the Command Line Interface.

