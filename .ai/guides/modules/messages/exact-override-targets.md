# messages — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["messages.actions"]` | disable-replace | aclFeatures:messages.actions | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/acl.ts) |
| acl | `overrides.acl.features["messages.attach"]` | disable-replace | aclFeatures:messages.attach | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/acl.ts) |
| acl | `overrides.acl.features["messages.attach_files"]` | disable-replace | aclFeatures:messages.attach_files | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/acl.ts) |
| acl | `overrides.acl.features["messages.compose"]` | disable-replace | aclFeatures:messages.compose | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/acl.ts) |
| acl | `overrides.acl.features["messages.email"]` | disable-replace | aclFeatures:messages.email | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/acl.ts) |
| acl | `overrides.acl.features["messages.manage"]` | disable-replace | aclFeatures:messages.manage | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/acl.ts) |
| acl | `overrides.acl.features["messages.view"]` | disable-replace | aclFeatures:messages.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/acl.ts) |
| encryption | `overrides.encryption.maps["messages:message"]` | disable-replace | ownedContracts.encryption:messages:message | [encryption.ts:4](../../../../node_modules/@open-mercato/core/src/modules/messages/encryption.ts#L4) |
| events | `overrides.events.subscribers["messages:query-index-reindex-sent"]` | disable-replace | extensionSurfaces.contributions:messages:query-index-reindex-sent | [subscribers/search-reindex-sent.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/subscribers/search-reindex-sent.ts) |
| events | `overrides.events.subscribers["messages:queue-email-delivery"]` | disable-replace | extensionSurfaces.contributions:messages:queue-email-delivery | [subscribers/message-notification.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/subscribers/message-notification.ts) |
| notifications | `overrides.notifications.types["messages.new"]` | disable-replace | notifications:messages.new | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/notifications.ts) |
| routes | `overrides.routes.pages["backend:/backend/messages"]` | disable-replace | backendPages:/backend/messages | [backend/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/messages/backend/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/messages/[id]"]` | disable-replace | backendPages:/backend/messages/[id] | [backend/messages/[id]/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/messages/backend/messages/[id]/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/messages/compose"]` | disable-replace | backendPages:/backend/messages/compose | [backend/messages/compose/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/messages/backend/messages/compose/page.tsx) |
| routes | `overrides.routes.pages["frontend:/messages/view/[token]"]` | disable-replace | frontendPages:/messages/view/[token] | [frontend/messages/view/[token]/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/messages/frontend/messages/view/[token]/page.tsx) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:messages:setup | [setup.ts:3](../../../../node_modules/@open-mercato/core/src/modules/messages/setup.ts#L3) |
| workers | `overrides.workers["messages:send-email"]` | disable-replace | ownedContracts.worker:messages:send-email | [workers/send-email.worker.ts:36](../../../../node_modules/@open-mercato/core/src/modules/messages/workers/send-email.worker.ts#L36) |

<!-- end module facts section: messages/exact-override-targets -->
