# webhooks — UMES contributions

[Back to module index](index.md)

## UMES contributions

| ID | Kind | Target | Phase / operations | Contract | Resolution | Source |
|---|---|---|---|---|---|---|
| webhooks.delivery.exhausted.browser | browser-reaction | webhooks.delivery.exhausted | — | audienceScopeContract=tenant-organization-user-role-and-customer; hooks=useAppEvent,useOperationProgress; transports=client | fact-ref | [events.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/events.ts) |
| webhooks.delivery.failed.browser | browser-reaction | webhooks.delivery.failed | — | audienceScopeContract=tenant-organization-user-role-and-customer; hooks=useAppEvent,useOperationProgress; transports=client | fact-ref | [events.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/events.ts) |
| webhooks.delivery.succeeded.browser | browser-reaction | webhooks.delivery.succeeded | — | audienceScopeContract=tenant-organization-user-role-and-customer; hooks=useAppEvent,useOperationProgress; transports=client | fact-ref | [events.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/events.ts) |
| webhooks.inbound.handler_failed.browser | browser-reaction | webhooks.inbound.handler_failed | — | audienceScopeContract=tenant-organization-user-role-and-customer; hooks=useAppEvent,useOperationProgress; transports=client | fact-ref | [events.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/events.ts) |
| webhooks.webhook.disabled.browser | browser-reaction | webhooks.webhook.disabled | — | audienceScopeContract=tenant-organization-user-role-and-customer; hooks=useAppEvent,useOperationProgress; transports=client | fact-ref | [events.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/events.ts) |
| integration:webhook_custom | specialized-registry | webhook_custom | — | registry=integration; registryId=webhook_custom; specialistRoute=integrations | fact-ref | [integration.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/integration.ts) |
| notification:webhooks.delivery.failed | specialized-registry | webhooks.delivery.failed | — | registry=notification; registryId=webhooks.delivery.failed; specialistRoute=notifications | fact-ref | [notifications.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/notifications.ts) |
| webhooks:failed-delivery-notification | subscriber | webhooks.delivery.exhausted | async-delivery | event=webhooks.delivery.exhausted; persistent=true; subscriberId=webhooks:failed-delivery-notification; sync=false | fact-ref | [subscribers/failed-delivery-notification.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/subscribers/failed-delivery-notification.ts) |
| webhooks:inbound-process | subscriber | webhooks.inbound.received | async-delivery | event=webhooks.inbound.received; persistent=true; subscriberId=webhooks:inbound-process; sync=false | fact-ref | [subscribers/inbound-process.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/subscribers/inbound-process.ts) |
| webhooks:outbound-dispatch | subscriber | * | async-delivery | event=*; persistent=true; subscriberId=webhooks:outbound-dispatch; sync=false | pattern | [subscribers/outbound-dispatch.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/subscribers/outbound-dispatch.ts) |

<!-- end module facts section: webhooks/umes-contributions -->
