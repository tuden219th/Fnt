# business_rules — UMES contributions

[Back to module index](index.md)

## UMES contributions

| ID | Kind | Target | Phase / operations | Contract | Resolution | Source |
|---|---|---|---|---|---|---|
| notification:business_rules.rule.execution_failed | specialized-registry | business_rules.rule.execution_failed | — | registry=notification; registryId=business_rules.rule.execution_failed; specialistRoute=notifications | fact-ref | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/business_rules/notifications.ts) |
| business_rules:crud-rule-trigger | subscriber | * | async-delivery | event=*; persistent=true; subscriberId=business_rules:crud-rule-trigger; sync=false | pattern | [subscribers/crud-rule-trigger.ts](../../../../node_modules/@open-mercato/core/src/modules/business_rules/subscribers/crud-rule-trigger.ts) |
| business_rules:rule-execution-failed-notification | subscriber | business_rules.rule.execution_failed | async-delivery | event=business_rules.rule.execution_failed; persistent=true; subscriberId=business_rules:rule-execution-failed-notification; sync=false | fact-ref | [subscribers/rule-execution-failed-notification.ts](../../../../node_modules/@open-mercato/core/src/modules/business_rules/subscribers/rule-execution-failed-notification.ts) |

<!-- end module facts section: business_rules/umes-contributions -->
