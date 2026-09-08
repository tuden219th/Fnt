# channel_gmail — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["channel_gmail.configure"]` | disable-replace | aclFeatures:channel_gmail.configure | [acl.ts](../../../../node_modules/@open-mercato/channel-gmail/src/modules/channel_gmail/acl.ts) |
| acl | `overrides.acl.features["channel_gmail.view"]` | disable-replace | aclFeatures:channel_gmail.view | [acl.ts](../../../../node_modules/@open-mercato/channel-gmail/src/modules/channel_gmail/acl.ts) |
| di | `overrides.di["channelGmailAdapter"]` | disable-replace | ownedContracts.di-registration:channelGmailAdapter | [di.ts:15](../../../../node_modules/@open-mercato/channel-gmail/src/modules/channel_gmail/di.ts#L15) |
| di | `overrides.di["channelGmailHealthCheck"]` | disable-replace | ownedContracts.di-registration:channelGmailHealthCheck | [di.ts:19](../../../../node_modules/@open-mercato/channel-gmail/src/modules/channel_gmail/di.ts#L19) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:channel_gmail:setup | [setup.ts:26](../../../../node_modules/@open-mercato/channel-gmail/src/modules/channel_gmail/setup.ts#L26) |
| setup | `overrides.setup.onTenantCreated` | replace | ownedContracts.setup:channel_gmail:setup | [setup.ts:26](../../../../node_modules/@open-mercato/channel-gmail/src/modules/channel_gmail/setup.ts#L26) |
| widgets | `overrides.widgets.injection["channel_gmail.injection.connect"]` | disable-replace | extensionSurfaces.contributions:channel_gmail.injection.connect@profile:communication-channels:connect | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/channel-gmail/src/modules/channel_gmail/widgets/injection-table.ts) |

<!-- end module facts section: channel_gmail/exact-override-targets -->
