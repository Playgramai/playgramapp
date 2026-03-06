export const reset_states = {
  "properties": {
    "event_name": "reset_states",
    "breakpoint": true,
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "custom.chat",
        "optional": false,
        "param_id": "bTspV0",
        "param_name": "chat"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTspN0",
  "actions": {
    "0": {
      "properties": {
        "delay": 1,
        "arguments": {
          "0": {
            "param_id": "bTVEO0",
            "arg_value": {
              "properties": {
                "btype_id": "custom.chat",
                "event_id": "bTspN0",
                "optional": false,
                "param_id": "bTspV0",
                "param_name": "chat"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          }
        },
        "breakpoint": false,
        "custom_event": "bTnWa0"
      },
      "type": "ScheduleCustom",
      "id": "bTspT0"
    }
  }
};
