# messages — Contribution resolutions

[Back to module index](index.md)

## Contribution resolutions

| Contribution | Target | Resolution | Activations | Source |
|---|---|---|---|---|
| messages:query-index-reindex-sent | event:messages.message.sent @messages | capability-only | — | [subscribers/search-reindex-sent.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/subscribers/search-reindex-sent.ts) |
| messages:queue-email-delivery | event:messages.message.sent @messages | capability-only | — | [subscribers/message-notification.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/subscribers/message-notification.ts) |
| messages.message.action_taken.browser | event:messages.message.action_taken @messages | capability-only | — | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/events.ts) |
| messages.message.archived.browser | event:messages.message.archived @messages | capability-only | — | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/events.ts) |
| messages.message.deleted.browser | event:messages.message.deleted @messages | capability-only | — | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/events.ts) |
| messages.message.email_failed.browser | event:messages.message.email_failed @messages | capability-only | — | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/events.ts) |
| messages.message.email_sent.browser | event:messages.message.email_sent @messages | capability-only | — | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/events.ts) |
| messages.message.marked_unread.browser | event:messages.message.marked_unread @messages | capability-only | — | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/events.ts) |
| messages.message.read.browser | event:messages.message.read @messages | capability-only | — | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/events.ts) |
| messages.message.sent.browser | event:messages.message.sent @messages | capability-only | — | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/events.ts) |
| messages.message.unarchived.browser | event:messages.message.unarchived @messages | capability-only | — | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/events.ts) |
| notification:messages.new | module:messages.new | capability-only | — | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/notifications.ts) |
| search:messages:message | module:messages:message @messages | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/messages/search.ts) |

<!-- end module facts section: messages/contribution-resolutions -->
