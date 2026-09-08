# staff — UMES contributions

[Back to module index](index.md)

## UMES contributions

| ID | Kind | Target | Phase / operations | Contract | Resolution | Source |
|---|---|---|---|---|---|---|
| staff.timesheets.self-scope-time-entries | api-interceptor | staff/timesheets/time-entries | before | activation=crud-pipeline; failurePosture=fallback; methods=GET; phases=before; route=staff/timesheets/time-entries; timeoutMs=2000 | fact-ref | [api/interceptors.ts](../../../../node_modules/@open-mercato/core/src/modules/staff/api/interceptors.ts) |
| staff.timesheets.self-scope-widget-data | api-interceptor | dashboards/widgets/data | before | activation=crud-pipeline; failurePosture=fallback; methods=POST; phases=before; route=dashboards/widgets/data; timeoutMs=2000 | fact-ref | [api/interceptors.ts](../../../../node_modules/@open-mercato/core/src/modules/staff/api/interceptors.ts) |
| staff.timesheets-projects-portfolio | response-enricher | staff:staff_time_project | list, detail | cachePosture=rerun-on-list-cache-hit; critical=false; fallback=configured; surfaces=list,detail; targetEntity=staff:staff_time_project; timeoutMs=3000 | exact | [data/enrichers.ts](../../../../node_modules/@open-mercato/core/src/modules/staff/data/enrichers.ts) |
| notification:staff.leave_request.approved | specialized-registry | staff.leave_request.approved | — | registry=notification; registryId=staff.leave_request.approved; specialistRoute=notifications | fact-ref | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/staff/notifications.ts) |
| notification:staff.leave_request.pending | specialized-registry | staff.leave_request.pending | — | registry=notification; registryId=staff.leave_request.pending; specialistRoute=notifications | fact-ref | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/staff/notifications.ts) |
| notification:staff.leave_request.rejected | specialized-registry | staff.leave_request.rejected | — | registry=notification; registryId=staff.leave_request.rejected; specialistRoute=notifications | fact-ref | [notifications.ts](../../../../node_modules/@open-mercato/core/src/modules/staff/notifications.ts) |
| search:staff:staff_team | specialized-registry | staff:staff_team | — | registry=search; registryId=staff:staff_team; specialistRoute=search | fact-ref | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/staff/search.ts) |
| search:staff:staff_team_member | specialized-registry | staff:staff_team_member | — | registry=search; registryId=staff:staff_team_member; specialistRoute=search | fact-ref | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/staff/search.ts) |
| search:staff:staff_team_role | specialized-registry | staff:staff_team_role | — | registry=search; registryId=staff:staff_team_role; specialistRoute=search | fact-ref | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/staff/search.ts) |
| search:staff:staff_time_project | specialized-registry | staff:staff_time_project | — | registry=search; registryId=staff:staff_time_project; specialistRoute=search | fact-ref | [search.ts](../../../../node_modules/@open-mercato/core/src/modules/staff/search.ts) |
| dashboard:staff.timesheets.hoursByProject | widget | dashboard:staff.timesheets.hoursByProject | — | executionGuard=both; payload=dashboard; registryKey=staff.timesheets.hoursByProject | framework | [widgets/dashboard/timesheets-hours-by-project/widget.ts](../../../../node_modules/@open-mercato/core/src/modules/staff/widgets/dashboard/timesheets-hours-by-project/widget.ts) |
| dashboard:staff.timesheets.timeReporting | widget | dashboard:staff.timesheets.timeReporting | — | executionGuard=both; payload=dashboard; registryKey=staff.timesheets.timeReporting | framework | [widgets/dashboard/timesheets-time-reporting/widget.ts](../../../../node_modules/@open-mercato/core/src/modules/staff/widgets/dashboard/timesheets-time-reporting/widget.ts) |
| staff.injection.timer-sidebar-indicator@backend:sidebar:nav:footer | widget | backend:sidebar:nav:footer | — | executionGuard=host; payload=render; registryKey=staff.injection.timer-sidebar-indicator | optional-external | [widgets/injection-table.ts](../../../../node_modules/@open-mercato/core/src/modules/staff/widgets/injection-table.ts) |

<!-- end module facts section: staff/umes-contributions -->
