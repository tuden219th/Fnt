# search — Contribution resolutions

[Back to module index](index.md)

## Contribution resolutions

| Contribution | Target | Resolution | Activations | Source |
|---|---|---|---|---|
| ai:search_aggregate | module:search_aggregate | capability-only | — | [ai-tools.ts](../../../../node_modules/@open-mercato/search/src/modules/search/ai-tools.ts) |
| ai:search_get | module:search_get | capability-only | — | [ai-tools.ts](../../../../node_modules/@open-mercato/search/src/modules/search/ai-tools.ts) |
| ai:search_query | module:search_query | capability-only | — | [ai-tools.ts](../../../../node_modules/@open-mercato/search/src/modules/search/ai-tools.ts) |
| ai:search_reindex | module:search_reindex | capability-only | — | [ai-tools.ts](../../../../node_modules/@open-mercato/search/src/modules/search/ai-tools.ts) |
| ai:search_schema | module:search_schema | capability-only | — | [ai-tools.ts](../../../../node_modules/@open-mercato/search/src/modules/search/ai-tools.ts) |
| ai:search_status | module:search_status | capability-only | — | [ai-tools.ts](../../../../node_modules/@open-mercato/search/src/modules/search/ai-tools.ts) |
| search:fulltext_upsert | event:search.index_record @search | capability-only | — | [subscribers/fulltext_upsert.ts](../../../../node_modules/@open-mercato/search/src/modules/search/subscribers/fulltext_upsert.ts) |
| search:vector_delete | event:query_index.delete_one @query_index | capability-only | — | [subscribers/vector_delete.ts](../../../../node_modules/@open-mercato/search/src/modules/search/subscribers/vector_delete.ts) |
| search:vector_purge | event:query_index.vectorize_purge @query_index | capability-only | — | [subscribers/vector_purge.ts](../../../../node_modules/@open-mercato/search/src/modules/search/subscribers/vector_purge.ts) |
| search:vector_upsert | event:query_index.vectorize_one @query_index | capability-only | — | [subscribers/vector_upsert.ts](../../../../node_modules/@open-mercato/search/src/modules/search/subscribers/vector_upsert.ts) |

<!-- end module facts section: search/contribution-resolutions -->
