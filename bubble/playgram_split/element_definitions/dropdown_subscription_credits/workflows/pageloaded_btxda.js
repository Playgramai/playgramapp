export const PageLoaded_bTxdA = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "args": {
              "next": {
                "next": {
                  "args": {
                    "properties": {
                      "option_set": "option.subscription_plan",
                      "option_value": "pro"
                    },
                    "type": "OneOptionValue",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "equals",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "param_bTwmn",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTwln"
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
        "type": "Message",
        "name": "param_bTxdB",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTwln"
      },
      "type": "GetElement",
      "is_slidable": false
    }
  },
  "type": "PageLoaded",
  "id": "bTxcv",
  "actions": {
    "0": {
      "properties": {
        "value": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "decimal_place": 0,
                  "thousand_separator": "space"
                },
                "type": "Message",
                "name": "format_number",
                "is_slidable": true
              },
              "type": "Message",
              "name": "credits_count_number",
              "is_slidable": false
            },
            "type": "Message",
            "name": "param_bTxdB",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTwln"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTwln",
        "custom_state": "custom.selected_credits_option_"
      },
      "type": "SetCustomState",
      "id": "bTxdF"
    }
  }
};
