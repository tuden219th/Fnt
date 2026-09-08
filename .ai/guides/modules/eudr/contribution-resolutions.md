# eudr — Contribution resolutions

[Back to module index](index.md)

## Contribution resolutions

| Contribution | Target | Resolution | Activations | Source |
|---|---|---|---|---|
| ai:eudr.check_product_scope | module:eudr.check_product_scope | capability-only | — | [ai-tools/compliance-pack.ts](../../../../node_modules/@open-mercato/core/src/modules/eudr/ai-tools/compliance-pack.ts) |
| ai:eudr.compliance_assistant | module:eudr.compliance_assistant | capability-only | — | [ai-agents.ts](../../../../node_modules/@open-mercato/core/src/modules/eudr/ai-agents.ts) |
| ai:eudr.get_compliance_overview | module:eudr.get_compliance_overview | capability-only | — | [ai-tools/compliance-pack.ts](../../../../node_modules/@open-mercato/core/src/modules/eudr/ai-tools/compliance-pack.ts) |
| ai:eudr.get_country_risk | module:eudr.get_country_risk | capability-only | — | [ai-tools/compliance-pack.ts](../../../../node_modules/@open-mercato/core/src/modules/eudr/ai-tools/compliance-pack.ts) |
| ai:eudr.list_evidence_gaps | module:eudr.list_evidence_gaps | capability-only | — | [ai-tools/compliance-pack.ts](../../../../node_modules/@open-mercato/core/src/modules/eudr/ai-tools/compliance-pack.ts) |
| ai:eudr.list_statement_readiness | module:eudr.list_statement_readiness | capability-only | — | [ai-tools/compliance-pack.ts](../../../../node_modules/@open-mercato/core/src/modules/eudr/ai-tools/compliance-pack.ts) |
| dashboard:eudr.dashboard.complianceOverview | widget-spot:dashboard:eudr.dashboard.complianceOverview | bound | widget-spot:dashboard:eudr.dashboard.complianceOverview:dashboard-host-consumer | [widgets/dashboard/compliance-overview/widget.ts](../../../../node_modules/@open-mercato/core/src/modules/eudr/widgets/dashboard/compliance-overview/widget.ts) |
| eudr:attachment-created-completeness | event:attachments.attachment.created @attachments | capability-only | — | [subscribers/recompute-completeness-on-attachment-created.ts](../../../../node_modules/@open-mercato/core/src/modules/eudr/subscribers/recompute-completeness-on-attachment-created.ts) |
| eudr:attachment-deleted-completeness | event:attachments.attachment.deleted @attachments | capability-only | — | [subscribers/recompute-completeness-on-attachment-deleted.ts](../../../../node_modules/@open-mercato/core/src/modules/eudr/subscribers/recompute-completeness-on-attachment-deleted.ts) |
| eudr:notify-mitigation-completed | event:eudr.mitigation_action.completed @eudr | capability-only | — | [subscribers/notify-mitigation-completed.ts](../../../../node_modules/@open-mercato/core/src/modules/eudr/subscribers/notify-mitigation-completed.ts) |
| eudr:notify-risk-concluded | event:eudr.risk_assessment.concluded @eudr | capability-only | — | [subscribers/notify-risk-concluded.ts](../../../../node_modules/@open-mercato/core/src/modules/eudr/subscribers/notify-risk-concluded.ts) |
| eudr:notify-statement-reference-issued | event:eudr.due_diligence_statement.reference_issued @eudr | capability-only | — | [subscribers/notify-statement-reference-issued.ts](../../../../node_modules/@open-mercato/core/src/modules/eudr/subscribers/notify-statement-reference-issued.ts) |
| eudr:notify-statement-submitted | event:eudr.due_diligence_statement.submitted @eudr | capability-only | — | [subscribers/notify-statement-submitted.ts](../../../../node_modules/@open-mercato/core/src/modules/eudr/subscribers/notify-statement-submitted.ts) |
| eudr:notify-statement-withdrawn | event:eudr.due_diligence_statement.withdrawn @eudr | capability-only | — | [subscribers/notify-statement-withdrawn.ts](../../../../node_modules/@open-mercato/core/src/modules/eudr/subscribers/notify-statement-withdrawn.ts) |
| eudr.injection.order-compliance@sales.document.detail.order:details | widget-spot:sales.document.detail.order:details | wildcard | — | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/eudr/widgets/injection-table.ts) |
| eudr.injection.product-column@data-table:catalog.products.list:columns | widget-spot:data-table:catalog.products.list:columns @catalog | bound | widget-spot:data-table:catalog.products.list:columns:widget-injection-consumer | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/eudr/widgets/injection-table.ts) |
| eudr.injection.supplier-compliance@customers.company.detail:details | widget-spot:customers.company.detail:details @customers | bound | widget-spot:customers.company.detail:details:widget-injection-consumer | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/eudr/widgets/injection-table.ts) |
| eudr.injection.supplier-compliance@detail:customers.company:footer | widget-spot:detail:customers.company:footer @customers | bound | widget-spot:detail:customers.company:footer:widget-injection-consumer | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/eudr/widgets/injection-table.ts) |
| eudr.product-compliance | entity:catalog:catalog_product @catalog | bound | entity:catalog:catalog_product:crud-response-enricher | [data/enrichers.ts](../../../../node_modules/@open-mercato/core/src/modules/eudr/data/enrichers.ts) |
| notification:eudr.mitigation.completed | module:eudr.mitigation.completed | capability-only | — | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/eudr/notifications.ts) |
| notification:eudr.risk.non_negligible | module:eudr.risk.non_negligible | capability-only | — | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/eudr/notifications.ts) |
| notification:eudr.statement.reference_issued | module:eudr.statement.reference_issued | capability-only | — | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/eudr/notifications.ts) |
| notification:eudr.statement.submitted | module:eudr.statement.submitted | capability-only | — | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/eudr/notifications.ts) |
| notification:eudr.statement.withdrawn | module:eudr.statement.withdrawn | capability-only | — | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/eudr/notifications.ts) |
| search:eudr:eudr_due_diligence_statement | module:eudr:eudr_due_diligence_statement @eudr | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/eudr/search.ts) |
| search:eudr:eudr_evidence_submission | module:eudr:eudr_evidence_submission @eudr | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/eudr/search.ts) |
| search:eudr:eudr_plot | module:eudr:eudr_plot @eudr | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/eudr/search.ts) |

<!-- end module facts section: eudr/contribution-resolutions -->
