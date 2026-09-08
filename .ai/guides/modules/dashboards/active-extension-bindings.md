# dashboards — Active extension bindings

[Back to module index](index.md)

## Active extension bindings

| Activation | Kind | Host | Contribution kinds | Phases | Bridge | Source |
|---|---|---|---|---|---|---|
| api-route:dashboards/widgets/data:POST:api-interceptor-bridge | api-interceptor-bridge | api-route:dashboards/widgets/data POST @dashboards | api-interceptor | before | apiRoutes:/dashboards/widgets/data | [api/widgets/data/route.ts](../../../../node_modules/@open-mercato/core/src/modules/dashboards/api/widgets/data/route.ts) |
| entity:dashboards.layout:mutation-guard | mutation-guard | entity:dashboards.layout @dashboards | mutation-guard | — | — | [api/layout/[itemId]/route.ts:66](../../../../node_modules/@open-mercato/core/src/modules/dashboards/api/layout/[itemId]/route.ts#L66) |
| entity:dashboards.roleWidgets:mutation-guard | mutation-guard | entity:dashboards.roleWidgets @dashboards | mutation-guard | — | — | [api/roles/widgets/route.ts:153](../../../../node_modules/@open-mercato/core/src/modules/dashboards/api/roles/widgets/route.ts#L153) |
| entity:dashboards.userWidgets:mutation-guard | mutation-guard | entity:dashboards.userWidgets @dashboards | mutation-guard | — | — | [api/users/widgets/route.ts:153](../../../../node_modules/@open-mercato/core/src/modules/dashboards/api/users/widgets/route.ts#L153) |
| widget-spot:dashboard:dashboards.analytics.aovKpi:dashboard-host-consumer | dashboard-host-consumer | widget-spot:dashboard:dashboards.analytics.aovKpi @framework | widget | — | hosts:framework.dashboard | packages/ui/src |
| widget-spot:dashboard:dashboards.analytics.newCustomersKpi:dashboard-host-consumer | dashboard-host-consumer | widget-spot:dashboard:dashboards.analytics.newCustomersKpi @framework | widget | — | hosts:framework.dashboard | packages/ui/src |
| widget-spot:dashboard:dashboards.analytics.ordersByStatus:dashboard-host-consumer | dashboard-host-consumer | widget-spot:dashboard:dashboards.analytics.ordersByStatus @framework | widget | — | hosts:framework.dashboard | packages/ui/src |
| widget-spot:dashboard:dashboards.analytics.ordersKpi:dashboard-host-consumer | dashboard-host-consumer | widget-spot:dashboard:dashboards.analytics.ordersKpi @framework | widget | — | hosts:framework.dashboard | packages/ui/src |
| widget-spot:dashboard:dashboards.analytics.pipelineSummary:dashboard-host-consumer | dashboard-host-consumer | widget-spot:dashboard:dashboards.analytics.pipelineSummary @framework | widget | — | hosts:framework.dashboard | packages/ui/src |
| widget-spot:dashboard:dashboards.analytics.revenueKpi:dashboard-host-consumer | dashboard-host-consumer | widget-spot:dashboard:dashboards.analytics.revenueKpi @framework | widget | — | hosts:framework.dashboard | packages/ui/src |
| widget-spot:dashboard:dashboards.analytics.revenueTrend:dashboard-host-consumer | dashboard-host-consumer | widget-spot:dashboard:dashboards.analytics.revenueTrend @framework | widget | — | hosts:framework.dashboard | packages/ui/src |
| widget-spot:dashboard:dashboards.analytics.salesByRegion:dashboard-host-consumer | dashboard-host-consumer | widget-spot:dashboard:dashboards.analytics.salesByRegion @framework | widget | — | hosts:framework.dashboard | packages/ui/src |
| widget-spot:dashboard:dashboards.analytics.topCustomers:dashboard-host-consumer | dashboard-host-consumer | widget-spot:dashboard:dashboards.analytics.topCustomers @framework | widget | — | hosts:framework.dashboard | packages/ui/src |
| widget-spot:dashboard:dashboards.analytics.topProducts:dashboard-host-consumer | dashboard-host-consumer | widget-spot:dashboard:dashboards.analytics.topProducts @framework | widget | — | hosts:framework.dashboard | packages/ui/src |

<!-- end module facts section: dashboards/active-extension-bindings -->
