export const OLD_new_create_chat_and_stream = {
  "properties": {
    "event_name": "OLD new_create_chat_and_stream",
    "event_color": "red",
    "workflow_disabled": true
  },
  "type": "CustomEvent",
  "id": "bTnZZ0",
  "actions": {
    "0": {
      "properties": {
        "initial_values": {
          "0": {
            "key": "llm_model_option_llm_models__os_",
            "value": {
              "next": {
                "next": {
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
                            "next": {
                              "next": {
                                "args": {
                                  "next": {
                                    "type": "Message",
                                    "name": "display",
                                    "is_slidable": false
                                  },
                                  "type": "InjectedValue",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "equals",
                                "is_slidable": false
                              },
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": "",
                                    "1": {
                                      "next": {
                                        "next": {
                                          "type": "Message",
                                          "name": "display",
                                          "is_slidable": false
                                        },
                                        "type": "Message",
                                        "name": "custom.default_model_",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "element_id": "bTUdV0"
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
                                          "type": "Message",
                                          "name": "display",
                                          "is_slidable": false
                                        },
                                        "type": "Message",
                                        "name": "default_model_option_llm_models__os_",
                                        "is_slidable": false
                                      },
                                      "type": "CurrentUser",
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
                            "name": "is_not_empty",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "custom.default_model_",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTUdV0"
                        },
                        "type": "GetElement",
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
              "properties": {
                "option_set": "option.llm_models__os_",
                "option_value": "all values"
              },
              "type": "OptionValue"
            },
            "action": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "project_custom_project",
            "value": {
              "next": {
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUif0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "2": {
            "key": "title_text",
            "value": {
              "entries": {
                "0": "New chat",
                "1": {
                  "type": "Empty"
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          },
          "3": {
            "key": "type_option_chat_type__os_",
            "value": {
              "next": {
                "next": {
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
                                "next": {
                                  "next": {
                                    "properties": {
                                      "formatting_for_true": {
                                        "entries": {
                                          "0": "",
                                          "1": {
                                            "next": {
                                              "type": "Message",
                                              "name": "display",
                                              "is_slidable": false
                                            },
                                            "properties": {
                                              "option_set": "option.chat_type__os_",
                                              "option_value": "project"
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
                                                  "properties": {
                                                    "formatting_for_true": {
                                                      "entries": {
                                                        "0": "",
                                                        "1": {
                                                          "next": {
                                                            "type": "Message",
                                                            "name": "display",
                                                            "is_slidable": false
                                                          },
                                                          "properties": {
                                                            "value": "option.chat_type__os_",
                                                            "parameter_name": {
                                                              "entries": {
                                                                "0": "type"
                                                              },
                                                              "type": "TextExpression"
                                                            }
                                                          },
                                                          "type": "GetParamFromUrl"
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
                                                            "type": "Message",
                                                            "name": "display",
                                                            "is_slidable": false
                                                          },
                                                          "properties": {
                                                            "option_set": "option.chat_type__os_",
                                                            "option_value": "personal"
                                                          },
                                                          "type": "OptionValue"
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
                                                "name": "is_not_empty",
                                                "is_slidable": false
                                              },
                                              "type": "Message",
                                              "name": "display",
                                              "is_slidable": false
                                            },
                                            "properties": {
                                              "value": "option.chat_type__os_",
                                              "parameter_name": {
                                                "entries": {
                                                  "0": "type"
                                                },
                                                "type": "TextExpression"
                                              }
                                            },
                                            "type": "GetParamFromUrl"
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
                                  "name": "is_not_empty",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "get_group_data",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTUif0"
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
              "properties": {
                "option_set": "option.chat_type__os_",
                "option_value": "all values"
              },
              "type": "OptionValue"
            },
            "action": {
              "type": "Empty"
            }
          },
          "4": {
            "key": "organization_custom_organization",
            "value": {
              "next": {
                "type": "Message",
                "name": "current_organization_custom_organization",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "5": {
            "key": "enabled_tools_list_option_llm_tool__os_",
            "value": {
              "next": {
                "type": "Message",
                "name": "custom.tool_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUdV0"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "action": "set_list"
          },
          "6": {
            "key": "string_for_update_number",
            "value": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "convert_to_number",
                      "is_slidable": false
                    },
                    "properties": {
                      "length": 2,
                      "numbers": true,
                      "formula_type": "RandomString"
                    },
                    "type": "Formulas"
                  },
                  "type": "Message",
                  "name": "plus",
                  "is_slidable": false
                },
                "properties": {
                  "component_to_extract": "UNIX"
                },
                "type": "Message",
                "name": "extract_from_date",
                "is_slidable": true
              },
              "properties": {
                "name": "Current Date/Time"
              },
              "type": "PageData",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "thing_type": "custom.chat"
      },
      "type": "NewThing",
      "id": "bTnZf0"
    },
    "1": {
      "properties": {
        "value": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "action_id": "bTnZf0"
                },
                "type": "PreviousStep",
                "is_slidable": false
              },
              "type": "Message",
              "name": "plus_element",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.streaming_chats_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUdV0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTUdV0",
        "custom_state": "custom.streaming_chats_",
        "custom_states_values": {
          "0": {
            "value": {
              "next": {
                "next": {
                  "args": {
                    "properties": {
                      "arbitrary_text": {
                        "entries": {
                          "0": "",
                          "1": {
                            "next": {
                              "type": "Message",
                              "name": "_id",
                              "is_slidable": false
                            },
                            "properties": {
                              "action_id": "bTnZf0"
                            },
                            "type": "PreviousStep",
                            "is_slidable": false
                          },
                          "2": "<#NANI?>",
                          "3": {
                            "next": {
                              "type": "Message",
                              "name": "get_AAV",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTUhb0"
                            },
                            "type": "GetElement",
                            "is_slidable": false
                          },
                          "4": "",
                          "5": {
                            "next": {
                              "next": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "properties": {
                                        "formatting_for_true": {
                                          "entries": {
                                            "0": "<#NANI?>",
                                            "1": {
                                              "next": {
                                                "next": {
                                                  "next": {
                                                    "type": "Message",
                                                    "name": "last_element",
                                                    "is_slidable": false
                                                  },
                                                  "properties": {
                                                    "separator": {
                                                      "entries": {
                                                        "0": ";"
                                                      },
                                                      "type": "TextExpression"
                                                    }
                                                  },
                                                  "type": "Message",
                                                  "name": "split_by",
                                                  "is_slidable": true
                                                },
                                                "type": "Message",
                                                "name": "get_group_data",
                                                "is_slidable": false
                                              },
                                              "properties": {
                                                "element_id": "bTVNO"
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
                                    "name": "is_not_empty",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "last_element",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "separator": {
                                    "entries": {
                                      "0": ";"
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "Message",
                                "name": "split_by",
                                "is_slidable": true
                              },
                              "type": "Message",
                              "name": "get_group_data",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTVNO"
                            },
                            "type": "GetElement",
                            "is_slidable": false
                          },
                          "6": ""
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "ArbitraryText"
                  },
                  "type": "Message",
                  "name": "plus_element",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.new_message_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUdV0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "custom_state": "custom.new_message_"
          }
        }
      },
      "type": "SetCustomState",
      "id": "bTnZg0"
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
            "name": "project_custom_project",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTnZf0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "chats_list_custom_chat",
            "value": {
              "properties": {
                "action_id": "bTnZf0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "action": "add"
          }
        },
        "to_change": {
          "next": {
            "type": "Message",
            "name": "project_custom_project",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTnZf0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTnZh0"
    },
    "3": {
      "properties": {
        "delay": 0,
        "arguments": {
          "0": {
            "param_id": "bTPGF",
            "arg_value": {
              "properties": {
                "action_id": "bTnZf0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "1": {
            "param_id": "bTPGH",
            "arg_value": {
              "properties": {
                "action_id": "bTnZh0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "2": {
            "param_id": "bTPHh0"
          },
          "3": {
            "param_id": "bTPHl0"
          },
          "4": {
            "param_id": "bTPHm0",
            "arg_value": {
              "next": {
                "type": "Message",
                "name": "get_AAV",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUhb0"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "5": {
            "param_id": "bTPxH0",
            "arg_value": {
              "next": {
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUip0"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          },
          "6": {
            "param_id": "bTQFp0",
            "arg_value": {
              "next": {
                "type": "Message",
                "name": "llm_model_option_llm_models__os_",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTnZf0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "7": {
            "param_id": "bTQFq0",
            "arg_value": {
              "next": {
                "type": "Message",
                "name": "enabled_tools_list_option_llm_tool__os_",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTnZf0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "8": {
            "param_id": "bTQSU0",
            "arg_value": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "properties": {
                        "find": {
                          "entries": {
                            "0": ";"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "find_replace",
                      "is_slidable": true
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
                              "next": {
                                "type": "Message",
                                "name": "is_empty",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "first_element",
                              "is_slidable": false
                            },
                            "properties": {
                              "separator": {
                                "entries": {
                                  "0": ";"
                                },
                                "type": "TextExpression"
                              }
                            },
                            "type": "Message",
                            "name": "split_by",
                            "is_slidable": true
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
                "name": "custom.attached_files_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUdV0"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          },
          "9": {
            "param_id": "bTYTb",
            "arg_value": {
              "next": {
                "type": "Message",
                "name": "get_AAV",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTVPN"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "10": {
            "param_id": "bTaeV0",
            "arg_value": {
              "type": "Empty"
            }
          },
          "11": {
            "param_id": "bTaet0",
            "arg_value": {
              "type": "Empty"
            }
          },
          "12": {
            "param_id": "bTagJ0",
            "arg_value": {
              "type": "Empty"
            }
          },
          "13": {
            "param_id": "bTagT0",
            "arg_value": {
              "type": "Empty"
            }
          },
          "14": {
            "param_id": "bTcZD",
            "arg_value": {
              "type": "Empty"
            }
          }
        },
        "custom_event": "bTnZH0"
      },
      "type": "ScheduleCustom",
      "id": "bTnZl0"
    },
    "4": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "project_custom_project",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTnZf0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "element_id": "bTUdV0",
        "add_parameters": true,
        "url_parameters": {
          "0": {
            "key": "chat",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_id",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTnZf0"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            }
          }
        },
        "keep_current_page_params": false
      },
      "type": "ChangePage",
      "id": "bTnZm0",
      "name": "Go to page index"
    },
    "5": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "project_custom_project",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTnZf0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "element_id": "bTUdV0",
        "add_parameters": true,
        "url_parameters": {
          "0": {
            "key": "chat",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_id",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTnZf0"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            }
          },
          "1": {
            "key": "project",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "_id",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "project_custom_project",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTnZf0"
                  },
                  "type": "PreviousStep",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            }
          }
        },
        "keep_current_page_params": false
      },
      "type": "ChangePage",
      "id": "bTnZn0",
      "name": "Go to page index"
    },
    "6": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.chat_type__os_",
                  "option_value": "temporary"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "type_option_chat_type__os_",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTnZf0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "element_id": "bTUdV0",
        "add_parameters": true,
        "url_parameters": {
          "0": {
            "key": "chat",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_id",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTnZf0"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            }
          },
          "1": {
            "key": "temp",
            "value": {
              "entries": {
                "0": "yes"
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "ChangePage",
      "id": "bTnZr0"
    }
  }
};
