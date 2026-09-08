# planner — UMES hosts

[Back to module index](index.md)

## UMES hosts

| ID / pattern | Family | Supports | Context | Stability | Source |
|---|---|---|---|---|---|
| planner:planner_availability_rule | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:planner:planner_availability_rule |
| planner:planner_availability_rule_set | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:planner:planner_availability_rule_set |
| planner.availability | entity | response-enricher, query-enricher, mutation-guard | tenant-and-organization | STABLE | [api/availability-date-specific.ts](../../../../node_modules/@open-mercato/core/src/modules/planner/api/availability-date-specific.ts) |
| planner.availability_rule_set.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:planner.availability_rule_set.created |
| planner.availability_rule_set.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:planner.availability_rule_set.deleted |
| planner.availability_rule_set.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:planner.availability_rule_set.updated |
| planner.availability_rule.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:planner.availability_rule.created |
| planner.availability_rule.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:planner.availability_rule.deleted |
| planner.availability_rule.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:planner.availability_rule.updated |
| planner.planner_availability_rule_set.queried | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:planner:planner_availability_rule_set |
| planner.planner_availability_rule_set.querying | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:planner:planner_availability_rule_set |

<!-- end module facts section: planner/umes-hosts -->
