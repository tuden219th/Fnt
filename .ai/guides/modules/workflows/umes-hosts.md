# workflows — UMES hosts

[Back to module index](index.md)

## UMES hosts

| ID / pattern | Family | Supports | Context | Stability | Source |
|---|---|---|---|---|---|
| data-table:workflows.definitions.list | data-table | component-replacement | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/extension-points.ts) |
| data-table:workflows.definitions.list:bulk-actions | data-table | bulk-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/extension-points.ts) |
| data-table:workflows.definitions.list:columns | data-table | column-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/extension-points.ts) |
| data-table:workflows.definitions.list:filters | data-table | filter-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/extension-points.ts) |
| data-table:workflows.definitions.list:footer | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/extension-points.ts) |
| data-table:workflows.definitions.list:header | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/extension-points.ts) |
| data-table:workflows.definitions.list:row-actions | data-table | row-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/extension-points.ts) |
| data-table:workflows.definitions.list:search-trailing | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/extension-points.ts) |
| data-table:workflows.definitions.list:toolbar | data-table | toolbar-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/extension-points.ts) |
| data-table:workflows.instances.list | data-table | component-replacement | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/extension-points.ts) |
| data-table:workflows.instances.list:bulk-actions | data-table | bulk-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/extension-points.ts) |
| data-table:workflows.instances.list:columns | data-table | column-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/extension-points.ts) |
| data-table:workflows.instances.list:filters | data-table | filter-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/extension-points.ts) |
| data-table:workflows.instances.list:footer | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/extension-points.ts) |
| data-table:workflows.instances.list:header | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/extension-points.ts) |
| data-table:workflows.instances.list:row-actions | data-table | row-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/extension-points.ts) |
| data-table:workflows.instances.list:search-trailing | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/extension-points.ts) |
| data-table:workflows.instances.list:toolbar | data-table | toolbar-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/extension-points.ts) |
| data-table:workflows.tasks.list | data-table | component-replacement | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/extension-points.ts) |
| data-table:workflows.tasks.list:bulk-actions | data-table | bulk-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/extension-points.ts) |
| data-table:workflows.tasks.list:columns | data-table | column-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/extension-points.ts) |
| data-table:workflows.tasks.list:filters | data-table | filter-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/extension-points.ts) |
| data-table:workflows.tasks.list:footer | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/extension-points.ts) |
| data-table:workflows.tasks.list:header | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/extension-points.ts) |
| data-table:workflows.tasks.list:row-actions | data-table | row-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/extension-points.ts) |
| data-table:workflows.tasks.list:search-trailing | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/extension-points.ts) |
| data-table:workflows.tasks.list:toolbar | data-table | toolbar-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/extension-points.ts) |
| workflows:step_instance | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:workflows:step_instance |
| workflows:user_task | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:workflows:user_task |
| workflows:workflow_branch_instance | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:workflows:workflow_branch_instance |
| workflows:workflow_definition | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:workflows:workflow_definition |
| workflows:workflow_event | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:workflows:workflow_event |
| workflows:workflow_event_trigger | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:workflows:workflow_event_trigger |
| workflows:workflow_instance | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:workflows:workflow_instance |
| workflows.definition | entity | response-enricher, query-enricher, mutation-guard | tenant-and-organization | STABLE | [api/definitions/[id]/customize/route.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/api/definitions/[id]/customize/route.ts) |
| workflows.activity.completed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:workflows.activity.completed |
| workflows.activity.failed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:workflows.activity.failed |
| workflows.activity.started | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:workflows.activity.started |
| workflows.branch.cancelled | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:workflows.branch.cancelled |
| workflows.branch.completed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:workflows.branch.completed |
| workflows.branch.failed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:workflows.branch.failed |
| workflows.branch.opened | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:workflows.branch.opened |
| workflows.definition.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:workflows.definition.created |
| workflows.definition.customized | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:workflows.definition.customized |
| workflows.definition.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:workflows.definition.deleted |
| workflows.definition.reset_to_code | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:workflows.definition.reset_to_code |
| workflows.definition.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:workflows.definition.updated |
| workflows.instance.cancelled | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:workflows.instance.cancelled |
| workflows.instance.completed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:workflows.instance.completed |
| workflows.instance.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:workflows.instance.created |
| workflows.instance.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:workflows.instance.deleted |
| workflows.instance.failed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:workflows.instance.failed |
| workflows.instance.paused | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:workflows.instance.paused |
| workflows.instance.resumed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:workflows.instance.resumed |
| workflows.instance.started | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:workflows.instance.started |
| workflows.instance.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:workflows.instance.updated |
| workflows.join.completed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:workflows.join.completed |
| workflows.task.assigned | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:workflows.task.assigned |
| workflows.trigger.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:workflows.trigger.created |
| workflows.trigger.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:workflows.trigger.deleted |
| workflows.trigger.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:workflows.trigger.updated |

<!-- end module facts section: workflows/umes-hosts -->
