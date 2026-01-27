import { Server } from '@reposyd/service-core';
import { IServerOptions } from '@reposyd/service-core/dist/types/Service/types';
import { Issue, WorkLog } from '../Metamodel';

export default function (options: IServerOptions, worker?: boolean): Server {
  const server = new Server(options)
  server.register(Issue.EntityDefinition, Issue.EntityOptions)
  server.register(WorkLog.EntityDefinition, WorkLog.EntityOptions)
  return server
}
