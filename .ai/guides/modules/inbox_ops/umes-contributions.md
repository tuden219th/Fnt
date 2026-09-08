# inbox_ops — UMES contributions

[Back to module index](index.md)

## UMES contributions

| ID | Kind | Target | Phase / operations | Contract | Resolution | Source |
|---|---|---|---|---|---|---|
| ai:inbox_ops_accept_action | specialized-registry | inbox_ops_accept_action | — | registry=ai; registryId=inbox_ops_accept_action; specialistRoute=aiTools | fact-ref | [ai-tools.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/ai-tools.ts) |
| ai:inbox_ops_categorize_email | specialized-registry | inbox_ops_categorize_email | — | registry=ai; registryId=inbox_ops_categorize_email; specialistRoute=aiTools | fact-ref | [ai-tools.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/ai-tools.ts) |
| ai:inbox_ops_get_proposal | specialized-registry | inbox_ops_get_proposal | — | registry=ai; registryId=inbox_ops_get_proposal; specialistRoute=aiTools | fact-ref | [ai-tools.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/ai-tools.ts) |
| ai:inbox_ops_list_proposals | specialized-registry | inbox_ops_list_proposals | — | registry=ai; registryId=inbox_ops_list_proposals; specialistRoute=aiTools | fact-ref | [ai-tools.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/ai-tools.ts) |
| notification:inbox_ops.proposal.created | specialized-registry | inbox_ops.proposal.created | — | registry=notification; registryId=inbox_ops.proposal.created; specialistRoute=notifications | fact-ref | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/notifications.ts) |
| search:inbox_ops:inbox_proposal | specialized-registry | inbox_ops:inbox_proposal | — | registry=search; registryId=inbox_ops:inbox_proposal; specialistRoute=search | fact-ref | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/search.ts) |
| inbox_ops:execution-auditor | subscriber | inbox_ops.action.executed | async-delivery | event=inbox_ops.action.executed; persistent=true; subscriberId=inbox_ops:execution-auditor; sync=false | fact-ref | [subscribers/executionAuditor.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/subscribers/executionAuditor.ts) |
| inbox_ops:extraction-worker | subscriber | inbox_ops.email.received | async-delivery | event=inbox_ops.email.received; persistent=true; subscriberId=inbox_ops:extraction-worker; sync=false | fact-ref | [subscribers/extractionWorker.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/subscribers/extractionWorker.ts) |
| inbox_ops:proposal-notifier | subscriber | inbox_ops.proposal.created | async-delivery | event=inbox_ops.proposal.created; persistent=true; subscriberId=inbox_ops:proposal-notifier; sync=false | fact-ref | [subscribers/proposalNotifier.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/subscribers/proposalNotifier.ts) |
| inbox_ops:query-index-reindex-proposal-created | subscriber | inbox_ops.proposal.created | before-or-after | event=inbox_ops.proposal.created; persistent=false; subscriberId=inbox_ops:query-index-reindex-proposal-created; sync=true | fact-ref | [subscribers/search-reindex-proposal-created.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/subscribers/search-reindex-proposal-created.ts) |

<!-- end module facts section: inbox_ops/umes-contributions -->
