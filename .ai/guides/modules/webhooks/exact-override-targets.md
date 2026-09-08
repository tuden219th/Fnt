# webhooks — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["webhooks.manage"]` | disable-replace | aclFeatures:webhooks.manage | [acl.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/acl.ts) |
| acl | `overrides.acl.features["webhooks.secrets"]` | disable-replace | aclFeatures:webhooks.secrets | [acl.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/acl.ts) |
| acl | `overrides.acl.features["webhooks.test"]` | disable-replace | aclFeatures:webhooks.test | [acl.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/acl.ts) |
| acl | `overrides.acl.features["webhooks.view"]` | disable-replace | aclFeatures:webhooks.view | [acl.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/acl.ts) |
| encryption | `overrides.encryption.maps["webhooks:webhook_entity"]` | disable-replace | ownedContracts.encryption:webhooks:webhook_entity | [encryption.ts:4](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/encryption.ts#L4) |
| encryption | `overrides.encryption.maps["webhooks:webhook_ingestion_entity"]` | disable-replace | ownedContracts.encryption:webhooks:webhook_ingestion_entity | [encryption.ts:11](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/encryption.ts#L11) |
| events | `overrides.events.subscribers["webhooks:failed-delivery-notification"]` | disable-replace | extensionSurfaces.contributions:webhooks:failed-delivery-notification | [subscribers/failed-delivery-notification.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/subscribers/failed-delivery-notification.ts) |
| events | `overrides.events.subscribers["webhooks:inbound-process"]` | disable-replace | extensionSurfaces.contributions:webhooks:inbound-process | [subscribers/inbound-process.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/subscribers/inbound-process.ts) |
| events | `overrides.events.subscribers["webhooks:outbound-dispatch"]` | disable-replace | extensionSurfaces.contributions:webhooks:outbound-dispatch | [subscribers/outbound-dispatch.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/subscribers/outbound-dispatch.ts) |
| notifications | `overrides.notifications.types["webhooks.delivery.failed"]` | disable-replace | notifications:webhooks.delivery.failed | [notifications.ts](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/notifications.ts) |
| routes | `overrides.routes.pages["backend:/backend/webhooks"]` | disable-replace | backendPages:/backend/webhooks | [backend/webhooks/page.tsx](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/backend/webhooks/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/webhooks/[id]"]` | disable-replace | backendPages:/backend/webhooks/[id] | [backend/webhooks/[id]/page.tsx](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/backend/webhooks/[id]/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/webhooks/create"]` | disable-replace | backendPages:/backend/webhooks/create | [backend/webhooks/create/page.tsx](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/backend/webhooks/create/page.tsx) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:webhooks:setup | [setup.ts:3](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/setup.ts#L3) |
| workers | `overrides.workers["webhooks:delivery-worker"]` | disable-replace | ownedContracts.worker:webhooks:delivery-worker | [workers/webhook-delivery.ts:7](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/workers/webhook-delivery.ts#L7) |
| workers | `overrides.workers["webhooks:inbound-dispatch-worker"]` | disable-replace | ownedContracts.worker:webhooks:inbound-dispatch-worker | [workers/inbound-dispatch.ts:7](../../../../node_modules/@open-mercato/webhooks/src/modules/webhooks/workers/inbound-dispatch.ts#L7) |

<!-- end module facts section: webhooks/exact-override-targets -->
