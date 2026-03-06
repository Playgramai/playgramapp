export const schedulecustom = {
  "properties": {
    "delay": 0,
    "arguments": {
      "0": {
        "param_id": "bTPGF",
        "arg_value": {
          "next": {
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUiZ0"
          },
          "type": "GetElement",
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
        "param_id": "bTPHh0",
        "arg_value": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "args": 10,
                      "type": "Message",
                      "name": "minus",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "count",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_list_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUhL0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "count",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_list_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTUhL0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "next": {
                  "properties": {
                    "content": {
                      "entries": {
                        "0": "{\n\"id\": \"",
                        "1": {
                          "next": {
                            "type": "Message",
                            "name": "_api_c2__additional.id",
                            "is_slidable": false
                          },
                          "type": "InjectedValue",
                          "is_slidable": false
                        },
                        "2": "\", \"created_at\": ",
                        "3": {
                          "next": {
                            "type": "Message",
                            "name": "_api_c2_sort",
                            "is_slidable": false
                          },
                          "type": "InjectedValue",
                          "is_slidable": false
                        },
                        "4": ", \"user\": \"",
                        "5": {
                          "next": {
                            "type": "Message",
                            "name": "_api_c2_user_message",
                            "is_slidable": false
                          },
                          "type": "InjectedValue",
                          "is_slidable": false
                        },
                        "6": "\", \"llm\": \"",
                        "7": {
                          "next": {
                            "type": "Message",
                            "name": "_api_c2_llm_reply",
                            "is_slidable": false
                          },
                          "type": "InjectedValue",
                          "is_slidable": false
                        },
                        "8": "\", \"already_saved_long_term\": ",
                        "9": {
                          "next": {
                            "next": {
                              "args": "true",
                              "next": {
                                "properties": {
                                  "formatting_for_true": {
                                    "entries": {
                                      "0": "true"
                                    },
                                    "type": "TextExpression"
                                  },
                                  "formatting_for_false": {
                                    "entries": {
                                      "0": "false"
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
                            "name": "_api_c2_already_saved",
                            "is_slidable": false
                          },
                          "type": "InjectedValue",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        },
                        "10": ", \"already_saved_current_chat\": ",
                        "11": {
                          "next": {
                            "next": {
                              "args": {
                                "next": {
                                  "next": {
                                    "type": "Message",
                                    "name": "context_message_ids_list_text",
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
                              "next": {
                                "properties": {
                                  "formatting_for_true": {
                                    "entries": {
                                      "0": "true"
                                    },
                                    "type": "TextExpression"
                                  },
                                  "formatting_for_false": {
                                    "entries": {
                                      "0": "false"
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
                            "name": "_api_c2__additional.id",
                            "is_slidable": false
                          },
                          "type": "InjectedValue",
                          "is_slidable": false
                        },
                        "12": "\n}"
                      },
                      "type": "TextExpression"
                    },
                    "delimiter": {
                      "entries": {
                        "0": ",\n"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "format_as_text",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "limit_to",
                "is_slidable": false
              },
              "type": "Message",
              "name": "list_from",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_list_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUhL0"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "3": {
        "param_id": "bTPHl0",
        "arg_value": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.llm_providers__os_",
                    "option_value": "gemini"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "next": {
                          "args": {
                            "properties": {
                              "option_set": "option.llm_providers__os_",
                              "option_value": "open_ai"
                            },
                            "type": "OneOptionValue",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "not_equals",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "provider",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "get_group_data",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTcdF"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "",
                          "1": {
                            "next": {
                              "next": {
                                "args": {
                                  "next": {
                                    "next": {
                                      "next": {
                                        "args": 10,
                                        "type": "Message",
                                        "name": "minus",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "count",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "get_list_data",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "element_id": "bTUhL0"
                                  },
                                  "type": "GetElement",
                                  "is_slidable": false
                                },
                                "next": {
                                  "args": {
                                    "next": {
                                      "next": {
                                        "type": "Message",
                                        "name": "count",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "get_list_data",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "element_id": "bTUhL0"
                                    },
                                    "type": "GetElement",
                                    "is_slidable": false
                                  },
                                  "next": {
                                    "next": {
                                      "properties": {
                                        "content": {
                                          "entries": {
                                            "0": {
                                              "next": {
                                                "next": {
                                                  "next": {
                                                    "next": {
                                                      "next": {
                                                        "next": {
                                                          "next": {
                                                            "properties": {
                                                              "find": {
                                                                "entries": {
                                                                  "0": "<llm_message>"
                                                                },
                                                                "type": "TextExpression"
                                                              },
                                                              "replace": {
                                                                "entries": {
                                                                  "0": {
                                                                    "next": {
                                                                      "next": {
                                                                        "args": "null",
                                                                        "next": {
                                                                          "type": "Message",
                                                                          "name": "format_json_encode",
                                                                          "is_slidable": false
                                                                        },
                                                                        "type": "Message",
                                                                        "name": "defaulting_to",
                                                                        "is_slidable": false
                                                                      },
                                                                      "type": "Message",
                                                                      "name": "_api_c2_llm_reply",
                                                                      "is_slidable": false
                                                                    },
                                                                    "type": "InjectedValue",
                                                                    "said": "a2Vsdm8tMzE4ODQ=",
                                                                    "is_slidable": false
                                                                  }
                                                                },
                                                                "type": "TextExpression"
                                                              }
                                                            },
                                                            "type": "Message",
                                                            "name": "find_replace",
                                                            "is_slidable": true
                                                          },
                                                          "properties": {
                                                            "find": {
                                                              "entries": {
                                                                "0": "<user_message>"
                                                              },
                                                              "type": "TextExpression"
                                                            },
                                                            "replace": {
                                                              "entries": {
                                                                "0": {
                                                                  "next": {
                                                                    "next": {
                                                                      "type": "Message",
                                                                      "name": "format_json_encode",
                                                                      "is_slidable": false
                                                                    },
                                                                    "type": "Message",
                                                                    "name": "_api_c2_user_message",
                                                                    "is_slidable": false
                                                                  },
                                                                  "type": "InjectedValue",
                                                                  "said": "a2Vsdm8tMzE4ODQ=",
                                                                  "is_slidable": false
                                                                }
                                                              },
                                                              "type": "TextExpression"
                                                            }
                                                          },
                                                          "type": "Message",
                                                          "name": "find_replace",
                                                          "is_slidable": true
                                                        },
                                                        "properties": {
                                                          "find": {
                                                            "entries": {
                                                              "0": "<user_image>"
                                                            },
                                                            "type": "TextExpression"
                                                          },
                                                          "replace": {
                                                            "entries": {
                                                              "0": {
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
                                                                                        "properties": {
                                                                                          "find": {
                                                                                            "entries": {
                                                                                              "0": "<user_image>"
                                                                                            },
                                                                                            "type": "TextExpression"
                                                                                          },
                                                                                          "replace": {
                                                                                            "entries": {
                                                                                              "0": {
                                                                                                "properties": {
                                                                                                  "arbitrary_text": {
                                                                                                    "entries": {
                                                                                                      "0": "",
                                                                                                      "1": {
                                                                                                        "next": {
                                                                                                          "next": {
                                                                                                            "args": 24,
                                                                                                            "type": "Message",
                                                                                                            "name": "truncated",
                                                                                                            "is_slidable": false
                                                                                                          },
                                                                                                          "type": "Message",
                                                                                                          "name": "_api_c2_user_image",
                                                                                                          "is_slidable": false
                                                                                                        },
                                                                                                        "type": "InjectedValue",
                                                                                                        "said": "a2Vsdm8tMzE4ODQ=",
                                                                                                        "is_slidable": false
                                                                                                      },
                                                                                                      "2": "",
                                                                                                      "3": {
                                                                                                        "next": {
                                                                                                          "next": {
                                                                                                            "next": {
                                                                                                              "args": {
                                                                                                                "properties": {
                                                                                                                  "option_set": "option.chat_type__os_",
                                                                                                                  "option_value": "team"
                                                                                                                },
                                                                                                                "type": "OneOptionValue",
                                                                                                                "is_slidable": false
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
                                                                                                                            "name": "signed_url_token_text",
                                                                                                                            "is_slidable": false
                                                                                                                          },
                                                                                                                          "type": "Message",
                                                                                                                          "name": "current_organization_custom_organization",
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
                                                                                                                      "0": "",
                                                                                                                      "1": {
                                                                                                                        "next": {
                                                                                                                          "next": {
                                                                                                                            "next": {
                                                                                                                              "args": {
                                                                                                                                "properties": {
                                                                                                                                  "option_set": "option.chat_type__os_",
                                                                                                                                  "option_value": "personal"
                                                                                                                                },
                                                                                                                                "type": "OneOptionValue",
                                                                                                                                "is_slidable": false
                                                                                                                              },
                                                                                                                              "next": {
                                                                                                                                "args": {
                                                                                                                                  "next": {
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
                                                                                                                                "next": {
                                                                                                                                  "properties": {
                                                                                                                                    "formatting_for_true": {
                                                                                                                                      "entries": {
                                                                                                                                        "0": "",
                                                                                                                                        "1": {
                                                                                                                                          "next": {
                                                                                                                                            "type": "Message",
                                                                                                                                            "name": "signed_url_token_text",
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
                                                                                                                                        "0": "",
                                                                                                                                        "1": {
                                                                                                                                          "next": {
                                                                                                                                            "next": {
                                                                                                                                              "next": {
                                                                                                                                                "type": "Message",
                                                                                                                                                "name": "signed_url_token_text",
                                                                                                                                                "is_slidable": false
                                                                                                                                              },
                                                                                                                                              "type": "Message",
                                                                                                                                              "name": "project_custom_project",
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
                                                                                                                                  "type": "Message",
                                                                                                                                  "name": "format_boolean",
                                                                                                                                  "is_slidable": true
                                                                                                                                },
                                                                                                                                "type": "Message",
                                                                                                                                "name": "or_",
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
                                                                                                                "type": "Message",
                                                                                                                "name": "format_boolean",
                                                                                                                "is_slidable": true
                                                                                                              },
                                                                                                              "type": "Message",
                                                                                                              "name": "equals",
                                                                                                              "is_slidable": false
                                                                                                            },
                                                                                                            "type": "Message",
                                                                                                            "name": "type_option_chat_type__os_",
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
                                                                                                      "4": "/",
                                                                                                      "5": {
                                                                                                        "next": {
                                                                                                          "next": {
                                                                                                            "properties": {
                                                                                                              "find": {
                                                                                                                "entries": {
                                                                                                                  "0": {
                                                                                                                    "next": {
                                                                                                                      "next": {
                                                                                                                        "args": 24,
                                                                                                                        "type": "Message",
                                                                                                                        "name": "truncated",
                                                                                                                        "is_slidable": false
                                                                                                                      },
                                                                                                                      "type": "Message",
                                                                                                                      "name": "_api_c2_user_image",
                                                                                                                      "is_slidable": false
                                                                                                                    },
                                                                                                                    "type": "InjectedValue",
                                                                                                                    "is_slidable": false
                                                                                                                  }
                                                                                                                },
                                                                                                                "type": "TextExpression"
                                                                                                              }
                                                                                                            },
                                                                                                            "type": "Message",
                                                                                                            "name": "find_replace",
                                                                                                            "is_slidable": true
                                                                                                          },
                                                                                                          "type": "Message",
                                                                                                          "name": "_api_c2_user_image",
                                                                                                          "is_slidable": false
                                                                                                        },
                                                                                                        "type": "InjectedValue",
                                                                                                        "is_slidable": false
                                                                                                      },
                                                                                                      "6": ""
                                                                                                    },
                                                                                                    "type": "TextExpression"
                                                                                                  }
                                                                                                },
                                                                                                "type": "ArbitraryText",
                                                                                                "said": "a2Vsdm8tMzE4ODQ="
                                                                                              },
                                                                                              "1": ""
                                                                                            },
                                                                                            "type": "TextExpression"
                                                                                          }
                                                                                        },
                                                                                        "type": "Message",
                                                                                        "name": "find_replace",
                                                                                        "is_slidable": true
                                                                                      },
                                                                                      "type": "Message",
                                                                                      "name": "new_image_context_body",
                                                                                      "is_slidable": false
                                                                                    },
                                                                                    "type": "Message",
                                                                                    "name": "provider",
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
                                                                  "name": "_api_c2_user_image",
                                                                  "is_slidable": false
                                                                },
                                                                "type": "InjectedValue",
                                                                "is_slidable": false
                                                              }
                                                            },
                                                            "type": "TextExpression"
                                                          }
                                                        },
                                                        "type": "Message",
                                                        "name": "find_replace",
                                                        "is_slidable": true
                                                      },
                                                      "type": "Message",
                                                      "name": "new_context_body",
                                                      "is_slidable": false
                                                    },
                                                    "type": "Message",
                                                    "name": "provider",
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
                                              "said": "a2Vsdm8tMzE4ODQ=",
                                              "is_slidable": false
                                            },
                                            "1": ""
                                          },
                                          "type": "TextExpression"
                                        },
                                        "delimiter": {
                                          "entries": {
                                            "0": ", "
                                          },
                                          "type": "TextExpression"
                                        }
                                      },
                                      "type": "Message",
                                      "name": "format_as_text",
                                      "is_slidable": true
                                    },
                                    "properties": {
                                      "descending": false,
                                      "sort_field": "_api_c2_sort"
                                    },
                                    "type": "Message",
                                    "name": "sorted",
                                    "is_slidable": true
                                  },
                                  "type": "Message",
                                  "name": "limit_to",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "list_from",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "get_list_data",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTUhL0"
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
                                "args": {
                                  "next": {
                                    "next": {
                                      "next": {
                                        "args": 10,
                                        "type": "Message",
                                        "name": "minus",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "count",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "get_list_data",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "element_id": "bTUhL0"
                                  },
                                  "type": "GetElement",
                                  "is_slidable": false
                                },
                                "next": {
                                  "args": {
                                    "next": {
                                      "next": {
                                        "type": "Message",
                                        "name": "count",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "get_list_data",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "element_id": "bTUhL0"
                                    },
                                    "type": "GetElement",
                                    "is_slidable": false
                                  },
                                  "next": {
                                    "next": {
                                      "properties": {
                                        "content": {
                                          "entries": {
                                            "1": "\n",
                                            "2": {
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
                                                                      "next": {
                                                                        "next": {
                                                                          "properties": {
                                                                            "find": {
                                                                              "entries": {
                                                                                "0": "<llm_message>"
                                                                              },
                                                                              "type": "TextExpression"
                                                                            },
                                                                            "replace": {
                                                                              "entries": {
                                                                                "0": {
                                                                                  "next": {
                                                                                    "next": {
                                                                                      "args": "null",
                                                                                      "next": {
                                                                                        "type": "Message",
                                                                                        "name": "format_json_encode",
                                                                                        "is_slidable": false
                                                                                      },
                                                                                      "type": "Message",
                                                                                      "name": "defaulting_to",
                                                                                      "is_slidable": false
                                                                                    },
                                                                                    "type": "Message",
                                                                                    "name": "_api_c2_llm_reply",
                                                                                    "is_slidable": false
                                                                                  },
                                                                                  "type": "InjectedValue",
                                                                                  "said": "a2Vsdm8tMzE4ODQ=",
                                                                                  "is_slidable": false
                                                                                }
                                                                              },
                                                                              "type": "TextExpression"
                                                                            }
                                                                          },
                                                                          "type": "Message",
                                                                          "name": "find_replace",
                                                                          "is_slidable": true
                                                                        },
                                                                        "properties": {
                                                                          "find": {
                                                                            "entries": {
                                                                              "0": "<user_message>"
                                                                            },
                                                                            "type": "TextExpression"
                                                                          },
                                                                          "replace": {
                                                                            "entries": {
                                                                              "0": {
                                                                                "next": {
                                                                                  "next": {
                                                                                    "type": "Message",
                                                                                    "name": "format_json_encode",
                                                                                    "is_slidable": false
                                                                                  },
                                                                                  "type": "Message",
                                                                                  "name": "_api_c2_user_message",
                                                                                  "is_slidable": false
                                                                                },
                                                                                "type": "InjectedValue",
                                                                                "said": "a2Vsdm8tMzE4ODQ=",
                                                                                "is_slidable": false
                                                                              }
                                                                            },
                                                                            "type": "TextExpression"
                                                                          }
                                                                        },
                                                                        "type": "Message",
                                                                        "name": "find_replace",
                                                                        "is_slidable": true
                                                                      },
                                                                      "properties": {
                                                                        "find": {
                                                                          "entries": {
                                                                            "0": "<user_image>"
                                                                          },
                                                                          "type": "TextExpression"
                                                                        },
                                                                        "replace": {
                                                                          "entries": {
                                                                            "0": {
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
                                                                                                      "properties": {
                                                                                                        "find": {
                                                                                                          "entries": {
                                                                                                            "0": "<user_image>"
                                                                                                          },
                                                                                                          "type": "TextExpression"
                                                                                                        },
                                                                                                        "replace": {
                                                                                                          "entries": {
                                                                                                            "0": {
                                                                                                              "properties": {
                                                                                                                "arbitrary_text": {
                                                                                                                  "entries": {
                                                                                                                    "0": "",
                                                                                                                    "1": {
                                                                                                                      "next": {
                                                                                                                        "properties": {
                                                                                                                          "formatting_for_true": {
                                                                                                                            "entries": {
                                                                                                                              "0": "https://playgram-version-test.b-cdn.net/"
                                                                                                                            },
                                                                                                                            "type": "TextExpression"
                                                                                                                          },
                                                                                                                          "formatting_for_false": {
                                                                                                                            "entries": {
                                                                                                                              "0": "https://frala.b-cdn.net/"
                                                                                                                            },
                                                                                                                            "type": "TextExpression"
                                                                                                                          }
                                                                                                                        },
                                                                                                                        "type": "Message",
                                                                                                                        "name": "format_boolean",
                                                                                                                        "is_slidable": true
                                                                                                                      },
                                                                                                                      "properties": {
                                                                                                                        "name": "AppIsTest"
                                                                                                                      },
                                                                                                                      "type": "PageData",
                                                                                                                      "said": "a2Vsdm8tMzE4ODQ=",
                                                                                                                      "is_slidable": false
                                                                                                                    },
                                                                                                                    "2": "",
                                                                                                                    "3": {
                                                                                                                      "next": {
                                                                                                                        "next": {
                                                                                                                          "next": {
                                                                                                                            "args": {
                                                                                                                              "properties": {
                                                                                                                                "option_set": "option.chat_type__os_",
                                                                                                                                "option_value": "team"
                                                                                                                              },
                                                                                                                              "type": "OneOptionValue",
                                                                                                                              "is_slidable": false
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
                                                                                                                                          "name": "signed_url_token_text",
                                                                                                                                          "is_slidable": false
                                                                                                                                        },
                                                                                                                                        "type": "Message",
                                                                                                                                        "name": "current_organization_custom_organization",
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
                                                                                                                                    "0": "",
                                                                                                                                    "1": {
                                                                                                                                      "next": {
                                                                                                                                        "next": {
                                                                                                                                          "next": {
                                                                                                                                            "args": {
                                                                                                                                              "properties": {
                                                                                                                                                "option_set": "option.chat_type__os_",
                                                                                                                                                "option_value": "personal"
                                                                                                                                              },
                                                                                                                                              "type": "OneOptionValue",
                                                                                                                                              "is_slidable": false
                                                                                                                                            },
                                                                                                                                            "next": {
                                                                                                                                              "args": {
                                                                                                                                                "next": {
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
                                                                                                                                              "next": {
                                                                                                                                                "properties": {
                                                                                                                                                  "formatting_for_true": {
                                                                                                                                                    "entries": {
                                                                                                                                                      "0": "",
                                                                                                                                                      "1": {
                                                                                                                                                        "next": {
                                                                                                                                                          "type": "Message",
                                                                                                                                                          "name": "signed_url_token_text",
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
                                                                                                                                                      "0": "",
                                                                                                                                                      "1": {
                                                                                                                                                        "next": {
                                                                                                                                                          "next": {
                                                                                                                                                            "next": {
                                                                                                                                                              "type": "Message",
                                                                                                                                                              "name": "signed_url_token_text",
                                                                                                                                                              "is_slidable": false
                                                                                                                                                            },
                                                                                                                                                            "type": "Message",
                                                                                                                                                            "name": "project_custom_project",
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
                                                                                                                                                "type": "Message",
                                                                                                                                                "name": "format_boolean",
                                                                                                                                                "is_slidable": true
                                                                                                                                              },
                                                                                                                                              "type": "Message",
                                                                                                                                              "name": "or_",
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
                                                                                                                              "type": "Message",
                                                                                                                              "name": "format_boolean",
                                                                                                                              "is_slidable": true
                                                                                                                            },
                                                                                                                            "type": "Message",
                                                                                                                            "name": "equals",
                                                                                                                            "is_slidable": false
                                                                                                                          },
                                                                                                                          "type": "Message",
                                                                                                                          "name": "type_option_chat_type__os_",
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
                                                                                                                    "4": "/",
                                                                                                                    "5": {
                                                                                                                      "next": {
                                                                                                                        "next": {
                                                                                                                          "properties": {
                                                                                                                            "find": {
                                                                                                                              "entries": {
                                                                                                                                "0": {
                                                                                                                                  "next": {
                                                                                                                                    "properties": {
                                                                                                                                      "formatting_for_true": {
                                                                                                                                        "entries": {
                                                                                                                                          "0": "https://playgram-version-test.b-cdn.net/"
                                                                                                                                        },
                                                                                                                                        "type": "TextExpression"
                                                                                                                                      },
                                                                                                                                      "formatting_for_false": {
                                                                                                                                        "entries": {
                                                                                                                                          "0": "https://frala.b-cdn.net/"
                                                                                                                                        },
                                                                                                                                        "type": "TextExpression"
                                                                                                                                      }
                                                                                                                                    },
                                                                                                                                    "type": "Message",
                                                                                                                                    "name": "format_boolean",
                                                                                                                                    "is_slidable": true
                                                                                                                                  },
                                                                                                                                  "properties": {
                                                                                                                                    "name": "AppIsTest"
                                                                                                                                  },
                                                                                                                                  "type": "PageData",
                                                                                                                                  "said": "a2Vsdm8tMzE4ODQ=",
                                                                                                                                  "is_slidable": false
                                                                                                                                }
                                                                                                                              },
                                                                                                                              "type": "TextExpression"
                                                                                                                            }
                                                                                                                          },
                                                                                                                          "type": "Message",
                                                                                                                          "name": "find_replace",
                                                                                                                          "is_slidable": true
                                                                                                                        },
                                                                                                                        "type": "Message",
                                                                                                                        "name": "_api_c2_user_image",
                                                                                                                        "is_slidable": false
                                                                                                                      },
                                                                                                                      "type": "InjectedValue",
                                                                                                                      "is_slidable": false
                                                                                                                    },
                                                                                                                    "6": ""
                                                                                                                  },
                                                                                                                  "type": "TextExpression"
                                                                                                                }
                                                                                                              },
                                                                                                              "type": "ArbitraryText",
                                                                                                              "said": "a2Vsdm8tMzE4ODQ="
                                                                                                            },
                                                                                                            "1": ""
                                                                                                          },
                                                                                                          "type": "TextExpression"
                                                                                                        }
                                                                                                      },
                                                                                                      "type": "Message",
                                                                                                      "name": "find_replace",
                                                                                                      "is_slidable": true
                                                                                                    },
                                                                                                    "type": "Message",
                                                                                                    "name": "new_image_context_body",
                                                                                                    "is_slidable": false
                                                                                                  },
                                                                                                  "type": "Message",
                                                                                                  "name": "provider",
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
                                                                                "name": "_api_c2_user_image",
                                                                                "is_slidable": false
                                                                              },
                                                                              "type": "InjectedValue",
                                                                              "is_slidable": false
                                                                            }
                                                                          },
                                                                          "type": "TextExpression"
                                                                        }
                                                                      },
                                                                      "type": "Message",
                                                                      "name": "find_replace",
                                                                      "is_slidable": true
                                                                    },
                                                                    "type": "Message",
                                                                    "name": "new_context_body",
                                                                    "is_slidable": false
                                                                  },
                                                                  "type": "Message",
                                                                  "name": "provider",
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
                                                                  "args": {
                                                                    "properties": {
                                                                      "option_set": "option.llm_providers__os_",
                                                                      "option_value": "gemini"
                                                                    },
                                                                    "type": "OneOptionValue",
                                                                    "is_slidable": false
                                                                  },
                                                                  "next": {
                                                                    "properties": {
                                                                      "formatting_for_true": {
                                                                        "entries": {
                                                                          "0": {
                                                                            "next": {
                                                                              "next": {
                                                                                "next": {
                                                                                  "next": {
                                                                                    "next": {
                                                                                      "next": {
                                                                                        "next": {
                                                                                          "properties": {
                                                                                            "find": {
                                                                                              "entries": {
                                                                                                "0": "{role: \"model\", parts: [{ text: <llm_message>}]}"
                                                                                              },
                                                                                              "type": "TextExpression"
                                                                                            },
                                                                                            "replace": {
                                                                                              "entries": {
                                                                                                "0": "{\n  \"role\": \"model\",\n  \"parts\": [\n    {\n      \"fileData\": {\"fileUri\": ",
                                                                                                "1": {
                                                                                                  "next": {
                                                                                                    "type": "Message",
                                                                                                    "name": "format_json_encode",
                                                                                                    "is_slidable": false
                                                                                                  },
                                                                                                  "properties": {
                                                                                                    "arbitrary_text": {
                                                                                                      "entries": {
                                                                                                        "0": "",
                                                                                                        "1": {
                                                                                                          "next": {
                                                                                                            "properties": {
                                                                                                              "formatting_for_true": {
                                                                                                                "entries": {
                                                                                                                  "0": "https://playgram-version-test.b-cdn.net/"
                                                                                                                },
                                                                                                                "type": "TextExpression"
                                                                                                              },
                                                                                                              "formatting_for_false": {
                                                                                                                "entries": {
                                                                                                                  "0": "https://frala.b-cdn.net/"
                                                                                                                },
                                                                                                                "type": "TextExpression"
                                                                                                              }
                                                                                                            },
                                                                                                            "type": "Message",
                                                                                                            "name": "format_boolean",
                                                                                                            "is_slidable": true
                                                                                                          },
                                                                                                          "properties": {
                                                                                                            "name": "AppIsTest"
                                                                                                          },
                                                                                                          "type": "PageData",
                                                                                                          "is_slidable": false
                                                                                                        },
                                                                                                        "2": "",
                                                                                                        "3": {
                                                                                                          "next": {
                                                                                                            "next": {
                                                                                                              "next": {
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
                                                                                                            "type": "Message",
                                                                                                            "name": "get_group_data",
                                                                                                            "is_slidable": false
                                                                                                          },
                                                                                                          "properties": {
                                                                                                            "element_id": "bTUiv0"
                                                                                                          },
                                                                                                          "type": "GetElement",
                                                                                                          "is_slidable": false
                                                                                                        },
                                                                                                        "4": "/",
                                                                                                        "5": {
                                                                                                          "next": {
                                                                                                            "next": {
                                                                                                              "properties": {
                                                                                                                "find": {
                                                                                                                  "entries": {
                                                                                                                    "0": "",
                                                                                                                    "1": {
                                                                                                                      "next": {
                                                                                                                        "properties": {
                                                                                                                          "formatting_for_true": {
                                                                                                                            "entries": {
                                                                                                                              "0": "https://playgram-version-test.b-cdn.net/"
                                                                                                                            },
                                                                                                                            "type": "TextExpression"
                                                                                                                          },
                                                                                                                          "formatting_for_false": {
                                                                                                                            "entries": {
                                                                                                                              "0": "https://frala.b-cdn.net/"
                                                                                                                            },
                                                                                                                            "type": "TextExpression"
                                                                                                                          }
                                                                                                                        },
                                                                                                                        "type": "Message",
                                                                                                                        "name": "format_boolean",
                                                                                                                        "is_slidable": true
                                                                                                                      },
                                                                                                                      "properties": {
                                                                                                                        "name": "AppIsTest"
                                                                                                                      },
                                                                                                                      "type": "PageData",
                                                                                                                      "is_slidable": false
                                                                                                                    },
                                                                                                                    "2": ""
                                                                                                                  },
                                                                                                                  "type": "TextExpression"
                                                                                                                }
                                                                                                              },
                                                                                                              "type": "Message",
                                                                                                              "name": "find_replace",
                                                                                                              "is_slidable": true
                                                                                                            },
                                                                                                            "type": "Message",
                                                                                                            "name": "_api_c2_image",
                                                                                                            "is_slidable": false
                                                                                                          },
                                                                                                          "type": "InjectedValue",
                                                                                                          "is_slidable": false
                                                                                                        },
                                                                                                        "6": ""
                                                                                                      },
                                                                                                      "type": "TextExpression"
                                                                                                    }
                                                                                                  },
                                                                                                  "type": "ArbitraryText",
                                                                                                  "said": "a2Vsdm8tMzE4ODQ="
                                                                                                },
                                                                                                "2": ",\n        \"mimeType\": \"image/webp\"\n      }\n    }\n  ]\n}"
                                                                                              },
                                                                                              "type": "TextExpression"
                                                                                            }
                                                                                          },
                                                                                          "type": "Message",
                                                                                          "name": "find_replace",
                                                                                          "is_slidable": true
                                                                                        },
                                                                                        "properties": {
                                                                                          "find": {
                                                                                            "entries": {
                                                                                              "0": "<user_message>"
                                                                                            },
                                                                                            "type": "TextExpression"
                                                                                          },
                                                                                          "replace": {
                                                                                            "entries": {
                                                                                              "0": {
                                                                                                "next": {
                                                                                                  "next": {
                                                                                                    "type": "Message",
                                                                                                    "name": "format_json_encode",
                                                                                                    "is_slidable": false
                                                                                                  },
                                                                                                  "type": "Message",
                                                                                                  "name": "_api_c2_user_message",
                                                                                                  "is_slidable": false
                                                                                                },
                                                                                                "type": "InjectedValue",
                                                                                                "said": "a2Vsdm8tMzE4ODQ=",
                                                                                                "is_slidable": false
                                                                                              }
                                                                                            },
                                                                                            "type": "TextExpression"
                                                                                          }
                                                                                        },
                                                                                        "type": "Message",
                                                                                        "name": "find_replace",
                                                                                        "is_slidable": true
                                                                                      },
                                                                                      "properties": {
                                                                                        "find": {
                                                                                          "entries": {
                                                                                            "0": "<user_image>"
                                                                                          },
                                                                                          "type": "TextExpression"
                                                                                        },
                                                                                        "replace": {
                                                                                          "entries": {
                                                                                            "0": {
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
                                                                                                                      "properties": {
                                                                                                                        "find": {
                                                                                                                          "entries": {
                                                                                                                            "0": "<user_image>"
                                                                                                                          },
                                                                                                                          "type": "TextExpression"
                                                                                                                        },
                                                                                                                        "replace": {
                                                                                                                          "entries": {
                                                                                                                            "0": {
                                                                                                                              "properties": {
                                                                                                                                "arbitrary_text": {
                                                                                                                                  "entries": {
                                                                                                                                    "0": "",
                                                                                                                                    "1": {
                                                                                                                                      "next": {
                                                                                                                                        "next": {
                                                                                                                                          "args": 24,
                                                                                                                                          "type": "Message",
                                                                                                                                          "name": "truncated",
                                                                                                                                          "is_slidable": false
                                                                                                                                        },
                                                                                                                                        "type": "Message",
                                                                                                                                        "name": "_api_c2_user_image",
                                                                                                                                        "is_slidable": false
                                                                                                                                      },
                                                                                                                                      "type": "InjectedValue",
                                                                                                                                      "said": "a2Vsdm8tMzE4ODQ=",
                                                                                                                                      "is_slidable": false
                                                                                                                                    },
                                                                                                                                    "2": "",
                                                                                                                                    "3": {
                                                                                                                                      "next": {
                                                                                                                                        "next": {
                                                                                                                                          "next": {
                                                                                                                                            "args": {
                                                                                                                                              "properties": {
                                                                                                                                                "option_set": "option.chat_type__os_",
                                                                                                                                                "option_value": "team"
                                                                                                                                              },
                                                                                                                                              "type": "OneOptionValue",
                                                                                                                                              "is_slidable": false
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
                                                                                                                                                          "name": "signed_url_token_text",
                                                                                                                                                          "is_slidable": false
                                                                                                                                                        },
                                                                                                                                                        "type": "Message",
                                                                                                                                                        "name": "current_organization_custom_organization",
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
                                                                                                                                                    "0": "",
                                                                                                                                                    "1": {
                                                                                                                                                      "next": {
                                                                                                                                                        "next": {
                                                                                                                                                          "next": {
                                                                                                                                                            "args": {
                                                                                                                                                              "properties": {
                                                                                                                                                                "option_set": "option.chat_type__os_",
                                                                                                                                                                "option_value": "personal"
                                                                                                                                                              },
                                                                                                                                                              "type": "OneOptionValue",
                                                                                                                                                              "is_slidable": false
                                                                                                                                                            },
                                                                                                                                                            "next": {
                                                                                                                                                              "args": {
                                                                                                                                                                "next": {
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
                                                                                                                                                              "next": {
                                                                                                                                                                "properties": {
                                                                                                                                                                  "formatting_for_true": {
                                                                                                                                                                    "entries": {
                                                                                                                                                                      "0": "",
                                                                                                                                                                      "1": {
                                                                                                                                                                        "next": {
                                                                                                                                                                          "type": "Message",
                                                                                                                                                                          "name": "signed_url_token_text",
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
                                                                                                                                                                      "0": "",
                                                                                                                                                                      "1": {
                                                                                                                                                                        "next": {
                                                                                                                                                                          "next": {
                                                                                                                                                                            "next": {
                                                                                                                                                                              "type": "Message",
                                                                                                                                                                              "name": "signed_url_token_text",
                                                                                                                                                                              "is_slidable": false
                                                                                                                                                                            },
                                                                                                                                                                            "type": "Message",
                                                                                                                                                                            "name": "project_custom_project",
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
                                                                                                                                                                "type": "Message",
                                                                                                                                                                "name": "format_boolean",
                                                                                                                                                                "is_slidable": true
                                                                                                                                                              },
                                                                                                                                                              "type": "Message",
                                                                                                                                                              "name": "or_",
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
                                                                                                                                              "type": "Message",
                                                                                                                                              "name": "format_boolean",
                                                                                                                                              "is_slidable": true
                                                                                                                                            },
                                                                                                                                            "type": "Message",
                                                                                                                                            "name": "equals",
                                                                                                                                            "is_slidable": false
                                                                                                                                          },
                                                                                                                                          "type": "Message",
                                                                                                                                          "name": "type_option_chat_type__os_",
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
                                                                                                                                    "4": "/",
                                                                                                                                    "5": {
                                                                                                                                      "next": {
                                                                                                                                        "next": {
                                                                                                                                          "properties": {
                                                                                                                                            "find": {
                                                                                                                                              "entries": {
                                                                                                                                                "0": {
                                                                                                                                                  "next": {
                                                                                                                                                    "next": {
                                                                                                                                                      "args": 24,
                                                                                                                                                      "type": "Message",
                                                                                                                                                      "name": "truncated",
                                                                                                                                                      "is_slidable": false
                                                                                                                                                    },
                                                                                                                                                    "type": "Message",
                                                                                                                                                    "name": "_api_c2_user_image",
                                                                                                                                                    "is_slidable": false
                                                                                                                                                  },
                                                                                                                                                  "type": "InjectedValue",
                                                                                                                                                  "is_slidable": false
                                                                                                                                                }
                                                                                                                                              },
                                                                                                                                              "type": "TextExpression"
                                                                                                                                            }
                                                                                                                                          },
                                                                                                                                          "type": "Message",
                                                                                                                                          "name": "find_replace",
                                                                                                                                          "is_slidable": true
                                                                                                                                        },
                                                                                                                                        "type": "Message",
                                                                                                                                        "name": "_api_c2_user_image",
                                                                                                                                        "is_slidable": false
                                                                                                                                      },
                                                                                                                                      "type": "InjectedValue",
                                                                                                                                      "is_slidable": false
                                                                                                                                    },
                                                                                                                                    "6": ""
                                                                                                                                  },
                                                                                                                                  "type": "TextExpression"
                                                                                                                                }
                                                                                                                              },
                                                                                                                              "type": "ArbitraryText",
                                                                                                                              "said": "a2Vsdm8tMzE4ODQ="
                                                                                                                            },
                                                                                                                            "1": ""
                                                                                                                          },
                                                                                                                          "type": "TextExpression"
                                                                                                                        }
                                                                                                                      },
                                                                                                                      "type": "Message",
                                                                                                                      "name": "find_replace",
                                                                                                                      "is_slidable": true
                                                                                                                    },
                                                                                                                    "type": "Message",
                                                                                                                    "name": "new_image_context_body",
                                                                                                                    "is_slidable": false
                                                                                                                  },
                                                                                                                  "type": "Message",
                                                                                                                  "name": "provider",
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
                                                                                                "name": "_api_c2_user_image",
                                                                                                "is_slidable": false
                                                                                              },
                                                                                              "type": "InjectedValue",
                                                                                              "is_slidable": false
                                                                                            }
                                                                                          },
                                                                                          "type": "TextExpression"
                                                                                        }
                                                                                      },
                                                                                      "type": "Message",
                                                                                      "name": "find_replace",
                                                                                      "is_slidable": true
                                                                                    },
                                                                                    "type": "Message",
                                                                                    "name": "new_context_body",
                                                                                    "is_slidable": false
                                                                                  },
                                                                                  "type": "Message",
                                                                                  "name": "provider",
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
                                                                            "said": "a2Vsdm8tMzE4ODQ=",
                                                                            "is_slidable": false
                                                                          }
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
                                                                                      "next": {
                                                                                        "next": {
                                                                                          "properties": {
                                                                                            "find": {
                                                                                              "entries": {
                                                                                                "0": "{role: \"assistant\", content: <llm_message>}"
                                                                                              },
                                                                                              "type": "TextExpression"
                                                                                            },
                                                                                            "replace": {
                                                                                              "entries": {
                                                                                                "0": "{\n        \"role\": \"user\",\n        \"content\": [\n           \n            {\n                \"type\": \"input_image\",\n                \"image_url\": ",
                                                                                                "1": {
                                                                                                  "next": {
                                                                                                    "type": "Message",
                                                                                                    "name": "format_json_encode",
                                                                                                    "is_slidable": false
                                                                                                  },
                                                                                                  "properties": {
                                                                                                    "arbitrary_text": {
                                                                                                      "entries": {
                                                                                                        "0": "",
                                                                                                        "1": {
                                                                                                          "next": {
                                                                                                            "properties": {
                                                                                                              "formatting_for_true": {
                                                                                                                "entries": {
                                                                                                                  "0": "https://playgram-version-test.b-cdn.net/"
                                                                                                                },
                                                                                                                "type": "TextExpression"
                                                                                                              },
                                                                                                              "formatting_for_false": {
                                                                                                                "entries": {
                                                                                                                  "0": "https://frala.b-cdn.net/"
                                                                                                                },
                                                                                                                "type": "TextExpression"
                                                                                                              }
                                                                                                            },
                                                                                                            "type": "Message",
                                                                                                            "name": "format_boolean",
                                                                                                            "is_slidable": true
                                                                                                          },
                                                                                                          "properties": {
                                                                                                            "name": "AppIsTest"
                                                                                                          },
                                                                                                          "type": "PageData",
                                                                                                          "is_slidable": false
                                                                                                        },
                                                                                                        "2": "",
                                                                                                        "3": {
                                                                                                          "next": {
                                                                                                            "next": {
                                                                                                              "next": {
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
                                                                                                            "type": "Message",
                                                                                                            "name": "get_group_data",
                                                                                                            "is_slidable": false
                                                                                                          },
                                                                                                          "properties": {
                                                                                                            "element_id": "bTUiv0"
                                                                                                          },
                                                                                                          "type": "GetElement",
                                                                                                          "is_slidable": false
                                                                                                        },
                                                                                                        "4": "/",
                                                                                                        "5": {
                                                                                                          "next": {
                                                                                                            "next": {
                                                                                                              "properties": {
                                                                                                                "find": {
                                                                                                                  "entries": {
                                                                                                                    "0": "",
                                                                                                                    "1": {
                                                                                                                      "next": {
                                                                                                                        "properties": {
                                                                                                                          "formatting_for_true": {
                                                                                                                            "entries": {
                                                                                                                              "0": "https://playgram-version-test.b-cdn.net/"
                                                                                                                            },
                                                                                                                            "type": "TextExpression"
                                                                                                                          },
                                                                                                                          "formatting_for_false": {
                                                                                                                            "entries": {
                                                                                                                              "0": "https://frala.b-cdn.net/"
                                                                                                                            },
                                                                                                                            "type": "TextExpression"
                                                                                                                          }
                                                                                                                        },
                                                                                                                        "type": "Message",
                                                                                                                        "name": "format_boolean",
                                                                                                                        "is_slidable": true
                                                                                                                      },
                                                                                                                      "properties": {
                                                                                                                        "name": "AppIsTest"
                                                                                                                      },
                                                                                                                      "type": "PageData",
                                                                                                                      "is_slidable": false
                                                                                                                    },
                                                                                                                    "2": ""
                                                                                                                  },
                                                                                                                  "type": "TextExpression"
                                                                                                                }
                                                                                                              },
                                                                                                              "type": "Message",
                                                                                                              "name": "find_replace",
                                                                                                              "is_slidable": true
                                                                                                            },
                                                                                                            "type": "Message",
                                                                                                            "name": "_api_c2_image",
                                                                                                            "is_slidable": false
                                                                                                          },
                                                                                                          "type": "InjectedValue",
                                                                                                          "is_slidable": false
                                                                                                        },
                                                                                                        "6": ""
                                                                                                      },
                                                                                                      "type": "TextExpression"
                                                                                                    }
                                                                                                  },
                                                                                                  "type": "ArbitraryText",
                                                                                                  "said": "a2Vsdm8tMzE4ODQ="
                                                                                                },
                                                                                                "2": "\n            }\n        ]\n    }"
                                                                                              },
                                                                                              "type": "TextExpression"
                                                                                            }
                                                                                          },
                                                                                          "type": "Message",
                                                                                          "name": "find_replace",
                                                                                          "is_slidable": true
                                                                                        },
                                                                                        "properties": {
                                                                                          "find": {
                                                                                            "entries": {
                                                                                              "0": "<user_message>"
                                                                                            },
                                                                                            "type": "TextExpression"
                                                                                          },
                                                                                          "replace": {
                                                                                            "entries": {
                                                                                              "0": {
                                                                                                "next": {
                                                                                                  "next": {
                                                                                                    "type": "Message",
                                                                                                    "name": "format_json_encode",
                                                                                                    "is_slidable": false
                                                                                                  },
                                                                                                  "type": "Message",
                                                                                                  "name": "_api_c2_user_message",
                                                                                                  "is_slidable": false
                                                                                                },
                                                                                                "type": "InjectedValue",
                                                                                                "said": "a2Vsdm8tMzE4ODQ=",
                                                                                                "is_slidable": false
                                                                                              }
                                                                                            },
                                                                                            "type": "TextExpression"
                                                                                          }
                                                                                        },
                                                                                        "type": "Message",
                                                                                        "name": "find_replace",
                                                                                        "is_slidable": true
                                                                                      },
                                                                                      "properties": {
                                                                                        "find": {
                                                                                          "entries": {
                                                                                            "0": "<user_image>"
                                                                                          },
                                                                                          "type": "TextExpression"
                                                                                        },
                                                                                        "replace": {
                                                                                          "entries": {
                                                                                            "0": {
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
                                                                                                                      "properties": {
                                                                                                                        "find": {
                                                                                                                          "entries": {
                                                                                                                            "0": "<user_image>"
                                                                                                                          },
                                                                                                                          "type": "TextExpression"
                                                                                                                        },
                                                                                                                        "replace": {
                                                                                                                          "entries": {
                                                                                                                            "0": {
                                                                                                                              "properties": {
                                                                                                                                "arbitrary_text": {
                                                                                                                                  "entries": {
                                                                                                                                    "0": "",
                                                                                                                                    "1": {
                                                                                                                                      "next": {
                                                                                                                                        "next": {
                                                                                                                                          "args": 24,
                                                                                                                                          "type": "Message",
                                                                                                                                          "name": "truncated",
                                                                                                                                          "is_slidable": false
                                                                                                                                        },
                                                                                                                                        "type": "Message",
                                                                                                                                        "name": "_api_c2_user_image",
                                                                                                                                        "is_slidable": false
                                                                                                                                      },
                                                                                                                                      "type": "InjectedValue",
                                                                                                                                      "said": "a2Vsdm8tMzE4ODQ=",
                                                                                                                                      "is_slidable": false
                                                                                                                                    },
                                                                                                                                    "2": "",
                                                                                                                                    "3": {
                                                                                                                                      "next": {
                                                                                                                                        "next": {
                                                                                                                                          "next": {
                                                                                                                                            "args": {
                                                                                                                                              "properties": {
                                                                                                                                                "option_set": "option.chat_type__os_",
                                                                                                                                                "option_value": "team"
                                                                                                                                              },
                                                                                                                                              "type": "OneOptionValue",
                                                                                                                                              "is_slidable": false
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
                                                                                                                                                          "name": "signed_url_token_text",
                                                                                                                                                          "is_slidable": false
                                                                                                                                                        },
                                                                                                                                                        "type": "Message",
                                                                                                                                                        "name": "current_organization_custom_organization",
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
                                                                                                                                                    "0": "",
                                                                                                                                                    "1": {
                                                                                                                                                      "next": {
                                                                                                                                                        "next": {
                                                                                                                                                          "next": {
                                                                                                                                                            "args": {
                                                                                                                                                              "properties": {
                                                                                                                                                                "option_set": "option.chat_type__os_",
                                                                                                                                                                "option_value": "personal"
                                                                                                                                                              },
                                                                                                                                                              "type": "OneOptionValue",
                                                                                                                                                              "is_slidable": false
                                                                                                                                                            },
                                                                                                                                                            "next": {
                                                                                                                                                              "args": {
                                                                                                                                                                "next": {
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
                                                                                                                                                              "next": {
                                                                                                                                                                "properties": {
                                                                                                                                                                  "formatting_for_true": {
                                                                                                                                                                    "entries": {
                                                                                                                                                                      "0": "",
                                                                                                                                                                      "1": {
                                                                                                                                                                        "next": {
                                                                                                                                                                          "type": "Message",
                                                                                                                                                                          "name": "signed_url_token_text",
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
                                                                                                                                                                      "0": "",
                                                                                                                                                                      "1": {
                                                                                                                                                                        "next": {
                                                                                                                                                                          "next": {
                                                                                                                                                                            "next": {
                                                                                                                                                                              "type": "Message",
                                                                                                                                                                              "name": "signed_url_token_text",
                                                                                                                                                                              "is_slidable": false
                                                                                                                                                                            },
                                                                                                                                                                            "type": "Message",
                                                                                                                                                                            "name": "project_custom_project",
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
                                                                                                                                                                "type": "Message",
                                                                                                                                                                "name": "format_boolean",
                                                                                                                                                                "is_slidable": true
                                                                                                                                                              },
                                                                                                                                                              "type": "Message",
                                                                                                                                                              "name": "or_",
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
                                                                                                                                              "type": "Message",
                                                                                                                                              "name": "format_boolean",
                                                                                                                                              "is_slidable": true
                                                                                                                                            },
                                                                                                                                            "type": "Message",
                                                                                                                                            "name": "equals",
                                                                                                                                            "is_slidable": false
                                                                                                                                          },
                                                                                                                                          "type": "Message",
                                                                                                                                          "name": "type_option_chat_type__os_",
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
                                                                                                                                    "4": "/",
                                                                                                                                    "5": {
                                                                                                                                      "next": {
                                                                                                                                        "next": {
                                                                                                                                          "properties": {
                                                                                                                                            "find": {
                                                                                                                                              "entries": {
                                                                                                                                                "0": {
                                                                                                                                                  "next": {
                                                                                                                                                    "next": {
                                                                                                                                                      "args": 24,
                                                                                                                                                      "type": "Message",
                                                                                                                                                      "name": "truncated",
                                                                                                                                                      "is_slidable": false
                                                                                                                                                    },
                                                                                                                                                    "type": "Message",
                                                                                                                                                    "name": "_api_c2_user_image",
                                                                                                                                                    "is_slidable": false
                                                                                                                                                  },
                                                                                                                                                  "type": "InjectedValue",
                                                                                                                                                  "is_slidable": false
                                                                                                                                                }
                                                                                                                                              },
                                                                                                                                              "type": "TextExpression"
                                                                                                                                            }
                                                                                                                                          },
                                                                                                                                          "type": "Message",
                                                                                                                                          "name": "find_replace",
                                                                                                                                          "is_slidable": true
                                                                                                                                        },
                                                                                                                                        "type": "Message",
                                                                                                                                        "name": "_api_c2_user_image",
                                                                                                                                        "is_slidable": false
                                                                                                                                      },
                                                                                                                                      "type": "InjectedValue",
                                                                                                                                      "is_slidable": false
                                                                                                                                    },
                                                                                                                                    "6": ""
                                                                                                                                  },
                                                                                                                                  "type": "TextExpression"
                                                                                                                                }
                                                                                                                              },
                                                                                                                              "type": "ArbitraryText",
                                                                                                                              "said": "a2Vsdm8tMzE4ODQ="
                                                                                                                            },
                                                                                                                            "1": ""
                                                                                                                          },
                                                                                                                          "type": "TextExpression"
                                                                                                                        }
                                                                                                                      },
                                                                                                                      "type": "Message",
                                                                                                                      "name": "find_replace",
                                                                                                                      "is_slidable": true
                                                                                                                    },
                                                                                                                    "type": "Message",
                                                                                                                    "name": "new_image_context_body",
                                                                                                                    "is_slidable": false
                                                                                                                  },
                                                                                                                  "type": "Message",
                                                                                                                  "name": "provider",
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
                                                                                                "name": "_api_c2_user_image",
                                                                                                "is_slidable": false
                                                                                              },
                                                                                              "type": "InjectedValue",
                                                                                              "is_slidable": false
                                                                                            }
                                                                                          },
                                                                                          "type": "TextExpression"
                                                                                        }
                                                                                      },
                                                                                      "type": "Message",
                                                                                      "name": "find_replace",
                                                                                      "is_slidable": true
                                                                                    },
                                                                                    "type": "Message",
                                                                                    "name": "new_context_body",
                                                                                    "is_slidable": false
                                                                                  },
                                                                                  "type": "Message",
                                                                                  "name": "provider",
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
                                                                "name": "provider",
                                                                "is_slidable": false
                                                              },
                                                              "type": "Message",
                                                              "name": "get_group_data",
                                                              "is_slidable": false
                                                            },
                                                            "properties": {
                                                              "element_id": "bTcdF"
                                                            },
                                                            "type": "GetElement",
                                                            "is_slidable": false
                                                          },
                                                          "2": "\n",
                                                          "4": ""
                                                        },
                                                        "type": "TextExpression"
                                                      }
                                                    },
                                                    "type": "Message",
                                                    "name": "format_boolean",
                                                    "is_slidable": true
                                                  },
                                                  "type": "Message",
                                                  "name": "is_empty",
                                                  "is_slidable": false
                                                },
                                                "type": "Message",
                                                "name": "_api_c2_image",
                                                "is_slidable": false
                                              },
                                              "type": "InjectedValue",
                                              "said": "a2Vsdm8tMzE4ODQ=",
                                              "is_slidable": false
                                            },
                                            "3": ""
                                          },
                                          "type": "TextExpression"
                                        },
                                        "delimiter": {
                                          "entries": {
                                            "0": ", "
                                          },
                                          "type": "TextExpression"
                                        }
                                      },
                                      "type": "Message",
                                      "name": "format_as_text",
                                      "is_slidable": true
                                    },
                                    "properties": {
                                      "descending": false,
                                      "sort_field": "_api_c2_sort"
                                    },
                                    "type": "Message",
                                    "name": "sorted",
                                    "is_slidable": true
                                  },
                                  "type": "Message",
                                  "name": "limit_to",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "list_from",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "get_list_data",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTUhL0"
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
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "not_equals",
                "is_slidable": false
              },
              "type": "Message",
              "name": "provider",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTcdF"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
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
            "next": {
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
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "7": {
        "param_id": "bTQFq0",
        "arg_value": {
          "next": {
            "next": {
              "type": "Message",
              "name": "enabled_tools_list_option_llm_tool__os_",
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
        }
      },
      "8": {
        "param_id": "bTQSU0",
        "arg_value": {
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
          "type": "Empty"
        }
      },
      "16": {
        "param_id": "bTwEC0",
        "arg_value": {
          "type": "Empty"
        }
      }
    },
    "custom_event": "bTnZH0"
  },
  "type": "ScheduleCustom",
  "id": "bTnaE0"
};
