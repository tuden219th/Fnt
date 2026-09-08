# sales — Active extension bindings

[Back to module index](index.md)

## Active extension bindings

| Activation | Kind | Host | Contribution kinds | Phases | Bridge | Source |
|---|---|---|---|---|---|---|
| entity:sales.settings:mutation-guard | mutation-guard | entity:sales.settings @sales | mutation-guard | — | — | [api/settings/document-numbers/route.ts:109](../../../../node_modules/@open-mercato/core/src/modules/sales/api/settings/document-numbers/route.ts#L109) |
| widget-spot:crud-form:sales.payment_method:fields:widget-injection-consumer | widget-injection-consumer | widget-spot:crud-form:sales.payment_method:fields @framework | widget, data-table, crud-form | — | hosts:framework.crud-form-wildcard | packages/ui/src |
| widget-spot:crud-form:sales.sales_payment_method:fields:widget-injection-consumer | widget-injection-consumer | widget-spot:crud-form:sales.sales_payment_method:fields @framework | widget, data-table, crud-form | — | hosts:framework.crud-form-wildcard | packages/ui/src |
| widget-spot:dashboard:sales.dashboard.newOrders:dashboard-host-consumer | dashboard-host-consumer | widget-spot:dashboard:sales.dashboard.newOrders @framework | widget | — | hosts:framework.dashboard | packages/ui/src |
| widget-spot:dashboard:sales.dashboard.newQuotes:dashboard-host-consumer | dashboard-host-consumer | widget-spot:dashboard:sales.dashboard.newQuotes @framework | widget | — | hosts:framework.dashboard | packages/ui/src |
| widget-spot:data-table:sales.order.items:columns:widget-injection-consumer | widget-injection-consumer | widget-spot:data-table:sales.order.items:columns @sales | widget, data-table, crud-form | — | hosts:orderItemColumns | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/extension-points.ts) |
| widget-spot:data-table:sales.orders:row-actions:widget-injection-consumer | widget-injection-consumer | widget-spot:data-table:sales.orders:row-actions @sales | widget, data-table, crud-form | — | hosts:ordersTable.rowActions | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/sales/extension-points.ts) |

<!-- end module facts section: sales/active-extension-bindings -->
