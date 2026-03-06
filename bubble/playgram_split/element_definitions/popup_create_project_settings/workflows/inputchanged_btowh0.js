export const InputChanged_bToWh0 = {
  "properties": {
    "element_id": "bTJkX"
  },
  "type": "InputChanged",
  "id": "bToWc0",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTJkX"
          },
          "type": "ThisElement",
          "is_slidable": false
        },
        "element_id": "bTJjK"
      },
      "type": "ShowElement",
      "id": "bToWi0"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTJkX"
          },
          "type": "ThisElement",
          "is_slidable": false
        },
        "element_id": "bTJjK"
      },
      "type": "HideElement",
      "id": "bToWn0"
    }
  }
};
