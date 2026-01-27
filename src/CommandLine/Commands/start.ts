import { isUndefined } from 'lodash'
import Server from '../../Server'

export default function (program) {
  program
    .command('start', { isDefault: true })
    .description('Starts the RePoSyD REST API server')
    .option('-c, --cluster [instances]', 'Starts a cluster with <instances> of the RePoSyd REST API server', parseInt)
    .action((options) => {
      Server.startInstance()
    })

}