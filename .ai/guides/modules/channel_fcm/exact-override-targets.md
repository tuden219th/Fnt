# channel_fcm — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["channel_fcm.configure"]` | disable-replace | aclFeatures:channel_fcm.configure | [acl.ts](../../../../node_modules/@open-mercato/channel-fcm/src/modules/channel_fcm/acl.ts) |
| acl | `overrides.acl.features["channel_fcm.view"]` | disable-replace | aclFeatures:channel_fcm.view | [acl.ts](../../../../node_modules/@open-mercato/channel-fcm/src/modules/channel_fcm/acl.ts) |
| di | `overrides.di["channelFcmAdapter"]` | disable-replace | ownedContracts.di-registration:channelFcmAdapter | [di.ts:21](../../../../node_modules/@open-mercato/channel-fcm/src/modules/channel_fcm/di.ts#L21) |
| di | `overrides.di["channelFcmHealthCheck"]` | disable-replace | ownedContracts.di-registration:channelFcmHealthCheck | [di.ts:25](../../../../node_modules/@open-mercato/channel-fcm/src/modules/channel_fcm/di.ts#L25) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:channel_fcm:setup | [setup.ts:24](../../../../node_modules/@open-mercato/channel-fcm/src/modules/channel_fcm/setup.ts#L24) |
| setup | `overrides.setup.onTenantCreated` | replace | ownedContracts.setup:channel_fcm:setup | [setup.ts:24](../../../../node_modules/@open-mercato/channel-fcm/src/modules/channel_fcm/setup.ts#L24) |
| widgets | `overrides.widgets.injection["channel_fcm.injection.connect"]` | disable-replace | extensionSurfaces.contributions:channel_fcm.injection.connect@data-table:communication_channels.channels:toolbar | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/channel-fcm/src/modules/channel_fcm/widgets/injection-table.ts) |

<!-- end module facts section: channel_fcm/exact-override-targets -->
