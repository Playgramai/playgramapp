export const ButtonClicked_bTJhp = {
  "properties": {
    "element_id": "bTUhp0"
  },
  "type": "ButtonClicked",
  "id": "bTUqQ0",
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
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUiZ0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTUhv0",
        "custom_event": "bTInX0"
      },
      "type": "TriggerCustomEventFromReusable",
      "id": "bTUqV0"
    }
  }
};
