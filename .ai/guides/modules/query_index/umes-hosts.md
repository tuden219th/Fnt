# query_index — UMES hosts

[Back to module index](index.md)

## UMES hosts

| ID / pattern | Family | Supports | Context | Stability | Source |
|---|---|---|---|---|---|
| data-table:query_index.status.list | data-table | component-replacement | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/query_index/extension-points.ts) |
| data-table:query_index.status.list:bulk-actions | data-table | bulk-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/query_index/extension-points.ts) |
| data-table:query_index.status.list:columns | data-table | column-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/query_index/extension-points.ts) |
| data-table:query_index.status.list:filters | data-table | filter-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/query_index/extension-points.ts) |
| data-table:query_index.status.list:footer | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/query_index/extension-points.ts) |
| data-table:query_index.status.list:header | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/query_index/extension-points.ts) |
| data-table:query_index.status.list:row-actions | data-table | row-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/query_index/extension-points.ts) |
| data-table:query_index.status.list:search-trailing | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/query_index/extension-points.ts) |
| data-table:query_index.status.list:toolbar | data-table | toolbar-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/query_index/extension-points.ts) |
| query_index | entity | response-enricher, query-enricher, mutation-guard | tenant-and-organization | STABLE | [api/purge.ts](../../../../node_modules/@open-mercato/core/src/modules/query_index/api/purge.ts) |
| query_index:entity_index_coverage | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:query_index:entity_index_coverage |
| query_index:entity_index_job | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:query_index:entity_index_job |
| query_index:entity_index_row | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:query_index:entity_index_row |
| query_index:indexer_error_log | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:query_index:indexer_error_log |
| query_index:indexer_status_log | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:query_index:indexer_status_log |
| query_index:search_token | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:query_index:search_token |
| query_index.coverage.refresh | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:query_index.coverage.refresh |
| query_index.coverage.warmup | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:query_index.coverage.warmup |
| query_index.delete_one | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:query_index.delete_one |
| query_index.purge | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:query_index.purge |
| query_index.reindex | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:query_index.reindex |
| query_index.upsert_one | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:query_index.upsert_one |
| query_index.vectorize_one | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:query_index.vectorize_one |
| query_index.vectorize_purge | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:query_index.vectorize_purge |

<!-- end module facts section: query_index/umes-hosts -->
