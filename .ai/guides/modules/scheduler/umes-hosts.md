# scheduler — UMES hosts

[Back to module index](index.md)

## UMES hosts

| ID / pattern | Family | Supports | Context | Stability | Source |
|---|---|---|---|---|---|
| scheduler:scheduled_job | entity | response-enricher, query-enricher, mutation-guard, entity-extension | tenant-and-organization | STABLE | entities:scheduler:scheduled_job |
| scheduler.job.completed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:scheduler.job.completed |
| scheduler.job.failed | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:scheduler.job.failed |
| scheduler.job.skipped | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:scheduler.job.skipped |
| scheduler.job.started | event | async-subscriber, sync-subscriber | tenant-organization-and-audience | STABLE | events:scheduler.job.started |

<!-- end module facts section: scheduler/umes-hosts -->
