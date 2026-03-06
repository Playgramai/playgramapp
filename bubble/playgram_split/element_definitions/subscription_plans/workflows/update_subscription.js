export const update_subscription = {
  "properties": {
    "event_name": "update_subscription",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "custom.organization",
        "optional": false,
        "param_id": "bTxop",
        "param_name": "organization"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTxoh",
  "actions": {
    "0": {
      "properties": {
        "AHm": {
          "entries": {
            "0": {
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
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "AHo": "always_invoice",
        "AHv": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "subscription_id_text",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "subscription_custom_subscription",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.organization",
                "event_id": "bTxoh",
                "optional": false,
                "param_id": "bTxop",
                "param_name": "organization"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "AIb": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "subscription_item_id_text",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "subscription_custom_subscription",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.organization",
                "event_id": "bTxoh",
                "optional": false,
                "param_id": "bTxop",
                "param_name": "organization"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "ASx": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "args": "Annually",
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
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "now"
                            },
                            "type": "TextExpression"
                          },
                          "formatting_for_false": {
                            "entries": {
                              "0": ""
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "format_boolean",
                        "is_slidable": true
                      },
                      "type": "Message",
                      "name": "and_",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "is_false",
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
              "properties": {
                "btype_id": "custom.organization",
                "event_id": "bTxoh",
                "optional": false,
                "param_id": "bTxop",
                "param_name": "organization"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "AZd": true
      },
      "type": "1568986136566x208317327136522240-AHu",
      "id": "bTxon"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "error",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTxon"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "custom_event": "bTxrj"
      },
      "type": "TriggerCustomEvent",
      "id": "bTxsB"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "error",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTxon"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "TerminateWorkflow",
      "id": "bTxsG"
    },
    "3": {
      "properties": {
        "element_id": "bTxqO"
      },
      "type": "HideElement",
      "id": "bTxrK"
    },
    "4": {
      "properties": {
        "element_id": "bTxoF",
        "duration": 500,
        "animation": "transition.fadeIn",
        "customize_duration": false
      },
      "type": "AnimateElement",
      "id": "bTxoz"
    },
    "5": {
      "properties": {
        "length": 4000,
        "hide_status_bar": true
      },
      "type": "PauseWFClient",
      "id": "bTxpB"
    },
    "6": {
      "properties": {
        "element_id": "bTxoF",
        "duration": 500,
        "animation": "transition.fadeOut",
        "customize_duration": false
      },
      "type": "AnimateElement",
      "id": "bTxpG"
    },
    "7": {
      "properties": {
        "changes": {
          "0": {
            "key": "credits_count_number",
            "value": {
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
            "action": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "annualy_boolean",
            "value": {
              "next": {
                "next": {
                  "args": "Annually",
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
            "action": {
              "type": "Empty"
            }
          },
          "2": {
            "key": "subscription_item_id_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "si",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTxon"
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
          "next": {
            "type": "Message",
            "name": "subscription_custom_subscription",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.organization",
            "event_id": "bTxoh",
            "optional": false,
            "param_id": "bTxop",
            "param_name": "organization"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTxpL"
    },
    "8": {
      "properties": {
        "changes": {
          "0": {
            "key": "credits_count_number",
            "value": {
              "next": {
                "type": "Message",
                "name": "credits_count_number",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTxpL"
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
            "btype_id": "custom.organization",
            "event_id": "bTxoh",
            "optional": false,
            "param_id": "bTxop",
            "param_name": "organization"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTxpN"
    }
  }
};
