# catalog — UMES hosts

[Back to module index](index.md)

## UMES hosts

| ID / pattern | Family | Supports | Context | Stability | Source |
|---|---|---|---|---|---|
| crud-form:catalog.product | crud-form | render-widget, lifecycle-handler | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/extension-points.ts) |
| crud-form:catalog.product | crud-form | component-replacement | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/extension-points.ts) |
| crud-form:catalog.product:fields | crud-form | field-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/extension-points.ts) |
| crud-form:catalog.product:header | crud-form | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/extension-points.ts) |
| data-table:catalog.categories.list | data-table | component-replacement | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/extension-points.ts) |
| data-table:catalog.categories.list:bulk-actions | data-table | bulk-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/extension-points.ts) |
| data-table:catalog.categories.list:columns | data-table | column-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/extension-points.ts) |
| data-table:catalog.categories.list:filters | data-table | filter-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/extension-points.ts) |
| data-table:catalog.categories.list:footer | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/extension-points.ts) |
| data-table:catalog.categories.list:header | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/extension-points.ts) |
| data-table:catalog.categories.list:row-actions | data-table | row-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/extension-points.ts) |
| data-table:catalog.categories.list:search-trailing | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/extension-points.ts) |
| data-table:catalog.categories.list:toolbar | data-table | toolbar-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/extension-points.ts) |
| data-table:catalog.products:footer | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/extension-points.ts) |
| data-table:catalog.products:header | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/extension-points.ts) |
| data-table:catalog.products:search-trailing | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/extension-points.ts) |
| data-table:catalog.products:toolbar | data-table | toolbar-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/extension-points.ts) |
| data-table:catalog.products.list | data-table | component-replacement | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/extension-points.ts) |
| data-table:catalog.products.list:bulk-actions | data-table | bulk-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/extension-points.ts) |
| data-table:catalog.products.list:columns | data-table | column-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/extension-points.ts) |
| data-table:catalog.products.list:filters | data-table | filter-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/extension-points.ts) |
| data-table:catalog.products.list:row-actions | data-table | row-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/extension-points.ts) |
| catalog:catalog_offer | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:catalog:catalog_offer |
| catalog:catalog_option_schema_template | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:catalog:catalog_option_schema_template |
| catalog:catalog_price_kind | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:catalog:catalog_price_kind |
| catalog:catalog_product | entity | response-enricher, query-enricher, mutation-guard | tenant-and-organization | STABLE | [api/products/route.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/api/products/route.ts) |
| catalog:catalog_product_category | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:catalog:catalog_product_category |
| catalog:catalog_product_category_assignment | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:catalog:catalog_product_category_assignment |
| catalog:catalog_product_price | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:catalog:catalog_product_price |
| catalog:catalog_product_tag | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:catalog:catalog_product_tag |
| catalog:catalog_product_tag_assignment | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:catalog:catalog_product_tag_assignment |
| catalog:catalog_product_unit_conversion | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:catalog:catalog_product_unit_conversion |
| catalog:catalog_product_variant | entity | response-enricher, query-enricher, mutation-guard | tenant-and-organization | STABLE | [api/variants/route.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/api/variants/route.ts) |
| catalog:catalog_product_variant_relation | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:catalog:catalog_product_variant_relation |
| catalog.settings | entity | response-enricher, query-enricher, mutation-guard | tenant-and-organization | STABLE | [api/settings/route.ts](../../../../node_modules/@open-mercato/core/src/modules/catalog/api/settings/route.ts) |
| catalog.category.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:catalog.category.created |
| catalog.category.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:catalog.category.deleted |
| catalog.category.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:catalog.category.updated |
| catalog.price.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:catalog.price.created |
| catalog.price.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:catalog.price.deleted |
| catalog.price.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:catalog.price.updated |
| catalog.pricing.resolve.after | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:catalog.pricing.resolve.after |
| catalog.pricing.resolve.before | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:catalog.pricing.resolve.before |
| catalog.product_unit_conversion.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:catalog.product_unit_conversion.created |
| catalog.product_unit_conversion.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:catalog.product_unit_conversion.deleted |
| catalog.product_unit_conversion.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:catalog.product_unit_conversion.updated |
| catalog.product.created | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:catalog.product.created |
| catalog.product.deleted | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:catalog.product.deleted |
| catalog.product.stock_low | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:catalog.product.stock_low |
| catalog.product.updated | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:catalog.product.updated |
| catalog.variant.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:catalog.variant.created |
| catalog.variant.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:catalog.variant.deleted |
| catalog.variant.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:catalog.variant.updated |
| catalog.catalog_offer.queried | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:catalog:catalog_offer |
| catalog.catalog_offer.querying | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:catalog:catalog_offer |
| catalog.catalog_option_schema_template.queried | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:catalog:catalog_option_schema_template |
| catalog.catalog_option_schema_template.querying | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:catalog:catalog_option_schema_template |
| catalog.catalog_price_kind.queried | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:catalog:catalog_price_kind |
| catalog.catalog_price_kind.querying | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:catalog:catalog_price_kind |
| catalog.catalog_product_category.queried | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:catalog:catalog_product_category |
| catalog.catalog_product_category.querying | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:catalog:catalog_product_category |
| catalog.catalog_product_tag.queried | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:catalog:catalog_product_tag |
| catalog.catalog_product_tag.querying | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:catalog:catalog_product_tag |
| catalog.catalog_product_unit_conversion.queried | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:catalog:catalog_product_unit_conversion |
| catalog.catalog_product_unit_conversion.querying | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:catalog:catalog_product_unit_conversion |
| catalog.catalog_product_variant.queried | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:catalog:catalog_product_variant |
| catalog.catalog_product_variant.querying | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:catalog:catalog_product_variant |
| catalog.catalog_product.queried | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:catalog:catalog_product |
| catalog.catalog_product.querying | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:catalog:catalog_product |

<!-- end module facts section: catalog/umes-hosts -->
