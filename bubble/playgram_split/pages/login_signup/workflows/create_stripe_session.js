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
  "id": "bTxaG0",
  "actions": {
    "0": {
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
                    "2": "login-signup?mode=onboarding&checkout=success&workspace=",
                    "3": {
                      "next": {
                        "type": "Message",
                        "name": "_id",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "custom.organization",
                        "event_id": "bTxaG0",
                        "optional": false,
                        "param_id": "bTxaR0",
                        "param_name": "organization"
                      },
                      "type": "CurrentWorkflowItem",
                      "is_slidable": false
                    },
                    "4": "",
                    "6": ""
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText"
            },
            "1": ""
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
                    "2": "login-signup?mode=onboarding&workspace=",
                    "3": {
                      "next": {
                        "type": "Message",
                        "name": "_id",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "custom.organization",
                        "event_id": "bTxaG0",
                        "optional": false,
                        "param_id": "bTxaR0",
                        "param_name": "organization"
                      },
                      "type": "CurrentWorkflowItem",
                      "is_slidable": false
                    },
                    "4": "",
                    "6": ""
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
                                                              "element_id": "bTxTP"
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
                                          "type": "Message",
                                          "name": "custom.selected_subscription_",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "element_id": "bTxTP"
                                        },
                                        "type": "GetElement",
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
                                                              "element_id": "bTxTP"
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
                                          "type": "Message",
                                          "name": "custom.selected_subscription_",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "element_id": "bTxTP"
                                        },
                                        "type": "GetElement",
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
                                                              "element_id": "bTxTP"
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
                                          "type": "Message",
                                          "name": "custom.selected_subscription_",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "element_id": "bTxTP"
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
                                      "0": "",
                                      "1": {
                                        "next": {
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
                                                              "element_id": "bTxTP"
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
                                          "type": "Message",
                                          "name": "custom.selected_subscription_",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "element_id": "bTxTP"
                                        },
                                        "type": "GetElement",
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
                "element_id": "bTxTP"
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
      "id": "bTxaM0"
    },
    "1": {
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
                    "action_id": "bTxaM0"
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
            "event_id": "bTxaG0",
            "optional": false,
            "param_id": "bTxaR0",
            "param_name": "organization"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTxaX0"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTxaX0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "element_id": "bTxSh0",
        "ALg": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "id",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTxaM0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "1568986136566x208317327136522240-ALf",
      "id": "bTxaS0"
    }
  }
};
