export const ButtonClicked_bTHpq = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "args": {
              "next": {
                "args": 768,
                "type": "Message",
                "name": "greater_than",
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
        "name": "custom.open__",
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
  "id": "bTHpk",
  "actions": {
    "0": {
      "properties": {
        "value": true,
        "element_id": "bTHoP",
        "custom_state": "custom.open__"
      },
      "type": "SetCustomState",
      "id": "bTHpp"
    }
  }
};
