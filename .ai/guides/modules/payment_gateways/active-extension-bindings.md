# payment_gateways — Active extension bindings

[Back to module index](index.md)

## Active extension bindings

| Activation | Kind | Host | Contribution kinds | Phases | Bridge | Source |
|---|---|---|---|---|---|---|
| entity:payment_gateways.gateway_transaction:mutation-guard | mutation-guard | entity:payment_gateways.gateway_transaction @payment_gateways | mutation-guard | — | — | [api/status/route.ts:91](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/api/status/route.ts#L91) |
| widget-spot:admin.page:payment-gateways/transactions:after:widget-injection-consumer | widget-injection-consumer | widget-spot:admin.page:payment-gateways/transactions:after @payment_gateways | widget, data-table, crud-form | — | hosts:transactionsAfter | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/extension-points.ts) |
| widget-spot:data-table:payment_gateways.transactions.list:toolbar:widget-injection-consumer | widget-injection-consumer | widget-spot:data-table:payment_gateways.transactions.list:toolbar @payment_gateways | widget, data-table, crud-form | — | hosts:transactionsTable.toolbar | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/extension-points.ts) |

<!-- end module facts section: payment_gateways/active-extension-bindings -->
