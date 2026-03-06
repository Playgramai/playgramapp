export const ConditionTrue_bTuIx1 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_not_empty",
          "is_slidable": false
        },
        "type": "Message",
        "name": "custom.chat_",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTUhv0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "run_when": "every_time"
  },
  "type": "ConditionTrue",
  "id": "bTuIq1",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTuHz1"
      },
      "type": "ShowElement",
      "id": "bTuIv1"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.chat_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUhv0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "delay": 7,
        "custom_event": "bTuIf1"
      },
      "type": "ScheduleCustom",
      "id": "bTuIw1"
    }
  }
};
