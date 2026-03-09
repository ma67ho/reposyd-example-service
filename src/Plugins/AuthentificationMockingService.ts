import { Plugins } from "@reposyd/service-core";

export default class AuthentificationMockingService extends Plugins.AuthentificationServicePlugin {
    constructor(server) {
        super(server,"AuthentificationMockingService")

        
    }
    authenticate(username: any, password: any): Promise<unknown> {
        return new Promise((resolve,reject)=> 
            resolve({AccountName:"iabg\\friedrich",Vorname:"Klaus",Nachname:"Friedrich"})
        )
    }
}