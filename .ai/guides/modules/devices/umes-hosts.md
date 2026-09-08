# devices — UMES hosts

[Back to module index](index.md)

## UMES hosts

| ID / pattern | Family | Supports | Context | Stability | Source |
|---|---|---|---|---|---|
| devices:user_device | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:devices:user_device |
| devices.user_device | entity | response-enricher, query-enricher, mutation-guard | tenant-and-organization | STABLE | [api/deviceOps.ts](../../../../node_modules/@open-mercato/core/src/modules/devices/api/deviceOps.ts) |
| devices.user_device.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:devices.user_device.created |
| devices.user_device.deactivated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:devices.user_device.deactivated |
| devices.user_device.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:devices.user_device.deleted |
| devices.user_device.registered | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:devices.user_device.registered |
| devices.user_device.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:devices.user_device.updated |

<!-- end module facts section: devices/umes-hosts -->
