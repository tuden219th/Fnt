# example — Active extension bindings

[Back to module index](index.md)

## Active extension bindings

| Activation | Kind | Host | Contribution kinds | Phases | Bridge | Source |
|---|---|---|---|---|---|---|
| api-route:example/todos:GET:api-interceptor-bridge | api-interceptor-bridge | api-route:example/todos GET @example | api-interceptor | before | apiRoutes:/example/todos | [api/todos/route.ts](../../../../src/modules/example/api/todos/route.ts) |
| api-route:example/todos:POST:api-interceptor-bridge | api-interceptor-bridge | api-route:example/todos POST @example | api-interceptor | before | apiRoutes:/example/todos | [api/todos/route.ts](../../../../src/modules/example/api/todos/route.ts) |
| api-route:example/todos:PUT:api-interceptor-bridge | api-interceptor-bridge | api-route:example/todos PUT @example | api-interceptor | before | apiRoutes:/example/todos | [api/todos/route.ts](../../../../src/modules/example/api/todos/route.ts) |
| command:example.todos.update:command-interceptor-bridge | command-interceptor-bridge | command:example.todos.update @example | command-interceptor | — | ownedContracts.command:example.todos.update | [commands/todos.ts](../../../../src/modules/example/commands/todos.ts) |
| component:section:example.overrides.showcase:component-extension-consumer | component-extension-consumer | component:section:example.overrides.showcase @example | component-override | — | hosts:overrideShowcase | [extension-points.ts](../../../../src/modules/example/extension-points.ts) |
| entity:example:todo:mutation-guard | mutation-guard | entity:example:todo @example | mutation-guard | — | — | [api/todos/bulk-complete/route.ts:64](../../../../src/modules/example/api/todos/bulk-complete/route.ts#L64) |
| widget-spot:crud-form:catalog.catalog_product:widget-injection-consumer | widget-injection-consumer | widget-spot:crud-form:catalog.catalog_product @framework | widget, data-table, crud-form | — | hosts:framework.crud-form-wildcard | packages/ui/src |
| widget-spot:crud-form:catalog.catalog_variant:widget-injection-consumer | widget-injection-consumer | widget-spot:crud-form:catalog.catalog_variant @framework | widget, data-table, crud-form | — | hosts:framework.crud-form-wildcard | packages/ui/src |
| widget-spot:crud-form:catalog.variant:widget-injection-consumer | widget-injection-consumer | widget-spot:crud-form:catalog.variant @framework | widget, data-table, crud-form | — | hosts:framework.crud-form-wildcard | packages/ui/src |
| widget-spot:crud-form:customers.customer_entity:fields:widget-injection-consumer | widget-injection-consumer | widget-spot:crud-form:customers.customer_entity:fields @framework | widget, data-table, crud-form | — | hosts:framework.crud-form-wildcard | packages/ui/src |
| widget-spot:crud-form:example.todo:widget-injection-consumer | widget-injection-consumer | widget-spot:crud-form:example.todo @example | widget, data-table, crud-form | — | hosts:todoForm.base | [extension-points.ts](../../../../src/modules/example/extension-points.ts) |
| widget-spot:dashboard:example.dashboard.notes:dashboard-host-consumer | dashboard-host-consumer | widget-spot:dashboard:example.dashboard.notes @framework | widget | — | hosts:framework.dashboard | packages/ui/src |
| widget-spot:dashboard:example.dashboard.todos:dashboard-host-consumer | dashboard-host-consumer | widget-spot:dashboard:example.dashboard.todos @framework | widget | — | hosts:framework.dashboard | packages/ui/src |
| widget-spot:dashboard:example.dashboard.welcome:dashboard-host-consumer | dashboard-host-consumer | widget-spot:dashboard:example.dashboard.welcome @framework | widget | — | hosts:framework.dashboard | packages/ui/src |
| widget-spot:data-table:example.todos.list:bulk-actions:widget-injection-consumer | widget-injection-consumer | widget-spot:data-table:example.todos.list:bulk-actions @example | widget, data-table, crud-form | — | hosts:todosTable.bulkActions | [extension-points.ts](../../../../src/modules/example/extension-points.ts) |
| widget-spot:example:phase-c-handlers:widget-injection-consumer | widget-injection-consumer | widget-spot:example:phase-c-handlers @example | widget, data-table, crud-form | — | hosts:handlersForm | [extension-points.ts](../../../../src/modules/example/extension-points.ts) |

<!-- end module facts section: example/active-extension-bindings -->
