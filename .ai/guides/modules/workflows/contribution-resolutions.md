# workflows — Contribution resolutions

[Back to module index](index.md)

## Contribution resolutions

| Contribution | Target | Resolution | Activations | Source |
|---|---|---|---|---|
| notification:workflows.task.assigned | module:workflows.task.assigned @workflows | capability-only | — | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/notifications.ts) |
| workflow:workflows.checkout-demo | module:workflows.checkout-demo | capability-only | — | [workflows.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/workflows.ts) |
| workflow:workflows.simple-approval | module:workflows.simple-approval | capability-only | — | [workflows.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/workflows.ts) |
| workflows:event-trigger | wildcard:* | wildcard | — | [subscribers/event-trigger.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/subscribers/event-trigger.ts) |
| workflows:task-assigned-notification | event:workflows.task.assigned @workflows | capability-only | — | [subscribers/task-assigned-notification.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/subscribers/task-assigned-notification.ts) |
| workflows.injection.order-approval@sales.document.detail.order:details | widget-spot:sales.document.detail.order:details | wildcard | — | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/workflows/widgets/injection-table.ts) |

<!-- end module facts section: workflows/contribution-resolutions -->
