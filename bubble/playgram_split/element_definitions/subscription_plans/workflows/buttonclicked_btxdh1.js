export const ButtonClicked_bTxDh1 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": "onboarding",
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "type": "Message",
        "name": "get_group_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTxAn1"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "element_id": "bTxBi1"
  },
  "type": "ButtonClicked",
  "id": "bTxDb1",
  "actions": {
    "0": {
      "properties": {
        "value": {
          "properties": {
            "option_set": "option.subscription_plan",
            "option_value": "free"
          },
          "type": "OneOptionValue",
          "is_slidable": false
        },
        "element_id": "bTxAn1",
        "custom_state": "custom.selected_subscription_"
      },
      "type": "SetCustomState",
      "id": "bTxDg1"
    }
  }
};
