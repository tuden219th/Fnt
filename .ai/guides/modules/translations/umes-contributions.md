# translations — UMES contributions

[Back to module index](index.md)

## UMES contributions

| ID | Kind | Target | Phase / operations | Contract | Resolution | Source |
|---|---|---|---|---|---|---|
| translations-reindex-entity | subscriber | translations.translation.updated | async-delivery | event=translations.translation.updated; persistent=true; subscriberId=translations-reindex-entity; sync=false | fact-ref | [subscribers/reindex.ts](../../../../node_modules/@open-mercato/core/src/modules/translations/subscribers/reindex.ts) |
| translations-reindex-entity-on-delete | subscriber | translations.translation.deleted | async-delivery | event=translations.translation.deleted; persistent=true; subscriberId=translations-reindex-entity-on-delete; sync=false | fact-ref | [subscribers/reindex-on-delete.ts](../../../../node_modules/@open-mercato/core/src/modules/translations/subscribers/reindex-on-delete.ts) |
| translations:cleanup | subscriber | query_index.delete_one | before-or-after | event=query_index.delete_one; persistent=false; subscriberId=translations:cleanup; sync=true | fact-ref | [subscribers/cleanup.ts](../../../../node_modules/@open-mercato/core/src/modules/translations/subscribers/cleanup.ts) |

<!-- end module facts section: translations/umes-contributions -->
