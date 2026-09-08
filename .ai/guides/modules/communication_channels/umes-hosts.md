# communication_channels — UMES hosts

[Back to module index](index.md)

## UMES hosts

| ID / pattern | Family | Supports | Context | Stability | Source |
|---|---|---|---|---|---|
| data-table:communication_channels.channels | data-table | component-replacement | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/extension-points.ts) |
| data-table:communication_channels.channels:bulk-actions | data-table | bulk-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/extension-points.ts) |
| data-table:communication_channels.channels:columns | data-table | column-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/extension-points.ts) |
| data-table:communication_channels.channels:filters | data-table | filter-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/extension-points.ts) |
| data-table:communication_channels.channels:footer | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/extension-points.ts) |
| data-table:communication_channels.channels:header | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/extension-points.ts) |
| data-table:communication_channels.channels:row-actions | data-table | row-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/extension-points.ts) |
| data-table:communication_channels.channels:search-trailing | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/extension-points.ts) |
| data-table:communication_channels.channels:toolbar | data-table | toolbar-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/extension-points.ts) |
| data-table:communication_channels.profile.channels | data-table | component-replacement | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/extension-points.ts) |
| data-table:communication_channels.profile.channels:bulk-actions | data-table | bulk-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/extension-points.ts) |
| data-table:communication_channels.profile.channels:columns | data-table | column-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/extension-points.ts) |
| data-table:communication_channels.profile.channels:filters | data-table | filter-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/extension-points.ts) |
| data-table:communication_channels.profile.channels:footer | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/extension-points.ts) |
| data-table:communication_channels.profile.channels:header | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/extension-points.ts) |
| data-table:communication_channels.profile.channels:row-actions | data-table | row-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/extension-points.ts) |
| data-table:communication_channels.profile.channels:search-trailing | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/extension-points.ts) |
| data-table:communication_channels.profile.channels:toolbar | data-table | toolbar-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/extension-points.ts) |
| communication_channels:channel_ingest_dead_letter | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:communication_channels:channel_ingest_dead_letter |
| communication_channels:channel_thread_mapping | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:communication_channels:channel_thread_mapping |
| communication_channels:channel_thread_token | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:communication_channels:channel_thread_token |
| communication_channels:communication_channel | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:communication_channels:communication_channel |
| communication_channels:external_conversation | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:communication_channels:external_conversation |
| communication_channels:external_message | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:communication_channels:external_message |
| communication_channels:message_channel_link | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:communication_channels:message_channel_link |
| communication_channels:message_reaction | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:communication_channels:message_reaction |
| communication_channels.channel.deleted | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:communication_channels.channel.deleted |
| communication_channels.channel.disconnected | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:communication_channels.channel.disconnected |
| communication_channels.channel.primary_changed | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:communication_channels.channel.primary_changed |
| communication_channels.channel.requires_reauth | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:communication_channels.channel.requires_reauth |
| communication_channels.contact.resolved | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:communication_channels.contact.resolved |
| communication_channels.conversation.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:communication_channels.conversation.created |
| communication_channels.conversation.reassigned | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:communication_channels.conversation.reassigned |
| communication_channels.message.delivery_failed | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:communication_channels.message.delivery_failed |
| communication_channels.message.received | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:communication_channels.message.received |
| communication_channels.message.sent | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:communication_channels.message.sent |
| communication_channels.push.deactivated | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:communication_channels.push.deactivated |
| communication_channels.push.failed | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:communication_channels.push.failed |
| communication_channels.push.registered | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:communication_channels.push.registered |
| communication_channels.push.renewed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:communication_channels.push.renewed |
| communication_channels.reaction.added | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:communication_channels.reaction.added |
| communication_channels.reaction.removed | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:communication_channels.reaction.removed |
| profile:communication-channels:connect | generic | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/extension-points.ts) |

<!-- end module facts section: communication_channels/umes-hosts -->
