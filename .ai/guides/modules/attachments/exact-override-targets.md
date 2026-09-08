# attachments — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["attachments.manage"]` | disable-replace | aclFeatures:attachments.manage | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/attachments/acl.ts) |
| acl | `overrides.acl.features["attachments.view"]` | disable-replace | aclFeatures:attachments.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/attachments/acl.ts) |
| cli | `overrides.cli["delete"]` | disable-replace | cliCommands:delete | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/attachments/cli.ts) |
| di | `overrides.di["attachmentQuotaRecoveryScheduler"]` | disable-replace | ownedContracts.di-registration:attachmentQuotaRecoveryScheduler | [di.ts:12](../../../../node_modules/@open-mercato/core/src/modules/attachments/di.ts#L12) |
| di | `overrides.di["attachmentQuotaService"]` | disable-replace | ownedContracts.di-registration:attachmentQuotaService | [di.ts:13](../../../../node_modules/@open-mercato/core/src/modules/attachments/di.ts#L13) |
| di | `overrides.di["attachmentScopedUploadService"]` | disable-replace | ownedContracts.di-registration:attachmentScopedUploadService | [di.ts:23](../../../../node_modules/@open-mercato/core/src/modules/attachments/di.ts#L23) |
| di | `overrides.di["attachmentTargetAccessService"]` | disable-replace | ownedContracts.di-registration:attachmentTargetAccessService | [di.ts:18](../../../../node_modules/@open-mercato/core/src/modules/attachments/di.ts#L18) |
| di | `overrides.di["storageDriverFactory"]` | disable-replace | ownedContracts.di-registration:storageDriverFactory | [di.ts:44](../../../../node_modules/@open-mercato/core/src/modules/attachments/di.ts#L44) |
| routes | `overrides.routes.pages["backend:/backend/config/attachments"]` | disable-replace | backendPages:/backend/config/attachments | [backend/config/attachments/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/attachments/backend/config/attachments/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/storage/attachments"]` | disable-replace | backendPages:/backend/storage/attachments | [backend/storage/attachments/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/attachments/backend/storage/attachments/page.tsx) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:attachments:setup | [setup.ts:3](../../../../node_modules/@open-mercato/core/src/modules/attachments/setup.ts#L3) |
| workers | `overrides.workers["attachments:quota-recovery"]` | disable-replace | ownedContracts.worker:attachments:quota-recovery | [workers/quota-recovery.ts:7](../../../../node_modules/@open-mercato/core/src/modules/attachments/workers/quota-recovery.ts#L7) |

<!-- end module facts section: attachments/exact-override-targets -->
