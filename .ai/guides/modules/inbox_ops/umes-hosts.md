# inbox_ops — UMES hosts

[Back to module index](index.md)

## UMES hosts

| ID / pattern | Family | Supports | Context | Stability | Source |
|---|---|---|---|---|---|
| inbox_ops:inbox_discrepancy | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:inbox_ops:inbox_discrepancy |
| inbox_ops:inbox_email | entity | response-enricher, query-enricher, mutation-guard | tenant-and-organization | STABLE | [api/emails/[id]/route.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/api/emails/[id]/route.ts) |
| inbox_ops:inbox_proposal | entity | response-enricher, query-enricher, mutation-guard | tenant-and-organization | STABLE | [api/proposals/[id]/accept-all/route.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/api/proposals/[id]/accept-all/route.ts) |
| inbox_ops:inbox_proposal_action | entity | response-enricher, query-enricher, mutation-guard | tenant-and-organization | STABLE | [api/proposals/[id]/actions/[actionId]/route.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/api/proposals/[id]/actions/[actionId]/route.ts) |
| inbox_ops:inbox_settings | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:inbox_ops:inbox_settings |
| inbox_ops.action.edited | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:inbox_ops.action.edited |
| inbox_ops.action.executed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:inbox_ops.action.executed |
| inbox_ops.action.failed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:inbox_ops.action.failed |
| inbox_ops.action.rejected | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:inbox_ops.action.rejected |
| inbox_ops.email.deduplicated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:inbox_ops.email.deduplicated |
| inbox_ops.email.failed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:inbox_ops.email.failed |
| inbox_ops.email.processed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:inbox_ops.email.processed |
| inbox_ops.email.received | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:inbox_ops.email.received |
| inbox_ops.email.reprocessed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:inbox_ops.email.reprocessed |
| inbox_ops.proposal.accepted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:inbox_ops.proposal.accepted |
| inbox_ops.proposal.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:inbox_ops.proposal.created |
| inbox_ops.proposal.rejected | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:inbox_ops.proposal.rejected |
| inbox_ops.reply.sent | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:inbox_ops.reply.sent |
| inbox_ops.inbox_proposal.queried | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:inbox_ops:inbox_proposal |
| inbox_ops.inbox_proposal.querying | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:inbox_ops:inbox_proposal |

<!-- end module facts section: inbox_ops/umes-hosts -->
