# Adding Commands for managing the Repository

Create the file `repository.ts` in the `Commands` folder and insert:

``` typescript
import commandBaseRepository from '../commandBaseRepository'
export default function(parent) {
 const cmd = parent.command('repository')
  cmd.description('Create new or manage existing repositories')
}
```

## Command 'init'

Insert the following lines after `cmd.description(...` to add the new command `init`

``` typescript
  createRepositoryCommand(cmd, 'init')
    .description('initializes (creates) a new repository')
    .argument('<folder>', "path to the folder containing the repository (database)")
    .action((folder, options) => {
    })
```

### Updating `CommandLine/Command/index.ts`

Add the import of `repository` and extend the default export.

``` typescript
import repository from "./repository"

export default {
  repository
}

```

### Updating `index.ts`

Inlcude the import of `Commands` in the `index.ts` file and add the `repository` commands the the program.

``` typescript
import { program } from 'commander'
import { Commands } from './CommandLine'

program.name('reposyd-example-service')

Commands.repository(program)

program.parse(process.argv)

```

### Testing the Command

Run the command `npx yarn start -h` and the following output is generated:

```
$ node ./dist/index.js -h
Usage: reposyd-example-service [options] [command]

Options:
  -h, --help      display help for command

Commands:
  repository      Create new or manage existing repositories
  help [command]  display help for command
Done in 0.13s.
```

Run `npx yarn start repository init -h` to display help for the newly added `init` command.

### Adding a Callback

Create the file `repository.ts` in the `Actions` folder and insert:

``` typescript
export default {
    init: async function (folder, options) {
        let rootFolder = folder
        if (rootFolder.startsWith('.') || rootFolder.startsWith('..')) {
            rootFolder = path.join(process.cwd(), String(rootFolder))
        }
        const url = `sqlite:${rootFolder}?database=${options.database || 'reposyd.sqlite'}`
        Plugins.SchemaManagerPlugin.createRepository(url, 'admin', options?.password || 'admin', { force: options?.force })
    }
}

```

Create the file `repository.ts` in the `Commands` folder and import the `init` function:

``` typescript
   import { init } from '../Actions/repository'
   import createRepositoryCommand from './createRepositoryCommand'
``` 

and add the `init` function to the action handler of the `init` command.

``` typescript
  ...
  .action((folder, options) => {
    init(folder, options)
  })
```


