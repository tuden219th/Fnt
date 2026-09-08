# translations — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["translations.manage"]` | disable-replace | aclFeatures:translations.manage | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/translations/acl.ts) |
| acl | `overrides.acl.features["translations.manage_locales"]` | disable-replace | aclFeatures:translations.manage_locales | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/translations/acl.ts) |
| acl | `overrides.acl.features["translations.view"]` | disable-replace | aclFeatures:translations.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/translations/acl.ts) |
| events | `overrides.events.subscribers["translations-reindex-entity"]` | disable-replace | extensionSurfaces.contributions:translations-reindex-entity | [subscribers/reindex.ts](../../../../node_modules/@open-mercato/core/src/modules/translations/subscribers/reindex.ts) |
| events | `overrides.events.subscribers["translations-reindex-entity-on-delete"]` | disable-replace | extensionSurfaces.contributions:translations-reindex-entity-on-delete | [subscribers/reindex-on-delete.ts](../../../../node_modules/@open-mercato/core/src/modules/translations/subscribers/reindex-on-delete.ts) |
| events | `overrides.events.subscribers["translations:cleanup"]` | disable-replace | extensionSurfaces.contributions:translations:cleanup | [subscribers/cleanup.ts](../../../../node_modules/@open-mercato/core/src/modules/translations/subscribers/cleanup.ts) |
| routes | `overrides.routes.pages["backend:/backend/config/translations"]` | disable-replace | backendPages:/backend/config/translations | [backend/config/translations/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/translations/backend/config/translations/page.tsx) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:translations:setup | [setup.ts:3](../../../../node_modules/@open-mercato/core/src/modules/translations/setup.ts#L3) |

<!-- end module facts section: translations/exact-override-targets -->
