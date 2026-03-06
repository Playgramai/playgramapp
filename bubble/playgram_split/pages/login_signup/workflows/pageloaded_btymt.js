export const PageLoaded_bTymt = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": "free",
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "type": "Message",
        "name": "to_lowercase",
        "is_slidable": false
      },
      "properties": {
        "parameter_name": {
          "entries": {
            "0": "plan"
          },
          "type": "TextExpression"
        }
      },
      "type": "GetParamFromUrl"
    }
  },
  "type": "PageLoaded",
  "id": "bTymr",
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
        "element_id": "bTxTP",
        "custom_state": "custom.selected_subscription_"
      },
      "type": "SetCustomState",
      "id": "bTymx"
    }
  }
};
