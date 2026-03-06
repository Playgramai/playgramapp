export const ButtonClicked_bTxyX = {
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
              "next": {
                "type": "Message",
                "name": "is_false",
                "is_slidable": false
              },
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
  "id": "bTxyL",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTPuN"
      },
      "type": "HideElement",
      "id": "bTxyR"
    },
    "1": {
      "properties": {
        "value": true,
        "element_id": "bTHoP",
        "custom_state": "custom.hide_members_"
      },
      "type": "SetCustomState",
      "id": "bTxyS"
    },
    "2": {
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
            "1": "login-signup?mode=onboarding&workspace=",
            "2": {
              "next": {
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "3": ""
          },
          "type": "TextExpression"
        }
      },
      "type": "OpenURL",
      "id": "bTxyT"
    }
  }
};
