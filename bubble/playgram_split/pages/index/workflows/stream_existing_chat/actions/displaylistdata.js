export const displaylistdata = {
  "properties": {
    "condition": {
      "next": {
        "type": "Message",
        "name": "is_false",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "boolean",
        "event_id": "bTtgP0",
        "optional": true,
        "param_id": "bTtwT",
        "param_name": "regenerate"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    },
    "data_source": {
      "next": {
        "next": {
          "args": {
            "properties": {
              "arbitrary_text": {
                "entries": {
                  "0": "<#NANI?>chat_id: \"",
                  "1": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "_id",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_group_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTUiZ0"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "2": "\"<#NANI?>user_message: \"",
                  "3": {
                    "properties": {
                      "btype_id": "text",
                      "event_id": "bTtgP0",
                      "optional": false,
                      "param_id": "bTtwk",
                      "param_name": "user_message"
                    },
                    "type": "CurrentWorkflowItem",
                    "is_slidable": false
                  },
                  "4": "\"<#NANI?>user_message_image: \"",
                  "5": {
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
                                                      "name": "uploaded_input_file_file",
                                                      "is_slidable": false
                                                    },
                                                    "type": "Message",
                                                    "name": "get_group_data",
                                                    "is_slidable": false
                                                  },
                                                  "properties": {
                                                    "element_id": "bTUiZ0"
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
                                  "name": "url",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "uploaded_input_file_file",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "get_group_data",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTUiZ0"
                            },
                            "type": "GetElement",
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
                  "6": "\"<#NANI?>user_message_file_url: \"",
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
                                                      "name": "uploaded_input_file_file",
                                                      "is_slidable": false
                                                    },
                                                    "type": "Message",
                                                    "name": "get_group_data",
                                                    "is_slidable": false
                                                  },
                                                  "properties": {
                                                    "element_id": "bTUiZ0"
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
                                  "name": "url",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "uploaded_input_file_file",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "get_group_data",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTUiZ0"
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
                    "type": "ArbitraryText",
                    "said": "a2Vsdm8tMzE4ODQ="
                  },
                  "8": "\"<#NANI?>model: \"",
                  "9": {
                    "next": {
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
                      "type": "Message",
                      "name": "get_group_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTUiZ0"
                    },
                    "type": "GetElement",
                    "is_slidable": false
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
          "type": "Message",
          "name": "plus_element",
          "is_slidable": false
        },
        "type": "Message",
        "name": "get_list_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTtcm0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "element_id": "bTtcm0"
  },
  "type": "DisplayListData",
  "id": "bTtgQ0"
};
