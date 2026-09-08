# customer_accounts — Events

[Back to module index](index.md)

## Events  (25)

| ID | Category | Entity | Browser transport | Source |
|---|---|---|---|---|
| customer_accounts.user.created | crud | user | client | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/events.ts) |
| customer_accounts.user.updated | crud | user | portal | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/events.ts) |
| customer_accounts.user.deleted | crud | user | — | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/events.ts) |
| customer_accounts.user.locked | lifecycle | user | portal | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/events.ts) |
| customer_accounts.user.unlocked | lifecycle | user | portal | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/events.ts) |
| customer_accounts.login.success | lifecycle | — | — | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/events.ts) |
| customer_accounts.login.failed | lifecycle | — | — | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/events.ts) |
| customer_accounts.magic_link.requested | lifecycle | — | — | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/events.ts) |
| customer_accounts.email.verified | lifecycle | — | portal | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/events.ts) |
| customer_accounts.password.reset_requested | lifecycle | — | — | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/events.ts) |
| customer_accounts.password.reset | lifecycle | — | portal | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/events.ts) |
| customer_accounts.password.changed | lifecycle | — | — | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/events.ts) |
| customer_accounts.role.created | crud | role | — | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/events.ts) |
| customer_accounts.role.updated | crud | role | portal | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/events.ts) |
| customer_accounts.role.deleted | crud | role | — | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/events.ts) |
| customer_accounts.user.invited | lifecycle | user | client | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/events.ts) |
| customer_accounts.invitation.accepted | lifecycle | — | client | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/events.ts) |
| customer_accounts.password_reset.requested | lifecycle | — | — | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/events.ts) |
| customer_accounts.domain_mapping.created | crud | domain_mapping | client | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/events.ts) |
| customer_accounts.domain_mapping.verified | lifecycle | domain_mapping | client | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/events.ts) |
| customer_accounts.domain_mapping.activated | lifecycle | domain_mapping | client | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/events.ts) |
| customer_accounts.domain_mapping.dns_failed | lifecycle | domain_mapping | client | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/events.ts) |
| customer_accounts.domain_mapping.tls_failed | lifecycle | domain_mapping | client | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/events.ts) |
| customer_accounts.domain_mapping.deleted | crud | domain_mapping | client | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/events.ts) |
| customer_accounts.domain_mapping.replaced | lifecycle | domain_mapping | client | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/events.ts) |

<!-- end module facts section: customer_accounts/events -->
