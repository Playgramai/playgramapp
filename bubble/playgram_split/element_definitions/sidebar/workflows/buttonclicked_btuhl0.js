export const ButtonClicked_bTuHL0 = {
  "properties": {
    "condition": {
      "next": {
        "args": {
          "next": {
            "next": {
              "type": "Message",
              "name": "organization_workspace_custom_organization",
              "is_slidable": false
            },
            "type": "Message",
            "name": "current_workspace_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "type": "Message",
        "name": "equals",
        "is_slidable": false
      },
      "type": "ElementParent",
      "is_slidable": false
    },
    "element_id": "bTmTj1",
    "breakpoint": true
  },
  "type": "ButtonClicked",
  "id": "bTuGz0",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "current_organization_custom_organization",
            "value": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "current_workspace_custom_workspace",
            "value": {
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
                        "key": "organization_workspace_custom_organization",
                        "value": {
                          "type": "ElementParent",
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
                "name": "workspaces_list_custom_workspace",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          }
        }
      },
      "type": "MakeChangeCurrentUser",
      "id": "bTuHE0"
    },
    "1": {
      "properties": {
        "element_id": "bTPuN"
      },
      "type": "HideElement",
      "id": "bTuHF0"
    },
    "2": {
      "properties": {
        "element_id": "bTUdV0",
        "add_parameters": true,
        "url_parameters": {
          "0": {
            "key": "tab",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "display",
                    "is_slidable": false
                  },
                  "properties": {
                    "option_set": "option.sidebar_menu__os_",
                    "option_value": "analytics"
                  },
                  "type": "OptionValue"
                }
              },
              "type": "TextExpression"
            }
          },
          "1": {
            "key": "sub_tab",
            "value": {
              "entries": {
                "0": "general"
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTuHP0"
    }
  }
};
