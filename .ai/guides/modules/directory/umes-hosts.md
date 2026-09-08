# directory — UMES hosts

[Back to module index](index.md)

## UMES hosts

| ID / pattern | Family | Supports | Context | Stability | Source |
|---|---|---|---|---|---|
| data-table:directory.organizations.list | data-table | component-replacement | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/directory/extension-points.ts) |
| data-table:directory.organizations.list:bulk-actions | data-table | bulk-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/directory/extension-points.ts) |
| data-table:directory.organizations.list:columns | data-table | column-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/directory/extension-points.ts) |
| data-table:directory.organizations.list:filters | data-table | filter-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/directory/extension-points.ts) |
| data-table:directory.organizations.list:footer | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/directory/extension-points.ts) |
| data-table:directory.organizations.list:header | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/directory/extension-points.ts) |
| data-table:directory.organizations.list:row-actions | data-table | row-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/directory/extension-points.ts) |
| data-table:directory.organizations.list:search-trailing | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/directory/extension-points.ts) |
| data-table:directory.organizations.list:toolbar | data-table | toolbar-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/directory/extension-points.ts) |
| data-table:directory.tenants.list | data-table | component-replacement | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/directory/extension-points.ts) |
| data-table:directory.tenants.list:bulk-actions | data-table | bulk-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/directory/extension-points.ts) |
| data-table:directory.tenants.list:columns | data-table | column-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/directory/extension-points.ts) |
| data-table:directory.tenants.list:filters | data-table | filter-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/directory/extension-points.ts) |
| data-table:directory.tenants.list:footer | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/directory/extension-points.ts) |
| data-table:directory.tenants.list:header | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/directory/extension-points.ts) |
| data-table:directory.tenants.list:row-actions | data-table | row-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/directory/extension-points.ts) |
| data-table:directory.tenants.list:search-trailing | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/directory/extension-points.ts) |
| data-table:directory.tenants.list:toolbar | data-table | toolbar-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/directory/extension-points.ts) |
| directory:organization | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:directory:organization |
| directory:tenant | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:directory:tenant |
| directory.organization | entity | response-enricher, query-enricher, mutation-guard | tenant-and-organization | STABLE | [api/organization-branding/route.ts](../../../../node_modules/@open-mercato/core/src/modules/directory/api/organization-branding/route.ts) |
| directory.organization.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:directory.organization.created |
| directory.organization.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:directory.organization.deleted |
| directory.organization.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:directory.organization.updated |
| directory.tenant.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:directory.tenant.created |
| directory.tenant.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:directory.tenant.deleted |
| directory.tenant.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:directory.tenant.updated |

<!-- end module facts section: directory/umes-hosts -->
