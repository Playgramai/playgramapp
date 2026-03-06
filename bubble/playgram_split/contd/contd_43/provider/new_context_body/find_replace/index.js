// Original path: contd/contd_37/properties/content/entries/injectedvalue/api_c2_image/is_empty/format_boolean/properties/formatting_for_false/entries/injectedvalue/api_c2_image/split_by/last_element/contains/format_boolean/properties/formatting_for_false/entries/getelement/get_group_data/llm_model_option_llm_models_os
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
