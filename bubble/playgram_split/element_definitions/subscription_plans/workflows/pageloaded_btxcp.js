export const PageLoaded_bTxcp = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_not_empty",
          "is_slidable": false
        },
        "type": "Message",
        "name": "param_bTxcd",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTxAn1"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "breakpoint": true
  },
  "type": "PageLoaded",
  "id": "bTxcn",
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
            "name": "param_bTxcd",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTxAn1"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTxAn1",
        "custom_state": "custom.selected_credits_option_",
        "custom_states_values": {
          "0": {
            "value": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "subscription_plan_option_subscription_plan",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "param_bTxcd",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTxAn1"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "custom_state": "custom.selected_subscription_"
          },
          "1": {
            "value": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "properties": {
                        "formatting_for_true": {
                          "entries": {
                            "0": "",
                            "1": {
                              "next": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "next": {
                                        "properties": {
                                          "formatting_for_true": {
                                            "entries": {
                                              "0": "Annually"
                                            },
                                            "type": "TextExpression"
                                          },
                                          "formatting_for_false": {
                                            "entries": {
                                              "0": "Monthly"
                                            },
                                            "type": "TextExpression"
                                          }
                                        },
                                        "type": "Message",
                                        "name": "format_boolean",
                                        "is_slidable": true
                                      },
                                      "type": "Message",
                                      "name": "is_true",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "annualy_boolean",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "subscription_custom_subscription",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "param_bTxcd",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTxAn1"
                              },
                              "type": "GetElement",
                              "said": "a2Vsdm8tMzE4ODQ=",
                              "is_slidable": false
                            },
                            "2": ""
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
                    "name": "is_not_empty",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "subscription_custom_subscription",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "param_bTxcd",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTxAn1"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "custom_state": "custom.plan_type_"
          }
        }
      },
      "type": "SetCustomState",
      "id": "bTxct"
    }
  }
};
