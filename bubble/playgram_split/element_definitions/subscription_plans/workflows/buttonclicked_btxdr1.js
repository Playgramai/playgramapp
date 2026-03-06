export const ButtonClicked_bTxDr1 = {
  "properties": {
    "element_id": "bTxBv1"
  },
  "type": "ButtonClicked",
  "id": "bTxDl1",
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
            "option_value": "free"
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
          }
        }
      },
      "type": "SetCustomState",
      "id": "bTxDn1"
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
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "next": {
                          "next": {
                            "args": 3,
                            "type": "Message",
                            "name": "greater_than",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "count",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "members_list_user",
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
        "value": true,
        "element_id": "bTxAn1",
        "custom_state": "custom.show_user_count_alert_"
      },
      "type": "SetCustomState",
      "id": "bTxNL"
    },
    "2": {
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
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "next": {
                          "next": {
                            "args": 3,
                            "type": "Message",
                            "name": "less_or_equal_than",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "count",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "members_list_user",
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
        "element_id": "bTxgM1"
      },
      "type": "ShowElement",
      "id": "bTxhT1"
    }
  }
};
