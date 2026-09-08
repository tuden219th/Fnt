# dictionaries — UMES hosts

[Back to module index](index.md)

## UMES hosts

| ID / pattern | Family | Supports | Context | Stability | Source |
|---|---|---|---|---|---|
| dictionaries:dictionary | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:dictionaries:dictionary |
| dictionaries:dictionary_entry | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:dictionaries:dictionary_entry |
| dictionaries.dictionary | entity | response-enricher, query-enricher, mutation-guard | tenant-and-organization | STABLE | [api/[dictionaryId]/entries/reorder/route.ts](../../../../node_modules/@open-mercato/core/src/modules/dictionaries/api/[dictionaryId]/entries/reorder/route.ts) |
| dictionaries.entry | entity | response-enricher, query-enricher, mutation-guard | tenant-and-organization | STABLE | [api/[dictionaryId]/entries/[entryId]/route.ts](../../../../node_modules/@open-mercato/core/src/modules/dictionaries/api/[dictionaryId]/entries/[entryId]/route.ts) |
| dictionaries.entry.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:dictionaries.entry.created |
| dictionaries.entry.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:dictionaries.entry.deleted |
| dictionaries.entry.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:dictionaries.entry.updated |

<!-- end module facts section: dictionaries/umes-hosts -->
