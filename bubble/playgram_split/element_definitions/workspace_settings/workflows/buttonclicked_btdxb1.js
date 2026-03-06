export const ButtonClicked_bTdXb1 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_true",
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
  "id": "bTdXU1",
  "actions": {
    "0": {
      "properties": {
        "AAh": {
          "entries": {
            "0": "window.popupStackOpen(\"popup-delete-invitation\");\n"
          },
          "type": "TextExpression"
        }
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTwLb"
    },
    "1": {
      "properties": {
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "element_id": "bTdZZ1"
      },
      "type": "DisplayGroupData",
      "id": "bTdXZ1"
    },
    "2": {
      "properties": {
        "element_id": "bTdZZ1"
      },
      "type": "ShowElement",
      "id": "bTdXa1"
    }
  }
};
