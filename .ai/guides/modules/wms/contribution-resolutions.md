# wms — Contribution resolutions

[Back to module index](index.md)

## Contribution resolutions

| Contribution | Target | Resolution | Activations | Source |
|---|---|---|---|---|
| notification:wms.inventory.low_stock | module:wms.inventory.low_stock @wms | capability-only | — | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/notifications.ts) |
| notification:wms.inventory.reservation_shortfall | module:wms.inventory.reservation_shortfall @wms | capability-only | — | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/notifications.ts) |
| search:wms:inventory_lot | module:wms:inventory_lot @wms | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/search.ts) |
| search:wms:product_inventory_profile | module:wms:product_inventory_profile @wms | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/search.ts) |
| search:wms:warehouse_location | module:wms:warehouse_location @wms | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/search.ts) |
| search:wms:warehouse | module:wms:warehouse @wms | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/search.ts) |
| wms:low-stock-notification | event:wms.inventory.low_stock @wms | capability-only | — | [subscribers/low-stock-notification.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/subscribers/low-stock-notification.ts) |
| wms:reservation-shortfall-notification | event:wms.inventory.reservation_shortfall @wms | capability-only | — | [subscribers/reservation-shortfall-notification.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/subscribers/reservation-shortfall-notification.ts) |
| wms:sales-order-cancelled-release | event:sales.order.cancelled @sales | capability-only | — | [subscribers/sales-order-cancelled-release.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/subscribers/sales-order-cancelled-release.ts) |
| wms:sales-order-confirmed-reserve | event:sales.order.confirmed @sales | capability-only | — | [subscribers/sales-order-confirmed-reserve.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/subscribers/sales-order-confirmed-reserve.ts) |
| wms.catalog-product-inventory | entity:catalog:catalog_product @catalog | bound | entity:catalog:catalog_product:crud-response-enricher | [data/enrichers.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/data/enrichers.ts) |
| wms.catalog-products.inventory-profile-sync | api-route:catalog/products @catalog | bound | api-route:catalog/products:POST:api-interceptor-bridge, api-route:catalog/products:PUT:api-interceptor-bridge | [api/interceptors.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/api/interceptors.ts) |
| wms.catalog-variant-inventory | entity:catalog:catalog_product_variant @catalog | bound | entity:catalog:catalog_product_variant:crud-response-enricher | [data/enrichers.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/data/enrichers.ts) |
| wms.catalog-variants.inventory-profile-sync | api-route:catalog/variants @catalog | bound | api-route:catalog/variants:POST:api-interceptor-bridge, api-route:catalog/variants:PUT:api-interceptor-bridge | [api/interceptors.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/api/interceptors.ts) |
| wms.injection.catalog-inventory-profile@crud-form:catalog.catalog_product_variant:fields | widget-spot:crud-form:catalog.catalog_product_variant:fields | bound | widget-spot:crud-form:catalog.catalog_product_variant:fields:widget-injection-consumer | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/widgets/injection-table.ts) |
| wms.injection.catalog-inventory-profile@crud-form:catalog.product:fields | widget-spot:crud-form:catalog.product:fields @catalog | bound | widget-spot:crud-form:catalog.product:fields:widget-injection-consumer | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/widgets/injection-table.ts) |
| wms.injection.order-items-stock-column@data-table:sales.order.items:columns | widget-spot:data-table:sales.order.items:columns @sales | bound | widget-spot:data-table:sales.order.items:columns:widget-injection-consumer | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/widgets/injection-table.ts) |
| wms.injection.sales-order-stock-context@sales.document.detail.order:details | widget-spot:sales.document.detail.order:details | wildcard | — | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/widgets/injection-table.ts) |
| wms.sales-order-inventory | entity:sales:sales_order @sales | capability-only | — | [data/enrichers.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/data/enrichers.ts) |

<!-- end module facts section: wms/contribution-resolutions -->
