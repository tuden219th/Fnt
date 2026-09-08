# sales — Encryption

[Back to module index](index.md)

## Encryption

| ID | Metadata | Source |
|---|---|---|
| sales:sales_channel | fields=address_line1, address_line2, city, contact_email, contact_phone, country, postal_code, region | [encryption.ts:58](../../../../node_modules/@open-mercato/core/src/modules/sales/encryption.ts#L58) |
| sales:sales_document_address | fields=address_line1, address_line2, building_number, city, company_name, country, flat_number, name, postal_code, purpose, region | [encryption.ts:38](../../../../node_modules/@open-mercato/core/src/modules/sales/encryption.ts#L38) |
| sales:sales_note | fields=body | [encryption.ts:54](../../../../node_modules/@open-mercato/core/src/modules/sales/encryption.ts#L54) |
| sales:sales_order | fields=billing_address_snapshot, catalog_snapshot, comments, customer_snapshot, delivery_window_snapshot, internal_notes, metadata, payment_method_snapshot, promotion_snapshot, shipping_address_snapshot, shipping_method_snapshot, totals_snapshot | [encryption.ts:4](../../../../node_modules/@open-mercato/core/src/modules/sales/encryption.ts#L4) |
| sales:sales_quote | fields=billing_address_snapshot, catalog_snapshot, comments, customer_snapshot, delivery_window_snapshot, internal_notes, metadata, payment_method_snapshot, promotion_snapshot, shipping_address_snapshot, shipping_method_snapshot, totals_snapshot | [encryption.ts:21](../../../../node_modules/@open-mercato/core/src/modules/sales/encryption.ts#L21) |

<!-- end module facts section: sales/encryption -->
