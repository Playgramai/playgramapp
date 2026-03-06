export const newthing = {
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
};
