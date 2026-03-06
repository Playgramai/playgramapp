export const PopupOpened_bTaxS = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_empty",
          "is_slidable": false
        },
        "type": "Message",
        "name": "get_group_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTJjX"
      },
      "type": "ThisElement",
      "is_slidable": false
    },
    "element_id": "bTJjX"
  },
  "type": "PopupOpened",
  "id": "bTaxB",
  "actions": {
    "0": {
      "properties": {
        "initial_values": {
          "0": {
            "key": "admins_list_custom_workspace",
            "value": {
              "next": {
                "type": "Message",
                "name": "current_workspace_custom_workspace",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            },
            "action": "add"
          },
          "1": {
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
            "action": "add"
          }
        },
        "thing_type": "custom.project"
      },
      "type": "NewThing",
      "id": "bTaxT"
    },
    "1": {
      "properties": {
        "changes": {
          "0": {
            "key": "projects_list_custom_project",
            "value": {
              "properties": {
                "action_id": "bTaxT"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "action": "add"
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
      "id": "bTqsD"
    },
    "2": {
      "properties": {
        "data_source": {
          "properties": {
            "action_id": "bTaxT"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "element_id": "bTJjX"
      },
      "type": "DisplayGroupData",
      "id": "bTaxY"
    },
    "3": {
      "properties": {
        "data_source": {
          "properties": {
            "action_id": "bTaxT"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "element_id": "bTJjV"
      },
      "type": "DisplayGroupData",
      "id": "bTcgT0"
    }
  }
};
