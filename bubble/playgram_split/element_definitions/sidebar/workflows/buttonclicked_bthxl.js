export const ButtonClicked_bThxl = {
  "properties": {
    "condition": {
      "next": {
        "args": 768,
        "next": {
          "args": {
            "next": {
              "next": {
                "type": "Message",
                "name": "is_false",
                "is_slidable": false
              },
              "type": "Message",
              "name": "custom.expand_",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTHoP"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "type": "Message",
          "name": "and_",
          "is_slidable": false
        },
        "type": "Message",
        "name": "less_or_equal_than",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTHoP",
        "name": "Current Page Width"
      },
      "type": "PageData",
      "is_slidable": false
    },
    "element_id": "bTIbR"
  },
  "type": "ButtonClicked",
  "id": "bThxb",
  "actions": {
    "0": {
      "properties": {
        "value": "personal",
        "element_id": "bTHoP",
        "custom_state": "custom.submenu_"
      },
      "type": "SetCustomState",
      "id": "bThxg"
    },
    "1": {
      "properties": {
        "value": true,
        "element_id": "bTHoP",
        "custom_state": "custom.expand_"
      },
      "type": "SetCustomState",
      "id": "bThxh"
    }
  }
};
