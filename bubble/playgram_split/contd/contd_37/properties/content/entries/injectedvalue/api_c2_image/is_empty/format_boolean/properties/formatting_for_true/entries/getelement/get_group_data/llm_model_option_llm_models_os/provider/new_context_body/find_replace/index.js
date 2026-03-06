// Original path: pages/index/workflows/buttonclicked_btnaw0/actions/schedule_trigger_stream_existing_chat_after_0_seconds/properties/arguments/entry_4/arg_value/get_group_data/provider/not_equals/and/format_boolean/properties/formatting_for_false/entries/getelement/get_list_data/list_from/limit_to/sorted/format_as_text
import { properties } from './properties/index.js';

export const find_replace = {
  "properties": properties,
  "next": {
    "next": {
      "properties": {
        "find": {
          "entries": {
            "0": "<llm_message>"
          },
          "type": "TextExpression"
        },
        "replace": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "args": "null",
                  "next": {
                    "type": "Message",
                    "name": "format_json_encode",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "defaulting_to",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "_api_c2_llm_reply",
                "is_slidable": false
              },
              "type": "InjectedValue",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "Message",
      "name": "find_replace",
      "is_slidable": true
    },
    "properties": {
      "find": {
        "entries": {
          "0": "<user_message>"
        },
        "type": "TextExpression"
      },
      "replace": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "type": "Message",
                "name": "format_json_encode",
                "is_slidable": false
              },
              "type": "Message",
              "name": "_api_c2_user_message",
              "is_slidable": false
            },
            "type": "InjectedValue",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      }
    },
    "type": "Message",
    "name": "find_replace",
    "is_slidable": true
  },
  "type": "Message",
  "name": "find_replace",
  "is_slidable": true,
};
