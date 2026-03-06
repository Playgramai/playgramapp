import { Schedule_trigger_stream_existing_chat_after_0_seconds } from './schedule_trigger_stream_existing_chat_after_0_seconds/index.js';

export const actions = {
  "4": Schedule_trigger_stream_existing_chat_after_0_seconds,
  "0": {
    "properties": {
      "element_id": "bTUec0"
    },
    "type": "SetFocusToElement",
    "id": "bTveR"
  },
  "1": {
    "properties": {
      "AAh": {
        "entries": {
          "0": "$('#main-input').val('');\n"
        },
        "type": "TextExpression"
      },
      "AAi": false
    },
    "type": "1488796042609x768734193128308700-AAg",
    "id": "bTnaL0"
  },
  "2": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
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
      "value": {
        "next": {
          "next": {
            "args": {
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
            },
            "type": "Message",
            "name": "plus_element",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.streaming_chats_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "element_id": "bTUdV0",
      "custom_state": "custom.streaming_chats_"
    },
    "type": "SetCustomState",
    "id": "bTval0"
  },
  "3": {
    "properties": {
      "element_id": "bTiXM0"
    },
    "type": "ResetGroup",
    "id": "bTuGP"
  },
  "5": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_empty",
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
      "data_source": {
        "next": {
          "properties": {
            "separator": {
              "entries": {
                "0": "<#NANI?!>"
              },
              "type": "TextExpression"
            }
          },
          "type": "Message",
          "name": "split_by",
          "is_slidable": true
        },
        "properties": {
          "arbitrary_text": {
            "entries": {
              "0": "<#NANI?>chat_id: \"new_chat\"<#NANI?>user_message: \"",
              "1": {
                "next": {
                  "type": "Message",
                  "name": "get_AAV",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUhb0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "2": "\"<#NANI?>model: \"",
              "3": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "display",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_group_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTcdF"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "4": "\"<#NANI?>",
              "6": "",
              "8": ""
            },
            "type": "TextExpression"
          }
        },
        "type": "ArbitraryText"
      },
      "element_id": "bTtcm0"
    },
    "type": "DisplayListData",
    "id": "bTuFv"
  },
  "6": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_empty",
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
      "delay": 0,
      "arguments": {
        "0": {
          "param_id": "bTssP1",
          "arg_value": {
            "next": {
              "properties": {
                "component_to_extract": "UNIX"
              },
              "type": "Message",
              "name": "extract_from_date",
              "is_slidable": true
            },
            "properties": {
              "name": "Current Date/Time"
            },
            "type": "PageData",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "1": {
          "param_id": "bTwEH0",
          "arg_value": {
            "next": {
              "type": "Message",
              "name": "get_group_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTvZj"
            },
            "type": "GetElement",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        }
      },
      "custom_event": "bTtgt0"
    },
    "type": "ScheduleCustom",
    "id": "bTnaV0"
  },
};
