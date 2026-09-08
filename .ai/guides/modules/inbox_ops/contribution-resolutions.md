# inbox_ops — Contribution resolutions

[Back to module index](index.md)

## Contribution resolutions

| Contribution | Target | Resolution | Activations | Source |
|---|---|---|---|---|
| ai:inbox_ops_accept_action | module:inbox_ops_accept_action | capability-only | — | [ai-tools.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/ai-tools.ts) |
| ai:inbox_ops_categorize_email | module:inbox_ops_categorize_email | capability-only | — | [ai-tools.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/ai-tools.ts) |
| ai:inbox_ops_get_proposal | module:inbox_ops_get_proposal | capability-only | — | [ai-tools.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/ai-tools.ts) |
| ai:inbox_ops_list_proposals | module:inbox_ops_list_proposals | capability-only | — | [ai-tools.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/ai-tools.ts) |
| inbox_ops:execution-auditor | event:inbox_ops.action.executed @inbox_ops | capability-only | — | [subscribers/executionAuditor.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/subscribers/executionAuditor.ts) |
| inbox_ops:extraction-worker | event:inbox_ops.email.received @inbox_ops | capability-only | — | [subscribers/extractionWorker.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/subscribers/extractionWorker.ts) |
| inbox_ops:proposal-notifier | event:inbox_ops.proposal.created @inbox_ops | capability-only | — | [subscribers/proposalNotifier.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/subscribers/proposalNotifier.ts) |
| inbox_ops:query-index-reindex-proposal-created | event:inbox_ops.proposal.created @inbox_ops | capability-only | — | [subscribers/search-reindex-proposal-created.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/subscribers/search-reindex-proposal-created.ts) |
| notification:inbox_ops.proposal.created | module:inbox_ops.proposal.created @inbox_ops | capability-only | — | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/notifications.ts) |
| search:inbox_ops:inbox_proposal | module:inbox_ops:inbox_proposal @inbox_ops | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/search.ts) |

<!-- end module facts section: inbox_ops/contribution-resolutions -->
