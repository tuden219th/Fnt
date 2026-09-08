# push_notifications — UMES contributions

[Back to module index](index.md)

## UMES contributions

| ID | Kind | Target | Phase / operations | Contract | Resolution | Source |
|---|---|---|---|---|---|---|
| push_notifications.entity-extension.0:push_notifications:push_notification_delivery->devices:user_device | entity-extension | push_notifications:push_notification_delivery | — | extensionEntityId=devices:user_device; hostEntityId=push_notifications:push_notification_delivery; linkId=user_device_id:id; orphanContract=optional; scopeContract=tenant-and-organization | fact-ref | [data/extensions.ts](../../../../node_modules/@open-mercato/core/src/modules/push_notifications/data/extensions.ts) |
| push_notifications.entity-extension.1:push_notifications:push_notification_delivery->notifications:notification | entity-extension | push_notifications:push_notification_delivery | — | extensionEntityId=notifications:notification; hostEntityId=push_notifications:push_notification_delivery; linkId=notification_id:id; orphanContract=optional; scopeContract=tenant-and-organization | fact-ref | [data/extensions.ts](../../../../node_modules/@open-mercato/core/src/modules/push_notifications/data/extensions.ts) |

<!-- end module facts section: push_notifications/umes-contributions -->
