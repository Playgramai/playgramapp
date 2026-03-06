export const Delete_Chat_and_Memory = {
  "body": "{\n  \"match\": {\n    \"class\": \"<class>\",\n    \"where\": {\n      \"path\": [\"<filter_field_name>\"],\n      \"operator\": \"Equal\",\n      \"valueString\": \"<filter_field_value>\"\n    }\n  },\n  \"output\": \"minimal\",\n  \"dryRun\": false\n}\n",
  "name": "Delete Chat and Memory",
  "url": "https://[endpoint]/v1/batch/objects?tenant=[tenant_name]",
  "rank": 19,
  "types": "{\"bTHIF0.bTICV0\":{\"caption\":\"Delete Chat and Memory\",\"fields\":{\"_api_c2_body.deletionTimeUnixMilli\":{\"ret_btype\":\"number\",\"caption\":\"body deletionTimeUnixMilli\",\"sample_value\":-62135596800000,\"path\":[\"body\",\"deletionTimeUnixMilli\"]},\"_api_c2_body.dryRun\":{\"ret_btype\":\"boolean\",\"caption\":\"body dryRun\",\"sample_value\":false,\"path\":[\"body\",\"dryRun\"]},\"_api_c2_body.match.class\":{\"ret_btype\":\"text\",\"caption\":\"body match class\",\"sample_value\":\"string value\",\"path\":[\"body\",\"match\",\"class\"]},\"_api_c2_body.match.where.operands\":{\"ret_btype\":\"text\",\"caption\":\"body match where operands\",\"sample_value\":null,\"path\":[\"body\",\"match\",\"where\",\"operands\"]},\"_api_c2_body.match.where.operator\":{\"ret_btype\":\"text\",\"caption\":\"body match where operator\",\"sample_value\":\"string value\",\"path\":[\"body\",\"match\",\"where\",\"operator\"]},\"_api_c2_body.match.where.path\":{\"ret_btype\":\"list.text\",\"caption\":\"body match where path\",\"sample_value\":\"string value\",\"path\":[\"body\",\"match\",\"where\",\"path\"]},\"_api_c2_body.match.where.valueString\":{\"ret_btype\":\"text\",\"caption\":\"body match where valueString\",\"sample_value\":\"string value\",\"path\":[\"body\",\"match\",\"where\",\"valueString\"]},\"_api_c2_body.output\":{\"ret_btype\":\"text\",\"caption\":\"body output\",\"sample_value\":\"string value\",\"path\":[\"body\",\"output\"]},\"_api_c2_body.results.failed\":{\"ret_btype\":\"number\",\"caption\":\"body failed\",\"sample_value\":0,\"path\":[\"body\",\"results\",\"failed\"]},\"_api_c2_body.results.limit\":{\"ret_btype\":\"number\",\"caption\":\"body limit\",\"sample_value\":100000,\"path\":[\"body\",\"results\",\"limit\"]},\"_api_c2_body.results.matches\":{\"ret_btype\":\"number\",\"caption\":\"body matches\",\"sample_value\":16,\"path\":[\"body\",\"results\",\"matches\"]},\"_api_c2_body.results.objects\":{\"ret_btype\":\"text\",\"caption\":\"body objects\",\"sample_value\":null,\"path\":[\"body\",\"results\",\"objects\"]},\"_api_c2_body.results.successful\":{\"ret_btype\":\"number\",\"caption\":\"body successful\",\"sample_value\":16,\"path\":[\"body\",\"results\",\"successful\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]},\"_api_c2_headers.access-control-allow-headers\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-headers\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-headers\"]},\"_api_c2_headers.access-control-allow-methods\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-methods\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-methods\"]},\"_api_c2_headers.access-control-allow-origin\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-origin\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-origin\"]},\"_api_c2_headers.content-type\":{\"ret_btype\":\"text\",\"caption\":\"headers content-type\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-type\"]},\"_api_c2_headers.vary\":{\"ret_btype\":\"text\",\"caption\":\"headers vary\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"vary\"]},\"_api_c2_headers.date\":{\"ret_btype\":\"text\",\"caption\":\"headers date\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"date\"]},\"_api_c2_headers.content-length\":{\"ret_btype\":\"text\",\"caption\":\"headers content-length\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-length\"]},\"_api_c2_headers.x-envoy-upstream-service-time\":{\"ret_btype\":\"text\",\"caption\":\"headers x-envoy-upstream-service-time\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-envoy-upstream-service-time\"]},\"_api_c2_headers.server\":{\"ret_btype\":\"text\",\"caption\":\"headers server\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"server\"]},\"_api_c2_headers.via\":{\"ret_btype\":\"text\",\"caption\":\"headers via\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"via\"]},\"_api_c2_headers.alt-svc\":{\"ret_btype\":\"text\",\"caption\":\"headers alt-svc\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"alt-svc\"]}}}}",
  "method": "delete_method",
  "ret_value": "api.apiconnector2.bTHIF0.bTICV0",
  "publish_as": "action",
  "url_params": {
    "bTHRr0": {
      "key": "endpoint",
      "value": "ugsj5mtstmaoe4gwkzrxg.c0.europe-west3.gcp.weaviate.cloud",
      "private": false
    },
    "bTIRa0": {
      "key": "tenant_name",
      "value": "1765877818699x520611675451949060",
      "private": false
    }
  },
  "wrap_error": true,
  "body_params": {
    "bTIES0": {
      "key": "filter_field_name",
      "value": "chat_id",
      "private": false
    },
    "bTIET0": {
      "key": "filter_field_value",
      "value": "1765957973812x462189650970411000",
      "private": false
    },
    "bTsiH0": {
      "key": "class",
      "value": "Messages_v3",
      "private": false
    }
  },
  "get_headers": true,
  "initialized": true,
  "should_reinitialize": false,
  "url_cant_be_private": true
};
