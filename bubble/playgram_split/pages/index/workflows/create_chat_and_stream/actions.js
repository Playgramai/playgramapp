export const actions = {
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
    "id": "bTtgv0"
  },
  "1": {
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
          "action_id": "bTtgv0"
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
                  "action_id": "bTtgv0"
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
    "id": "bTthH0",
    "name": "Go to page index"
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
          "action_id": "bTtgv0"
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
                  "action_id": "bTtgv0"
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
                  "action_id": "bTtgv0"
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
    "id": "bTthL0",
    "name": "Go to page index"
  },
  "3": {
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
          "action_id": "bTtgv0"
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
                  "action_id": "bTtgv0"
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
    "id": "bTthM0"
  },
  "4": {
    "properties": {
      "value": {
        "next": {
          "next": {
            "args": {
              "properties": {
                "action_id": "bTtgv0"
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
      "custom_state": "custom.streaming_chats_"
    },
    "type": "SetCustomState",
    "id": "bTthA0"
  },
  "5": {
    "properties": {
      "data_source": {
        "next": {
          "properties": {
            "separator": {
              "entries": {
                "0": "<#NANI?!>"
              },
              "type": "TextExpression"
            }
          },
          "type": "Message",
          "name": "split_by",
          "is_slidable": true
        },
        "properties": {
          "arbitrary_text": {
            "entries": {
              "0": "<#NANI?>chat_id: \"",
              "1": {
                "next": {
                  "type": "Message",
                  "name": "_id",
                  "is_slidable": false
                },
                "properties": {
                  "action_id": "bTtgv0"
                },
                "type": "PreviousStep",
                "is_slidable": false
              },
              "2": "\"<#NANI?>user_message: \"",
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
              "4": "\"<#NANI?>model: \"",
              "5": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "display",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "llm_model_option_llm_models__os_",
                  "is_slidable": false
                },
                "properties": {
                  "action_id": "bTtgv0"
                },
                "type": "PreviousStep",
                "is_slidable": false
              },
              "6": "\"<#NANI?>user_message_image: \"",
              "7": {
                "properties": {
                  "arbitrary_text": {
                    "entries": {
                      "0": "",
                      "1": {
                        "next": {
                          "next": {
                            "next": {
                              "next": {
                                "next": {
                                  "args": {
                                    "next": {
                                      "next": {
                                        "next": {
                                          "type": "Message",
                                          "name": "to_lowercase",
                                          "is_slidable": false
                                        },
                                        "type": "Message",
                                        "name": "display",
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
                                                      "args": "image",
                                                      "type": "Message",
                                                      "name": "equals",
                                                      "is_slidable": false
                                                    },
                                                    "type": "Message",
                                                    "name": "first_element",
                                                    "is_slidable": false
                                                  },
                                                  "properties": {
                                                    "separator": {
                                                      "entries": {
                                                        "0": "/"
                                                      },
                                                      "type": "TextExpression"
                                                    }
                                                  },
                                                  "type": "Message",
                                                  "name": "split_by",
                                                  "is_slidable": true
                                                },
                                                "type": "Message",
                                                "name": "mime_type",
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
                                      "option_set": "option.file_types__os_",
                                      "option_value": "all values"
                                    },
                                    "type": "OptionValue"
                                  },
                                  "next": {
                                    "properties": {
                                      "formatting_for_true": {
                                        "entries": {
                                          "0": {
                                            "next": {
                                              "next": {
                                                "type": "Message",
                                                "name": "uploaded_input_file_text",
                                                "is_slidable": false
                                              },
                                              "type": "Message",
                                              "name": "current_workspace_custom_workspace",
                                              "is_slidable": false
                                            },
                                            "type": "CurrentUser",
                                            "said": "a2Vsdm8tMzE4ODQ=",
                                            "is_slidable": false
                                          }
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
                                  "name": "is_contained_by_list",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "last_element",
                                "is_slidable": false
                              },
                              "properties": {
                                "separator": {
                                  "entries": {
                                    "0": "."
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "Message",
                              "name": "split_by",
                              "is_slidable": true
                            },
                            "type": "Message",
                            "name": "uploaded_input_file_text",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "current_workspace_custom_workspace",
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
                "type": "ArbitraryText"
              },
              "8": "\"<#NANI?>user_message_file_url: \"",
              "9": {
                "properties": {
                  "arbitrary_text": {
                    "entries": {
                      "0": "",
                      "1": {
                        "next": {
                          "next": {
                            "next": {
                              "next": {
                                "next": {
                                  "args": {
                                    "next": {
                                      "next": {
                                        "next": {
                                          "type": "Message",
                                          "name": "to_lowercase",
                                          "is_slidable": false
                                        },
                                        "type": "Message",
                                        "name": "display",
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
                                                      "args": "image",
                                                      "type": "Message",
                                                      "name": "equals",
                                                      "is_slidable": false
                                                    },
                                                    "type": "Message",
                                                    "name": "first_element",
                                                    "is_slidable": false
                                                  },
                                                  "properties": {
                                                    "separator": {
                                                      "entries": {
                                                        "0": "/"
                                                      },
                                                      "type": "TextExpression"
                                                    }
                                                  },
                                                  "type": "Message",
                                                  "name": "split_by",
                                                  "is_slidable": true
                                                },
                                                "type": "Message",
                                                "name": "mime_type",
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
                                      "option_set": "option.file_types__os_",
                                      "option_value": "all values"
                                    },
                                    "type": "OptionValue"
                                  },
                                  "next": {
                                    "properties": {
                                      "formatting_for_true": {
                                        "entries": {
                                          "0": "",
                                          "1": {
                                            "next": {
                                              "next": {
                                                "type": "Message",
                                                "name": "uploaded_input_file_text",
                                                "is_slidable": false
                                              },
                                              "type": "Message",
                                              "name": "current_workspace_custom_workspace",
                                              "is_slidable": false
                                            },
                                            "type": "CurrentUser",
                                            "said": "a2Vsdm8tMzE4ODQ=",
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
                                  "name": "is_not_contained_by_list",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "last_element",
                                "is_slidable": false
                              },
                              "properties": {
                                "separator": {
                                  "entries": {
                                    "0": "."
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "Message",
                              "name": "split_by",
                              "is_slidable": true
                            },
                            "type": "Message",
                            "name": "uploaded_input_file_text",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "current_workspace_custom_workspace",
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
                "type": "ArbitraryText",
                "said": "a2Vsdm8tMzE4ODQ="
              },
              "10": "\"<#NANI?>user_message_date: \"",
              "11": {
                "next": {
                  "properties": {
                    "formatting_type": "custom",
                    "custom_format": "mmm d, yyyy \u2022 h:MM tt"
                  },
                  "type": "Message",
                  "name": "format_date",
                  "is_slidable": true
                },
                "properties": {
                  "name": "Current Date/Time"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "12": "\"<#NANI?>sender_name: \"",
              "13": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "name_text",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "current_workspace_custom_workspace",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              },
              "14": "\"<#NANI?>sender_profile_photo: \"",
              "15": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "image_image",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "current_workspace_custom_workspace",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              },
              "16": "\"<#NANI?>"
            },
            "type": "TextExpression"
          }
        },
        "type": "ArbitraryText"
      },
      "element_id": "bTtcm0"
    },
    "type": "DisplayListData",
    "id": "bTtgz0",
    "name": "Display list in RG Messages (text)"
  },
  "6": {
    "properties": {
      "date": {
        "properties": {
          "name": "Current Date/Time"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "api_event": "bTtgc0",
      "_wf_param_Chat": {
        "properties": {
          "action_id": "bTtgv0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "_wf_param_sort": {
        "properties": {
          "btype_id": "number",
          "event_id": "bTtgt0",
          "optional": false,
          "param_id": "bTssP1",
          "param_name": "sort"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "_wf_param_model": {
        "next": {
          "type": "Message",
          "name": "llm_model_option_llm_models__os_",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTtgv0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "_wf_param_file_url": {
        "entries": {
          "0": {
            "next": {
              "next": {
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
                                      "args": {
                                        "next": {
                                          "next": {
                                            "type": "Message",
                                            "name": "display",
                                            "is_slidable": false
                                          },
                                          "properties": {
                                            "constraints": {
                                              "0": {
                                                "key": "_advanced_search_constraint",
                                                "value": {
                                                  "next": {
                                                    "next": {
                                                      "args": "image",
                                                      "type": "Message",
                                                      "name": "contains",
                                                      "is_slidable": false
                                                    },
                                                    "type": "Message",
                                                    "name": "mime_type",
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
                                          "option_set": "option.file_types__os_",
                                          "option_value": "all values"
                                        },
                                        "type": "OptionValue"
                                      },
                                      "next": {
                                        "properties": {
                                          "formatting_for_true": {
                                            "entries": {
                                              "0": "",
                                              "1": {
                                                "next": {
                                                  "next": {
                                                    "type": "Message",
                                                    "name": "uploaded_input_file_text",
                                                    "is_slidable": false
                                                  },
                                                  "type": "Message",
                                                  "name": "current_workspace_custom_workspace",
                                                  "is_slidable": false
                                                },
                                                "type": "CurrentUser",
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
                                      "name": "is_not_contained_by_list",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "last_element",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "separator": {
                                      "entries": {
                                        "0": "."
                                      },
                                      "type": "TextExpression"
                                    }
                                  },
                                  "type": "Message",
                                  "name": "split_by",
                                  "is_slidable": true
                                },
                                "type": "Message",
                                "name": "uploaded_input_file_text",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "current_workspace_custom_workspace",
                              "is_slidable": false
                            },
                            "type": "CurrentUser",
                            "said": "a2Vsdm8tMzE4ODQ=",
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
                "name": "uploaded_input_file_text",
                "is_slidable": false
              },
              "type": "Message",
              "name": "current_workspace_custom_workspace",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_user_image": {
        "entries": {
          "0": {
            "next": {
              "next": {
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
                                      "args": {
                                        "next": {
                                          "next": {
                                            "type": "Message",
                                            "name": "display",
                                            "is_slidable": false
                                          },
                                          "properties": {
                                            "constraints": {
                                              "0": {
                                                "key": "_advanced_search_constraint",
                                                "value": {
                                                  "next": {
                                                    "next": {
                                                      "args": "image",
                                                      "type": "Message",
                                                      "name": "contains",
                                                      "is_slidable": false
                                                    },
                                                    "type": "Message",
                                                    "name": "mime_type",
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
                                          "option_set": "option.file_types__os_",
                                          "option_value": "all values"
                                        },
                                        "type": "OptionValue"
                                      },
                                      "next": {
                                        "properties": {
                                          "formatting_for_true": {
                                            "entries": {
                                              "0": "",
                                              "1": {
                                                "next": {
                                                  "next": {
                                                    "type": "Message",
                                                    "name": "uploaded_input_file_text",
                                                    "is_slidable": false
                                                  },
                                                  "type": "Message",
                                                  "name": "current_workspace_custom_workspace",
                                                  "is_slidable": false
                                                },
                                                "type": "CurrentUser",
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
                                      "name": "is_contained_by_list",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "last_element",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "separator": {
                                      "entries": {
                                        "0": "."
                                      },
                                      "type": "TextExpression"
                                    }
                                  },
                                  "type": "Message",
                                  "name": "split_by",
                                  "is_slidable": true
                                },
                                "type": "Message",
                                "name": "uploaded_input_file_text",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "current_workspace_custom_workspace",
                              "is_slidable": false
                            },
                            "type": "CurrentUser",
                            "said": "a2Vsdm8tMzE4ODQ=",
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
                "name": "uploaded_input_file_text",
                "is_slidable": false
              },
              "type": "Message",
              "name": "current_workspace_custom_workspace",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "ignore_privacy_rules": true,
      "_wf_param_user_message": {
        "entries": {
          "0": {
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
        "type": "TextExpression"
      },
      "_wf_param_Workspace & User": {
        "next": {
          "type": "Message",
          "name": "current_workspace_custom_workspace",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      }
    },
    "type": "ScheduleAPIEvent",
    "id": "bTthB0"
  },
  "7": {
    "properties": {
      "delay": 0.5,
      "arguments": {
        "0": {
          "param_id": "bTPGF",
          "arg_value": {
            "properties": {
              "action_id": "bTtgv0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "1": {
          "param_id": "bTPGH",
          "arg_value": {
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
              "action_id": "bTtgv0"
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
              "action_id": "bTtgv0"
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
                "type": "Message",
                "name": "uploaded_input_file_text",
                "is_slidable": false
              },
              "type": "Message",
              "name": "current_workspace_custom_workspace",
              "is_slidable": false
            },
            "type": "CurrentUser",
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
        },
        "15": {
          "param_id": "bTtkB0",
          "arg_value": {
            "properties": {
              "btype_id": "number",
              "event_id": "bTtgt0",
              "optional": false,
              "param_id": "bTssP1",
              "param_name": "sort"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          }
        },
        "16": {
          "param_id": "bTwEC0",
          "arg_value": {
            "properties": {
              "btype_id": "text",
              "event_id": "bTtgt0",
              "optional": true,
              "param_id": "bTwEH0",
              "param_name": "path"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          }
        }
      },
      "custom_event": "bTnZH0"
    },
    "type": "ScheduleCustom",
    "id": "bTthF0"
  },
  "8": {
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
          "action_id": "bTtgv0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "changes": {
        "0": {
          "key": "chats_list_custom_chat",
          "value": {
            "properties": {
              "action_id": "bTtgv0"
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
          "action_id": "bTtgv0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      }
    },
    "type": "ChangeThing",
    "id": "bTthG0"
  }
};
