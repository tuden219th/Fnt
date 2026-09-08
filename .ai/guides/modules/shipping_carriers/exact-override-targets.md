# shipping_carriers — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["shipping_carriers.manage"]` | disable-replace | aclFeatures:shipping_carriers.manage | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/shipping_carriers/acl.ts) |
| acl | `overrides.acl.features["shipping_carriers.view"]` | disable-replace | aclFeatures:shipping_carriers.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/shipping_carriers/acl.ts) |
| di | `overrides.di["CarrierShipment"]` | disable-replace | ownedContracts.di-registration:CarrierShipment | [di.ts:18](../../../../node_modules/@open-mercato/core/src/modules/shipping_carriers/di.ts#L18) |
| di | `overrides.di["shippingCarrierService"]` | disable-replace | ownedContracts.di-registration:shippingCarrierService | [di.ts:15](../../../../node_modules/@open-mercato/core/src/modules/shipping_carriers/di.ts#L15) |
| enrichers | `overrides.enrichers["shipping_carriers.sales-shipment-carrier"]` | disable-replace | extensionSurfaces.contributions:shipping_carriers.sales-shipment-carrier | [data/enrichers.ts](../../../../node_modules/@open-mercato/core/src/modules/shipping_carriers/data/enrichers.ts) |
| interceptors | `overrides.interceptors["shipping_carriers.validate-provider"]` | disable-replace | extensionSurfaces.contributions:shipping_carriers.validate-provider | [api/interceptors.ts](../../../../node_modules/@open-mercato/core/src/modules/shipping_carriers/api/interceptors.ts) |
| routes | `overrides.routes.pages["backend:/backend/shipping-carriers/create"]` | disable-replace | backendPages:/backend/shipping-carriers/create | [backend/shipping-carriers/create/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/shipping_carriers/backend/shipping-carriers/create/page.tsx) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:shipping_carriers:setup | [setup.ts:3](../../../../node_modules/@open-mercato/core/src/modules/shipping_carriers/setup.ts#L3) |
| widgets | `overrides.widgets.injection["shipping_carriers.injection.create-shipment-button"]` | disable-replace | extensionSurfaces.contributions:shipping_carriers.injection.create-shipment-button@data-table:sales.orders:row-actions | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/shipping_carriers/widgets/injection-table.ts) |
| widgets | `overrides.widgets.injection["shipping_carriers.injection.tracking-column"]` | disable-replace | extensionSurfaces.contributions:shipping_carriers.injection.tracking-column@data-table:sales.shipments:columns | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/shipping_carriers/widgets/injection-table.ts) |
| widgets | `overrides.widgets.injection["shipping_carriers.injection.tracking-status-badge"]` | disable-replace | extensionSurfaces.contributions:shipping_carriers.injection.tracking-status-badge@data-table:sales.shipments:columns | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/shipping_carriers/widgets/injection-table.ts) |
| workers | `overrides.workers["shipping-carriers:status-poller"]` | disable-replace | ownedContracts.worker:shipping-carriers:status-poller | [workers/status-poller.ts:17](../../../../node_modules/@open-mercato/core/src/modules/shipping_carriers/workers/status-poller.ts#L17) |
| workers | `overrides.workers["shipping-carriers:webhook-processor"]` | disable-replace | ownedContracts.worker:shipping-carriers:webhook-processor | [workers/webhook-processor.ts:28](../../../../node_modules/@open-mercato/core/src/modules/shipping_carriers/workers/webhook-processor.ts#L28) |

<!-- end module facts section: shipping_carriers/exact-override-targets -->
