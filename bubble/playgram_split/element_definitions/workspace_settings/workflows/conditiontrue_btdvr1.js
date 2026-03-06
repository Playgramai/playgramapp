export const ConditionTrue_bTdVR1 = {
  "properties": {
    "condition": {
      "next": {
        "type": "Message",
        "name": "is_visible",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTdDD1"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "run_when": "every_time"
  },
  "type": "ConditionTrue",
  "id": "bTdVP1",
  "actions": {
    "0": {
      "properties": {
        "value": {
          "next": {
            "next": {
              "type": "Message",
              "name": "image_image",
              "is_slidable": false
            },
            "type": "Message",
            "name": "current_organization_custom_organization",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "element_id": "bTdRs1",
        "custom_state": "custom.logo_",
        "custom_states_values": {
          "0": {
            "value": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "show_all_projects__boolean",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "current_workspace_custom_workspace",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            },
            "custom_state": "custom.show_all_projects_"
          }
        }
      },
      "type": "SetCustomState",
      "id": "bTdVV1",
      "name": "Set state logo of Group Workspace Settings[S]"
    }
  }
};
