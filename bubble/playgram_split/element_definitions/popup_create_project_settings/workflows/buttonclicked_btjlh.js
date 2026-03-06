export const ButtonClicked_bTJlH = {
  "properties": {
    "element_id": "bTJjj"
  },
  "type": "ButtonClicked",
  "id": "bTJkw",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTJjX"
      },
      "type": "HideElement",
      "id": "bTJlB"
    },
    "1": {
      "properties": {
        "element_id": "bTJjX",
        "custom_state": "custom.members_"
      },
      "type": "SetCustomState",
      "id": "bTJlD"
    },
    "2": {
      "properties": {
        "changes": {
          "0": {
            "key": "unsaved_admins_list_custom_workspace",
            "value": {
              "next": {
                "type": "Message",
                "name": "admins_list_custom_workspace",
                "is_slidable": false
              },
              "type": "InjectedValue",
              "is_slidable": false
            },
            "action": "set_list"
          }
        },
        "to_change": {
          "type": "ElementParent",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTawz"
    },
    "3": {
      "properties": {
        "element_id": "bTJjX"
      },
      "type": "ResetGroup",
      "id": "bTJlC"
    }
  }
};
