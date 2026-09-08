# payment_gateways — Incoming installed contributions

[Back to module index](index.md)

## Incoming installed contributions

| Contributor | Kind | Target | Resolution | Activation | Contribution · Source |
|---|---|---|---|---|---|
| checkout | subscriber | event:payment_gateways.payment.authorized @payment_gateways | capability-only | — | checkout-gateway-payment-authorized · [node_modules/@open-mercato/checkout/src/modules/checkout/subscribers/gateway-payment-authorized.ts](../../../../node_modules/@open-mercato/checkout/src/modules/checkout/subscribers/gateway-payment-authorized.ts) |
| checkout | subscriber | event:payment_gateways.payment.cancelled @payment_gateways | capability-only | — | checkout-gateway-payment-cancelled · [node_modules/@open-mercato/checkout/src/modules/checkout/subscribers/gateway-payment-cancelled.ts](../../../../node_modules/@open-mercato/checkout/src/modules/checkout/subscribers/gateway-payment-cancelled.ts) |
| checkout | subscriber | event:payment_gateways.payment.captured @payment_gateways | capability-only | — | checkout-gateway-payment-captured · [node_modules/@open-mercato/checkout/src/modules/checkout/subscribers/gateway-payment-captured.ts](../../../../node_modules/@open-mercato/checkout/src/modules/checkout/subscribers/gateway-payment-captured.ts) |
| checkout | subscriber | event:payment_gateways.payment.failed @payment_gateways | capability-only | — | checkout-gateway-payment-failed · [node_modules/@open-mercato/checkout/src/modules/checkout/subscribers/gateway-payment-failed.ts](../../../../node_modules/@open-mercato/checkout/src/modules/checkout/subscribers/gateway-payment-failed.ts) |
| checkout | widget | widget-spot:admin.page:payment-gateways/transactions:after @payment_gateways | bound | widget-spot:admin.page:payment-gateways/transactions:after:widget-injection-consumer | checkout.injection.gateway-transaction-link@admin.page:payment-gateways/transactions:after · [node_modules/@open-mercato/checkout/src/modules/checkout/widgets/injection-table.ts](../../../../node_modules/@open-mercato/checkout/src/modules/checkout/widgets/injection-table.ts) |
| checkout | data-table | widget-spot:data-table:payment_gateways.transactions.list:toolbar @payment_gateways | bound | widget-spot:data-table:payment_gateways.transactions.list:toolbar:widget-injection-consumer | checkout.injection.payment-gateway-toolbar-link@data-table:payment_gateways.transactions.list:toolbar · [node_modules/@open-mercato/checkout/src/modules/checkout/widgets/injection-table.ts](../../../../node_modules/@open-mercato/checkout/src/modules/checkout/widgets/injection-table.ts) |

<!-- end module facts section: payment_gateways/incoming-installed-contributions -->
