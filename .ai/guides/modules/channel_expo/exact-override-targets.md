# channel_expo — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["channel_expo.configure"]` | disable-replace | aclFeatures:channel_expo.configure | [acl.ts](../../../../node_modules/@open-mercato/channel-expo/src/modules/channel_expo/acl.ts) |
| acl | `overrides.acl.features["channel_expo.view"]` | disable-replace | aclFeatures:channel_expo.view | [acl.ts](../../../../node_modules/@open-mercato/channel-expo/src/modules/channel_expo/acl.ts) |
| di | `overrides.di["channelExpoAdapter"]` | disable-replace | ownedContracts.di-registration:channelExpoAdapter | [di.ts:21](../../../../node_modules/@open-mercato/channel-expo/src/modules/channel_expo/di.ts#L21) |
| di | `overrides.di["channelExpoHealthCheck"]` | disable-replace | ownedContracts.di-registration:channelExpoHealthCheck | [di.ts:24](../../../../node_modules/@open-mercato/channel-expo/src/modules/channel_expo/di.ts#L24) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:channel_expo:setup | [setup.ts:21](../../../../node_modules/@open-mercato/channel-expo/src/modules/channel_expo/setup.ts#L21) |
| setup | `overrides.setup.onTenantCreated` | replace | ownedContracts.setup:channel_expo:setup | [setup.ts:21](../../../../node_modules/@open-mercato/channel-expo/src/modules/channel_expo/setup.ts#L21) |
| widgets | `overrides.widgets.injection["channel_expo.injection.connect"]` | disable-replace | extensionSurfaces.contributions:channel_expo.injection.connect@data-table:communication_channels.channels:toolbar | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/channel-expo/src/modules/channel_expo/widgets/injection-table.ts) |

<!-- end module facts section: channel_expo/exact-override-targets -->
