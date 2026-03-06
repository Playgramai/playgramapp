export const apiconnector2_btplj_btswd = {
  "properties": {
    "body_params_context": {
      "entries": {
        "0": {
          "next": {
            "next": {
              "properties": {
                "find": {
                  "entries": {
                    "0": "\\\\"
                  },
                  "type": "TextExpression"
                },
                "replace": {
                  "entries": {
                    "0": "\\"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "find_replace",
              "is_slidable": true
            },
            "type": "Message",
            "name": "format_json_encode",
            "is_slidable": false
          },
          "properties": {
            "arbitrary_text": {
              "entries": {
                "0": "",
                "1": {
                  "properties": {
                    "btype_id": "text",
                    "event_id": "bTnYl0",
                    "optional": false,
                    "param_id": "bTHVN0",
                    "param_name": "message"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                },
                "2": "\\"
              },
              "type": "TextExpression"
            }
          },
          "type": "ArbitraryText",
          "said": "a2Vsdm8tMzE4ODQ="
        }
      },
      "type": "TextExpression"
    },
    "body_params_chat_type": {
      "entries": {
        "0": {
          "next": {
            "next": {
              "next": {
                "type": "Message",
                "name": "to_lowercase",
                "is_slidable": false
              },
              "type": "Message",
              "name": "display",
              "is_slidable": false
            },
            "type": "Message",
            "name": "type_option_chat_type__os_",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTnYl0",
            "optional": false,
            "param_id": "bTPGG",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    },
    "body_params_current_message": {
      "entries": {
        "0": "",
        "1": {
          "next": {
            "next": {
              "properties": {
                "find": {
                  "entries": {
                    "0": "\\\\"
                  },
                  "type": "TextExpression"
                },
                "replace": {
                  "entries": {
                    "0": "\\"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "find_replace",
              "is_slidable": true
            },
            "type": "Message",
            "name": "format_json_encode",
            "is_slidable": false
          },
          "properties": {
            "arbitrary_text": {
              "entries": {
                "0": "",
                "1": {
                  "properties": {
                    "btype_id": "text",
                    "event_id": "bTnYl0",
                    "optional": false,
                    "param_id": "bTHVN0",
                    "param_name": "message"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                },
                "2": "\\"
              },
              "type": "TextExpression"
            }
          },
          "type": "ArbitraryText",
          "said": "a2Vsdm8tMzE4ODQ="
        },
        "2": ""
      },
      "type": "TextExpression"
    }
  },
  "type": "apiconnector2-bTPLJ.bTSwd",
  "id": "bTnYp0"
};
