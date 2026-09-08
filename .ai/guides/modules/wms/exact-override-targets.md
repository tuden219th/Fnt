# wms — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["wms.adjust_inventory"]` | disable-replace | aclFeatures:wms.adjust_inventory | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/acl.ts) |
| acl | `overrides.acl.features["wms.cycle_count"]` | disable-replace | aclFeatures:wms.cycle_count | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/acl.ts) |
| acl | `overrides.acl.features["wms.import"]` | disable-replace | aclFeatures:wms.import | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/acl.ts) |
| acl | `overrides.acl.features["wms.manage_inventory"]` | disable-replace | aclFeatures:wms.manage_inventory | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/acl.ts) |
| acl | `overrides.acl.features["wms.manage_locations"]` | disable-replace | aclFeatures:wms.manage_locations | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/acl.ts) |
| acl | `overrides.acl.features["wms.manage_reservations"]` | disable-replace | aclFeatures:wms.manage_reservations | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/acl.ts) |
| acl | `overrides.acl.features["wms.manage_warehouses"]` | disable-replace | aclFeatures:wms.manage_warehouses | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/acl.ts) |
| acl | `overrides.acl.features["wms.manage_zones"]` | disable-replace | aclFeatures:wms.manage_zones | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/acl.ts) |
| acl | `overrides.acl.features["wms.receive_inventory"]` | disable-replace | aclFeatures:wms.receive_inventory | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/acl.ts) |
| acl | `overrides.acl.features["wms.view"]` | disable-replace | aclFeatures:wms.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/acl.ts) |
| cli | `overrides.cli["verify-balances"]` | disable-replace | cliCommands:verify-balances | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/cli.ts) |
| di | `overrides.di["InventoryBalance"]` | disable-replace | ownedContracts.di-registration:InventoryBalance | [di.ts:21](../../../../node_modules/@open-mercato/core/src/modules/wms/di.ts#L21) |
| di | `overrides.di["InventoryLot"]` | disable-replace | ownedContracts.di-registration:InventoryLot | [di.ts:20](../../../../node_modules/@open-mercato/core/src/modules/wms/di.ts#L20) |
| di | `overrides.di["InventoryMovement"]` | disable-replace | ownedContracts.di-registration:InventoryMovement | [di.ts:23](../../../../node_modules/@open-mercato/core/src/modules/wms/di.ts#L23) |
| di | `overrides.di["InventoryReservation"]` | disable-replace | ownedContracts.di-registration:InventoryReservation | [di.ts:22](../../../../node_modules/@open-mercato/core/src/modules/wms/di.ts#L22) |
| di | `overrides.di["ProductInventoryProfile"]` | disable-replace | ownedContracts.di-registration:ProductInventoryProfile | [di.ts:19](../../../../node_modules/@open-mercato/core/src/modules/wms/di.ts#L19) |
| di | `overrides.di["Warehouse"]` | disable-replace | ownedContracts.di-registration:Warehouse | [di.ts:16](../../../../node_modules/@open-mercato/core/src/modules/wms/di.ts#L16) |
| di | `overrides.di["WarehouseLocation"]` | disable-replace | ownedContracts.di-registration:WarehouseLocation | [di.ts:18](../../../../node_modules/@open-mercato/core/src/modules/wms/di.ts#L18) |
| di | `overrides.di["WarehouseZone"]` | disable-replace | ownedContracts.di-registration:WarehouseZone | [di.ts:17](../../../../node_modules/@open-mercato/core/src/modules/wms/di.ts#L17) |
| enrichers | `overrides.enrichers["wms.catalog-product-inventory"]` | disable-replace | extensionSurfaces.contributions:wms.catalog-product-inventory | [data/enrichers.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/data/enrichers.ts) |
| enrichers | `overrides.enrichers["wms.catalog-variant-inventory"]` | disable-replace | extensionSurfaces.contributions:wms.catalog-variant-inventory | [data/enrichers.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/data/enrichers.ts) |
| enrichers | `overrides.enrichers["wms.sales-order-inventory"]` | disable-replace | extensionSurfaces.contributions:wms.sales-order-inventory | [data/enrichers.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/data/enrichers.ts) |
| events | `overrides.events.subscribers["wms:low-stock-notification"]` | disable-replace | extensionSurfaces.contributions:wms:low-stock-notification | [subscribers/low-stock-notification.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/subscribers/low-stock-notification.ts) |
| events | `overrides.events.subscribers["wms:reservation-shortfall-notification"]` | disable-replace | extensionSurfaces.contributions:wms:reservation-shortfall-notification | [subscribers/reservation-shortfall-notification.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/subscribers/reservation-shortfall-notification.ts) |
| events | `overrides.events.subscribers["wms:sales-order-cancelled-release"]` | disable-replace | extensionSurfaces.contributions:wms:sales-order-cancelled-release | [subscribers/sales-order-cancelled-release.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/subscribers/sales-order-cancelled-release.ts) |
| events | `overrides.events.subscribers["wms:sales-order-confirmed-reserve"]` | disable-replace | extensionSurfaces.contributions:wms:sales-order-confirmed-reserve | [subscribers/sales-order-confirmed-reserve.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/subscribers/sales-order-confirmed-reserve.ts) |
| interceptors | `overrides.interceptors["wms.catalog-products.inventory-profile-sync"]` | disable-replace | extensionSurfaces.contributions:wms.catalog-products.inventory-profile-sync | [api/interceptors.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/api/interceptors.ts) |
| interceptors | `overrides.interceptors["wms.catalog-variants.inventory-profile-sync"]` | disable-replace | extensionSurfaces.contributions:wms.catalog-variants.inventory-profile-sync | [api/interceptors.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/api/interceptors.ts) |
| notifications | `overrides.notifications.types["wms.inventory.low_stock"]` | disable-replace | notifications:wms.inventory.low_stock | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/notifications.ts) |
| notifications | `overrides.notifications.types["wms.inventory.reservation_shortfall"]` | disable-replace | notifications:wms.inventory.reservation_shortfall | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/notifications.ts) |
| routes | `overrides.routes.pages["backend:/backend/config/wms"]` | disable-replace | backendPages:/backend/config/wms | [backend/config/wms/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/wms/backend/config/wms/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/wms"]` | disable-replace | backendPages:/backend/wms | [backend/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/wms/backend/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/wms/inventory"]` | disable-replace | backendPages:/backend/wms/inventory | [backend/wms/inventory/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/wms/backend/wms/inventory/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/wms/location/[id]"]` | disable-replace | backendPages:/backend/wms/location/[id] | [backend/wms/location/[id]/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/wms/backend/wms/location/[id]/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/wms/locations"]` | disable-replace | backendPages:/backend/wms/locations | [backend/wms/locations/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/wms/backend/wms/locations/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/wms/lot/[id]"]` | disable-replace | backendPages:/backend/wms/lot/[id] | [backend/wms/lot/[id]/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/wms/backend/wms/lot/[id]/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/wms/lots"]` | disable-replace | backendPages:/backend/wms/lots | [backend/wms/lots/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/wms/backend/wms/lots/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/wms/movements"]` | disable-replace | backendPages:/backend/wms/movements | [backend/wms/movements/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/wms/backend/wms/movements/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/wms/reservations"]` | disable-replace | backendPages:/backend/wms/reservations | [backend/wms/reservations/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/wms/backend/wms/reservations/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/wms/sku/[id]"]` | disable-replace | backendPages:/backend/wms/sku/[id] | [backend/wms/sku/[id]/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/wms/backend/wms/sku/[id]/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/wms/warehouses"]` | disable-replace | backendPages:/backend/wms/warehouses | [backend/wms/warehouses/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/wms/backend/wms/warehouses/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/wms/zones"]` | disable-replace | backendPages:/backend/wms/zones | [backend/wms/zones/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/wms/backend/wms/zones/page.tsx) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:wms:setup | [setup.ts:16](../../../../node_modules/@open-mercato/core/src/modules/wms/setup.ts#L16) |
| setup | `overrides.setup.seedDefaults` | replace | ownedContracts.setup:wms:setup | [setup.ts:16](../../../../node_modules/@open-mercato/core/src/modules/wms/setup.ts#L16) |
| widgets | `overrides.widgets.injection["wms.injection.catalog-inventory-profile"]` | disable-replace | extensionSurfaces.contributions:wms.injection.catalog-inventory-profile@crud-form:catalog.catalog_product_variant:fields | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/widgets/injection-table.ts) |
| widgets | `overrides.widgets.injection["wms.injection.order-items-stock-column"]` | disable-replace | extensionSurfaces.contributions:wms.injection.order-items-stock-column@data-table:sales.order.items:columns | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/widgets/injection-table.ts) |
| widgets | `overrides.widgets.injection["wms.injection.sales-order-stock-context"]` | disable-replace | extensionSurfaces.contributions:wms.injection.sales-order-stock-context@sales.document.detail.order:details | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/wms/widgets/injection-table.ts) |

<!-- end module facts section: wms/exact-override-targets -->
