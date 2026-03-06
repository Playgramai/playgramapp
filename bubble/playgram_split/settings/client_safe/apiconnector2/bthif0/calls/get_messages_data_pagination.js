export const Get_Messages_Data_Pagination = {
  "body": "{  \"query\": \"{  Get {  <collection>(tenant: \\\"<tenant_name>\\\", limit: <limit> offset: <offset>  where: {  path: [\\\"chat_id\\\"],  operator: Equal,  valueText: \\\"<chat_id>\\\"  },  sort: [  {  path: [\\\"sort\\\"],  order: desc  }  ]  ) {  user_message  llm_reply   chat_id  user_id file_id image sort user_message_created_date already_saved created_date_text used_tools profile_photo llm_model user_image saved_by_user_id user_name file_url _additional {  id  creationTimeUnix  }  }  }  }\"  }",
  "name": "Get Messages (Data) - Pagination",
  "url": "https://[endpoint]/v1/graphql",
  "rank": 12,
  "types": "{\"bTHIF0.bTHmN\":{\"caption\":\"Get Messages (Data) - Pagination\",\"fields\":{\"_api_c2_body.data.Get.Messages_v3\":{\"ret_btype\":\"list.api.apiconnector2.bTHIF0.bTHmN.body.data.Get.Messages_v3\",\"caption\":\"body Get Messages_v3\",\"path\":[\"body\",\"data\",\"Get\",\"Messages_v3\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]}}},\"bTHIF0.bTHmN.body.data.Get.Messages_v3\":{\"caption\":\"Get Messages (Data) - Pagination body data Get Messages_v3\",\"fields\":{\"_api_c2__additional.creationTimeUnix\":{\"ret_btype\":\"date\",\"caption\":\"_additional creationTimeUnix\",\"sample_value\":\"string value\",\"path\":[\"_additional\",\"creationTimeUnix\"]},\"_api_c2__additional.id\":{\"ret_btype\":\"text\",\"caption\":\"_additional id\",\"sample_value\":\"string value\",\"path\":[\"_additional\",\"id\"]},\"_api_c2_already_saved\":{\"ret_btype\":\"text\",\"caption\":\"already_saved\",\"sample_value\":null,\"path\":[\"already_saved\"]},\"_api_c2_chat_id\":{\"ret_btype\":\"text\",\"caption\":\"chat_id\",\"sample_value\":\"string value\",\"path\":[\"chat_id\"]},\"_api_c2_created_date_text\":{\"ret_btype\":\"date\",\"caption\":\"created_date_text\",\"sample_value\":null,\"path\":[\"created_date_text\"]},\"_api_c2_file_id\":{\"ret_btype\":\"text\",\"caption\":\"file_id\",\"sample_value\":null,\"path\":[\"file_id\"]},\"_api_c2_file_url\":{\"ret_btype\":\"text\",\"caption\":\"file_url\",\"sample_value\":null,\"path\":[\"file_url\"]},\"_api_c2_image\":{\"ret_btype\":\"text\",\"caption\":\"image\",\"sample_value\":null,\"path\":[\"image\"]},\"_api_c2_llm_model\":{\"ret_btype\":\"text\",\"caption\":\"llm_model\",\"sample_value\":null,\"path\":[\"llm_model\"]},\"_api_c2_llm_reply\":{\"ret_btype\":\"text\",\"caption\":\"llm_reply\",\"sample_value\":\"string value\",\"path\":[\"llm_reply\"]},\"_api_c2_profile_photo\":{\"ret_btype\":\"text\",\"caption\":\"profile_photo\",\"sample_value\":null,\"path\":[\"profile_photo\"]},\"_api_c2_saved_by_user_id\":{\"ret_btype\":\"text\",\"caption\":\"saved_by_user_id\",\"sample_value\":null,\"path\":[\"saved_by_user_id\"]},\"_api_c2_sort\":{\"ret_btype\":\"number\",\"caption\":\"sort\",\"sample_value\":1759149293238,\"path\":[\"sort\"]},\"_api_c2_used_tools\":{\"ret_btype\":\"text\",\"caption\":\"used_tools\",\"sample_value\":null,\"path\":[\"used_tools\"]},\"_api_c2_user_id\":{\"ret_btype\":\"text\",\"caption\":\"user_id\",\"sample_value\":\"string value\",\"path\":[\"user_id\"]},\"_api_c2_user_image\":{\"ret_btype\":\"text\",\"caption\":\"user_image\",\"sample_value\":null,\"path\":[\"user_image\"]},\"_api_c2_user_message\":{\"ret_btype\":\"text\",\"caption\":\"user_message\",\"sample_value\":\"string value\",\"path\":[\"user_message\"]},\"_api_c2_user_message_created_date\":{\"ret_btype\":\"date\",\"caption\":\"user_message_created_date\",\"sample_value\":null,\"path\":[\"user_message_created_date\"]},\"_api_c2_user_name\":{\"ret_btype\":\"text\",\"caption\":\"user_name\",\"sample_value\":null,\"path\":[\"user_name\"]}}}}",
  "method": "post",
  "headers": {
    "bTHTF0": {
      "key": "String_for_update",
      "value": "123",
      "private": false
    }
  },
  "ret_value": "api.apiconnector2.bTHIF0.bTHmN",
  "publish_as": "data",
  "url_params": {
    "bTHRr0": {
      "key": "endpoint",
      "value": "2o38skivtzypqttgw5haa.c0.us-west3.gcp.weaviate.cloud",
      "private": false
    }
  },
  "wrap_error": true,
  "body_params": {
    "bTHmY": {
      "key": "offset",
      "value": "0",
      "private": false
    },
    "bTHnO": {
      "key": "limit",
      "value": "20",
      "private": false
    },
    "bTHSB0": {
      "key": "chat_id",
      "value": "1759137613327x896632325545132000",
      "private": false
    },
    "bTHTD0": {
      "key": "collection",
      "value": "Messages_v3",
      "private": false
    },
    "bTIMj0": {
      "key": "tenant_name",
      "value": "1758526085785x614734873223495700",
      "private": false
    }
  },
  "initialized": true,
  "must_reinitialize": false,
  "should_reinitialize": true,
  "url_cant_be_private": true
};
