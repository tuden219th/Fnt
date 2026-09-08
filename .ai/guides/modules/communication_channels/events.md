# communication_channels — Events

[Back to module index](index.md)

## Events  (16)

| ID | Category | Entity | Browser transport | Source |
|---|---|---|---|---|
| communication_channels.message.received | custom | external_message | client | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/events.ts) |
| communication_channels.message.sent | custom | external_message | client | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/events.ts) |
| communication_channels.message.delivery_failed | custom | external_message | client | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/events.ts) |
| communication_channels.conversation.created | custom | external_conversation | — | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/events.ts) |
| communication_channels.conversation.reassigned | custom | external_conversation | — | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/events.ts) |
| communication_channels.contact.resolved | custom | external_conversation | — | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/events.ts) |
| communication_channels.channel.requires_reauth | lifecycle | communication_channel | client | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/events.ts) |
| communication_channels.channel.disconnected | lifecycle | communication_channel | client | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/events.ts) |
| communication_channels.channel.deleted | lifecycle | communication_channel | client | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/events.ts) |
| communication_channels.channel.primary_changed | lifecycle | communication_channel | client | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/events.ts) |
| communication_channels.reaction.added | custom | message_reaction | client | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/events.ts) |
| communication_channels.reaction.removed | custom | message_reaction | client | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/events.ts) |
| communication_channels.push.registered | lifecycle | communication_channel | client | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/events.ts) |
| communication_channels.push.failed | lifecycle | communication_channel | client | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/events.ts) |
| communication_channels.push.renewed | lifecycle | communication_channel | — | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/events.ts) |
| communication_channels.push.deactivated | lifecycle | communication_channel | client | [events.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/events.ts) |

<!-- end module facts section: communication_channels/events -->
