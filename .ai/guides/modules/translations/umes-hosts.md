# translations — UMES hosts

[Back to module index](index.md)

## UMES hosts

| ID / pattern | Family | Supports | Context | Stability | Source |
|---|---|---|---|---|---|
| translations:entity_translation | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:translations:entity_translation |
| translations.locales | entity | response-enricher, query-enricher, mutation-guard | tenant-and-organization | STABLE | [api/put/locales.ts](../../../../node_modules/@open-mercato/core/src/modules/translations/api/put/locales.ts) |
| translations.translation | entity | response-enricher, query-enricher, mutation-guard | tenant-and-organization | STABLE | [api/[entityType]/[entityId]/route.ts](../../../../node_modules/@open-mercato/core/src/modules/translations/api/[entityType]/[entityId]/route.ts) |
| translations.translation.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:translations.translation.deleted |
| translations.translation.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:translations.translation.updated |

<!-- end module facts section: translations/umes-hosts -->
