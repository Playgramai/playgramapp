export const Search_Memories_from_Input = {
  "body": "<query>",
  "name": "Search Memories (from Input)",
  "url": "https://[endpoint]/v1/graphql",
  "rank": 25,
  "types": "{\"bTHIF0.bTNsB\":{\"caption\":\"Search Memories (from Input)\",\"fields\":{\"_api_c2_body.data.Get.Messages_v3\":{\"ret_btype\":\"list.api.apiconnector2.bTHIF0.bTNsB.body.data.Get.Messages_v3\",\"caption\":\"body Get Messages_v3\",\"path\":[\"body\",\"data\",\"Get\",\"Messages_v3\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]},\"_api_c2_headers.access-control-allow-headers\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-headers\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-headers\"]},\"_api_c2_headers.access-control-allow-methods\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-methods\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-methods\"]},\"_api_c2_headers.access-control-allow-origin\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-origin\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-origin\"]},\"_api_c2_headers.content-type\":{\"ret_btype\":\"text\",\"caption\":\"headers content-type\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-type\"]},\"_api_c2_headers.vary\":{\"ret_btype\":\"text\",\"caption\":\"headers vary\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"vary\"]},\"_api_c2_headers.date\":{\"ret_btype\":\"text\",\"caption\":\"headers date\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"date\"]},\"_api_c2_headers.content-length\":{\"ret_btype\":\"text\",\"caption\":\"headers content-length\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-length\"]},\"_api_c2_headers.x-envoy-upstream-service-time\":{\"ret_btype\":\"text\",\"caption\":\"headers x-envoy-upstream-service-time\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-envoy-upstream-service-time\"]},\"_api_c2_headers.server\":{\"ret_btype\":\"text\",\"caption\":\"headers server\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"server\"]},\"_api_c2_headers.via\":{\"ret_btype\":\"text\",\"caption\":\"headers via\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"via\"]},\"_api_c2_headers.alt-svc\":{\"ret_btype\":\"text\",\"caption\":\"headers alt-svc\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"alt-svc\"]}}},\"bTHIF0.bTNsB.body.data.Get.Messages_v3\":{\"caption\":\"Search Memories (from Input) body data Get Messages_v3\",\"fields\":{\"_api_c2__additional.creationTimeUnix\":{\"ret_btype\":\"date\",\"caption\":\"_additional creationTimeUnix\",\"sample_value\":\"string value\",\"path\":[\"_additional\",\"creationTimeUnix\"]},\"_api_c2__additional.id\":{\"ret_btype\":\"text\",\"caption\":\"_additional id\",\"sample_value\":\"string value\",\"path\":[\"_additional\",\"id\"]},\"_api_c2_chat_id\":{\"ret_btype\":\"text\",\"caption\":\"chat_id\",\"sample_value\":\"string value\",\"path\":[\"chat_id\"]},\"_api_c2_llm_reply\":{\"ret_btype\":\"text\",\"caption\":\"llm_reply\",\"sample_value\":\"string value\",\"path\":[\"llm_reply\"]},\"_api_c2_project_id\":{\"ret_btype\":\"text\",\"caption\":\"project_id\",\"sample_value\":null,\"path\":[\"project_id\"]},\"_api_c2_saved_by_user_id\":{\"ret_btype\":\"text\",\"caption\":\"saved_by_user_id\",\"sample_value\":null,\"path\":[\"saved_by_user_id\"]},\"_api_c2_saved_manually\":{\"ret_btype\":\"text\",\"caption\":\"saved_manually\",\"sample_value\":null,\"path\":[\"saved_manually\"]},\"_api_c2_user_id\":{\"ret_btype\":\"text\",\"caption\":\"user_id\",\"sample_value\":\"string value\",\"path\":[\"user_id\"]},\"_api_c2_user_message\":{\"ret_btype\":\"text\",\"caption\":\"user_message\",\"sample_value\":\"string value\",\"path\":[\"user_message\"]}}}}",
  "method": "post",
  "headers": {
    "bTNxi": {
      "key": "string_for_update",
      "value": "123",
      "private": false
    }
  },
  "ret_value": "api.apiconnector2.bTHIF0.bTNsB",
  "publish_as": "data",
  "url_params": {
    "bTHJI0": {
      "key": "endpoint",
      "value": "ugsj5mtstmaoe4gwkzrxg.c0.europe-west3.gcp.weaviate.cloud",
      "private": false
    }
  },
  "wrap_error": true,
  "body_params": {
    "bTNsF": {
      "key": "query",
      "value": "{\"query\": \"{ Get { Messages_v3(tenant: \\\"1759308218992x754587557157666800\\\", limit: 20, offset: 0, where: { operator: And, operands: [ { operator: Or, operands: [ { path: [\\\"organization_id\\\"], operator: Equal, valueText: \\\"1759308218992x754587557157666800\\\" }, { path: [\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"1759308220929x884012172303575200\\\", \\\"team\\\"] } ] }, { path: [\\\"vectorized_content\\\"], operator: IsNull, valueBoolean: false },  { operator: Or, operands: [ { path: [\\\"user_message\\\"], operator: Like, valueText: \\\"*\u043c\u0430\u0442\u0447*\\\" }, { path: [\\\"llm_reply\\\"], operator: Like, valueText: \\\"*\u043c\u0430\u0442\u0447*\\\" } ] } ] }, sort: [ { path: [\\\"sort\\\"], order: desc } ] ) { saved_manually project_id saved_by_user_id  user_message user_id llm_reply chat_id _additional { id creationTimeUnix} } } }\"}",
      "private": false
    }
  },
  "get_headers": true,
  "initialized": true,
  "should_reinitialize": false,
  "url_cant_be_private": true
};
