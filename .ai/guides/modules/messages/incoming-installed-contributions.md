# messages — Incoming installed contributions

[Back to module index](index.md)

## Incoming installed contributions

| Contributor | Kind | Target | Resolution | Activation | Contribution · Source |
|---|---|---|---|---|---|
| communication_channels | subscriber | event:messages.message.sent @messages | capability-only | — | communication_channels:outbound-bridge · [node_modules/@open-mercato/core/src/modules/communication_channels/subscribers/outbound-bridge.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/subscribers/outbound-bridge.ts) |
| communication_channels | entity-extension | entity:messages:message @messages | capability-only | — | communication_channels.entity-extension.0:messages:message->communication_channels:message_channel_link · [node_modules/@open-mercato/core/src/modules/communication_channels/data/extensions.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/data/extensions.ts) |
| communication_channels | entity-extension | entity:messages:message @messages | capability-only | — | communication_channels.entity-extension.1:messages:message->communication_channels:message_reaction · [node_modules/@open-mercato/core/src/modules/communication_channels/data/extensions.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/data/extensions.ts) |
| communication_channels | data-table | widget-spot:data-table:messages:columns @messages | bound | widget-spot:data-table:messages:columns:widget-injection-consumer | communication_channels.injection.channel-badge@data-table:messages:columns · [node_modules/@open-mercato/core/src/modules/communication_channels/widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/widgets/injection-table.ts) |
| communication_channels | widget | widget-spot:detail:messages:message:sidebar @messages | bound | widget-spot:detail:messages:message:sidebar:widget-injection-consumer | communication_channels.injection.channel-info-panel@detail:messages:message:sidebar · [node_modules/@open-mercato/core/src/modules/communication_channels/widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/widgets/injection-table.ts) |
| communication_channels | widget | widget-spot:detail:messages:message:body:after @messages | bound | widget-spot:detail:messages:message:body:after:widget-injection-consumer | communication_channels.injection.channel-payload-renderer@detail:messages:message:body:after · [node_modules/@open-mercato/core/src/modules/communication_channels/widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/widgets/injection-table.ts) |
| communication_channels | widget | widget-spot:detail:messages:message:body:after @messages | bound | widget-spot:detail:messages:message:body:after:widget-injection-consumer | communication_channels.injection.reaction-bar@detail:messages:message:body:after · [node_modules/@open-mercato/core/src/modules/communication_channels/widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/widgets/injection-table.ts) |

<!-- end module facts section: messages/incoming-installed-contributions -->
