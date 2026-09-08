# staff — Contribution resolutions

[Back to module index](index.md)

## Contribution resolutions

| Contribution | Target | Resolution | Activations | Source |
|---|---|---|---|---|
| dashboard:staff.timesheets.hoursByProject | widget-spot:dashboard:staff.timesheets.hoursByProject | bound | widget-spot:dashboard:staff.timesheets.hoursByProject:dashboard-host-consumer | [widgets/dashboard/timesheets-hours-by-project/widget.ts](../../../../node_modules/@open-mercato/core/src/modules/staff/widgets/dashboard/timesheets-hours-by-project/widget.ts) |
| dashboard:staff.timesheets.timeReporting | widget-spot:dashboard:staff.timesheets.timeReporting | bound | widget-spot:dashboard:staff.timesheets.timeReporting:dashboard-host-consumer | [widgets/dashboard/timesheets-time-reporting/widget.ts](../../../../node_modules/@open-mercato/core/src/modules/staff/widgets/dashboard/timesheets-time-reporting/widget.ts) |
| notification:staff.leave_request.approved | module:staff.leave_request.approved | capability-only | — | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/staff/notifications.ts) |
| notification:staff.leave_request.pending | module:staff.leave_request.pending | capability-only | — | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/staff/notifications.ts) |
| notification:staff.leave_request.rejected | module:staff.leave_request.rejected | capability-only | — | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/staff/notifications.ts) |
| search:staff:staff_team_member | module:staff:staff_team_member @staff | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/staff/search.ts) |
| search:staff:staff_team_role | module:staff:staff_team_role @staff | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/staff/search.ts) |
| search:staff:staff_team | module:staff:staff_team @staff | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/staff/search.ts) |
| search:staff:staff_time_project | module:staff:staff_time_project @staff | capability-only | — | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/staff/search.ts) |
| staff.injection.timer-sidebar-indicator@backend:sidebar:nav:footer | widget-spot:backend:sidebar:nav:footer | optional-target-missing | — | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/staff/widgets/injection-table.ts) |
| staff.timesheets-projects-portfolio | entity:staff:staff_time_project @staff | bound | entity:staff:staff_time_project:crud-response-enricher | [data/enrichers.ts](../../../../node_modules/@open-mercato/core/src/modules/staff/data/enrichers.ts) |
| staff.timesheets.self-scope-time-entries | api-route:staff/timesheets/time-entries @staff | bound | api-route:staff/timesheets/time-entries:GET:api-interceptor-bridge | [api/interceptors.ts](../../../../node_modules/@open-mercato/core/src/modules/staff/api/interceptors.ts) |
| staff.timesheets.self-scope-widget-data | api-route:dashboards/widgets/data @dashboards | bound | api-route:dashboards/widgets/data:POST:api-interceptor-bridge | [api/interceptors.ts](../../../../node_modules/@open-mercato/core/src/modules/staff/api/interceptors.ts) |

<!-- end module facts section: staff/contribution-resolutions -->
