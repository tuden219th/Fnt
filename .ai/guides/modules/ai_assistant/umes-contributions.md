# ai_assistant — UMES contributions

[Back to module index](index.md)

## UMES contributions

| ID | Kind | Target | Phase / operations | Contract | Resolution | Source |
|---|---|---|---|---|---|---|
| ai_assistant.conversation.shared.browser | browser-reaction | ai_assistant.conversation.shared | — | audienceScopeContract=tenant-organization-user-role-and-customer; hooks=useAppEvent,useOperationProgress; transports=client | fact-ref | [events.ts](../../../../node_modules/@open-mercato/ai-assistant/src/modules/ai_assistant/events.ts) |
| ai_assistant.conversation.unshared.browser | browser-reaction | ai_assistant.conversation.unshared | — | audienceScopeContract=tenant-organization-user-role-and-customer; hooks=useAppEvent,useOperationProgress; transports=client | fact-ref | [events.ts](../../../../node_modules/@open-mercato/ai-assistant/src/modules/ai_assistant/events.ts) |
| ai:attachments.list_record_attachments | specialized-registry | attachments.list_record_attachments | — | registry=ai; registryId=attachments.list_record_attachments; specialistRoute=aiTools | fact-ref | [ai-tools/attachments-pack.ts](../../../../node_modules/@open-mercato/ai-assistant/src/modules/ai_assistant/ai-tools/attachments-pack.ts) |
| ai:attachments.read_attachment | specialized-registry | attachments.read_attachment | — | registry=ai; registryId=attachments.read_attachment; specialistRoute=aiTools | fact-ref | [ai-tools/attachments-pack.ts](../../../../node_modules/@open-mercato/ai-assistant/src/modules/ai_assistant/ai-tools/attachments-pack.ts) |
| ai:attachments.transfer_record_attachments | specialized-registry | attachments.transfer_record_attachments | — | registry=ai; registryId=attachments.transfer_record_attachments; specialistRoute=aiTools | fact-ref | [ai-tools/attachments-pack.ts](../../../../node_modules/@open-mercato/ai-assistant/src/modules/ai_assistant/ai-tools/attachments-pack.ts) |
| ai:meta.describe_agent | specialized-registry | meta.describe_agent | — | registry=ai; registryId=meta.describe_agent; specialistRoute=aiTools | fact-ref | [ai-tools/meta-pack.ts](../../../../node_modules/@open-mercato/ai-assistant/src/modules/ai_assistant/ai-tools/meta-pack.ts) |
| ai:meta.list_agents | specialized-registry | meta.list_agents | — | registry=ai; registryId=meta.list_agents; specialistRoute=aiTools | fact-ref | [ai-tools/meta-pack.ts](../../../../node_modules/@open-mercato/ai-assistant/src/modules/ai_assistant/ai-tools/meta-pack.ts) |
| ai:meta.update_task_plan | specialized-registry | meta.update_task_plan | — | registry=ai; registryId=meta.update_task_plan; specialistRoute=aiTools | fact-ref | [ai-tools/meta-pack.ts](../../../../node_modules/@open-mercato/ai-assistant/src/modules/ai_assistant/ai-tools/meta-pack.ts) |
| ai:search.get_record_context | specialized-registry | search.get_record_context | — | registry=ai; registryId=search.get_record_context; specialistRoute=aiTools | fact-ref | [ai-tools/search-pack.ts](../../../../node_modules/@open-mercato/ai-assistant/src/modules/ai_assistant/ai-tools/search-pack.ts) |
| ai:search.hybrid_search | specialized-registry | search.hybrid_search | — | registry=ai; registryId=search.hybrid_search; specialistRoute=aiTools | fact-ref | [ai-tools/search-pack.ts](../../../../node_modules/@open-mercato/ai-assistant/src/modules/ai_assistant/ai-tools/search-pack.ts) |
| notification:ai_assistant.conversation_shared | specialized-registry | ai_assistant.conversation_shared | — | registry=notification; registryId=ai_assistant.conversation_shared; specialistRoute=notifications | fact-ref | [notifications.ts](../../../../node_modules/@open-mercato/ai-assistant/src/modules/ai_assistant/notifications.ts) |
| ai_assistant:conversation-shared-notify | subscriber | ai_assistant.conversation.shared | async-delivery | event=ai_assistant.conversation.shared; persistent=true; subscriberId=ai_assistant:conversation-shared-notify; sync=false | fact-ref | [subscribers/conversation-shared-notify.ts](../../../../node_modules/@open-mercato/ai-assistant/src/modules/ai_assistant/subscribers/conversation-shared-notify.ts) |

<!-- end module facts section: ai_assistant/umes-contributions -->
