import { body_params_query } from './body_params_query/index.js';

export const properties = {
  "body_params_query": body_params_query,
  "condition": {
    "next": {
      "next": {
        "next": {
          "next": {
            "args": "true",
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "trimmed",
          "is_slidable": false
        },
        "type": "Message",
        "name": "first_element",
        "is_slidable": false
      },
      "properties": {
        "regex": {
          "entries": {
            "0": "(?<='save_to_long_term'\\s*:\\s*')[^']+"
          },
          "type": "TextExpression"
        }
      },
      "type": "Message",
      "name": "extract_regex",
      "is_slidable": true
    },
    "properties": {
      "btype_id": "text",
      "event_id": "bTLtD",
      "param_id": "full_text",
      "param_name": "full_text"
    },
    "type": "APIEventParameter",
    "is_slidable": false
  },
  "url_params_uuid": {
    "entries": {
      "0": {
        "properties": {
          "btype_id": "text",
          "event_id": "bTLtD",
          "param_id": "object_id",
          "param_name": "object_id"
        },
        "type": "APIEventParameter",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      }
    },
    "type": "TextExpression"
  },
  "url_params_endpoint": {
    "entries": {
      "0": {
        "next": {
          "next": {
            "properties": {
              "formatting_for_true": {
                "entries": {
                  "0": "2o38skivtzypqttgw5haa.c0.us-west3.gcp.weaviate.cloud"
                },
                "type": "TextExpression"
              },
              "formatting_for_false": {
                "entries": {
                  "0": "ugsj5mtstmaoe4gwkzrxg.c0.europe-west3.gcp.weaviate.cloud"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "format_boolean",
            "is_slidable": true
          },
          "type": "Message",
          "name": "is_true",
          "is_slidable": false
        },
        "properties": {
          "name": "AppIsTest"
        },
        "type": "PageData",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      }
    },
    "type": "TextExpression"
  },
  "url_params_collection": {
    "type": "TextExpression"
  },
};
