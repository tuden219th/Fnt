# business_rules — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["business_rules.execute"]` | disable-replace | aclFeatures:business_rules.execute | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/business_rules/acl.ts) |
| acl | `overrides.acl.features["business_rules.manage"]` | disable-replace | aclFeatures:business_rules.manage | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/business_rules/acl.ts) |
| acl | `overrides.acl.features["business_rules.manage_sets"]` | disable-replace | aclFeatures:business_rules.manage_sets | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/business_rules/acl.ts) |
| acl | `overrides.acl.features["business_rules.view"]` | disable-replace | aclFeatures:business_rules.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/business_rules/acl.ts) |
| acl | `overrides.acl.features["business_rules.view_logs"]` | disable-replace | aclFeatures:business_rules.view_logs | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/business_rules/acl.ts) |
| cli | `overrides.cli["seed-guard-rules"]` | disable-replace | cliCommands:seed-guard-rules | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/business_rules/cli.ts) |
| di | `overrides.di["actionExecutor"]` | disable-replace | ownedContracts.di-registration:actionExecutor | [di.ts:13](../../../../node_modules/@open-mercato/core/src/modules/business_rules/di.ts#L13) |
| di | `overrides.di["ruleEngine"]` | disable-replace | ownedContracts.di-registration:ruleEngine | [di.ts:14](../../../../node_modules/@open-mercato/core/src/modules/business_rules/di.ts#L14) |
| di | `overrides.di["ruleEvaluator"]` | disable-replace | ownedContracts.di-registration:ruleEvaluator | [di.ts:12](../../../../node_modules/@open-mercato/core/src/modules/business_rules/di.ts#L12) |
| events | `overrides.events.subscribers["business_rules:crud-rule-trigger"]` | disable-replace | extensionSurfaces.contributions:business_rules:crud-rule-trigger | [subscribers/crud-rule-trigger.ts](../../../../node_modules/@open-mercato/core/src/modules/business_rules/subscribers/crud-rule-trigger.ts) |
| events | `overrides.events.subscribers["business_rules:rule-execution-failed-notification"]` | disable-replace | extensionSurfaces.contributions:business_rules:rule-execution-failed-notification | [subscribers/rule-execution-failed-notification.ts](../../../../node_modules/@open-mercato/core/src/modules/business_rules/subscribers/rule-execution-failed-notification.ts) |
| notifications | `overrides.notifications.types["business_rules.rule.execution_failed"]` | disable-replace | notifications:business_rules.rule.execution_failed | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/business_rules/notifications.ts) |
| routes | `overrides.routes.pages["backend:/backend/logs"]` | disable-replace | backendPages:/backend/logs | [backend/logs/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/business_rules/backend/logs/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/logs/[id]"]` | disable-replace | backendPages:/backend/logs/[id] | [backend/logs/[id]/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/business_rules/backend/logs/[id]/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/rules"]` | disable-replace | backendPages:/backend/rules | [backend/rules/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/business_rules/backend/rules/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/rules/[id]"]` | disable-replace | backendPages:/backend/rules/[id] | [backend/rules/[id]/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/business_rules/backend/rules/[id]/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/rules/create"]` | disable-replace | backendPages:/backend/rules/create | [backend/rules/create/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/business_rules/backend/rules/create/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/sets"]` | disable-replace | backendPages:/backend/sets | [backend/sets/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/business_rules/backend/sets/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/sets/[id]"]` | disable-replace | backendPages:/backend/sets/[id] | [backend/sets/[id]/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/business_rules/backend/sets/[id]/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/sets/create"]` | disable-replace | backendPages:/backend/sets/create | [backend/sets/create/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/business_rules/backend/sets/create/page.tsx) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:business_rules:setup | [setup.ts:3](../../../../node_modules/@open-mercato/core/src/modules/business_rules/setup.ts#L3) |

<!-- end module facts section: business_rules/exact-override-targets -->
