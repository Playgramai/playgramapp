export const ButtonClicked_bTtfN0 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "to_lowercase",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "first_element",
                      "is_slidable": false
                    },
                    "properties": {
                      "regex": {
                        "entries": {
                          "0": "(?<=user_message: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "extract_regex",
                    "is_slidable": true
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "not_contains",
                "is_slidable": false
              },
              "type": "Message",
              "name": "to_lowercase",
              "is_slidable": false
            },
            "properties": {
              "content": {
                "entries": {
                  "0": {
                    "type": "InjectedValue",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "delimiter": {
                "entries": {
                  "0": " "
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "format_as_text",
            "is_slidable": true
          },
          "type": "Message",
          "name": "personal_instructions_list_text",
          "is_slidable": false
        },
        "type": "Message",
        "name": "current_workspace_custom_workspace",
        "is_slidable": false
      },
      "type": "CurrentUser",
      "is_slidable": false
    },
    "element_id": "bTtcf0"
  },
  "type": "ButtonClicked",
  "id": "bTtfH0",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "personal_instructions_list_text",
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
                          "0": "(?<=user_message: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "extract_regex",
                    "is_slidable": true
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": "add"
          }
        },
        "to_change": {
          "next": {
            "type": "Message",
            "name": "current_workspace_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTtfJ0"
    }
  }
};
