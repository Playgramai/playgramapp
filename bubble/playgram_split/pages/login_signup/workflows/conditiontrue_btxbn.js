export const ConditionTrue_bTxbn = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": {
            "properties": {
              "option_set": "option.subscription_plan",
              "option_value": "free"
            },
            "type": "OneOptionValue",
            "is_slidable": false
          },
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "type": "Message",
        "name": "custom.selected_subscription_",
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
  "id": "bTxZi",
  "actions": {
    "0": {
      "properties": {
        "value": {
          "next": {
            "next": {
              "args": 2,
              "type": "Message",
              "name": "limit_to",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.invited_users_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTKPI"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTKPI",
        "custom_state": "custom.invited_users_"
      },
      "type": "SetCustomState",
      "id": "bTxbl"
    }
  }
};
