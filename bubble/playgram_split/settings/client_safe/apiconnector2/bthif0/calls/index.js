import { Add_Chunks } from './add_chunks/index.js';
import { Search_Action } from './search_action.js';
import { Search_Documents_Chunks } from './search_documents_chunks.js';
import { Create_Collection } from './create_collection.js';
import { Get_single_object_action } from './get_single_object_action.js';
import { Add_Object_to_Collection } from './add_object_to_collection.js';
import { Add_Object_to_Collection_copy } from './add_object_to_collection_copy.js';
import { TEST_Search_Kiril_s_chat_messages } from './test_search_kiril_s_chat_messages.js';
import { FOR_FAST_SEARCH_Get_single_object } from './for_fast_search_get_single_object.js';
import { Delete_Project_Keep_Memory } from './delete_project_keep_memory.js';
import { Delete_Chat_Keep_Memory } from './delete_chat_keep_memory.js';
import { Regenerate_Delete_Messages } from './regenerate_delete_messages.js';
import { Delete_Chat_and_Memory } from './delete_chat_and_memory.js';
import { Delete_Project_and_Memory } from './delete_project_and_memory.js';
import { Search_Memories_from_Input } from './search_memories_from_input.js';
import { Search_Generated_Images_Library_Data } from './search_generated_images_library_data.js';
import { Search_Files_Library_Data } from './search_files_library_data.js';
import { Get_Messages_Data_Pagination } from './get_messages_data_pagination.js';
import { Search_Messages_with_Images_Files } from './search_messages_with_images_files.js';

