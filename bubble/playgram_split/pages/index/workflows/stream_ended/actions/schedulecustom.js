export const schedulecustom = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": {
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
          "type": "Message",
          "name": "and_",
          "is_slidable": false
        },
        "type": "Message",
        "name": "is_not_empty",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTthr0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "delay": 1,
    "arguments": {
      "0": {
        "param_id": "bTsyN1",
        "arg_value": {
          "properties": {
            "action_id": "bTthr0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      }
    },
    "custom_event": "bTthR0"
  },
  "type": "ScheduleCustom",
  "id": "bTtiD0"
};
