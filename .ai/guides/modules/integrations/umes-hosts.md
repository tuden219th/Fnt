# integrations — UMES hosts

[Back to module index](index.md)

## UMES hosts

| ID / pattern | Family | Supports | Context | Stability | Source |
|---|---|---|---|---|---|
| integrations:integration_credentials | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:integrations:integration_credentials |
| integrations:integration_log | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:integrations:integration_log |
| integrations:integration_state | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:integrations:integration_state |
| integrations:sync_external_id_mapping | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:integrations:sync_external_id_mapping |
| integrations.credentials.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:integrations.credentials.updated |
| integrations.log.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:integrations.log.created |
| integrations.state.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:integrations.state.updated |
| integrations.version.changed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:integrations.version.changed |
| integrations.detail:{integrationId} | integration | render-widget | integrations.detail.v1 | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/integrations/extension-points.ts) |
| integrations.detail:tabs | integration | render-widget | integrations.detail.v1 | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/integrations/extension-points.ts) |

<!-- end module facts section: integrations/umes-hosts -->
