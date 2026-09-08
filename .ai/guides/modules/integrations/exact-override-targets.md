# integrations — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["integrations.credentials.manage"]` | disable-replace | aclFeatures:integrations.credentials.manage | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/integrations/acl.ts) |
| acl | `overrides.acl.features["integrations.manage"]` | disable-replace | aclFeatures:integrations.manage | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/integrations/acl.ts) |
| acl | `overrides.acl.features["integrations.view"]` | disable-replace | aclFeatures:integrations.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/integrations/acl.ts) |
| di | `overrides.di["IntegrationCredentials"]` | disable-replace | ownedContracts.di-registration:IntegrationCredentials | [di.ts:27](../../../../node_modules/@open-mercato/core/src/modules/integrations/di.ts#L27) |
| di | `overrides.di["integrationCredentialsService"]` | disable-replace | ownedContracts.di-registration:integrationCredentialsService | [di.ts:20](../../../../node_modules/@open-mercato/core/src/modules/integrations/di.ts#L20) |
| di | `overrides.di["integrationHealthService"]` | disable-replace | ownedContracts.di-registration:integrationHealthService | [di.ts:23](../../../../node_modules/@open-mercato/core/src/modules/integrations/di.ts#L23) |
| di | `overrides.di["IntegrationLog"]` | disable-replace | ownedContracts.di-registration:IntegrationLog | [di.ts:29](../../../../node_modules/@open-mercato/core/src/modules/integrations/di.ts#L29) |
| di | `overrides.di["integrationLogService"]` | disable-replace | ownedContracts.di-registration:integrationLogService | [di.ts:22](../../../../node_modules/@open-mercato/core/src/modules/integrations/di.ts#L22) |
| di | `overrides.di["IntegrationState"]` | disable-replace | ownedContracts.di-registration:IntegrationState | [di.ts:28](../../../../node_modules/@open-mercato/core/src/modules/integrations/di.ts#L28) |
| di | `overrides.di["integrationStateService"]` | disable-replace | ownedContracts.di-registration:integrationStateService | [di.ts:21](../../../../node_modules/@open-mercato/core/src/modules/integrations/di.ts#L21) |
| di | `overrides.di["SyncExternalIdMapping"]` | disable-replace | ownedContracts.di-registration:SyncExternalIdMapping | [di.ts:26](../../../../node_modules/@open-mercato/core/src/modules/integrations/di.ts#L26) |
| encryption | `overrides.encryption.maps["integrations:integration_credentials"]` | disable-replace | ownedContracts.encryption:integrations:integration_credentials | [encryption.ts:4](../../../../node_modules/@open-mercato/core/src/modules/integrations/encryption.ts#L4) |
| enrichers | `overrides.enrichers["integrations.external-id-mapping"]` | disable-replace | extensionSurfaces.contributions:integrations.external-id-mapping | [data/enrichers.ts](../../../../node_modules/@open-mercato/core/src/modules/integrations/data/enrichers.ts) |
| routes | `overrides.routes.pages["backend:/backend/integrations"]` | disable-replace | backendPages:/backend/integrations | [backend/integrations/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/integrations/backend/integrations/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/integrations/[id]"]` | disable-replace | backendPages:/backend/integrations/[id] | [backend/integrations/[id]/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/integrations/backend/integrations/[id]/page.tsx) |
| routes | `overrides.routes.pages["backend:/backend/integrations/bundle/[id]"]` | disable-replace | backendPages:/backend/integrations/bundle/[id] | [backend/integrations/bundle/[id]/page.tsx](../../../../node_modules/@open-mercato/core/src/modules/integrations/backend/integrations/bundle/[id]/page.tsx) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:integrations:setup | [setup.ts:34](../../../../node_modules/@open-mercato/core/src/modules/integrations/setup.ts#L34) |
| setup | `overrides.setup.seedDefaults` | replace | ownedContracts.setup:integrations:setup | [setup.ts:34](../../../../node_modules/@open-mercato/core/src/modules/integrations/setup.ts#L34) |
| widgets | `overrides.widgets.injection["integrations.injection.external-ids"]` | disable-replace | extensionSurfaces.contributions:integrations.injection.external-ids@detail:*:sidebar | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/integrations/widgets/injection-table.ts) |
| workers | `overrides.workers["integrations:health-probe"]` | disable-replace | ownedContracts.worker:integrations:health-probe | [workers/health-probe.ts:15](../../../../node_modules/@open-mercato/core/src/modules/integrations/workers/health-probe.ts#L15) |
| workers | `overrides.workers["integrations:log-pruner"]` | disable-replace | ownedContracts.worker:integrations:log-pruner | [workers/log-pruner.ts:12](../../../../node_modules/@open-mercato/core/src/modules/integrations/workers/log-pruner.ts#L12) |

<!-- end module facts section: integrations/exact-override-targets -->
