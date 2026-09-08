# planner — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["planner.manage_availability"]` | disable-replace | aclFeatures:planner.manage_availability | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/planner/acl.ts) |
| acl | `overrides.acl.features["planner.view"]` | disable-replace | aclFeatures:planner.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/planner/acl.ts) |
| cli | `overrides.cli["seed-availability-rulesets"]` | disable-replace | cliCommands:seed-availability-rulesets | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/planner/cli.ts) |
| cli | `overrides.cli["seed-unavailability-reasons"]` | disable-replace | cliCommands:seed-unavailability-reasons | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/planner/cli.ts) |
| di | `overrides.di["plannerAvailabilityService"]` | disable-replace | ownedContracts.di-registration:plannerAvailabilityService | [di.ts:7](../../../../node_modules/@open-mercato/core/src/modules/planner/di.ts#L7) |
| routes | `overrides.routes.pages["backend:/backend/planner/availability-rulesets"]` | disable-replace | backendPages:/backend/planner/availability-rulesets | [backend/planner/availability-rulesets/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/planner/backend/planner/availability-rulesets/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/planner/availability-rulesets/[id]"]` | disable-replace | backendPages:/backend/planner/availability-rulesets/[id] | [backend/planner/availability-rulesets/[id]/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/planner/backend/planner/availability-rulesets/[id]/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/planner/availability-rulesets/create"]` | disable-replace | backendPages:/backend/planner/availability-rulesets/create | [backend/planner/availability-rulesets/create/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/planner/backend/planner/availability-rulesets/create/page.tsx) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:planner:setup | [setup.ts:4](../../../../node_modules/@open-mercato/core/src/modules/planner/setup.ts#L4) |
| setup | `overrides.setup.seedDefaults` | replace | ownedContracts.setup:planner:setup | [setup.ts:4](../../../../node_modules/@open-mercato/core/src/modules/planner/setup.ts#L4) |
| setup | `overrides.setup.seedExamples` | replace | ownedContracts.setup:planner:setup | [setup.ts:4](../../../../node_modules/@open-mercato/core/src/modules/planner/setup.ts#L4) |

<!-- end module facts section: planner/exact-override-targets -->
