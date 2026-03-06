export const ButtonClicked_bTYQs0 = {
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
        "next": {
          "args": {
            "next": {
              "type": "Message",
              "name": "completed_boolean",
              "is_slidable": false
            },
            "type": "ElementParent",
            "is_slidable": false
          },
          "type": "Message",
          "name": "and_",
          "is_slidable": false
        },
        "type": "Message",
        "name": "not_equals",
        "is_slidable": false
      },
      "type": "ElementParent",
      "is_slidable": false
    },
    "element_id": "bTmTj1",
    "breakpoint": true,
    "workflow_disabled": false
  },
  "type": "ButtonClicked",
  "id": "bTYPB0",
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
      "id": "bTYNm0"
    },
    "1": {
      "properties": {
        "element_id": "bTPuN"
      },
      "type": "HideElement",
      "id": "bTYRD0"
    },
    "2": {
      "properties": {
        "value": true,
        "element_id": "bTHoP",
        "custom_state": "custom.hide_members_"
      },
      "type": "SetCustomState",
      "id": "bTtAr0"
    },
    "3": {
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
            "1": "?tab=workspace_settings&sub_tab=general"
          },
          "type": "TextExpression"
        }
      },
      "type": "OpenURL",
      "id": "bTtAk0"
    }
  }
};
