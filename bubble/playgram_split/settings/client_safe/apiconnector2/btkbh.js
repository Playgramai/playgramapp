export const bTkBH = {
  "calls": {
    "bTkBI": {
      "name": "message_logs",
      "rank": 3,
      "types": "{\"bTkBH.bTkBI\":{\"caption\":\"message_log\",\"fields\":{\"_api_c2_id\":{\"ret_btype\":\"number\",\"caption\":\"id\",\"sample_value\":2,\"path\":[\"id\"]},\"_api_c2_created_at\":{\"ret_btype\":\"date_unix\",\"caption\":\"created_at\",\"sample_value\":\"string value\",\"path\":[\"created_at\"]},\"_api_c2_workspace_id\":{\"ret_btype\":\"text\",\"caption\":\"workspace_id\",\"sample_value\":\"string value\",\"path\":[\"workspace_id\"]},\"_api_c2_model\":{\"ret_btype\":\"text\",\"caption\":\"model\",\"sample_value\":\"string value\",\"path\":[\"model\"]},\"_api_c2_organization_id\":{\"ret_btype\":\"text\",\"caption\":\"organization_id\",\"sample_value\":\"string value\",\"path\":[\"organization_id\"]}}}}",
      "method": "get",
      "ret_value": "api.apiconnector2.bTkBH.bTkBI",
      "publish_as": "data",
      "initialized": true,
      "should_reinitialize": true,
      "url_cant_be_private": true
    },
    "bTkFX1": {
      "name": "session_time_logs",
      "rank": 4,
      "types": "{\"bTkBH.bTkFX1\":{\"caption\":\"session_time_log\",\"fields\":{\"_api_c2_id\":{\"ret_btype\":\"number\",\"caption\":\"id\",\"sample_value\":19,\"path\":[\"id\"]},\"_api_c2_created_at\":{\"ret_btype\":\"date_unix\",\"caption\":\"created_at\",\"sample_value\":\"string value\",\"path\":[\"created_at\"]},\"_api_c2_time_spent_in_seconds\":{\"ret_btype\":\"number\",\"caption\":\"time_spent_in_seconds\",\"sample_value\":111,\"path\":[\"time_spent_in_seconds\"]},\"_api_c2_workspace_id\":{\"ret_btype\":\"text\",\"caption\":\"workspace_id\",\"sample_value\":\"string value\",\"path\":[\"workspace_id\"]},\"_api_c2_organization_id\":{\"ret_btype\":\"text\",\"caption\":\"organization_id\",\"sample_value\":\"string value\",\"path\":[\"organization_id\"]},\"_api_c2_date\":{\"ret_btype\":\"date\",\"caption\":\"date\",\"sample_value\":\"string value\",\"path\":[\"date\"]}}}}",
      "method": "get",
      "headers": {
        "bTkhN1": {
          "private": false
        }
      },
      "ret_value": "api.apiconnector2.bTkBH.bTkFX1",
      "publish_as": "data",
      "initialized": true,
      "should_reinitialize": true,
      "url_cant_be_private": true
    },
    "bTkgp1": {
      "body": "{\n  \"workspace_id\": \"<workspace_id>\",\n  \"organization_id\": \"<organization_id>\",\n  \"time_spent_in_seconds\": <seconds>,\n  \"date\": \"<date>\"\n}\n",
      "name": "insert_session_time_log",
      "url": "https://[project][endpoint]",
      "rank": 0,
      "types": "{\"bTkBH.bTkgp1\":{\"caption\":\"insert_session_time_log\",\"fields\":{\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":201,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]},\"_api_c2_headers.date\":{\"ret_btype\":\"text\",\"caption\":\"headers date\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"date\"]},\"_api_c2_headers.content-length\":{\"ret_btype\":\"text\",\"caption\":\"headers content-length\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-length\"]},\"_api_c2_headers.connection\":{\"ret_btype\":\"text\",\"caption\":\"headers connection\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"connection\"]},\"_api_c2_headers.server\":{\"ret_btype\":\"text\",\"caption\":\"headers server\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"server\"]},\"_api_c2_headers.content-range\":{\"ret_btype\":\"text\",\"caption\":\"headers content-range\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-range\"]},\"_api_c2_headers.cf-ray\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-ray\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-ray\"]},\"_api_c2_headers.cf-cache-status\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-cache-status\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-cache-status\"]},\"_api_c2_headers.strict-transport-security\":{\"ret_btype\":\"text\",\"caption\":\"headers strict-transport-security\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"strict-transport-security\"]},\"_api_c2_headers.x-content-type-options\":{\"ret_btype\":\"text\",\"caption\":\"headers x-content-type-options\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-content-type-options\"]},\"_api_c2_headers.sb-gateway-version\":{\"ret_btype\":\"text\",\"caption\":\"headers sb-gateway-version\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"sb-gateway-version\"]},\"_api_c2_headers.sb-project-ref\":{\"ret_btype\":\"text\",\"caption\":\"headers sb-project-ref\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"sb-project-ref\"]},\"_api_c2_headers.sb-request-id\":{\"ret_btype\":\"text\",\"caption\":\"headers sb-request-id\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"sb-request-id\"]},\"_api_c2_headers.x-envoy-attempt-count\":{\"ret_btype\":\"text\",\"caption\":\"headers x-envoy-attempt-count\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-envoy-attempt-count\"]},\"_api_c2_headers.x-envoy-upstream-service-time\":{\"ret_btype\":\"text\",\"caption\":\"headers x-envoy-upstream-service-time\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-envoy-upstream-service-time\"]},\"_api_c2_headers.set-cookie\":{\"ret_btype\":\"list.text\",\"caption\":\"headers set-cookie\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"set-cookie\"]},\"_api_c2_headers.vary\":{\"ret_btype\":\"text\",\"caption\":\"headers vary\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"vary\"]},\"_api_c2_headers.alt-svc\":{\"ret_btype\":\"text\",\"caption\":\"headers alt-svc\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"alt-svc\"]}}}}",
      "method": "post",
      "headers": {
        "bTkgt1": {
          "key": "Authorization",
          "value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYXV0aGVudGljYXRlZCIsIm9yZ2FuaXphdGlvbl9pZCI6IjE3NjU4Nzc4MTg2OTl4NTIwNjExNjc1NDUxOTQ5MDYwIiwid29ya3NwYWNlX2lkIjoiMTc2NTg3NzgxODY5OXgxNDkwODE2NTY2NDI1MDI2NjAiLCJhcHBfcm9sZSI6IkFkbWluIiwiYXVkIjoiYXV0aGVudGljYXRlZCIsImlhdCI6MTc2ODc5ODY1NiwiZXhwIjoxNzY4ODAyMjU2LCJpc3MiOiJidWJibGUiLCJlbWFpbCI6Imp1bGlhX3Rlc3RfZG9ja2VyQGdtYWlsLmNvbSJ9.aNkrRT0Pmg5_OMDMNxUCI97lv4FC_ZemUKz63mzXfeI",
          "private": false
        }
      },
      "ret_value": "api.apiconnector2.bTkBH.bTkgp1",
      "publish_as": "action",
      "url_params": {
        "bTslA0": {
          "key": "project",
          "value": "yfwacubqdcixciehbjuj",
          "private": false
        },
        "bTslB0": {
          "private": true
        }
      },
      "wrap_error": true,
      "body_params": {
        "bTkgu1": {
          "key": "workspace_id",
          "value": "1765877818699x149081656642502660",
          "private": false
        },
        "bTkgv1": {
          "key": "organization_id",
          "value": "1765877818699x520611675451949060",
          "private": false
        },
        "bTkhA1": {
          "key": "seconds",
          "value": "1111",
          "private": false
        },
        "bTkhL1": {
          "key": "date",
          "value": "2025-12-08 08:52:23.244648+00",
          "private": false
        }
      },
      "get_headers": true,
      "initialized": true,
      "should_reinitialize": false,
      "url_cant_be_private": true
    },
    "bTkhd1": {
      "body": "{\n  \"p_session_id\": <session_id>,\n  \"p_seconds\": <secconds>\n}",
      "name": "update_session_time_logs",
      "url": "https://[project][endpoint]",
      "rank": 2,
      "types": "{\"bTkBH.bTkhd1\":{\"caption\":\"update_session_time_log\",\"fields\":{\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":204,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]},\"_api_c2_headers.date\":{\"ret_btype\":\"text\",\"caption\":\"headers date\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"date\"]},\"_api_c2_headers.connection\":{\"ret_btype\":\"text\",\"caption\":\"headers connection\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"connection\"]},\"_api_c2_headers.server\":{\"ret_btype\":\"text\",\"caption\":\"headers server\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"server\"]},\"_api_c2_headers.content-range\":{\"ret_btype\":\"text\",\"caption\":\"headers content-range\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-range\"]},\"_api_c2_headers.cf-ray\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-ray\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-ray\"]},\"_api_c2_headers.cf-cache-status\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-cache-status\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-cache-status\"]},\"_api_c2_headers.strict-transport-security\":{\"ret_btype\":\"text\",\"caption\":\"headers strict-transport-security\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"strict-transport-security\"]},\"_api_c2_headers.vary\":{\"ret_btype\":\"text\",\"caption\":\"headers vary\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"vary\"]},\"_api_c2_headers.x-content-type-options\":{\"ret_btype\":\"text\",\"caption\":\"headers x-content-type-options\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-content-type-options\"]},\"_api_c2_headers.sb-gateway-version\":{\"ret_btype\":\"text\",\"caption\":\"headers sb-gateway-version\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"sb-gateway-version\"]},\"_api_c2_headers.sb-project-ref\":{\"ret_btype\":\"text\",\"caption\":\"headers sb-project-ref\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"sb-project-ref\"]},\"_api_c2_headers.sb-request-id\":{\"ret_btype\":\"text\",\"caption\":\"headers sb-request-id\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"sb-request-id\"]},\"_api_c2_headers.x-envoy-attempt-count\":{\"ret_btype\":\"text\",\"caption\":\"headers x-envoy-attempt-count\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-envoy-attempt-count\"]},\"_api_c2_headers.x-envoy-upstream-service-time\":{\"ret_btype\":\"text\",\"caption\":\"headers x-envoy-upstream-service-time\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-envoy-upstream-service-time\"]},\"_api_c2_headers.set-cookie\":{\"ret_btype\":\"list.text\",\"caption\":\"headers set-cookie\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"set-cookie\"]},\"_api_c2_headers.alt-svc\":{\"ret_btype\":\"text\",\"caption\":\"headers alt-svc\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"alt-svc\"]}}}}",
      "method": "post",
      "headers": {
        "bTkhf1": {
          "key": "Authorization",
          "value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYXV0aGVudGljYXRlZCIsIm9yZ2FuaXphdGlvbl9pZCI6IjE3NjU4Nzc4MTg2OTl4NTIwNjExNjc1NDUxOTQ5MDYwIiwid29ya3NwYWNlX2lkIjoiMTc2NTg3NzgxODY5OXgxNDkwODE2NTY2NDI1MDI2NjAiLCJhcHBfcm9sZSI6IkFkbWluIiwiYXVkIjoiYXV0aGVudGljYXRlZCIsImlhdCI6MTc2ODc5ODY1NiwiZXhwIjoxNzY4ODAyMjU2LCJpc3MiOiJidWJibGUiLCJlbWFpbCI6Imp1bGlhX3Rlc3RfZG9ja2VyQGdtYWlsLmNvbSJ9.aNkrRT0Pmg5_OMDMNxUCI97lv4FC_ZemUKz63mzXfeI",
          "private": false
        }
      },
      "ret_value": "api.apiconnector2.bTkBH.bTkhd1",
      "publish_as": "action",
      "url_params": {
        "bTslH0": {
          "key": "project",
          "value": "yfwacubqdcixciehbjuj",
          "private": false
        },
        "bTslL0": {
          "private": true
        }
      },
      "wrap_error": true,
      "body_params": {
        "bTkhv1": {
          "key": "session_id",
          "value": "30",
          "private": false
        },
        "bTkhw1": {
          "key": "secconds",
          "value": "60",
          "private": false
        }
      },
      "get_headers": true,
      "initialized": true,
      "should_reinitialize": false,
      "url_cant_be_private": true
    },
    "bTklC1": {
      "body": "{\n  \"workspace_id\": \"<workspace_id>\",\n  \"organization_id\": \"<organization_id>\",\n  \"model\": \"<model>\"\n}\n",
      "name": "insert_message_log",
      "url": "https://[project][endpoint]",
      "rank": 1,
      "types": "{\"bTkBH.bTklC1\":{\"caption\":\"insert_message_log\",\"fields\":{\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":201,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]},\"_api_c2_headers.date\":{\"ret_btype\":\"text\",\"caption\":\"headers date\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"date\"]},\"_api_c2_headers.content-length\":{\"ret_btype\":\"text\",\"caption\":\"headers content-length\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-length\"]},\"_api_c2_headers.connection\":{\"ret_btype\":\"text\",\"caption\":\"headers connection\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"connection\"]},\"_api_c2_headers.server\":{\"ret_btype\":\"text\",\"caption\":\"headers server\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"server\"]},\"_api_c2_headers.content-range\":{\"ret_btype\":\"text\",\"caption\":\"headers content-range\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-range\"]},\"_api_c2_headers.cf-ray\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-ray\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-ray\"]},\"_api_c2_headers.cf-cache-status\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-cache-status\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-cache-status\"]},\"_api_c2_headers.strict-transport-security\":{\"ret_btype\":\"text\",\"caption\":\"headers strict-transport-security\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"strict-transport-security\"]},\"_api_c2_headers.x-content-type-options\":{\"ret_btype\":\"text\",\"caption\":\"headers x-content-type-options\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-content-type-options\"]},\"_api_c2_headers.sb-gateway-version\":{\"ret_btype\":\"text\",\"caption\":\"headers sb-gateway-version\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"sb-gateway-version\"]},\"_api_c2_headers.sb-project-ref\":{\"ret_btype\":\"text\",\"caption\":\"headers sb-project-ref\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"sb-project-ref\"]},\"_api_c2_headers.sb-request-id\":{\"ret_btype\":\"text\",\"caption\":\"headers sb-request-id\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"sb-request-id\"]},\"_api_c2_headers.x-envoy-attempt-count\":{\"ret_btype\":\"text\",\"caption\":\"headers x-envoy-attempt-count\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-envoy-attempt-count\"]},\"_api_c2_headers.x-envoy-upstream-service-time\":{\"ret_btype\":\"text\",\"caption\":\"headers x-envoy-upstream-service-time\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-envoy-upstream-service-time\"]},\"_api_c2_headers.set-cookie\":{\"ret_btype\":\"list.text\",\"caption\":\"headers set-cookie\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"set-cookie\"]},\"_api_c2_headers.vary\":{\"ret_btype\":\"text\",\"caption\":\"headers vary\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"vary\"]},\"_api_c2_headers.alt-svc\":{\"ret_btype\":\"text\",\"caption\":\"headers alt-svc\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"alt-svc\"]}}}}",
      "method": "post",
      "headers": {
        "bTklO1": {
          "key": "Authorization",
          "value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYXV0aGVudGljYXRlZCIsIm9yZ2FuaXphdGlvbl9pZCI6IjE3NjU4Nzc4MTg2OTl4NTIwNjExNjc1NDUxOTQ5MDYwIiwid29ya3NwYWNlX2lkIjoiMTc2NTg3NzgxODY5OXgxNDkwODE2NTY2NDI1MDI2NjAiLCJhcHBfcm9sZSI6IkFkbWluIiwiYXVkIjoiYXV0aGVudGljYXRlZCIsImlhdCI6MTc2ODc5ODY1NiwiZXhwIjoxNzY4ODAyMjU2LCJpc3MiOiJidWJibGUiLCJlbWFpbCI6Imp1bGlhX3Rlc3RfZG9ja2VyQGdtYWlsLmNvbSJ9.aNkrRT0Pmg5_OMDMNxUCI97lv4FC_ZemUKz63mzXfeI",
          "private": false
        }
      },
      "ret_value": "api.apiconnector2.bTkBH.bTklC1",
      "publish_as": "action",
      "url_params": {
        "bTslF0": {
          "key": "project",
          "value": "yfwacubqdcixciehbjuj",
          "private": false
        },
        "bTslG0": {
          "private": true
        }
      },
      "wrap_error": true,
      "body_params": {
        "bTklD1": {
          "key": "workspace_id",
          "value": "1765877818699x149081656642502660",
          "private": false
        },
        "bTklH1": {
          "key": "organization_id",
          "value": "1765877818699x520611675451949060",
          "private": false
        },
        "bTklN1": {
          "key": "model",
          "value": "Gpt 5",
          "private": false
        }
      },
      "get_headers": true,
      "initialized": true,
      "should_reinitialize": false,
      "url_cant_be_private": true
    },
    "bTlef1": {
      "name": "message_usage",
      "rank": 5,
      "types": "{\"bTkBH.bTlef1\":{\"caption\":\"message_usage\",\"fields\":{\"_api_c2_workspace_id\":{\"ret_btype\":\"text\",\"caption\":\"workspace_id\",\"sample_value\":\"string value\",\"path\":[\"workspace_id\"]},\"_api_c2_organization_id\":{\"ret_btype\":\"text\",\"caption\":\"organization_id\",\"sample_value\":\"string value\",\"path\":[\"organization_id\"]},\"_api_c2_model\":{\"ret_btype\":\"text\",\"caption\":\"model\",\"sample_value\":\"string value\",\"path\":[\"model\"]},\"_api_c2_total_messages\":{\"ret_btype\":\"number\",\"caption\":\"total_messages\",\"sample_value\":123,\"path\":[\"total_messages\"]},\"_api_c2_date\":{\"ret_btype\":\"date\",\"caption\":\"date\",\"sample_value\":\"string value\",\"path\":[\"date\"]}}}}",
      "method": "get",
      "ret_value": "api.apiconnector2.bTkBH.bTlef1",
      "publish_as": "data",
      "initialized": true,
      "should_reinitialize": true,
      "url_cant_be_private": true
    },
    "bTnnY2": {
      "name": "delete_message_logs",
      "url": "https://[project][endpoint]?organization_id=eq.[organization_id]",
      "rank": 6,
      "types": "{\"bTkBH.bTnnY2\":{\"caption\":\"delete_message_log\",\"fields\":{\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":204,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]},\"_api_c2_headers.date\":{\"ret_btype\":\"text\",\"caption\":\"headers date\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"date\"]},\"_api_c2_headers.connection\":{\"ret_btype\":\"text\",\"caption\":\"headers connection\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"connection\"]},\"_api_c2_headers.server\":{\"ret_btype\":\"text\",\"caption\":\"headers server\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"server\"]},\"_api_c2_headers.content-range\":{\"ret_btype\":\"text\",\"caption\":\"headers content-range\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-range\"]},\"_api_c2_headers.cf-ray\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-ray\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-ray\"]},\"_api_c2_headers.cf-cache-status\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-cache-status\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-cache-status\"]},\"_api_c2_headers.strict-transport-security\":{\"ret_btype\":\"text\",\"caption\":\"headers strict-transport-security\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"strict-transport-security\"]},\"_api_c2_headers.vary\":{\"ret_btype\":\"text\",\"caption\":\"headers vary\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"vary\"]},\"_api_c2_headers.x-content-type-options\":{\"ret_btype\":\"text\",\"caption\":\"headers x-content-type-options\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-content-type-options\"]},\"_api_c2_headers.sb-gateway-version\":{\"ret_btype\":\"text\",\"caption\":\"headers sb-gateway-version\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"sb-gateway-version\"]},\"_api_c2_headers.sb-project-ref\":{\"ret_btype\":\"text\",\"caption\":\"headers sb-project-ref\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"sb-project-ref\"]},\"_api_c2_headers.sb-request-id\":{\"ret_btype\":\"text\",\"caption\":\"headers sb-request-id\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"sb-request-id\"]},\"_api_c2_headers.x-envoy-attempt-count\":{\"ret_btype\":\"text\",\"caption\":\"headers x-envoy-attempt-count\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-envoy-attempt-count\"]},\"_api_c2_headers.x-envoy-upstream-service-time\":{\"ret_btype\":\"text\",\"caption\":\"headers x-envoy-upstream-service-time\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-envoy-upstream-service-time\"]},\"_api_c2_headers.set-cookie\":{\"ret_btype\":\"list.text\",\"caption\":\"headers set-cookie\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"set-cookie\"]},\"_api_c2_headers.alt-svc\":{\"ret_btype\":\"text\",\"caption\":\"headers alt-svc\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"alt-svc\"]}}}}",
      "method": "delete_method",
      "headers": {
        "bTnnd2": {
          "key": "Authorization",
          "value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYXV0aGVudGljYXRlZCIsIm9yZ2FuaXphdGlvbl9pZCI6IjE3NjU4Nzc4MTg2OTl4NTIwNjExNjc1NDUxOTQ5MDYwIiwid29ya3NwYWNlX2lkIjoiMTc2NTg3NzgxODY5OXgxNDkwODE2NTY2NDI1MDI2NjAiLCJhcHBfcm9sZSI6IkFkbWluIiwiYXVkIjoiYXV0aGVudGljYXRlZCIsImlhdCI6MTc2ODc5ODY1NiwiZXhwIjoxNzY4ODAyMjU2LCJpc3MiOiJidWJibGUiLCJlbWFpbCI6Imp1bGlhX3Rlc3RfZG9ja2VyQGdtYWlsLmNvbSJ9.aNkrRT0Pmg5_OMDMNxUCI97lv4FC_ZemUKz63mzXfeI",
          "private": false
        }
      },
      "ret_value": "api.apiconnector2.bTkBH.bTnnY2",
      "publish_as": "action",
      "url_params": {
        "bTnnZ2": {
          "key": "organization_id",
          "value": "1767960138838x620601594446872600",
          "private": false
        },
        "bTslM0": {
          "key": "project",
          "value": "yfwacubqdcixciehbjuj",
          "private": false
        },
        "bTslN0": {
          "private": true
        }
      },
      "wrap_error": true,
      "get_headers": true,
      "initialized": true,
      "should_reinitialize": false,
      "url_cant_be_private": true
    },
    "bTnnj2": {
      "name": "delete_session_time_logs",
      "url": "https://[project][endpoint]?organization_id=eq.[organization_id]",
      "rank": 7,
      "types": "{\"bTkBH.bTnnj2\":{\"caption\":\"delete_session_time_log\",\"fields\":{\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":204,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]},\"_api_c2_headers.date\":{\"ret_btype\":\"text\",\"caption\":\"headers date\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"date\"]},\"_api_c2_headers.connection\":{\"ret_btype\":\"text\",\"caption\":\"headers connection\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"connection\"]},\"_api_c2_headers.server\":{\"ret_btype\":\"text\",\"caption\":\"headers server\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"server\"]},\"_api_c2_headers.content-range\":{\"ret_btype\":\"text\",\"caption\":\"headers content-range\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-range\"]},\"_api_c2_headers.cf-ray\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-ray\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-ray\"]},\"_api_c2_headers.cf-cache-status\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-cache-status\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-cache-status\"]},\"_api_c2_headers.strict-transport-security\":{\"ret_btype\":\"text\",\"caption\":\"headers strict-transport-security\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"strict-transport-security\"]},\"_api_c2_headers.vary\":{\"ret_btype\":\"text\",\"caption\":\"headers vary\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"vary\"]},\"_api_c2_headers.x-content-type-options\":{\"ret_btype\":\"text\",\"caption\":\"headers x-content-type-options\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-content-type-options\"]},\"_api_c2_headers.sb-gateway-version\":{\"ret_btype\":\"text\",\"caption\":\"headers sb-gateway-version\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"sb-gateway-version\"]},\"_api_c2_headers.sb-project-ref\":{\"ret_btype\":\"text\",\"caption\":\"headers sb-project-ref\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"sb-project-ref\"]},\"_api_c2_headers.sb-request-id\":{\"ret_btype\":\"text\",\"caption\":\"headers sb-request-id\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"sb-request-id\"]},\"_api_c2_headers.x-envoy-attempt-count\":{\"ret_btype\":\"text\",\"caption\":\"headers x-envoy-attempt-count\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-envoy-attempt-count\"]},\"_api_c2_headers.x-envoy-upstream-service-time\":{\"ret_btype\":\"text\",\"caption\":\"headers x-envoy-upstream-service-time\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-envoy-upstream-service-time\"]},\"_api_c2_headers.set-cookie\":{\"ret_btype\":\"list.text\",\"caption\":\"headers set-cookie\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"set-cookie\"]},\"_api_c2_headers.alt-svc\":{\"ret_btype\":\"text\",\"caption\":\"headers alt-svc\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"alt-svc\"]}}}}",
      "method": "delete_method",
      "headers": {
        "bTnnd2": {
          "key": "Authorization",
          "value": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYXV0aGVudGljYXRlZCIsIm9yZ2FuaXphdGlvbl9pZCI6IjE3NjU4Nzc4MTg2OTl4NTIwNjExNjc1NDUxOTQ5MDYwIiwid29ya3NwYWNlX2lkIjoiMTc2NTg3NzgxODY5OXgxNDkwODE2NTY2NDI1MDI2NjAiLCJhcHBfcm9sZSI6IkFkbWluIiwiYXVkIjoiYXV0aGVudGljYXRlZCIsImlhdCI6MTc2ODc5ODY1NiwiZXhwIjoxNzY4ODAyMjU2LCJpc3MiOiJidWJibGUiLCJlbWFpbCI6Imp1bGlhX3Rlc3RfZG9ja2VyQGdtYWlsLmNvbSJ9.aNkrRT0Pmg5_OMDMNxUCI97lv4FC_ZemUKz63mzXfeI",
          "private": false
        }
      },
      "ret_value": "api.apiconnector2.bTkBH.bTnnj2",
      "publish_as": "action",
      "url_params": {
        "bTnnZ2": {
          "key": "organization_id",
          "value": "1767960138838x620601594446872600",
          "private": false
        },
        "bTslR0": {
          "key": "project",
          "value": "yfwacubqdcixciehbjuj",
          "private": false
        },
        "bTslS0": {
          "private": true
        }
      },
      "wrap_error": true,
      "get_headers": true,
      "initialized": true,
      "should_reinitialize": false,
      "url_cant_be_private": true
    }
  },
  "auth": "private_key_header",
  "human": "Supabase",
  "shared_headers": {
    "bTkgo1": {
      "private": true
    }
  },
  "token_param_name": "apikey"
};
