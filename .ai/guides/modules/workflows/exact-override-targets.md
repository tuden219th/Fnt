# workflows — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["workflows.definitions.create"]` | disable-replace | aclFeatures:workflows.definitions.create | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/acl.ts) |
| acl | `overrides.acl.features["workflows.definitions.delete"]` | disable-replace | aclFeatures:workflows.definitions.delete | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/acl.ts) |
| acl | `overrides.acl.features["workflows.definitions.edit"]` | disable-replace | aclFeatures:workflows.definitions.edit | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/acl.ts) |
| acl | `overrides.acl.features["workflows.definitions.view"]` | disable-replace | aclFeatures:workflows.definitions.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/acl.ts) |
| acl | `overrides.acl.features["workflows.events.view"]` | disable-replace | aclFeatures:workflows.events.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/acl.ts) |
| acl | `overrides.acl.features["workflows.instances.cancel"]` | disable-replace | aclFeatures:workflows.instances.cancel | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/acl.ts) |
| acl | `overrides.acl.features["workflows.instances.create"]` | disable-replace | aclFeatures:workflows.instances.create | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/acl.ts) |
| acl | `overrides.acl.features["workflows.instances.retry"]` | disable-replace | aclFeatures:workflows.instances.retry | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/acl.ts) |
| acl | `overrides.acl.features["workflows.instances.signal"]` | disable-replace | aclFeatures:workflows.instances.signal | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/acl.ts) |
| acl | `overrides.acl.features["workflows.instances.view"]` | disable-replace | aclFeatures:workflows.instances.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/acl.ts) |
| acl | `overrides.acl.features["workflows.manage"]` | disable-replace | aclFeatures:workflows.manage | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/acl.ts) |
| acl | `overrides.acl.features["workflows.signals.send"]` | disable-replace | aclFeatures:workflows.signals.send | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/acl.ts) |
| acl | `overrides.acl.features["workflows.tasks.claim"]` | disable-replace | aclFeatures:workflows.tasks.claim | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/acl.ts) |
| acl | `overrides.acl.features["workflows.tasks.complete"]` | disable-replace | aclFeatures:workflows.tasks.complete | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/acl.ts) |
| acl | `overrides.acl.features["workflows.tasks.view"]` | disable-replace | aclFeatures:workflows.tasks.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/acl.ts) |
| acl | `overrides.acl.features["workflows.view"]` | disable-replace | aclFeatures:workflows.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/acl.ts) |
| acl | `overrides.acl.features["workflows.view_logs"]` | disable-replace | aclFeatures:workflows.view_logs | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/acl.ts) |
| acl | `overrides.acl.features["workflows.view_tasks"]` | disable-replace | aclFeatures:workflows.view_tasks | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/acl.ts) |
| cli | `overrides.cli["process-activities"]` | disable-replace | cliCommands:process-activities | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/cli.ts) |
| cli | `overrides.cli["seed-all"]` | disable-replace | cliCommands:seed-all | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/cli.ts) |
| cli | `overrides.cli["seed-demo"]` | disable-replace | cliCommands:seed-demo | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/cli.ts) |
| cli | `overrides.cli["seed-demo-with-rules"]` | disable-replace | cliCommands:seed-demo-with-rules | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/cli.ts) |
| cli | `overrides.cli["seed-order-approval"]` | disable-replace | cliCommands:seed-order-approval | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/cli.ts) |
| cli | `overrides.cli["seed-sales-pipeline"]` | disable-replace | cliCommands:seed-sales-pipeline | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/cli.ts) |
| cli | `overrides.cli["seed-simple-approval"]` | disable-replace | cliCommands:seed-simple-approval | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/cli.ts) |
| cli | `overrides.cli["start-worker"]` | disable-replace | cliCommands:start-worker | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/cli.ts) |
| di | `overrides.di["activityExecutor"]` | disable-replace | ownedContracts.di-registration:activityExecutor | [di.ts:42](../../../../node_modules/@open-mercato/core/src/modules/workflows/di.ts#L42) |
| di | `overrides.di["eventLogger"]` | disable-replace | ownedContracts.di-registration:eventLogger | [di.ts:43](../../../../node_modules/@open-mercato/core/src/modules/workflows/di.ts#L43) |
| di | `overrides.di["signalHandler"]` | disable-replace | ownedContracts.di-registration:signalHandler | [di.ts:44](../../../../node_modules/@open-mercato/core/src/modules/workflows/di.ts#L44) |
| di | `overrides.di["stepHandler"]` | disable-replace | ownedContracts.di-registration:stepHandler | [di.ts:40](../../../../node_modules/@open-mercato/core/src/modules/workflows/di.ts#L40) |
| di | `overrides.di["timerHandler"]` | disable-replace | ownedContracts.di-registration:timerHandler | [di.ts:45](../../../../node_modules/@open-mercato/core/src/modules/workflows/di.ts#L45) |
| di | `overrides.di["transitionHandler"]` | disable-replace | ownedContracts.di-registration:transitionHandler | [di.ts:41](../../../../node_modules/@open-mercato/core/src/modules/workflows/di.ts#L41) |
| di | `overrides.di["workflowExecutor"]` | disable-replace | ownedContracts.di-registration:workflowExecutor | [di.ts:39](../../../../node_modules/@open-mercato/core/src/modules/workflows/di.ts#L39) |
| events | `overrides.events.subscribers["workflows:event-trigger"]` | disable-replace | extensionSurfaces.contributions:workflows:event-trigger | [subscribers/event-trigger.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/subscribers/event-trigger.ts) |
| events | `overrides.events.subscribers["workflows:task-assigned-notification"]` | disable-replace | extensionSurfaces.contributions:workflows:task-assigned-notification | [subscribers/task-assigned-notification.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/subscribers/task-assigned-notification.ts) |
| notifications | `overrides.notifications.types["workflows.task.assigned"]` | disable-replace | notifications:workflows.task.assigned | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/notifications.ts) |
| routes | `overrides.routes.pages["backend:/backend/definitions"]` | disable-replace | backendPages:/backend/definitions | [backend/definitions/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/workflows/backend/definitions/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/definitions/[id]"]` | disable-replace | backendPages:/backend/definitions/[id] | [backend/definitions/[id]/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/workflows/backend/definitions/[id]/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/definitions/create"]` | disable-replace | backendPages:/backend/definitions/create | [backend/definitions/create/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/workflows/backend/definitions/create/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/definitions/visual-editor"]` | disable-replace | backendPages:/backend/definitions/visual-editor | [backend/definitions/visual-editor/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/workflows/backend/definitions/visual-editor/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/events"]` | disable-replace | backendPages:/backend/events | [backend/events/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/workflows/backend/events/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/events/[id]"]` | disable-replace | backendPages:/backend/events/[id] | [backend/events/[id]/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/workflows/backend/events/[id]/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/instances"]` | disable-replace | backendPages:/backend/instances | [backend/instances/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/workflows/backend/instances/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/instances/[id]"]` | disable-replace | backendPages:/backend/instances/[id] | [backend/instances/[id]/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/workflows/backend/instances/[id]/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/tasks"]` | disable-replace | backendPages:/backend/tasks | [backend/tasks/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/workflows/backend/tasks/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/tasks/[id]"]` | disable-replace | backendPages:/backend/tasks/[id] | [backend/tasks/[id]/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/workflows/backend/tasks/[id]/page.tsx) |
| routes | `overrides.routes.pages["frontend:/checkout-demo"]` | disable-replace | frontendPages:/checkout-demo | [frontend/checkout-demo/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/workflows/frontend/checkout-demo/page.tsx) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:workflows:setup | [setup.ts:5](../../../../node_modules/@open-mercato/core/src/modules/workflows/setup.ts#L5) |
| setup | `overrides.setup.seedDefaults` | replace | ownedContracts.setup:workflows:setup | [setup.ts:5](../../../../node_modules/@open-mercato/core/src/modules/workflows/setup.ts#L5) |
| widgets | `overrides.widgets.injection["workflows.injection.order-approval"]` | disable-replace | extensionSurfaces.contributions:workflows.injection.order-approval@sales.document.detail.order:details | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/widgets/injection-table.ts) |
| workers | `overrides.workers["workflows:workflow-activities"]` | disable-replace | ownedContracts.worker:workflows:workflow-activities | [workers/workflow-activities.worker.ts:39](../../../../node_modules/@open-mercato/core/src/modules/workflows/workers/workflow-activities.worker.ts#L39) |

<!-- end module facts section: workflows/exact-override-targets -->
