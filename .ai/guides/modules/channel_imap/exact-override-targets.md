# channel_imap — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["channel_imap.configure"]` | disable-replace | aclFeatures:channel_imap.configure | [acl.ts](../../../../node_modules/@open-mercato/channel-imap/src/modules/channel_imap/acl.ts) |
| acl | `overrides.acl.features["channel_imap.view"]` | disable-replace | aclFeatures:channel_imap.view | [acl.ts](../../../../node_modules/@open-mercato/channel-imap/src/modules/channel_imap/acl.ts) |
| di | `overrides.di["channelImapAdapter"]` | disable-replace | ownedContracts.di-registration:channelImapAdapter | [di.ts:20](../../../../node_modules/@open-mercato/channel-imap/src/modules/channel_imap/di.ts#L20) |
| di | `overrides.di["channelImapHealthCheck"]` | disable-replace | ownedContracts.di-registration:channelImapHealthCheck | [di.ts:24](../../../../node_modules/@open-mercato/channel-imap/src/modules/channel_imap/di.ts#L24) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:channel_imap:setup | [setup.ts:24](../../../../node_modules/@open-mercato/channel-imap/src/modules/channel_imap/setup.ts#L24) |
| setup | `overrides.setup.onTenantCreated` | replace | ownedContracts.setup:channel_imap:setup | [setup.ts:24](../../../../node_modules/@open-mercato/channel-imap/src/modules/channel_imap/setup.ts#L24) |
| widgets | `overrides.widgets.injection["channel_imap.injection.connect"]` | disable-replace | extensionSurfaces.contributions:channel_imap.injection.connect@profile:communication-channels:connect | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/channel-imap/src/modules/channel_imap/widgets/injection-table.ts) |

<!-- end module facts section: channel_imap/exact-override-targets -->
