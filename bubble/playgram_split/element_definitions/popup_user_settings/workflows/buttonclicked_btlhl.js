export const ButtonClicked_bTLHL = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_false",
          "is_slidable": false
        },
        "type": "Message",
        "name": "custom.delete_memories__",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTLFs"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "element_id": "bTLGK"
  },
  "type": "ButtonClicked",
  "id": "bTLHF",
  "actions": {
    "0": {
      "properties": {
        "value": true,
        "element_id": "bTLFs",
        "custom_state": "custom.delete_memories__"
      },
      "type": "SetCustomState",
      "id": "bTLHH"
    }
  }
};
