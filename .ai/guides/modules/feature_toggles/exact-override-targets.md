# feature_toggles — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["feature_toggles.global.manage"]` | disable-replace | aclFeatures:feature_toggles.global.manage | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/feature_toggles/acl.ts) |
| acl | `overrides.acl.features["feature_toggles.manage"]` | disable-replace | aclFeatures:feature_toggles.manage | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/feature_toggles/acl.ts) |
| acl | `overrides.acl.features["feature_toggles.view"]` | disable-replace | aclFeatures:feature_toggles.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/feature_toggles/acl.ts) |
| cli | `overrides.cli["override-set-value"]` | disable-replace | cliCommands:override-set-value | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/feature_toggles/cli.ts) |
| cli | `overrides.cli["seed-defaults"]` | disable-replace | cliCommands:seed-defaults | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/feature_toggles/cli.ts) |
| cli | `overrides.cli["toggle-create"]` | disable-replace | cliCommands:toggle-create | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/feature_toggles/cli.ts) |
| cli | `overrides.cli["toggle-delete"]` | disable-replace | cliCommands:toggle-delete | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/feature_toggles/cli.ts) |
| cli | `overrides.cli["toggle-update"]` | disable-replace | cliCommands:toggle-update | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/feature_toggles/cli.ts) |
| di | `overrides.di["featureTogglesService"]` | disable-replace | ownedContracts.di-registration:featureTogglesService | [di.ts:7](../../../../node_modules/@open-mercato/core/src/modules/feature_toggles/di.ts#L7) |
| routes | `overrides.routes.pages["backend:/backend/feature-toggles/global"]` | disable-replace | backendPages:/backend/feature-toggles/global | [backend/feature-toggles/global/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/feature_toggles/backend/feature-toggles/global/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/feature-toggles/global/[id]"]` | disable-replace | backendPages:/backend/feature-toggles/global/[id] | [backend/feature-toggles/global/[id]/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/feature_toggles/backend/feature-toggles/global/[id]/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/feature-toggles/global/[id]/edit"]` | disable-replace | backendPages:/backend/feature-toggles/global/[id]/edit | [backend/feature-toggles/global/[id]/edit/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/feature_toggles/backend/feature-toggles/global/[id]/edit/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/feature-toggles/global/create"]` | disable-replace | backendPages:/backend/feature-toggles/global/create | [backend/feature-toggles/global/create/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/feature_toggles/backend/feature-toggles/global/create/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/feature-toggles/overrides"]` | disable-replace | backendPages:/backend/feature-toggles/overrides | [backend/feature-toggles/overrides/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/feature_toggles/backend/feature-toggles/overrides/page.tsx) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:feature_toggles:setup | [setup.ts:3](../../../../node_modules/@open-mercato/core/src/modules/feature_toggles/setup.ts#L3) |

<!-- end module facts section: feature_toggles/exact-override-targets -->
