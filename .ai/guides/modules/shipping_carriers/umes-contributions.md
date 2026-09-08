# shipping_carriers — UMES contributions

[Back to module index](index.md)

## UMES contributions

| ID | Kind | Target | Phase / operations | Contract | Resolution | Source |
|---|---|---|---|---|---|---|
| shipping_carriers.validate-provider | api-interceptor | shipping-carriers/* | before | activation=crud-pipeline; failurePosture=fallback; methods=POST,GET; phases=before; route=shipping-carriers/*; timeoutMs=2000 | pattern | [api/interceptors.ts](../../../../node_modules/@open-mercato/core/src/modules/shipping_carriers/api/interceptors.ts) |
| shipping_carriers.injection.create-shipment-button@data-table:sales.orders:row-actions | data-table | data-table:sales.orders:row-actions | — | executionGuard=host; payload=row-action; tableId=sales.orders | exact | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/shipping_carriers/widgets/injection-table.ts) |
| shipping_carriers.injection.tracking-column@data-table:sales.shipments:columns | data-table | data-table:sales.shipments:columns | — | executionGuard=host; payload=column; tableId=sales.shipments | optional-external | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/shipping_carriers/widgets/injection-table.ts) |
| shipping_carriers.injection.tracking-status-badge@data-table:sales.shipments:columns | data-table | data-table:sales.shipments:columns | — | executionGuard=host; payload=column; tableId=sales.shipments | optional-external | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/shipping_carriers/widgets/injection-table.ts) |
| shipping_carriers.sales-shipment-carrier | response-enricher | sales.shipment | list, detail | cachePosture=rerun-on-list-cache-hit; critical=false; fallback=none; surfaces=list,detail; targetEntity=sales.shipment; timeoutMs=2000 | optional-external | [data/enrichers.ts](../../../../node_modules/@open-mercato/core/src/modules/shipping_carriers/data/enrichers.ts) |

<!-- end module facts section: shipping_carriers/umes-contributions -->
