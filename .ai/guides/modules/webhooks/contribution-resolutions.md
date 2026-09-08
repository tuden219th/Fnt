# webhooks — Contribution resolutions

[Back to module index](index.md)

## Contribution resolutions

| Contribution | Target | Resolution | Activations | Source |
|---|---|---|---|---|
| integration:webhook_custom | module:webhook_custom | capability-only | — | [integration.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/integration.ts) |
| notification:webhooks.delivery.failed | module:webhooks.delivery.failed @webhooks | capability-only | — | [notifications.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/notifications.ts) |
| webhooks:failed-delivery-notification | event:webhooks.delivery.exhausted @webhooks | capability-only | — | [subscribers/failed-delivery-notification.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/subscribers/failed-delivery-notification.ts) |
| webhooks:inbound-process | event:webhooks.inbound.received @webhooks | capability-only | — | [subscribers/inbound-process.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/subscribers/inbound-process.ts) |
| webhooks:outbound-dispatch | wildcard:* | wildcard | — | [subscribers/outbound-dispatch.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/subscribers/outbound-dispatch.ts) |
| webhooks.delivery.exhausted.browser | event:webhooks.delivery.exhausted @webhooks | capability-only | — | [events.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/events.ts) |
| webhooks.delivery.failed.browser | event:webhooks.delivery.failed @webhooks | capability-only | — | [events.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/events.ts) |
| webhooks.delivery.succeeded.browser | event:webhooks.delivery.succeeded @webhooks | capability-only | — | [events.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/events.ts) |
| webhooks.inbound.handler_failed.browser | event:webhooks.inbound.handler_failed @webhooks | capability-only | — | [events.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/events.ts) |
| webhooks.webhook.disabled.browser | event:webhooks.webhook.disabled @webhooks | capability-only | — | [events.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/events.ts) |

<!-- end module facts section: webhooks/contribution-resolutions -->
