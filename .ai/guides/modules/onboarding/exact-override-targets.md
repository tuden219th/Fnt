# onboarding — Exact override targets

[Back to module index](index.md)

## Exact override targets

| Domain | Path / key | Supported modes | Referenced fact | Source |
|---|---|---|---|---|
| acl | `overrides.acl.features["onboarding.access"]` | disable-replace | aclFeatures:onboarding.access | [acl.ts](../../../../node_modules/@open-mercato/onboarding/src/modules/onboarding/acl.ts) |
| acl | `overrides.acl.features["onboarding.submit"]` | disable-replace | aclFeatures:onboarding.submit | [acl.ts](../../../../node_modules/@open-mercato/onboarding/src/modules/onboarding/acl.ts) |
| acl | `overrides.acl.features["onboarding.verify"]` | disable-replace | aclFeatures:onboarding.verify | [acl.ts](../../../../node_modules/@open-mercato/onboarding/src/modules/onboarding/acl.ts) |
| encryption | `overrides.encryption.maps["onboarding:onboarding_request"]` | disable-replace | ownedContracts.encryption:onboarding:onboarding_request | [encryption.ts:4](../../../../node_modules/@open-mercato/onboarding/src/modules/onboarding/encryption.ts#L4) |
| routes | `overrides.routes.pages["frontend:/onboarding"]` | disable-replace | frontendPages:/onboarding | [frontend/onboarding/page.tsx](../../../../node_modules/@open-mercato/onboarding/src/modules/onboarding/frontend/onboarding/page.tsx) |
| routes | `overrides.routes.pages["frontend:/onboarding/preparing"]` | disable-replace | frontendPages:/onboarding/preparing | [frontend/onboarding/preparing/page.tsx](../../../../node_modules/@open-mercato/onboarding/src/modules/onboarding/frontend/onboarding/preparing/page.tsx) |

<!-- end module facts section: onboarding/exact-override-targets -->
