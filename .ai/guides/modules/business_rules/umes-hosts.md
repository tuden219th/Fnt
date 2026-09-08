# business_rules — UMES hosts

[Back to module index](index.md)

## UMES hosts

| ID / pattern | Family | Supports | Context | Stability | Source |
|---|---|---|---|---|---|
| data-table:business-rules.rules.list | data-table | component-replacement | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/business_rules/extension-points.ts) |
| data-table:business-rules.rules.list:bulk-actions | data-table | bulk-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/business_rules/extension-points.ts) |
| data-table:business-rules.rules.list:columns | data-table | column-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/business_rules/extension-points.ts) |
| data-table:business-rules.rules.list:filters | data-table | filter-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/business_rules/extension-points.ts) |
| data-table:business-rules.rules.list:footer | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/business_rules/extension-points.ts) |
| data-table:business-rules.rules.list:header | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/business_rules/extension-points.ts) |
| data-table:business-rules.rules.list:row-actions | data-table | row-action | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/business_rules/extension-points.ts) |
| data-table:business-rules.rules.list:search-trailing | data-table | render-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/business_rules/extension-points.ts) |
| data-table:business-rules.rules.list:toolbar | data-table | toolbar-widget | — | FROZEN | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/business_rules/extension-points.ts) |
| business_rules:business_rule | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:business_rules:business_rule |
| business_rules:rule_execution_log | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:business_rules:rule_execution_log |
| business_rules:rule_set | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:business_rules:rule_set |
| business_rules:rule_set_member | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:business_rules:rule_set_member |
| business_rules.rule.execution_failed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:business_rules.rule.execution_failed |

<!-- end module facts section: business_rules/umes-hosts -->
