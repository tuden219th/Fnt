# channel_apns — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["channel_apns.configure"]` | disable-replace | aclFeatures:channel_apns.configure | [acl.ts](../../../../node_modules/@open-mercato/channel-apns/src/modules/channel_apns/acl.ts) |
| acl | `overrides.acl.features["channel_apns.view"]` | disable-replace | aclFeatures:channel_apns.view | [acl.ts](../../../../node_modules/@open-mercato/channel-apns/src/modules/channel_apns/acl.ts) |
| di | `overrides.di["channelApnsAdapter"]` | disable-replace | ownedContracts.di-registration:channelApnsAdapter | [di.ts:21](../../../../node_modules/@open-mercato/channel-apns/src/modules/channel_apns/di.ts#L21) |
| di | `overrides.di["channelApnsHealthCheck"]` | disable-replace | ownedContracts.di-registration:channelApnsHealthCheck | [di.ts:24](../../../../node_modules/@open-mercato/channel-apns/src/modules/channel_apns/di.ts#L24) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:channel_apns:setup | [setup.ts:21](../../../../node_modules/@open-mercato/channel-apns/src/modules/channel_apns/setup.ts#L21) |
| setup | `overrides.setup.onTenantCreated` | replace | ownedContracts.setup:channel_apns:setup | [setup.ts:21](../../../../node_modules/@open-mercato/channel-apns/src/modules/channel_apns/setup.ts#L21) |
| widgets | `overrides.widgets.injection["channel_apns.injection.connect"]` | disable-replace | extensionSurfaces.contributions:channel_apns.injection.connect@data-table:communication_channels.channels:toolbar | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/channel-apns/src/modules/channel_apns/widgets/injection-table.ts) |

<!-- end module facts section: channel_apns/exact-override-targets -->
