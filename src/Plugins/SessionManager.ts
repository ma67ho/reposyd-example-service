import { Database, Plugins, Session } from "@reposyd/service-core";

export default class Sessionmamanger extends Plugins.SessionManagerPlugin {
    constructor(server) {
        super(server)
    }
    session(type: string, request: any): Promise<Session> {
        return new Promise((resolve) => {
            const db = new Database()
            const account = request['user']
            const s = new Session(db,account,this.server.entityFactory.factory,this.server.rulesEngineFactory.engine())
            resolve(s)
        })
    }
}
