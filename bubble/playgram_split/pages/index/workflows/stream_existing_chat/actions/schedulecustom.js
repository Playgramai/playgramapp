export const schedulecustom = {
  "properties": {
    "delay": 0,
    "arguments": {
      "0": {
        "param_id": "bTPGF",
        "arg_value": {
          "next": {
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUiZ0"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "1": {
        "param_id": "bTPGH",
        "arg_value": {
          "next": {
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUif0"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "2": {
        "param_id": "bTPHh0",
        "arg_value": {
          "properties": {
            "btype_id": "text",
            "event_id": "bTtgP0",
            "optional": false,
            "param_id": "bTtxz0",
            "param_name": "context"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "3": {
        "param_id": "bTPHl0",
        "arg_value": {
          "properties": {
            "btype_id": "text",
            "event_id": "bTtgP0",
            "optional": false,
            "param_id": "bTtyD0",
            "param_name": "last_messages"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "4": {
        "param_id": "bTPHm0",
        "arg_value": {
          "properties": {
            "btype_id": "text",
            "event_id": "bTtgP0",
            "optional": false,
            "param_id": "bTtwk",
            "param_name": "user_message"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "5": {
        "param_id": "bTPxH0",
        "arg_value": {
          "next": {
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUip0"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "6": {
        "param_id": "bTQFp0",
        "arg_value": {
          "next": {
            "next": {
              "type": "Message",
              "name": "llm_model_option_llm_models__os_",
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
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "7": {
        "param_id": "bTQFq0",
        "arg_value": {
          "next": {
            "next": {
              "type": "Message",
              "name": "enabled_tools_list_option_llm_tool__os_",
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
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "8": {
        "param_id": "bTQSU0",
        "arg_value": {
          "next": {
            "next": {
              "properties": {
                "formatting_for_true": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "uploaded_input_file_file",
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
                    "2": ""
                  },
                  "type": "TextExpression"
                },
                "formatting_for_false": {
                  "entries": {
                    "0": ""
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "format_boolean",
              "is_slidable": true
            },
            "type": "Message",
            "name": "is_false",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "boolean",
            "event_id": "bTtgP0",
            "optional": true,
            "param_id": "bTtwT",
            "param_name": "regenerate"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "9": {
        "param_id": "bTYTb",
        "arg_value": {
          "properties": {
            "btype_id": "date",
            "event_id": "bTtgP0",
            "optional": false,
            "param_id": "bTtyJ",
            "param_name": "user_message_date"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "10": {
        "param_id": "bTaeV0",
        "arg_value": {
          "properties": {
            "btype_id": "boolean",
            "event_id": "bTtgP0",
            "optional": true,
            "param_id": "bTtwT",
            "param_name": "regenerate"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "11": {
        "param_id": "bTaet0",
        "arg_value": {
          "properties": {
            "btype_id": "custom.file",
            "event_id": "bTtgP0",
            "optional": true,
            "param_id": "bTtyE0",
            "param_name": "chat_file_regenerate"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "12": {
        "param_id": "bTagJ0",
        "arg_value": {
          "type": "Empty"
        }
      },
      "13": {
        "param_id": "bTagT0",
        "arg_value": {
          "type": "Empty"
        }
      },
      "14": {
        "param_id": "bTcZD",
        "arg_value": {
          "type": "Empty"
        }
      },
      "15": {
        "param_id": "bTtkB0",
        "arg_value": {
          "properties": {
            "btype_id": "number",
            "event_id": "bTtgP0",
            "optional": false,
            "param_id": "bTsqL1",
            "param_name": "sort"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "16": {
        "param_id": "bTwEC0",
        "arg_value": {
          "properties": {
            "btype_id": "text",
            "event_id": "bTtgP0",
            "optional": true,
            "param_id": "bTwED0",
            "param_name": "file_path"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      }
    },
    "custom_event": "bTnZH0"
  },
  "type": "ScheduleCustom",
  "id": "bTtgV0"
};
