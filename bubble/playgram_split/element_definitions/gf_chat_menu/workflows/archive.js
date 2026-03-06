export const archive = {
  "properties": {
    "event_name": "archive",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "custom.chat",
        "optional": false,
        "param_id": "bTpsf",
        "param_name": "chat"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTuyA1",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "archived__boolean",
            "value": true,
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTuyA1",
            "optional": false,
            "param_id": "bTpsf",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTuyF1"
    },
    "1": {
      "properties": {
        "value": {
          "properties": {
            "action_id": "bTuyF1"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "element_id": "bTIml0",
        "custom_state": "custom.chat_"
      },
      "type": "SetCustomState",
      "id": "bTuyG1"
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
            "name": "project_custom_project",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTuyA1",
            "optional": false,
            "param_id": "bTpsf",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "element_id": "Current page",
        "add_parameters": true,
        "url_parameters": {
          "0": {
            "key": "project",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "_id",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "project_custom_project",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "custom.chat",
                    "event_id": "bTuyA1",
                    "optional": false,
                    "param_id": "bTpsf",
                    "param_name": "chat"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                },
                "1": ""
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTuyH1"
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "project_custom_project",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTuyA1",
            "optional": false,
            "param_id": "bTpsf",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "element_id": "Current page",
        "add_parameters": false
      },
      "type": "ChangePage",
      "id": "bTuyL1"
    }
  }
};
