# messages — UMES hosts

[Back to module index](index.md)

## UMES hosts

| ID / pattern | Family | Supports | Context | Stability | Source |
|---|---|---|---|---|---|
| data-table:messages | data-table | component-replacement | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/extension-points.ts) |
| data-table:messages:bulk-actions | data-table | bulk-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/extension-points.ts) |
| data-table:messages:columns | data-table | column-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/extension-points.ts) |
| data-table:messages:filters | data-table | filter-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/extension-points.ts) |
| data-table:messages:footer | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/extension-points.ts) |
| data-table:messages:header | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/extension-points.ts) |
| data-table:messages:row-actions | data-table | row-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/extension-points.ts) |
| data-table:messages:search-trailing | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/extension-points.ts) |
| data-table:messages:toolbar | data-table | toolbar-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/extension-points.ts) |
| detail:messages:message:body:after | detail | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/extension-points.ts) |
| detail:messages:message:sidebar | detail | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/extension-points.ts) |
| messages:message | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:messages:message |
| messages:message_access_token | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:messages:message_access_token |
| messages:message_confirmation | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:messages:message_confirmation |
| messages:message_object | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:messages:message_object |
| messages:message_recipient | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:messages:message_recipient |
| messages.message.action_taken | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:messages.message.action_taken |
| messages.message.archived | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:messages.message.archived |
| messages.message.deleted | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:messages.message.deleted |
| messages.message.email_failed | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:messages.message.email_failed |
| messages.message.email_sent | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:messages.message.email_sent |
| messages.message.marked_unread | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:messages.message.marked_unread |
| messages.message.read | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:messages.message.read |
| messages.message.sent | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:messages.message.sent |
| messages.message.unarchived | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:messages.message.unarchived |
| crud-form:messages:message:fields | generic | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/extension-points.ts) |
| messages.message.queried | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:messages:message |
| messages.message.querying | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:messages:message |

<!-- end module facts section: messages/umes-hosts -->
