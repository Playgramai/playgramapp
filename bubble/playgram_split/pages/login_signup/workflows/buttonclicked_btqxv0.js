export const ButtonClicked_bTQXv0 = {
  "properties": {
    "element_id": "bTQXS0"
  },
  "type": "ButtonClicked",
  "id": "bTQXq0",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTQXB0"
      },
      "type": "HideElement",
      "id": "bTYFW"
    },
    "1": {
      "properties": {
        "changes": {
          "0": {
            "key": "members_list_user",
            "value": {
              "type": "CurrentUser",
              "is_slidable": false
            },
            "action": "remove"
          }
        },
        "to_change": {
          "next": {
            "type": "Message",
            "name": "organization_workspace_custom_organization",
            "is_slidable": false
          },
          "type": "ElementParent",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTqhM0"
    },
    "2": {
      "properties": {
        "to_delete": {
          "type": "ElementParent",
          "is_slidable": false
        }
      },
      "type": "DeleteThing",
      "id": "bTQXw0"
    }
  }
};
