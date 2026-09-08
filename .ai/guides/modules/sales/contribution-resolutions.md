# sales — Contribution resolutions

[Back to module index](index.md)

## Contribution resolutions

| Contribution | Target | Resolution | Activations | Source |
|---|---|---|---|---|
| dashboard:sales.dashboard.newOrders | widget-spot:dashboard:sales.dashboard.newOrders | bound | widget-spot:dashboard:sales.dashboard.newOrders:dashboard-host-consumer | [widgets/dashboard/new-orders/widget.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/widgets/dashboard/new-orders/widget.ts) |
| dashboard:sales.dashboard.newQuotes | widget-spot:dashboard:sales.dashboard.newQuotes | bound | widget-spot:dashboard:sales.dashboard.newQuotes:dashboard-host-consumer | [widgets/dashboard/new-quotes/widget.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/widgets/dashboard/new-quotes/widget.ts) |
| notification:sales.order.created | module:sales.order.created @sales | capability-only | — | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/notifications.ts) |
| notification:sales.payment.received | module:sales.payment.received | capability-only | — | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/notifications.ts) |
| notification:sales.quote.created | module:sales.quote.created @sales | capability-only | — | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/notifications.ts) |
| notification:sales.quote.expiring | module:sales.quote.expiring @sales | capability-only | — | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/notifications.ts) |
| sales:quote-expiring-notification | event:sales.quote.expiring @sales | capability-only | — | [subscribers/quote-expiring-notification.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/subscribers/quote-expiring-notification.ts) |
| sales:reconcile-on-address-delete | event:customers.address.deleted @customers | capability-only | — | [subscribers/reconcileOnAddressDelete.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/subscribers/reconcileOnAddressDelete.ts) |
| sales:reconcile-on-company-delete | event:customers.company.deleted @customers | capability-only | — | [subscribers/reconcileOnCompanyDelete.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/subscribers/reconcileOnCompanyDelete.ts) |
| sales:reconcile-on-person-delete | event:customers.person.deleted @customers | capability-only | — | [subscribers/reconcileOnCustomerDelete.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/subscribers/reconcileOnCustomerDelete.ts) |
| sales.catalog-image:sales:sales_order_line | entity:sales:sales_order_line @sales | capability-only | — | [data/enrichers.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/data/enrichers.ts) |
| sales.catalog-image:sales:sales_quote_line | entity:sales:sales_quote_line @sales | capability-only | — | [data/enrichers.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/data/enrichers.ts) |
| sales.injection.document-history@sales.document.detail.order:tabs | widget-spot:sales.document.detail.order:tabs | wildcard | — | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/widgets/injection-table.ts) |
| sales.injection.document-history@sales.document.detail.quote:tabs | widget-spot:sales.document.detail.quote:tabs | wildcard | — | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/widgets/injection-table.ts) |
| sales.injection.payment-gateway-config-field@crud-form:sales.payment_method:fields | widget-spot:crud-form:sales.payment_method:fields | bound | widget-spot:crud-form:sales.payment_method:fields:widget-injection-consumer | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/widgets/injection-table.ts) |
| sales.injection.payment-gateway-config-field@crud-form:sales.sales_payment_method:fields | widget-spot:crud-form:sales.sales_payment_method:fields | bound | widget-spot:crud-form:sales.sales_payment_method:fields:widget-injection-consumer | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/widgets/injection-table.ts) |
| search:sales:sales_channel | module:sales:sales_channel @sales | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/search.ts) |
| search:sales:sales_credit_memo_line | module:sales:sales_credit_memo_line @sales | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/search.ts) |
| search:sales:sales_credit_memo | module:sales:sales_credit_memo @sales | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/search.ts) |
| search:sales:sales_delivery_window | module:sales:sales_delivery_window @sales | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/search.ts) |
| search:sales:sales_document_address | module:sales:sales_document_address @sales | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/search.ts) |
| search:sales:sales_document_tag | module:sales:sales_document_tag @sales | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/search.ts) |
| search:sales:sales_invoice_line | module:sales:sales_invoice_line @sales | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/search.ts) |
| search:sales:sales_invoice | module:sales:sales_invoice @sales | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/search.ts) |
| search:sales:sales_note | module:sales:sales_note @sales | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/search.ts) |
| search:sales:sales_order_adjustment | module:sales:sales_order_adjustment @sales | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/search.ts) |
| search:sales:sales_order_line | module:sales:sales_order_line @sales | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/search.ts) |
| search:sales:sales_order | module:sales:sales_order @sales | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/search.ts) |
| search:sales:sales_payment_allocation | module:sales:sales_payment_allocation @sales | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/search.ts) |
| search:sales:sales_payment_method | module:sales:sales_payment_method @sales | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/search.ts) |
| search:sales:sales_payment | module:sales:sales_payment @sales | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/search.ts) |
| search:sales:sales_quote_adjustment | module:sales:sales_quote_adjustment @sales | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/search.ts) |
| search:sales:sales_quote_line | module:sales:sales_quote_line @sales | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/search.ts) |
| search:sales:sales_quote | module:sales:sales_quote @sales | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/search.ts) |
| search:sales:sales_shipment_item | module:sales:sales_shipment_item @sales | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/search.ts) |
| search:sales:sales_shipment | module:sales:sales_shipment @sales | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/search.ts) |
| search:sales:sales_shipping_method | module:sales:sales_shipping_method @sales | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/search.ts) |
| search:sales:sales_tax_rate | module:sales:sales_tax_rate @sales | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/search.ts) |
| workflow:sales.order-approval | module:sales.order-approval | capability-only | — | [workflows.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/workflows.ts) |

<!-- end module facts section: sales/contribution-resolutions -->
