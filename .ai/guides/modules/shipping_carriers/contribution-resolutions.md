# shipping_carriers — Contribution resolutions

[Back to module index](index.md)

## Contribution resolutions

| Contribution | Target | Resolution | Activations | Source |
|---|---|---|---|---|
| shipping_carriers.injection.create-shipment-button@data-table:sales.orders:row-actions | widget-spot:data-table:sales.orders:row-actions @sales | bound | widget-spot:data-table:sales.orders:row-actions:widget-injection-consumer | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/shipping_carriers/widgets/injection-table.ts) |
| shipping_carriers.injection.tracking-column@data-table:sales.shipments:columns | widget-spot:data-table:sales.shipments:columns | optional-target-missing | — | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/shipping_carriers/widgets/injection-table.ts) |
| shipping_carriers.injection.tracking-status-badge@data-table:sales.shipments:columns | widget-spot:data-table:sales.shipments:columns | optional-target-missing | — | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/shipping_carriers/widgets/injection-table.ts) |
| shipping_carriers.sales-shipment-carrier | entity:sales.shipment | optional-target-missing | — | [data/enrichers.ts](../../../../node_modules/@open-mercato/core/src/modules/shipping_carriers/data/enrichers.ts) |
| shipping_carriers.validate-provider | wildcard:shipping-carriers/* | wildcard | — | [api/interceptors.ts](../../../../node_modules/@open-mercato/core/src/modules/shipping_carriers/api/interceptors.ts) |

<!-- end module facts section: shipping_carriers/contribution-resolutions -->
