# webhooks — UMES hosts

[Back to module index](index.md)

## UMES hosts

| ID / pattern | Family | Supports | Context | Stability | Source |
|---|---|---|---|---|---|
| data-table:webhooks.deliveries | data-table | component-replacement | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/extension-points.ts) |
| data-table:webhooks.deliveries:bulk-actions | data-table | bulk-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/extension-points.ts) |
| data-table:webhooks.deliveries:columns | data-table | column-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/extension-points.ts) |
| data-table:webhooks.deliveries:filters | data-table | filter-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/extension-points.ts) |
| data-table:webhooks.deliveries:footer | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/extension-points.ts) |
| data-table:webhooks.deliveries:header | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/extension-points.ts) |
| data-table:webhooks.deliveries:row-actions | data-table | row-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/extension-points.ts) |
| data-table:webhooks.deliveries:search-trailing | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/extension-points.ts) |
| data-table:webhooks.deliveries:toolbar | data-table | toolbar-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/extension-points.ts) |
| data-table:webhooks.integration-deliveries | data-table | component-replacement | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/extension-points.ts) |
| data-table:webhooks.integration-deliveries:bulk-actions | data-table | bulk-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/extension-points.ts) |
| data-table:webhooks.integration-deliveries:columns | data-table | column-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/extension-points.ts) |
| data-table:webhooks.integration-deliveries:filters | data-table | filter-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/extension-points.ts) |
| data-table:webhooks.integration-deliveries:footer | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/extension-points.ts) |
| data-table:webhooks.integration-deliveries:header | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/extension-points.ts) |
| data-table:webhooks.integration-deliveries:row-actions | data-table | row-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/extension-points.ts) |
| data-table:webhooks.integration-deliveries:search-trailing | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/extension-points.ts) |
| data-table:webhooks.integration-deliveries:toolbar | data-table | toolbar-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/extension-points.ts) |
| data-table:webhooks.list | data-table | component-replacement | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/extension-points.ts) |
| data-table:webhooks.list:bulk-actions | data-table | bulk-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/extension-points.ts) |
| data-table:webhooks.list:columns | data-table | column-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/extension-points.ts) |
| data-table:webhooks.list:filters | data-table | filter-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/extension-points.ts) |
| data-table:webhooks.list:footer | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/extension-points.ts) |
| data-table:webhooks.list:header | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/extension-points.ts) |
| data-table:webhooks.list:row-actions | data-table | row-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/extension-points.ts) |
| data-table:webhooks.list:search-trailing | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/extension-points.ts) |
| data-table:webhooks.list:toolbar | data-table | toolbar-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/extension-points.ts) |
| webhooks:inbound_endpoint_config_entity | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:webhooks:inbound_endpoint_config_entity |
| webhooks:webhook_delivery_entity | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:webhooks:webhook_delivery_entity |
| webhooks:webhook_entity | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:webhooks:webhook_entity |
| webhooks:webhook_inbound_receipt_entity | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:webhooks:webhook_inbound_receipt_entity |
| webhooks:webhook_ingestion_entity | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:webhooks:webhook_ingestion_entity |
| webhooks.delivery.enqueued | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:webhooks.delivery.enqueued |
| webhooks.delivery.exhausted | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:webhooks.delivery.exhausted |
| webhooks.delivery.failed | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:webhooks.delivery.failed |
| webhooks.delivery.succeeded | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:webhooks.delivery.succeeded |
| webhooks.inbound.handler_failed | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:webhooks.inbound.handler_failed |
| webhooks.inbound.processed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:webhooks.inbound.processed |
| webhooks.inbound.received | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:webhooks.inbound.received |
| webhooks.secret.rotated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:webhooks.secret.rotated |
| webhooks.webhook.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:webhooks.webhook.created |
| webhooks.webhook.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:webhooks.webhook.deleted |
| webhooks.webhook.disabled | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:webhooks.webhook.disabled |
| webhooks.webhook.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:webhooks.webhook.updated |

<!-- end module facts section: webhooks/umes-hosts -->
