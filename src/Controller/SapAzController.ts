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


type SoapType = {
  type: "ZCats1GetPeriod" | "ZCats1GetTargetHours" | "ZCats1GetAz" | "ZCats1AzImport" | "ZCats1AzDelete" | "ZCats1AzChange"
}

function createSoapEnvelope(bodyTag:string):string {
  return `
  <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
   <soapenv:Header/>
   <soapenv:Body>
      ${bodyTag}
   </soapenv:Body>
</soapenv:Envelope>`
}
// SOAP endpoint URL (replace with your actual service URL)
const url = "https://www.dataaccess.com/webservicesserver/NumberConversion.wso";

// SOAP request body (XML envelope)
const soapEnvelope = `
<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">
      <ubiNum>256</ubiNum>
    </NumberToWords>
  </soap:Body>
</soap:Envelope>
`;

// Function to send SOAP request
async function sendSoapRequest() {
  try {
    const response = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "text/xml; charset=utf-8",
        "SOAPAction": "http://www.dataaccess.com/webservicesserver/NumberToWords"
      },
      body: soapEnvelope
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const textResponse = await response.text();

    // Parse XML response
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(textResponse, "text/xml");

    // Extract value from XML
    const resultNode = xmlDoc.getElementsByTagName("m:NumberToWordsResult")[0];
    const result = resultNode ? resultNode.textContent : "No result found";

    console.log("SOAP Response:", result);
  } catch (error) {
    console.error("SOAP Request Error:", error);
  }
}

export default class SapAzController
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
          Personalnummer: "1008",
          Index: 2,
          Stunden: 8,
          Datum: "26-01-21",
          HatVertrauensarbeitszeit: false,
          Uuid: "2",
        },
        {
          Personalnummer: "1009",
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
