export const STRIPE_subscription_payment_success = {
  "properties": {
    "data_type": "{\"types\":{\"bTxZb\":{\"caption\":\"Request Data\",\"fields\":{\"_wf_body.id\":{\"ret_btype\":\"text\",\"caption\":\"body id\",\"sample_value\":\"string value\",\"path\":[\"body\",\"id\"]},\"_wf_body.object\":{\"ret_btype\":\"text\",\"caption\":\"body object\",\"sample_value\":\"string value\",\"path\":[\"body\",\"object\"]},\"_wf_body.api_version\":{\"ret_btype\":\"text\",\"caption\":\"body api_version\",\"sample_value\":\"string value\",\"path\":[\"body\",\"api_version\"]},\"_wf_body.created\":{\"ret_btype\":\"number\",\"caption\":\"body created\",\"sample_value\":1771514273,\"path\":[\"body\",\"created\"]},\"_wf_body.data.object.id\":{\"ret_btype\":\"text\",\"caption\":\"body object id\",\"sample_value\":\"string value\",\"path\":[\"body\",\"data\",\"object\",\"id\"]},\"_wf_body.data.object.object\":{\"ret_btype\":\"text\",\"caption\":\"body object object\",\"sample_value\":\"string value\",\"path\":[\"body\",\"data\",\"object\",\"object\"]},\"_wf_body.data.object.account_country\":{\"ret_btype\":\"text\",\"caption\":\"body object account_country\",\"sample_value\":\"string value\",\"path\":[\"body\",\"data\",\"object\",\"account_country\"]},\"_wf_body.data.object.account_name\":{\"ret_btype\":\"text\",\"caption\":\"body object account_name\",\"sample_value\":\"string value\",\"path\":[\"body\",\"data\",\"object\",\"account_name\"]},\"_wf_body.data.object.account_tax_ids\":{\"ret_btype\":\"text\",\"caption\":\"body object account_tax_ids\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"account_tax_ids\"]},\"_wf_body.data.object.amount_due\":{\"ret_btype\":\"number\",\"caption\":\"body object amount_due\",\"sample_value\":6000,\"path\":[\"body\",\"data\",\"object\",\"amount_due\"]},\"_wf_body.data.object.amount_overpaid\":{\"ret_btype\":\"number\",\"caption\":\"body object amount_overpaid\",\"sample_value\":0,\"path\":[\"body\",\"data\",\"object\",\"amount_overpaid\"]},\"_wf_body.data.object.amount_paid\":{\"ret_btype\":\"number\",\"caption\":\"body object amount_paid\",\"sample_value\":6000,\"path\":[\"body\",\"data\",\"object\",\"amount_paid\"]},\"_wf_body.data.object.amount_remaining\":{\"ret_btype\":\"number\",\"caption\":\"body object amount_remaining\",\"sample_value\":0,\"path\":[\"body\",\"data\",\"object\",\"amount_remaining\"]},\"_wf_body.data.object.amount_shipping\":{\"ret_btype\":\"number\",\"caption\":\"body object amount_shipping\",\"sample_value\":0,\"path\":[\"body\",\"data\",\"object\",\"amount_shipping\"]},\"_wf_body.data.object.application\":{\"ret_btype\":\"text\",\"caption\":\"body object application\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"application\"]},\"_wf_body.data.object.attempt_count\":{\"ret_btype\":\"number\",\"caption\":\"body object attempt_count\",\"sample_value\":1,\"path\":[\"body\",\"data\",\"object\",\"attempt_count\"]},\"_wf_body.data.object.attempted\":{\"ret_btype\":\"boolean\",\"caption\":\"body object attempted\",\"sample_value\":true,\"path\":[\"body\",\"data\",\"object\",\"attempted\"]},\"_wf_body.data.object.auto_advance\":{\"ret_btype\":\"boolean\",\"caption\":\"body object auto_advance\",\"sample_value\":false,\"path\":[\"body\",\"data\",\"object\",\"auto_advance\"]},\"_wf_body.data.object.automatic_tax.disabled_reason\":{\"ret_btype\":\"text\",\"caption\":\"body object automatic_tax disabled_reason\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"automatic_tax\",\"disabled_reason\"]},\"_wf_body.data.object.automatic_tax.enabled\":{\"ret_btype\":\"boolean\",\"caption\":\"body object automatic_tax enabled\",\"sample_value\":false,\"path\":[\"body\",\"data\",\"object\",\"automatic_tax\",\"enabled\"]},\"_wf_body.data.object.automatic_tax.liability\":{\"ret_btype\":\"text\",\"caption\":\"body object automatic_tax liability\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"automatic_tax\",\"liability\"]},\"_wf_body.data.object.automatic_tax.provider\":{\"ret_btype\":\"text\",\"caption\":\"body object automatic_tax provider\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"automatic_tax\",\"provider\"]},\"_wf_body.data.object.automatic_tax.status\":{\"ret_btype\":\"text\",\"caption\":\"body object automatic_tax status\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"automatic_tax\",\"status\"]},\"_wf_body.data.object.automatically_finalizes_at\":{\"ret_btype\":\"text\",\"caption\":\"body object automatically_finalizes_at\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"automatically_finalizes_at\"]},\"_wf_body.data.object.billing_reason\":{\"ret_btype\":\"text\",\"caption\":\"body object billing_reason\",\"sample_value\":\"string value\",\"path\":[\"body\",\"data\",\"object\",\"billing_reason\"]},\"_wf_body.data.object.collection_method\":{\"ret_btype\":\"text\",\"caption\":\"body object collection_method\",\"sample_value\":\"string value\",\"path\":[\"body\",\"data\",\"object\",\"collection_method\"]},\"_wf_body.data.object.created\":{\"ret_btype\":\"number\",\"caption\":\"body object created\",\"sample_value\":1773906876,\"path\":[\"body\",\"data\",\"object\",\"created\"]},\"_wf_body.data.object.currency\":{\"ret_btype\":\"text\",\"caption\":\"body object currency\",\"sample_value\":\"string value\",\"path\":[\"body\",\"data\",\"object\",\"currency\"]},\"_wf_body.data.object.custom_fields\":{\"ret_btype\":\"text\",\"caption\":\"body object custom_fields\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"custom_fields\"]},\"_wf_body.data.object.customer\":{\"ret_btype\":\"text\",\"caption\":\"body object customer\",\"sample_value\":\"string value\",\"path\":[\"body\",\"data\",\"object\",\"customer\"]},\"_wf_body.data.object.customer_account\":{\"ret_btype\":\"text\",\"caption\":\"body object customer_account\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"customer_account\"]},\"_wf_body.data.object.customer_address.city\":{\"ret_btype\":\"text\",\"caption\":\"body object customer_address city\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"customer_address\",\"city\"]},\"_wf_body.data.object.customer_address.country\":{\"ret_btype\":\"text\",\"caption\":\"body object customer_address country\",\"sample_value\":\"string value\",\"path\":[\"body\",\"data\",\"object\",\"customer_address\",\"country\"]},\"_wf_body.data.object.customer_address.line1\":{\"ret_btype\":\"text\",\"caption\":\"body object customer_address line1\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"customer_address\",\"line1\"]},\"_wf_body.data.object.customer_address.line2\":{\"ret_btype\":\"text\",\"caption\":\"body object customer_address line2\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"customer_address\",\"line2\"]},\"_wf_body.data.object.customer_address.postal_code\":{\"ret_btype\":\"text\",\"caption\":\"body object customer_address postal_code\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"customer_address\",\"postal_code\"]},\"_wf_body.data.object.customer_address.state\":{\"ret_btype\":\"text\",\"caption\":\"body object customer_address state\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"customer_address\",\"state\"]},\"_wf_body.data.object.customer_email\":{\"ret_btype\":\"text\",\"caption\":\"body object customer_email\",\"sample_value\":\"string value\",\"path\":[\"body\",\"data\",\"object\",\"customer_email\"]},\"_wf_body.data.object.customer_name\":{\"ret_btype\":\"text\",\"caption\":\"body object customer_name\",\"sample_value\":\"string value\",\"path\":[\"body\",\"data\",\"object\",\"customer_name\"]},\"_wf_body.data.object.customer_phone\":{\"ret_btype\":\"text\",\"caption\":\"body object customer_phone\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"customer_phone\"]},\"_wf_body.data.object.customer_shipping\":{\"ret_btype\":\"text\",\"caption\":\"body object customer_shipping\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"customer_shipping\"]},\"_wf_body.data.object.customer_tax_exempt\":{\"ret_btype\":\"text\",\"caption\":\"body object customer_tax_exempt\",\"sample_value\":\"string value\",\"path\":[\"body\",\"data\",\"object\",\"customer_tax_exempt\"]},\"_wf_body.data.object.default_payment_method\":{\"ret_btype\":\"text\",\"caption\":\"body object default_payment_method\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"default_payment_method\"]},\"_wf_body.data.object.default_source\":{\"ret_btype\":\"text\",\"caption\":\"body object default_source\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"default_source\"]},\"_wf_body.data.object.description\":{\"ret_btype\":\"text\",\"caption\":\"body object description\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"description\"]},\"_wf_body.data.object.due_date\":{\"ret_btype\":\"text\",\"caption\":\"body object due_date\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"due_date\"]},\"_wf_body.data.object.effective_at\":{\"ret_btype\":\"number\",\"caption\":\"body object effective_at\",\"sample_value\":1773910476,\"path\":[\"body\",\"data\",\"object\",\"effective_at\"]},\"_wf_body.data.object.ending_balance\":{\"ret_btype\":\"number\",\"caption\":\"body object ending_balance\",\"sample_value\":0,\"path\":[\"body\",\"data\",\"object\",\"ending_balance\"]},\"_wf_body.data.object.footer\":{\"ret_btype\":\"text\",\"caption\":\"body object footer\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"footer\"]},\"_wf_body.data.object.from_invoice\":{\"ret_btype\":\"text\",\"caption\":\"body object from_invoice\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"from_invoice\"]},\"_wf_body.data.object.hosted_invoice_url\":{\"ret_btype\":\"text\",\"caption\":\"body object hosted_invoice_url\",\"sample_value\":\"string value\",\"path\":[\"body\",\"data\",\"object\",\"hosted_invoice_url\"]},\"_wf_body.data.object.invoice_pdf\":{\"ret_btype\":\"text\",\"caption\":\"body object invoice_pdf\",\"sample_value\":\"string value\",\"path\":[\"body\",\"data\",\"object\",\"invoice_pdf\"]},\"_wf_body.data.object.issuer.type\":{\"ret_btype\":\"text\",\"caption\":\"body object issuer type\",\"sample_value\":\"string value\",\"path\":[\"body\",\"data\",\"object\",\"issuer\",\"type\"]},\"_wf_body.data.object.last_finalization_error\":{\"ret_btype\":\"text\",\"caption\":\"body object last_finalization_error\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"last_finalization_error\"]},\"_wf_body.data.object.latest_revision\":{\"ret_btype\":\"text\",\"caption\":\"body object latest_revision\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"latest_revision\"]},\"_wf_body.data.object.lines.object\":{\"ret_btype\":\"text\",\"caption\":\"body object lines object\",\"sample_value\":\"string value\",\"path\":[\"body\",\"data\",\"object\",\"lines\",\"object\"]},\"_wf_body.data.object.lines.data\":{\"ret_btype\":\"list.api_wf_data.bTxZb.body.data.object.lines.data\",\"caption\":\"body object lines\",\"path\":[\"body\",\"data\",\"object\",\"lines\",\"data\"]},\"_wf_body.data.object.lines.has_more\":{\"ret_btype\":\"boolean\",\"caption\":\"body object lines has_more\",\"sample_value\":false,\"path\":[\"body\",\"data\",\"object\",\"lines\",\"has_more\"]},\"_wf_body.data.object.lines.total_count\":{\"ret_btype\":\"number\",\"caption\":\"body object lines total_count\",\"sample_value\":1,\"path\":[\"body\",\"data\",\"object\",\"lines\",\"total_count\"]},\"_wf_body.data.object.lines.url\":{\"ret_btype\":\"text\",\"caption\":\"body object lines url\",\"sample_value\":\"string value\",\"path\":[\"body\",\"data\",\"object\",\"lines\",\"url\"]},\"_wf_body.data.object.livemode\":{\"ret_btype\":\"boolean\",\"caption\":\"body object livemode\",\"sample_value\":false,\"path\":[\"body\",\"data\",\"object\",\"livemode\"]},\"_wf_body.data.object.next_payment_attempt\":{\"ret_btype\":\"text\",\"caption\":\"body object next_payment_attempt\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"next_payment_attempt\"]},\"_wf_body.data.object.number\":{\"ret_btype\":\"text\",\"caption\":\"body object number\",\"sample_value\":\"string value\",\"path\":[\"body\",\"data\",\"object\",\"number\"]},\"_wf_body.data.object.on_behalf_of\":{\"ret_btype\":\"text\",\"caption\":\"body object on_behalf_of\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"on_behalf_of\"]},\"_wf_body.data.object.parent.quote_details\":{\"ret_btype\":\"text\",\"caption\":\"body object parent quote_details\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"parent\",\"quote_details\"]},\"_wf_body.data.object.parent.subscription_details.subscription\":{\"ret_btype\":\"text\",\"caption\":\"body object parent subscription_details subscription\",\"sample_value\":\"string value\",\"path\":[\"body\",\"data\",\"object\",\"parent\",\"subscription_details\",\"subscription\"]},\"_wf_body.data.object.parent.type\":{\"ret_btype\":\"text\",\"caption\":\"body object parent type\",\"sample_value\":\"string value\",\"path\":[\"body\",\"data\",\"object\",\"parent\",\"type\"]},\"_wf_body.data.object.payment_settings.default_mandate\":{\"ret_btype\":\"text\",\"caption\":\"body object payment_settings default_mandate\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"payment_settings\",\"default_mandate\"]},\"_wf_body.data.object.payment_settings.payment_method_options.acss_debit\":{\"ret_btype\":\"text\",\"caption\":\"body object payment_settings payment_method_options acss_debit\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"payment_settings\",\"payment_method_options\",\"acss_debit\"]},\"_wf_body.data.object.payment_settings.payment_method_options.bancontact\":{\"ret_btype\":\"text\",\"caption\":\"body object payment_settings payment_method_options bancontact\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"payment_settings\",\"payment_method_options\",\"bancontact\"]},\"_wf_body.data.object.payment_settings.payment_method_options.card.request_three_d_secure\":{\"ret_btype\":\"text\",\"caption\":\"body object payment_settings payment_method_options card request_three_d_secure\",\"sample_value\":\"string value\",\"path\":[\"body\",\"data\",\"object\",\"payment_settings\",\"payment_method_options\",\"card\",\"request_three_d_secure\"]},\"_wf_body.data.object.payment_settings.payment_method_options.customer_balance\":{\"ret_btype\":\"text\",\"caption\":\"body object payment_settings payment_method_options customer_balance\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"payment_settings\",\"payment_method_options\",\"customer_balance\"]},\"_wf_body.data.object.payment_settings.payment_method_options.konbini\":{\"ret_btype\":\"text\",\"caption\":\"body object payment_settings payment_method_options konbini\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"payment_settings\",\"payment_method_options\",\"konbini\"]},\"_wf_body.data.object.payment_settings.payment_method_options.payto\":{\"ret_btype\":\"text\",\"caption\":\"body object payment_settings payment_method_options payto\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"payment_settings\",\"payment_method_options\",\"payto\"]},\"_wf_body.data.object.payment_settings.payment_method_options.sepa_debit\":{\"ret_btype\":\"text\",\"caption\":\"body object payment_settings payment_method_options sepa_debit\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"payment_settings\",\"payment_method_options\",\"sepa_debit\"]},\"_wf_body.data.object.payment_settings.payment_method_options.us_bank_account\":{\"ret_btype\":\"text\",\"caption\":\"body object payment_settings payment_method_options us_bank_account\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"payment_settings\",\"payment_method_options\",\"us_bank_account\"]},\"_wf_body.data.object.payment_settings.payment_method_types\":{\"ret_btype\":\"list.text\",\"caption\":\"body object payment_settings payment_method_types\",\"sample_value\":\"string value\",\"path\":[\"body\",\"data\",\"object\",\"payment_settings\",\"payment_method_types\"]},\"_wf_body.data.object.period_end\":{\"ret_btype\":\"number\",\"caption\":\"body object period_end\",\"sample_value\":1773906876,\"path\":[\"body\",\"data\",\"object\",\"period_end\"]},\"_wf_body.data.object.period_start\":{\"ret_btype\":\"number\",\"caption\":\"body object period_start\",\"sample_value\":1771487676,\"path\":[\"body\",\"data\",\"object\",\"period_start\"]},\"_wf_body.data.object.post_payment_credit_notes_amount\":{\"ret_btype\":\"number\",\"caption\":\"body object post_payment_credit_notes_amount\",\"sample_value\":0,\"path\":[\"body\",\"data\",\"object\",\"post_payment_credit_notes_amount\"]},\"_wf_body.data.object.pre_payment_credit_notes_amount\":{\"ret_btype\":\"number\",\"caption\":\"body object pre_payment_credit_notes_amount\",\"sample_value\":0,\"path\":[\"body\",\"data\",\"object\",\"pre_payment_credit_notes_amount\"]},\"_wf_body.data.object.receipt_number\":{\"ret_btype\":\"text\",\"caption\":\"body object receipt_number\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"receipt_number\"]},\"_wf_body.data.object.rendering\":{\"ret_btype\":\"text\",\"caption\":\"body object rendering\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"rendering\"]},\"_wf_body.data.object.shipping_cost\":{\"ret_btype\":\"text\",\"caption\":\"body object shipping_cost\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"shipping_cost\"]},\"_wf_body.data.object.shipping_details\":{\"ret_btype\":\"text\",\"caption\":\"body object shipping_details\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"shipping_details\"]},\"_wf_body.data.object.starting_balance\":{\"ret_btype\":\"number\",\"caption\":\"body object starting_balance\",\"sample_value\":0,\"path\":[\"body\",\"data\",\"object\",\"starting_balance\"]},\"_wf_body.data.object.statement_descriptor\":{\"ret_btype\":\"text\",\"caption\":\"body object statement_descriptor\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"statement_descriptor\"]},\"_wf_body.data.object.status\":{\"ret_btype\":\"text\",\"caption\":\"body object status\",\"sample_value\":\"string value\",\"path\":[\"body\",\"data\",\"object\",\"status\"]},\"_wf_body.data.object.status_transitions.finalized_at\":{\"ret_btype\":\"number\",\"caption\":\"body object status_transitions finalized_at\",\"sample_value\":1773910476,\"path\":[\"body\",\"data\",\"object\",\"status_transitions\",\"finalized_at\"]},\"_wf_body.data.object.status_transitions.marked_uncollectible_at\":{\"ret_btype\":\"text\",\"caption\":\"body object status_transitions marked_uncollectible_at\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"status_transitions\",\"marked_uncollectible_at\"]},\"_wf_body.data.object.status_transitions.paid_at\":{\"ret_btype\":\"number\",\"caption\":\"body object status_transitions paid_at\",\"sample_value\":1773910476,\"path\":[\"body\",\"data\",\"object\",\"status_transitions\",\"paid_at\"]},\"_wf_body.data.object.status_transitions.voided_at\":{\"ret_btype\":\"text\",\"caption\":\"body object status_transitions voided_at\",\"sample_value\":null,\"path\":[\"body\",\"data\",\"object\",\"status_transitions\",\"voided_at\"]},\"_wf_body.data.object.subtotal\":{\"ret_btype\":\"number\",\"caption\":\"body object subtotal\",\"sample_value\":6000,\"path\":[\"body\",\"data\",\"object\",\"subtotal\"]},\"_wf_body.data.object.subtotal_excluding_tax\":{\"ret_btype\":\"number\",\"caption\":\"body object subtotal_excluding_tax\",\"sample_value\":6000,\"path\":[\"body\",\"data\",\"object\",\"subtotal_excluding_tax\"]},\"_wf_body.data.object.test_clock\":{\"ret_btype\":\"text\",\"caption\":\"body object test_clock\",\"sample_value\":\"string value\",\"path\":[\"body\",\"data\",\"object\",\"test_clock\"]},\"_wf_body.data.object.total\":{\"ret_btype\":\"number\",\"caption\":\"body object total\",\"sample_value\":6000,\"path\":[\"body\",\"data\",\"object\",\"total\"]},\"_wf_body.data.object.total_excluding_tax\":{\"ret_btype\":\"number\",\"caption\":\"body object total_excluding_tax\",\"sample_value\":6000,\"path\":[\"body\",\"data\",\"object\",\"total_excluding_tax\"]},\"_wf_body.data.object.webhooks_delivered_at\":{\"ret_btype\":\"number\",\"caption\":\"body object webhooks_delivered_at\",\"sample_value\":1773906876,\"path\":[\"body\",\"data\",\"object\",\"webhooks_delivered_at\"]},\"_wf_body.livemode\":{\"ret_btype\":\"boolean\",\"caption\":\"body livemode\",\"sample_value\":false,\"path\":[\"body\",\"livemode\"]},\"_wf_body.pending_webhooks\":{\"ret_btype\":\"number\",\"caption\":\"body pending_webhooks\",\"sample_value\":1,\"path\":[\"body\",\"pending_webhooks\"]},\"_wf_body.request.id\":{\"ret_btype\":\"text\",\"caption\":\"body request id\",\"sample_value\":null,\"path\":[\"body\",\"request\",\"id\"]},\"_wf_body.request.idempotency_key\":{\"ret_btype\":\"text\",\"caption\":\"body request idempotency_key\",\"sample_value\":null,\"path\":[\"body\",\"request\",\"idempotency_key\"]},\"_wf_body.type\":{\"ret_btype\":\"text\",\"caption\":\"body type\",\"sample_value\":\"string value\",\"path\":[\"body\",\"type\"]},\"_wf_headers.cf-ray\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-ray\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-ray\"]},\"_wf_headers.x-forwarded-for\":{\"ret_btype\":\"text\",\"caption\":\"headers x-forwarded-for\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-forwarded-for\"]},\"_wf_headers.host\":{\"ret_btype\":\"text\",\"caption\":\"headers host\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"host\"]},\"_wf_headers.stripe-signature\":{\"ret_btype\":\"text\",\"caption\":\"headers stripe-signature\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"stripe-signature\"]},\"_wf_headers.accept-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers accept-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"accept-encoding\"]},\"_wf_headers.x-forwarded-proto\":{\"ret_btype\":\"text\",\"caption\":\"headers x-forwarded-proto\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-forwarded-proto\"]},\"_wf_headers.cdn-loop\":{\"ret_btype\":\"text\",\"caption\":\"headers cdn-loop\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cdn-loop\"]},\"_wf_headers.accept\":{\"ret_btype\":\"text\",\"caption\":\"headers accept\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"accept\"]},\"_wf_headers.cf-visitor\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-visitor\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-visitor\"]},\"_wf_headers.user-agent\":{\"ret_btype\":\"text\",\"caption\":\"headers user-agent\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"user-agent\"]},\"_wf_headers.cache-control\":{\"ret_btype\":\"text\",\"caption\":\"headers cache-control\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cache-control\"]},\"_wf_headers.cf-connecting-ip\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-connecting-ip\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-connecting-ip\"]},\"_wf_headers.content-type\":{\"ret_btype\":\"text\",\"caption\":\"headers content-type\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-type\"]},\"_wf_headers.cf-ipcountry\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-ipcountry\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-ipcountry\"]},\"_wf_headers.connection\":{\"ret_btype\":\"text\",\"caption\":\"headers connection\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"connection\"]},\"_wf_headers.content-length\":{\"ret_btype\":\"text\",\"caption\":\"headers content-length\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-length\"]},\"_wf_headers.x-forwarded-port\":{\"ret_btype\":\"text\",\"caption\":\"headers x-forwarded-port\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-forwarded-port\"]},\"_wf_headers.x-forwarded-host\":{\"ret_btype\":\"text\",\"caption\":\"headers x-forwarded-host\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-forwarded-host\"]}}},\"bTxZb.body.data.object.lines.data\":{\"caption\":\"Request Data body data object lines data\",\"fields\":{\"_wf_id\":{\"ret_btype\":\"text\",\"caption\":\"id\",\"sample_value\":\"string value\",\"path\":[\"id\"]},\"_wf_object\":{\"ret_btype\":\"text\",\"caption\":\"object\",\"sample_value\":\"string value\",\"path\":[\"object\"]},\"_wf_amount\":{\"ret_btype\":\"number\",\"caption\":\"amount\",\"sample_value\":6000,\"path\":[\"amount\"]},\"_wf_currency\":{\"ret_btype\":\"text\",\"caption\":\"currency\",\"sample_value\":\"string value\",\"path\":[\"currency\"]},\"_wf_description\":{\"ret_btype\":\"text\",\"caption\":\"description\",\"sample_value\":\"string value\",\"path\":[\"description\"]},\"_wf_discountable\":{\"ret_btype\":\"boolean\",\"caption\":\"discountable\",\"sample_value\":true,\"path\":[\"discountable\"]},\"_wf_invoice\":{\"ret_btype\":\"text\",\"caption\":\"invoice\",\"sample_value\":\"string value\",\"path\":[\"invoice\"]},\"_wf_livemode\":{\"ret_btype\":\"boolean\",\"caption\":\"livemode\",\"sample_value\":false,\"path\":[\"livemode\"]},\"_wf_parent.invoice_item_details\":{\"ret_btype\":\"text\",\"caption\":\"parent invoice_item_details\",\"sample_value\":null,\"path\":[\"parent\",\"invoice_item_details\"]},\"_wf_parent.subscription_item_details.invoice_item\":{\"ret_btype\":\"text\",\"caption\":\"parent subscription_item_details invoice_item\",\"sample_value\":null,\"path\":[\"parent\",\"subscription_item_details\",\"invoice_item\"]},\"_wf_parent.subscription_item_details.proration\":{\"ret_btype\":\"boolean\",\"caption\":\"parent subscription_item_details proration\",\"sample_value\":false,\"path\":[\"parent\",\"subscription_item_details\",\"proration\"]},\"_wf_parent.subscription_item_details.proration_details.credited_items\":{\"ret_btype\":\"text\",\"caption\":\"parent subscription_item_details proration_details credited_items\",\"sample_value\":null,\"path\":[\"parent\",\"subscription_item_details\",\"proration_details\",\"credited_items\"]},\"_wf_parent.subscription_item_details.subscription\":{\"ret_btype\":\"text\",\"caption\":\"parent subscription_item_details subscription\",\"sample_value\":\"string value\",\"path\":[\"parent\",\"subscription_item_details\",\"subscription\"]},\"_wf_parent.subscription_item_details.subscription_item\":{\"ret_btype\":\"text\",\"caption\":\"parent subscription_item_details subscription_item\",\"sample_value\":\"string value\",\"path\":[\"parent\",\"subscription_item_details\",\"subscription_item\"]},\"_wf_parent.type\":{\"ret_btype\":\"text\",\"caption\":\"parent type\",\"sample_value\":\"string value\",\"path\":[\"parent\",\"type\"]},\"_wf_period.end\":{\"ret_btype\":\"number\",\"caption\":\"period end\",\"sample_value\":1776585276,\"path\":[\"period\",\"end\"]},\"_wf_period.start\":{\"ret_btype\":\"number\",\"caption\":\"period start\",\"sample_value\":1773906876,\"path\":[\"period\",\"start\"]},\"_wf_pricing.price_details.price\":{\"ret_btype\":\"text\",\"caption\":\"pricing price_details price\",\"sample_value\":\"string value\",\"path\":[\"pricing\",\"price_details\",\"price\"]},\"_wf_pricing.price_details.product\":{\"ret_btype\":\"text\",\"caption\":\"pricing price_details product\",\"sample_value\":\"string value\",\"path\":[\"pricing\",\"price_details\",\"product\"]},\"_wf_pricing.type\":{\"ret_btype\":\"text\",\"caption\":\"pricing type\",\"sample_value\":\"string value\",\"path\":[\"pricing\",\"type\"]},\"_wf_pricing.unit_amount_decimal\":{\"ret_btype\":\"text\",\"caption\":\"pricing unit_amount_decimal\",\"sample_value\":\"string value\",\"path\":[\"pricing\",\"unit_amount_decimal\"]},\"_wf_quantity\":{\"ret_btype\":\"number\",\"caption\":\"quantity\",\"sample_value\":1,\"path\":[\"quantity\"]},\"_wf_subtotal\":{\"ret_btype\":\"number\",\"caption\":\"subtotal\",\"sample_value\":6000,\"path\":[\"subtotal\"]}}}}}",
    "condition": {
      "next": {
        "next": {
          "args": {
            "next": {
              "next": {
                "properties": {
                  "separator": {
                    "entries": {
                      "0": "\n"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "split_by",
                "is_slidable": true
              },
              "type": "Message",
              "name": "ips",
              "is_slidable": false
            },
            "properties": {
              "option_set": "option.stripe_allowed_ips__os_",
              "option_value": "allowed_ips"
            },
            "type": "OptionValue"
          },
          "type": "Message",
          "name": "is_contained_by_list",
          "is_slidable": false
        },
        "type": "Message",
        "name": "_wf_headers.cf-connecting-ip",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "api_wf_data.bTxZL",
        "event_id": "bTxZL",
        "param_id": "_wf_request_data",
        "param_name": "_wf_request_data"
      },
      "type": "APIEventParameter",
      "is_slidable": false
    },
    "expose": true,
    "wf_name": "subscription_payment_success",
    "raw_data": "{\"body\":{\"id\":\"evt_1T2YzG53ewXi1nuCe0c6PZ2F\",\"object\":\"event\",\"api_version\":\"2025-12-15.clover\",\"created\":1771514273,\"data\":{\"object\":{\"id\":\"in_1T2Yz853ewXi1nuCgKVKaA6r\",\"object\":\"invoice\",\"account_country\":\"US\",\"account_name\":\"Playgram, Inc.\",\"account_tax_ids\":null,\"amount_due\":6000,\"amount_overpaid\":0,\"amount_paid\":6000,\"amount_remaining\":0,\"amount_shipping\":0,\"application\":null,\"attempt_count\":1,\"attempted\":true,\"auto_advance\":false,\"automatic_tax\":{\"disabled_reason\":null,\"enabled\":false,\"liability\":null,\"provider\":null,\"status\":null},\"automatically_finalizes_at\":null,\"billing_reason\":\"subscription_cycle\",\"collection_method\":\"charge_automatically\",\"created\":1773906876,\"currency\":\"usd\",\"custom_fields\":null,\"customer\":\"cus_U0T0Dkq12DP6NB\",\"customer_account\":null,\"customer_address\":{\"city\":null,\"country\":\"TH\",\"line1\":null,\"line2\":null,\"postal_code\":null,\"state\":null},\"customer_email\":\"test_user@gmail.com\",\"customer_name\":\"Julia Suhovici\",\"customer_phone\":null,\"customer_shipping\":null,\"customer_tax_exempt\":\"none\",\"customer_tax_ids\":[],\"default_payment_method\":null,\"default_source\":null,\"default_tax_rates\":[],\"description\":null,\"discounts\":[],\"due_date\":null,\"effective_at\":1773910476,\"ending_balance\":0,\"footer\":null,\"from_invoice\":null,\"hosted_invoice_url\":\"https://invoice.stripe.com/i/acct_1Smw7j53ewXi1nuC/test_YWNjdF8xU213N2o1M2V3WGkxbnVDLF9VMGE5SGZKUjdQQ3l6TVNTWExpSlQxd2hVY0JORlMyLDE2MjA1NTA3NA0200td2bENig?s=ap\",\"invoice_pdf\":\"https://pay.stripe.com/invoice/acct_1Smw7j53ewXi1nuC/test_YWNjdF8xU213N2o1M2V3WGkxbnVDLF9VMGE5SGZKUjdQQ3l6TVNTWExpSlQxd2hVY0JORlMyLDE2MjA1NTA3NA0200td2bENig/pdf?s=ap\",\"issuer\":{\"type\":\"self\"},\"last_finalization_error\":null,\"latest_revision\":null,\"lines\":{\"object\":\"list\",\"data\":[{\"id\":\"il_1TCbPc53ewXi1nuC8uH9R2qp\",\"object\":\"line_item\",\"amount\":6000,\"currency\":\"usd\",\"description\":\"1 \u00d7 Pro (at $60.00 / month)\",\"discount_amounts\":[],\"discountable\":true,\"discounts\":[],\"invoice\":\"in_1T2Yz853ewXi1nuCgKVKaA6r\",\"livemode\":false,\"metadata\":{},\"parent\":{\"invoice_item_details\":null,\"subscription_item_details\":{\"invoice_item\":null,\"proration\":false,\"proration_details\":{\"credited_items\":null},\"subscription\":\"sub_1T2S4J53ewXi1nuC6HyQRY10\",\"subscription_item\":\"si_U0T0qkWjwPQlrw\"},\"type\":\"subscription_item_details\"},\"period\":{\"end\":1776585276,\"start\":1773906876},\"pretax_credit_amounts\":[],\"pricing\":{\"price_details\":{\"price\":\"price_1T0MQ453ewXi1nuC9aO37EI2\",\"product\":\"prod_TyJ21sJaD1iJf2\"},\"type\":\"price_details\",\"unit_amount_decimal\":\"6000\"},\"quantity\":1,\"subtotal\":6000,\"taxes\":[]}],\"has_more\":false,\"total_count\":1,\"url\":\"/v1/invoices/in_1T2Yz853ewXi1nuCgKVKaA6r/lines\"},\"livemode\":false,\"metadata\":{},\"next_payment_attempt\":null,\"number\":\"LLZTLT7W-0002\",\"on_behalf_of\":null,\"parent\":{\"quote_details\":null,\"subscription_details\":{\"metadata\":{},\"subscription\":\"sub_1T2S4J53ewXi1nuC6HyQRY10\"},\"type\":\"subscription_details\"},\"payment_settings\":{\"default_mandate\":null,\"payment_method_options\":{\"acss_debit\":null,\"bancontact\":null,\"card\":{\"request_three_d_secure\":\"automatic\"},\"customer_balance\":null,\"konbini\":null,\"payto\":null,\"sepa_debit\":null,\"us_bank_account\":null},\"payment_method_types\":[\"card\"]},\"period_end\":1773906876,\"period_start\":1771487676,\"post_payment_credit_notes_amount\":0,\"pre_payment_credit_notes_amount\":0,\"receipt_number\":null,\"rendering\":null,\"shipping_cost\":null,\"shipping_details\":null,\"starting_balance\":0,\"statement_descriptor\":null,\"status\":\"paid\",\"status_transitions\":{\"finalized_at\":1773910476,\"marked_uncollectible_at\":null,\"paid_at\":1773910476,\"voided_at\":null},\"subtotal\":6000,\"subtotal_excluding_tax\":6000,\"test_clock\":\"clock_1T2Yz353ewXi1nuC30yYJ3vc\",\"total\":6000,\"total_discount_amounts\":[],\"total_excluding_tax\":6000,\"total_pretax_credit_amounts\":[],\"total_taxes\":[],\"webhooks_delivered_at\":1773906876}},\"livemode\":false,\"pending_webhooks\":1,\"request\":{\"id\":null,\"idempotency_key\":null},\"type\":\"invoice.paid\"},\"headers\":{\"cf-ray\":\"9d06bbd5fba70ba9-PDX\",\"x-forwarded-for\":\"54.187.205.235,::ffff:104.23.160.73\",\"host\":\"kelvo-31884.bubbleapps.io\",\"stripe-signature\":\"t=1771514274,v1=d07e4a96bbf00c32f5d6e977a8a7be5c9febdd390efca89fcf3b6b2e617b05e4,v0=4bc98ba33171fa9c150cb7c3e27b13c431a72e12097d95e6f9763e227627669a\",\"accept-encoding\":\"gzip, br\",\"x-forwarded-proto\":\"https,https\",\"cdn-loop\":\"cloudflare; loops=1\",\"accept\":\"*/*; q=0.5, application/json\",\"cf-visitor\":\"{\\\"scheme\\\":\\\"https\\\"}\",\"user-agent\":\"Stripe/1.0 (+https://stripe.com/docs/webhooks)\",\"cache-control\":\"no-cache\",\"cf-connecting-ip\":\"54.187.205.235\",\"content-type\":\"application/json; charset=utf-8\",\"cf-ipcountry\":\"US\",\"connection\":\"Keep-Alive\",\"content-length\":\"5690\",\"x-forwarded-port\":\"443\",\"x-forwarded-host\":\"kelvo-31884.bubbleapps.io\"}}",
    "parameter_def": "auto",
    "auth_unecessary": true,
    "include_headers": true,
    "waiting_for_data": false,
    "ignore_privacy_rules": true
  },
  "type": "APIEvent",
  "id": "bTxZb",
  "name": "[STRIPE] subscription_payment_success",
  "actions": {
    "0": {
      "properties": {
        "arguments": {
          "0": {
            "param_id": "bTxdN",
            "arg_value": {
              "next": {
                "type": "Message",
                "name": "_wf_body.id",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "api_wf_data.bTxZL",
                "event_id": "bTxZL",
                "param_id": "_wf_request_data",
                "param_name": "_wf_request_data"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          }
        },
        "custom_event": "bTxcF"
      },
      "type": "TriggerCustomEvent",
      "id": "bTxef"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_true",
              "is_slidable": false
            },
            "type": "Message",
            "name": "bTxdR",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTxef"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "active_boolean",
            "value": true,
            "action": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "grace_period_start_date",
            "value": {
              "type": "Empty"
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "next": {
            "next": {
              "type": "Message",
              "name": "organization_workspace1_custom_organization",
              "is_slidable": false
            },
            "type": "Message",
            "name": "first_element",
            "is_slidable": false
          },
          "properties": {
            "constraints": {
              "0": {
                "key": "subscription_id_text",
                "value": {
                  "entries": {
                    "0": {
                      "next": {
                        "type": "Message",
                        "name": "_wf_body.data.object.parent.subscription_details.subscription",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "api_wf_data.bTxZL",
                        "event_id": "bTxZL",
                        "param_id": "_wf_request_data",
                        "param_name": "_wf_request_data"
                      },
                      "type": "APIEventParameter",
                      "is_slidable": false
                    }
                  },
                  "type": "TextExpression"
                },
                "constraint_type": "equals"
              }
            },
            "type_to_find": "custom.subscription"
          },
          "type": "Search"
        }
      },
      "type": "ChangeThing",
      "id": "bTxZd",
      "name": "Make changes to Organization Workspace..."
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "type": "Message",
                "name": "is_false",
                "is_slidable": false
              },
              "type": "Message",
              "name": "annualy_boolean",
              "is_slidable": false
            },
            "type": "Message",
            "name": "subscription_custom_subscription",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTxZd"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "current_period_end_date",
            "value": {
              "next": {
                "args": 1,
                "type": "Message",
                "name": "plus_months",
                "is_slidable": false
              },
              "properties": {
                "name": "Current Date/Time"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "next": {
            "type": "Message",
            "name": "subscription_custom_subscription",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTxZd"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTylB0"
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "type": "Message",
                "name": "is_true",
                "is_slidable": false
              },
              "type": "Message",
              "name": "annualy_boolean",
              "is_slidable": false
            },
            "type": "Message",
            "name": "subscription_custom_subscription",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTxZd"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "current_period_end_date",
            "value": {
              "next": {
                "args": 1,
                "type": "Message",
                "name": "plus_years",
                "is_slidable": false
              },
              "properties": {
                "name": "Current Date/Time"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "next": {
            "type": "Message",
            "name": "subscription_custom_subscription",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTxZd"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTylL0"
    }
  }
};
