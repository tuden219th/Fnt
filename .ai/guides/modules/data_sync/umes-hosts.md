# data_sync — UMES hosts

[Back to module index](index.md)

## UMES hosts

| ID / pattern | Family | Supports | Context | Stability | Source |
|---|---|---|---|---|---|
| data-table:data_sync.runs | data-table | component-replacement | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/data_sync/extension-points.ts) |
| data-table:data_sync.runs:bulk-actions | data-table | bulk-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/data_sync/extension-points.ts) |
| data-table:data_sync.runs:columns | data-table | column-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/data_sync/extension-points.ts) |
| data-table:data_sync.runs:filters | data-table | filter-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/data_sync/extension-points.ts) |
| data-table:data_sync.runs:footer | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/data_sync/extension-points.ts) |
| data-table:data_sync.runs:header | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/data_sync/extension-points.ts) |
| data-table:data_sync.runs:row-actions | data-table | row-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/data_sync/extension-points.ts) |
| data-table:data_sync.runs:search-trailing | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/data_sync/extension-points.ts) |
| data-table:data_sync.runs:toolbar | data-table | toolbar-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/data_sync/extension-points.ts) |
| data_sync:sync_cursor | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:data_sync:sync_cursor |
| data_sync:sync_mapping | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:data_sync:sync_mapping |
| data_sync:sync_run | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:data_sync:sync_run |
| data_sync:sync_schedule | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:data_sync:sync_schedule |
| data_sync.mapping | entity | response-enricher, query-enricher, mutation-guard | tenant-and-organization | STABLE | [api/mappings/[id]/route.ts](../../../../node_modules/@open-mercato/core/src/modules/data_sync/api/mappings/[id]/route.ts) |
| data_sync.run | entity | response-enricher, query-enricher, mutation-guard | tenant-and-organization | STABLE | [api/run.ts](../../../../node_modules/@open-mercato/core/src/modules/data_sync/api/run.ts) |
| data_sync.schedule | entity | response-enricher, query-enricher, mutation-guard | tenant-and-organization | STABLE | [api/schedules/[id]/route.ts](../../../../node_modules/@open-mercato/core/src/modules/data_sync/api/schedules/[id]/route.ts) |
| data_sync.run.cancelled | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:data_sync.run.cancelled |
| data_sync.run.completed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:data_sync.run.completed |
| data_sync.run.failed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:data_sync.run.failed |
| data_sync.run.started | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:data_sync.run.started |

<!-- end module facts section: data_sync/umes-hosts -->
