# gateway_stripe — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["gateway_stripe.configure"]` | disable-replace | aclFeatures:gateway_stripe.configure | [acl.ts](../../../../node_modules/@open-mercato/gateway-stripe/src/modules/gateway_stripe/acl.ts) |
| acl | `overrides.acl.features["gateway_stripe.view"]` | disable-replace | aclFeatures:gateway_stripe.view | [acl.ts](../../../../node_modules/@open-mercato/gateway-stripe/src/modules/gateway_stripe/acl.ts) |
| cli | `overrides.cli["configure-from-env"]` | disable-replace | cliCommands:configure-from-env | [cli.ts](../../../../node_modules/@open-mercato/gateway-stripe/src/modules/gateway_stripe/cli.ts) |
| cli | `overrides.cli["help"]` | disable-replace | cliCommands:help | [cli.ts](../../../../node_modules/@open-mercato/gateway-stripe/src/modules/gateway_stripe/cli.ts) |
| di | `overrides.di["stripeHealthCheck"]` | disable-replace | ownedContracts.di-registration:stripeHealthCheck | [di.ts:108](../../../../node_modules/@open-mercato/gateway-stripe/src/modules/gateway_stripe/di.ts#L108) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:gateway_stripe:setup | [setup.ts:10](../../../../node_modules/@open-mercato/gateway-stripe/src/modules/gateway_stripe/setup.ts#L10) |
| setup | `overrides.setup.onTenantCreated` | replace | ownedContracts.setup:gateway_stripe:setup | [setup.ts:10](../../../../node_modules/@open-mercato/gateway-stripe/src/modules/gateway_stripe/setup.ts#L10) |
| workers | `overrides.workers["gateway-stripe:webhook-processor"]` | disable-replace | ownedContracts.worker:gateway-stripe:webhook-processor | [workers/webhook-processor.ts:26](../../../../node_modules/@open-mercato/gateway-stripe/src/modules/gateway_stripe/workers/webhook-processor.ts#L26) |

<!-- end module facts section: gateway_stripe/exact-override-targets -->
