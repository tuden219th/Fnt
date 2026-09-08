# catalog — Active extension bindings

[Back to module index](index.md)

## Active extension bindings

| Activation | Kind | Host | Contribution kinds | Phases | Bridge | Source |
|---|---|---|---|---|---|---|
| api-route:catalog/products:POST:api-interceptor-bridge | api-interceptor-bridge | api-route:catalog/products POST @catalog | api-interceptor | after, before | apiRoutes:/catalog/products | [api/products/route.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/api/products/route.ts) |
| api-route:catalog/products:PUT:api-interceptor-bridge | api-interceptor-bridge | api-route:catalog/products PUT @catalog | api-interceptor | after, before | apiRoutes:/catalog/products | [api/products/route.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/api/products/route.ts) |
| api-route:catalog/variants:POST:api-interceptor-bridge | api-interceptor-bridge | api-route:catalog/variants POST @catalog | api-interceptor | after, before | apiRoutes:/catalog/variants | [api/variants/route.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/api/variants/route.ts) |
| api-route:catalog/variants:PUT:api-interceptor-bridge | api-interceptor-bridge | api-route:catalog/variants PUT @catalog | api-interceptor | after, before | apiRoutes:/catalog/variants | [api/variants/route.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/api/variants/route.ts) |
| entity:catalog:catalog_product_variant:crud-response-enricher | crud-response-enricher | entity:catalog:catalog_product_variant @catalog | response-enricher | — | — | [api/variants/route.ts:107](../../../../node_modules/@open-mercato/core/src/modules/catalog/api/variants/route.ts#L107) |
| entity:catalog:catalog_product:crud-response-enricher | crud-response-enricher | entity:catalog:catalog_product @catalog | response-enricher | — | — | [api/products/route.ts:806](../../../../node_modules/@open-mercato/core/src/modules/catalog/api/products/route.ts#L806) |
| entity:catalog.settings:mutation-guard | mutation-guard | entity:catalog.settings @catalog | mutation-guard | — | — | [api/settings/route.ts:91](../../../../node_modules/@open-mercato/core/src/modules/catalog/api/settings/route.ts#L91) |
| widget-spot:crud-form:catalog.catalog_product:widget-injection-consumer | widget-injection-consumer | widget-spot:crud-form:catalog.catalog_product @framework | widget, data-table, crud-form | — | hosts:framework.crud-form-wildcard | packages/ui/src |
| widget-spot:crud-form:catalog.product:fields:widget-injection-consumer | widget-injection-consumer | widget-spot:crud-form:catalog.product:fields @catalog | widget, data-table, crud-form | — | hosts:productForm.fields | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/extension-points.ts) |
| widget-spot:crud-form:catalog.product:widget-injection-consumer | widget-injection-consumer | widget-spot:crud-form:catalog.product @catalog | widget, data-table, crud-form | — | hosts:productForm.base | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/extension-points.ts) |
| widget-spot:data-table:catalog.products:search-trailing:widget-injection-consumer | widget-injection-consumer | widget-spot:data-table:catalog.products:search-trailing @catalog | widget, data-table, crud-form | — | hosts:productsTable.searchTrailing | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/extension-points.ts) |
| widget-spot:data-table:catalog.products.list:bulk-actions:widget-injection-consumer | widget-injection-consumer | widget-spot:data-table:catalog.products.list:bulk-actions @catalog | widget, data-table, crud-form | — | hosts:productsTable.bulkActions | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/extension-points.ts) |
| widget-spot:data-table:catalog.products.list:columns:widget-injection-consumer | widget-injection-consumer | widget-spot:data-table:catalog.products.list:columns @catalog | widget, data-table, crud-form | — | hosts:productsTable.columns | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/extension-points.ts) |

<!-- end module facts section: catalog/active-extension-bindings -->
