import { program } from 'commander'
import { Commands } from './CommandLine'

program.name('reposyd-example-service')

Commands.repository(program)
Commands.start(program)
program.parse(process.argv)
