# workflows — UMES contributions

[Back to module index](index.md)

## UMES contributions

| ID | Kind | Target | Phase / operations | Contract | Resolution | Source |
|---|---|---|---|---|---|---|
| notification:workflows.task.assigned | specialized-registry | workflows.task.assigned | — | registry=notification; registryId=workflows.task.assigned; specialistRoute=notifications | fact-ref | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/notifications.ts) |
| workflow:workflows.checkout-demo | specialized-registry | workflows.checkout-demo | — | registry=workflow; registryId=workflows.checkout-demo; specialistRoute=workflows | fact-ref | [workflows.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/workflows.ts) |
| workflow:workflows.simple-approval | specialized-registry | workflows.simple-approval | — | registry=workflow; registryId=workflows.simple-approval; specialistRoute=workflows | fact-ref | [workflows.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/workflows.ts) |
| workflows:event-trigger | subscriber | * | async-delivery | event=*; persistent=true; subscriberId=workflows:event-trigger; sync=false | pattern | [subscribers/event-trigger.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/subscribers/event-trigger.ts) |
| workflows:task-assigned-notification | subscriber | workflows.task.assigned | async-delivery | event=workflows.task.assigned; persistent=true; subscriberId=workflows:task-assigned-notification; sync=false | fact-ref | [subscribers/task-assigned-notification.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/subscribers/task-assigned-notification.ts) |
| workflows.injection.order-approval@sales.document.detail.order:details | widget | sales.document.detail.order:details | — | executionGuard=host; payload=render; registryKey=workflows.injection.order-approval | pattern | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/widgets/injection-table.ts) |

<!-- end module facts section: workflows/umes-contributions -->
