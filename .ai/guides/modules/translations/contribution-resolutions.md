# translations — Contribution resolutions

[Back to module index](index.md)

## Contribution resolutions

| Contribution | Target | Resolution | Activations | Source |
|---|---|---|---|---|
| translations-reindex-entity-on-delete | event:translations.translation.deleted @translations | capability-only | — | [subscribers/reindex-on-delete.ts](../../../../node_modules/@open-mercato/core/src/modules/translations/subscribers/reindex-on-delete.ts) |
| translations-reindex-entity | event:translations.translation.updated @translations | capability-only | — | [subscribers/reindex.ts](../../../../node_modules/@open-mercato/core/src/modules/translations/subscribers/reindex.ts) |
| translations:cleanup | event:query_index.delete_one @query_index | capability-only | — | [subscribers/cleanup.ts](../../../../node_modules/@open-mercato/core/src/modules/translations/subscribers/cleanup.ts) |

<!-- end module facts section: translations/contribution-resolutions -->
