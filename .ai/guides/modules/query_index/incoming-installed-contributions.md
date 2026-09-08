# query_index — Incoming installed contributions

[Back to module index](index.md)

## Incoming installed contributions

| Contributor | Kind | Target | Resolution | Activation | Contribution · Source |
|---|---|---|---|---|---|
| search | subscriber | event:query_index.delete_one @query_index | capability-only | — | search:vector_delete · [node_modules/@open-mercato/search/src/modules/search/subscribers/vector_delete.ts](../../../../node_modules/@open-mercato/search/src/modules/search/subscribers/vector_delete.ts) |
| search | subscriber | event:query_index.vectorize_purge @query_index | capability-only | — | search:vector_purge · [node_modules/@open-mercato/search/src/modules/search/subscribers/vector_purge.ts](../../../../node_modules/@open-mercato/search/src/modules/search/subscribers/vector_purge.ts) |
| search | subscriber | event:query_index.vectorize_one @query_index | capability-only | — | search:vector_upsert · [node_modules/@open-mercato/search/src/modules/search/subscribers/vector_upsert.ts](../../../../node_modules/@open-mercato/search/src/modules/search/subscribers/vector_upsert.ts) |
| translations | subscriber | event:query_index.delete_one @query_index | capability-only | — | translations:cleanup · [node_modules/@open-mercato/core/src/modules/translations/subscribers/cleanup.ts](../../../../node_modules/@open-mercato/core/src/modules/translations/subscribers/cleanup.ts) |

<!-- end module facts section: query_index/incoming-installed-contributions -->
