export const delete_invited_user = {
  "properties": {
    "expose": false,
    "wf_name": "delete_invited_user",
    "parameters": {
      "0": {
        "key": "workspace_user",
        "value": "custom.workspace",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      }
    },
    "ignore_privacy_rules": true
  },
  "type": "APIEvent",
  "id": "bTqXP0",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "args": 1,
                  "type": "Message",
                  "name": "greater_than",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "count",
                "is_slidable": false
              },
              "type": "Message",
              "name": "workspaces_list_custom_workspace",
              "is_slidable": false
            },
            "type": "Message",
            "name": "user_user",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.workspace",
            "event_id": "bTqXP0",
            "param_id": "workspace_user",
            "param_name": "workspace_user"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "current_workspace_custom_workspace",
            "value": {
              "next": {
                "next": {
                  "next": {
                    "args": {
                      "properties": {
                        "btype_id": "custom.workspace",
                        "event_id": "bTqXP0",
                        "param_id": "workspace_user",
                        "param_name": "workspace_user"
                      },
                      "type": "APIEventParameter",
                      "is_slidable": false
                    },
                    "next": {
                      "type": "Message",
                      "name": "first_element",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "minus_element",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "workspaces_list_custom_workspace",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "user_user",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.workspace",
                "event_id": "bTqXP0",
                "param_id": "workspace_user",
                "param_name": "workspace_user"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "next": {
            "type": "Message",
            "name": "user_user",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.workspace",
            "event_id": "bTqXP0",
            "param_id": "workspace_user",
            "param_name": "workspace_user"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTqXi0"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "args": 1,
                  "type": "Message",
                  "name": "less_or_equal_than",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "count",
                "is_slidable": false
              },
              "type": "Message",
              "name": "workspaces_list_custom_workspace",
              "is_slidable": false
            },
            "type": "Message",
            "name": "user_user",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.workspace",
            "event_id": "bTqXP0",
            "param_id": "workspace_user",
            "param_name": "workspace_user"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "to_delete": {
          "next": {
            "type": "Message",
            "name": "user_user",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.workspace",
            "event_id": "bTqXP0",
            "param_id": "workspace_user",
            "param_name": "workspace_user"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "DeleteThing",
      "id": "bTqXb0"
    },
    "2": {
      "properties": {
        "to_delete": {
          "properties": {
            "btype_id": "custom.workspace",
            "event_id": "bTqXP0",
            "param_id": "workspace_user",
            "param_name": "workspace_user"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "DeleteThing",
      "id": "bTqXV0"
    }
  }
};
