export const ButtonClicked_bTPvD = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_true",
          "is_slidable": false
        },
        "type": "Message",
        "name": "completed_boolean",
        "is_slidable": false
      },
      "type": "ElementParent",
      "is_slidable": false
    },
    "element_id": "bTPuZ"
  },
  "type": "ButtonClicked",
  "id": "bTPuy",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTPuN"
      },
      "type": "HideElement",
      "id": "bTvSt"
    },
    "1": {
      "properties": {
        "value": true,
        "element_id": "bTHoP",
        "custom_state": "custom.hide_members_"
      },
      "type": "SetCustomState",
      "id": "bTtAp0"
    },
    "2": {
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
      "id": "bTPvJ"
    },
    "3": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "bubble_fn_resetIndexAttachedFiles();"
          },
          "type": "TextExpression"
        },
        "AAi": false
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTcJB"
    },
    "4": {
      "properties": {
        "url": {
          "entries": {
            "0": {
              "properties": {
                "name": "Website Home"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "1": "",
            "2": {
              "next": {
                "next": {
                  "args": "workspace_settings",
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "?tab=workspace_settings"
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": ""
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "format_boolean",
                    "is_slidable": true
                  },
                  "type": "Message",
                  "name": "equals",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "to_lowercase",
                "is_slidable": false
              },
              "properties": {
                "parameter_name": {
                  "entries": {
                    "0": "tab"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "GetParamFromUrl"
            },
            "3": ""
          },
          "type": "TextExpression"
        }
      },
      "type": "OpenURL",
      "id": "bTvaN"
    }
  }
};
