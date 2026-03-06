export const ButtonClicked_bTxDT1 = {
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
    "element_id": "bTxBK1"
  },
  "type": "ButtonClicked",
  "id": "bTxDN1",
  "actions": {
    "0": {
      "properties": {
        "value": {
          "properties": {
            "option_set": "option.subscription_plan",
            "option_value": "pro"
          },
          "type": "OneOptionValue",
          "is_slidable": false
        },
        "element_id": "bTxAn1",
        "custom_state": "custom.selected_subscription_"
      },
      "type": "SetCustomState",
      "id": "bTxDP1"
    }
  }
};
