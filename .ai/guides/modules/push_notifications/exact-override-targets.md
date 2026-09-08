# push_notifications — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["push_notifications.send_custom"]` | disable-replace | aclFeatures:push_notifications.send_custom | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/push_notifications/acl.ts) |
| acl | `overrides.acl.features["push_notifications.view_deliveries"]` | disable-replace | aclFeatures:push_notifications.view_deliveries | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/push_notifications/acl.ts) |
| di | `overrides.di["PushNotificationDelivery"]` | disable-replace | ownedContracts.di-registration:PushNotificationDelivery | [di.ts:15](../../../../node_modules/@open-mercato/core/src/modules/push_notifications/di.ts#L15) |
| di | `overrides.di["pushNotificationService"]` | disable-replace | ownedContracts.di-registration:pushNotificationService | [di.ts:18](../../../../node_modules/@open-mercato/core/src/modules/push_notifications/di.ts#L18) |
| routes | `overrides.routes.pages["backend:/backend/push_notifications"]` | disable-replace | backendPages:/backend/push_notifications | [backend/push_notifications/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/push_notifications/backend/push_notifications/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/push_notifications/[id]"]` | disable-replace | backendPages:/backend/push_notifications/[id] | [backend/push_notifications/[id]/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/push_notifications/backend/push_notifications/[id]/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/push_notifications/send"]` | disable-replace | backendPages:/backend/push_notifications/send | [backend/push_notifications/send/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/push_notifications/backend/push_notifications/send/page.tsx) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:push_notifications:setup | [setup.ts:49](../../../../node_modules/@open-mercato/core/src/modules/push_notifications/setup.ts#L49) |
| setup | `overrides.setup.seedDefaults` | replace | ownedContracts.setup:push_notifications:setup | [setup.ts:49](../../../../node_modules/@open-mercato/core/src/modules/push_notifications/setup.ts#L49) |
| workers | `overrides.workers["push_notifications:reclaim-stuck"]` | disable-replace | ownedContracts.worker:push_notifications:reclaim-stuck | [workers/reclaim-stuck.worker.ts:20](../../../../node_modules/@open-mercato/core/src/modules/push_notifications/workers/reclaim-stuck.worker.ts#L20) |
| workers | `overrides.workers["push_notifications:send-push"]` | disable-replace | ownedContracts.worker:push_notifications:send-push | [workers/send-push.worker.ts:9](../../../../node_modules/@open-mercato/core/src/modules/push_notifications/workers/send-push.worker.ts#L9) |

<!-- end module facts section: push_notifications/exact-override-targets -->
