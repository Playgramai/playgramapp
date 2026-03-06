export const ConditionTrue_bTJsv = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "args": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_true",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bToWp0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
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
      "type": "GetElement",
      "is_slidable": false
    },
    "run_when": "every_time"
  },
  "type": "ConditionTrue",
  "id": "bTJst",
  "actions": {
    "0": {
      "properties": {
        "length": 150
      },
      "type": "PauseWFClient",
      "id": "bToWv0"
    },
    "1": {
      "properties": {
        "element_id": "bTJjK"
      },
      "type": "ShowElement",
      "id": "bTJsz"
    }
  }
};
