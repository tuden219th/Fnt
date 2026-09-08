# resources — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["resources.manage_resources"]` | disable-replace | aclFeatures:resources.manage_resources | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/resources/acl.ts) |
| acl | `overrides.acl.features["resources.view"]` | disable-replace | aclFeatures:resources.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/resources/acl.ts) |
| cli | `overrides.cli["seed-activity-types"]` | disable-replace | cliCommands:seed-activity-types | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/resources/cli.ts) |
| cli | `overrides.cli["seed-address-types"]` | disable-replace | cliCommands:seed-address-types | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/resources/cli.ts) |
| cli | `overrides.cli["seed-capacity-units"]` | disable-replace | cliCommands:seed-capacity-units | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/resources/cli.ts) |
| cli | `overrides.cli["seed-examples"]` | disable-replace | cliCommands:seed-examples | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/resources/cli.ts) |
| routes | `overrides.routes.pages["backend:/backend/resources/resource-types"]` | disable-replace | backendPages:/backend/resources/resource-types | [backend/resources/resource-types/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/resources/backend/resources/resource-types/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/resources/resource-types/[id]/edit"]` | disable-replace | backendPages:/backend/resources/resource-types/[id]/edit | [backend/resources/resource-types/[id]/edit/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/resources/backend/resources/resource-types/[id]/edit/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/resources/resource-types/create"]` | disable-replace | backendPages:/backend/resources/resource-types/create | [backend/resources/resource-types/create/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/resources/backend/resources/resource-types/create/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/resources/resources"]` | disable-replace | backendPages:/backend/resources/resources | [backend/resources/resources/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/resources/backend/resources/resources/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/resources/resources/[id]"]` | disable-replace | backendPages:/backend/resources/resources/[id] | [backend/resources/resources/[id]/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/resources/backend/resources/resources/[id]/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/resources/resources/create"]` | disable-replace | backendPages:/backend/resources/resources/create | [backend/resources/resources/create/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/resources/backend/resources/resources/create/page.tsx) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:resources:setup | [setup.ts:4](../../../../node_modules/@open-mercato/core/src/modules/resources/setup.ts#L4) |
| setup | `overrides.setup.seedDefaults` | replace | ownedContracts.setup:resources:setup | [setup.ts:4](../../../../node_modules/@open-mercato/core/src/modules/resources/setup.ts#L4) |
| setup | `overrides.setup.seedExamples` | replace | ownedContracts.setup:resources:setup | [setup.ts:4](../../../../node_modules/@open-mercato/core/src/modules/resources/setup.ts#L4) |

<!-- end module facts section: resources/exact-override-targets -->
