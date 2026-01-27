import { MetaModel } from "@reposyd/service-core"


export const EntityDefinition = new MetaModel.Entity('Issue')
  .key('Uuid')

  EntityDefinition.addStringProperty('Title')
  .defaultValue('')
  EntityDefinition.addUuidProperty()
    .readonly(true)

  EntityDefinition.addNavigationProperty('WorkLog', 'WorkLog', 'Issue')
  .collection(true)
  
  export const EntityOptions = {
    pathPrefix: '/OData'
  }