export const ButtonClicked_bTJqT = {
  "properties": {
    "element_id": "bTJpv"
  },
  "type": "ButtonClicked",
  "id": "bTJqL",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTJjK"
      },
      "type": "HideElement",
      "id": "bTJqN"
    },
    "1": {
      "properties": {
        "value": {
          "next": {
            "next": {
              "args": {
                "type": "ElementParent",
                "is_slidable": false
              },
              "type": "Message",
              "name": "plus_element",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.members_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTJjX"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTJjX",
        "custom_state": "custom.members_"
      },
      "type": "SetCustomState",
      "id": "bTJqR"
    },
    "2": {
      "properties": {
        "element_id": "bTJkT"
      },
      "type": "ResetGroup",
      "id": "bTJqS"
    }
  }
};