export const calls = {
  "bTSqx0": Add_Chunks,
  "bTLJz": Search_Action,
  "bTUbR0": Search_Documents_Chunks,
  "bTHTL0": Create_Collection,
  "bTJUb0": Get_single_object_action,
  "bTHIv0": Add_Object_to_Collection,
  "bTslr0": Add_Object_to_Collection_copy,
  "bTwHf0": TEST_Search_Kiril_s_chat_messages,
  "bTZCF": FOR_FAST_SEARCH_Get_single_object,
  "bTKAy": Delete_Project_Keep_Memory,
  "bTKAV": Delete_Chat_Keep_Memory,
  "bTagN": Regenerate_Delete_Messages,
  "bTICV0": Delete_Chat_and_Memory,
  "bTKBF": Delete_Project_and_Memory,
  "bTNsB": Search_Memories_from_Input,
  "bTjyT": Search_Generated_Images_Library_Data,
  "bTjyl": Search_Files_Library_Data,
  "bTHmN": Get_Messages_Data_Pagination,
  "bTqZC0": Search_Messages_with_Images_Files,
  "bTSqr0": {
    "body": "{\n  \"class\": \"<class>\",\n  \"properties\": {\n    \"file_url\": <file_url>,\n    \"user_id\": <user_id>,\n    \"project_id\":<project_id>,\n    \"organization_id\":<organization_id>,\n    \"uploaded_manually\":<uploaded_manually>,\n    \"name\":<name>,\n    \"sort\":<sort>\n  },\n  \"tenant\": \"<tenant_name>\"\n}",
    "name": "Add Document",
    "url": "https://[endpoint]/v1/objects",
    "rank": 3,
    "types": "{\"bTHIF0.bTSqr0\":{\"caption\":\"Add Document\",\"fields\":{\"_api_c2_body.class\":{\"ret_btype\":\"text\",\"caption\":\"body class\",\"sample_value\":\"string value\",\"path\":[\"body\",\"class\"]},\"_api_c2_body.creationTimeUnix\":{\"ret_btype\":\"number\",\"caption\":\"body creationTimeUnix\",\"sample_value\":1768828176995,\"path\":[\"body\",\"creationTimeUnix\"]},\"_api_c2_body.id\":{\"ret_btype\":\"text\",\"caption\":\"body id\",\"sample_value\":\"string value\",\"path\":[\"body\",\"id\"]},\"_api_c2_body.lastUpdateTimeUnix\":{\"ret_btype\":\"number\",\"caption\":\"body lastUpdateTimeUnix\",\"sample_value\":1768828176995,\"path\":[\"body\",\"lastUpdateTimeUnix\"]},\"_api_c2_body.properties.file_url\":{\"ret_btype\":\"text\",\"caption\":\"body properties file_url\",\"sample_value\":\"string value\",\"path\":[\"body\",\"properties\",\"file_url\"]},\"_api_c2_body.properties.name\":{\"ret_btype\":\"text\",\"caption\":\"body properties name\",\"sample_value\":\"string value\",\"path\":[\"body\",\"properties\",\"name\"]},\"_api_c2_body.properties.organization_id\":{\"ret_btype\":\"text\",\"caption\":\"body properties organization_id\",\"sample_value\":\"string value\",\"path\":[\"body\",\"properties\",\"organization_id\"]},\"_api_c2_body.properties.project_id\":{\"ret_btype\":\"text\",\"caption\":\"body properties project_id\",\"sample_value\":\"string value\",\"path\":[\"body\",\"properties\",\"project_id\"]},\"_api_c2_body.properties.sort\":{\"ret_btype\":\"number\",\"caption\":\"body properties sort\",\"sample_value\":123,\"path\":[\"body\",\"properties\",\"sort\"]},\"_api_c2_body.properties.uploaded_manually\":{\"ret_btype\":\"text\",\"caption\":\"body properties uploaded_manually\",\"sample_value\":\"string value\",\"path\":[\"body\",\"properties\",\"uploaded_manually\"]},\"_api_c2_body.properties.user_id\":{\"ret_btype\":\"text\",\"caption\":\"body properties user_id\",\"sample_value\":\"string value\",\"path\":[\"body\",\"properties\",\"user_id\"]},\"_api_c2_body.tenant\":{\"ret_btype\":\"text\",\"caption\":\"body tenant\",\"sample_value\":\"string value\",\"path\":[\"body\",\"tenant\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]}}}}",
    "method": "post",
    "ret_value": "api.apiconnector2.bTHIF0.bTSqr0",
    "publish_as": "action",
    "url_params": {
      "bTHIw0": {
        "key": "endpoint",
        "value": "ugsj5mtstmaoe4gwkzrxg.c0.europe-west3.gcp.weaviate.cloud",
        "private": false
      }
    },
    "wrap_error": true,
    "body_params": {
      "bTHJC0": {
        "key": "user_id",
        "value": "\"123\"",
        "private": false,
        "allow_blank": true
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
        "value": "Documents",
        "private": false
      },
      "bTIOZ0": {
        "key": "tenant_name",
        "value": "1758526085785x614734873223495700",
        "private": false
      },
      "bTSqv0": {
        "key": "file_url",
        "value": "\"123\"",
        "private": false
      },
      "bTdvU2": {
        "key": "uploaded_manually",
        "value": "\"true\"",
        "private": false,
        "allow_blank": true
      },
      "bTdvV2": {
        "key": "name",
        "value": "\"test\"",
        "private": false
      },
      "bTeEy2": {
        "key": "sort",
        "value": "123",
        "private": false
      }
    },
    "initialized": true,
    "should_reinitialize": false,
    "url_cant_be_private": true
  },
  "bTOYJ0": {
    "body": "<query>",
    "name": "Get Memory Dump Objects Count + Tokens",
    "url": "https://[endpoint]/v1/graphql",
    "rank": 28,
    "types": "{\"bTHIF0.bTOYJ0\":{\"caption\":\"Get Memory Dump Objects Count + Token\",\"fields\":{\"_api_c2_body.data.Aggregate.Messages_v3\":{\"ret_btype\":\"list.api.apiconnector2.bTHIF0.bTOYJ0.body.data.Aggregate.Messages_v3\",\"caption\":\"body Aggregate Messages_v3\",\"path\":[\"body\",\"data\",\"Aggregate\",\"Messages_v3\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]},\"_api_c2_headers.access-control-allow-headers\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-headers\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-headers\"]},\"_api_c2_headers.access-control-allow-methods\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-methods\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-methods\"]},\"_api_c2_headers.access-control-allow-origin\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-origin\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-origin\"]},\"_api_c2_headers.content-type\":{\"ret_btype\":\"text\",\"caption\":\"headers content-type\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-type\"]},\"_api_c2_headers.vary\":{\"ret_btype\":\"text\",\"caption\":\"headers vary\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"vary\"]},\"_api_c2_headers.date\":{\"ret_btype\":\"text\",\"caption\":\"headers date\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"date\"]},\"_api_c2_headers.content-length\":{\"ret_btype\":\"text\",\"caption\":\"headers content-length\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-length\"]},\"_api_c2_headers.x-envoy-upstream-service-time\":{\"ret_btype\":\"text\",\"caption\":\"headers x-envoy-upstream-service-time\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-envoy-upstream-service-time\"]},\"_api_c2_headers.server\":{\"ret_btype\":\"text\",\"caption\":\"headers server\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"server\"]},\"_api_c2_headers.via\":{\"ret_btype\":\"text\",\"caption\":\"headers via\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"via\"]},\"_api_c2_headers.alt-svc\":{\"ret_btype\":\"text\",\"caption\":\"headers alt-svc\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"alt-svc\"]}}},\"bTHIF0.bTOYJ0.body.data.Aggregate.Messages_v3\":{\"caption\":\"Get Memory Dump Objects Count + Tokens body data Aggregate Messages_v3\",\"fields\":{\"_api_c2_meta.count\":{\"ret_btype\":\"number\",\"caption\":\"meta count\",\"sample_value\":0,\"path\":[\"meta\",\"count\"]},\"_api_c2_token_count.sum\":{\"ret_btype\":\"number\",\"caption\":\"token_count sum\",\"sample_value\":null,\"path\":[\"token_count\",\"sum\"]}}}}",
    "method": "post",
    "ret_value": "api.apiconnector2.bTHIF0.bTOYJ0",
    "publish_as": "action",
    "url_params": {
      "bTHRr0": {
        "key": "endpoint",
        "value": "ugsj5mtstmaoe4gwkzrxg.c0.europe-west3.gcp.weaviate.cloud",
        "private": false
      }
    },
    "wrap_error": true,
    "body_params": {
      "bTOYQ0": {
        "key": "query",
        "value": "{   \"query\": \"{ Aggregate { Messages_v3(tenant: \\\"1765877818699x520611675451949060\\\", where: { operator: Or, operands: [ { operator: And, operands: [ { path: [\\\"user_id\\\"], operator: Equal, valueText: \\\"1752259249471x922098146460388300\\\" }, { path: [\\\"organization_id\\\"], operator: IsNull, valueBoolean: true }, { path: [\\\"project_id\\\"], operator: IsNull, valueBoolean: true } ] }, { path: [\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"1752259249471x922098146460388300\\\", \\\"personal\\\"] } ] }) { token_count { sum } meta { count } } } }\" }",
        "private": false
      }
    },
    "get_headers": true,
    "initialized": true,
    "should_reinitialize": false,
    "url_cant_be_private": true
  },
  "bTiZV2": {
    "body": "<query>",
    "name": "[TEXT] Search Memories (from Input)",
    "url": "https://[endpoint]/v1/graphql",
    "rank": 29,
    "types": "{\"bTHIF0.bTiZV2\":{\"caption\":\"[TEXT] Search Memories (from Input)\",\"fields\":{\"_api_c2_body\":{\"ret_btype\":\"text\",\"caption\":\"body\",\"sample_value\":\"string value\",\"path\":[\"body\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]},\"_api_c2_headers.access-control-allow-headers\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-headers\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-headers\"]},\"_api_c2_headers.access-control-allow-methods\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-methods\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-methods\"]},\"_api_c2_headers.access-control-allow-origin\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-origin\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-origin\"]},\"_api_c2_headers.content-type\":{\"ret_btype\":\"text\",\"caption\":\"headers content-type\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-type\"]},\"_api_c2_headers.vary\":{\"ret_btype\":\"text\",\"caption\":\"headers vary\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"vary\"]},\"_api_c2_headers.date\":{\"ret_btype\":\"text\",\"caption\":\"headers date\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"date\"]},\"_api_c2_headers.content-length\":{\"ret_btype\":\"text\",\"caption\":\"headers content-length\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-length\"]},\"_api_c2_headers.x-envoy-upstream-service-time\":{\"ret_btype\":\"text\",\"caption\":\"headers x-envoy-upstream-service-time\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-envoy-upstream-service-time\"]},\"_api_c2_headers.server\":{\"ret_btype\":\"text\",\"caption\":\"headers server\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"server\"]},\"_api_c2_headers.via\":{\"ret_btype\":\"text\",\"caption\":\"headers via\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"via\"]},\"_api_c2_headers.alt-svc\":{\"ret_btype\":\"text\",\"caption\":\"headers alt-svc\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"alt-svc\"]}}}}",
    "method": "post",
    "headers": {
      "bTNxi": {
        "key": "string_for_update",
        "value": "123",
        "private": false
      }
    },
    "data_type": "text",
    "ret_value": "api.apiconnector2.bTHIF0.bTiZV2",
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
  },
  "bTiZW2": {
    "body": "<query>",
    "name": "[TEXT] Search Documents (from Input)",
    "url": "https://[endpoint]/v1/graphql",
    "rank": 31,
    "types": "{\"bTHIF0.bTiZW2\":{\"caption\":\"[TEXT] Search Documents (from Input)\",\"fields\":{\"_api_c2_body\":{\"ret_btype\":\"text\",\"caption\":\"body\",\"sample_value\":\"string value\",\"path\":[\"body\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]},\"_api_c2_headers.access-control-allow-headers\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-headers\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-headers\"]},\"_api_c2_headers.access-control-allow-methods\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-methods\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-methods\"]},\"_api_c2_headers.access-control-allow-origin\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-origin\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-origin\"]},\"_api_c2_headers.content-type\":{\"ret_btype\":\"text\",\"caption\":\"headers content-type\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-type\"]},\"_api_c2_headers.vary\":{\"ret_btype\":\"text\",\"caption\":\"headers vary\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"vary\"]},\"_api_c2_headers.date\":{\"ret_btype\":\"text\",\"caption\":\"headers date\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"date\"]},\"_api_c2_headers.content-length\":{\"ret_btype\":\"text\",\"caption\":\"headers content-length\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-length\"]},\"_api_c2_headers.x-envoy-upstream-service-time\":{\"ret_btype\":\"text\",\"caption\":\"headers x-envoy-upstream-service-time\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-envoy-upstream-service-time\"]},\"_api_c2_headers.server\":{\"ret_btype\":\"text\",\"caption\":\"headers server\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"server\"]},\"_api_c2_headers.via\":{\"ret_btype\":\"text\",\"caption\":\"headers via\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"via\"]},\"_api_c2_headers.alt-svc\":{\"ret_btype\":\"text\",\"caption\":\"headers alt-svc\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"alt-svc\"]}}}}",
    "method": "post",
    "headers": {
      "bTNxi": {
        "key": "string_for_update",
        "value": "123",
        "private": false
      }
    },
    "data_type": "text",
    "ret_value": "api.apiconnector2.bTHIF0.bTiZW2",
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
        "value": "{\"query\":\"{ Get { Documents(tenant:\\\"1759308218992x754587557157666800\\\", where:{ operator:And, operands:[ { path:[\\\"uploaded_manually\\\"], operator:Equal, valueText:\\\"true\\\" }, { path:[\\\"organization_id\\\"], operator:Equal, valueText:\\\"1759308218992x754587557157666800\\\" }, { path:[\\\"name\\\"], operator:Like, valueText:\\\"%OrionTech%\\\" } ] }, limit:20, offset:0) { file_url _additional { id creationTimeUnix } } } }\"}",
        "private": false
      }
    },
    "get_headers": true,
    "initialized": true,
    "should_reinitialize": false,
    "url_cant_be_private": true
  },
  "bTIIg0": {
    "body": "[\n  {\n    \"name\": \"<tentant_name>\",\n    \"activityStatus\": \"ACTIVE\"\n  }\n]",
    "name": "Create new tentant",
    "url": "https://[endpoint]/v1/schema/[className]/tenants",
    "rank": 17,
    "types": "{\"bTHIF0.bTIIg0\":{\"caption\":\"Create new tentant\",\"fields\":{\"_api_c2_body\":{\"ret_btype\":\"list.api.apiconnector2.bTHIF0.bTIIg0.body\",\"caption\":\"body\",\"path\":[\"body\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]},\"_api_c2_headers.access-control-allow-headers\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-headers\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-headers\"]},\"_api_c2_headers.access-control-allow-methods\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-methods\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-methods\"]},\"_api_c2_headers.access-control-allow-origin\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-origin\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-origin\"]},\"_api_c2_headers.content-type\":{\"ret_btype\":\"text\",\"caption\":\"headers content-type\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-type\"]},\"_api_c2_headers.vary\":{\"ret_btype\":\"text\",\"caption\":\"headers vary\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"vary\"]},\"_api_c2_headers.date\":{\"ret_btype\":\"text\",\"caption\":\"headers date\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"date\"]},\"_api_c2_headers.content-length\":{\"ret_btype\":\"text\",\"caption\":\"headers content-length\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-length\"]},\"_api_c2_headers.x-envoy-upstream-service-time\":{\"ret_btype\":\"text\",\"caption\":\"headers x-envoy-upstream-service-time\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-envoy-upstream-service-time\"]},\"_api_c2_headers.server\":{\"ret_btype\":\"text\",\"caption\":\"headers server\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"server\"]},\"_api_c2_headers.via\":{\"ret_btype\":\"text\",\"caption\":\"headers via\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"via\"]},\"_api_c2_headers.alt-svc\":{\"ret_btype\":\"text\",\"caption\":\"headers alt-svc\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"alt-svc\"]}}},\"bTHIF0.bTIIg0.body\":{\"caption\":\"Create new tentant body\",\"fields\":{\"_api_c2_activityStatus\":{\"ret_btype\":\"text\",\"caption\":\"activityStatus\",\"sample_value\":\"string value\",\"path\":[\"activityStatus\"]},\"_api_c2_name\":{\"ret_btype\":\"text\",\"caption\":\"name\",\"sample_value\":\"string value\",\"path\":[\"name\"]}}}}",
    "method": "post",
    "ret_value": "api.apiconnector2.bTHIF0.bTIIg0",
    "publish_as": "action",
    "url_params": {
      "bTIIh0": {
        "key": "endpoint",
        "value": "ugsj5mtstmaoe4gwkzrxg.c0.europe-west3.gcp.weaviate.cloud",
        "private": false
      },
      "bTIMh0": {
        "key": "className",
        "value": "Messages_v3",
        "private": false
      }
    },
    "wrap_error": true,
    "body_params": {
      "bTIMi0": {
        "key": "tentant_name",
        "value": "23",
        "private": false
      }
    },
    "get_headers": true,
    "initialized": true,
    "should_reinitialize": false,
    "url_cant_be_private": true
  },
  "bTiEh1": {
    "body": "<query>",
    "name": "[TEXT] Get Uploaded Documents (Memory&Knowledge) (copy)",
    "url": "https://[endpoint]/v1/graphql",
    "rank": 11,
    "types": "{\"bTHIF0.bTiEh1\":{\"caption\":\"[TEXT] Get Uploaded Documents (Memory&Knowledge) (copy)\",\"fields\":{\"_api_c2_body\":{\"ret_btype\":\"text\",\"caption\":\"body\",\"sample_value\":\"string value\",\"path\":[\"body\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]},\"_api_c2_headers.access-control-allow-headers\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-headers\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-headers\"]},\"_api_c2_headers.access-control-allow-methods\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-methods\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-methods\"]},\"_api_c2_headers.access-control-allow-origin\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-origin\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-origin\"]},\"_api_c2_headers.content-type\":{\"ret_btype\":\"text\",\"caption\":\"headers content-type\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-type\"]},\"_api_c2_headers.vary\":{\"ret_btype\":\"text\",\"caption\":\"headers vary\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"vary\"]},\"_api_c2_headers.date\":{\"ret_btype\":\"text\",\"caption\":\"headers date\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"date\"]},\"_api_c2_headers.content-length\":{\"ret_btype\":\"text\",\"caption\":\"headers content-length\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-length\"]},\"_api_c2_headers.x-envoy-upstream-service-time\":{\"ret_btype\":\"text\",\"caption\":\"headers x-envoy-upstream-service-time\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-envoy-upstream-service-time\"]},\"_api_c2_headers.server\":{\"ret_btype\":\"text\",\"caption\":\"headers server\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"server\"]},\"_api_c2_headers.via\":{\"ret_btype\":\"text\",\"caption\":\"headers via\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"via\"]},\"_api_c2_headers.alt-svc\":{\"ret_btype\":\"text\",\"caption\":\"headers alt-svc\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"alt-svc\"]}}}}",
    "method": "post",
    "headers": {
      "bTduX2": {
        "key": "String_for_update",
        "value": "123",
        "private": false
      }
    },
    "data_type": "text",
    "ret_value": "api.apiconnector2.bTHIF0.bTiEh1",
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
      "bTLKA": {
        "key": "query",
        "value": "{\"query\": \"{ Get { Documents (tenant:\\\"1759308218992x754587557157666800\\\",where:{operator:And,operands:[{path:[\\\"organization_id\\\"],operator:Equal,valueText:\\\"1759308218992x754587557157666800\\\"}]},limit:10){file_url name sort _additional {id creationTimeUnix}} }}\"}",
        "private": false
      }
    },
    "get_headers": true,
    "initialized": true,
    "should_reinitialize": false,
    "url_cant_be_private": true
  },
  "bTvwp0": {
    "body": "<query>",
    "name": "Get Memory - Pagination",
    "url": "https://[endpoint]/v1/graphql",
    "rank": 32,
    "types": "{\"bTHIF0.bTvwp0\":{\"caption\":\"Get Memory - Pagination\",\"fields\":{\"_api_c2_body.data.Get.Messages_v3\":{\"ret_btype\":\"list.api.apiconnector2.bTHIF0.bTvwp0.body.data.Get.Messages_v3\",\"caption\":\"body Get Messages_v3\",\"path\":[\"body\",\"data\",\"Get\",\"Messages_v3\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]}}},\"bTHIF0.bTvwp0.body.data.Get.Messages_v3\":{\"caption\":\"Get Memory - Pagination body data Get Messages_v3\",\"fields\":{\"_api_c2__additional.creationTimeUnix\":{\"ret_btype\":\"text\",\"caption\":\"_additional creationTimeUnix\",\"sample_value\":\"string value\",\"path\":[\"_additional\",\"creationTimeUnix\"]},\"_api_c2__additional.id\":{\"ret_btype\":\"text\",\"caption\":\"_additional id\",\"sample_value\":\"string value\",\"path\":[\"_additional\",\"id\"]},\"_api_c2_chat_id\":{\"ret_btype\":\"text\",\"caption\":\"chat_id\",\"sample_value\":\"string value\",\"path\":[\"chat_id\"]},\"_api_c2_llm_reply\":{\"ret_btype\":\"text\",\"caption\":\"llm_reply\",\"sample_value\":\"string value\",\"path\":[\"llm_reply\"]},\"_api_c2_project_id\":{\"ret_btype\":\"text\",\"caption\":\"project_id\",\"sample_value\":null,\"path\":[\"project_id\"]},\"_api_c2_saved_by_user_id\":{\"ret_btype\":\"text\",\"caption\":\"saved_by_user_id\",\"sample_value\":\"string value\",\"path\":[\"saved_by_user_id\"]},\"_api_c2_saved_manually\":{\"ret_btype\":\"text\",\"caption\":\"saved_manually\",\"sample_value\":\"string value\",\"path\":[\"saved_manually\"]},\"_api_c2_user_id\":{\"ret_btype\":\"text\",\"caption\":\"user_id\",\"sample_value\":\"string value\",\"path\":[\"user_id\"]},\"_api_c2_user_message\":{\"ret_btype\":\"text\",\"caption\":\"user_message\",\"sample_value\":\"string value\",\"path\":[\"user_message\"]}}}}",
    "method": "post",
    "ret_value": "api.apiconnector2.bTHIF0.bTvwp0",
    "publish_as": "data",
    "url_params": {
      "bTvwt0": {
        "key": "endpoint",
        "value": "ugsj5mtstmaoe4gwkzrxg.c0.europe-west3.gcp.weaviate.cloud",
        "private": false
      }
    },
    "wrap_error": true,
    "body_params": {
      "bTvwu0": {
        "key": "query",
        "value": "{\"query\": \"{ Get { Messages_v3(tenant: \\\"1759308218992x754587557157666800\\\", limit: 10, offset: 0, where: { operator: And, operands: [ { path: [\\\"organization_id\\\"], operator: Equal, valueText: \\\"1759308218992x754587557157666800\\\" }, { path: [\\\"vectorized_content\\\"], operator: IsNull, valueBoolean: false } ] }, sort: [ { path: [\\\"sort\\\"], order: desc } ] ) { user_message llm_reply project_id saved_manually saved_by_user_id user_id chat_id _additional { id creationTimeUnix } } } }\"}",
        "private": false
      }
    },
    "initialized": true,
    "response_time_ms": 2378,
    "must_reinitialize": false,
    "should_reinitialize": false,
    "url_cant_be_private": true,
    "response_status_code": 200
  },
  "bTLrL": {
    "body": "<query>",
    "name": "Update a Part of Object",
    "url": "https://[endpoint]/v1/objects/[collection]/[uuid]",
    "rank": 13,
    "types": "{\"bTHIF0.bTLrL\":{\"caption\":\"Update a Part of Object\",\"fields\":{\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":204,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]},\"_api_c2_headers.access-control-allow-headers\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-headers\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-headers\"]},\"_api_c2_headers.access-control-allow-methods\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-methods\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-methods\"]},\"_api_c2_headers.access-control-allow-origin\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-origin\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-origin\"]},\"_api_c2_headers.vary\":{\"ret_btype\":\"text\",\"caption\":\"headers vary\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"vary\"]},\"_api_c2_headers.date\":{\"ret_btype\":\"text\",\"caption\":\"headers date\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"date\"]},\"_api_c2_headers.x-envoy-upstream-service-time\":{\"ret_btype\":\"text\",\"caption\":\"headers x-envoy-upstream-service-time\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-envoy-upstream-service-time\"]},\"_api_c2_headers.server\":{\"ret_btype\":\"text\",\"caption\":\"headers server\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"server\"]},\"_api_c2_headers.via\":{\"ret_btype\":\"text\",\"caption\":\"headers via\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"via\"]},\"_api_c2_headers.alt-svc\":{\"ret_btype\":\"text\",\"caption\":\"headers alt-svc\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"alt-svc\"]}}}}",
    "method": "patch",
    "ret_value": "api.apiconnector2.bTHIF0.bTLrL",
    "publish_as": "action",
    "url_params": {
      "bTHKF": {
        "key": "endpoint",
        "value": "ugsj5mtstmaoe4gwkzrxg.c0.europe-west3.gcp.weaviate.cloud",
        "private": false
      },
      "bTHKt": {
        "key": "collection",
        "value": "Messages_v3",
        "private": false
      },
      "bTHKu": {
        "key": "uuid",
        "value": "0047b9a9-f4a7-4206-a854-889ec4066238",
        "private": false
      }
    },
    "wrap_error": true,
    "body_params": {
      "bTLrY": {
        "key": "query",
        "value": "{ \"class\": \"Messages_v3\", \"properties\":{\"vectorized_content\": null},      \"id\": \"0047b9a9-f4a7-4206-a854-889ec4066238\",   \"tenant\": \"1759308218992x754587557157666800\",       \"vectors\": {\"default\": [] } }",
        "private": false
      }
    },
    "get_headers": true,
    "initialized": true,
    "should_reinitialize": false,
    "url_cant_be_private": true
  },
  "bTNvv": {
    "body": "<query>",
    "name": "Count Query",
    "url": "https://[endpoint]/v1/graphql",
    "rank": 15,
    "types": "{\"bTHIF0.bTNvv\":{\"caption\":\"Count Query\",\"fields\":{\"_api_c2_body.data.Aggregate.Documents\":{\"ret_btype\":\"list.api.apiconnector2.bTHIF0.bTNvv.body.data.Aggregate.Documents\",\"caption\":\"body Aggregate Documents\",\"path\":[\"body\",\"data\",\"Aggregate\",\"Documents\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]}}},\"bTHIF0.bTNvv.body.data.Aggregate.Documents\":{\"caption\":\"Count Query body data Aggregate Document\",\"fields\":{\"_api_c2_meta.count\":{\"ret_btype\":\"number\",\"caption\":\"meta count\",\"sample_value\":4,\"path\":[\"meta\",\"count\"]}}}}",
    "method": "post",
    "headers": {
      "bTHnr": {
        "key": "String_for_update",
        "value": "123",
        "private": false
      }
    },
    "ret_value": "api.apiconnector2.bTHIF0.bTNvv",
    "publish_as": "data",
    "url_params": {
      "bTHRr0": {
        "key": "endpoint",
        "value": "ugsj5mtstmaoe4gwkzrxg.c0.europe-west3.gcp.weaviate.cloud",
        "private": false
      }
    },
    "wrap_error": true,
    "body_params": {
      "bTNvw": {
        "key": "query",
        "value": "{\"query\":\"{ Aggregate { Documents(tenant:\\\"1759308218992x754587557157666800\\\", where:{ operator:And, operands:[ { path:[\\\"uploaded_manually\\\"], operator:Equal, valueText:\\\"true\\\" }, { operator:Or, operands:[ { path:[\\\"organization_id\\\"], operator:Equal, valueText:\\\"1759308218992x754587557157666800\\\" }, { path:[\\\"user_id\\\"], operator:Equal, valueText:\\\"1759308218992x853577866362486800\\\" }, { path:[\\\"project_id\\\"], operator:ContainsAny, valueString:[\\\"1759498593113x926638570401169400\\\",\\\"1760684671979x998822432858439700\\\",\\\"1761056724553x942433743994355700\\\",\\\"1762807792407x827058121139290100\\\",\\\"1763139009582x436406628274405400\\\"] } ] } ] } ) { meta { count } } } }\"}",
        "private": false
      }
    },
    "initialized": true,
    "should_reinitialize": false,
    "url_cant_be_private": true
  },
  "bTift2": {
    "body": "<query>",
    "name": "Count Messages (Memory&Knowledge)",
    "url": "https://[endpoint]/v1/graphql",
    "rank": 18,
    "types": "{\"bTHIF0.bTift2\":{\"caption\":\"Count Messages (Memory&Knowledge)\",\"fields\":{\"_api_c2_body.data.Aggregate.Messages_v3\":{\"ret_btype\":\"list.api.apiconnector2.bTHIF0.bTift2.body.data.Aggregate.Messages_v3\",\"caption\":\"body Aggregate Messages_v3\",\"path\":[\"body\",\"data\",\"Aggregate\",\"Messages_v3\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]}}},\"bTHIF0.bTift2.body.data.Aggregate.Messages_v3\":{\"caption\":\"Count Messages (Memory&Knowledge) body data Aggregate Messages_v3\",\"fields\":{\"_api_c2_meta.count\":{\"ret_btype\":\"number\",\"caption\":\"meta count\",\"sample_value\":5,\"path\":[\"meta\",\"count\"]}}}}",
    "method": "post",
    "headers": {
      "bTHnr": {
        "key": "String_for_update",
        "value": "123",
        "private": false
      }
    },
    "ret_value": "api.apiconnector2.bTHIF0.bTift2",
    "publish_as": "data",
    "url_params": {
      "bTHRr0": {
        "key": "endpoint",
        "value": "ugsj5mtstmaoe4gwkzrxg.c0.europe-west3.gcp.weaviate.cloud",
        "private": false
      }
    },
    "wrap_error": true,
    "body_params": {
      "bTNvw": {
        "key": "query",
        "value": "{\"query\": \"{ Aggregate { Messages_v3(tenant: \\\"1759308218992x754587557157666800\\\", where: { operator: And, operands: [ { operator: Or, operands: [ { path: [\\\"organization_id\\\"], operator: Equal, valueText: \\\"1759308218992x754587557157666800\\\" }, { path: [\\\"memory_level_with_id\\\"], operator: ContainsAll, valueString: [\\\"1759498593113x926638570401169400\\\", \\\"team\\\"] } ] }, { path: [\\\"vectorized_content\\\"], operator: IsNull, valueBoolean: false } , { path: [\\\"llm_reply\\\"], operator: IsNull, valueBoolean: false }] } ) { meta { count } } } }\"}",
        "private": false
      }
    },
    "initialized": true,
    "should_reinitialize": false,
    "url_cant_be_private": true
  },
  "bTHnh": {
    "body": "{  \"query\": \"{  Aggregate {  <collection>(tenant: \\\"<tenant_name>\\\", where: {  path: [\\\"chat_id\\\"],  operator: Equal,  valueText: \\\"<chat_id>\\\"  }  ) { meta { count } }  }  }\"  }",
    "name": "Count Messages in Chat",
    "url": "https://[endpoint]/v1/graphql",
    "rank": 14,
    "types": "{\"bTHIF0.bTHnh\":{\"caption\":\"Count Messages in Chat\",\"fields\":{\"_api_c2_body.data.Aggregate.Messages_v3\":{\"ret_btype\":\"list.api.apiconnector2.bTHIF0.bTHnh.body.data.Aggregate.Messages_v3\",\"caption\":\"body Aggregate Messages_v3\",\"path\":[\"body\",\"data\",\"Aggregate\",\"Messages_v3\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]}}},\"bTHIF0.bTHnh.body.data.Aggregate.Messages_v3\":{\"caption\":\"Count Messages in Chat body data Aggregate Messages_v3\",\"fields\":{\"_api_c2_meta.count\":{\"ret_btype\":\"number\",\"caption\":\"meta count\",\"sample_value\":11,\"path\":[\"meta\",\"count\"]}}}}",
    "method": "post",
    "headers": {
      "bTHnr": {
        "key": "String_for_update",
        "value": "123",
        "private": false
      }
    },
    "ret_value": "api.apiconnector2.bTHIF0.bTHnh",
    "publish_as": "data",
    "url_params": {
      "bTHRr0": {
        "key": "endpoint",
        "value": "ugsj5mtstmaoe4gwkzrxg.c0.europe-west3.gcp.weaviate.cloud",
        "private": false
      }
    },
    "wrap_error": true,
    "body_params": {
      "bTHSB0": {
        "key": "chat_id",
        "value": "1761907480001x721630972257763300",
        "private": false
      },
      "bTHTD0": {
        "key": "collection",
        "value": "Messages_v3",
        "private": false
      },
      "bTIQq0": {
        "key": "tenant_name",
        "value": "1759308218992x754587557157666800",
        "private": false
      }
    },
    "initialized": true,
    "should_reinitialize": false,
    "url_cant_be_private": true
  },
  "bTiFG1": {
    "body": "<query>",
    "name": "[TEXT] Get Memory - Pagination",
    "url": "https://[endpoint]/v1/graphql",
    "rank": 16,
    "types": "{\"bTHIF0.bTiFG1\":{\"caption\":\"[TEXT] Get Memory - Pagination\",\"fields\":{\"_api_c2_body\":{\"ret_btype\":\"text\",\"caption\":\"body\",\"sample_value\":\"string value\",\"path\":[\"body\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]}}}}",
    "method": "post",
    "headers": {
      "bTHTF0": {
        "key": "String_for_update",
        "value": "123",
        "private": false
      }
    },
    "data_type": "text",
    "ret_value": "api.apiconnector2.bTHIF0.bTiFG1",
    "publish_as": "data",
    "url_params": {
      "bTHRr0": {
        "key": "endpoint",
        "value": "ugsj5mtstmaoe4gwkzrxg.c0.europe-west3.gcp.weaviate.cloud",
        "private": false
      }
    },
    "wrap_error": true,
    "body_params": {
      "bTNtt": {
        "key": "query",
        "value": "{\"query\": \"{ Get { Messages_v3(tenant: \\\"1759308218992x754587557157666800\\\", limit: 10, offset: 0, where: { operator: And, operands: [ { path: [\\\"organization_id\\\"], operator: Equal, valueText: \\\"1759308218992x754587557157666800\\\" }, { path: [\\\"vectorized_content\\\"], operator: IsNull, valueBoolean: false } ] }, sort: [ { path: [\\\"sort\\\"], order: desc } ] ) { user_message sort llm_reply project_id saved_manually saved_by_user_id user_id chat_id _additional { id creationTimeUnix } } } }\"}",
        "private": false
      }
    },
    "initialized": true,
    "should_reinitialize": false,
    "url_cant_be_private": true
  },
  "bTYNs": {
    "body": "{\"match\":{\"class\":\"<class>\",\"where\":{\"path\":[\"document_id\"],\"operator\":\"Equal\",\"valueString\":\"<document_id>\"}},\"output\":\"minimal\",\"deletionTimeUnixMilli\":1,\"dryRun\":false}\n",
    "name": "Delete Object Chunks",
    "url": "https://[endpoint]/v1/batch/objects?consistency_level=&tenant=[tenant]",
    "rank": 4,
    "types": "{\"bTHIF0.bTYNs\":{\"caption\":\"Delete Object Chunk\",\"fields\":{\"_api_c2_body\":{\"ret_btype\":\"text\",\"caption\":\"body\",\"sample_value\":null,\"path\":[\"body\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]}}}}",
    "method": "delete_method",
    "data_type": "empty",
    "ret_value": "api.apiconnector2.bTHIF0.bTYNs",
    "publish_as": "action",
    "url_params": {
      "bTYNt": {
        "key": "endpoint",
        "value": "ugsj5mtstmaoe4gwkzrxg.c0.europe-west3.gcp.weaviate.cloud",
        "private": false
      },
      "bTYOW": {
        "key": "tenant",
        "value": "1759308218992x754587557157666800",
        "private": false
      }
    },
    "wrap_error": true,
    "body_params": {
      "bTYNz": {
        "key": "document_id",
        "value": "443c4cd2-ab8f-445a-8110-ec97417bbd3c",
        "private": false
      },
      "bTsiG0": {
        "key": "class",
        "value": "Chunks",
        "private": false
      }
    },
    "initialized": true,
    "should_reinitialize": false,
    "url_cant_be_private": true
  },
  "bTHJP0": {
    "name": "Delete Object with UUID",
    "url": "https://[endpoint]/v1/objects/[class]/[uuid]? tenant=",
    "rank": 1,
    "types": "{\"bTHIF0.bTHJP0\":{\"caption\":\"Delete Object with UUID\",\"fields\":{\"_api_c2_body\":{\"ret_btype\":\"text\",\"caption\":\"body\",\"sample_value\":null,\"path\":[\"body\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":204,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]}}}}",
    "method": "delete_method",
    "params": {
      "bTITH": {
        "key": "tenant",
        "value": "1759308218992x754587557157666800",
        "private": false,
        "querystring": true
      }
    },
    "data_type": "empty",
    "ret_value": "api.apiconnector2.bTHIF0.bTHJP0",
    "publish_as": "action",
    "url_params": {
      "bTITL": {
        "key": "class",
        "value": "Chunks",
        "private": false
      },
      "bTHJT0": {
        "key": "endpoint",
        "value": "ugsj5mtstmaoe4gwkzrxg.c0.europe-west3.gcp.weaviate.cloud",
        "private": false
      },
      "bTHJU0": {
        "key": "uuid",
        "value": "062f8a15-77d5-4e8a-8b2a-f1adb362e028",
        "private": false
      }
    },
    "wrap_error": true,
    "initialized": true,
    "should_reinitialize": false,
    "url_cant_be_private": true
  },
  "bTPzR0": {
    "body": "[\"23\"]",
    "name": "Delete Tenant",
    "url": "https://[endpoint]/v1/schema/[className]/tenants",
    "rank": 30,
    "types": "{\"bTHIF0.bTPzR0\":{\"caption\":\"Delete Tenant\",\"fields\":{\"_api_c2_body\":{\"ret_btype\":\"text\",\"caption\":\"body\",\"sample_value\":\"string value\",\"path\":[\"body\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]}}}}",
    "method": "delete_method",
    "data_type": "text",
    "ret_value": "api.apiconnector2.bTHIF0.bTPzR0",
    "publish_as": "action",
    "url_params": {
      "bTPzS0": {
        "key": "endpoint",
        "value": "ugsj5mtstmaoe4gwkzrxg.c0.europe-west3.gcp.weaviate.cloud",
        "private": false
      },
      "bTPzY0": {
        "key": "className",
        "value": "Messages_v3",
        "private": false
      }
    },
    "wrap_error": true,
    "initialized": true,
    "should_reinitialize": false,
    "url_cant_be_private": true
  },
};
