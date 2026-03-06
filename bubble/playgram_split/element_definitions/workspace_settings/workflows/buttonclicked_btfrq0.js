export const ButtonClicked_bTfRq0 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": {
            "type": "ElementParent",
            "is_slidable": false
          },
          "type": "Message",
          "name": "not_equals",
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
  "id": "bTfRk0",
  "actions": {
    "0": {
      "properties": {
        "value": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "element_id": "bTfQP0",
        "custom_state": "custom.selected_user_"
      },
      "type": "SetCustomState",
      "id": "bTfRp0"
    }
  }
};
