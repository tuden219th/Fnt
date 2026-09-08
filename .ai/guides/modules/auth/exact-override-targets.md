# auth — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["auth.acl.manage"]` | disable-replace | aclFeatures:auth.acl.manage | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/acl.ts) |
| acl | `overrides.acl.features["auth.roles.list"]` | disable-replace | aclFeatures:auth.roles.list | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/acl.ts) |
| acl | `overrides.acl.features["auth.roles.manage"]` | disable-replace | aclFeatures:auth.roles.manage | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/acl.ts) |
| acl | `overrides.acl.features["auth.sidebar.manage"]` | disable-replace | aclFeatures:auth.sidebar.manage | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/acl.ts) |
| acl | `overrides.acl.features["auth.users.create"]` | disable-replace | aclFeatures:auth.users.create | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/acl.ts) |
| acl | `overrides.acl.features["auth.users.delete"]` | disable-replace | aclFeatures:auth.users.delete | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/acl.ts) |
| acl | `overrides.acl.features["auth.users.edit"]` | disable-replace | aclFeatures:auth.users.edit | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/acl.ts) |
| acl | `overrides.acl.features["auth.users.list"]` | disable-replace | aclFeatures:auth.users.list | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/acl.ts) |
| cli | `overrides.cli["add-org"]` | disable-replace | cliCommands:add-org | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/cli.ts) |
| cli | `overrides.cli["add-user"]` | disable-replace | cliCommands:add-user | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/cli.ts) |
| cli | `overrides.cli["list-orgs"]` | disable-replace | cliCommands:list-orgs | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/cli.ts) |
| cli | `overrides.cli["list-tenants"]` | disable-replace | cliCommands:list-tenants | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/cli.ts) |
| cli | `overrides.cli["list-users"]` | disable-replace | cliCommands:list-users | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/cli.ts) |
| cli | `overrides.cli["rotate-encryption-key"]` | disable-replace | cliCommands:rotate-encryption-key | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/cli.ts) |
| cli | `overrides.cli["seed-roles"]` | disable-replace | cliCommands:seed-roles | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/cli.ts) |
| cli | `overrides.cli["set-password"]` | disable-replace | cliCommands:set-password | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/cli.ts) |
| cli | `overrides.cli["setup"]` | disable-replace | cliCommands:setup | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/cli.ts) |
| cli | `overrides.cli["sync-role-acls"]` | disable-replace | cliCommands:sync-role-acls | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/cli.ts) |
| di | `overrides.di["authService"]` | disable-replace | ownedContracts.di-registration:authService | [di.ts:17](../../../../node_modules/@open-mercato/core/src/modules/auth/di.ts#L17) |
| di | `overrides.di["rbacService"]` | disable-replace | ownedContracts.di-registration:rbacService | [di.ts:27](../../../../node_modules/@open-mercato/core/src/modules/auth/di.ts#L27) |
| encryption | `overrides.encryption.maps["auth:user"]` | disable-replace | ownedContracts.encryption:auth:user | [encryption.ts:4](../../../../node_modules/@open-mercato/core/src/modules/auth/encryption.ts#L4) |
| encryption | `overrides.encryption.maps["auth:user_consent"]` | disable-replace | ownedContracts.encryption:auth:user_consent | [encryption.ts:11](../../../../node_modules/@open-mercato/core/src/modules/auth/encryption.ts#L11) |
| notifications | `overrides.notifications.types["auth.account.locked"]` | disable-replace | notifications:auth.account.locked | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/notifications.ts) |
| notifications | `overrides.notifications.types["auth.login.new_device"]` | disable-replace | notifications:auth.login.new_device | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/notifications.ts) |
| notifications | `overrides.notifications.types["auth.password_reset.completed"]` | disable-replace | notifications:auth.password_reset.completed | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/notifications.ts) |
| notifications | `overrides.notifications.types["auth.password_reset.requested"]` | disable-replace | notifications:auth.password_reset.requested | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/notifications.ts) |
| notifications | `overrides.notifications.types["auth.role.assigned"]` | disable-replace | notifications:auth.role.assigned | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/notifications.ts) |
| notifications | `overrides.notifications.types["auth.role.revoked"]` | disable-replace | notifications:auth.role.revoked | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/notifications.ts) |
| routes | `overrides.routes.pages["backend:/backend/auth/profile"]` | disable-replace | backendPages:/backend/auth/profile | [backend/auth/profile/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/auth/backend/auth/profile/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/profile"]` | disable-replace | backendPages:/backend/profile | [backend/profile/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/auth/backend/profile/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/profile/change-password"]` | disable-replace | backendPages:/backend/profile/change-password | [backend/profile/change-password/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/auth/backend/profile/change-password/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/roles"]` | disable-replace | backendPages:/backend/roles | [backend/roles/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/auth/backend/roles/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/roles/[id]/edit"]` | disable-replace | backendPages:/backend/roles/[id]/edit | [backend/roles/[id]/edit/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/auth/backend/roles/[id]/edit/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/roles/create"]` | disable-replace | backendPages:/backend/roles/create | [backend/roles/create/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/auth/backend/roles/create/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/settings"]` | disable-replace | backendPages:/backend/settings | [backend/settings/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/auth/backend/settings/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/sidebar-customization"]` | disable-replace | backendPages:/backend/sidebar-customization | [backend/sidebar-customization/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/auth/backend/sidebar-customization/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/users"]` | disable-replace | backendPages:/backend/users | [backend/users/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/auth/backend/users/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/users/[id]/edit"]` | disable-replace | backendPages:/backend/users/[id]/edit | [backend/users/[id]/edit/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/auth/backend/users/[id]/edit/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/users/create"]` | disable-replace | backendPages:/backend/users/create | [backend/users/create/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/auth/backend/users/create/page.tsx) |
| routes | `overrides.routes.pages["frontend:/login"]` | disable-replace | frontendPages:/login | [frontend/login.tsx](../../../../node_modules/@open-mercato/core/src/modules/auth/frontend/login.tsx) |
| routes | `overrides.routes.pages["frontend:/reset"]` | disable-replace | frontendPages:/reset | [frontend/reset.tsx](../../../../node_modules/@open-mercato/core/src/modules/auth/frontend/reset.tsx) |
| routes | `overrides.routes.pages["frontend:/reset/[token]"]` | disable-replace | frontendPages:/reset/[token] | [frontend/reset/[token]/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/auth/frontend/reset/[token]/page.tsx) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:auth:setup | [setup.ts:3](../../../../node_modules/@open-mercato/core/src/modules/auth/setup.ts#L3) |

<!-- end module facts section: auth/exact-override-targets -->
