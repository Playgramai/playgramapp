export const Add_Object_to_Collection_copy = {
  "body": "{\n  \"class\": \"<class>\",\n  \"properties\": {\n    \"user_message\": <user_message>,\n\t\"llm_reply\": <llm_reply>,\n    \"user_id\": <user_id>,\n    \"chat_id\": <chat_id>,\n    \"project_id\":<project_id>,\n    \"organization_id\":<organization_id>,\n\t\"sort\":<sort_number>,\n\t\"workspace_id\":<workspace_id>,\n    \"file_id\":<file_id>,\n    \"image\":<image>,\n    \"created_date_text\":<llm_created_date>,\n    \"user_message_created_date\":<user_message_created_date>,\n    \"user_name\": <user_name>,\n    \"profile_photo\": <profile_photo>,\n    \"used_tools\":<used_tools>,\n    \"user_image\":<user_image>,\n    \"llm_model\":<llm_model>,\n    \"memory_level_with_id\":<memory_level_with_id>,\n\t\"vectorized_content\":<vectorized_content>,\n    \"already_saved\":<already_saved>,\n    \"saved_manually\":<saved_manually>,\n    \"workspace_model\":<workspace_model>,\n    \"file_url\":<file_url>\n      \n  },\n  \"tenant\": \"<tenant_name>\",\n  \"vector\": <vector>\n}",
  "name": "Add Object to Collection (copy)",
  "url": "https://[endpoint]/v1/objects",
  "rank": 2,
  "types": "{\"bTHIF0.bTslr0\":{\"caption\":\"Add Object to Collection (copy)\",\"fields\":{\"_api_c2_body.class\":{\"ret_btype\":\"text\",\"caption\":\"body class\",\"sample_value\":\"string value\",\"path\":[\"body\",\"class\"]},\"_api_c2_body.creationTimeUnix\":{\"ret_btype\":\"number\",\"caption\":\"body creationTimeUnix\",\"sample_value\":1768807290204,\"path\":[\"body\",\"creationTimeUnix\"]},\"_api_c2_body.id\":{\"ret_btype\":\"text\",\"caption\":\"body id\",\"sample_value\":\"string value\",\"path\":[\"body\",\"id\"]},\"_api_c2_body.lastUpdateTimeUnix\":{\"ret_btype\":\"number\",\"caption\":\"body lastUpdateTimeUnix\",\"sample_value\":1768807290204,\"path\":[\"body\",\"lastUpdateTimeUnix\"]},\"_api_c2_body.properties.chat_id\":{\"ret_btype\":\"text\",\"caption\":\"body properties chat_id\",\"sample_value\":\"string value\",\"path\":[\"body\",\"properties\",\"chat_id\"]},\"_api_c2_body.properties.created_date_text\":{\"ret_btype\":\"text\",\"caption\":\"body properties created_date_text\",\"sample_value\":\"string value\",\"path\":[\"body\",\"properties\",\"created_date_text\"]},\"_api_c2_body.properties.llm_reply\":{\"ret_btype\":\"text\",\"caption\":\"body properties llm_reply\",\"sample_value\":\"string value\",\"path\":[\"body\",\"properties\",\"llm_reply\"]},\"_api_c2_body.properties.organization_id\":{\"ret_btype\":\"text\",\"caption\":\"body properties organization_id\",\"sample_value\":\"string value\",\"path\":[\"body\",\"properties\",\"organization_id\"]},\"_api_c2_body.properties.profile_photo\":{\"ret_btype\":\"text\",\"caption\":\"body properties profile_photo\",\"sample_value\":\"string value\",\"path\":[\"body\",\"properties\",\"profile_photo\"]},\"_api_c2_body.properties.project_id\":{\"ret_btype\":\"text\",\"caption\":\"body properties project_id\",\"sample_value\":\"string value\",\"path\":[\"body\",\"properties\",\"project_id\"]},\"_api_c2_body.properties.sort\":{\"ret_btype\":\"number\",\"caption\":\"body properties sort\",\"sample_value\":1,\"path\":[\"body\",\"properties\",\"sort\"]},\"_api_c2_body.properties.used_tools\":{\"ret_btype\":\"list.text\",\"caption\":\"body properties used_tools\",\"sample_value\":\"string value\",\"path\":[\"body\",\"properties\",\"used_tools\"]},\"_api_c2_body.properties.user_id\":{\"ret_btype\":\"text\",\"caption\":\"body properties user_id\",\"sample_value\":\"string value\",\"path\":[\"body\",\"properties\",\"user_id\"]},\"_api_c2_body.properties.user_image\":{\"ret_btype\":\"text\",\"caption\":\"body properties user_image\",\"sample_value\":\"string value\",\"path\":[\"body\",\"properties\",\"user_image\"]},\"_api_c2_body.properties.user_message\":{\"ret_btype\":\"text\",\"caption\":\"body properties user_message\",\"sample_value\":\"string value\",\"path\":[\"body\",\"properties\",\"user_message\"]},\"_api_c2_body.properties.user_message_created_date\":{\"ret_btype\":\"text\",\"caption\":\"body properties user_message_created_date\",\"sample_value\":\"string value\",\"path\":[\"body\",\"properties\",\"user_message_created_date\"]},\"_api_c2_body.properties.user_name\":{\"ret_btype\":\"text\",\"caption\":\"body properties user_name\",\"sample_value\":\"string value\",\"path\":[\"body\",\"properties\",\"user_name\"]},\"_api_c2_body.properties.workspace_model\":{\"ret_btype\":\"text\",\"caption\":\"body properties workspace_model\",\"sample_value\":\"string value\",\"path\":[\"body\",\"properties\",\"workspace_model\"]},\"_api_c2_body.tenant\":{\"ret_btype\":\"text\",\"caption\":\"body tenant\",\"sample_value\":\"string value\",\"path\":[\"body\",\"tenant\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]}}}}",
  "method": "post",
  "ret_value": "api.apiconnector2.bTHIF0.bTslr0",
  "publish_as": "action",
  "url_params": {
    "bTHIw0": {
      "private": true
    }
  },
  "wrap_error": true,
  "body_params": {
    "bTHdZ": {
      "key": "sort_number",
      "value": "1",
      "private": false
    },
    "bTYTZ": {
      "key": "llm_created_date",
      "value": "\"123\"",
      "private": false,
      "allow_blank": true
    },
    "bTYTa": {
      "key": "user_message_created_date",
      "value": "\"123\"",
      "private": false,
      "allow_blank": true
    },
    "bTYXL": {
      "key": "user_name",
      "value": "\"User Name\"",
      "private": false,
      "allow_blank": true
    },
    "bTYZP": {
      "key": "profile_photo",
      "value": "\"link\"",
      "private": false,
      "allow_blank": true
    },
    "bTaeK": {
      "key": "used_tools",
      "value": "[\"tool\"]",
      "private": false,
      "allow_blank": true
    },
    "bTcNP": {
      "key": "user_image",
      "value": "\"image_link\"",
      "private": false,
      "allow_blank": true
    },
    "bTfLj": {
      "key": "workspace_model",
      "value": "\"id_model\"",
      "private": false,
      "allow_blank": true
    },
    "bTizl": {
      "key": "file_url",
      "value": "",
      "private": false,
      "allow_blank": true
    },
    "bTHIx0": {
      "key": "vector",
      "private": false,
      "allow_blank": true
    },
    "bTHJC0": {
      "key": "user_id",
      "value": "\"123\"",
      "private": false
    },
    "bTHJD0": {
      "key": "chat_id",
      "value": "\"321\"",
      "private": false,
      "allow_blank": true
    },
    "bTHKj0": {
      "key": "llm_reply",
      "value": "\"Nice to meet you, Julia. What would you like to work on today?\"",
      "private": false,
      "allow_blank": true
    },
    "bTHSb0": {
      "key": "user_message",
      "value": "\"My name is Julia\"",
      "private": false
    },
    "bTHSg0": {
      "key": "project_id",
      "value": "\"12345\"",
      "private": false,
      "allow_blank": true
    },
    "bTHSh0": {
      "key": "organization_id",
      "value": "\"54321\"",
      "private": false,
      "allow_blank": true
    },
    "bTHSl0": {
      "key": "class",
      "value": "Messages_v3",
      "private": false
    },
    "bTIOZ0": {
      "key": "tenant_name",
      "value": "1759828431361x858821322878222300",
      "private": false
    },
    "bTPyL0": {
      "key": "workspace_id",
      "value": "",
      "private": false,
      "allow_blank": true
    },
    "bTQSs0": {
      "key": "file_id",
      "value": "",
      "private": false,
      "allow_blank": true
    },
    "bTVCE0": {
      "key": "image",
      "value": "",
      "private": false,
      "allow_blank": true
    },
    "bTcSb0": {
      "key": "llm_model",
      "value": "",
      "private": false,
      "allow_blank": true
    },
    "bTdBw2": {
      "key": "memory_level_with_id",
      "value": "",
      "private": false,
      "allow_blank": true
    },
    "bTdBx2": {
      "key": "vectorized_content",
      "value": "",
      "private": false,
      "allow_blank": true
    },
    "bTdCB2": {
      "key": "already_saved",
      "value": "",
      "private": false,
      "allow_blank": true
    },
    "bTdCC2": {
      "key": "saved_manually",
      "value": "",
      "private": false,
      "allow_blank": true
    }
  },
  "initialized": true,
  "should_reinitialize": false,
  "url_cant_be_private": true
};
