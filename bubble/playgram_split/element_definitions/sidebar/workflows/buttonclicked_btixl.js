export const ButtonClicked_bTIxL = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "args": {
              "next": {
                "args": 768,
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
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
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
    "element_id": "bTtMe2"
  },
  "type": "ButtonClicked",
  "id": "bTIxF",
  "actions": {
    "0": {
      "properties": {
        "value": true,
        "element_id": "bTHoP",
        "custom_state": "custom.expand_"
      },
      "type": "SetCustomState",
      "id": "bTIxH"
    }
  }
};
