# customer_accounts — UMES hosts

[Back to module index](index.md)

## UMES hosts

| ID / pattern | Family | Supports | Context | Stability | Source |
|---|---|---|---|---|---|
| data-table:customer_accounts.admin.roles | data-table | component-replacement | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/extension-points.ts) |
| data-table:customer_accounts.admin.roles:bulk-actions | data-table | bulk-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/extension-points.ts) |
| data-table:customer_accounts.admin.roles:columns | data-table | column-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/extension-points.ts) |
| data-table:customer_accounts.admin.roles:filters | data-table | filter-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/extension-points.ts) |
| data-table:customer_accounts.admin.roles:footer | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/extension-points.ts) |
| data-table:customer_accounts.admin.roles:header | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/extension-points.ts) |
| data-table:customer_accounts.admin.roles:row-actions | data-table | row-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/extension-points.ts) |
| data-table:customer_accounts.admin.roles:search-trailing | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/extension-points.ts) |
| data-table:customer_accounts.admin.roles:toolbar | data-table | toolbar-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/extension-points.ts) |
| data-table:customer_accounts.admin.users | data-table | component-replacement | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/extension-points.ts) |
| data-table:customer_accounts.admin.users:bulk-actions | data-table | bulk-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/extension-points.ts) |
| data-table:customer_accounts.admin.users:columns | data-table | column-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/extension-points.ts) |
| data-table:customer_accounts.admin.users:filters | data-table | filter-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/extension-points.ts) |
| data-table:customer_accounts.admin.users:footer | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/extension-points.ts) |
| data-table:customer_accounts.admin.users:header | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/extension-points.ts) |
| data-table:customer_accounts.admin.users:row-actions | data-table | row-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/extension-points.ts) |
| data-table:customer_accounts.admin.users:search-trailing | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/extension-points.ts) |
| data-table:customer_accounts.admin.users:toolbar | data-table | toolbar-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/extension-points.ts) |
| customer_accounts:customer_role | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:customer_accounts:customer_role |
| customer_accounts:customer_role_acl | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:customer_accounts:customer_role_acl |
| customer_accounts:customer_user | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:customer_accounts:customer_user |
| customer_accounts:customer_user_acl | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:customer_accounts:customer_user_acl |
| customer_accounts:customer_user_email_verification | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:customer_accounts:customer_user_email_verification |
| customer_accounts:customer_user_invitation | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:customer_accounts:customer_user_invitation |
| customer_accounts:customer_user_password_reset | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:customer_accounts:customer_user_password_reset |
| customer_accounts:customer_user_role | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:customer_accounts:customer_user_role |
| customer_accounts:customer_user_session | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:customer_accounts:customer_user_session |
| customer_accounts:domain_mapping | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:customer_accounts:domain_mapping |
| customer_accounts.domain_mapping | entity | response-enricher, query-enricher, mutation-guard | tenant-and-organization | STABLE | [api/admin/domain-mappings/[id]/health-check.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/api/admin/domain-mappings/[id]/health-check.ts) |
| customer_accounts.role | entity | response-enricher, query-enricher, mutation-guard | tenant-and-organization | STABLE | [api/admin/roles/[id]/acl.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/api/admin/roles/[id]/acl.ts) |
| customer_accounts.domain_mapping.activated | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:customer_accounts.domain_mapping.activated |
| customer_accounts.domain_mapping.created | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:customer_accounts.domain_mapping.created |
| customer_accounts.domain_mapping.deleted | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:customer_accounts.domain_mapping.deleted |
| customer_accounts.domain_mapping.dns_failed | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:customer_accounts.domain_mapping.dns_failed |
| customer_accounts.domain_mapping.replaced | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:customer_accounts.domain_mapping.replaced |
| customer_accounts.domain_mapping.tls_failed | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:customer_accounts.domain_mapping.tls_failed |
| customer_accounts.domain_mapping.verified | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:customer_accounts.domain_mapping.verified |
| customer_accounts.email.verified | event | async-subscriber, sync-subscriber, browser-portal | tenant-organization-and-audience | STABLE | events:customer_accounts.email.verified |
| customer_accounts.invitation.accepted | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:customer_accounts.invitation.accepted |
| customer_accounts.login.failed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:customer_accounts.login.failed |
| customer_accounts.login.success | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:customer_accounts.login.success |
| customer_accounts.magic_link.requested | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:customer_accounts.magic_link.requested |
| customer_accounts.password_reset.requested | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:customer_accounts.password_reset.requested |
| customer_accounts.password.changed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:customer_accounts.password.changed |
| customer_accounts.password.reset | event | async-subscriber, sync-subscriber, browser-portal | tenant-organization-and-audience | STABLE | events:customer_accounts.password.reset |
| customer_accounts.password.reset_requested | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:customer_accounts.password.reset_requested |
| customer_accounts.role.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:customer_accounts.role.created |
| customer_accounts.role.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:customer_accounts.role.deleted |
| customer_accounts.role.updated | event | async-subscriber, sync-subscriber, browser-portal | tenant-organization-and-audience | STABLE | events:customer_accounts.role.updated |
| customer_accounts.user.created | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:customer_accounts.user.created |
| customer_accounts.user.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:customer_accounts.user.deleted |
| customer_accounts.user.invited | event | async-subscriber, sync-subscriber, browser-client | tenant-organization-and-audience | STABLE | events:customer_accounts.user.invited |
| customer_accounts.user.locked | event | async-subscriber, sync-subscriber, browser-portal | tenant-organization-and-audience | STABLE | events:customer_accounts.user.locked |
| customer_accounts.user.unlocked | event | async-subscriber, sync-subscriber, browser-portal | tenant-organization-and-audience | STABLE | events:customer_accounts.user.unlocked |
| customer_accounts.user.updated | event | async-subscriber, sync-subscriber, browser-portal | tenant-organization-and-audience | STABLE | events:customer_accounts.user.updated |
| customer_accounts.customer_role.queried | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:customer_accounts:customer_role |
| customer_accounts.customer_role.querying | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:customer_accounts:customer_role |
| customer_accounts.customer_user.queried | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:customer_accounts:customer_user |
| customer_accounts.customer_user.querying | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:customer_accounts:customer_user |

<!-- end module facts section: customer_accounts/umes-hosts -->
