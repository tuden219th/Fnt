# inbox_ops — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["inbox_ops.log.view"]` | disable-replace | aclFeatures:inbox_ops.log.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/acl.ts) |
| acl | `overrides.acl.features["inbox_ops.proposals.manage"]` | disable-replace | aclFeatures:inbox_ops.proposals.manage | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/acl.ts) |
| acl | `overrides.acl.features["inbox_ops.proposals.view"]` | disable-replace | aclFeatures:inbox_ops.proposals.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/acl.ts) |
| acl | `overrides.acl.features["inbox_ops.replies.send"]` | disable-replace | aclFeatures:inbox_ops.replies.send | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/acl.ts) |
| acl | `overrides.acl.features["inbox_ops.settings.manage"]` | disable-replace | aclFeatures:inbox_ops.settings.manage | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/acl.ts) |
| ai | `overrides.ai.tools["inbox_ops_accept_action"]` | disable-replace | aiTools:inbox_ops_accept_action | [ai-tools.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/ai-tools.ts) |
| ai | `overrides.ai.tools["inbox_ops_categorize_email"]` | disable-replace | aiTools:inbox_ops_categorize_email | [ai-tools.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/ai-tools.ts) |
| ai | `overrides.ai.tools["inbox_ops_get_proposal"]` | disable-replace | aiTools:inbox_ops_get_proposal | [ai-tools.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/ai-tools.ts) |
| ai | `overrides.ai.tools["inbox_ops_list_proposals"]` | disable-replace | aiTools:inbox_ops_list_proposals | [ai-tools.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/ai-tools.ts) |
| di | `overrides.di["InboxDiscrepancy"]` | disable-replace | ownedContracts.di-registration:InboxDiscrepancy | [di.ts:17](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/di.ts#L17) |
| di | `overrides.di["InboxEmail"]` | disable-replace | ownedContracts.di-registration:InboxEmail | [di.ts:14](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/di.ts#L14) |
| di | `overrides.di["InboxProposal"]` | disable-replace | ownedContracts.di-registration:InboxProposal | [di.ts:15](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/di.ts#L15) |
| di | `overrides.di["InboxProposalAction"]` | disable-replace | ownedContracts.di-registration:InboxProposalAction | [di.ts:16](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/di.ts#L16) |
| di | `overrides.di["InboxSettings"]` | disable-replace | ownedContracts.di-registration:InboxSettings | [di.ts:13](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/di.ts#L13) |
| encryption | `overrides.encryption.maps["inbox_ops:inbox_discrepancy"]` | disable-replace | ownedContracts.encryption:inbox_ops:inbox_discrepancy | [encryption.ts:50](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/encryption.ts#L50) |
| encryption | `overrides.encryption.maps["inbox_ops:inbox_email"]` | disable-replace | ownedContracts.encryption:inbox_ops:inbox_email | [encryption.ts:19](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/encryption.ts#L19) |
| encryption | `overrides.encryption.maps["inbox_ops:inbox_proposal"]` | disable-replace | ownedContracts.encryption:inbox_ops:inbox_proposal | [encryption.ts:34](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/encryption.ts#L34) |
| encryption | `overrides.encryption.maps["inbox_ops:inbox_proposal_action"]` | disable-replace | ownedContracts.encryption:inbox_ops:inbox_proposal_action | [encryption.ts:42](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/encryption.ts#L42) |
| encryption | `overrides.encryption.maps["inbox_ops:inbox_settings"]` | disable-replace | ownedContracts.encryption:inbox_ops:inbox_settings | [encryption.ts:10](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/encryption.ts#L10) |
| events | `overrides.events.subscribers["inbox_ops:execution-auditor"]` | disable-replace | extensionSurfaces.contributions:inbox_ops:execution-auditor | [subscribers/executionAuditor.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/subscribers/executionAuditor.ts) |
| events | `overrides.events.subscribers["inbox_ops:extraction-worker"]` | disable-replace | extensionSurfaces.contributions:inbox_ops:extraction-worker | [subscribers/extractionWorker.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/subscribers/extractionWorker.ts) |
| events | `overrides.events.subscribers["inbox_ops:proposal-notifier"]` | disable-replace | extensionSurfaces.contributions:inbox_ops:proposal-notifier | [subscribers/proposalNotifier.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/subscribers/proposalNotifier.ts) |
| events | `overrides.events.subscribers["inbox_ops:query-index-reindex-proposal-created"]` | disable-replace | extensionSurfaces.contributions:inbox_ops:query-index-reindex-proposal-created | [subscribers/search-reindex-proposal-created.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/subscribers/search-reindex-proposal-created.ts) |
| notifications | `overrides.notifications.types["inbox_ops.proposal.created"]` | disable-replace | notifications:inbox_ops.proposal.created | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/notifications.ts) |
| routes | `overrides.routes.pages["backend:/backend/inbox-ops"]` | disable-replace | backendPages:/backend/inbox-ops | [backend/inbox-ops/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/backend/inbox-ops/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/inbox-ops/log"]` | disable-replace | backendPages:/backend/inbox-ops/log | [backend/inbox-ops/log/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/backend/inbox-ops/log/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/inbox-ops/proposals/[id]"]` | disable-replace | backendPages:/backend/inbox-ops/proposals/[id] | [backend/inbox-ops/proposals/[id]/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/backend/inbox-ops/proposals/[id]/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/inbox-ops/settings"]` | disable-replace | backendPages:/backend/inbox-ops/settings | [backend/inbox-ops/settings/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/backend/inbox-ops/settings/page.tsx) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:inbox_ops:setup | [setup.ts:5](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/setup.ts#L5) |
| setup | `overrides.setup.onTenantCreated` | replace | ownedContracts.setup:inbox_ops:setup | [setup.ts:5](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/setup.ts#L5) |
| setup | `overrides.setup.seedDefaults` | replace | ownedContracts.setup:inbox_ops:setup | [setup.ts:5](../../../../node_modules/@open-mercato/core/src/modules/inbox_ops/setup.ts#L5) |

<!-- end module facts section: inbox_ops/exact-override-targets -->
