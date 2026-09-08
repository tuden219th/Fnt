# audit_logs — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["audit_logs.redo_self"]` | disable-replace | aclFeatures:audit_logs.redo_self | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/audit_logs/acl.ts) |
| acl | `overrides.acl.features["audit_logs.redo_tenant"]` | disable-replace | aclFeatures:audit_logs.redo_tenant | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/audit_logs/acl.ts) |
| acl | `overrides.acl.features["audit_logs.undo_self"]` | disable-replace | aclFeatures:audit_logs.undo_self | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/audit_logs/acl.ts) |
| acl | `overrides.acl.features["audit_logs.undo_tenant"]` | disable-replace | aclFeatures:audit_logs.undo_tenant | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/audit_logs/acl.ts) |
| acl | `overrides.acl.features["audit_logs.view_self"]` | disable-replace | aclFeatures:audit_logs.view_self | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/audit_logs/acl.ts) |
| acl | `overrides.acl.features["audit_logs.view_tenant"]` | disable-replace | aclFeatures:audit_logs.view_tenant | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/audit_logs/acl.ts) |
| cli | `overrides.cli["projections:backfill"]` | disable-replace | cliCommands:projections:backfill | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/audit_logs/cli.ts) |
| di | `overrides.di["accessLogService"]` | disable-replace | ownedContracts.di-registration:accessLogService | [di.ts:12](../../../../node_modules/@open-mercato/core/src/modules/audit_logs/di.ts#L12) |
| di | `overrides.di["actionLogService"]` | disable-replace | ownedContracts.di-registration:actionLogService | [di.ts:8](../../../../node_modules/@open-mercato/core/src/modules/audit_logs/di.ts#L8) |
| encryption | `overrides.encryption.maps["audit_logs:access_log"]` | disable-replace | ownedContracts.encryption:audit_logs:access_log | [encryption.ts:16](../../../../node_modules/@open-mercato/core/src/modules/audit_logs/encryption.ts#L16) |
| encryption | `overrides.encryption.maps["audit_logs:action_log"]` | disable-replace | ownedContracts.encryption:audit_logs:action_log | [encryption.ts:4](../../../../node_modules/@open-mercato/core/src/modules/audit_logs/encryption.ts#L4) |
| routes | `overrides.routes.pages["backend:/backend/audit-logs"]` | disable-replace | backendPages:/backend/audit-logs | [backend/audit-logs/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/audit_logs/backend/audit-logs/page.tsx) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:audit_logs:setup | [setup.ts:3](../../../../node_modules/@open-mercato/core/src/modules/audit_logs/setup.ts#L3) |

<!-- end module facts section: audit_logs/exact-override-targets -->
