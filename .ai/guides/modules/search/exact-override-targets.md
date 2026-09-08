# search — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["search.embeddings.manage"]` | disable-replace | aclFeatures:search.embeddings.manage | [acl.ts](../../../../node_modules/@open-mercato/search/src/modules/search/acl.ts) |
| acl | `overrides.acl.features["search.embeddings.view"]` | disable-replace | aclFeatures:search.embeddings.view | [acl.ts](../../../../node_modules/@open-mercato/search/src/modules/search/acl.ts) |
| acl | `overrides.acl.features["search.global"]` | disable-replace | aclFeatures:search.global | [acl.ts](../../../../node_modules/@open-mercato/search/src/modules/search/acl.ts) |
| acl | `overrides.acl.features["search.manage"]` | disable-replace | aclFeatures:search.manage | [acl.ts](../../../../node_modules/@open-mercato/search/src/modules/search/acl.ts) |
| acl | `overrides.acl.features["search.reindex"]` | disable-replace | aclFeatures:search.reindex | [acl.ts](../../../../node_modules/@open-mercato/search/src/modules/search/acl.ts) |
| acl | `overrides.acl.features["search.view"]` | disable-replace | aclFeatures:search.view | [acl.ts](../../../../node_modules/@open-mercato/search/src/modules/search/acl.ts) |
| ai | `overrides.ai.tools["search_aggregate"]` | disable-replace | aiTools:search_aggregate | [ai-tools.ts](../../../../node_modules/@open-mercato/search/src/modules/search/ai-tools.ts) |
| ai | `overrides.ai.tools["search_get"]` | disable-replace | aiTools:search_get | [ai-tools.ts](../../../../node_modules/@open-mercato/search/src/modules/search/ai-tools.ts) |
| ai | `overrides.ai.tools["search_query"]` | disable-replace | aiTools:search_query | [ai-tools.ts](../../../../node_modules/@open-mercato/search/src/modules/search/ai-tools.ts) |
| ai | `overrides.ai.tools["search_reindex"]` | disable-replace | aiTools:search_reindex | [ai-tools.ts](../../../../node_modules/@open-mercato/search/src/modules/search/ai-tools.ts) |
| ai | `overrides.ai.tools["search_schema"]` | disable-replace | aiTools:search_schema | [ai-tools.ts](../../../../node_modules/@open-mercato/search/src/modules/search/ai-tools.ts) |
| ai | `overrides.ai.tools["search_status"]` | disable-replace | aiTools:search_status | [ai-tools.ts](../../../../node_modules/@open-mercato/search/src/modules/search/ai-tools.ts) |
| cli | `overrides.cli["help"]` | disable-replace | cliCommands:help | [cli.ts](../../../../node_modules/@open-mercato/search/src/modules/search/cli.ts) |
| cli | `overrides.cli["index"]` | disable-replace | cliCommands:index | [cli.ts](../../../../node_modules/@open-mercato/search/src/modules/search/cli.ts) |
| cli | `overrides.cli["query"]` | disable-replace | cliCommands:query | [cli.ts](../../../../node_modules/@open-mercato/search/src/modules/search/cli.ts) |
| cli | `overrides.cli["reindex"]` | disable-replace | cliCommands:reindex | [cli.ts](../../../../node_modules/@open-mercato/search/src/modules/search/cli.ts) |
| cli | `overrides.cli["reindex-help"]` | disable-replace | cliCommands:reindex-help | [cli.ts](../../../../node_modules/@open-mercato/search/src/modules/search/cli.ts) |
| cli | `overrides.cli["status"]` | disable-replace | cliCommands:status | [cli.ts](../../../../node_modules/@open-mercato/search/src/modules/search/cli.ts) |
| cli | `overrides.cli["test-meilisearch"]` | disable-replace | cliCommands:test-meilisearch | [cli.ts](../../../../node_modules/@open-mercato/search/src/modules/search/cli.ts) |
| cli | `overrides.cli["worker"]` | disable-replace | cliCommands:worker | [cli.ts](../../../../node_modules/@open-mercato/search/src/modules/search/cli.ts) |
| di | `overrides.di["embeddingProviderProbe"]` | disable-replace | ownedContracts.di-registration:embeddingProviderProbe | [di.ts:161](../../../../node_modules/@open-mercato/search/src/modules/search/di.ts#L161) |
| di | `overrides.di["fulltextIndexQueue"]` | disable-replace | ownedContracts.di-registration:fulltextIndexQueue | [di.ts:149](../../../../node_modules/@open-mercato/search/src/modules/search/di.ts#L149) |
| di | `overrides.di["vectorDrivers"]` | disable-replace | ownedContracts.di-registration:vectorDrivers | [di.ts:143](../../../../node_modules/@open-mercato/search/src/modules/search/di.ts#L143) |
| di | `overrides.di["vectorEmbeddingService"]` | disable-replace | ownedContracts.di-registration:vectorEmbeddingService | [di.ts:142](../../../../node_modules/@open-mercato/search/src/modules/search/di.ts#L142) |
| di | `overrides.di["vectorIndexQueue"]` | disable-replace | ownedContracts.di-registration:vectorIndexQueue | [di.ts:148](../../../../node_modules/@open-mercato/search/src/modules/search/di.ts#L148) |
| encryption | `overrides.encryption.maps["vector:vector_search"]` | disable-replace | ownedContracts.encryption:vector:vector_search | [encryption.ts:4](../../../../node_modules/@open-mercato/search/src/modules/search/encryption.ts#L4) |
| events | `overrides.events.subscribers["search:fulltext_upsert"]` | disable-replace | extensionSurfaces.contributions:search:fulltext_upsert | [subscribers/fulltext_upsert.ts](../../../../node_modules/@open-mercato/search/src/modules/search/subscribers/fulltext_upsert.ts) |
| events | `overrides.events.subscribers["search:vector_delete"]` | disable-replace | extensionSurfaces.contributions:search:vector_delete | [subscribers/vector_delete.ts](../../../../node_modules/@open-mercato/search/src/modules/search/subscribers/vector_delete.ts) |
| events | `overrides.events.subscribers["search:vector_purge"]` | disable-replace | extensionSurfaces.contributions:search:vector_purge | [subscribers/vector_purge.ts](../../../../node_modules/@open-mercato/search/src/modules/search/subscribers/vector_purge.ts) |
| events | `overrides.events.subscribers["search:vector_upsert"]` | disable-replace | extensionSurfaces.contributions:search:vector_upsert | [subscribers/vector_upsert.ts](../../../../node_modules/@open-mercato/search/src/modules/search/subscribers/vector_upsert.ts) |
| routes | `overrides.routes.pages["backend:/backend/config/search"]` | disable-replace | backendPages:/backend/config/search | [backend/config/search/page.tsx](../../../../node_modules/@open-mercato/search/src/modules/search/backend/config/search/page.tsx) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:search:setup | [setup.ts:3](../../../../node_modules/@open-mercato/search/src/modules/search/setup.ts#L3) |
| workers | `overrides.workers["search:workers:fulltext-index.worker"]` | disable-replace | ownedContracts.worker:search:workers:fulltext-index.worker | [workers/fulltext-index.worker.ts:20](../../../../node_modules/@open-mercato/search/src/modules/search/workers/fulltext-index.worker.ts#L20) |
| workers | `overrides.workers["search:workers:vector-index.worker"]` | disable-replace | ownedContracts.worker:search:workers:vector-index.worker | [workers/vector-index.worker.ts:23](../../../../node_modules/@open-mercato/search/src/modules/search/workers/vector-index.worker.ts#L23) |

<!-- end module facts section: search/exact-override-targets -->
