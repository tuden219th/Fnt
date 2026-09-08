# staff — Active extension bindings

[Back to module index](index.md)

## Active extension bindings

| Activation | Kind | Host | Contribution kinds | Phases | Bridge | Source |
|---|---|---|---|---|---|---|
| api-route:staff/timesheets/time-entries:GET:api-interceptor-bridge | api-interceptor-bridge | api-route:staff/timesheets/time-entries GET @staff | api-interceptor | before | apiRoutes:/staff/timesheets/time-entries | [api/timesheets/time-entries/route.ts](../../../../node_modules/@open-mercato/core/src/modules/staff/api/timesheets/time-entries/route.ts) |
| entity:staff:staff_time_project:crud-response-enricher | crud-response-enricher | entity:staff:staff_time_project @staff | response-enricher | — | — | [api/timesheets/time-projects/route.ts:94](../../../../node_modules/@open-mercato/core/src/modules/staff/api/timesheets/time-projects/route.ts#L94) |
| widget-spot:dashboard:staff.timesheets.hoursByProject:dashboard-host-consumer | dashboard-host-consumer | widget-spot:dashboard:staff.timesheets.hoursByProject @framework | widget | — | hosts:framework.dashboard | packages/ui/src |
| widget-spot:dashboard:staff.timesheets.timeReporting:dashboard-host-consumer | dashboard-host-consumer | widget-spot:dashboard:staff.timesheets.timeReporting @framework | widget | — | hosts:framework.dashboard | packages/ui/src |

<!-- end module facts section: staff/active-extension-bindings -->
