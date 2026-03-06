export const check_payment_status = {
  "properties": {
    "event_name": "check_payment_status",
    "breakpoint": true,
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTxnJ1",
        "param_name": "subscription_id"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTxlF1",
  "actions": {
    "0": {
      "properties": {
        "url_params_Subscription ID": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTxlF1",
                "optional": false,
                "param_id": "bTxnJ1",
                "param_name": "subscription_id"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "1568986136566x208317327136522240-AYu",
      "id": "bTxnm"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "_p_id",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "_p_items.data",
                      "is_slidable": false
                    },
                    "properties": {
                      "action_id": "bTxnm"
                    },
                    "type": "PreviousStep",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "not_equals",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "subscription_item_id_text",
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
        "changes": {
          "0": {
            "key": "active_boolean",
            "value": true,
            "action": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "subscription_plan_option_subscription_plan",
            "value": {
              "properties": {
                "option_set": "option.subscription_plan",
                "option_value": "pro"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "2": {
            "key": "grace_period_start_date",
            "value": {
              "type": "Empty"
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
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
      },
      "type": "ChangeThing",
      "id": "bTxnT1"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "type": "Message",
                          "name": "_p_id",
                          "is_slidable": false
                        },
                        "properties": {
                          "action_id": "bTxnm"
                        },
                        "type": "PreviousStep",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "not_equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "subscription_id_text",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "subscription_custom_subscription",
                  "is_slidable": false
                },
                "properties": {
                  "action_id": "bTxnT1"
                },
                "type": "PreviousStep",
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
          "properties": {
            "action_id": "bTxnT1"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "initial_values": {
          "0": {
            "key": "annualy_boolean",
            "value": {
              "next": {
                "next": {
                  "args": "month",
                  "type": "Message",
                  "name": "not_equals",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "_p_plan.interval",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTxnm"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "credits_count_number",
            "value": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "args": 1000,
                        "type": "Message",
                        "name": "times",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "convert_to_number",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "properties": {
                    "regex": {
                      "entries": {
                        "0": "(\\d+)(?=K)"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "extract_regex",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "_p_plan.nickname",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTxnm"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "2": {
            "key": "customer_id_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_p_customer",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTxnm"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          },
          "3": {
            "key": "organization_workspace1_custom_organization",
            "value": {
              "properties": {
                "action_id": "bTxnT1"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "4": {
            "key": "plan_option_subscription_plan",
            "value": {
              "properties": {
                "option_set": "option.subscription_plan",
                "option_value": "pro"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "5": {
            "key": "subscription_id_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_p_id",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTxnm"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          },
          "6": {
            "key": "subscription_item_id_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "_p_id",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "first_element",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "_p_items.data",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTxnm"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          },
          "7": {
            "key": "workspace_owner_custom_workspace",
            "value": {
              "next": {
                "type": "Message",
                "name": "current_workspace_custom_workspace",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "8": {
            "key": "stripe_payment_id_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_p_default_payment_method",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTxnm"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "thing_type": "custom.subscription"
      },
      "type": "NewThing",
      "id": "bTxnV1",
      "name": "Create a new Subscription..."
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTxnV1"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "subscription_custom_subscription",
            "value": {
              "properties": {
                "action_id": "bTxnV1"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "credits_count_number",
            "value": {
              "next": {
                "type": "Message",
                "name": "credits_count_number",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTxnV1"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "properties": {
            "action_id": "bTxnT1"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTxnf1"
    },
    "4": {
      "properties": {
        "element_id": "bTUdV0",
        "add_parameters": true,
        "url_parameters": {
          "0": {
            "key": "tab",
            "value": {
              "entries": {
                "0": "workspace"
              },
              "type": "TextExpression"
            }
          },
          "1": {
            "key": "sub_tab",
            "value": {
              "entries": {
                "0": "subscription"
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTxtC"
    }
  }
};
