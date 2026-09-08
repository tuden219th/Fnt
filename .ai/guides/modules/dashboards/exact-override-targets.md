# dashboards — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["analytics.view"]` | disable-replace | aclFeatures:analytics.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/dashboards/acl.ts) |
| acl | `overrides.acl.features["dashboards.admin.assign-widgets"]` | disable-replace | aclFeatures:dashboards.admin.assign-widgets | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/dashboards/acl.ts) |
| acl | `overrides.acl.features["dashboards.configure"]` | disable-replace | aclFeatures:dashboards.configure | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/dashboards/acl.ts) |
| acl | `overrides.acl.features["dashboards.view"]` | disable-replace | aclFeatures:dashboards.view | [acl.ts](../../../../node_modules/@open-mercato/core/src/modules/dashboards/acl.ts) |
| cli | `overrides.cli["debug-analytics"]` | disable-replace | cliCommands:debug-analytics | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/dashboards/cli.ts) |
| cli | `overrides.cli["enable-analytics-widgets"]` | disable-replace | cliCommands:enable-analytics-widgets | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/dashboards/cli.ts) |
| cli | `overrides.cli["seed-analytics"]` | disable-replace | cliCommands:seed-analytics | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/dashboards/cli.ts) |
| cli | `overrides.cli["seed-defaults"]` | disable-replace | cliCommands:seed-defaults | [cli.ts](../../../../node_modules/@open-mercato/core/src/modules/dashboards/cli.ts) |
| di | `overrides.di["analyticsRegistry"]` | disable-replace | ownedContracts.di-registration:analyticsRegistry | [di.ts:7](../../../../node_modules/@open-mercato/core/src/modules/dashboards/di.ts#L7) |
| events | `overrides.events.subscribers["dashboards:invalidate-widget-data-on-currency-change"]` | disable-replace | extensionSurfaces.contributions:dashboards:invalidate-widget-data-on-currency-change | [subscribers/invalidateWidgetDataCache.ts](../../../../node_modules/@open-mercato/core/src/modules/dashboards/subscribers/invalidateWidgetDataCache.ts) |
| setup | `overrides.setup.defaultRoleFeatures` | replace | ownedContracts.setup:dashboards:setup | [setup.ts:5](../../../../node_modules/@open-mercato/core/src/modules/dashboards/setup.ts#L5) |
| setup | `overrides.setup.onTenantCreated` | replace | ownedContracts.setup:dashboards:setup | [setup.ts:5](../../../../node_modules/@open-mercato/core/src/modules/dashboards/setup.ts#L5) |
| setup | `overrides.setup.seedDefaults` | replace | ownedContracts.setup:dashboards:setup | [setup.ts:5](../../../../node_modules/@open-mercato/core/src/modules/dashboards/setup.ts#L5) |
| widgets | `overrides.widgets.dashboard["dashboards.analytics.aovKpi"]` | disable-replace | extensionSurfaces.contributions:dashboard:dashboards.analytics.aovKpi | [widgets/dashboard/aov-kpi/widget.ts](../../../../node_modules/@open-mercato/core/src/modules/dashboards/widgets/dashboard/aov-kpi/widget.ts) |
| widgets | `overrides.widgets.dashboard["dashboards.analytics.newCustomersKpi"]` | disable-replace | extensionSurfaces.contributions:dashboard:dashboards.analytics.newCustomersKpi | [widgets/dashboard/new-customers-kpi/widget.ts](../../../../node_modules/@open-mercato/core/src/modules/dashboards/widgets/dashboard/new-customers-kpi/widget.ts) |
| widgets | `overrides.widgets.dashboard["dashboards.analytics.ordersByStatus"]` | disable-replace | extensionSurfaces.contributions:dashboard:dashboards.analytics.ordersByStatus | [widgets/dashboard/orders-by-status/widget.ts](../../../../node_modules/@open-mercato/core/src/modules/dashboards/widgets/dashboard/orders-by-status/widget.ts) |
| widgets | `overrides.widgets.dashboard["dashboards.analytics.ordersKpi"]` | disable-replace | extensionSurfaces.contributions:dashboard:dashboards.analytics.ordersKpi | [widgets/dashboard/orders-kpi/widget.ts](../../../../node_modules/@open-mercato/core/src/modules/dashboards/widgets/dashboard/orders-kpi/widget.ts) |
| widgets | `overrides.widgets.dashboard["dashboards.analytics.pipelineSummary"]` | disable-replace | extensionSurfaces.contributions:dashboard:dashboards.analytics.pipelineSummary | [widgets/dashboard/pipeline-summary/widget.ts](../../../../node_modules/@open-mercato/core/src/modules/dashboards/widgets/dashboard/pipeline-summary/widget.ts) |
| widgets | `overrides.widgets.dashboard["dashboards.analytics.revenueKpi"]` | disable-replace | extensionSurfaces.contributions:dashboard:dashboards.analytics.revenueKpi | [widgets/dashboard/revenue-kpi/widget.ts](../../../../node_modules/@open-mercato/core/src/modules/dashboards/widgets/dashboard/revenue-kpi/widget.ts) |
| widgets | `overrides.widgets.dashboard["dashboards.analytics.revenueTrend"]` | disable-replace | extensionSurfaces.contributions:dashboard:dashboards.analytics.revenueTrend | [widgets/dashboard/revenue-trend/widget.ts](../../../../node_modules/@open-mercato/core/src/modules/dashboards/widgets/dashboard/revenue-trend/widget.ts) |
| widgets | `overrides.widgets.dashboard["dashboards.analytics.salesByRegion"]` | disable-replace | extensionSurfaces.contributions:dashboard:dashboards.analytics.salesByRegion | [widgets/dashboard/sales-by-region/widget.ts](../../../../node_modules/@open-mercato/core/src/modules/dashboards/widgets/dashboard/sales-by-region/widget.ts) |
| widgets | `overrides.widgets.dashboard["dashboards.analytics.topCustomers"]` | disable-replace | extensionSurfaces.contributions:dashboard:dashboards.analytics.topCustomers | [widgets/dashboard/top-customers/widget.ts](../../../../node_modules/@open-mercato/core/src/modules/dashboards/widgets/dashboard/top-customers/widget.ts) |
| widgets | `overrides.widgets.dashboard["dashboards.analytics.topProducts"]` | disable-replace | extensionSurfaces.contributions:dashboard:dashboards.analytics.topProducts | [widgets/dashboard/top-products/widget.ts](../../../../node_modules/@open-mercato/core/src/modules/dashboards/widgets/dashboard/top-products/widget.ts) |

<!-- end module facts section: dashboards/exact-override-targets -->
