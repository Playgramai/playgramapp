export const create_stripe_session = {
  "properties": {
    "event_name": "create_stripe_session",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "custom.organization",
        "optional": false,
        "param_id": "bTxaR0",
        "param_name": "organization"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTxjx1",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTxqO"
      },
      "type": "ShowElement",
      "id": "bTxrP"
    },
    "1": {
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
                          "option_value": "free"
                        },
                        "type": "OneOptionValue",
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
                  "properties": {
                    "btype_id": "custom.organization",
                    "event_id": "bTxjx1",
                    "optional": false,
                    "param_id": "bTxaR0",
                    "param_name": "organization"
                  },
                  "type": "CurrentWorkflowItem",
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
            "name": "subscription_custom_subscription",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.organization",
            "event_id": "bTxjx1",
            "optional": false,
            "param_id": "bTxaR0",
            "param_name": "organization"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "arguments": {
          "0": {
            "param_id": "bTxop",
            "arg_value": {
              "properties": {
                "btype_id": "custom.organization",
                "event_id": "bTxjx1",
                "optional": false,
                "param_id": "bTxaR0",
                "param_name": "organization"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          }
        },
        "custom_event": "bTxoh"
      },
      "type": "TriggerCustomEvent",
      "id": "bTxpR"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_true",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "active_boolean",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "custom.organization",
                    "event_id": "bTxjx1",
                    "optional": false,
                    "param_id": "bTxaR0",
                    "param_name": "organization"
                  },
                  "type": "CurrentWorkflowItem",
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
            "name": "subscription_custom_subscription",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.organization",
            "event_id": "bTxjx1",
            "optional": false,
            "param_id": "bTxaR0",
            "param_name": "organization"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "TerminateWorkflow",
      "id": "bTxny"
    },
    "3": {
      "properties": {
        "ALj": {
          "entries": {
            "0": "Pro"
          },
          "type": "TextExpression"
        },
        "ALn": 1,
        "ALo": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "properties": {
                        "name": "Website Home"
                      },
                      "type": "PageData",
                      "is_slidable": false
                    },
                    "2": "?tab=workspace_settings&sub_tab=subscription&checkout=success",
                    "4": ""
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText"
            }
          },
          "type": "TextExpression"
        },
        "ALp": {
          "entries": {
            "0": "",
            "1": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "properties": {
                        "name": "Website Home"
                      },
                      "type": "PageData",
                      "is_slidable": false
                    },
                    "2": "?tab=workspace_settings&sub_tab=subscription",
                    "4": ""
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText",
              "said": "a2Vsdm8tMzE4ODQ="
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "AME": {
          "entries": {
            "0": "",
            "1": {
              "next": {
                "type": "Message",
                "name": "email",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "AMF": {
          "entries": {
            "0": "subscription"
          },
          "type": "TextExpression"
        },
        "AOS": {
          "type": "TextExpression"
        },
        "AOW": {
          "entries": {
            "0": "",
            "1": {
              "next": {
                "next": {
                  "args": "Monthly",
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "",
                          "1": {
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
                                                "type": "Message",
                                                "name": "test_price_id",
                                                "is_slidable": false
                                              },
                                              "type": "Message",
                                              "name": "first_element",
                                              "is_slidable": false
                                            },
                                            "properties": {
                                              "constraints": {
                                                "0": {
                                                  "key": "_advanced_search_constraint",
                                                  "value": {
                                                    "next": {
                                                      "next": {
                                                        "args": {
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
                                                        "type": "Message",
                                                        "name": "equals",
                                                        "is_slidable": false
                                                      },
                                                      "type": "Message",
                                                      "name": "display",
                                                      "is_slidable": false
                                                    },
                                                    "type": "InjectedValue",
                                                    "said": "a2Vsdm8tMzE4ODQ=",
                                                    "is_slidable": false
                                                  },
                                                  "constraint_type": {
                                                    "type": "Empty"
                                                  }
                                                }
                                              }
                                            },
                                            "type": "Message",
                                            "name": "filtered",
                                            "is_slidable": true
                                          },
                                          "type": "Message",
                                          "name": "prices",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "option_set": "option.subscription_plan",
                                          "option_value": "pro"
                                        },
                                        "type": "OptionValue"
                                      },
                                      "2": ""
                                    },
                                    "type": "TextExpression"
                                  },
                                  "formatting_for_false": {
                                    "entries": {
                                      "0": "",
                                      "1": {
                                        "next": {
                                          "next": {
                                            "next": {
                                              "next": {
                                                "type": "Message",
                                                "name": "live_price_id",
                                                "is_slidable": false
                                              },
                                              "type": "Message",
                                              "name": "first_element",
                                              "is_slidable": false
                                            },
                                            "properties": {
                                              "constraints": {
                                                "0": {
                                                  "key": "_advanced_search_constraint",
                                                  "value": {
                                                    "next": {
                                                      "next": {
                                                        "args": {
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
                                                        "type": "Message",
                                                        "name": "equals",
                                                        "is_slidable": false
                                                      },
                                                      "type": "Message",
                                                      "name": "display",
                                                      "is_slidable": false
                                                    },
                                                    "type": "InjectedValue",
                                                    "said": "a2Vsdm8tMzE4ODQ=",
                                                    "is_slidable": false
                                                  },
                                                  "constraint_type": {
                                                    "type": "Empty"
                                                  }
                                                }
                                              }
                                            },
                                            "type": "Message",
                                            "name": "filtered",
                                            "is_slidable": true
                                          },
                                          "type": "Message",
                                          "name": "prices",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "option_set": "option.subscription_plan",
                                          "option_value": "pro"
                                        },
                                        "type": "OptionValue",
                                        "said": "a2Vsdm8tMzE4ODQ="
                                      },
                                      "2": ""
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
                            "properties": {
                              "name": "AppIsTest"
                            },
                            "type": "PageData",
                            "said": "a2Vsdm8tMzE4ODQ=",
                            "is_slidable": false
                          },
                          "2": ""
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "",
                          "1": {
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
                                                "type": "Message",
                                                "name": "annually_test_price_id",
                                                "is_slidable": false
                                              },
                                              "type": "Message",
                                              "name": "first_element",
                                              "is_slidable": false
                                            },
                                            "properties": {
                                              "constraints": {
                                                "0": {
                                                  "key": "_advanced_search_constraint",
                                                  "value": {
                                                    "next": {
                                                      "next": {
                                                        "args": {
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
                                                        "type": "Message",
                                                        "name": "equals",
                                                        "is_slidable": false
                                                      },
                                                      "type": "Message",
                                                      "name": "display",
                                                      "is_slidable": false
                                                    },
                                                    "type": "InjectedValue",
                                                    "said": "a2Vsdm8tMzE4ODQ=",
                                                    "is_slidable": false
                                                  },
                                                  "constraint_type": {
                                                    "type": "Empty"
                                                  }
                                                }
                                              }
                                            },
                                            "type": "Message",
                                            "name": "filtered",
                                            "is_slidable": true
                                          },
                                          "type": "Message",
                                          "name": "prices",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "option_set": "option.subscription_plan",
                                          "option_value": "pro"
                                        },
                                        "type": "OptionValue"
                                      },
                                      "2": ""
                                    },
                                    "type": "TextExpression"
                                  },
                                  "formatting_for_false": {
                                    "entries": {
                                      "0": "",
                                      "1": {
                                        "next": {
                                          "next": {
                                            "next": {
                                              "next": {
                                                "type": "Message",
                                                "name": "annually_live_price_id",
                                                "is_slidable": false
                                              },
                                              "type": "Message",
                                              "name": "first_element",
                                              "is_slidable": false
                                            },
                                            "properties": {
                                              "constraints": {
                                                "0": {
                                                  "key": "_advanced_search_constraint",
                                                  "value": {
                                                    "next": {
                                                      "next": {
                                                        "args": {
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
                                                        "type": "Message",
                                                        "name": "equals",
                                                        "is_slidable": false
                                                      },
                                                      "type": "Message",
                                                      "name": "display",
                                                      "is_slidable": false
                                                    },
                                                    "type": "InjectedValue",
                                                    "said": "a2Vsdm8tMzE4ODQ=",
                                                    "is_slidable": false
                                                  },
                                                  "constraint_type": {
                                                    "type": "Empty"
                                                  }
                                                }
                                              }
                                            },
                                            "type": "Message",
                                            "name": "filtered",
                                            "is_slidable": true
                                          },
                                          "type": "Message",
                                          "name": "prices",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "option_set": "option.subscription_plan",
                                          "option_value": "pro"
                                        },
                                        "type": "OptionValue",
                                        "said": "a2Vsdm8tMzE4ODQ="
                                      },
                                      "2": ""
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
                            "properties": {
                              "name": "AppIsTest"
                            },
                            "type": "PageData",
                            "said": "a2Vsdm8tMzE4ODQ=",
                            "is_slidable": false
                          },
                          "2": ""
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
                "name": "custom.plan_type_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTxAn1"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "AYt": {
          "entries": {
            "0": "\"card\",\"link\""
          },
          "type": "TextExpression"
        }
      },
      "type": "1568986136566x208317327136522240-ALh",
      "id": "bTxkC1"
    },
    "4": {
      "properties": {
        "changes": {
          "0": {
            "key": "stripe_session_id_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "id",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTxkC1"
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
        "to_change": {
          "properties": {
            "btype_id": "custom.organization",
            "event_id": "bTxjx1",
            "optional": false,
            "param_id": "bTxaR0",
            "param_name": "organization"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTxkH1"
    },
    "5": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTxkH1"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "element_id": "bTxiE",
        "ALg": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "id",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTxkC1"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "1568986136566x208317327136522240-ALf",
      "id": "bTxkD1"
    }
  }
};
