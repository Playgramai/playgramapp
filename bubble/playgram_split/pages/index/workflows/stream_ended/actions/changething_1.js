export const changething_1 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_not_empty",
          "is_slidable": false
        },
        "type": "Message",
        "name": "bTvXP1",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTvXm1"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "changes": {
      "0": {
        "key": "openai_last_container_id_text",
        "value": {
          "entries": {
            "0": {
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
          "type": "TextExpression"
        },
        "action": {
          "type": "Empty"
        }
      },
      "1": {
        "key": "openai_last_container_date_date",
        "value": {
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
        },
        "action": {
          "type": "Empty"
        }
      }
    },
    "to_change": {
      "properties": {
        "action_id": "bTthZ0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    }
  },
  "type": "ChangeThing",
  "id": "bTthf0"
};
