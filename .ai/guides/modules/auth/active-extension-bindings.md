# auth — Active extension bindings

[Back to module index](index.md)

## Active extension bindings

| Activation | Kind | Host | Contribution kinds | Phases | Bridge | Source |
|---|---|---|---|---|---|---|
| command:auth.users.update:command-interceptor-bridge | command-interceptor-bridge | command:auth.users.update @auth | command-interceptor | — | ownedContracts.command:auth.users.update | [commands/users.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/commands/users.ts) |
| entity:auth.user:mutation-guard | mutation-guard | entity:auth.user @auth | mutation-guard | — | — | [api/users/resend-invite/route.ts:126](../../../../node_modules/@open-mercato/core/src/modules/auth/api/users/resend-invite/route.ts#L126) |
| widget-spot:auth.login:form:widget-injection-consumer | widget-injection-consumer | widget-spot:auth.login:form @auth | widget, data-table, crud-form | — | hosts:loginForm | [extension-points.ts](../../../../node_modules/@open-mercato/core/src/modules/auth/extension-points.ts) |

<!-- end module facts section: auth/active-extension-bindings -->
