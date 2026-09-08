# example — Contribution resolutions

[Back to module index](index.md)

## Contribution resolutions

| Contribution | Target | Resolution | Activations | Source |
|---|---|---|---|---|
| ai:example.get_customer_priority | module:example.get_customer_priority | capability-only | — | [ai-tools.ts](../../../../src/modules/example/ai-tools.ts) |
| ai:example.get_todo_summary | module:example.get_todo_summary | capability-only | — | [ai-tools.ts](../../../../src/modules/example/ai-tools.ts) |
| ai:example.todo_assistant | module:example.todo_assistant | capability-only | — | [ai-agents.ts](../../../../src/modules/example/ai-agents.ts) |
| currency:example_fixed_rates | module:example_fixed_rates | capability-only | — | [integration.ts](../../../../src/modules/example/integration.ts) |
| dashboard:example.dashboard.notes | widget-spot:dashboard:example.dashboard.notes | bound | widget-spot:dashboard:example.dashboard.notes:dashboard-host-consumer | [widgets/dashboard/notes/widget.ts](../../../../src/modules/example/widgets/dashboard/notes/widget.ts) |
| dashboard:example.dashboard.todos | widget-spot:dashboard:example.dashboard.todos | bound | widget-spot:dashboard:example.dashboard.todos:dashboard-host-consumer | [widgets/dashboard/todos/widget.ts](../../../../src/modules/example/widgets/dashboard/todos/widget.ts) |
| dashboard:example.dashboard.welcome | widget-spot:dashboard:example.dashboard.welcome | bound | widget-spot:dashboard:example.dashboard.welcome:dashboard-host-consumer | [widgets/dashboard/welcome/widget.ts](../../../../src/modules/example/widgets/dashboard/welcome/widget.ts) |
| example:announce-todo-to-portal | wildcard:example.todo.* | wildcard | — | [subscribers/announce-todo-to-portal.ts](../../../../src/modules/example/subscribers/announce-todo-to-portal.ts) |
| example:audit-delete | event:example.todo.deleted @example | capability-only | — | [subscribers/audit-delete.ts](../../../../src/modules/example/subscribers/audit-delete.ts) |
| example:auto-default-priority | event:example.todo.creating | capability-only | — | [subscribers/auto-default-priority.ts](../../../../src/modules/example/subscribers/auto-default-priority.ts) |
| example:example-event | event:example.ping @example | capability-only | — | [subscribers/example-event.ts](../../../../src/modules/example/subscribers/example-event.ts) |
| example:invalidate-todo-summary | wildcard:example.todo.* | wildcard | — | [subscribers/invalidate-todo-summary.ts](../../../../src/modules/example/subscribers/invalidate-todo-summary.ts) |
| example:prevent-uncomplete | event:example.todo.updating | capability-only | — | [subscribers/prevent-uncomplete.ts](../../../../src/modules/example/subscribers/prevent-uncomplete.ts) |
| example.audit-logging | wildcard:customers.* | wildcard | — | [commands/interceptors.ts](../../../../src/modules/example/commands/interceptors.ts) |
| example.block-test-todos | api-route:example/todos @example | bound | api-route:example/todos:POST:api-interceptor-bridge, api-route:example/todos:PUT:api-interceptor-bridge | [api/interceptors.ts](../../../../src/modules/example/api/interceptors.ts) |
| example.component-override.0:section:ui.detail.NotesSection | component:section:ui.detail.NotesSection | optional-target-missing | — | [widgets/components.ts](../../../../src/modules/example/widgets/components.ts) |
| example.component-override.1:section:checkout.pay-page.summary | component:section:checkout.pay-page.summary @checkout | bound | component:section:checkout.pay-page.summary:component-extension-consumer | [widgets/components.ts](../../../../src/modules/example/widgets/components.ts) |
| example.component-override.2:section:checkout.pay-page.help | component:section:checkout.pay-page.help @checkout | bound | component:section:checkout.pay-page.help:component-extension-consumer | [widgets/components.ts](../../../../src/modules/example/widgets/components.ts) |
| example.component-override.3:section:example.overrides.showcase | component:section:example.overrides.showcase @example | bound | component:section:example.overrides.showcase:component-extension-consumer | [widgets/components.ts](../../../../src/modules/example/widgets/components.ts) |
| example.component-override.4:section:example.overrides.showcase | component:section:example.overrides.showcase @example | bound | component:section:example.overrides.showcase:component-extension-consumer | [widgets/components.ts](../../../../src/modules/example/widgets/components.ts) |
| example.customer-priority-filter | api-route:customers/people @customers | bound | api-route:customers/people:GET:api-interceptor-bridge | [api/interceptors.ts](../../../../src/modules/example/api/interceptors.ts) |
| example.customer-todo-count | entity:customers.person @customers | bound | entity:customers.person:crud-response-enricher | [data/enrichers.ts](../../../../src/modules/example/data/enrichers.ts) |
| example.entity-extension.0:customers:customer_entity->example:example_customer_priority | entity:customers:customer_entity @customers | capability-only | — | [data/extensions.ts](../../../../src/modules/example/data/extensions.ts) |
| example.injection.catalog-seo-report@data-table:catalog.products:header | widget-spot:data-table:catalog.products:header @catalog | bound | widget-spot:data-table:catalog.products:header:widget-injection-consumer | [widgets/injection-table.ts](../../../../src/modules/example/widgets/injection-table.ts) |
| example.injection.crud-validation-addon@widget:example.injection.crud-validation:addon | widget-spot:widget:example.injection.crud-validation:addon | optional-target-missing | — | [widgets/injection-table.ts](../../../../src/modules/example/widgets/injection-table.ts) |
| example.injection.crud-validation@crud-form:catalog.catalog_product | widget-spot:crud-form:catalog.catalog_product | bound | widget-spot:crud-form:catalog.catalog_product:widget-injection-consumer | [widgets/injection-table.ts](../../../../src/modules/example/widgets/injection-table.ts) |
| example.injection.crud-validation@crud-form:catalog.catalog_variant | widget-spot:crud-form:catalog.catalog_variant | bound | widget-spot:crud-form:catalog.catalog_variant:widget-injection-consumer | [widgets/injection-table.ts](../../../../src/modules/example/widgets/injection-table.ts) |
| example.injection.crud-validation@crud-form:catalog.product | widget-spot:crud-form:catalog.product @catalog | bound | widget-spot:crud-form:catalog.product:widget-injection-consumer | [widgets/injection-table.ts](../../../../src/modules/example/widgets/injection-table.ts) |
| example.injection.crud-validation@crud-form:catalog.variant | widget-spot:crud-form:catalog.variant | bound | widget-spot:crud-form:catalog.variant:widget-injection-consumer | [widgets/injection-table.ts](../../../../src/modules/example/widgets/injection-table.ts) |
| example.injection.crud-validation@crud-form:example.todo | widget-spot:crud-form:example.todo @example | bound | widget-spot:crud-form:example.todo:widget-injection-consumer | [widgets/injection-table.ts](../../../../src/modules/example/widgets/injection-table.ts) |
| example.injection.crud-validation@example:phase-c-handlers | widget-spot:example:phase-c-handlers @example | bound | widget-spot:example:phase-c-handlers:widget-injection-consumer | [widgets/injection-table.ts](../../../../src/modules/example/widgets/injection-table.ts) |
| example.injection.customer-priority-bulk-actions@data-table:customers.people:bulk-actions | widget-spot:data-table:customers.people:bulk-actions | optional-target-missing | — | [widgets/injection-table.ts](../../../../src/modules/example/widgets/injection-table.ts) |
| example.injection.customer-priority-bulk-actions@data-table:customers.people.list:bulk-actions | widget-spot:data-table:customers.people.list:bulk-actions @customers | bound | widget-spot:data-table:customers.people.list:bulk-actions:widget-injection-consumer | [widgets/injection-table.ts](../../../../src/modules/example/widgets/injection-table.ts) |
| example.injection.customer-priority-column@data-table:customers.people:columns | widget-spot:data-table:customers.people:columns | optional-target-missing | — | [widgets/injection-table.ts](../../../../src/modules/example/widgets/injection-table.ts) |
| example.injection.customer-priority-column@data-table:customers.people.list:columns | widget-spot:data-table:customers.people.list:columns @customers | bound | widget-spot:data-table:customers.people.list:columns:widget-injection-consumer | [widgets/injection-table.ts](../../../../src/modules/example/widgets/injection-table.ts) |
| example.injection.customer-priority-detail@customers.person.detail:details | widget-spot:customers.person.detail:details @customers | bound | widget-spot:customers.person.detail:details:widget-injection-consumer | [widgets/injection-table.ts](../../../../src/modules/example/widgets/injection-table.ts) |
| example.injection.customer-priority-field@crud-form:customers.customer_entity:fields | widget-spot:crud-form:customers.customer_entity:fields | bound | widget-spot:crud-form:customers.customer_entity:fields:widget-injection-consumer | [widgets/injection-table.ts](../../../../src/modules/example/widgets/injection-table.ts) |
| example.injection.customer-priority-field@crud-form:customers.person:fields | widget-spot:crud-form:customers.person:fields @customers | bound | widget-spot:crud-form:customers.person:fields:widget-injection-consumer | [widgets/injection-table.ts](../../../../src/modules/example/widgets/injection-table.ts) |
| example.injection.customer-priority-filter@data-table:customers.people:filters | widget-spot:data-table:customers.people:filters | optional-target-missing | — | [widgets/injection-table.ts](../../../../src/modules/example/widgets/injection-table.ts) |
| example.injection.customer-priority-filter@data-table:customers.people.list:filters | widget-spot:data-table:customers.people.list:filters @customers | bound | widget-spot:data-table:customers.people.list:filters:widget-injection-consumer | [widgets/injection-table.ts](../../../../src/modules/example/widgets/injection-table.ts) |
| example.injection.customer-priority-row-action@data-table:customers.people:row-actions | widget-spot:data-table:customers.people:row-actions | optional-target-missing | — | [widgets/injection-table.ts](../../../../src/modules/example/widgets/injection-table.ts) |
| example.injection.customer-priority-row-action@data-table:customers.people.list:row-actions | widget-spot:data-table:customers.people.list:row-actions @customers | bound | widget-spot:data-table:customers.people.list:row-actions:widget-injection-consumer | [widgets/injection-table.ts](../../../../src/modules/example/widgets/injection-table.ts) |
| example.injection.example-menus@menu:sidebar:main | widget-spot:menu:sidebar:main | capability-only | — | [widgets/injection-table.ts](../../../../src/modules/example/widgets/injection-table.ts) |
| example.injection.example-profile-menu@menu:topbar:profile-dropdown | widget-spot:menu:topbar:profile-dropdown | capability-only | — | [widgets/injection-table.ts](../../../../src/modules/example/widgets/injection-table.ts) |
| example.injection.portal-quick-links@portal:dashboard:sections | widget-spot:portal:dashboard:sections | optional-target-missing | — | [widgets/injection-table.ts](../../../../src/modules/example/widgets/injection-table.ts) |
| example.injection.portal-recent-activity@portal:dashboard:sections | widget-spot:portal:dashboard:sections | optional-target-missing | — | [widgets/injection-table.ts](../../../../src/modules/example/widgets/injection-table.ts) |
| example.injection.portal-stats@portal:dashboard:sections | widget-spot:portal:dashboard:sections | optional-target-missing | — | [widgets/injection-table.ts](../../../../src/modules/example/widgets/injection-table.ts) |
| example.injection.sales-todos@sales.document.detail.order:tabs | widget-spot:sales.document.detail.order:tabs | wildcard | — | [widgets/injection-table.ts](../../../../src/modules/example/widgets/injection-table.ts) |
| example.injection.sales-todos@sales.document.detail.quote:tabs | widget-spot:sales.document.detail.quote:tabs | wildcard | — | [widgets/injection-table.ts](../../../../src/modules/example/widgets/injection-table.ts) |
| example.injection.todo-bulk-complete@data-table:example.todos.list:bulk-actions | widget-spot:data-table:example.todos.list:bulk-actions @example | bound | widget-spot:data-table:example.todos.list:bulk-actions:widget-injection-consumer | [widgets/injection-table.ts](../../../../src/modules/example/widgets/injection-table.ts) |
| example.todo_announcement.published.browser | event:example.todo_announcement.published @example | capability-only | — | [events.ts](../../../../src/modules/example/events.ts) |
| example.todo-limit | entity:example.todo | capability-only | — | [data/guards.ts](../../../../src/modules/example/data/guards.ts) |
| example.todo-update-audit | command:example.todos.update @example | bound | command:example.todos.update:command-interceptor-bridge | [commands/interceptors.ts](../../../../src/modules/example/commands/interceptors.ts) |
| example.todo.created.browser | event:example.todo.created @example | capability-only | — | [events.ts](../../../../src/modules/example/events.ts) |
| example.todo.deleted.browser | event:example.todo.deleted @example | capability-only | — | [events.ts](../../../../src/modules/example/events.ts) |
| example.todo.updated.browser | event:example.todo.updated @example | capability-only | — | [events.ts](../../../../src/modules/example/events.ts) |
| example.todos-probe-bad-query | api-route:example/todos @example | bound | api-route:example/todos:GET:api-interceptor-bridge | [api/interceptors.ts](../../../../src/modules/example/api/interceptors.ts) |
| example.todos-probe-crash | api-route:example/todos @example | bound | api-route:example/todos:GET:api-interceptor-bridge | [api/interceptors.ts](../../../../src/modules/example/api/interceptors.ts) |
| example.todos-probe-timeout | api-route:example/todos @example | bound | api-route:example/todos:GET:api-interceptor-bridge | [api/interceptors.ts](../../../../src/modules/example/api/interceptors.ts) |
| example.todos-response-meta | api-route:example/todos @example | bound | api-route:example/todos:GET:api-interceptor-bridge | [api/interceptors.ts](../../../../src/modules/example/api/interceptors.ts) |
| example.umes.actionable-toast | notification:example.umes.actionable | capability-only | — | [notifications.handlers.ts](../../../../src/modules/example/notifications.handlers.ts) |
| example.wildcard-probe | wildcard:example/* | wildcard | — | [api/interceptors.ts](../../../../src/modules/example/api/interceptors.ts) |
| integration:example_fixed_currency | module:example_fixed_currency | capability-only | — | [integration.ts](../../../../src/modules/example/integration.ts) |
| integration:example_mock_payment | module:example_mock_payment | capability-only | — | [integration.ts](../../../../src/modules/example/integration.ts) |
| integration:example_mock_shipping | module:example_mock_shipping | capability-only | — | [integration.ts](../../../../src/modules/example/integration.ts) |
| notification:demo.push_playground | module:demo.push_playground | capability-only | — | [notifications.ts](../../../../src/modules/example/notifications.ts) |
| notification:demo.silent_ping | module:demo.silent_ping | capability-only | — | [notifications.ts](../../../../src/modules/example/notifications.ts) |
| notification:example.umes.actionable | module:example.umes.actionable | capability-only | — | [notifications.ts](../../../../src/modules/example/notifications.ts) |
| payment:mock_processing | module:mock_processing | capability-only | — | [di.ts](../../../../src/modules/example/di.ts) |
| payment:mock_usd | module:mock_usd | capability-only | — | [di.ts](../../../../src/modules/example/di.ts) |
| payment:mock | module:mock | capability-only | — | [di.ts](../../../../src/modules/example/di.ts) |
| search:example:todo | module:example:todo @example | capability-only | — | [search.ts](../../../../src/modules/example/search.ts) |
| shipping:mock_carrier | module:mock_carrier | capability-only | — | [integration.ts](../../../../src/modules/example/integration.ts) |
| vector:example:todo | module:example:todo @example | capability-only | — | [vector.ts](../../../../src/modules/example/vector.ts) |
| workflow:example.todo-created-reference | module:example.todo-created-reference | capability-only | — | [workflows.ts](../../../../src/modules/example/workflows.ts) |

<!-- end module facts section: example/contribution-resolutions -->
