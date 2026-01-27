import { init } from '../Actions/repository'
import createRepositoryCommand from './createRepositoryCommand'

export default function (parent) {
  const cmd = parent.command('repository')
  cmd.description('Create new or manage existing repositories')

  createRepositoryCommand(cmd, 'init')
    .description('initializes (creates) a new repository')
    .argument('<folder>', "path to the folder containing the repository (database)")
    .option('-f, --force ', 'overwrite existing files and folders', false)
    .action((folder, options) => {
      init(folder, options)
    })
}
