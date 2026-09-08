# catalog — Incoming installed contributions

[Back to module index](index.md)

## Incoming installed contributions

| Contributor | Kind | Target | Resolution | Activation | Contribution · Source |
|---|---|---|---|---|---|
| eudr | data-table | widget-spot:data-table:catalog.products.list:columns @catalog | bound | widget-spot:data-table:catalog.products.list:columns:widget-injection-consumer | eudr.injection.product-column@data-table:catalog.products.list:columns · [node_modules/@open-mercato/core/src/modules/eudr/widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/eudr/widgets/injection-table.ts) |
| eudr | response-enricher | entity:catalog:catalog_product @catalog | bound | entity:catalog:catalog_product:crud-response-enricher | eudr.product-compliance · [node_modules/@open-mercato/core/src/modules/eudr/data/enrichers.ts](../../../../node_modules/@open-mercato/core/src/modules/eudr/data/enrichers.ts) |
| wms | response-enricher | entity:catalog:catalog_product @catalog | bound | entity:catalog:catalog_product:crud-response-enricher | wms.catalog-product-inventory · [node_modules/@open-mercato/core/src/modules/wms/data/enrichers.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/data/enrichers.ts) |
| wms | api-interceptor | api-route:catalog/products @catalog | bound | api-route:catalog/products:POST:api-interceptor-bridge | wms.catalog-products.inventory-profile-sync · [node_modules/@open-mercato/core/src/modules/wms/api/interceptors.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/api/interceptors.ts) |
| wms | api-interceptor | api-route:catalog/products @catalog | bound | api-route:catalog/products:PUT:api-interceptor-bridge | wms.catalog-products.inventory-profile-sync · [node_modules/@open-mercato/core/src/modules/wms/api/interceptors.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/api/interceptors.ts) |
| wms | response-enricher | entity:catalog:catalog_product_variant @catalog | bound | entity:catalog:catalog_product_variant:crud-response-enricher | wms.catalog-variant-inventory · [node_modules/@open-mercato/core/src/modules/wms/data/enrichers.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/data/enrichers.ts) |
| wms | api-interceptor | api-route:catalog/variants @catalog | bound | api-route:catalog/variants:POST:api-interceptor-bridge | wms.catalog-variants.inventory-profile-sync · [node_modules/@open-mercato/core/src/modules/wms/api/interceptors.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/api/interceptors.ts) |
| wms | api-interceptor | api-route:catalog/variants @catalog | bound | api-route:catalog/variants:PUT:api-interceptor-bridge | wms.catalog-variants.inventory-profile-sync · [node_modules/@open-mercato/core/src/modules/wms/api/interceptors.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/api/interceptors.ts) |
| wms | crud-form | widget-spot:crud-form:catalog.product:fields @catalog | bound | widget-spot:crud-form:catalog.product:fields:widget-injection-consumer | wms.injection.catalog-inventory-profile@crud-form:catalog.product:fields · [node_modules/@open-mercato/core/src/modules/wms/widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/widgets/injection-table.ts) |

<!-- end module facts section: catalog/incoming-installed-contributions -->
