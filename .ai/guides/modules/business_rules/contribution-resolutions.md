# business_rules — Contribution resolutions

[Back to module index](index.md)

## Contribution resolutions

| Contribution | Target | Resolution | Activations | Source |
|---|---|---|---|---|
| business_rules:crud-rule-trigger | wildcard:* | wildcard | — | [subscribers/crud-rule-trigger.ts](../../../../node_modules/@open-mercato/core/src/modules/business_rules/subscribers/crud-rule-trigger.ts) |
| business_rules:rule-execution-failed-notification | event:business_rules.rule.execution_failed @business_rules | capability-only | — | [subscribers/rule-execution-failed-notification.ts](../../../../node_modules/@open-mercato/core/src/modules/business_rules/subscribers/rule-execution-failed-notification.ts) |
| notification:business_rules.rule.execution_failed | module:business_rules.rule.execution_failed @business_rules | capability-only | — | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/business_rules/notifications.ts) |

<!-- end module facts section: business_rules/contribution-resolutions -->
