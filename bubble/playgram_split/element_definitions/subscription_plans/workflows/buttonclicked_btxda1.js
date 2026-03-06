export const ButtonClicked_bTxDa1 = {
  "properties": {
    "element_id": "bTxBd1"
  },
  "type": "ButtonClicked",
  "id": "bTxDU1",
  "actions": {
    "0": {
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
        "value": {
          "properties": {
            "option_set": "option.subscription_plan",
            "option_value": "pro"
          },
          "type": "OneOptionValue",
          "is_slidable": false
        },
        "element_id": "bTxAn1",
        "custom_state": "custom.selected_subscription_",
        "custom_states_values": {
          "0": {
            "value": true,
            "custom_state": "custom.go_to_next_step_"
          },
          "1": {
            "value": {
              "next": {
                "type": "Message",
                "name": "custom.selected_credits_option_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTxBh1"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "custom_state": "custom.selected_credits_option_"
          }
        }
      },
      "type": "SetCustomState",
      "id": "bTxDZ1"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": "onboarding",
              "next": {
                "args": {
                  "next": {
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
                        "next": {
                          "args": {
                            "next": {
                              "next": {
                                "next": {
                                  "args": {
                                    "next": {
                                      "next": {
                                        "next": {
                                          "type": "Message",
                                          "name": "convert_to_number",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "find": {
                                            "entries": {
                                              "0": " "
                                            },
                                            "type": "TextExpression"
                                          }
                                        },
                                        "type": "Message",
                                        "name": "find_replace",
                                        "is_slidable": true
                                      },
                                      "type": "Message",
                                      "name": "custom.selected_credits_option_",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "element_id": "bTxBh1"
                                    },
                                    "type": "GetElement",
                                    "is_slidable": false
                                  },
                                  "next": {
                                    "args": {
                                      "next": {
                                        "next": {
                                          "next": {
                                            "type": "Message",
                                            "name": "is_false",
                                            "is_slidable": false
                                          },
                                          "type": "Message",
                                          "name": "active_boolean",
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
                                    "type": "Message",
                                    "name": "or_",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "not_equals",
                                  "is_slidable": false
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
                          "next": {
                            "args": {
                              "next": {
                                "next": {
                                  "args": {
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
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "not_equals",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "custom.plan_type_",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTxAn1"
                              },
                              "type": "GetElement",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "or_",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "or_",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "not_equals",
                        "is_slidable": false
                      },
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
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "not_equals",
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
        "arguments": {
          "0": {
            "param_id": "bTxaR0",
            "arg_value": {
              "next": {
                "type": "Message",
                "name": "param_bTxcd",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTxAn1"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          }
        },
        "custom_event": "bTxjx1"
      },
      "type": "TriggerCustomEvent",
      "id": "bTxjv1"
    }
  }
};
