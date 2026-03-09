import {
  IODataQueryOptions,
  OData,
  Storage,
  UuidProperty,
} from "@reposyd/service-core";
import { Buchung, Vorgabestunden, Zeitperiode } from "../Metamodel";
import { IZeitperiode } from "../Metamodel/Zeitperiode";
import { IBuchung } from "../Metamodel/Buchung";
import { IVorgabestunden } from "../Metamodel/Vorgabestunden";

export default class SapAzMockingController
  extends Storage.EntityControllerBase
{
  constructor(entity, session, factory, options) {
    super(entity, session, factory, options);
  }

  filterSync(
    options?: IODataQueryOptions,
    params?: Record<string, string>,
  ): any[] {
    const odata = OData.parse(`$filter=${options.$filter}`)
    if (this.entity.name === Zeitperiode.EntityDefinition.name) {
      return [
        { Von: "2026-01-19", Bis: "2026-01-28", Uuid: UuidProperty.generate() },
      ] as IZeitperiode[]; 
    } else if (this.entity.name === Buchung.EntityDefinition.name) {
      return [
        {
          Personalnummer: "1007",
          Index: 1,
          Stunden: 3,
          Datum: "26-01-21",
          PspElement: "11-22-33",
          Uuid: UuidProperty.generate(),
        },
                {
          Personalnummer: "1007",
          Index: 2,
          Stunden: 2,
          Datum: "26-01-21",
          PspElement: "33-22-11",
          Uuid: UuidProperty.generate(),
        },
      ] as IBuchung[];
    } else if (this.entity.name === Vorgabestunden.EntityDefinition.name) {
      return [
        {
          Personalnummer: "1007",
          Index: 1,
          Stunden: 8.2,
          Datum: "26-01-20",
          HatVertrauensarbeitszeit: false,
          Uuid: "1",
        },
        {
          Personalnummer: "1007",
          Index: 2,
          Stunden: 8,
          Datum: "26-01-21",
          HatVertrauensarbeitszeit: false,
          Uuid: "2",
        },
        {
          Personalnummer: "1007",
          Index: 3,
          Datum: "26-01-22",
          Stunden: 6.2,
          HatVertrauensarbeitszeit: false,
          Uuid: "3",
        },
      ] as IVorgabestunden[];
    }

    return [];
  }
}
