// Original path: pages/index/elements/group_main_container/elements/group_chat_container/elements/group_column_container_rg_new_message/elements/group_parent_rg/elements/rg_messages_text/elements/group_rg_cell/elements/group_new_stream_llm_message/elements/group_new_llm_message_image/elements/html_llm_reply/states/state_1
import { properties } from './properties/index.js';

export const state_1 = {
  "properties": properties,
  "condition": {
    "next": {
      "next": {
        "next": {
          "next": {
            "args": "Qwen3 235B A22B Thinking",
            "next": {
              "args": {
                "next": {
                  "next": {
                    "args": 47,
                    "next": {
                      "args": {
                        "properties": {
                          "arbitrary_text": {
                            "entries": {
                              "0": "{session_id: \"",
                              "1": {
                                "next": {
                                  "next": {
                                    "type": "Message",
                                    "name": "_id",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "get_group_data",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "element_id": "bTUiZ0"
                                },
                                "type": "GetElement",
                                "is_slidable": false
                              },
                              "2": "\""
                            },
                            "type": "TextExpression",
                            "said": "a2Vsdm8tMzE4ODQ="
                          }
                        },
                        "type": "ArbitraryText"
                      },
                      "type": "Message",
                      "name": "equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "truncated",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_group_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTiXM0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "first_element",
          "is_slidable": false
        },
        "properties": {
          "regex": {
            "entries": {
              "0": "(?<=model: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
            },
            "type": "TextExpression"
          }
        },
        "type": "Message",
        "name": "extract_regex",
        "is_slidable": true
      },
      "type": "Message",
      "name": "get_group_data",
      "is_slidable": false
    },
    "properties": {
      "element_id": "bTiXM0"
    },
    "type": "GetElement",
    "said": "a2Vsdm8tMzE4ODQ=",
    "is_slidable": false
  },
  "type": "State",
};
