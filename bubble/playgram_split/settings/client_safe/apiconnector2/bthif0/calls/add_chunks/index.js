import { body_params } from './body_params/index.js';

export const Add_Chunks = {
  "body_params": body_params,
  "body": "{\n  \"class\": \"<class>\",\n  \"properties\": {\n    \"document_id\": <document_id>,\n    \"content\": <content>,\n    \"vectorized_content\":<vectorized_content>,\n    \"project_id\":<project_id>,\n\t\"user_id\":<user_id>,\n    \"organization_id\":<organization_id>\n  },\n  \"tenant\": \"<tenant_name>\",\n  \"vector\":<vector>\n}",
  "name": "Add Chunks",
  "url": "https://[endpoint]/v1/objects",
  "rank": 5,
  "types": "{\"bTHIF0.bTSqx0\":{\"caption\":\"Add Chunk\",\"fields\":{\"_api_c2_body.class\":{\"ret_btype\":\"text\",\"caption\":\"body class\",\"sample_value\":\"string value\",\"path\":[\"body\",\"class\"]},\"_api_c2_body.creationTimeUnix\":{\"ret_btype\":\"number\",\"caption\":\"body creationTimeUnix\",\"sample_value\":1768828282800,\"path\":[\"body\",\"creationTimeUnix\"]},\"_api_c2_body.id\":{\"ret_btype\":\"text\",\"caption\":\"body id\",\"sample_value\":\"string value\",\"path\":[\"body\",\"id\"]},\"_api_c2_body.lastUpdateTimeUnix\":{\"ret_btype\":\"number\",\"caption\":\"body lastUpdateTimeUnix\",\"sample_value\":1768828282800,\"path\":[\"body\",\"lastUpdateTimeUnix\"]},\"_api_c2_body.properties.content\":{\"ret_btype\":\"text\",\"caption\":\"body properties content\",\"sample_value\":\"string value\",\"path\":[\"body\",\"properties\",\"content\"]},\"_api_c2_body.properties.document_id\":{\"ret_btype\":\"text\",\"caption\":\"body properties document_id\",\"sample_value\":\"string value\",\"path\":[\"body\",\"properties\",\"document_id\"]},\"_api_c2_body.properties.organization_id\":{\"ret_btype\":\"text\",\"caption\":\"body properties organization_id\",\"sample_value\":\"string value\",\"path\":[\"body\",\"properties\",\"organization_id\"]},\"_api_c2_body.properties.project_id\":{\"ret_btype\":\"text\",\"caption\":\"body properties project_id\",\"sample_value\":\"string value\",\"path\":[\"body\",\"properties\",\"project_id\"]},\"_api_c2_body.properties.user_id\":{\"ret_btype\":\"text\",\"caption\":\"body properties user_id\",\"sample_value\":\"string value\",\"path\":[\"body\",\"properties\",\"user_id\"]},\"_api_c2_body.properties.vectorized_content\":{\"ret_btype\":\"text\",\"caption\":\"body properties vectorized_content\",\"sample_value\":\"string value\",\"path\":[\"body\",\"properties\",\"vectorized_content\"]},\"_api_c2_body.tenant\":{\"ret_btype\":\"text\",\"caption\":\"body tenant\",\"sample_value\":\"string value\",\"path\":[\"body\",\"tenant\"]},\"_api_c2_body.vector\":{\"ret_btype\":\"list.number\",\"caption\":\"body vector\",\"sample_value\":0.03303761,\"path\":[\"body\",\"vector\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]}}}}",
  "method": "post",
  "ret_value": "api.apiconnector2.bTHIF0.bTSqx0",
  "publish_as": "action",
  "url_params": {
    "bTHIw0": {
      "key": "endpoint",
      "value": "ugsj5mtstmaoe4gwkzrxg.c0.europe-west3.gcp.weaviate.cloud",
      "private": false
    }
  },
  "wrap_error": true,
  "initialized": true,
  "should_reinitialize": false,
  "url_cant_be_private": true,
};
