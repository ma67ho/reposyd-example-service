import {Plugins} from '@reposyd/service-core'
import path from 'node:path'

export async function init (folder, options) {
  let rootFolder = folder
  if (rootFolder.startsWith('.') || rootFolder.startsWith('..')) {
    rootFolder = path.join(process.cwd(), String(rootFolder))
  }
  const url = `sqlite:${rootFolder}?database=${options.database || 'reposyd.sqlite'}`
  Plugins.SchemaManagerPlugin.createRepository(url, 'admin', options?.password || 'admin', { force: options?.force })
}
