export const changething_4 = {
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
              "0": "(?<=file_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
        "event_id": "bTthY0",
        "optional": false,
        "param_id": "bTkdL0",
        "param_name": "data"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    },
    "changes": {
      "0": {
        "key": "message_id_text",
        "value": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2__additional.id",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "_api_c2_body.data.Get.Messages_v3",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTthp0"
              },
              "type": "PreviousStep",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "action": {
          "type": "Empty"
        }
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
                          "0": "(?<=file_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                    "event_id": "bTthY0",
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
        "name": "files_list_custom_file",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTthZ0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    }
  },
  "type": "ChangeThing",
  "id": "bTwJd0"
};
