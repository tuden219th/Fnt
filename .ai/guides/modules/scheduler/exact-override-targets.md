# scheduler — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["scheduler.jobs.manage"]` | disable-replace | aclFeatures:scheduler.jobs.manage | [acl.ts](../../../../node_modules/@open-mercato/scheduler/src/modules/scheduler/acl.ts) |
| acl | `overrides.acl.features["scheduler.jobs.trigger"]` | disable-replace | aclFeatures:scheduler.jobs.trigger | [acl.ts](../../../../node_modules/@open-mercato/scheduler/src/modules/scheduler/acl.ts) |
| acl | `overrides.acl.features["scheduler.jobs.view"]` | disable-replace | aclFeatures:scheduler.jobs.view | [acl.ts](../../../../node_modules/@open-mercato/scheduler/src/modules/scheduler/acl.ts) |
| cli | `overrides.cli["list"]` | disable-replace | cliCommands:list | [cli.ts](../../../../node_modules/@open-mercato/scheduler/src/modules/scheduler/cli.ts) |
| cli | `overrides.cli["run"]` | disable-replace | cliCommands:run | [cli.ts](../../../../node_modules/@open-mercato/scheduler/src/modules/scheduler/cli.ts) |
| cli | `overrides.cli["start"]` | disable-replace | cliCommands:start | [cli.ts](../../../../node_modules/@open-mercato/scheduler/src/modules/scheduler/cli.ts) |
| cli | `overrides.cli["status"]` | disable-replace | cliCommands:status | [cli.ts](../../../../node_modules/@open-mercato/scheduler/src/modules/scheduler/cli.ts) |
| di | `overrides.di["bullmqSchedulerService"]` | disable-replace | ownedContracts.di-registration:bullmqSchedulerService | [di.ts:30](../../../../node_modules/@open-mercato/scheduler/src/modules/scheduler/di.ts#L30) |
| di | `overrides.di["localSchedulerService"]` | disable-replace | ownedContracts.di-registration:localSchedulerService | [di.ts:66](../../../../node_modules/@open-mercato/scheduler/src/modules/scheduler/di.ts#L66) |
| di | `overrides.di["schedulerService"]` | disable-replace | ownedContracts.di-registration:schedulerService | [di.ts:81](../../../../node_modules/@open-mercato/scheduler/src/modules/scheduler/di.ts#L81) |
| routes | `overrides.routes.pages["backend:/backend/config/scheduled-jobs"]` | disable-replace | backendPages:/backend/config/scheduled-jobs | [backend/config/scheduled-jobs/page.tsx](../../../../node_modules/@open-mercato/scheduler/src/modules/scheduler/backend/config/scheduled-jobs/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/config/scheduled-jobs/[id]"]` | disable-replace | backendPages:/backend/config/scheduled-jobs/[id] | [backend/config/scheduled-jobs/[id]/page.tsx](../../../../node_modules/@open-mercato/scheduler/src/modules/scheduler/backend/config/scheduled-jobs/[id]/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/config/scheduled-jobs/[id]/edit"]` | disable-replace | backendPages:/backend/config/scheduled-jobs/[id]/edit | [backend/config/scheduled-jobs/[id]/edit/page.tsx](../../../../node_modules/@open-mercato/scheduler/src/modules/scheduler/backend/config/scheduled-jobs/[id]/edit/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/config/scheduled-jobs/new"]` | disable-replace | backendPages:/backend/config/scheduled-jobs/new | [backend/config/scheduled-jobs/new/page.tsx](../../../../node_modules/@open-mercato/scheduler/src/modules/scheduler/backend/config/scheduled-jobs/new/page.tsx) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:scheduler:setup | [setup.ts:3](../../../../node_modules/@open-mercato/scheduler/src/modules/scheduler/setup.ts#L3) |
| workers | `overrides.workers["scheduler:workers:execute-schedule.worker"]` | disable-replace | ownedContracts.worker:scheduler:workers:execute-schedule.worker | [workers/execute-schedule.worker.ts:17](../../../../node_modules/@open-mercato/scheduler/src/modules/scheduler/workers/execute-schedule.worker.ts#L17) |

<!-- end module facts section: scheduler/exact-override-targets -->
