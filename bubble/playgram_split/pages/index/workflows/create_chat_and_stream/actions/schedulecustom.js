export const schedulecustom = {
  "properties": {
    "delay": 0.5,
    "arguments": {
      "0": {
        "param_id": "bTPGF",
        "arg_value": {
          "properties": {
            "action_id": "bTtgv0"
          },
          "type": "PreviousStep",
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
        "param_id": "bTPHh0"
      },
      "3": {
        "param_id": "bTPHl0"
      },
      "4": {
        "param_id": "bTPHm0",
        "arg_value": {
          "next": {
            "type": "Message",
            "name": "get_AAV",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUhb0"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
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
            "type": "Message",
            "name": "llm_model_option_llm_models__os_",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTtgv0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "7": {
        "param_id": "bTQFq0",
        "arg_value": {
          "next": {
            "type": "Message",
            "name": "enabled_tools_list_option_llm_tool__os_",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTtgv0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "8": {
        "param_id": "bTQSU0",
        "arg_value": {
          "next": {
            "next": {
              "type": "Message",
              "name": "uploaded_input_file_text",
              "is_slidable": false
            },
            "type": "Message",
            "name": "current_workspace_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        }
      },
      "9": {
        "param_id": "bTYTb",
        "arg_value": {
          "next": {
            "type": "Message",
            "name": "get_AAV",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTVPN"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "10": {
        "param_id": "bTaeV0",
        "arg_value": {
          "type": "Empty"
        }
      },
      "11": {
        "param_id": "bTaet0",
        "arg_value": {
          "type": "Empty"
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
            "event_id": "bTtgt0",
            "optional": false,
            "param_id": "bTssP1",
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
            "event_id": "bTtgt0",
            "optional": true,
            "param_id": "bTwEH0",
            "param_name": "path"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      }
    },
    "custom_event": "bTnZH0"
  },
  "type": "ScheduleCustom",
  "id": "bTthF0"
};
