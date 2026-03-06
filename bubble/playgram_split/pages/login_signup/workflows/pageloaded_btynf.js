export const PageLoaded_bTynF = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "args": "pro",
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
  "id": "bTymz",
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
        "element_id": "bTxTP",
        "custom_state": "custom.selected_subscription_",
        "custom_states_values": {
          "0": {
            "value": {
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
            "custom_state": "custom.selected_credits_option_"
          },
          "1": {
            "value": {
              "next": {
                "next": {
                  "args": "monthly",
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "Monthly"
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "Annually"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "format_boolean",
                    "is_slidable": true
                  },
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
                    "0": "type"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "GetParamFromUrl",
              "said": "a2Vsdm8tMzE4ODQ="
            },
            "custom_state": "custom.plan_type_"
          }
        }
      },
      "type": "SetCustomState",
      "id": "bTynE"
    }
  }
};
