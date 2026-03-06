export const ButtonClicked_bTdXT1 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_false",
          "is_slidable": false
        },
        "type": "Message",
        "name": "invitation_accepted__boolean",
        "is_slidable": false
      },
      "type": "ElementParent",
      "is_slidable": false
    },
    "element_id": "bTpei0",
    "wf_folder": "bTdbL1"
  },
  "type": "ButtonClicked",
  "id": "bTdXJ1",
  "actions": {
    "0": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "window.popupStackOpen(\"popup-delete-member\");\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTwLP"
    },
    "1": {
      "properties": {
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "element_id": "bTdYE1"
      },
      "type": "DisplayGroupData",
      "id": "bTdXO1"
    },
    "2": {
      "properties": {
        "element_id": "bTdYE1"
      },
      "type": "ShowElement",
      "id": "bTdXP1"
    }
  }
};
