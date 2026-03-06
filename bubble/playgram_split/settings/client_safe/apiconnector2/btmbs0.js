export const bTMBs0 = {
  "calls": {
    "bTilQ": {
      "name": "Create txt file",
      "url": "[base_url][version][endpoint]",
      "rank": 2,
      "types": "{\"bTMBs0.bTilQ\":{\"caption\":\"Create txt file\",\"fields\":{\"_api_c2_body.status\":{\"ret_btype\":\"text\",\"caption\":\"body status\",\"sample_value\":\"string value\",\"path\":[\"body\",\"status\"]},\"_api_c2_body.response.txt_file\":{\"ret_btype\":\"text\",\"caption\":\"body response txt_file\",\"sample_value\":\"string value\",\"path\":[\"body\",\"response\",\"txt_file\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]},\"_api_c2_headers.date\":{\"ret_btype\":\"text\",\"caption\":\"headers date\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"date\"]},\"_api_c2_headers.content-type\":{\"ret_btype\":\"text\",\"caption\":\"headers content-type\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-type\"]},\"_api_c2_headers.transfer-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers transfer-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"transfer-encoding\"]},\"_api_c2_headers.connection\":{\"ret_btype\":\"text\",\"caption\":\"headers connection\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"connection\"]},\"_api_c2_headers.content-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers content-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-encoding\"]},\"_api_c2_headers.x-powered-by\":{\"ret_btype\":\"text\",\"caption\":\"headers x-powered-by\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-powered-by\"]},\"_api_c2_headers.x-content-type-options\":{\"ret_btype\":\"text\",\"caption\":\"headers x-content-type-options\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-content-type-options\"]},\"_api_c2_headers.access-control-allow-origin\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-origin\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-origin\"]},\"_api_c2_headers.x-bubble-perf\":{\"ret_btype\":\"text\",\"caption\":\"headers x-bubble-perf\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-bubble-perf\"]},\"_api_c2_headers.x-bubble-capacity-used\":{\"ret_btype\":\"text\",\"caption\":\"headers x-bubble-capacity-used\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-bubble-capacity-used\"]},\"_api_c2_headers.x-bubble-capacity-limit\":{\"ret_btype\":\"text\",\"caption\":\"headers x-bubble-capacity-limit\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-bubble-capacity-limit\"]},\"_api_c2_headers.vary\":{\"ret_btype\":\"text\",\"caption\":\"headers vary\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"vary\"]},\"_api_c2_headers.cf-cache-status\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-cache-status\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-cache-status\"]},\"_api_c2_headers.set-cookie\":{\"ret_btype\":\"list.text\",\"caption\":\"headers set-cookie\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"set-cookie\"]},\"_api_c2_headers.strict-transport-security\":{\"ret_btype\":\"text\",\"caption\":\"headers strict-transport-security\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"strict-transport-security\"]},\"_api_c2_headers.server\":{\"ret_btype\":\"text\",\"caption\":\"headers server\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"server\"]},\"_api_c2_headers.cf-ray\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-ray\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-ray\"]},\"_api_c2_headers.alt-svc\":{\"ret_btype\":\"text\",\"caption\":\"headers alt-svc\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"alt-svc\"]}}}}",
      "method": "post",
      "params": {
        "bTilV": {
          "key": "text",
          "value": "\u0442\u0435\u0441\u0442",
          "private": false
        },
        "bTjDz": {
          "key": "file_name",
          "value": "Test",
          "private": false
        },
        "bTjEA": {
          "key": "file_type",
          "value": "doc",
          "private": false
        }
      },
      "ret_value": "api.apiconnector2.bTMBs0.bTilQ",
      "publish_as": "action",
      "url_params": {
        "bTsjz0": {
          "private": true
        },
        "bTskD0": {
          "key": "version",
          "value": "/version-test",
          "private": false,
          "allow_blank": true
        },
        "bTskE0": {
          "private": true
        }
      },
      "wrap_error": true,
      "get_headers": true,
      "initialized": true,
      "should_reinitialize": false,
      "url_cant_be_private": true
    },
    "bTMBt0": {
      "name": "Summarize search",
      "url": "[base_url][version][endpoint]",
      "rank": 0,
      "types": "{\"bTMBs0.bTMBt0\":{\"caption\":\"Summarize search\",\"fields\":{\"_api_c2_body.status\":{\"ret_btype\":\"text\",\"caption\":\"body status\",\"sample_value\":\"string value\",\"path\":[\"body\",\"status\"]},\"_api_c2_body.response.sumarized_memories\":{\"ret_btype\":\"text\",\"caption\":\"body response sumarized_memories\",\"sample_value\":\"string value\",\"path\":[\"body\",\"response\",\"sumarized_memories\"]},\"_api_c2_body.response.usage_prompt_tokens\":{\"ret_btype\":\"number\",\"caption\":\"body response usage_prompt_tokens\",\"sample_value\":444,\"path\":[\"body\",\"response\",\"usage_prompt_tokens\"]},\"_api_c2_body.response.usage_output_tokens\":{\"ret_btype\":\"number\",\"caption\":\"body response usage_output_tokens\",\"sample_value\":66,\"path\":[\"body\",\"response\",\"usage_output_tokens\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]},\"_api_c2_headers.date\":{\"ret_btype\":\"text\",\"caption\":\"headers date\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"date\"]},\"_api_c2_headers.content-type\":{\"ret_btype\":\"text\",\"caption\":\"headers content-type\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-type\"]},\"_api_c2_headers.transfer-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers transfer-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"transfer-encoding\"]},\"_api_c2_headers.connection\":{\"ret_btype\":\"text\",\"caption\":\"headers connection\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"connection\"]},\"_api_c2_headers.content-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers content-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-encoding\"]},\"_api_c2_headers.x-powered-by\":{\"ret_btype\":\"text\",\"caption\":\"headers x-powered-by\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-powered-by\"]},\"_api_c2_headers.x-content-type-options\":{\"ret_btype\":\"text\",\"caption\":\"headers x-content-type-options\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-content-type-options\"]},\"_api_c2_headers.access-control-allow-origin\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-origin\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-origin\"]},\"_api_c2_headers.x-bubble-perf\":{\"ret_btype\":\"text\",\"caption\":\"headers x-bubble-perf\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-bubble-perf\"]},\"_api_c2_headers.x-bubble-capacity-used\":{\"ret_btype\":\"text\",\"caption\":\"headers x-bubble-capacity-used\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-bubble-capacity-used\"]},\"_api_c2_headers.x-bubble-capacity-limit\":{\"ret_btype\":\"text\",\"caption\":\"headers x-bubble-capacity-limit\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-bubble-capacity-limit\"]},\"_api_c2_headers.vary\":{\"ret_btype\":\"text\",\"caption\":\"headers vary\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"vary\"]},\"_api_c2_headers.cf-cache-status\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-cache-status\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-cache-status\"]},\"_api_c2_headers.set-cookie\":{\"ret_btype\":\"list.text\",\"caption\":\"headers set-cookie\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"set-cookie\"]},\"_api_c2_headers.strict-transport-security\":{\"ret_btype\":\"text\",\"caption\":\"headers strict-transport-security\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"strict-transport-security\"]},\"_api_c2_headers.server\":{\"ret_btype\":\"text\",\"caption\":\"headers server\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"server\"]},\"_api_c2_headers.cf-ray\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-ray\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-ray\"]},\"_api_c2_headers.alt-svc\":{\"ret_btype\":\"text\",\"caption\":\"headers alt-svc\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"alt-svc\"]}}}}",
      "method": "post",
      "params": {
        "bTOnV": {
          "key": "target",
          "value": "",
          "private": false,
          "optional": true,
          "allow_blank": true
        },
        "bTMDf0": {
          "key": "tenant_id",
          "value": "1753353192073x588069275917101600",
          "private": false
        },
        "bTMDp0": {
          "key": "user_id",
          "value": "",
          "private": false,
          "optional": true,
          "allow_blank": true
        },
        "bTMDq0": {
          "key": "project_id",
          "value": "",
          "private": false,
          "optional": true,
          "allow_blank": true
        },
        "bTMDr0": {
          "key": "query",
          "value": "Testing",
          "private": false
        },
        "bTMED0": {
          "key": "for_context_window",
          "value": "1000",
          "private": false
        },
        "bTNjT0": {
          "key": "object_count",
          "value": "4",
          "private": false
        },
        "bTNyB0": {
          "key": "memory_level",
          "value": "personal",
          "private": false
        }
      },
      "ret_value": "api.apiconnector2.bTMBs0.bTMBt0",
      "publish_as": "action",
      "url_params": {
        "bTsjr0": {
          "private": true
        },
        "bTsjt0": {
          "key": "version",
          "value": "/version-test",
          "private": false,
          "allow_blank": true
        },
        "bTsjy0": {
          "private": true
        }
      },
      "wrap_error": true,
      "get_headers": true,
      "initialized": true,
      "should_reinitialize": false,
      "url_cant_be_private": true
    },
    "bTrHv1": {
      "name": "Sign Bunny file (Data)",
      "url": "[base_url][version][endpoint]",
      "rank": 3,
      "types": "{\"bTMBs0.bTrHv1\":{\"caption\":\"Sign Bunny file (Data)\",\"fields\":{\"_api_c2_status\":{\"ret_btype\":\"text\",\"caption\":\"status\",\"sample_value\":\"string value\",\"path\":[\"status\"]},\"_api_c2_response.signed_url\":{\"ret_btype\":\"text\",\"caption\":\"response signed_url\",\"sample_value\":\"string value\",\"path\":[\"response\",\"signed_url\"]}}}}",
      "method": "post",
      "params": {
        "bTrIB1": {
          "key": "path",
          "value": "/1763129078913x129607647531327700/",
          "private": false
        },
        "bTrIF1": {
          "key": "url",
          "value": "https://frala.b-cdn.net/1763129078913x129607647531327700/1763129974774.png",
          "private": false
        }
      },
      "headers": {
        "bTrIA1": {
          "key": "string_for_update",
          "value": "123",
          "private": false
        }
      },
      "ret_value": "api.apiconnector2.bTMBs0.bTrHv1",
      "publish_as": "data",
      "url_params": {
        "bTskF0": {
          "private": true
        },
        "bTskJ0": {
          "key": "version",
          "value": "/version-test",
          "private": false,
          "allow_blank": true
        },
        "bTskK0": {
          "private": true
        }
      },
      "initialized": true,
      "should_reinitialize": false,
      "url_cant_be_private": true
    },
    "bTrIG1": {
      "name": "Sign Bunny folder (Action)",
      "url": "[base_url][version][endpoint]",
      "rank": 5,
      "types": "{\"bTMBs0.bTrIG1\":{\"caption\":\"Sign Bunny folder (Action)\",\"fields\":{\"_api_c2_status\":{\"ret_btype\":\"text\",\"caption\":\"status\",\"sample_value\":\"string value\",\"path\":[\"status\"]},\"_api_c2_response.signed_url\":{\"ret_btype\":\"text\",\"caption\":\"response signed_url\",\"sample_value\":\"string value\",\"path\":[\"response\",\"signed_url\"]}}}}",
      "method": "post",
      "params": {
        "bTrIB1": {
          "key": "path",
          "value": "/1763129078913x129607647531327700",
          "private": false
        },
        "bTrIF1": {
          "key": "url",
          "value": "https://frala.b-cdn.net/1763129078913x129607647531327700/1763129974774.png",
          "private": false
        }
      },
      "headers": {
        "bTrIA1": {
          "key": "string_for_update",
          "value": "123",
          "private": false
        }
      },
      "ret_value": "api.apiconnector2.bTMBs0.bTrIG1",
      "publish_as": "action",
      "url_params": {
        "bTskL0": {
          "private": true
        },
        "bTskV0": {
          "key": "version",
          "value": "/version-test",
          "private": false,
          "allow_blank": true
        },
        "bTskW0": {
          "private": true
        }
      },
      "initialized": true,
      "should_reinitialize": true,
      "url_cant_be_private": true
    },
    "bTrLL1": {
      "name": "Sign Bunny file (Action)",
      "url": "[base_url][version][endpoint]",
      "rank": 6,
      "types": "{\"bTMBs0.bTrLL1\":{\"caption\":\"Sign Bunny file (Action)\",\"fields\":{\"_api_c2_status\":{\"ret_btype\":\"text\",\"caption\":\"status\",\"sample_value\":\"string value\",\"path\":[\"status\"]},\"_api_c2_response.signed_url\":{\"ret_btype\":\"text\",\"caption\":\"response signed_url\",\"sample_value\":\"string value\",\"path\":[\"response\",\"signed_url\"]}}}}",
      "method": "post",
      "params": {
        "bTrIB1": {
          "key": "path",
          "value": "/1763129078913x129607647531327700/",
          "private": false
        },
        "bTrIF1": {
          "key": "url",
          "value": "https://playgram-version-test.b-cdn.net/1763129078913x129607647531327700/image.png",
          "private": false
        }
      },
      "ret_value": "api.apiconnector2.bTMBs0.bTrLL1",
      "publish_as": "action",
      "url_params": {
        "bTskX0": {
          "private": true
        },
        "bTskh0": {
          "key": "version",
          "value": "/version-test",
          "private": false,
          "allow_blank": true
        },
        "bTski0": {
          "private": true
        }
      },
      "initialized": true,
      "should_reinitialize": false,
      "url_cant_be_private": true
    },
    "bTrSm0": {
      "name": "Upload Bunny File",
      "url": "[base_url][version][endpoint]",
      "rank": 7,
      "types": "{\"bTMBs0.bTrSm0\":{\"caption\":\"Upload Bunny File\",\"fields\":{\"_api_c2_body.status\":{\"ret_btype\":\"text\",\"caption\":\"body status\",\"sample_value\":\"string value\",\"path\":[\"body\",\"status\"]},\"_api_c2_body.response.file_url\":{\"ret_btype\":\"text\",\"caption\":\"body response file_url\",\"sample_value\":\"string value\",\"path\":[\"body\",\"response\",\"file_url\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]}}}}",
      "method": "post",
      "params": {
        "bTrSr0": {
          "key": "path",
          "value": "path",
          "private": false,
          "optional": true
        },
        "bTrSs0": {
          "key": "file_name",
          "value": "image.png",
          "private": false
        },
        "bTrSt0": {
          "key": "base64",
          "value": "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=",
          "private": false,
          "optional": true
        },
        "bTrTD0": {
          "key": "file_url",
          "value": "",
          "private": false,
          "optional": true
        }
      },
      "ret_value": "api.apiconnector2.bTMBs0.bTrSm0",
      "publish_as": "action",
      "url_params": {
        "bTskj0": {
          "private": true
        },
        "bTskn0": {
          "key": "version",
          "value": "/version-test",
          "private": false,
          "allow_blank": true
        },
        "bTsko0": {
          "private": true
        }
      },
      "wrap_error": true,
      "get_headers": false,
      "initialized": true,
      "should_reinitialize": false,
      "url_cant_be_private": true
    },
    "bTsjh1": {
      "name": "Summarize search (copy)",
      "url": "[https://kelvo-31884.bubbleapps.io][/version-app version][/api/1.1/wf/sumarize_search/]",
      "rank": 1,
      "types": "{\"bTMBs0.bTsjh1\":{\"caption\":\"Summarize search\",\"fields\":{\"_api_c2_body.status\":{\"ret_btype\":\"text\",\"caption\":\"body status\",\"sample_value\":\"string value\",\"path\":[\"body\",\"status\"]},\"_api_c2_body.response.sumarized_memories\":{\"ret_btype\":\"text\",\"caption\":\"body response sumarized_memories\",\"sample_value\":\"string value\",\"path\":[\"body\",\"response\",\"sumarized_memories\"]},\"_api_c2_body.response.usage_prompt_tokens\":{\"ret_btype\":\"number\",\"caption\":\"body response usage_prompt_tokens\",\"sample_value\":444,\"path\":[\"body\",\"response\",\"usage_prompt_tokens\"]},\"_api_c2_body.response.usage_output_tokens\":{\"ret_btype\":\"number\",\"caption\":\"body response usage_output_tokens\",\"sample_value\":71,\"path\":[\"body\",\"response\",\"usage_output_tokens\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]},\"_api_c2_headers.date\":{\"ret_btype\":\"text\",\"caption\":\"headers date\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"date\"]},\"_api_c2_headers.content-type\":{\"ret_btype\":\"text\",\"caption\":\"headers content-type\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-type\"]},\"_api_c2_headers.transfer-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers transfer-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"transfer-encoding\"]},\"_api_c2_headers.connection\":{\"ret_btype\":\"text\",\"caption\":\"headers connection\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"connection\"]},\"_api_c2_headers.content-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers content-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-encoding\"]},\"_api_c2_headers.x-powered-by\":{\"ret_btype\":\"text\",\"caption\":\"headers x-powered-by\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-powered-by\"]},\"_api_c2_headers.x-content-type-options\":{\"ret_btype\":\"text\",\"caption\":\"headers x-content-type-options\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-content-type-options\"]},\"_api_c2_headers.access-control-allow-origin\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-origin\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-origin\"]},\"_api_c2_headers.x-bubble-perf\":{\"ret_btype\":\"text\",\"caption\":\"headers x-bubble-perf\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-bubble-perf\"]},\"_api_c2_headers.x-bubble-capacity-used\":{\"ret_btype\":\"text\",\"caption\":\"headers x-bubble-capacity-used\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-bubble-capacity-used\"]},\"_api_c2_headers.x-bubble-capacity-limit\":{\"ret_btype\":\"text\",\"caption\":\"headers x-bubble-capacity-limit\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-bubble-capacity-limit\"]},\"_api_c2_headers.vary\":{\"ret_btype\":\"text\",\"caption\":\"headers vary\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"vary\"]},\"_api_c2_headers.cf-cache-status\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-cache-status\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-cache-status\"]},\"_api_c2_headers.set-cookie\":{\"ret_btype\":\"list.text\",\"caption\":\"headers set-cookie\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"set-cookie\"]},\"_api_c2_headers.strict-transport-security\":{\"ret_btype\":\"text\",\"caption\":\"headers strict-transport-security\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"strict-transport-security\"]},\"_api_c2_headers.server\":{\"ret_btype\":\"text\",\"caption\":\"headers server\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"server\"]},\"_api_c2_headers.cf-ray\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-ray\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-ray\"]},\"_api_c2_headers.alt-svc\":{\"ret_btype\":\"text\",\"caption\":\"headers alt-svc\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"alt-svc\"]}}}}",
      "method": "post",
      "params": {
        "bTOnV": {
          "key": "target",
          "value": "",
          "private": false,
          "optional": true,
          "allow_blank": true
        },
        "bTMDf0": {
          "key": "tenant_id",
          "value": "1753353192073x588069275917101600",
          "private": false
        },
        "bTMDp0": {
          "key": "user_id",
          "value": "",
          "private": false,
          "optional": true,
          "allow_blank": true
        },
        "bTMDq0": {
          "key": "project_id",
          "value": "",
          "private": false,
          "optional": true,
          "allow_blank": true
        },
        "bTMDr0": {
          "key": "query",
          "value": "Testing",
          "private": false
        },
        "bTMED0": {
          "key": "for_context_window",
          "value": "1000",
          "private": false
        },
        "bTNjT0": {
          "key": "object_count",
          "value": "4",
          "private": false
        },
        "bTNyB0": {
          "key": "memory_level",
          "value": "personal",
          "private": false
        }
      },
      "ret_value": "api.apiconnector2.bTMBs0.bTsjh1",
      "publish_as": "action",
      "url_params": {
        "bTsjl1": {
          "private": true
        },
        "bTsjm1": {
          "private": true
        },
        "bTsjn1": {
          "private": true
        }
      },
      "wrap_error": true,
      "get_headers": true,
      "initialized": true,
      "should_reinitialize": true,
      "url_cant_be_private": true
    },
    "bTtEH1": {
      "name": "Check access code",
      "url": "[base_url][version][endpoint]",
      "rank": 8,
      "types": "{\"bTMBs0.bTtEH1\":{\"caption\":\"Check access code\",\"fields\":{\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]},\"_api_c2_headers.date\":{\"ret_btype\":\"text\",\"caption\":\"headers date\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"date\"]},\"_api_c2_headers.content-type\":{\"ret_btype\":\"text\",\"caption\":\"headers content-type\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-type\"]},\"_api_c2_headers.transfer-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers transfer-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"transfer-encoding\"]},\"_api_c2_headers.connection\":{\"ret_btype\":\"text\",\"caption\":\"headers connection\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"connection\"]},\"_api_c2_headers.content-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers content-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-encoding\"]},\"_api_c2_headers.x-powered-by\":{\"ret_btype\":\"text\",\"caption\":\"headers x-powered-by\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-powered-by\"]},\"_api_c2_headers.x-content-type-options\":{\"ret_btype\":\"text\",\"caption\":\"headers x-content-type-options\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-content-type-options\"]},\"_api_c2_headers.access-control-allow-origin\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-origin\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-origin\"]},\"_api_c2_headers.x-bubble-perf\":{\"ret_btype\":\"text\",\"caption\":\"headers x-bubble-perf\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-bubble-perf\"]},\"_api_c2_headers.x-bubble-capacity-used\":{\"ret_btype\":\"text\",\"caption\":\"headers x-bubble-capacity-used\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-bubble-capacity-used\"]},\"_api_c2_headers.x-bubble-capacity-limit\":{\"ret_btype\":\"text\",\"caption\":\"headers x-bubble-capacity-limit\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-bubble-capacity-limit\"]},\"_api_c2_headers.vary\":{\"ret_btype\":\"text\",\"caption\":\"headers vary\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"vary\"]},\"_api_c2_headers.cf-cache-status\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-cache-status\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-cache-status\"]},\"_api_c2_headers.set-cookie\":{\"ret_btype\":\"list.text\",\"caption\":\"headers set-cookie\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"set-cookie\"]},\"_api_c2_headers.strict-transport-security\":{\"ret_btype\":\"text\",\"caption\":\"headers strict-transport-security\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"strict-transport-security\"]},\"_api_c2_headers.server\":{\"ret_btype\":\"text\",\"caption\":\"headers server\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"server\"]},\"_api_c2_headers.cf-ray\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-ray\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-ray\"]},\"_api_c2_headers.alt-svc\":{\"ret_btype\":\"text\",\"caption\":\"headers alt-svc\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"alt-svc\"]}}}}",
      "method": "post",
      "params": {
        "bTrTD0": {
          "key": "code",
          "value": "6GkdAwwaoZGM8uCLkghCt8hp29zgFoer",
          "private": false,
          "optional": false,
          "allow_blank": true
        }
      },
      "ret_value": "api.apiconnector2.bTMBs0.bTtEH1",
      "publish_as": "action",
      "url_params": {
        "bTskj0": {
          "private": true
        },
        "bTskn0": {
          "key": "version",
          "value": "/version-test",
          "private": false,
          "allow_blank": true
        },
        "bTsko0": {
          "private": true
        }
      },
      "wrap_error": true,
      "get_headers": true,
      "initialized": true,
      "should_reinitialize": false,
      "url_cant_be_private": true
    },
    "bTtFt1": {
      "name": "Check access code (data)",
      "url": "[base_url][version][endpoint]",
      "rank": 10,
      "types": "{\"bTMBs0.bTtFt1\":{\"caption\":\"Check access code\",\"fields\":{\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]},\"_api_c2_headers.date\":{\"ret_btype\":\"text\",\"caption\":\"headers date\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"date\"]},\"_api_c2_headers.content-type\":{\"ret_btype\":\"text\",\"caption\":\"headers content-type\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-type\"]},\"_api_c2_headers.transfer-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers transfer-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"transfer-encoding\"]},\"_api_c2_headers.connection\":{\"ret_btype\":\"text\",\"caption\":\"headers connection\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"connection\"]},\"_api_c2_headers.content-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers content-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-encoding\"]},\"_api_c2_headers.x-powered-by\":{\"ret_btype\":\"text\",\"caption\":\"headers x-powered-by\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-powered-by\"]},\"_api_c2_headers.x-content-type-options\":{\"ret_btype\":\"text\",\"caption\":\"headers x-content-type-options\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-content-type-options\"]},\"_api_c2_headers.access-control-allow-origin\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-origin\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-origin\"]},\"_api_c2_headers.x-bubble-perf\":{\"ret_btype\":\"text\",\"caption\":\"headers x-bubble-perf\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-bubble-perf\"]},\"_api_c2_headers.x-bubble-capacity-used\":{\"ret_btype\":\"text\",\"caption\":\"headers x-bubble-capacity-used\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-bubble-capacity-used\"]},\"_api_c2_headers.x-bubble-capacity-limit\":{\"ret_btype\":\"text\",\"caption\":\"headers x-bubble-capacity-limit\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-bubble-capacity-limit\"]},\"_api_c2_headers.vary\":{\"ret_btype\":\"text\",\"caption\":\"headers vary\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"vary\"]},\"_api_c2_headers.cf-cache-status\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-cache-status\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-cache-status\"]},\"_api_c2_headers.set-cookie\":{\"ret_btype\":\"list.text\",\"caption\":\"headers set-cookie\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"set-cookie\"]},\"_api_c2_headers.strict-transport-security\":{\"ret_btype\":\"text\",\"caption\":\"headers strict-transport-security\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"strict-transport-security\"]},\"_api_c2_headers.server\":{\"ret_btype\":\"text\",\"caption\":\"headers server\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"server\"]},\"_api_c2_headers.cf-ray\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-ray\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-ray\"]},\"_api_c2_headers.alt-svc\":{\"ret_btype\":\"text\",\"caption\":\"headers alt-svc\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"alt-svc\"]}}}}",
      "method": "post",
      "params": {
        "bTrTD0": {
          "key": "code",
          "value": "6GkdAwwaoZGM8uCLkghCt8hp29zgFoer",
          "private": false,
          "optional": false,
          "allow_blank": true
        }
      },
      "ret_value": "api.apiconnector2.bTMBs0.bTtFt1",
      "publish_as": "data",
      "url_params": {
        "bTskj0": {
          "private": true
        },
        "bTskn0": {
          "key": "version",
          "value": "/version-test",
          "private": false,
          "allow_blank": true
        },
        "bTsko0": {
          "private": true
        }
      },
      "wrap_error": true,
      "get_headers": true,
      "initialized": true,
      "should_reinitialize": false,
      "url_cant_be_private": true
    },
    "bTtRv0": {
      "name": "SVG to PNG",
      "url": "[base_url][version][endpoint]",
      "rank": 9,
      "types": "{\"bTMBs0.bTtRv0\":{\"caption\":\"SVG to PNG\",\"fields\":{\"_api_c2_body.status\":{\"ret_btype\":\"text\",\"caption\":\"body status\",\"sample_value\":\"string value\",\"path\":[\"body\",\"status\"]},\"_api_c2_body.response.png\":{\"ret_btype\":\"text\",\"caption\":\"body response png\",\"sample_value\":\"string value\",\"path\":[\"body\",\"response\",\"png\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]}}}}",
      "method": "post",
      "params": {
        "bTtSF0": {
          "key": "svg_url",
          "value": "https://playgram-version-test.b-cdn.net/bcdn_token=5PJ54itj8izZBbAZ88ZcekVYYd_dYRc_0U2cxo-DR2w&token_path=%2F1765877588968x507820378909646960%2F&expires=1769072315/1765877588968x507820378909646960/CSV_1769068711005.svg",
          "private": false
        }
      },
      "ret_value": "api.apiconnector2.bTMBs0.bTtRv0",
      "publish_as": "action",
      "url_params": {
        "bTtRz0": {
          "private": true
        },
        "bTtSA0": {
          "key": "version",
          "value": "/version-62zaz",
          "private": false,
          "allow_blank": true
        },
        "bTtSB0": {
          "private": true
        }
      },
      "wrap_error": true,
      "initialized": true,
      "should_reinitialize": false,
      "url_cant_be_private": true
    },
    "bTvkJ1": {
      "name": "Create json file",
      "url": "[base_url][version][endpoint]",
      "rank": 4,
      "types": "{\"bTMBs0.bTvkJ1\":{\"caption\":\"Create json file\",\"fields\":{\"_api_c2_body.status\":{\"ret_btype\":\"text\",\"caption\":\"body status\",\"sample_value\":\"string value\",\"path\":[\"body\",\"status\"]},\"_api_c2_body.response.json_file\":{\"ret_btype\":\"text\",\"caption\":\"body response json_file\",\"sample_value\":\"string value\",\"path\":[\"body\",\"response\",\"json_file\"]},\"_api_c2_error.status_code\":{\"ret_btype\":\"number\",\"caption\":\"error status_code\",\"sample_value\":200,\"path\":[\"error\",\"status_code\"]},\"_api_c2_error.status_message\":{\"ret_btype\":\"text\",\"caption\":\"error status_message\",\"sample_value\":\"string value\",\"path\":[\"error\",\"status_message\"]},\"_api_c2_error.body\":{\"ret_btype\":\"text\",\"caption\":\"error body\",\"sample_value\":\"string value\",\"path\":[\"error\",\"body\"]},\"_api_c2_returned_an_error\":{\"ret_btype\":\"boolean\",\"caption\":\"returned_an_error\",\"sample_value\":false,\"path\":[\"returned_an_error\"]},\"_api_c2_headers.date\":{\"ret_btype\":\"text\",\"caption\":\"headers date\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"date\"]},\"_api_c2_headers.content-type\":{\"ret_btype\":\"text\",\"caption\":\"headers content-type\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-type\"]},\"_api_c2_headers.transfer-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers transfer-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"transfer-encoding\"]},\"_api_c2_headers.connection\":{\"ret_btype\":\"text\",\"caption\":\"headers connection\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"connection\"]},\"_api_c2_headers.content-encoding\":{\"ret_btype\":\"text\",\"caption\":\"headers content-encoding\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"content-encoding\"]},\"_api_c2_headers.x-powered-by\":{\"ret_btype\":\"text\",\"caption\":\"headers x-powered-by\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-powered-by\"]},\"_api_c2_headers.x-content-type-options\":{\"ret_btype\":\"text\",\"caption\":\"headers x-content-type-options\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-content-type-options\"]},\"_api_c2_headers.access-control-allow-origin\":{\"ret_btype\":\"text\",\"caption\":\"headers access-control-allow-origin\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"access-control-allow-origin\"]},\"_api_c2_headers.x-bubble-perf\":{\"ret_btype\":\"text\",\"caption\":\"headers x-bubble-perf\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-bubble-perf\"]},\"_api_c2_headers.x-bubble-capacity-used\":{\"ret_btype\":\"text\",\"caption\":\"headers x-bubble-capacity-used\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-bubble-capacity-used\"]},\"_api_c2_headers.x-bubble-capacity-limit\":{\"ret_btype\":\"text\",\"caption\":\"headers x-bubble-capacity-limit\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"x-bubble-capacity-limit\"]},\"_api_c2_headers.vary\":{\"ret_btype\":\"text\",\"caption\":\"headers vary\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"vary\"]},\"_api_c2_headers.cf-cache-status\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-cache-status\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-cache-status\"]},\"_api_c2_headers.strict-transport-security\":{\"ret_btype\":\"text\",\"caption\":\"headers strict-transport-security\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"strict-transport-security\"]},\"_api_c2_headers.server\":{\"ret_btype\":\"text\",\"caption\":\"headers server\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"server\"]},\"_api_c2_headers.cf-ray\":{\"ret_btype\":\"text\",\"caption\":\"headers cf-ray\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"cf-ray\"]},\"_api_c2_headers.alt-svc\":{\"ret_btype\":\"text\",\"caption\":\"headers alt-svc\",\"sample_value\":\"string value\",\"path\":[\"headers\",\"alt-svc\"]}}}}",
      "method": "post",
      "params": {
        "bTjDz": {
          "key": "file_name",
          "value": "Test",
          "private": false
        },
        "bTjEA": {
          "key": "container_id",
          "value": "cntr_697cbfec59d88191ab3cb4623ecbcadc098389a909472116",
          "private": false
        },
        "bTvkK1": {
          "key": "file_id",
          "value": "cfile_697cbff4b1ec819188ef02a447213dfb",
          "private": false
        },
        "bTvkL1": {
          "key": "jwt",
          "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxNzY3OTYwMTM4ODM4eDEyNzEwOTA1ODc1MDA1NDQwMCIsImlhdCI6MTc2OTc4MjI0NiwiZXhwIjoxNzY5Nzg5NTY2fQ.0EbdaXfvhZXvpKV0XqTCepRwj38Y-dveXcVZDftkJVo",
          "private": false
        },
        "bTvkP1": {
          "key": "provider",
          "value": "Open AI",
          "private": false
        }
      },
      "ret_value": "api.apiconnector2.bTMBs0.bTvkJ1",
      "publish_as": "action",
      "url_params": {
        "bTsjz0": {
          "private": true
        },
        "bTskD0": {
          "key": "version",
          "value": "/version-62zaz",
          "private": false,
          "allow_blank": true
        },
        "bTskE0": {
          "private": true
        }
      },
      "wrap_error": true,
      "get_headers": true,
      "initialized": true,
      "must_reinitialize": false,
      "should_reinitialize": false,
      "url_cant_be_private": true
    }
  },
  "human": "Own backend",
  "shared_params": {
    "bTqib": {
      "private": true
    }
  }
};
