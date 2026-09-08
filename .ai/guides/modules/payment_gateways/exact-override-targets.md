# payment_gateways — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["payment_gateways.capture"]` | disable-replace | aclFeatures:payment_gateways.capture | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/acl.ts) |
| acl | `overrides.acl.features["payment_gateways.manage"]` | disable-replace | aclFeatures:payment_gateways.manage | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/acl.ts) |
| acl | `overrides.acl.features["payment_gateways.refund"]` | disable-replace | aclFeatures:payment_gateways.refund | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/acl.ts) |
| acl | `overrides.acl.features["payment_gateways.view"]` | disable-replace | aclFeatures:payment_gateways.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/acl.ts) |
| di | `overrides.di["GatewayTransaction"]` | disable-replace | ownedContracts.di-registration:GatewayTransaction | [di.ts:53](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/di.ts#L53) |
| di | `overrides.di["paymentGatewayDescriptorService"]` | disable-replace | ownedContracts.di-registration:paymentGatewayDescriptorService | [di.ts:49](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/di.ts#L49) |
| di | `overrides.di["paymentGatewayService"]` | disable-replace | ownedContracts.di-registration:paymentGatewayService | [di.ts:40](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/di.ts#L40) |
| di | `overrides.di["WebhookProcessedEvent"]` | disable-replace | ownedContracts.di-registration:WebhookProcessedEvent | [di.ts:54](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/di.ts#L54) |
| encryption | `overrides.encryption.maps["payment_gateways:gateway_transaction"]` | disable-replace | ownedContracts.encryption:payment_gateways:gateway_transaction | [encryption.ts:10](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/encryption.ts#L10) |
| interceptors | `overrides.interceptors["payment_gateways.validate-provider"]` | disable-replace | extensionSurfaces.contributions:payment_gateways.validate-provider | [api/interceptors.ts](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/api/interceptors.ts) |
| routes | `overrides.routes.pages["backend:/backend/payment-gateways"]` | disable-replace | backendPages:/backend/payment-gateways | [backend/payment-gateways/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/backend/payment-gateways/page.tsx) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:payment_gateways:setup | [setup.ts:61](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/setup.ts#L61) |
| setup | `overrides.setup.seedDefaults` | replace | ownedContracts.setup:payment_gateways:setup | [setup.ts:61](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/setup.ts#L61) |
| workers | `overrides.workers["payment_gateways:session-initialization-prune"]` | disable-replace | ownedContracts.worker:payment_gateways:session-initialization-prune | [workers/session-initialization-prune.ts:30](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/workers/session-initialization-prune.ts#L30) |
| workers | `overrides.workers["payment-gateways:status-poller"]` | disable-replace | ownedContracts.worker:payment-gateways:status-poller | [workers/status-poller.ts:18](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/workers/status-poller.ts#L18) |
| workers | `overrides.workers["payment-gateways:webhook-processor"]` | disable-replace | ownedContracts.worker:payment-gateways:webhook-processor | [workers/webhook-processor.ts:16](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/workers/webhook-processor.ts#L16) |

<!-- end module facts section: payment_gateways/exact-override-targets -->
