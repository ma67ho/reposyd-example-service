import { MetaModel } from "@reposyd/service-core";
import SapAzMockingController from "../Controller/SapAzMockingController";

export const EntityDefinition = new MetaModel.Entity("Vorgabestunden").key(
  "Uuid",
);

EntityDefinition.addDateProperty("Von");
EntityDefinition.addDateProperty("Bis");
EntityDefinition.addUuidProperty().readonly(true);

export const EntityOptions = {
  pathPrefix: "/OData",
  controller: { Constructor: SapAzMockingController },
};

export interface IVorgabestunden {
  Personalnummer: string;
  Datum: string;
  Index: number;
  Stunden: number;
  HatVertrauensarbeitszeit: boolean;
  Uuid: string;
}
