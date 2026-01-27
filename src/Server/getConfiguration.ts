import { isNull } from 'lodash'
import { existsSync, readFileSync } from "node:fs"
import path from 'node:path'

/**
 *
 *
 * @export
 * @return {*} IServerOptions
 */
export default function () {
  let cfg

  const files = []

  if (process.env.REPOSYD_CONFIG !== undefined) {
    if (process.env.REPOSYD_CONFIG.startsWith('./') || process.env.REPOSYD_CONFIG.startsWith('../')){
      files.push(path.join(process.cwd(), process.env.REPOSYD_CONFIG))
    } else {
      files.push(process.env.REPOSYD_CONFIG)
    }
  }
  files.push('/reposyd/data/config/reposyd.json', '/reposyd/data/config/production.json')

  let filename = null
  for (let i = 0; isNull(filename) && i < files.length; i++) {
    if (existsSync(files[i])) {
      filename = files[i]
    }
  }
  if (isNull(filename)) {
    console.error('None of the following config files could be found: ', files.join(', '))
  } else {
    const b = readFileSync(filename)
    cfg = JSON.parse(b.toString())
  }
  return cfg
}
