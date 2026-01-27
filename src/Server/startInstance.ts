import createInstance from './createInstance'
import { IServerOptions } from "@reposyd/service-core/dist/types/Service/types"
import getConfiguration from './getConfiguration'
import { isUndefined } from 'lodash'
import 'dotenv/config'

export default function (opts?: IServerOptions) {
  let cfg = opts

  if (isUndefined(cfg)) {
    cfg = getConfiguration()
  }
  const server = createInstance(cfg)
  server.listen()
  return server
}