# checkout — Contribution resolutions

[Back to module index](index.md)

## Contribution resolutions

| Contribution | Target | Resolution | Activations | Source |
|---|---|---|---|---|
| checkout-gateway-payment-authorized | event:payment_gateways.payment.authorized @payment_gateways | capability-only | — | [subscribers/gateway-payment-authorized.ts](../../../../node_modules/@open-mercato/checkout/src/modules/checkout/subscribers/gateway-payment-authorized.ts) |
| checkout-gateway-payment-cancelled | event:payment_gateways.payment.cancelled @payment_gateways | capability-only | — | [subscribers/gateway-payment-cancelled.ts](../../../../node_modules/@open-mercato/checkout/src/modules/checkout/subscribers/gateway-payment-cancelled.ts) |
| checkout-gateway-payment-captured | event:payment_gateways.payment.captured @payment_gateways | capability-only | — | [subscribers/gateway-payment-captured.ts](../../../../node_modules/@open-mercato/checkout/src/modules/checkout/subscribers/gateway-payment-captured.ts) |
| checkout-gateway-payment-failed | event:payment_gateways.payment.failed @payment_gateways | capability-only | — | [subscribers/gateway-payment-failed.ts](../../../../node_modules/@open-mercato/checkout/src/modules/checkout/subscribers/gateway-payment-failed.ts) |
| checkout:query-index-reindex-transaction-created | event:checkout.transaction.created @checkout | capability-only | — | [subscribers/search-reindex-transaction-created.ts](../../../../node_modules/@open-mercato/checkout/src/modules/checkout/subscribers/search-reindex-transaction-created.ts) |
| checkout:session-started-email | event:checkout.transaction.sessionStarted @checkout | capability-only | — | [subscribers/session-started-email.ts](../../../../node_modules/@open-mercato/checkout/src/modules/checkout/subscribers/session-started-email.ts) |
| checkout:transaction-completed-notify | event:checkout.transaction.completed @checkout | capability-only | — | [subscribers/transaction-completed-notify.ts](../../../../node_modules/@open-mercato/checkout/src/modules/checkout/subscribers/transaction-completed-notify.ts) |
| checkout:transaction-failed-notify | event:checkout.transaction.failed @checkout | capability-only | — | [subscribers/transaction-failed-notify.ts](../../../../node_modules/@open-mercato/checkout/src/modules/checkout/subscribers/transaction-failed-notify.ts) |
| checkout:usage-limit-reached-notify | event:checkout.link.usageLimitReached @checkout | capability-only | — | [subscribers/usage-limit-reached-notify.ts](../../../../node_modules/@open-mercato/checkout/src/modules/checkout/subscribers/usage-limit-reached-notify.ts) |
| checkout.injection.gateway-transaction-link@admin.page:payment-gateways/transactions:after | widget-spot:admin.page:payment-gateways/transactions:after @payment_gateways | bound | widget-spot:admin.page:payment-gateways/transactions:after:widget-injection-consumer | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/checkout/src/modules/checkout/widgets/injection-table.ts) |
| checkout.injection.payment-gateway-toolbar-link@data-table:payment_gateways.transactions.list:toolbar | widget-spot:data-table:payment_gateways.transactions.list:toolbar @payment_gateways | bound | widget-spot:data-table:payment_gateways.transactions.list:toolbar:widget-injection-consumer | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/checkout/src/modules/checkout/widgets/injection-table.ts) |
| checkout.link.locked.browser | event:checkout.link.locked @checkout | capability-only | — | [events.ts](../../../../node_modules/@open-mercato/checkout/src/modules/checkout/events.ts) |
| checkout.link.published.browser | event:checkout.link.published @checkout | capability-only | — | [events.ts](../../../../node_modules/@open-mercato/checkout/src/modules/checkout/events.ts) |
| checkout.link.usageLimitReached.browser | event:checkout.link.usageLimitReached @checkout | capability-only | — | [events.ts](../../../../node_modules/@open-mercato/checkout/src/modules/checkout/events.ts) |
| checkout.transaction.completed.browser | event:checkout.transaction.completed @checkout | capability-only | — | [events.ts](../../../../node_modules/@open-mercato/checkout/src/modules/checkout/events.ts) |
| checkout.transaction.failed.browser | event:checkout.transaction.failed @checkout | capability-only | — | [events.ts](../../../../node_modules/@open-mercato/checkout/src/modules/checkout/events.ts) |
| notification:checkout.link.usageLimitReached | module:checkout.link.usageLimitReached @checkout | capability-only | — | [notifications.ts](../../../../node_modules/@open-mercato/checkout/src/modules/checkout/notifications.ts) |
| notification:checkout.transaction.completed | module:checkout.transaction.completed @checkout | capability-only | — | [notifications.ts](../../../../node_modules/@open-mercato/checkout/src/modules/checkout/notifications.ts) |
| notification:checkout.transaction.failed | module:checkout.transaction.failed @checkout | capability-only | — | [notifications.ts](../../../../node_modules/@open-mercato/checkout/src/modules/checkout/notifications.ts) |

<!-- end module facts section: checkout/contribution-resolutions -->
