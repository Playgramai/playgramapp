export const ButtonClicked_bTvIb1 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_true",
          "is_slidable": false
        },
        "type": "Message",
        "name": "shortcuts_on__boolean",
        "is_slidable": false
      },
      "type": "CurrentUser",
      "is_slidable": false
    },
    "element_id": "bTvHx1"
  },
  "type": "ButtonClicked",
  "id": "bTvIU1",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "shortcuts_on__boolean",
            "value": false,
            "action": {
              "type": "Empty"
            }
          }
        }
      },
      "type": "MakeChangeCurrentUser",
      "id": "bTvIZ1"
    },
    "1": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "window.userShortcutsEnabled = \"no\";"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTvIa1"
    }
  }
};
