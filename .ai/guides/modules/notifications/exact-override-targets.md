# notifications — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["notifications.create"]` | disable-replace | aclFeatures:notifications.create | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/notifications/acl.ts) |
| acl | `overrides.acl.features["notifications.manage"]` | disable-replace | aclFeatures:notifications.manage | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/notifications/acl.ts) |
| acl | `overrides.acl.features["notifications.manage_preferences"]` | disable-replace | aclFeatures:notifications.manage_preferences | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/notifications/acl.ts) |
| acl | `overrides.acl.features["notifications.manage_user_preferences"]` | disable-replace | aclFeatures:notifications.manage_user_preferences | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/notifications/acl.ts) |
| acl | `overrides.acl.features["notifications.view"]` | disable-replace | aclFeatures:notifications.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/notifications/acl.ts) |
| cli | `overrides.cli["cleanup-expired"]` | disable-replace | cliCommands:cleanup-expired | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/notifications/cli.ts) |
| di | `overrides.di["notificationPreferenceService"]` | disable-replace | ownedContracts.di-registration:notificationPreferenceService | [di.ts:14](../../../../node_modules/@open-mercato/core/src/modules/notifications/di.ts#L14) |
| di | `overrides.di["notificationService"]` | disable-replace | ownedContracts.di-registration:notificationService | [di.ts:8](../../../../node_modules/@open-mercato/core/src/modules/notifications/di.ts#L8) |
| routes | `overrides.routes.pages["backend:/backend/config/notifications"]` | disable-replace | backendPages:/backend/config/notifications | [backend/config/notifications/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/notifications/backend/config/notifications/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/notifications/user-preferences"]` | disable-replace | backendPages:/backend/notifications/user-preferences | [backend/notifications/user-preferences/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/notifications/backend/notifications/user-preferences/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/profile/notification-preferences"]` | disable-replace | backendPages:/backend/profile/notification-preferences | [backend/profile/notification-preferences/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/notifications/backend/profile/notification-preferences/page.tsx) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:notifications:setup | [setup.ts:7](../../../../node_modules/@open-mercato/core/src/modules/notifications/setup.ts#L7) |
| setup | `overrides.setup.seedDefaults` | replace | ownedContracts.setup:notifications:setup | [setup.ts:7](../../../../node_modules/@open-mercato/core/src/modules/notifications/setup.ts#L7) |
| widgets | `overrides.widgets.injection["notifications.injection.profile-preferences-menu"]` | disable-replace | extensionSurfaces.contributions:notifications.injection.profile-preferences-menu@menu:topbar:profile-dropdown | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/notifications/widgets/injection-table.ts) |
| workers | `overrides.workers["notifications:create"]` | disable-replace | ownedContracts.worker:notifications:create | [workers/create-notification.worker.ts:42](../../../../node_modules/@open-mercato/core/src/modules/notifications/workers/create-notification.worker.ts#L42) |

<!-- end module facts section: notifications/exact-override-targets -->
