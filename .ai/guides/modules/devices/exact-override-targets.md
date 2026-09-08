# devices — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["devices.admin"]` | disable-replace | aclFeatures:devices.admin | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/devices/acl.ts) |
| acl | `overrides.acl.features["devices.manage"]` | disable-replace | aclFeatures:devices.manage | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/devices/acl.ts) |
| acl | `overrides.acl.features["devices.view"]` | disable-replace | aclFeatures:devices.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/devices/acl.ts) |
| di | `overrides.di["UserDevice"]` | disable-replace | ownedContracts.di-registration:UserDevice | [di.ts:7](../../../../node_modules/@open-mercato/core/src/modules/devices/di.ts#L7) |
| encryption | `overrides.encryption.maps["devices:user_device"]` | disable-replace | ownedContracts.encryption:devices:user_device | [encryption.ts:9](../../../../node_modules/@open-mercato/core/src/modules/devices/encryption.ts#L9) |
| routes | `overrides.routes.pages["backend:/backend/devices"]` | disable-replace | backendPages:/backend/devices | [backend/devices/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/devices/backend/devices/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/devices/[id]"]` | disable-replace | backendPages:/backend/devices/[id] | [backend/devices/[id]/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/devices/backend/devices/[id]/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/devices/create"]` | disable-replace | backendPages:/backend/devices/create | [backend/devices/create/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/devices/backend/devices/create/page.tsx) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:devices:setup | [setup.ts:3](../../../../node_modules/@open-mercato/core/src/modules/devices/setup.ts#L3) |

<!-- end module facts section: devices/exact-override-targets -->
