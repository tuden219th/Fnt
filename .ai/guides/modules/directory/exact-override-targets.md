# directory — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["directory.organizations.manage"]` | disable-replace | aclFeatures:directory.organizations.manage | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/directory/acl.ts) |
| acl | `overrides.acl.features["directory.organizations.view"]` | disable-replace | aclFeatures:directory.organizations.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/directory/acl.ts) |
| acl | `overrides.acl.features["directory.tenants.manage"]` | disable-replace | aclFeatures:directory.tenants.manage | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/directory/acl.ts) |
| acl | `overrides.acl.features["directory.tenants.view"]` | disable-replace | aclFeatures:directory.tenants.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/directory/acl.ts) |
| events | `overrides.events.subscribers["directory:invalidate-org-scope-cache"]` | disable-replace | extensionSurfaces.contributions:directory:invalidate-org-scope-cache | [subscribers/invalidateOrgScopeCache.ts](../../../../node_modules/@open-mercato/core/src/modules/directory/subscribers/invalidateOrgScopeCache.ts) |
| routes | `overrides.routes.pages["backend:/backend/directory/branding"]` | disable-replace | backendPages:/backend/directory/branding | [backend/directory/branding/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/directory/backend/directory/branding/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/directory/organizations"]` | disable-replace | backendPages:/backend/directory/organizations | [backend/directory/organizations/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/directory/backend/directory/organizations/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/directory/organizations/[id]/edit"]` | disable-replace | backendPages:/backend/directory/organizations/[id]/edit | [backend/directory/organizations/[id]/edit/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/directory/backend/directory/organizations/[id]/edit/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/directory/organizations/create"]` | disable-replace | backendPages:/backend/directory/organizations/create | [backend/directory/organizations/create/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/directory/backend/directory/organizations/create/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/directory/tenants"]` | disable-replace | backendPages:/backend/directory/tenants | [backend/directory/tenants/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/directory/backend/directory/tenants/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/directory/tenants/[id]/edit"]` | disable-replace | backendPages:/backend/directory/tenants/[id]/edit | [backend/directory/tenants/[id]/edit/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/directory/backend/directory/tenants/[id]/edit/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/directory/tenants/create"]` | disable-replace | backendPages:/backend/directory/tenants/create | [backend/directory/tenants/create/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/directory/backend/directory/tenants/create/page.tsx) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:directory:setup | [setup.ts:40](../../../../node_modules/@open-mercato/core/src/modules/directory/setup.ts#L40) |
| setup | `overrides.setup.seedDefaults` | replace | ownedContracts.setup:directory:setup | [setup.ts:40](../../../../node_modules/@open-mercato/core/src/modules/directory/setup.ts#L40) |

<!-- end module facts section: directory/exact-override-targets -->
