# shipping_carriers — UMES hosts

[Back to module index](index.md)

## UMES hosts

| ID / pattern | Family | Supports | Context | Stability | Source |
|---|---|---|---|---|---|
| shipping_carriers:carrier_shipment | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:shipping_carriers:carrier_shipment |
| shipping_carriers:carrier_shipment_idempotency_key | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:shipping_carriers:carrier_shipment_idempotency_key |
| shipping_carriers:carrier_webhook_processed_event | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:shipping_carriers:carrier_webhook_processed_event |
| shipping_carriers.shipment | entity | response-enricher, query-enricher, mutation-guard | tenant-and-organization | STABLE | [api/cancel/route.ts](../../../../node_modules/@open-mercato/core/src/modules/shipping_carriers/api/cancel/route.ts) |
| shipping_carriers.shipment.cancelled | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:shipping_carriers.shipment.cancelled |
| shipping_carriers.shipment.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:shipping_carriers.shipment.created |
| shipping_carriers.shipment.delivered | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:shipping_carriers.shipment.delivered |
| shipping_carriers.shipment.returned | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:shipping_carriers.shipment.returned |
| shipping_carriers.shipment.status_changed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:shipping_carriers.shipment.status_changed |
| shipping_carriers.webhook.failed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:shipping_carriers.webhook.failed |
| shipping_carriers.webhook.received | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:shipping_carriers.webhook.received |

<!-- end module facts section: shipping_carriers/umes-hosts -->
