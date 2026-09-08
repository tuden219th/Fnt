# auth — UMES hosts

[Back to module index](index.md)

## UMES hosts

| ID / pattern | Family | Supports | Context | Stability | Source |
|---|---|---|---|---|---|
| data-table:auth.roles.list | data-table | component-replacement | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/extension-points.ts) |
| data-table:auth.roles.list:bulk-actions | data-table | bulk-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/extension-points.ts) |
| data-table:auth.roles.list:columns | data-table | column-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/extension-points.ts) |
| data-table:auth.roles.list:filters | data-table | filter-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/extension-points.ts) |
| data-table:auth.roles.list:footer | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/extension-points.ts) |
| data-table:auth.roles.list:header | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/extension-points.ts) |
| data-table:auth.roles.list:row-actions | data-table | row-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/extension-points.ts) |
| data-table:auth.roles.list:search-trailing | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/extension-points.ts) |
| data-table:auth.roles.list:toolbar | data-table | toolbar-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/extension-points.ts) |
| data-table:auth.users.list | data-table | component-replacement | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/extension-points.ts) |
| data-table:auth.users.list:bulk-actions | data-table | bulk-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/extension-points.ts) |
| data-table:auth.users.list:columns | data-table | column-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/extension-points.ts) |
| data-table:auth.users.list:filters | data-table | filter-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/extension-points.ts) |
| data-table:auth.users.list:footer | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/extension-points.ts) |
| data-table:auth.users.list:header | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/extension-points.ts) |
| data-table:auth.users.list:row-actions | data-table | row-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/extension-points.ts) |
| data-table:auth.users.list:search-trailing | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/extension-points.ts) |
| data-table:auth.users.list:toolbar | data-table | toolbar-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/extension-points.ts) |
| auth:password_reset | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:auth:password_reset |
| auth:role | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:auth:role |
| auth:role_acl | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:auth:role_acl |
| auth:role_sidebar_preference | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:auth:role_sidebar_preference |
| auth:session | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:auth:session |
| auth:sidebar_variant | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:auth:sidebar_variant |
| auth:user | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:auth:user |
| auth:user_acl | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:auth:user_acl |
| auth:user_consent | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:auth:user_consent |
| auth:user_role | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:auth:user_role |
| auth:user_sidebar_preference | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:auth:user_sidebar_preference |
| auth.user | entity | response-enricher, query-enricher, mutation-guard | tenant-and-organization | STABLE | [api/users/resend-invite/route.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/api/users/resend-invite/route.ts) |
| auth.login.failed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:auth.login.failed |
| auth.login.success | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:auth.login.success |
| auth.logout | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:auth.logout |
| auth.password.changed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:auth.password.changed |
| auth.password.reset.completed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:auth.password.reset.completed |
| auth.password.reset.requested | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:auth.password.reset.requested |
| auth.role.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:auth.role.created |
| auth.role.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:auth.role.deleted |
| auth.role.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:auth.role.updated |
| auth.user.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:auth.user.created |
| auth.user.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:auth.user.deleted |
| auth.user.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:auth.user.updated |
| auth.login:form | generic | render-widget | auth.login-form.v1 | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/extension-points.ts) |

<!-- end module facts section: auth/umes-hosts -->
