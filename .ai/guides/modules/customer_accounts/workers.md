# customer_accounts — Workers

[Back to module index](index.md)

## Workers

| ID | Metadata | Source |
|---|---|---|
| customer_accounts:cleanup-expired-sessions | concurrency=1; queue=customer-accounts-cleanup-sessions | [workers/cleanupExpiredSessions.ts:5](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/workers/cleanupExpiredSessions.ts#L5) |
| customer_accounts:cleanup-expired-tokens | concurrency=1; queue=customer-accounts-cleanup-tokens | [workers/cleanupExpiredTokens.ts:9](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/workers/cleanupExpiredTokens.ts#L9) |
| customer_accounts:domain-tls-retry | concurrency=1; queue=domain-tls-retry | [workers/domainTlsRetryWorker.ts:4](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/workers/domainTlsRetryWorker.ts#L4) |
| customer_accounts:domain-verification | concurrency=1; queue=domain-verification | [workers/domainVerificationWorker.ts:4](../../../../node_modules/@open-mercato/core/src/modules/customer_accounts/workers/domainVerificationWorker.ts#L4) |

<!-- end module facts section: customer_accounts/workers -->
