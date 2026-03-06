export const ButtonClicked_bTwyV = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_not_empty",
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
    "element_id": "bTPVf"
  },
  "type": "ButtonClicked",
  "id": "bTwxx",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTUcw0"
      },
      "type": "ShowElement",
      "id": "bTwxz"
    },
    "1": {
      "properties": {
        "changes": {
          "0": {
            "key": "name_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "get_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTPWC"
                  },
                  "type": "GetElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "image_image",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "custom.logo_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTKPI"
                  },
                  "type": "GetElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          },
          "2": {
            "key": "subscription_plan_option_subscription_plan",
            "value": {
              "next": {
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
            "action": {
              "type": "Empty"
            }
          },
          "3": {
            "key": "owner_name_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "custom.user_name_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTKPI"
                  },
                  "type": "GetElement",
                  "said": "a2Vsdm8tMzE4ODQ=",
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
                "element_id": "bTxTP"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "5": {
            "key": "invited_emails_incompleted_ws_list_text",
            "value": {
              "next": {
                "type": "Message",
                "name": "custom.invited_users_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTKPI"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "action": "set_list"
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
      "id": "bTwyE"
    },
    "2": {
      "properties": {
        "condition": {
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
            "action_id": "bTwyE"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "arguments": {
          "0": {
            "param_id": "bTxaR0",
            "arg_value": {
              "properties": {
                "action_id": "bTwyE"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          }
        },
        "custom_event": "bTxaG0"
      },
      "type": "TriggerCustomEvent",
      "id": "bTxbN0"
    },
    "3": {
      "properties": {
        "condition": {
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
            "action_id": "bTwyE"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "TerminateWorkflow",
      "id": "bTxbP0"
    },
    "4": {
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
          }
        },
        "to_change": {
          "properties": {
            "action_id": "bTwyE"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTxRR"
    },
    "5": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "type": "Message",
                "name": "is_not_empty",
                "is_slidable": false
              },
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.invited_users_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTKPI"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "data_source": {
          "next": {
            "type": "Message",
            "name": "custom.invited_users_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTKPI"
          },
          "type": "GetElement",
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
            "action_id": "bTwyE"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bTwyK"
    },
    "6": {
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
                            "action_id": "bTwyE"
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
          },
          "2": {
            "key": "onboarding_finished__boolean",
            "value": true,
            "action": {
              "type": "Empty"
            }
          }
        }
      },
      "type": "MakeChangeCurrentUser",
      "id": "bTxwP"
    },
    "7": {
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
            "type": "Message",
            "name": "current_workspace_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "_wf_param_organization_workspace": {
          "properties": {
            "action_id": "bTwyE"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTwyP"
    },
    "8": {
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
            "action_id": "bTwyE"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTwyQ"
    },
    "9": {
      "properties": {
        "element_id": "bTUdV0"
      },
      "type": "ChangePage",
      "id": "bTwyR"
    }
  },
};
