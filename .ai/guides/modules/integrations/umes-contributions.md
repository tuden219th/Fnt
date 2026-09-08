# integrations — UMES contributions

[Back to module index](index.md)

## UMES contributions

| ID | Kind | Target | Phase / operations | Contract | Resolution | Source |
|---|---|---|---|---|---|---|
| integrations.external-id-mapping | response-enricher | * | list, detail | cachePosture=rerun-on-list-cache-hit; critical=false; fallback=configured; surfaces=list,detail; targetEntity=*; timeoutMs=500 | pattern | [data/enrichers.ts](../../../../node_modules/@open-mercato/core/src/modules/integrations/data/enrichers.ts) |
| integrations.injection.external-ids@detail:*:sidebar | widget | detail:*:sidebar | — | executionGuard=host; payload=render; registryKey=integrations.injection.external-ids | pattern | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/integrations/widgets/injection-table.ts) |

<!-- end module facts section: integrations/umes-contributions -->
