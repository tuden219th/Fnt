# example — UMES hosts

[Back to module index](index.md)

## UMES hosts

| ID / pattern | Family | Supports | Context | Stability | Source |
|---|---|---|---|---|---|
| section:example.overrides.showcase | component-handle | component-replacement | — | FROZEN | [extension-points.ts](../../../../src/modules/example/extension-points.ts) |
| crud-form:example.todo | crud-form | render-widget, lifecycle-handler | — | FROZEN | [extension-points.ts](../../../../src/modules/example/extension-points.ts) |
| crud-form:example.todo | crud-form | component-replacement | — | FROZEN | [extension-points.ts](../../../../src/modules/example/extension-points.ts) |
| crud-form:example.todo:fields | crud-form | field-widget | — | FROZEN | [extension-points.ts](../../../../src/modules/example/extension-points.ts) |
| crud-form:example.todo:header | crud-form | render-widget | — | FROZEN | [extension-points.ts](../../../../src/modules/example/extension-points.ts) |
| data-table:example.todos.list | data-table | component-replacement | — | FROZEN | [extension-points.ts](../../../../src/modules/example/extension-points.ts) |
| data-table:example.todos.list:bulk-actions | data-table | bulk-action | — | FROZEN | [extension-points.ts](../../../../src/modules/example/extension-points.ts) |
| data-table:example.todos.list:columns | data-table | column-widget | — | FROZEN | [extension-points.ts](../../../../src/modules/example/extension-points.ts) |
| data-table:example.todos.list:filters | data-table | filter-widget | — | FROZEN | [extension-points.ts](../../../../src/modules/example/extension-points.ts) |
| data-table:example.todos.list:footer | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../src/modules/example/extension-points.ts) |
| data-table:example.todos.list:header | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../src/modules/example/extension-points.ts) |
| data-table:example.todos.list:row-actions | data-table | row-action | — | FROZEN | [extension-points.ts](../../../../src/modules/example/extension-points.ts) |
| data-table:example.todos.list:search-trailing | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../src/modules/example/extension-points.ts) |
| data-table:example.todos.list:toolbar | data-table | toolbar-widget | — | FROZEN | [extension-points.ts](../../../../src/modules/example/extension-points.ts) |
| example:example_customer_priority | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:example:example_customer_priority |
| example:example_item | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:example:example_item |
| example:example_todo_bulk_operation | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:example:example_todo_bulk_operation |
| example:todo | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:example:todo |
| example.ping | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:example.ping |
| example.todo_announcement.published | event | async-subscriber, sync-subscriber, browser-portal | tenant-organization-and-audience | STABLE | events:example.todo_announcement.published |
| example.todo.created | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:example.todo.created |
| example.todo.deleted | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:example.todo.deleted |
| example.todo.updated | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:example.todo.updated |
| example:phase-c-handlers | generic | render-widget | — | FROZEN | [extension-points.ts](../../../../src/modules/example/extension-points.ts) |
| example.todo.queried | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:example:todo |
| example.todo.querying | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:example:todo |

<!-- end module facts section: example/umes-hosts -->
