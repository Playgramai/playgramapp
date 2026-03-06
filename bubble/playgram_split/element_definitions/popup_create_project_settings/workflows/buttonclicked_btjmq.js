export const ButtonClicked_bTJmQ = {
  "properties": {
    "element_id": "bToJD2"
  },
  "type": "ButtonClicked",
  "id": "bTJmJ",
  "actions": {
    "0": {
      "properties": {
        "value": {
          "next": {
            "next": {
              "args": {
                "type": "ElementParent",
                "is_slidable": false
              },
              "type": "Message",
              "name": "minus_element",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.members_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTJjX"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTJjX",
        "custom_state": "custom.members_"
      },
      "type": "SetCustomState",
      "id": "bTKAN"
    },
    "1": {
      "properties": {
        "changes": {
          "0": {
            "key": "unsaved_admins_list_custom_workspace",
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
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTJjX"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTscH1"
    }
  }
};
