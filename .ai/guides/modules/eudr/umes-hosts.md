# eudr — UMES hosts

[Back to module index](index.md)

## UMES hosts

| ID / pattern | Family | Supports | Context | Stability | Source |
|---|---|---|---|---|---|
| eudr:eudr_due_diligence_statement | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:eudr:eudr_due_diligence_statement |
| eudr:eudr_evidence_submission | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:eudr:eudr_evidence_submission |
| eudr:eudr_mitigation_action | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:eudr:eudr_mitigation_action |
| eudr:eudr_plot | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:eudr:eudr_plot |
| eudr:eudr_product_mapping | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:eudr:eudr_product_mapping |
| eudr:eudr_risk_assessment | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:eudr:eudr_risk_assessment |
| eudr.due_diligence_statement.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:eudr.due_diligence_statement.created |
| eudr.due_diligence_statement.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:eudr.due_diligence_statement.deleted |
| eudr.due_diligence_statement.reference_issued | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:eudr.due_diligence_statement.reference_issued |
| eudr.due_diligence_statement.submitted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:eudr.due_diligence_statement.submitted |
| eudr.due_diligence_statement.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:eudr.due_diligence_statement.updated |
| eudr.due_diligence_statement.withdrawn | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:eudr.due_diligence_statement.withdrawn |
| eudr.evidence_submission.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:eudr.evidence_submission.created |
| eudr.evidence_submission.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:eudr.evidence_submission.deleted |
| eudr.evidence_submission.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:eudr.evidence_submission.updated |
| eudr.mitigation_action.completed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:eudr.mitigation_action.completed |
| eudr.mitigation_action.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:eudr.mitigation_action.created |
| eudr.mitigation_action.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:eudr.mitigation_action.deleted |
| eudr.mitigation_action.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:eudr.mitigation_action.updated |
| eudr.plot.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:eudr.plot.created |
| eudr.plot.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:eudr.plot.deleted |
| eudr.plot.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:eudr.plot.updated |
| eudr.product_mapping.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:eudr.product_mapping.created |
| eudr.product_mapping.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:eudr.product_mapping.deleted |
| eudr.product_mapping.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:eudr.product_mapping.updated |
| eudr.risk_assessment.concluded | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:eudr.risk_assessment.concluded |
| eudr.risk_assessment.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:eudr.risk_assessment.created |
| eudr.risk_assessment.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:eudr.risk_assessment.deleted |
| eudr.risk_assessment.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:eudr.risk_assessment.updated |
| eudr.eudr_due_diligence_statement.queried | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:eudr:eudr_due_diligence_statement |
| eudr.eudr_due_diligence_statement.querying | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:eudr:eudr_due_diligence_statement |
| eudr.eudr_evidence_submission.queried | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:eudr:eudr_evidence_submission |
| eudr.eudr_evidence_submission.querying | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:eudr:eudr_evidence_submission |
| eudr.eudr_plot.queried | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:eudr:eudr_plot |
| eudr.eudr_plot.querying | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:eudr:eudr_plot |

<!-- end module facts section: eudr/umes-hosts -->
