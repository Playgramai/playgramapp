export const ButtonClicked_bTPWa = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "type": "Message",
          "name": "is_empty",
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
  "id": "bTPWN",
  "actions": {
    "0": {
      "properties": {
        "element_id": "bTUcw0"
      },
      "type": "ShowElement",
      "id": "bTUdN0"
    },
    "1": {
      "properties": {
        "initial_values": {
          "0": {
            "key": "owner_user",
            "value": {
              "type": "CurrentUser",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "1": {
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
            "key": "members_list_user",
            "value": {
              "type": "CurrentUser",
              "is_slidable": false
            },
            "action": "add"
          },
          "4": {
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
          "5": {
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
          "6": {
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
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "7": {
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
              "is_slidable": false
            },
            "action": "set_list"
          }
        },
        "thing_type": "custom.organization"
      },
      "type": "NewThing",
      "id": "bTPWT"
    },
    "2": {
      "properties": {
        "data_source": {
          "properties": {
            "action_id": "bTPWT"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "element_id": "bTwjp"
      },
      "type": "DisplayGroupData",
      "id": "bTxRT"
    },
    "3": {
      "properties": {
        "changes": {
          "0": {
            "key": "bunny_folder_text",
            "value": {
              "entries": {
                "0": {
                  "properties": {
                    "arbitrary_text": {
                      "entries": {
                        "0": "shared_files_",
                        "1": {
                          "next": {
                            "type": "Message",
                            "name": "_id",
                            "is_slidable": false
                          },
                          "properties": {
                            "action_id": "bTPWT"
                          },
                          "type": "PreviousStep",
                          "is_slidable": false
                        },
                        "2": ""
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "ArbitraryText",
                  "said": "a2Vsdm8tMzE4ODQ="
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
            "action_id": "bTPWT"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTYMx"
    },
    "4": {
      "properties": {
        "initial_values": {
          "0": {
            "key": "organization_workspace_custom_organization",
            "value": {
              "properties": {
                "action_id": "bTPWT"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "user_user",
            "value": {
              "type": "CurrentUser",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "2": {
            "key": "user_type_option_user_type__os_",
            "value": {
              "properties": {
                "option_set": "option.user_type__os_",
                "option_value": "owner"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "3": {
            "key": "name_text",
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
            "key": "user_email_for_search_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "email",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
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
            "key": "invitation_accepted__boolean",
            "value": false,
            "action": {
              "type": "Empty"
            }
          }
        },
        "thing_type": "custom.workspace"
      },
      "type": "NewThing",
      "id": "bTxak0"
    },
    "5": {
      "properties": {
        "changes": {
          "0": {
            "key": "workspaces_list_custom_workspace",
            "value": {
              "properties": {
                "action_id": "bTxak0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "action": "add"
          }
        }
      },
      "type": "MakeChangeCurrentUser",
      "id": "bTxyB"
    },
    "6": {
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
            "action_id": "bTPWT"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "arguments": {
          "0": {
            "param_id": "bTxaR0",
            "arg_value": {
              "properties": {
                "action_id": "bTPWT"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          }
        },
        "custom_event": "bTxaG0"
      },
      "type": "TriggerCustomEvent",
      "id": "bTxad0"
    },
    "7": {
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
            "action_id": "bTPWT"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "TerminateWorkflow",
      "id": "bTxaf0"
    },
    "8": {
      "properties": {
        "changes": {
          "0": {
            "key": "current_workspace_custom_workspace",
            "value": {
              "properties": {
                "action_id": "bTxak0"
              },
              "type": "PreviousStep",
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
      "id": "bTxap0"
    },
    "9": {
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
      "id": "bTxar0"
    },
    "10": {
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
            "action_id": "bTxar0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bTxaw0"
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
        "api_event": "bTnbL0",
        "ignore_privacy_rules": true,
        "_wf_param_workspace_user": {
          "properties": {
            "action_id": "bTxak0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "_wf_param_organization_workspace": {
          "properties": {
            "action_id": "bTxar0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTxbB0"
    },
    "12": {
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
            "action_id": "bTxar0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTxbD0"
    },
    "13": {
      "properties": {
        "element_id": "bTUdV0"
      },
      "type": "ChangePage",
      "id": "bTxbI0"
    }
  },
};
