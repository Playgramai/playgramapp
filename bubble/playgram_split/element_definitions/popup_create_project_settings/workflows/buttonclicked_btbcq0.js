export const ButtonClicked_bTbCQ0 = {
  "properties": {
    "element_id": "bTbBf0"
  },
  "type": "ButtonClicked",
  "id": "bTbCE0",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "members_list_custom_workspace",
            "value": {
              "next": {
                "type": "Message",
                "name": "current_workspace_custom_workspace",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            },
            "action": "remove"
          },
          "1": {
            "key": "admins_list_custom_workspace",
            "value": {
              "next": {
                "type": "Message",
                "name": "current_workspace_custom_workspace",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "action": "remove"
          }
        },
        "to_change": {
          "type": "ElementParent",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTbCJ0"
    },
    "1": {
      "properties": {
        "changes": {
          "0": {
            "key": "projects_list_custom_project",
            "value": {
              "type": "ElementParent",
              "is_slidable": false
            },
            "action": "remove"
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
      "id": "bTqMv0"
    },
    "2": {
      "properties": {
        "element_id": "bTbBP0"
      },
      "type": "HideElement",
      "id": "bTbCK0"
    },
    "3": {
      "properties": {
        "element_id": "bTJjX"
      },
      "type": "HideElement",
      "id": "bTbCR0"
    },
    "4": {
      "properties": {
        "element_id": "bTbBP0"
      },
      "type": "ResetGroup",
      "id": "bTbCL0"
    },
    "5": {
      "properties": {
        "element_id": "Current page",
        "add_parameters": false,
        "url_parameters": {
          "0": {
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
                    "action_id": "bTItQ0"
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
      "id": "bTbCP0"
    }
  }
};
