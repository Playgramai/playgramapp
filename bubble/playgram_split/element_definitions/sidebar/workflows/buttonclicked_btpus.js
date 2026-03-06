export const ButtonClicked_bTPus = {
  "properties": {
    "element_id": "bTPuB"
  },
  "type": "ButtonClicked",
  "id": "bTPun",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTPuN"
      },
      "type": "ToggleElement",
      "id": "bTPut"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_false",
              "is_slidable": false
            },
            "type": "Message",
            "name": "seen_notifications__boolean",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "seen_notifications__boolean",
            "value": true,
            "action": {
              "type": "Empty"
            }
          }
        }
      },
      "type": "MakeChangeCurrentUser",
      "id": "bTQWJ0"
    }
  }
};
