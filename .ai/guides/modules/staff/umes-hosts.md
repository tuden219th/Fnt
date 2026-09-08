# staff — UMES hosts

[Back to module index](index.md)

## UMES hosts

| ID / pattern | Family | Supports | Context | Stability | Source |
|---|---|---|---|---|---|
| staff:staff_leave_request | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:staff:staff_leave_request |
| staff:staff_team | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:staff:staff_team |
| staff:staff_team_member | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:staff:staff_team_member |
| staff:staff_team_member_activity | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:staff:staff_team_member_activity |
| staff:staff_team_member_address | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:staff:staff_team_member_address |
| staff:staff_team_member_comment | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:staff:staff_team_member_comment |
| staff:staff_team_member_job_history | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:staff:staff_team_member_job_history |
| staff:staff_team_role | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:staff:staff_team_role |
| staff:staff_time_entry | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:staff:staff_time_entry |
| staff:staff_time_entry_segment | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:staff:staff_time_entry_segment |
| staff:staff_time_project | entity | response-enricher, query-enricher, mutation-guard | tenant-and-organization | STABLE | [api/timesheets/time-projects/route.ts](../../../../node_modules/@open-mercato/core/src/modules/staff/api/timesheets/time-projects/route.ts) |
| staff:staff_time_project_member | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:staff:staff_time_project_member |
| staff.activity.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.activity.created |
| staff.activity.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.activity.deleted |
| staff.activity.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.activity.updated |
| staff.address.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.address.created |
| staff.address.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.address.deleted |
| staff.address.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.address.updated |
| staff.comment.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.comment.created |
| staff.comment.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.comment.deleted |
| staff.comment.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.comment.updated |
| staff.job_history.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.job_history.created |
| staff.job_history.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.job_history.deleted |
| staff.job_history.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.job_history.updated |
| staff.leave_request.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.leave_request.created |
| staff.leave_request.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.leave_request.deleted |
| staff.leave_request.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.leave_request.updated |
| staff.team_member.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.team_member.created |
| staff.team_member.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.team_member.deleted |
| staff.team_member.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.team_member.updated |
| staff.team_role.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.team_role.created |
| staff.team_role.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.team_role.deleted |
| staff.team_role.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.team_role.updated |
| staff.team.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.team.created |
| staff.team.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.team.deleted |
| staff.team.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.team.updated |
| staff.timesheets.time_entry.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.timesheets.time_entry.created |
| staff.timesheets.time_entry.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.timesheets.time_entry.deleted |
| staff.timesheets.time_entry.timer_started | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.timesheets.time_entry.timer_started |
| staff.timesheets.time_entry.timer_stopped | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.timesheets.time_entry.timer_stopped |
| staff.timesheets.time_entry.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.timesheets.time_entry.updated |
| staff.timesheets.time_project_member.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.timesheets.time_project_member.created |
| staff.timesheets.time_project_member.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.timesheets.time_project_member.deleted |
| staff.timesheets.time_project_member.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.timesheets.time_project_member.updated |
| staff.timesheets.time_project.created | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.timesheets.time_project.created |
| staff.timesheets.time_project.deleted | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.timesheets.time_project.deleted |
| staff.timesheets.time_project.updated | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:staff.timesheets.time_project.updated |
| staff.staff_team_member.queried | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:staff:staff_team_member |
| staff.staff_team_member.querying | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:staff:staff_team_member |
| staff.staff_team_role.queried | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:staff:staff_team_role |
| staff.staff_team_role.querying | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:staff:staff_team_role |
| staff.staff_team.queried | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:staff:staff_team |
| staff.staff_team.querying | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:staff:staff_team |
| staff.staff_time_project.queried | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:staff:staff_time_project |
| staff.staff_time_project.querying | query-lifecycle | sync-subscriber | tenant-and-organization-reapplied-after-result | STABLE | searchEntities:staff:staff_time_project |

<!-- end module facts section: staff/umes-hosts -->
