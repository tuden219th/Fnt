# search — UMES contributions

[Back to module index](index.md)

## UMES contributions

| ID | Kind | Target | Phase / operations | Contract | Resolution | Source |
|---|---|---|---|---|---|---|
| ai:search_aggregate | specialized-registry | search_aggregate | — | registry=ai; registryId=search_aggregate; specialistRoute=aiTools | fact-ref | [ai-tools.ts](../../../../node_modules/@open-mercato/search/src/modules/search/ai-tools.ts) |
| ai:search_get | specialized-registry | search_get | — | registry=ai; registryId=search_get; specialistRoute=aiTools | fact-ref | [ai-tools.ts](../../../../node_modules/@open-mercato/search/src/modules/search/ai-tools.ts) |
| ai:search_query | specialized-registry | search_query | — | registry=ai; registryId=search_query; specialistRoute=aiTools | fact-ref | [ai-tools.ts](../../../../node_modules/@open-mercato/search/src/modules/search/ai-tools.ts) |
| ai:search_reindex | specialized-registry | search_reindex | — | registry=ai; registryId=search_reindex; specialistRoute=aiTools | fact-ref | [ai-tools.ts](../../../../node_modules/@open-mercato/search/src/modules/search/ai-tools.ts) |
| ai:search_schema | specialized-registry | search_schema | — | registry=ai; registryId=search_schema; specialistRoute=aiTools | fact-ref | [ai-tools.ts](../../../../node_modules/@open-mercato/search/src/modules/search/ai-tools.ts) |
| ai:search_status | specialized-registry | search_status | — | registry=ai; registryId=search_status; specialistRoute=aiTools | fact-ref | [ai-tools.ts](../../../../node_modules/@open-mercato/search/src/modules/search/ai-tools.ts) |
| search:fulltext_upsert | subscriber | search.index_record | before-or-after | event=search.index_record; persistent=false; subscriberId=search:fulltext_upsert; sync=true | fact-ref | [subscribers/fulltext_upsert.ts](../../../../node_modules/@open-mercato/search/src/modules/search/subscribers/fulltext_upsert.ts) |
| search:vector_delete | subscriber | query_index.delete_one | before-or-after | event=query_index.delete_one; persistent=false; subscriberId=search:vector_delete; sync=true | fact-ref | [subscribers/vector_delete.ts](../../../../node_modules/@open-mercato/search/src/modules/search/subscribers/vector_delete.ts) |
| search:vector_purge | subscriber | query_index.vectorize_purge | before-or-after | event=query_index.vectorize_purge; persistent=false; subscriberId=search:vector_purge; sync=true | fact-ref | [subscribers/vector_purge.ts](../../../../node_modules/@open-mercato/search/src/modules/search/subscribers/vector_purge.ts) |
| search:vector_upsert | subscriber | query_index.vectorize_one | before-or-after | event=query_index.vectorize_one; persistent=false; subscriberId=search:vector_upsert; sync=true | fact-ref | [subscribers/vector_upsert.ts](../../../../node_modules/@open-mercato/search/src/modules/search/subscribers/vector_upsert.ts) |

<!-- end module facts section: search/umes-contributions -->
