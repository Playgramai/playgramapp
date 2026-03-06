export const ButtonClicked_bTQBt0 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "next": {
              "args": 1,
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "count",
            "is_slidable": false
          },
          "properties": {
            "constraints": {
              "0": {
                "key": "invitation_accepted__boolean",
                "value": true,
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
    "element_id": "bTQAr0"
  },
  "type": "ButtonClicked",
  "id": "bTQBo0",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "name_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "get_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTQAm0"
                  },
                  "type": "GetElement",
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
            "key": "invitation_accepted__boolean",
            "value": false,
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "type": "ElementParent",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTQBz0"
    },
    "1": {
      "properties": {
        "changes": {
          "0": {
            "key": "onboarding_finished__boolean",
            "value": true,
            "action": {
              "type": "Empty"
            }
          }
        }
      },
      "type": "MakeChangeCurrentUser",
      "id": "bTQFf"
    },
    "2": {
      "properties": {
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTncU0",
        "_wf_param_workspace_user": {
          "properties": {
            "action_id": "bTQBz0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "_wf_param_organization_workspace": {
          "next": {
            "type": "Message",
            "name": "organization_workspace_custom_organization",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTQBz0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTncH0"
    },
    "3": {
      "properties": {
        "element_id": "bTUdV0"
      },
      "type": "ChangePage",
      "id": "bTQBu0"
    }
  }
};
