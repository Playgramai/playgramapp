export const triggercustomevent_1 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "type": "Message",
          "name": "first_element",
          "is_slidable": false
        },
        "properties": {
          "regex": {
            "entries": {
              "0": "(?<=openAi_file_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
        "event_id": "bTsfv0",
        "optional": false,
        "param_id": "bTkdL0",
        "param_name": "data"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    },
    "arguments": {
      "0": {
        "param_id": "bTvXN1",
        "arg_value": {
          "next": {
            "next": {
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "properties": {
              "regex": {
                "entries": {
                  "0": "(?<=open_ai_container_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
            "event_id": "bTsfv0",
            "optional": false,
            "param_id": "bTkdL0",
            "param_name": "data"
          },
          "type": "CurrentWorkflowItem",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "1": {
        "param_id": "bTvXO1",
        "arg_value": {
          "properties": {
            "action_id": "bTthZ0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      }
    },
    "custom_event": "bTvXH1"
  },
  "type": "TriggerCustomEvent",
  "id": "bTvXm1"
};
