# dictionaries — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["dictionaries.manage"]` | disable-replace | aclFeatures:dictionaries.manage | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/dictionaries/acl.ts) |
| acl | `overrides.acl.features["dictionaries.view"]` | disable-replace | aclFeatures:dictionaries.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/dictionaries/acl.ts) |
| di | `overrides.di["Dictionary"]` | disable-replace | ownedContracts.di-registration:Dictionary | [di.ts:7](../../../../node_modules/@open-mercato/core/src/modules/dictionaries/di.ts#L7) |
| di | `overrides.di["DictionaryEntry"]` | disable-replace | ownedContracts.di-registration:DictionaryEntry | [di.ts:8](../../../../node_modules/@open-mercato/core/src/modules/dictionaries/di.ts#L8) |
| routes | `overrides.routes.pages["backend:/backend/config/dictionaries"]` | disable-replace | backendPages:/backend/config/dictionaries | [backend/config/dictionaries/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/dictionaries/backend/config/dictionaries/page.tsx) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:dictionaries:setup | [setup.ts:3](../../../../node_modules/@open-mercato/core/src/modules/dictionaries/setup.ts#L3) |

<!-- end module facts section: dictionaries/exact-override-targets -->
