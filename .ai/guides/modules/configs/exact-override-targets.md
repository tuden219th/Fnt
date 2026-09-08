# configs — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["configs.cache.manage"]` | disable-replace | aclFeatures:configs.cache.manage | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/configs/acl.ts) |
| acl | `overrides.acl.features["configs.cache.view"]` | disable-replace | aclFeatures:configs.cache.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/configs/acl.ts) |
| acl | `overrides.acl.features["configs.manage"]` | disable-replace | aclFeatures:configs.manage | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/configs/acl.ts) |
| acl | `overrides.acl.features["configs.system_status.view"]` | disable-replace | aclFeatures:configs.system_status.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/configs/acl.ts) |
| cli | `overrides.cli["cache"]` | disable-replace | cliCommands:cache | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/configs/cli.ts) |
| cli | `overrides.cli["help"]` | disable-replace | cliCommands:help | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/configs/cli.ts) |
| cli | `overrides.cli["restore-defaults"]` | disable-replace | cliCommands:restore-defaults | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/configs/cli.ts) |
| di | `overrides.di["moduleConfigService"]` | disable-replace | ownedContracts.di-registration:moduleConfigService | [di.ts:8](../../../../node_modules/@open-mercato/core/src/modules/configs/di.ts#L8) |
| routes | `overrides.routes.pages["backend:/backend/config/cache"]` | disable-replace | backendPages:/backend/config/cache | [backend/config/cache/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/configs/backend/config/cache/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/config/module-telemetry"]` | disable-replace | backendPages:/backend/config/module-telemetry | [backend/config/module-telemetry/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/configs/backend/config/module-telemetry/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/config/system-status"]` | disable-replace | backendPages:/backend/config/system-status | [backend/config/system-status/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/configs/backend/config/system-status/page.tsx) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:configs:setup | [setup.ts:3](../../../../node_modules/@open-mercato/core/src/modules/configs/setup.ts#L3) |

<!-- end module facts section: configs/exact-override-targets -->
