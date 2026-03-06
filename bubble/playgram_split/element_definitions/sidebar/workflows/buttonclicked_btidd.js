export const ButtonClicked_bTidd = {
  "properties": {
    "condition": {
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
    "element_id": "bTJUz",
    "workflow_disabled": true
  },
  "type": "ButtonClicked",
  "id": "bTidM",
  "actions": {
    "0": {
      "properties": {
        "value": false,
        "element_id": "bTHoP",
        "custom_state": "custom.expand_"
      },
      "type": "SetCustomState",
      "id": "bTide"
    }
  }
};
