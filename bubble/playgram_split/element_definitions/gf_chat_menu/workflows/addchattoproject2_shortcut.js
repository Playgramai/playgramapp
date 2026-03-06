export const addChatToProject2_shortcut = {
  "properties": {
    "event_name": "addChatToProject2 - shortcut",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "custom.project",
        "optional": false,
        "param_id": "bTqEH2",
        "param_name": "project"
      },
      "1": {
        "is_list": false,
        "btype_id": "custom.chat",
        "optional": false,
        "param_id": "bTqEI2",
        "param_name": "chat"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTuvw1",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "project_custom_project",
            "value": {
              "properties": {
                "btype_id": "custom.project",
                "event_id": "bTuvw1",
                "optional": false,
                "param_id": "bTqEH2",
                "param_name": "project"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "type_option_chat_type__os_",
            "value": {
              "properties": {
                "option_set": "option.chat_type__os_",
                "option_value": "project"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTuvw1",
            "optional": false,
            "param_id": "bTqEI2",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTuwB1"
    },
    "1": {
      "properties": {
        "changes": {
          "0": {
            "key": "chats_list_custom_chat",
            "value": {
              "properties": {
                "btype_id": "custom.chat",
                "event_id": "bTuvw1",
                "optional": false,
                "param_id": "bTqEI2",
                "param_name": "chat"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "action": "add"
          }
        },
        "to_change": {
          "properties": {
            "btype_id": "custom.project",
            "event_id": "bTuvw1",
            "optional": false,
            "param_id": "bTqEH2",
            "param_name": "project"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTuwC1"
    },
    "2": {
      "properties": {
        "element_id": "Current page",
        "add_parameters": true,
        "url_parameters": {
          "0": {
            "key": "chat",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_id",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTuwB1"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            }
          },
          "1": {
            "key": "project",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_id",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTuwC1"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTuwD1"
    }
  }
};
