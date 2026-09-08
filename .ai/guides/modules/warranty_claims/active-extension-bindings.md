# warranty_claims — Active extension bindings

[Back to module index](index.md)

## Active extension bindings

| Activation | Kind | Host | Contribution kinds | Phases | Bridge | Source |
|---|---|---|---|---|---|---|
| widget-spot:dashboard:warranty_claims.dashboard.claimsQueue:dashboard-host-consumer | dashboard-host-consumer | widget-spot:dashboard:warranty_claims.dashboard.claimsQueue @framework | widget | — | hosts:framework.dashboard | packages/ui/src |
| widget-spot:data-table:warranty_claims.claims.list:search-trailing:widget-injection-consumer | widget-injection-consumer | widget-spot:data-table:warranty_claims.claims.list:search-trailing @warranty_claims | widget, data-table, crud-form | — | hosts:claimsTable.searchTrailing | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/warranty_claims/extension-points.ts) |

<!-- end module facts section: warranty_claims/active-extension-bindings -->
