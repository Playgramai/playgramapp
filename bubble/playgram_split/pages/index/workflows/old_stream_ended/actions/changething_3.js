export const changething_3 = {
  "properties": {
    "condition": {
      "next": {
        "type": "Message",
        "name": "is_not_empty",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTnYM0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "changes": {
      "0": {
        "key": "files_list_custom_file",
        "value": {
          "properties": {
            "action_id": "bTnYM0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "action": "add"
      }
    },
    "to_change": {
      "next": {
        "next": {
          "next": {
            "type": "Message",
            "name": "first_element",
            "is_slidable": false
          },
          "properties": {
            "constraints": {
              "0": {
                "key": "_id",
                "value": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "first_element",
                      "is_slidable": false
                    },
                    "properties": {
                      "regex": {
                        "entries": {
                          "0": "(?<=session_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                    "event_id": "bTnYF0",
                    "optional": false,
                    "param_id": "bTkdL0",
                    "param_name": "data"
                  },
                  "type": "CurrentWorkflowItem",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "constraint_type": "equals"
              }
            }
          },
          "type": "Message",
          "name": "filtered",
          "is_slidable": true
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
    }
  },
  "type": "ChangeThing",
  "id": "bTnYN0"
};
