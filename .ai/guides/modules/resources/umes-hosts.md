# resources — UMES hosts

[Back to module index](index.md)

## UMES hosts

| ID / pattern | Family | Supports | Context | Stability | Source |
|---|---|---|---|---|---|
| data-table:resources.resource-types.list | data-table | component-replacement | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/resources/extension-points.ts) |
| data-table:resources.resource-types.list:bulk-actions | data-table | bulk-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/resources/extension-points.ts) |
| data-table:resources.resource-types.list:columns | data-table | column-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/resources/extension-points.ts) |
| data-table:resources.resource-types.list:filters | data-table | filter-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/resources/extension-points.ts) |
| data-table:resources.resource-types.list:footer | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/resources/extension-points.ts) |
| data-table:resources.resource-types.list:header | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/resources/extension-points.ts) |
| data-table:resources.resource-types.list:row-actions | data-table | row-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/resources/extension-points.ts) |
| data-table:resources.resource-types.list:search-trailing | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/resources/extension-points.ts) |
| data-table:resources.resource-types.list:toolbar | data-table | toolbar-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/resources/extension-points.ts) |
| data-table:resources.resources.list | data-table | component-replacement | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/resources/extension-points.ts) |
| data-table:resources.resources.list:bulk-actions | data-table | bulk-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/resources/extension-points.ts) |
| data-table:resources.resources.list:columns | data-table | column-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/resources/extension-points.ts) |
| data-table:resources.resources.list:filters | data-table | filter-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/resources/extension-points.ts) |
| data-table:resources.resources.list:footer | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/resources/extension-points.ts) |
| data-table:resources.resources.list:header | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/resources/extension-points.ts) |
| data-table:resources.resources.list:row-actions | data-table | row-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/resources/extension-points.ts) |
| data-table:resources.resources.list:search-trailing | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/resources/extension-points.ts) |
| data-table:resources.resources.list:toolbar | data-table | toolbar-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/resources/extension-points.ts) |
| resources:resources_resource | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:resources:resources_resource |
| resources:resources_resource_activity | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:resources:resources_resource_activity |
| resources:resources_resource_comment | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:resources:resources_resource_comment |
| resources:resources_resource_tag | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:resources:resources_resource_tag |
| resources:resources_resource_tag_assignment | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:resources:resources_resource_tag_assignment |
| resources:resources_resource_type | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:resources:resources_resource_type |
| resources.resourceTagAssignment | entity | response-enricher, query-enricher, mutation-guard | tenant-and-organization | STABLE | [api/resources/tags/assign/route.ts](../../../../node_modules/@open-mercato/core/src/modules/resources/api/resources/tags/assign/route.ts) |
| resources.activity.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:resources.activity.created |
| resources.activity.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:resources.activity.deleted |
| resources.activity.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:resources.activity.updated |
| resources.comment.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:resources.comment.created |
| resources.comment.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:resources.comment.deleted |
| resources.comment.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:resources.comment.updated |
| resources.resource_tag_assignment.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:resources.resource_tag_assignment.created |
| resources.resource_tag_assignment.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:resources.resource_tag_assignment.deleted |
| resources.resource_tag_assignment.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:resources.resource_tag_assignment.updated |
| resources.resource_type.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:resources.resource_type.created |
| resources.resource_type.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:resources.resource_type.deleted |
| resources.resource_type.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:resources.resource_type.updated |
| resources.resource.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:resources.resource.created |
| resources.resource.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:resources.resource.deleted |
| resources.resource.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:resources.resource.updated |
| resources.resources_resource_type.queried | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:resources:resources_resource_type |
| resources.resources_resource_type.querying | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:resources:resources_resource_type |
| resources.resources_resource.queried | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:resources:resources_resource |
| resources.resources_resource.querying | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:resources:resources_resource |

<!-- end module facts section: resources/umes-hosts -->
