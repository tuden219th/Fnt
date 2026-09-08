# payment_gateways — UMES contributions

[Back to module index](index.md)

## UMES contributions

| ID | Kind | Target | Phase / operations | Contract | Resolution | Source |
|---|---|---|---|---|---|---|
| payment_gateways.validate-provider | api-interceptor | sessions | before | activation=crud-pipeline; failurePosture=fallback; methods=POST; phases=before; route=sessions; timeoutMs=2000 | fact-ref | [api/interceptors.ts](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/api/interceptors.ts) |

<!-- end module facts section: payment_gateways/umes-contributions -->
