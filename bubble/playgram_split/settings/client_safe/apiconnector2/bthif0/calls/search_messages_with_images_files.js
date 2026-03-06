export const Search_Messages_with_Images_Files = {
  "body": "<query>",
  "name": "Search Messages with Images/Files ",
  "url": "https://[endpoint]/v1/graphql",
  "rank": 27,
  "types": "{\"bTHIF0.bTqZC0\":{\"caption\":\"Search Messages with Images/Files \",\"fields\":{\"_api_c2_body.data.Get.Messages_v3\":{\"ret_btype\":\"list.api.apiconnector2.bTHIF0.bTqZC0.body.data.Get.Messages_v3\",\"caption\":\"body Get Messages_v3\",\"path\":[\"body\",\"data\",\"Get\",\"Messages_v3\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]},\"_api_c2_headers.access-control-allow-headers\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-headers\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-headers\"]},\"_api_c2_headers.access-control-allow-methods\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-methods\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-methods\"]},\"_api_c2_headers.access-control-allow-origin\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-origin\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-origin\"]},\"_api_c2_headers.content-type\":{\"ret_btype\":\"text\",\"caption\":\"headers content-type\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-type\"]},\"_api_c2_headers.vary\":{\"ret_btype\":\"text\",\"caption\":\"headers vary\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"vary\"]},\"_api_c2_headers.date\":{\"ret_btype\":\"text\",\"caption\":\"headers date\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"date\"]},\"_api_c2_headers.content-length\":{\"ret_btype\":\"text\",\"caption\":\"headers content-length\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-length\"]},\"_api_c2_headers.x-envoy-upstream-service-time\":{\"ret_btype\":\"text\",\"caption\":\"headers x-envoy-upstream-service-time\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-envoy-upstream-service-time\"]},\"_api_c2_headers.server\":{\"ret_btype\":\"text\",\"caption\":\"headers server\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"server\"]},\"_api_c2_headers.via\":{\"ret_btype\":\"text\",\"caption\":\"headers via\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"via\"]},\"_api_c2_headers.alt-svc\":{\"ret_btype\":\"text\",\"caption\":\"headers alt-svc\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"alt-svc\"]}}},\"bTHIF0.bTqZC0.body.data.Get.Messages_v3\":{\"caption\":\"Search Messages with Images/Files  body data Get Messages_v3\",\"fields\":{\"_api_c2__additional.id\":{\"ret_btype\":\"text\",\"caption\":\"_additional id\",\"sample_value\":\"string value\",\"path\":[\"_additional\",\"id\"]},\"_api_c2_file_url\":{\"ret_btype\":\"text\",\"caption\":\"file_url\",\"sample_value\":null,\"path\":[\"file_url\"]},\"_api_c2_image\":{\"ret_btype\":\"text\",\"caption\":\"image\",\"sample_value\":\"string value\",\"path\":[\"image\"]},\"_api_c2_user_image\":{\"ret_btype\":\"text\",\"caption\":\"user_image\",\"sample_value\":null,\"path\":[\"user_image\"]}}}}",
  "method": "post",
  "ret_value": "api.apiconnector2.bTHIF0.bTqZC0",
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
      "value": "{\"query\": \"{ Get { Messages_v3(tenant: \\\"1765877818699x520611675451949060\\\", where: { operator: And, operands: [ { path: [\\\"chat_id\\\"], operator: Equal, valueText: \\\"1767775663895x595451615766380500\\\" }, { operator: Or, operands: [ { path: [\\\"image\\\"], operator: IsNull, valueBoolean: false }, { path: [\\\"user_image\\\"], operator: IsNull, valueBoolean: false }, { path: [\\\"file_url\\\"], operator: IsNull, valueBoolean: false } ] } ] }) { image user_image file_url _additional { id } } } }\"}",
      "private": false
    }
  },
  "get_headers": true,
  "initialized": true,
  "should_reinitialize": false,
  "url_cant_be_private": true
};
