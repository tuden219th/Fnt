# query_index — UMES contributions

[Back to module index](index.md)

## UMES contributions

| ID | Kind | Target | Phase / operations | Contract | Resolution | Source |
|---|---|---|---|---|---|---|
| query_index:coverage_refresh | subscriber | query_index.coverage.refresh | before-or-after | event=query_index.coverage.refresh; persistent=false; subscriberId=query_index:coverage_refresh; sync=true | fact-ref | [subscribers/coverage_refresh.ts](../../../../node_modules/@open-mercato/core/src/modules/query_index/subscribers/coverage_refresh.ts) |
| query_index:coverage_warmup | subscriber | query_index.coverage.warmup | before-or-after | event=query_index.coverage.warmup; persistent=false; subscriberId=query_index:coverage_warmup; sync=true | fact-ref | [subscribers/coverage_warmup.ts](../../../../node_modules/@open-mercato/core/src/modules/query_index/subscribers/coverage_warmup.ts) |
| query_index:delete_one | subscriber | query_index.delete_one | before-or-after | event=query_index.delete_one; persistent=false; subscriberId=query_index:delete_one; sync=true | fact-ref | [subscribers/delete_one.ts](../../../../node_modules/@open-mercato/core/src/modules/query_index/subscribers/delete_one.ts) |
| query_index:purge | subscriber | query_index.purge | async-delivery | event=query_index.purge; persistent=true; subscriberId=query_index:purge; sync=false | fact-ref | [subscribers/purge.ts](../../../../node_modules/@open-mercato/core/src/modules/query_index/subscribers/purge.ts) |
| query_index:reindex | subscriber | query_index.reindex | async-delivery | event=query_index.reindex; persistent=true; subscriberId=query_index:reindex; sync=false | fact-ref | [subscribers/reindex.ts](../../../../node_modules/@open-mercato/core/src/modules/query_index/subscribers/reindex.ts) |
| query_index:upsert_one | subscriber | query_index.upsert_one | before-or-after | event=query_index.upsert_one; persistent=false; subscriberId=query_index:upsert_one; sync=true | fact-ref | [subscribers/upsert_one.ts](../../../../node_modules/@open-mercato/core/src/modules/query_index/subscribers/upsert_one.ts) |

<!-- end module facts section: query_index/umes-contributions -->
