# currencies — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["currencies.fetch.manage"]` | disable-replace | aclFeatures:currencies.fetch.manage | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/currencies/acl.ts) |
| acl | `overrides.acl.features["currencies.fetch.view"]` | disable-replace | aclFeatures:currencies.fetch.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/currencies/acl.ts) |
| acl | `overrides.acl.features["currencies.manage"]` | disable-replace | aclFeatures:currencies.manage | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/currencies/acl.ts) |
| acl | `overrides.acl.features["currencies.rates.manage"]` | disable-replace | aclFeatures:currencies.rates.manage | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/currencies/acl.ts) |
| acl | `overrides.acl.features["currencies.rates.view"]` | disable-replace | aclFeatures:currencies.rates.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/currencies/acl.ts) |
| acl | `overrides.acl.features["currencies.view"]` | disable-replace | aclFeatures:currencies.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/currencies/acl.ts) |
| cli | `overrides.cli["fetch-rates"]` | disable-replace | cliCommands:fetch-rates | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/currencies/cli.ts) |
| cli | `overrides.cli["list-providers"]` | disable-replace | cliCommands:list-providers | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/currencies/cli.ts) |
| cli | `overrides.cli["seed"]` | disable-replace | cliCommands:seed | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/currencies/cli.ts) |
| routes | `overrides.routes.pages["backend:/backend/config/currency-fetching"]` | disable-replace | backendPages:/backend/config/currency-fetching | [backend/config/currency-fetching/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/currencies/backend/config/currency-fetching/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/currencies"]` | disable-replace | backendPages:/backend/currencies | [backend/currencies/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/currencies/backend/currencies/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/currencies/[id]"]` | disable-replace | backendPages:/backend/currencies/[id] | [backend/currencies/[id]/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/currencies/backend/currencies/[id]/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/currencies/create"]` | disable-replace | backendPages:/backend/currencies/create | [backend/currencies/create/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/currencies/backend/currencies/create/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/exchange-rates"]` | disable-replace | backendPages:/backend/exchange-rates | [backend/exchange-rates/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/currencies/backend/exchange-rates/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/exchange-rates/[id]"]` | disable-replace | backendPages:/backend/exchange-rates/[id] | [backend/exchange-rates/[id]/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/currencies/backend/exchange-rates/[id]/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/exchange-rates/create"]` | disable-replace | backendPages:/backend/exchange-rates/create | [backend/exchange-rates/create/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/currencies/backend/exchange-rates/create/page.tsx) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:currencies:setup | [setup.ts:4](../../../../node_modules/@open-mercato/core/src/modules/currencies/setup.ts#L4) |
| setup | `overrides.setup.seedDefaults` | replace | ownedContracts.setup:currencies:setup | [setup.ts:4](../../../../node_modules/@open-mercato/core/src/modules/currencies/setup.ts#L4) |

<!-- end module facts section: currencies/exact-override-targets -->
