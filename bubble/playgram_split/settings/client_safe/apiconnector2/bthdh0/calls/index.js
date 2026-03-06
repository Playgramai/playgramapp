import { Deep_research } from './deep_research.js';
import { Stream_with_canvas } from './stream_with_canvas.js';
import { MINIMAL_Stream_with_canvas } from './minimal_stream_with_canvas.js';
import { Generate_file_test_Stream_with_canvas } from './generate_file_test_stream_with_canvas.js';
import { Normalization_single_message } from './normalization_single_message.js';
import { Generate_file_test_Get_File } from './generate_file_test_get_file.js';
import { Deep_research_status_check } from './deep_research_status_check.js';
import { Sumarization } from './sumarization.js';

export const calls = {
  "bTNKF": Deep_research,
  "bTTfD": Stream_with_canvas,
  "bTcMx0": MINIMAL_Stream_with_canvas,
  "bTjzD": Generate_file_test_Stream_with_canvas,
  "bTHED0": Normalization_single_message,
  "bTjzE": Generate_file_test_Get_File,
  "bTOnW": Deep_research_status_check,
  "bTHHz": Sumarization,
  "bTHDr0": {
    "body": "{\n    \"input\": <text>,\n    \"model\": \"text-embedding-3-small\"\n  }",
    "name": "Embeddings (action)",
    "url": "https://api.openai.com/v1/embeddings",
    "rank": 1,
    "types": "{\"bTHDh0.bTHDr0\":{\"caption\":\"Embeddings (action)\",\"fields\":{\"_api_c2_body.object\":{\"ret_btype\":\"text\",\"caption\":\"body object\",\"sample_value\":\"string value\",\"path\":[\"body\",\"object\"]},\"_api_c2_body.data\":{\"ret_btype\":\"list.api.apiconnector2.bTHDh0.bTHDr0.body.data\",\"caption\":\"body\",\"path\":[\"body\",\"data\"]},\"_api_c2_body.model\":{\"ret_btype\":\"text\",\"caption\":\"body model\",\"sample_value\":\"string value\",\"path\":[\"body\",\"model\"]},\"_api_c2_body.usage.prompt_tokens\":{\"ret_btype\":\"number\",\"caption\":\"body usage prompt_tokens\",\"sample_value\":9,\"path\":[\"body\",\"usage\",\"prompt_tokens\"]},\"_api_c2_body.usage.total_tokens\":{\"ret_btype\":\"number\",\"caption\":\"body usage total_tokens\",\"sample_value\":9,\"path\":[\"body\",\"usage\",\"total_tokens\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]},\"_api_c2_headers.date\":{\"ret_btype\":\"text\",\"caption\":\"headers date\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"date\"]},\"_api_c2_headers.content-type\":{\"ret_btype\":\"text\",\"caption\":\"headers content-type\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-type\"]},\"_api_c2_headers.transfer-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers transfer-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"transfer-encoding\"]},\"_api_c2_headers.connection\":{\"ret_btype\":\"text\",\"caption\":\"headers connection\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"connection\"]},\"_api_c2_headers.access-control-allow-origin\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-origin\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-origin\"]},\"_api_c2_headers.access-control-expose-headers\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-expose-headers\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-expose-headers\"]},\"_api_c2_headers.openai-model\":{\"ret_btype\":\"text\",\"caption\":\"headers openai-model\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"openai-model\"]},\"_api_c2_headers.openai-organization\":{\"ret_btype\":\"text\",\"caption\":\"headers openai-organization\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"openai-organization\"]},\"_api_c2_headers.openai-processing-ms\":{\"ret_btype\":\"text\",\"caption\":\"headers openai-processing-ms\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"openai-processing-ms\"]},\"_api_c2_headers.openai-project\":{\"ret_btype\":\"text\",\"caption\":\"headers openai-project\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"openai-project\"]},\"_api_c2_headers.openai-version\":{\"ret_btype\":\"text\",\"caption\":\"headers openai-version\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"openai-version\"]},\"_api_c2_headers.strict-transport-security\":{\"ret_btype\":\"text\",\"caption\":\"headers strict-transport-security\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"strict-transport-security\"]},\"_api_c2_headers.via\":{\"ret_btype\":\"text\",\"caption\":\"headers via\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"via\"]},\"_api_c2_headers.x-envoy-upstream-service-time\":{\"ret_btype\":\"text\",\"caption\":\"headers x-envoy-upstream-service-time\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-envoy-upstream-service-time\"]},\"_api_c2_headers.x-ratelimit-limit-requests\":{\"ret_btype\":\"text\",\"caption\":\"headers x-ratelimit-limit-requests\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-ratelimit-limit-requests\"]},\"_api_c2_headers.x-ratelimit-limit-tokens\":{\"ret_btype\":\"text\",\"caption\":\"headers x-ratelimit-limit-tokens\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-ratelimit-limit-tokens\"]},\"_api_c2_headers.x-ratelimit-remaining-requests\":{\"ret_btype\":\"text\",\"caption\":\"headers x-ratelimit-remaining-requests\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-ratelimit-remaining-requests\"]},\"_api_c2_headers.x-ratelimit-remaining-tokens\":{\"ret_btype\":\"text\",\"caption\":\"headers x-ratelimit-remaining-tokens\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-ratelimit-remaining-tokens\"]},\"_api_c2_headers.x-ratelimit-reset-requests\":{\"ret_btype\":\"text\",\"caption\":\"headers x-ratelimit-reset-requests\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-ratelimit-reset-requests\"]},\"_api_c2_headers.x-ratelimit-reset-tokens\":{\"ret_btype\":\"text\",\"caption\":\"headers x-ratelimit-reset-tokens\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-ratelimit-reset-tokens\"]},\"_api_c2_headers.x-request-id\":{\"ret_btype\":\"text\",\"caption\":\"headers x-request-id\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-request-id\"]},\"_api_c2_headers.x-openai-proxy-wasm\":{\"ret_btype\":\"text\",\"caption\":\"headers x-openai-proxy-wasm\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-openai-proxy-wasm\"]},\"_api_c2_headers.cf-cache-status\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-cache-status\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-cache-status\"]},\"_api_c2_headers.set-cookie\":{\"ret_btype\":\"list.text\",\"caption\":\"headers set-cookie\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"set-cookie\"]},\"_api_c2_headers.x-content-type-options\":{\"ret_btype\":\"text\",\"caption\":\"headers x-content-type-options\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-content-type-options\"]},\"_api_c2_headers.server\":{\"ret_btype\":\"text\",\"caption\":\"headers server\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"server\"]},\"_api_c2_headers.cf-ray\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-ray\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-ray\"]},\"_api_c2_headers.content-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers content-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-encoding\"]},\"_api_c2_headers.alt-svc\":{\"ret_btype\":\"text\",\"caption\":\"headers alt-svc\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"alt-svc\"]}}},\"bTHDh0.bTHDr0.body.data\":{\"caption\":\"Embeddings (action) body data\",\"fields\":{\"_api_c2_object\":{\"ret_btype\":\"text\",\"caption\":\"object\",\"sample_value\":\"string value\",\"path\":[\"object\"]},\"_api_c2_index\":{\"ret_btype\":\"number\",\"caption\":\"index\",\"sample_value\":0,\"path\":[\"index\"]},\"_api_c2_embedding\":{\"ret_btype\":\"list.text\",\"caption\":\"embedding\",\"sample_value\":-0.004656018,\"path\":[\"embedding\"]}}}}",
    "method": "post",
    "ret_value": "api.apiconnector2.bTHDh0.bTHDr0",
    "publish_as": "action",
    "wrap_error": true,
    "body_params": {
      "bTHDs0": {
        "key": "text",
        "value": "\"User requested a list of the target audience based on our project\"",
        "private": false
      }
    },
    "get_headers": true,
    "initialized": true,
    "should_reinitialize": false,
    "url_cant_be_private": true
  },
  "bTHDm0": {
    "body": "{\n    \"input\": <text>,\n    \"model\": \"text-embedding-3-small\"\n  }",
    "name": "Embeddings",
    "url": "https://api.openai.com/v1/embeddings",
    "rank": 0,
    "types": "{\"bTHDh0.bTHDm0\":{\"caption\":\"Embedding\",\"fields\":{\"_api_c2_body.object\":{\"ret_btype\":\"text\",\"caption\":\"body object\",\"sample_value\":\"string value\",\"path\":[\"body\",\"object\"]},\"_api_c2_body.data\":{\"ret_btype\":\"list.api.apiconnector2.bTHDh0.bTHDm0.body.data\",\"caption\":\"body\",\"path\":[\"body\",\"data\"]},\"_api_c2_body.model\":{\"ret_btype\":\"text\",\"caption\":\"body model\",\"sample_value\":\"string value\",\"path\":[\"body\",\"model\"]},\"_api_c2_body.usage.prompt_tokens\":{\"ret_btype\":\"number\",\"caption\":\"body usage prompt_tokens\",\"sample_value\":9,\"path\":[\"body\",\"usage\",\"prompt_tokens\"]},\"_api_c2_body.usage.total_tokens\":{\"ret_btype\":\"number\",\"caption\":\"body usage total_tokens\",\"sample_value\":9,\"path\":[\"body\",\"usage\",\"total_tokens\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]},\"_api_c2_headers.date\":{\"ret_btype\":\"text\",\"caption\":\"headers date\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"date\"]},\"_api_c2_headers.content-type\":{\"ret_btype\":\"text\",\"caption\":\"headers content-type\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-type\"]},\"_api_c2_headers.transfer-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers transfer-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"transfer-encoding\"]},\"_api_c2_headers.connection\":{\"ret_btype\":\"text\",\"caption\":\"headers connection\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"connection\"]},\"_api_c2_headers.access-control-allow-origin\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-origin\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-origin\"]},\"_api_c2_headers.access-control-expose-headers\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-expose-headers\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-expose-headers\"]},\"_api_c2_headers.openai-model\":{\"ret_btype\":\"text\",\"caption\":\"headers openai-model\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"openai-model\"]},\"_api_c2_headers.openai-organization\":{\"ret_btype\":\"text\",\"caption\":\"headers openai-organization\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"openai-organization\"]},\"_api_c2_headers.openai-processing-ms\":{\"ret_btype\":\"text\",\"caption\":\"headers openai-processing-ms\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"openai-processing-ms\"]},\"_api_c2_headers.openai-project\":{\"ret_btype\":\"text\",\"caption\":\"headers openai-project\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"openai-project\"]},\"_api_c2_headers.openai-version\":{\"ret_btype\":\"text\",\"caption\":\"headers openai-version\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"openai-version\"]},\"_api_c2_headers.strict-transport-security\":{\"ret_btype\":\"text\",\"caption\":\"headers strict-transport-security\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"strict-transport-security\"]},\"_api_c2_headers.via\":{\"ret_btype\":\"text\",\"caption\":\"headers via\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"via\"]},\"_api_c2_headers.x-ratelimit-limit-requests\":{\"ret_btype\":\"text\",\"caption\":\"headers x-ratelimit-limit-requests\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-ratelimit-limit-requests\"]},\"_api_c2_headers.x-ratelimit-limit-tokens\":{\"ret_btype\":\"text\",\"caption\":\"headers x-ratelimit-limit-tokens\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-ratelimit-limit-tokens\"]},\"_api_c2_headers.x-ratelimit-remaining-requests\":{\"ret_btype\":\"text\",\"caption\":\"headers x-ratelimit-remaining-requests\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-ratelimit-remaining-requests\"]},\"_api_c2_headers.x-ratelimit-remaining-tokens\":{\"ret_btype\":\"text\",\"caption\":\"headers x-ratelimit-remaining-tokens\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-ratelimit-remaining-tokens\"]},\"_api_c2_headers.x-ratelimit-reset-requests\":{\"ret_btype\":\"text\",\"caption\":\"headers x-ratelimit-reset-requests\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-ratelimit-reset-requests\"]},\"_api_c2_headers.x-ratelimit-reset-tokens\":{\"ret_btype\":\"text\",\"caption\":\"headers x-ratelimit-reset-tokens\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-ratelimit-reset-tokens\"]},\"_api_c2_headers.x-request-id\":{\"ret_btype\":\"text\",\"caption\":\"headers x-request-id\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-request-id\"]},\"_api_c2_headers.x-openai-proxy-wasm\":{\"ret_btype\":\"text\",\"caption\":\"headers x-openai-proxy-wasm\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-openai-proxy-wasm\"]},\"_api_c2_headers.cf-cache-status\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-cache-status\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-cache-status\"]},\"_api_c2_headers.set-cookie\":{\"ret_btype\":\"list.text\",\"caption\":\"headers set-cookie\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"set-cookie\"]},\"_api_c2_headers.x-content-type-options\":{\"ret_btype\":\"text\",\"caption\":\"headers x-content-type-options\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-content-type-options\"]},\"_api_c2_headers.server\":{\"ret_btype\":\"text\",\"caption\":\"headers server\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"server\"]},\"_api_c2_headers.cf-ray\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-ray\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-ray\"]},\"_api_c2_headers.content-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers content-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-encoding\"]},\"_api_c2_headers.alt-svc\":{\"ret_btype\":\"text\",\"caption\":\"headers alt-svc\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"alt-svc\"]}}},\"bTHDh0.bTHDm0.body.data\":{\"caption\":\"Embeddings body data\",\"fields\":{\"_api_c2_object\":{\"ret_btype\":\"text\",\"caption\":\"object\",\"sample_value\":\"string value\",\"path\":[\"object\"]},\"_api_c2_index\":{\"ret_btype\":\"number\",\"caption\":\"index\",\"sample_value\":0,\"path\":[\"index\"]},\"_api_c2_embedding\":{\"ret_btype\":\"list.text\",\"caption\":\"embedding\",\"sample_value\":0.019359013,\"path\":[\"embedding\"]}}}}",
    "method": "post",
    "ret_value": "api.apiconnector2.bTHDh0.bTHDm0",
    "publish_as": "data",
    "wrap_error": true,
    "body_params": {
      "bTHDn0": {
        "key": "text",
        "value": "\"The user asks what the target audience is.\"",
        "private": false
      }
    },
    "get_headers": true,
    "initialized": true,
    "response_time_ms": 2977,
    "must_reinitialize": false,
    "should_reinitialize": false,
    "url_cant_be_private": true,
    "response_status_code": 200
  },
  "bTPQr": {
    "body": "{\n\n\"file_ids\":[\"<file_id>\"]\n    \n}",
    "name": "Create vector store (File API)",
    "url": "https://api.openai.com/v1/vector_stores",
    "rank": 12,
    "types": "{\"bTHDh0.bTPQr\":{\"caption\":\"Create vector store (File API)\",\"fields\":{\"_api_c2_body.id\":{\"ret_btype\":\"text\",\"caption\":\"body id\",\"sample_value\":\"string value\",\"path\":[\"body\",\"id\"]},\"_api_c2_body.object\":{\"ret_btype\":\"text\",\"caption\":\"body object\",\"sample_value\":\"string value\",\"path\":[\"body\",\"object\"]},\"_api_c2_body.created_at\":{\"ret_btype\":\"number\",\"caption\":\"body created_at\",\"sample_value\":1762504018,\"path\":[\"body\",\"created_at\"]},\"_api_c2_body.name\":{\"ret_btype\":\"text\",\"caption\":\"body name\",\"sample_value\":null,\"path\":[\"body\",\"name\"]},\"_api_c2_body.description\":{\"ret_btype\":\"text\",\"caption\":\"body description\",\"sample_value\":null,\"path\":[\"body\",\"description\"]},\"_api_c2_body.usage_bytes\":{\"ret_btype\":\"number\",\"caption\":\"body usage_bytes\",\"sample_value\":0,\"path\":[\"body\",\"usage_bytes\"]},\"_api_c2_body.file_counts.in_progress\":{\"ret_btype\":\"number\",\"caption\":\"body file_counts in_progress\",\"sample_value\":1,\"path\":[\"body\",\"file_counts\",\"in_progress\"]},\"_api_c2_body.file_counts.completed\":{\"ret_btype\":\"number\",\"caption\":\"body file_counts completed\",\"sample_value\":0,\"path\":[\"body\",\"file_counts\",\"completed\"]},\"_api_c2_body.file_counts.failed\":{\"ret_btype\":\"number\",\"caption\":\"body file_counts failed\",\"sample_value\":0,\"path\":[\"body\",\"file_counts\",\"failed\"]},\"_api_c2_body.file_counts.cancelled\":{\"ret_btype\":\"number\",\"caption\":\"body file_counts cancelled\",\"sample_value\":0,\"path\":[\"body\",\"file_counts\",\"cancelled\"]},\"_api_c2_body.file_counts.total\":{\"ret_btype\":\"number\",\"caption\":\"body file_counts total\",\"sample_value\":1,\"path\":[\"body\",\"file_counts\",\"total\"]},\"_api_c2_body.status\":{\"ret_btype\":\"text\",\"caption\":\"body status\",\"sample_value\":\"string value\",\"path\":[\"body\",\"status\"]},\"_api_c2_body.expires_after\":{\"ret_btype\":\"text\",\"caption\":\"body expires_after\",\"sample_value\":null,\"path\":[\"body\",\"expires_after\"]},\"_api_c2_body.expires_at\":{\"ret_btype\":\"text\",\"caption\":\"body expires_at\",\"sample_value\":null,\"path\":[\"body\",\"expires_at\"]},\"_api_c2_body.last_active_at\":{\"ret_btype\":\"number\",\"caption\":\"body last_active_at\",\"sample_value\":1762504018,\"path\":[\"body\",\"last_active_at\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]},\"_api_c2_headers.date\":{\"ret_btype\":\"text\",\"caption\":\"headers date\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"date\"]},\"_api_c2_headers.content-type\":{\"ret_btype\":\"text\",\"caption\":\"headers content-type\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-type\"]},\"_api_c2_headers.transfer-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers transfer-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"transfer-encoding\"]},\"_api_c2_headers.connection\":{\"ret_btype\":\"text\",\"caption\":\"headers connection\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"connection\"]},\"_api_c2_headers.openai-version\":{\"ret_btype\":\"text\",\"caption\":\"headers openai-version\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"openai-version\"]},\"_api_c2_headers.openai-organization\":{\"ret_btype\":\"text\",\"caption\":\"headers openai-organization\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"openai-organization\"]},\"_api_c2_headers.openai-project\":{\"ret_btype\":\"text\",\"caption\":\"headers openai-project\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"openai-project\"]},\"_api_c2_headers.x-request-id\":{\"ret_btype\":\"text\",\"caption\":\"headers x-request-id\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-request-id\"]},\"_api_c2_headers.openai-processing-ms\":{\"ret_btype\":\"text\",\"caption\":\"headers openai-processing-ms\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"openai-processing-ms\"]},\"_api_c2_headers.x-envoy-upstream-service-time\":{\"ret_btype\":\"text\",\"caption\":\"headers x-envoy-upstream-service-time\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-envoy-upstream-service-time\"]},\"_api_c2_headers.x-openai-proxy-wasm\":{\"ret_btype\":\"text\",\"caption\":\"headers x-openai-proxy-wasm\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-openai-proxy-wasm\"]},\"_api_c2_headers.strict-transport-security\":{\"ret_btype\":\"text\",\"caption\":\"headers strict-transport-security\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"strict-transport-security\"]},\"_api_c2_headers.cf-cache-status\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-cache-status\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-cache-status\"]},\"_api_c2_headers.set-cookie\":{\"ret_btype\":\"list.text\",\"caption\":\"headers set-cookie\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"set-cookie\"]},\"_api_c2_headers.x-content-type-options\":{\"ret_btype\":\"text\",\"caption\":\"headers x-content-type-options\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-content-type-options\"]},\"_api_c2_headers.server\":{\"ret_btype\":\"text\",\"caption\":\"headers server\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"server\"]},\"_api_c2_headers.cf-ray\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-ray\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-ray\"]},\"_api_c2_headers.content-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers content-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-encoding\"]},\"_api_c2_headers.alt-svc\":{\"ret_btype\":\"text\",\"caption\":\"headers alt-svc\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"alt-svc\"]}}}}",
    "method": "post",
    "headers": {
      "bTPQs": {
        "private": true
      }
    },
    "ret_value": "api.apiconnector2.bTHDh0.bTPQr",
    "publish_as": "action",
    "wrap_error": true,
    "body_params": {
      "bTPQt": {
        "key": "file_id",
        "value": "file-DmUwXqu99s9rBexCmfRiix",
        "private": false
      }
    },
    "get_headers": true,
    "initialized": true,
    "should_reinitialize": false,
    "url_cant_be_private": true
  },
  "bTPRF": {
    "body": "{\n\t\"query\": <query>, \n  \t\"max_num_results\": 10,\n   \t\"ranking_options\":{\n    \t\"ranker\": \"none\"\n  \t}\n}",
    "name": "Search (File API)",
    "url": "https://api.openai.com/v1/vector_stores/[vector_store_id]/search",
    "rank": 15,
    "types": "{\"bTHDh0.bTPRF\":{\"caption\":\"Search (File API)\",\"fields\":{\"_api_c2_body.object\":{\"ret_btype\":\"text\",\"caption\":\"body object\",\"sample_value\":\"string value\",\"path\":[\"body\",\"object\"]},\"_api_c2_body.search_query\":{\"ret_btype\":\"list.text\",\"caption\":\"body search_query\",\"sample_value\":\"string value\",\"path\":[\"body\",\"search_query\"]},\"_api_c2_body.data\":{\"ret_btype\":\"list.api.apiconnector2.bTHDh0.bTPRF.body.data\",\"caption\":\"body\",\"path\":[\"body\",\"data\"]},\"_api_c2_body.has_more\":{\"ret_btype\":\"boolean\",\"caption\":\"body has_more\",\"sample_value\":false,\"path\":[\"body\",\"has_more\"]},\"_api_c2_body.next_page\":{\"ret_btype\":\"text\",\"caption\":\"body next_page\",\"sample_value\":null,\"path\":[\"body\",\"next_page\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]},\"_api_c2_headers.date\":{\"ret_btype\":\"text\",\"caption\":\"headers date\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"date\"]},\"_api_c2_headers.content-type\":{\"ret_btype\":\"text\",\"caption\":\"headers content-type\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-type\"]},\"_api_c2_headers.transfer-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers transfer-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"transfer-encoding\"]},\"_api_c2_headers.connection\":{\"ret_btype\":\"text\",\"caption\":\"headers connection\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"connection\"]},\"_api_c2_headers.openai-version\":{\"ret_btype\":\"text\",\"caption\":\"headers openai-version\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"openai-version\"]},\"_api_c2_headers.openai-organization\":{\"ret_btype\":\"text\",\"caption\":\"headers openai-organization\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"openai-organization\"]},\"_api_c2_headers.openai-project\":{\"ret_btype\":\"text\",\"caption\":\"headers openai-project\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"openai-project\"]},\"_api_c2_headers.x-request-id\":{\"ret_btype\":\"text\",\"caption\":\"headers x-request-id\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-request-id\"]},\"_api_c2_headers.openai-processing-ms\":{\"ret_btype\":\"text\",\"caption\":\"headers openai-processing-ms\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"openai-processing-ms\"]},\"_api_c2_headers.x-envoy-upstream-service-time\":{\"ret_btype\":\"text\",\"caption\":\"headers x-envoy-upstream-service-time\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-envoy-upstream-service-time\"]},\"_api_c2_headers.x-openai-proxy-wasm\":{\"ret_btype\":\"text\",\"caption\":\"headers x-openai-proxy-wasm\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-openai-proxy-wasm\"]},\"_api_c2_headers.strict-transport-security\":{\"ret_btype\":\"text\",\"caption\":\"headers strict-transport-security\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"strict-transport-security\"]},\"_api_c2_headers.cf-cache-status\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-cache-status\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-cache-status\"]},\"_api_c2_headers.set-cookie\":{\"ret_btype\":\"list.text\",\"caption\":\"headers set-cookie\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"set-cookie\"]},\"_api_c2_headers.x-content-type-options\":{\"ret_btype\":\"text\",\"caption\":\"headers x-content-type-options\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-content-type-options\"]},\"_api_c2_headers.server\":{\"ret_btype\":\"text\",\"caption\":\"headers server\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"server\"]},\"_api_c2_headers.cf-ray\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-ray\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-ray\"]},\"_api_c2_headers.content-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers content-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-encoding\"]},\"_api_c2_headers.alt-svc\":{\"ret_btype\":\"text\",\"caption\":\"headers alt-svc\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"alt-svc\"]}}},\"bTHDh0.bTPRF.body.data\":{\"caption\":\"Search (File API) body data\",\"fields\":{\"_api_c2_file_id\":{\"ret_btype\":\"text\",\"caption\":\"file_id\",\"sample_value\":\"string value\",\"path\":[\"file_id\"]},\"_api_c2_filename\":{\"ret_btype\":\"text\",\"caption\":\"filename\",\"sample_value\":\"string value\",\"path\":[\"filename\"]},\"_api_c2_score\":{\"ret_btype\":\"number\",\"caption\":\"score\",\"sample_value\":0.03278688524590164,\"path\":[\"score\"]},\"_api_c2_content\":{\"ret_btype\":\"list.api.apiconnector2.bTHDh0.bTPRF.content\",\"caption\":\"content\",\"path\":[\"content\"]}}},\"bTHDh0.bTPRF.content\":{\"caption\":\"Search (File API) content\",\"fields\":{\"_api_c2_type\":{\"ret_btype\":\"text\",\"caption\":\"type\",\"sample_value\":\"string value\",\"path\":[\"type\"]},\"_api_c2_text\":{\"ret_btype\":\"text\",\"caption\":\"text\",\"sample_value\":\"string value\",\"path\":[\"text\"]}}}}",
    "method": "post",
    "ret_value": "api.apiconnector2.bTHDh0.bTPRF",
    "publish_as": "action",
    "url_params": {
      "bTPRJ": {
        "key": "vector_store_id",
        "value": "vs_68c7fbdeb41c8191924f36a4ace17664",
        "private": false
      }
    },
    "wrap_error": true,
    "body_params": {
      "bTPRL": {
        "key": "query",
        "value": "\"Give the invoice date.\"",
        "private": false
      }
    },
    "get_headers": true,
    "initialized": true,
    "should_reinitialize": false,
    "url_cant_be_private": true
  },
  "bTPPL": {
    "name": "Upload File (File API)",
    "url": " https://api.openai.com/v1/files",
    "rank": 11,
    "types": "{\"bTHDh0.bTPPL\":{\"caption\":\"Upload File (File API)\",\"fields\":{\"_api_c2_body.object\":{\"ret_btype\":\"text\",\"caption\":\"body object\",\"sample_value\":\"string value\",\"path\":[\"body\",\"object\"]},\"_api_c2_body.id\":{\"ret_btype\":\"text\",\"caption\":\"body id\",\"sample_value\":\"string value\",\"path\":[\"body\",\"id\"]},\"_api_c2_body.purpose\":{\"ret_btype\":\"text\",\"caption\":\"body purpose\",\"sample_value\":\"string value\",\"path\":[\"body\",\"purpose\"]},\"_api_c2_body.filename\":{\"ret_btype\":\"text\",\"caption\":\"body filename\",\"sample_value\":\"string value\",\"path\":[\"body\",\"filename\"]},\"_api_c2_body.bytes\":{\"ret_btype\":\"number\",\"caption\":\"body bytes\",\"sample_value\":254111,\"path\":[\"body\",\"bytes\"]},\"_api_c2_body.created_at\":{\"ret_btype\":\"number\",\"caption\":\"body created_at\",\"sample_value\":1762503993,\"path\":[\"body\",\"created_at\"]},\"_api_c2_body.expires_at\":{\"ret_btype\":\"text\",\"caption\":\"body expires_at\",\"sample_value\":null,\"path\":[\"body\",\"expires_at\"]},\"_api_c2_body.status\":{\"ret_btype\":\"text\",\"caption\":\"body status\",\"sample_value\":\"string value\",\"path\":[\"body\",\"status\"]},\"_api_c2_body.status_details\":{\"ret_btype\":\"text\",\"caption\":\"body status_details\",\"sample_value\":null,\"path\":[\"body\",\"status_details\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]},\"_api_c2_headers.date\":{\"ret_btype\":\"text\",\"caption\":\"headers date\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"date\"]},\"_api_c2_headers.content-type\":{\"ret_btype\":\"text\",\"caption\":\"headers content-type\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-type\"]},\"_api_c2_headers.transfer-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers transfer-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"transfer-encoding\"]},\"_api_c2_headers.connection\":{\"ret_btype\":\"text\",\"caption\":\"headers connection\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"connection\"]},\"_api_c2_headers.x-request-id\":{\"ret_btype\":\"text\",\"caption\":\"headers x-request-id\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-request-id\"]},\"_api_c2_headers.openai-processing-ms\":{\"ret_btype\":\"text\",\"caption\":\"headers openai-processing-ms\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"openai-processing-ms\"]},\"_api_c2_headers.openai-version\":{\"ret_btype\":\"text\",\"caption\":\"headers openai-version\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"openai-version\"]},\"_api_c2_headers.openai-organization\":{\"ret_btype\":\"text\",\"caption\":\"headers openai-organization\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"openai-organization\"]},\"_api_c2_headers.openai-project\":{\"ret_btype\":\"text\",\"caption\":\"headers openai-project\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"openai-project\"]},\"_api_c2_headers.access-control-allow-origin\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-origin\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-origin\"]},\"_api_c2_headers.x-envoy-upstream-service-time\":{\"ret_btype\":\"text\",\"caption\":\"headers x-envoy-upstream-service-time\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-envoy-upstream-service-time\"]},\"_api_c2_headers.x-openai-proxy-wasm\":{\"ret_btype\":\"text\",\"caption\":\"headers x-openai-proxy-wasm\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-openai-proxy-wasm\"]},\"_api_c2_headers.cf-cache-status\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-cache-status\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-cache-status\"]},\"_api_c2_headers.set-cookie\":{\"ret_btype\":\"list.text\",\"caption\":\"headers set-cookie\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"set-cookie\"]},\"_api_c2_headers.strict-transport-security\":{\"ret_btype\":\"text\",\"caption\":\"headers strict-transport-security\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"strict-transport-security\"]},\"_api_c2_headers.x-content-type-options\":{\"ret_btype\":\"text\",\"caption\":\"headers x-content-type-options\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-content-type-options\"]},\"_api_c2_headers.server\":{\"ret_btype\":\"text\",\"caption\":\"headers server\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"server\"]},\"_api_c2_headers.cf-ray\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-ray\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-ray\"]},\"_api_c2_headers.content-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers content-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-encoding\"]},\"_api_c2_headers.alt-svc\":{\"ret_btype\":\"text\",\"caption\":\"headers alt-svc\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"alt-svc\"]}}}}",
    "method": "post",
    "params": {
      "bTPPM": {
        "key": "file",
        "value": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1757928126179x370248526554663100/Document%203%20%281%29%20%281%29.pdf",
        "private": false,
        "binary_file": true
      },
      "bTPPN": {
        "key": "purpose",
        "value": "user_data",
        "private": false
      }
    },
    "body_type": "form_data",
    "ret_value": "api.apiconnector2.bTHDh0.bTPPL",
    "publish_as": "action",
    "wrap_error": true,
    "get_headers": true,
    "initialized": true,
    "should_reinitialize": false,
    "url_cant_be_private": true
  },
  "bTLKX0": {
    "name": "Audio to text (action)",
    "url": "https://api.openai.com/v1/audio/transcriptions",
    "rank": 10,
    "types": "{\"bTHDh0.bTLKX0\":{\"caption\":\"Audio to text (action)\",\"fields\":{\"_api_c2_body.text\":{\"ret_btype\":\"text\",\"caption\":\"body text\",\"sample_value\":\"string value\",\"path\":[\"body\",\"text\"]},\"_api_c2_body.usage.type\":{\"ret_btype\":\"text\",\"caption\":\"body usage type\",\"sample_value\":\"string value\",\"path\":[\"body\",\"usage\",\"type\"]},\"_api_c2_body.usage.seconds\":{\"ret_btype\":\"number\",\"caption\":\"body usage seconds\",\"sample_value\":27,\"path\":[\"body\",\"usage\",\"seconds\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]},\"_api_c2_headers.date\":{\"ret_btype\":\"text\",\"caption\":\"headers date\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"date\"]},\"_api_c2_headers.content-type\":{\"ret_btype\":\"text\",\"caption\":\"headers content-type\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-type\"]},\"_api_c2_headers.transfer-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers transfer-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"transfer-encoding\"]},\"_api_c2_headers.connection\":{\"ret_btype\":\"text\",\"caption\":\"headers connection\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"connection\"]},\"_api_c2_headers.access-control-expose-headers\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-expose-headers\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-expose-headers\"]},\"_api_c2_headers.openai-organization\":{\"ret_btype\":\"text\",\"caption\":\"headers openai-organization\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"openai-organization\"]},\"_api_c2_headers.openai-processing-ms\":{\"ret_btype\":\"text\",\"caption\":\"headers openai-processing-ms\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"openai-processing-ms\"]},\"_api_c2_headers.openai-project\":{\"ret_btype\":\"text\",\"caption\":\"headers openai-project\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"openai-project\"]},\"_api_c2_headers.openai-version\":{\"ret_btype\":\"text\",\"caption\":\"headers openai-version\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"openai-version\"]},\"_api_c2_headers.strict-transport-security\":{\"ret_btype\":\"text\",\"caption\":\"headers strict-transport-security\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"strict-transport-security\"]},\"_api_c2_headers.via\":{\"ret_btype\":\"text\",\"caption\":\"headers via\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"via\"]},\"_api_c2_headers.x-envoy-upstream-service-time\":{\"ret_btype\":\"text\",\"caption\":\"headers x-envoy-upstream-service-time\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-envoy-upstream-service-time\"]},\"_api_c2_headers.x-ratelimit-limit-requests\":{\"ret_btype\":\"text\",\"caption\":\"headers x-ratelimit-limit-requests\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-ratelimit-limit-requests\"]},\"_api_c2_headers.x-ratelimit-remaining-requests\":{\"ret_btype\":\"text\",\"caption\":\"headers x-ratelimit-remaining-requests\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-ratelimit-remaining-requests\"]},\"_api_c2_headers.x-ratelimit-reset-requests\":{\"ret_btype\":\"text\",\"caption\":\"headers x-ratelimit-reset-requests\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-ratelimit-reset-requests\"]},\"_api_c2_headers.x-request-id\":{\"ret_btype\":\"text\",\"caption\":\"headers x-request-id\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-request-id\"]},\"_api_c2_headers.x-openai-proxy-wasm\":{\"ret_btype\":\"text\",\"caption\":\"headers x-openai-proxy-wasm\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-openai-proxy-wasm\"]},\"_api_c2_headers.cf-cache-status\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-cache-status\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-cache-status\"]},\"_api_c2_headers.set-cookie\":{\"ret_btype\":\"list.text\",\"caption\":\"headers set-cookie\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"set-cookie\"]},\"_api_c2_headers.x-content-type-options\":{\"ret_btype\":\"text\",\"caption\":\"headers x-content-type-options\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-content-type-options\"]},\"_api_c2_headers.server\":{\"ret_btype\":\"text\",\"caption\":\"headers server\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"server\"]},\"_api_c2_headers.cf-ray\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-ray\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-ray\"]},\"_api_c2_headers.content-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers content-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-encoding\"]},\"_api_c2_headers.alt-svc\":{\"ret_btype\":\"text\",\"caption\":\"headers alt-svc\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"alt-svc\"]}}}}",
    "method": "post",
    "params": {
      "bTLKY0": {
        "private": true
      },
      "bTLKZ0": {
        "key": "file",
        "value": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1755597607069x543994871064629200/speech.mp3",
        "private": false,
        "binary_file": true
      }
    },
    "body_type": "form_data",
    "ret_value": "api.apiconnector2.bTHDh0.bTLKX0",
    "publish_as": "action",
    "wrap_error": true,
    "get_headers": true,
    "initialized": true,
    "should_reinitialize": false,
    "url_cant_be_private": true
  },
  "bTPQx": {
    "name": "Delete vector store (File API)",
    "url": "https://api.openai.com/v1/vector_stores/[vector_store_id]",
    "rank": 13,
    "types": "{\"bTHDh0.bTPQx\":{\"caption\":\"Delete vector store\",\"fields\":{\"_api_c2_body.id\":{\"ret_btype\":\"text\",\"caption\":\"body id\",\"sample_value\":\"string value\",\"path\":[\"body\",\"id\"]},\"_api_c2_body.object\":{\"ret_btype\":\"text\",\"caption\":\"body object\",\"sample_value\":\"string value\",\"path\":[\"body\",\"object\"]},\"_api_c2_body.deleted\":{\"ret_btype\":\"boolean\",\"caption\":\"body deleted\",\"sample_value\":true,\"path\":[\"body\",\"deleted\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]}}}}",
    "method": "delete_method",
    "headers": {
      "bTPQz": {
        "private": true
      }
    },
    "ret_value": "api.apiconnector2.bTHDh0.bTPQx",
    "publish_as": "action",
    "url_params": {
      "bTPQy": {
        "key": "vector_store_id",
        "value": "vs_68c7f939a0c4819181c73ddfe10cb744",
        "private": false
      }
    },
    "wrap_error": true,
    "get_headers": false,
    "initialized": true,
    "should_reinitialize": false,
    "url_cant_be_private": true
  },
  "bTcFk": {
    "name": "Get File (File API)",
    "url": "  https://api.openai.com/v1/files/[file_id]",
    "rank": 16,
    "types": "{\"bTHDh0.bTcFk\":{\"caption\":\"Get File (File API)\",\"fields\":{\"_api_c2_object\":{\"ret_btype\":\"text\",\"caption\":\"object\",\"sample_value\":\"string value\",\"path\":[\"object\"]},\"_api_c2_id\":{\"ret_btype\":\"text\",\"caption\":\"id\",\"sample_value\":\"string value\",\"path\":[\"id\"]},\"_api_c2_purpose\":{\"ret_btype\":\"text\",\"caption\":\"purpose\",\"sample_value\":\"string value\",\"path\":[\"purpose\"]},\"_api_c2_filename\":{\"ret_btype\":\"text\",\"caption\":\"filename\",\"sample_value\":\"string value\",\"path\":[\"filename\"]},\"_api_c2_bytes\":{\"ret_btype\":\"number\",\"caption\":\"bytes\",\"sample_value\":1826994,\"path\":[\"bytes\"]},\"_api_c2_created_at\":{\"ret_btype\":\"number\",\"caption\":\"created_at\",\"sample_value\":1761926170,\"path\":[\"created_at\"]},\"_api_c2_expires_at\":{\"ret_btype\":\"text\",\"caption\":\"expires_at\",\"sample_value\":null,\"path\":[\"expires_at\"]},\"_api_c2_status\":{\"ret_btype\":\"text\",\"caption\":\"status\",\"sample_value\":\"string value\",\"path\":[\"status\"]},\"_api_c2_status_details\":{\"ret_btype\":\"text\",\"caption\":\"status_details\",\"sample_value\":null,\"path\":[\"status_details\"]}}}}",
    "method": "get",
    "ret_value": "api.apiconnector2.bTHDh0.bTcFk",
    "publish_as": "data",
    "url_params": {
      "bTcFl": {
        "key": "file_id",
        "value": "file-8JvBDKQfM4jmdK7pNHK5bq",
        "private": false
      }
    },
    "initialized": true,
    "should_reinitialize": false,
    "url_cant_be_private": true
  },
  "bTPRD": {
    "name": "Delete (File API)",
    "url": "https://api.openai.com/v1/files/[file_id]",
    "rank": 14,
    "types": "{\"bTHDh0.bTPRD\":{\"caption\":\"Delete (File API)\",\"fields\":{\"_api_c2_object\":{\"ret_btype\":\"text\",\"caption\":\"object\",\"sample_value\":\"string value\",\"path\":[\"object\"]},\"_api_c2_deleted\":{\"ret_btype\":\"boolean\",\"caption\":\"deleted\",\"sample_value\":true,\"path\":[\"deleted\"]},\"_api_c2_id\":{\"ret_btype\":\"text\",\"caption\":\"id\",\"sample_value\":\"string value\",\"path\":[\"id\"]}}}}",
    "method": "delete_method",
    "ret_value": "api.apiconnector2.bTHDh0.bTPRD",
    "publish_as": "action",
    "url_params": {
      "bTPRE": {
        "key": "file_id",
        "value": "file-J6ZvGrvYAr4eoPub2c21qx",
        "private": false
      }
    },
    "initialized": true,
    "should_reinitialize": false,
    "url_cant_be_private": true
  },
};
