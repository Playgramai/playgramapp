export const PageLoaded_bTynP = {
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
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "is_not_empty",
                  "is_slidable": false
                },
                "properties": {
                  "parameter_name": {
                    "entries": {
                      "0": "credits"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "GetParamFromUrl"
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "is_empty",
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
  "id": "bTynJ",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "parameter_name": {
                    "entries": {
                      "0": "credits"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "GetParamFromUrl"
              },
              "type": "Message",
              "name": "contains",
              "is_slidable": false
            },
            "properties": {
              "separator": {
                "entries": {
                  "0": ","
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "split_by",
            "is_slidable": true
          },
          "properties": {
            "arbitrary_text": {
              "entries": {
                "0": "10000,20000,30000,40000,50000,6000070000,80000,90000,100000"
              },
              "type": "TextExpression"
            }
          },
          "type": "ArbitraryText"
        },
        "value": {
          "next": {
            "next": {
              "properties": {
                "thousand_separator": "space"
              },
              "type": "Message",
              "name": "format_number",
              "is_slidable": true
            },
            "type": "Message",
            "name": "convert_to_number",
            "is_slidable": false
          },
          "properties": {
            "parameter_name": {
              "entries": {
                "0": "credits"
              },
              "type": "TextExpression"
            }
          },
          "type": "GetParamFromUrl"
        },
        "element_id": "bTwln",
        "custom_state": "custom.selected_credits_option_"
      },
      "type": "SetCustomState",
      "id": "bTynL"
    }
  }
};
