export const schedulecustom_1 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": {
            "properties": {
              "action_id": "bTthr0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          },
          "type": "Message",
          "name": "equals",
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
    "delay": 3,
    "arguments": {
      "0": {
        "param_id": "bTVEO0",
        "arg_value": {
          "properties": {
            "action_id": "bTthr0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      }
    },
    "breakpoint": false,
    "custom_event": "bTnWa0"
  },
  "type": "ScheduleCustom",
  "id": "bTtiH0"
};
