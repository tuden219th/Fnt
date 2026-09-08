# sync_excel — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["sync_excel.run"]` | disable-replace | aclFeatures:sync_excel.run | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/sync_excel/acl.ts) |
| acl | `overrides.acl.features["sync_excel.view"]` | disable-replace | aclFeatures:sync_excel.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/sync_excel/acl.ts) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:sync_excel:setup | [setup.ts:5](../../../../node_modules/@open-mercato/core/src/modules/sync_excel/setup.ts#L5) |
| setup | `overrides.setup.seedDefaults` | replace | ownedContracts.setup:sync_excel:setup | [setup.ts:5](../../../../node_modules/@open-mercato/core/src/modules/sync_excel/setup.ts#L5) |

<!-- end module facts section: sync_excel/exact-override-targets -->
