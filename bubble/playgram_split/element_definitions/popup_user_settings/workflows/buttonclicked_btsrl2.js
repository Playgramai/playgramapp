export const ButtonClicked_bTsrl2 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_false",
          "is_slidable": false
        },
        "type": "Message",
        "name": "dark_mode_boolean",
        "is_slidable": false
      },
      "type": "CurrentUser",
      "is_slidable": false
    },
    "element_id": "bTwKJ2"
  },
  "type": "ButtonClicked",
  "id": "bTsrf2",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "dark_mode_boolean",
            "value": true,
            "action": {
              "type": "Empty"
            }
          }
        }
      },
      "type": "MakeChangeCurrentUser",
      "id": "bTsrk2"
    },
    "1": {
      "properties": {
        "element_id": "bTwKB2"
      },
      "type": "HideElement",
      "id": "bTwKt2"
    }
  }
};
