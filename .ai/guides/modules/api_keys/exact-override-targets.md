# api_keys — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["api_keys.create"]` | disable-replace | aclFeatures:api_keys.create | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/api_keys/acl.ts) |
| acl | `overrides.acl.features["api_keys.delete"]` | disable-replace | aclFeatures:api_keys.delete | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/api_keys/acl.ts) |
| acl | `overrides.acl.features["api_keys.view"]` | disable-replace | aclFeatures:api_keys.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/api_keys/acl.ts) |
| cli | `overrides.cli["add"]` | disable-replace | cliCommands:add | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/api_keys/cli.ts) |
| routes | `overrides.routes.pages["backend:/backend/api-keys"]` | disable-replace | backendPages:/backend/api-keys | [backend/api-keys/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/api_keys/backend/api-keys/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/api-keys/create"]` | disable-replace | backendPages:/backend/api-keys/create | [backend/api-keys/create/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/api_keys/backend/api-keys/create/page.tsx) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:api_keys:setup | [setup.ts:3](../../../../node_modules/@open-mercato/core/src/modules/api_keys/setup.ts#L3) |

<!-- end module facts section: api_keys/exact-override-targets -->
