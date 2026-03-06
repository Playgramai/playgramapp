export const ConditionTrue_bTxTd = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_true",
          "is_slidable": false
        },
        "type": "Message",
        "name": "custom.go_to_next_step_",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTxTP"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "run_when": "every_time"
  },
  "type": "ConditionTrue",
  "id": "bTxTb",
  "actions": {
    "0": {
      "properties": {
        "value": {
          "properties": {
            "option_set": "option.onboarding_steps__os_",
            "option_value": "step_1"
          },
          "type": "OneOptionValue",
          "is_slidable": false
        },
        "element_id": "bTKPI",
        "custom_state": "custom.onboarding_step_"
      },
      "type": "SetCustomState",
      "id": "bTxTh"
    },
    "1": {
      "properties": {
        "value": false,
        "element_id": "bTxTP",
        "custom_state": "custom.go_to_next_step_"
      },
      "type": "SetCustomState",
      "id": "bTxTj"
    }
  }
};
