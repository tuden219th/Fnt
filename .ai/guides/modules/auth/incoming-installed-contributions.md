# auth — Incoming installed contributions

[Back to module index](index.md)

## Incoming installed contributions

| Contributor | Kind | Target | Resolution | Activation | Contribution · Source |
|---|---|---|---|---|---|
| communication_channels | subscriber | event:auth.user.deleted @auth | capability-only | — | communication_channels:user-deleted-cascade · [node_modules/@open-mercato/core/src/modules/communication_channels/subscribers/user-deleted-cascade.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/subscribers/user-deleted-cascade.ts) |
| communication_channels | entity-extension | entity:auth:user @auth | capability-only | — | communication_channels.entity-extension.2:auth:user->communication_channels:external_conversation · [node_modules/@open-mercato/core/src/modules/communication_channels/data/extensions.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/data/extensions.ts) |
| communication_channels | entity-extension | entity:auth:user @auth | capability-only | — | communication_channels.entity-extension.4:auth:user->communication_channels:communication_channel · [node_modules/@open-mercato/core/src/modules/communication_channels/data/extensions.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/data/extensions.ts) |
| communication_channels | entity-extension | entity:auth:user @auth | capability-only | — | communication_channels.entity-extension.5:auth:user->integrations:integration_credentials · [node_modules/@open-mercato/core/src/modules/communication_channels/data/extensions.ts](../../../../node_modules/@open-mercato/core/src/modules/communication_channels/data/extensions.ts) |
| security | command-interceptor | command:auth.users.update @auth | bound | command:auth.users.update:command-interceptor-bridge | security.block-legacy-self-password-change · [node_modules/@open-mercato/enterprise/src/modules/security/commands/interceptors.ts](../../../../node_modules/@open-mercato/enterprise/src/modules/security/commands/interceptors.ts) |
| sso | subscriber | event:auth.user.deleted @auth | capability-only | — | sso:user-deleted-cleanup · [node_modules/@open-mercato/enterprise/src/modules/sso/subscribers/user-deleted-cleanup.ts](../../../../node_modules/@open-mercato/enterprise/src/modules/sso/subscribers/user-deleted-cleanup.ts) |
| sso | widget | widget-spot:auth.login:form @auth | bound | widget-spot:auth.login:form:widget-injection-consumer | sso.injection.login-sso@auth.login:form · [node_modules/@open-mercato/enterprise/src/modules/sso/widgets/injection-table.ts](../../../../node_modules/@open-mercato/enterprise/src/modules/sso/widgets/injection-table.ts) |

<!-- end module facts section: auth/incoming-installed-contributions -->
