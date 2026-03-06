export const ButtonClicked_bTgij = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": {
            "type": "ElementParent",
            "is_slidable": false
          },
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "type": "Message",
        "name": "custom.selected_user_",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTfQP0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "element_id": "bTfQR0",
    "wf_folder": "bTgik"
  },
  "type": "ButtonClicked",
  "id": "bTgid",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTfQP0",
        "custom_state": "custom.selected_user_"
      },
      "type": "SetCustomState",
      "id": "bTgif"
    }
  }
};
