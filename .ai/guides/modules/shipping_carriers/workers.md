# shipping_carriers — Workers

[Back to module index](index.md)

## Workers

| ID | Metadata | Source |
|---|---|---|
| shipping-carriers:status-poller | concurrency=2; queue=shipping-carriers-status-poller | [workers/status-poller.ts:17](../../../../node_modules/@open-mercato/core/src/modules/shipping_carriers/workers/status-poller.ts#L17) |
| shipping-carriers:webhook-processor | concurrency=5; queue=shipping-carriers-webhook | [workers/webhook-processor.ts:28](../../../../node_modules/@open-mercato/core/src/modules/shipping_carriers/workers/webhook-processor.ts#L28) |

<!-- end module facts section: shipping_carriers/workers -->
