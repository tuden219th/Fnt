# messages — UMES contributions

[Back to module index](index.md)

## UMES contributions

| ID | Kind | Target | Phase / operations | Contract | Resolution | Source |
|---|---|---|---|---|---|---|
| messages.message.action_taken.browser | browser-reaction | messages.message.action_taken | — | audienceScopeContract=tenant-organization-user-role-and-customer; hooks=useAppEvent,useOperationProgress; transports=client | fact-ref | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/events.ts) |
| messages.message.archived.browser | browser-reaction | messages.message.archived | — | audienceScopeContract=tenant-organization-user-role-and-customer; hooks=useAppEvent,useOperationProgress; transports=client | fact-ref | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/events.ts) |
| messages.message.deleted.browser | browser-reaction | messages.message.deleted | — | audienceScopeContract=tenant-organization-user-role-and-customer; hooks=useAppEvent,useOperationProgress; transports=client | fact-ref | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/events.ts) |
| messages.message.email_failed.browser | browser-reaction | messages.message.email_failed | — | audienceScopeContract=tenant-organization-user-role-and-customer; hooks=useAppEvent,useOperationProgress; transports=client | fact-ref | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/events.ts) |
| messages.message.email_sent.browser | browser-reaction | messages.message.email_sent | — | audienceScopeContract=tenant-organization-user-role-and-customer; hooks=useAppEvent,useOperationProgress; transports=client | fact-ref | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/events.ts) |
| messages.message.marked_unread.browser | browser-reaction | messages.message.marked_unread | — | audienceScopeContract=tenant-organization-user-role-and-customer; hooks=useAppEvent,useOperationProgress; transports=client | fact-ref | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/events.ts) |
| messages.message.read.browser | browser-reaction | messages.message.read | — | audienceScopeContract=tenant-organization-user-role-and-customer; hooks=useAppEvent,useOperationProgress; transports=client | fact-ref | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/events.ts) |
| messages.message.sent.browser | browser-reaction | messages.message.sent | — | audienceScopeContract=tenant-organization-user-role-and-customer; hooks=useAppEvent,useOperationProgress; transports=client | fact-ref | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/events.ts) |
| messages.message.unarchived.browser | browser-reaction | messages.message.unarchived | — | audienceScopeContract=tenant-organization-user-role-and-customer; hooks=useAppEvent,useOperationProgress; transports=client | fact-ref | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/events.ts) |
| notification:messages.new | specialized-registry | messages.new | — | registry=notification; registryId=messages.new; specialistRoute=notifications | fact-ref | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/notifications.ts) |
| search:messages:message | specialized-registry | messages:message | — | registry=search; registryId=messages:message; specialistRoute=search | fact-ref | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/search.ts) |
| messages:query-index-reindex-sent | subscriber | messages.message.sent | before-or-after | event=messages.message.sent; persistent=false; subscriberId=messages:query-index-reindex-sent; sync=true | fact-ref | [subscribers/search-reindex-sent.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/subscribers/search-reindex-sent.ts) |
| messages:queue-email-delivery | subscriber | messages.message.sent | async-delivery | event=messages.message.sent; persistent=true; subscriberId=messages:queue-email-delivery; sync=false | fact-ref | [subscribers/message-notification.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/subscribers/message-notification.ts) |

<!-- end module facts section: messages/umes-contributions -->
