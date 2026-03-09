import { Server } from '@reposyd/service-core';
import { IServerOptions } from '@reposyd/service-core/dist/types/Service/types';
import { Buchung, Vorgabestunden, Zeitperiode } from '../Metamodel';
import AuthentificationMockingService from '../Plugins/AuthentificationMockingService';
import Sessionmamanger from '../Plugins/SessionManager';

export default function (options: IServerOptions, worker?: boolean): Server {
  const server = new Server(options,
    {AuthentificationService:AuthentificationMockingService,SessionManager:Sessionmamanger})
  server.register(Buchung.EntityDefinition, Buchung.EntityOptions)
  server.register(Vorgabestunden.EntityDefinition, Vorgabestunden.EntityOptions)
  server.register(Zeitperiode.EntityDefinition, Zeitperiode.EntityOptions)
  
  return server
}
