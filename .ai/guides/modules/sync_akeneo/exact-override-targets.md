# sync_akeneo — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| cli | `overrides.cli["configure-from-env"]` | disable-replace | cliCommands:configure-from-env | [cli.ts](../../../../node_modules/@open-mercato/sync-akeneo/src/modules/sync_akeneo/cli.ts) |
| cli | `overrides.cli["help"]` | disable-replace | cliCommands:help | [cli.ts](../../../../node_modules/@open-mercato/sync-akeneo/src/modules/sync_akeneo/cli.ts) |
| di | `overrides.di["akeneoHealthCheck"]` | disable-replace | ownedContracts.di-registration:akeneoHealthCheck | [di.ts:11](../../../../node_modules/@open-mercato/sync-akeneo/src/modules/sync_akeneo/di.ts#L11) |
| setup | `overrides.setup.seedDefaults` | replace | ownedContracts.setup:sync_akeneo:setup | [setup.ts:10](../../../../node_modules/@open-mercato/sync-akeneo/src/modules/sync_akeneo/setup.ts#L10) |
| workers | `overrides.workers["sync-akeneo:delete-imported-products"]` | disable-replace | ownedContracts.worker:sync-akeneo:delete-imported-products | [workers/delete-imported-products.ts:14](../../../../node_modules/@open-mercato/sync-akeneo/src/modules/sync_akeneo/workers/delete-imported-products.ts#L14) |
| workers | `overrides.workers["sync-akeneo:first-import"]` | disable-replace | ownedContracts.worker:sync-akeneo:first-import | [workers/first-import.ts:14](../../../../node_modules/@open-mercato/sync-akeneo/src/modules/sync_akeneo/workers/first-import.ts#L14) |

<!-- end module facts section: sync_akeneo/exact-override-targets -->
