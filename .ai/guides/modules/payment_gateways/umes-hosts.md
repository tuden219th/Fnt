# payment_gateways — UMES hosts

[Back to module index](index.md)

## UMES hosts

| ID / pattern | Family | Supports | Context | Stability | Source |
|---|---|---|---|---|---|
| data-table:payment_gateways.transactions.list | data-table | component-replacement | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/extension-points.ts) |
| data-table:payment_gateways.transactions.list:bulk-actions | data-table | bulk-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/extension-points.ts) |
| data-table:payment_gateways.transactions.list:columns | data-table | column-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/extension-points.ts) |
| data-table:payment_gateways.transactions.list:filters | data-table | filter-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/extension-points.ts) |
| data-table:payment_gateways.transactions.list:footer | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/extension-points.ts) |
| data-table:payment_gateways.transactions.list:header | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/extension-points.ts) |
| data-table:payment_gateways.transactions.list:row-actions | data-table | row-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/extension-points.ts) |
| data-table:payment_gateways.transactions.list:search-trailing | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/extension-points.ts) |
| data-table:payment_gateways.transactions.list:toolbar | data-table | toolbar-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/extension-points.ts) |
| admin.page:payment-gateways/transactions:after | detail | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/extension-points.ts) |
| payment_gateways:gateway_payment_operation | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:payment_gateways:gateway_payment_operation |
| payment_gateways:gateway_session_initialization | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:payment_gateways:gateway_session_initialization |
| payment_gateways:gateway_transaction | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:payment_gateways:gateway_transaction |
| payment_gateways:webhook_processed_event | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:payment_gateways:webhook_processed_event |
| payment_gateways.gateway_transaction | entity | response-enricher, query-enricher, mutation-guard | tenant-and-organization | STABLE | [api/status/route.ts](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/api/status/route.ts) |
| payment_gateways.payment.authorized | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:payment_gateways.payment.authorized |
| payment_gateways.payment.cancelled | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:payment_gateways.payment.cancelled |
| payment_gateways.payment.captured | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:payment_gateways.payment.captured |
| payment_gateways.payment.failed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:payment_gateways.payment.failed |
| payment_gateways.payment.refunded | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:payment_gateways.payment.refunded |
| payment_gateways.session.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:payment_gateways.session.created |
| payment_gateways.session.expired | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:payment_gateways.session.expired |
| payment_gateways.webhook.failed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:payment_gateways.webhook.failed |
| payment_gateways.webhook.received | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:payment_gateways.webhook.received |

<!-- end module facts section: payment_gateways/umes-hosts -->
