# checkout — Workers

[Back to module index](index.md)

## Workers

| ID | Metadata | Source |
|---|---|---|
| checkout:send-email | concurrency=5; queue=checkout-email | [workers/send-email.worker.ts:19](../../../../node_modules/@open-mercato/checkout/src/modules/checkout/workers/send-email.worker.ts#L19) |
| checkout:transaction-expiry | concurrency=1; queue=checkout-transaction-expiry | [workers/transaction-expiry.worker.ts:21](../../../../node_modules/@open-mercato/checkout/src/modules/checkout/workers/transaction-expiry.worker.ts#L21) |

<!-- end module facts section: checkout/workers -->
