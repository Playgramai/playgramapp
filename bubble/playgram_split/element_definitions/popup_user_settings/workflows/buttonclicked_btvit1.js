export const ButtonClicked_bTvIT1 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_false",
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
  "id": "bTvIJ1",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "shortcuts_on__boolean",
            "value": true,
            "action": {
              "type": "Empty"
            }
          }
        }
      },
      "type": "MakeChangeCurrentUser",
      "id": "bTvIO1"
    },
    "1": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "window.userShortcutsEnabled = \"yes\";"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTvIP1"
    }
  }
};
