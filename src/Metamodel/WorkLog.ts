import { MetaModel } from "@reposyd/service-core"


export const EntityDefinition = new MetaModel.Entity('WorkLog')
  .key('Uuid')

EntityDefinition.addStringProperty('Title')
  .defaultValue('')
EntityDefinition.addStringProperty('Description')
  .defaultValue('')
EntityDefinition.addUuidProperty('IssueUuid')
  .readonly(true)
  .nullable(false)
EntityDefinition.addUuidProperty()
  .readonly(true)

EntityDefinition.addNavigationProperty('Issue', 'Issue', "WorkLog")
.referentialConstraint({ IssueUuid: 'Uuid'})
.one2one(true)

export const EntityOptions = {
  pathPrefix: '/OData'
}