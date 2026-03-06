export const ConditionTrue_bTxgL = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_true",
              "is_slidable": false
            },
            "type": "Message",
            "name": "active_boolean",
            "is_slidable": false
          },
          "type": "Message",
          "name": "organization_workspace_custom_organization",
          "is_slidable": false
        },
        "type": "Message",
        "name": "current_workspace_custom_workspace",
        "is_slidable": false
      },
      "type": "CurrentUser",
      "is_slidable": false
    },
    "run_when": "every_time"
  },
  "type": "ConditionTrue",
  "id": "bTxgF",
  "actions": {
    "0": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "window.userShortcutsEscOnly = \"no\""
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTxgH"
    }
  }
};
