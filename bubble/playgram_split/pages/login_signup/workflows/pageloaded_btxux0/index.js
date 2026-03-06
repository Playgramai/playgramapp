export const PageLoaded_bTxUx0 = {
  "properties": {
    "condition": {
      "next": {
        "args": "success",
        "type": "Message",
        "name": "equals",
        "is_slidable": false
      },
      "properties": {
        "parameter_name": {
          "entries": {
            "0": "checkout"
          },
          "type": "TextExpression"
        }
      },
      "type": "GetParamFromUrl"
    },
    "breakpoint": false
  },
  "type": "PageLoaded",
  "id": "bTxUv0",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTUcw0"
      },
      "type": "ShowElement",
      "id": "bTxcJ"
    },
    "1": {
      "properties": {
        "breakpoint": true,
        "url_params_Subscription ID": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_p_subscription",
                "is_slidable": false
              },
              "properties": {
                "provider": "1568986136566x208317327136522240.ANf",
                "url_params_Session ID": {
                  "entries": {
                    "0": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "stripe_session_id_text",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "get_group_data",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTwjp"
                      },
                      "type": "GetElement",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    }
                  },
                  "type": "TextExpression"
                }
              },
              "type": "GetDataFromAPI"
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "1568986136566x208317327136522240-AYu",
      "id": "bTxVH0"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": "active",
              "type": "Message",
              "name": "not_equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "_p_status",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTxVH0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "TerminateWorkflow",
      "id": "bTxVO0"
    },
    "3": {
      "properties": {
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
                "action_id": "bTxVH0"
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
                  "type": "Message",
                  "name": "credits_count_number",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTwjp"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "2": {
            "key": "plan_option_subscription_plan",
            "value": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "subscription_plan_option_subscription_plan",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTwjp"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "3": {
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
                    "action_id": "bTxVH0"
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
          "4": {
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
                    "action_id": "bTxVH0"
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
          "5": {
            "key": "workspace_owner_custom_workspace",
            "value": {
              "next": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "properties": {
                    "constraints": {
                      "0": {
                        "key": "organization_workspace_custom_organization",
                        "value": {
                          "next": {
                            "type": "Message",
                            "name": "get_group_data",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTwjp"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "constraint_type": "equals"
                      }
                    }
                  },
                  "type": "Message",
                  "name": "filtered",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "workspaces_list_custom_workspace",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "6": {
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
                    "action_id": "bTxVH0"
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
                    "action_id": "bTxVH0"
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
          "8": {
            "key": "organization_workspace1_custom_organization",
            "value": {
              "next": {
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTwjp"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "thing_type": "custom.subscription"
      },
      "type": "NewThing",
      "id": "bTxaZ0"
    },
    "4": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_false",
              "is_slidable": false
            },
            "type": "Message",
            "name": "annualy_boolean",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTxaZ0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "current_period_end_date",
            "value": {
              "next": {
                "args": 1,
                "type": "Message",
                "name": "plus_months",
                "is_slidable": false
              },
              "properties": {
                "name": "Current Date/Time"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "properties": {
            "action_id": "bTxaZ0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTykp0"
    },
    "5": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_true",
              "is_slidable": false
            },
            "type": "Message",
            "name": "annualy_boolean",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTxaZ0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "current_period_end_date",
            "value": {
              "next": {
                "args": 1,
                "type": "Message",
                "name": "plus_years",
                "is_slidable": false
              },
              "properties": {
                "name": "Current Date/Time"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "properties": {
            "action_id": "bTxaZ0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTyku0"
    },
    "6": {
      "properties": {
        "changes": {
          "0": {
            "key": "active_boolean",
            "value": true,
            "action": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "completed_boolean",
            "value": true,
            "action": {
              "type": "Empty"
            }
          },
          "2": {
            "key": "subscription_custom_subscription",
            "value": {
              "properties": {
                "action_id": "bTxaZ0"
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
          "next": {
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTwjp"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTxVT0"
    },
    "7": {
      "properties": {
        "changes": {
          "0": {
            "key": "current_workspace_custom_workspace",
            "value": {
              "next": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "properties": {
                    "constraints": {
                      "0": {
                        "key": "organization_workspace_custom_organization",
                        "value": {
                          "properties": {
                            "action_id": "bTxVT0"
                          },
                          "type": "PreviousStep",
                          "is_slidable": false
                        },
                        "constraint_type": "equals"
                      }
                    }
                  },
                  "type": "Message",
                  "name": "filtered",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "workspaces_list_custom_workspace",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "current_organization_custom_organization",
            "value": {
              "properties": {
                "action_id": "bTxVT0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          }
        }
      },
      "type": "MakeChangeCurrentUser",
      "id": "bTxZp0"
    },
    "8": {
      "properties": {
        "data_source": {
          "next": {
            "type": "Message",
            "name": "invited_emails_incompleted_ws_list_text",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTxVT0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTPtl",
        "type_of_list": "text",
        "_wf_param_email": {
          "entries": {
            "0": {
              "type": "InjectedValue",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_resend": false,
        "_wf_param_user_type": {
          "properties": {
            "option_set": "option.user_type__os_",
            "option_value": "user"
          },
          "type": "OneOptionValue",
          "is_slidable": false
        },
        "_wf_param_organization": {
          "properties": {
            "action_id": "bTxVT0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bTxVa0"
    },
    "9": {
      "properties": {
        "changes": {
          "0": {
            "key": "onboarding_finished__boolean",
            "value": true,
            "action": {
              "type": "Empty"
            }
          }
        }
      },
      "type": "MakeChangeCurrentUser",
      "id": "bTxVf0"
    },
    "10": {
      "properties": {
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTnbL0",
        "ignore_privacy_rules": true,
        "_wf_param_workspace_user": {
          "next": {
            "next": {
              "next": {
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "constraints": {
                  "0": {
                    "key": "organization_workspace_custom_organization",
                    "value": {
                      "properties": {
                        "action_id": "bTxVT0"
                      },
                      "type": "PreviousStep",
                      "is_slidable": false
                    },
                    "constraint_type": "equals"
                  }
                }
              },
              "type": "Message",
              "name": "filtered",
              "is_slidable": true
            },
            "type": "Message",
            "name": "workspaces_list_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "_wf_param_organization_workspace": {
          "properties": {
            "action_id": "bTxVT0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTxVh0"
    },
    "11": {
      "properties": {
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTnau0",
        "_wf_param_workspace": {
          "properties": {
            "action_id": "bTxVT0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTxVm0"
    },
    "12": {
      "properties": {
        "element_id": "bTUdV0"
      },
      "type": "ChangePage",
      "id": "bTxVr0"
    }
  },
};
