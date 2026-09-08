# entities — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["entities.definitions.manage"]` | disable-replace | aclFeatures:entities.definitions.manage | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/entities/acl.ts) |
| acl | `overrides.acl.features["entities.definitions.view"]` | disable-replace | aclFeatures:entities.definitions.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/entities/acl.ts) |
| acl | `overrides.acl.features["entities.records.manage"]` | disable-replace | aclFeatures:entities.records.manage | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/entities/acl.ts) |
| acl | `overrides.acl.features["entities.records.view"]` | disable-replace | aclFeatures:entities.records.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/entities/acl.ts) |
| cli | `overrides.cli["add-field"]` | disable-replace | cliCommands:add-field | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/entities/cli.ts) |
| cli | `overrides.cli["backfill-system-encryption"]` | disable-replace | cliCommands:backfill-system-encryption | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/entities/cli.ts) |
| cli | `overrides.cli["decrypt-database"]` | disable-replace | cliCommands:decrypt-database | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/entities/cli.ts) |
| cli | `overrides.cli["install"]` | disable-replace | cliCommands:install | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/entities/cli.ts) |
| cli | `overrides.cli["reinstall"]` | disable-replace | cliCommands:reinstall | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/entities/cli.ts) |
| cli | `overrides.cli["rotate-encryption-key"]` | disable-replace | cliCommands:rotate-encryption-key | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/entities/cli.ts) |
| cli | `overrides.cli["seed-encryption"]` | disable-replace | cliCommands:seed-encryption | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/entities/cli.ts) |
| routes | `overrides.routes.pages["backend:/backend/config/encryption"]` | disable-replace | backendPages:/backend/config/encryption | [backend/config/encryption/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/entities/backend/config/encryption/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/config/settings"]` | disable-replace | backendPages:/backend/config/settings | [backend/config/settings/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/entities/backend/config/settings/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/entities/system"]` | disable-replace | backendPages:/backend/entities/system | [backend/entities/system/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/entities/backend/entities/system/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/entities/user"]` | disable-replace | backendPages:/backend/entities/user | [backend/entities/user/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/entities/backend/entities/user/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/entities/user/[entityId]"]` | disable-replace | backendPages:/backend/entities/user/[entityId] | [backend/entities/user/[entityId]/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/entities/backend/entities/user/[entityId]/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/entities/user/[entityId]/records"]` | disable-replace | backendPages:/backend/entities/user/[entityId]/records | [backend/entities/user/[entityId]/records/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/entities/backend/entities/user/[entityId]/records/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/entities/user/[entityId]/records/[recordId]"]` | disable-replace | backendPages:/backend/entities/user/[entityId]/records/[recordId] | [backend/entities/user/[entityId]/records/[recordId]/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/entities/backend/entities/user/[entityId]/records/[recordId]/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/entities/user/[entityId]/records/create"]` | disable-replace | backendPages:/backend/entities/user/[entityId]/records/create | [backend/entities/user/[entityId]/records/create/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/entities/backend/entities/user/[entityId]/records/create/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/entities/user/create"]` | disable-replace | backendPages:/backend/entities/user/create | [backend/entities/user/create/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/entities/backend/entities/user/create/page.tsx) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:entities:setup | [setup.ts:3](../../../../node_modules/@open-mercato/core/src/modules/entities/setup.ts#L3) |

<!-- end module facts section: entities/exact-override-targets -->
