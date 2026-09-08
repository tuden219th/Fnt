# payment_gateways — Workers

[Back to module index](index.md)

## Workers

| ID | Metadata | Source |
|---|---|---|
| payment_gateways:session-initialization-prune | concurrency=1; queue=payment-gateway-session-initialization-prune | [workers/session-initialization-prune.ts:30](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/workers/session-initialization-prune.ts#L30) |
| payment-gateways:status-poller | concurrency=2; queue=payment-gateways-status-poller | [workers/status-poller.ts:18](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/workers/status-poller.ts#L18) |
| payment-gateways:webhook-processor | concurrency=5; queue=payment-gateways-webhook | [workers/webhook-processor.ts:16](../../../../node_modules/@open-mercato/core/src/modules/payment_gateways/workers/webhook-processor.ts#L16) |

<!-- end module facts section: payment_gateways/workers -->
