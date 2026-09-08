# query_index — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["query_index.purge"]` | disable-replace | aclFeatures:query_index.purge | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/query_index/acl.ts) |
| acl | `overrides.acl.features["query_index.reindex"]` | disable-replace | aclFeatures:query_index.reindex | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/query_index/acl.ts) |
| acl | `overrides.acl.features["query_index.status.view"]` | disable-replace | aclFeatures:query_index.status.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/query_index/acl.ts) |
| cli | `overrides.cli["purge"]` | disable-replace | cliCommands:purge | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/query_index/cli.ts) |
| cli | `overrides.cli["rebuild"]` | disable-replace | cliCommands:rebuild | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/query_index/cli.ts) |
| cli | `overrides.cli["rebuild-all"]` | disable-replace | cliCommands:rebuild-all | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/query_index/cli.ts) |
| cli | `overrides.cli["reindex"]` | disable-replace | cliCommands:reindex | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/query_index/cli.ts) |
| events | `overrides.events.subscribers["query_index:coverage_refresh"]` | disable-replace | extensionSurfaces.contributions:query_index:coverage_refresh | [subscribers/coverage_refresh.ts](../../../../node_modules/@open-mercato/core/src/modules/query_index/subscribers/coverage_refresh.ts) |
| events | `overrides.events.subscribers["query_index:coverage_warmup"]` | disable-replace | extensionSurfaces.contributions:query_index:coverage_warmup | [subscribers/coverage_warmup.ts](../../../../node_modules/@open-mercato/core/src/modules/query_index/subscribers/coverage_warmup.ts) |
| events | `overrides.events.subscribers["query_index:delete_one"]` | disable-replace | extensionSurfaces.contributions:query_index:delete_one | [subscribers/delete_one.ts](../../../../node_modules/@open-mercato/core/src/modules/query_index/subscribers/delete_one.ts) |
| events | `overrides.events.subscribers["query_index:purge"]` | disable-replace | extensionSurfaces.contributions:query_index:purge | [subscribers/purge.ts](../../../../node_modules/@open-mercato/core/src/modules/query_index/subscribers/purge.ts) |
| events | `overrides.events.subscribers["query_index:reindex"]` | disable-replace | extensionSurfaces.contributions:query_index:reindex | [subscribers/reindex.ts](../../../../node_modules/@open-mercato/core/src/modules/query_index/subscribers/reindex.ts) |
| events | `overrides.events.subscribers["query_index:upsert_one"]` | disable-replace | extensionSurfaces.contributions:query_index:upsert_one | [subscribers/upsert_one.ts](../../../../node_modules/@open-mercato/core/src/modules/query_index/subscribers/upsert_one.ts) |
| routes | `overrides.routes.pages["backend:/backend/query-indexes"]` | disable-replace | backendPages:/backend/query-indexes | [backend/query-indexes/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/query_index/backend/query-indexes/page.tsx) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:query_index:setup | [setup.ts:3](../../../../node_modules/@open-mercato/core/src/modules/query_index/setup.ts#L3) |

<!-- end module facts section: query_index/exact-override-targets -->
