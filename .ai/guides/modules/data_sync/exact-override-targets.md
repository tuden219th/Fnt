# data_sync — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["data_sync.configure"]` | disable-replace | aclFeatures:data_sync.configure | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/data_sync/acl.ts) |
| acl | `overrides.acl.features["data_sync.run"]` | disable-replace | aclFeatures:data_sync.run | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/data_sync/acl.ts) |
| acl | `overrides.acl.features["data_sync.view"]` | disable-replace | aclFeatures:data_sync.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/data_sync/acl.ts) |
| di | `overrides.di["dataSyncEngine"]` | disable-replace | ownedContracts.di-registration:dataSyncEngine | [di.ts:31](../../../../node_modules/@open-mercato/core/src/modules/data_sync/di.ts#L31) |
| di | `overrides.di["dataSyncRunService"]` | disable-replace | ownedContracts.di-registration:dataSyncRunService | [di.ts:29](../../../../node_modules/@open-mercato/core/src/modules/data_sync/di.ts#L29) |
| di | `overrides.di["dataSyncScheduleService"]` | disable-replace | ownedContracts.di-registration:dataSyncScheduleService | [di.ts:30](../../../../node_modules/@open-mercato/core/src/modules/data_sync/di.ts#L30) |
| di | `overrides.di["externalIdMappingService"]` | disable-replace | ownedContracts.di-registration:externalIdMappingService | [di.ts:28](../../../../node_modules/@open-mercato/core/src/modules/data_sync/di.ts#L28) |
| di | `overrides.di["SyncCursor"]` | disable-replace | ownedContracts.di-registration:SyncCursor | [di.ts:43](../../../../node_modules/@open-mercato/core/src/modules/data_sync/di.ts#L43) |
| di | `overrides.di["SyncMapping"]` | disable-replace | ownedContracts.di-registration:SyncMapping | [di.ts:44](../../../../node_modules/@open-mercato/core/src/modules/data_sync/di.ts#L44) |
| di | `overrides.di["SyncRun"]` | disable-replace | ownedContracts.di-registration:SyncRun | [di.ts:42](../../../../node_modules/@open-mercato/core/src/modules/data_sync/di.ts#L42) |
| di | `overrides.di["SyncSchedule"]` | disable-replace | ownedContracts.di-registration:SyncSchedule | [di.ts:45](../../../../node_modules/@open-mercato/core/src/modules/data_sync/di.ts#L45) |
| routes | `overrides.routes.pages["backend:/backend/data-sync"]` | disable-replace | backendPages:/backend/data-sync | [backend/data-sync/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/data_sync/backend/data-sync/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/data-sync/runs/[id]"]` | disable-replace | backendPages:/backend/data-sync/runs/[id] | [backend/data-sync/runs/[id]/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/data_sync/backend/data-sync/runs/[id]/page.tsx) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:data_sync:setup | [setup.ts:3](../../../../node_modules/@open-mercato/core/src/modules/data_sync/setup.ts#L3) |
| workers | `overrides.workers["data-sync:export"]` | disable-replace | ownedContracts.worker:data-sync:export | [workers/sync-export.ts:24](../../../../node_modules/@open-mercato/core/src/modules/data_sync/workers/sync-export.ts#L24) |
| workers | `overrides.workers["data-sync:import"]` | disable-replace | ownedContracts.worker:data-sync:import | [workers/sync-import.ts:24](../../../../node_modules/@open-mercato/core/src/modules/data_sync/workers/sync-import.ts#L24) |
| workers | `overrides.workers["data-sync:scheduled"]` | disable-replace | ownedContracts.worker:data-sync:scheduled | [workers/sync-scheduled.ts:23](../../../../node_modules/@open-mercato/core/src/modules/data_sync/workers/sync-scheduled.ts#L23) |

<!-- end module facts section: data_sync/exact-override-targets -->
