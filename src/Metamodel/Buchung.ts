// import { MetaModel } from "@reposyd/service-core"
// import SapAzMockingController from "../Controller/SapAzMockingController"


// export const EntityDefinition = new MetaModel.Entity('Buchung')
//   .key('Uuid')

//   EntityDefinition.addStringProperty('Personalnummer')
//   EntityDefinition.addStringProperty('Datum')
//   EntityDefinition.addInt32Property('Index')
//   EntityDefinition.addDateProperty('Stunden')
//   EntityDefinition.addStringProperty('PspElement').defaultValue('')
//   EntityDefinition.addStringProperty('Kostenstelle').defaultValue('')
//   EntityDefinition.addUuidProperty()
//      .readonly(true)


// export const EntityOptions = {
//   pathPrefix: '/OData', 
//   controller: {Constructor:SapAzMockingController},
// }

//   export interface IBuchung {
//     Personalnummer:string,
//     Datum:string,
//     Index:number,
//     Stunden:number, 
//     PspElement?:string,
//     Kostenstelle?:string,
//     Uuid: string
//   }

import { MetaModel } from "@reposyd/service-core";
import SapAzMockingController from "../Controller/SapAzMockingController";

export const EntityDefinition = new MetaModel.Entity("Buchung").key("Uuid");

EntityDefinition.addDateProperty("Von");
EntityDefinition.addDateProperty("Bis");
EntityDefinition.addUuidProperty().readonly(true);

export const EntityOptions = {
  pathPrefix: "/OData",
  controller: { Constructor: SapAzMockingController },
};

  export interface IBuchung {
    Personalnummer:string,
    Datum:string,
    Index:number,
    Stunden:number, 
    PspElement?:string,
    Kostenstelle?:string,
    Uuid: string
  }