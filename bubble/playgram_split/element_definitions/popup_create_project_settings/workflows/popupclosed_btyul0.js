export const PopupClosed_bTYUL0 = {
  "properties": {
    "element_id": "bTJjX"
  },
  "type": "PopupClosed",
  "id": "bTYUJ0",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTJjX",
        "custom_state": "custom.members_"
      },
      "type": "SetCustomState",
      "id": "bTYUP0"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "name_text",
            "is_slidable": false
          },
          "type": "ElementParent",
          "is_slidable": false
        },
        "to_delete": {
          "type": "ElementParent",
          "is_slidable": false
        }
      },
      "type": "DeleteThing",
      "id": "bTaxf"
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
      "id": "bTscF1"
    },
    "3": {
      "properties": {
        "element_id": "bTJjX"
      },
      "type": "ResetGroup",
      "id": "bTYUR0"
    }
  }
};
