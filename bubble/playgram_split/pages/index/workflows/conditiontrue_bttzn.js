export const ConditionTrue_bTtZn = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_true",
            "is_slidable": false
          },
          "type": "Message",
          "name": "need_reset_boolean",
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
    "run_when": "every_time"
  },
  "type": "ConditionTrue",
  "id": "bTtZl",
  "actions": {
    "0": {
      "properties": {
        "delay": 2,
        "arguments": {
          "0": {
            "param_id": "bTVEO0",
            "arg_value": {
              "next": {
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUiZ0"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          }
        },
        "breakpoint": false,
        "custom_event": "bTnWa0"
      },
      "type": "ScheduleCustom",
      "id": "bTtZr"
    }
  }
};
