export const schedulecustom = {
  "properties": {
    "arguments": {
      "0": {
        "param_id": "bTsqL1",
        "arg_value": {
          "properties": {
            "btype_id": "number",
            "event_id": "bTacv0",
            "optional": false,
            "param_id": "bTtwF1",
            "param_name": "sort"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "1": {
        "param_id": "bTtwk",
        "arg_value": {
          "properties": {
            "btype_id": "text",
            "event_id": "bTacv0",
            "optional": false,
            "param_id": "bTadT0",
            "param_name": "message_text"
          },
          "type": "CurrentWorkflowItem",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "2": {
        "param_id": "bTtwT",
        "arg_value": true
      },
      "3": {
        "param_id": "bTtxz0",
        "arg_value": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "args": 10,
                  "type": "Message",
                  "name": "minus",
                  "is_slidable": false
                },
                "properties": {
                  "btype_id": "number",
                  "event_id": "bTacv0",
                  "optional": false,
                  "param_id": "bTtxt0",
                  "param_name": "current_cell_index"
                },
                "type": "CurrentWorkflowItem",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "args": 1,
                    "type": "Message",
                    "name": "minus",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "number",
                    "event_id": "bTacv0",
                    "optional": false,
                    "param_id": "bTtxt0",
                    "param_name": "current_cell_index"
                  },
                  "type": "CurrentWorkflowItem",
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
            "element_id": "bTtan0"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "4": {
        "arg_value": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_false": {
                        "entries": {
                          "0": "",
                          "1": {
                            "next": {
                              "next": {
                                "args": {
                                  "next": {
                                    "args": 10,
                                    "type": "Message",
                                    "name": "minus",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "btype_id": "number",
                                    "event_id": "bTacv0",
                                    "optional": false,
                                    "param_id": "bTtxt0",
                                    "param_name": "current_cell_index"
                                  },
                                  "type": "CurrentWorkflowItem",
                                  "is_slidable": false
                                },
                                "next": {
                                  "args": {
                                    "next": {
                                      "args": 1,
                                      "type": "Message",
                                      "name": "minus",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "btype_id": "number",
                                      "event_id": "bTacv0",
                                      "optional": false,
                                      "param_id": "bTtxt0",
                                      "param_name": "current_cell_index"
                                    },
                                    "type": "CurrentWorkflowItem",
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
                                                                                                              "next": {
                                                                                                                "next": {
                                                                                                                  "args": "cdn.bubble.io",
                                                                                                                  "next": {
                                                                                                                    "next": {
                                                                                                                      "properties": {
                                                                                                                        "find": {
                                                                                                                          "entries": {
                                                                                                                            "0": "https:https:"
                                                                                                                          },
                                                                                                                          "type": "TextExpression"
                                                                                                                        },
                                                                                                                        "replace": {
                                                                                                                          "entries": {
                                                                                                                            "0": "https:"
                                                                                                                          },
                                                                                                                          "type": "TextExpression"
                                                                                                                        }
                                                                                                                      },
                                                                                                                      "type": "Message",
                                                                                                                      "name": "find_replace",
                                                                                                                      "is_slidable": true
                                                                                                                    },
                                                                                                                    "properties": {
                                                                                                                      "formatting_for_true": {
                                                                                                                        "entries": {
                                                                                                                          "0": "https:",
                                                                                                                          "1": {
                                                                                                                            "next": {
                                                                                                                              "type": "Message",
                                                                                                                              "name": "_api_c2_user_image",
                                                                                                                              "is_slidable": false
                                                                                                                            },
                                                                                                                            "type": "InjectedValue",
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
                                                                                                                                "next": {
                                                                                                                                  "next": {
                                                                                                                                    "args": "svg",
                                                                                                                                    "next": {
                                                                                                                                      "properties": {
                                                                                                                                        "formatting_for_true": {
                                                                                                                                          "entries": {
                                                                                                                                            "0": "",
                                                                                                                                            "1": {
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
                                                                                                                                                          "name": "first_element",
                                                                                                                                                          "is_slidable": false
                                                                                                                                                        },
                                                                                                                                                        "properties": {
                                                                                                                                                          "regex": {
                                                                                                                                                            "entries": {
                                                                                                                                                              "0": "",
                                                                                                                                                              "1": {
                                                                                                                                                                "properties": {
                                                                                                                                                                  "arbitrary_text": {
                                                                                                                                                                    "entries": {
                                                                                                                                                                      "0": "https:\\/\\/",
                                                                                                                                                                      "1": {
                                                                                                                                                                        "next": {
                                                                                                                                                                          "next": {
                                                                                                                                                                            "properties": {
                                                                                                                                                                              "formatting_for_true": {
                                                                                                                                                                                "entries": {
                                                                                                                                                                                  "0": "playgram-version-test"
                                                                                                                                                                                },
                                                                                                                                                                                "type": "TextExpression"
                                                                                                                                                                              },
                                                                                                                                                                              "formatting_for_false": {
                                                                                                                                                                                "entries": {
                                                                                                                                                                                  "0": "frala"
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
                                                                                                                                                                        "is_slidable": false
                                                                                                                                                                      },
                                                                                                                                                                      "2": "\\.b-cdn\\.net\\/",
                                                                                                                                                                      "3": {
                                                                                                                                                                        "next": {
                                                                                                                                                                          "next": {
                                                                                                                                                                            "next": {
                                                                                                                                                                              "args": 4,
                                                                                                                                                                              "type": "Message",
                                                                                                                                                                              "name": "specific_item",
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
                                                                                                                                                                          "name": "_api_c2_user_image",
                                                                                                                                                                          "is_slidable": false
                                                                                                                                                                        },
                                                                                                                                                                        "type": "InjectedValue",
                                                                                                                                                                        "is_slidable": false
                                                                                                                                                                      },
                                                                                                                                                                      "4": "\\/",
                                                                                                                                                                      "5": {
                                                                                                                                                                        "next": {
                                                                                                                                                                          "next": {
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
                                                                                                                                                                              "name": "last_element",
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
                                                                                                                                                                          "name": "_api_c2_user_image",
                                                                                                                                                                          "is_slidable": false
                                                                                                                                                                        },
                                                                                                                                                                        "type": "InjectedValue",
                                                                                                                                                                        "is_slidable": false
                                                                                                                                                                      },
                                                                                                                                                                      "6": "[^;]*"
                                                                                                                                                                    },
                                                                                                                                                                    "type": "TextExpression"
                                                                                                                                                                  }
                                                                                                                                                                },
                                                                                                                                                                "type": "ArbitraryText"
                                                                                                                                                              },
                                                                                                                                                              "2": ""
                                                                                                                                                            },
                                                                                                                                                            "type": "TextExpression"
                                                                                                                                                          }
                                                                                                                                                        },
                                                                                                                                                        "type": "Message",
                                                                                                                                                        "name": "extract_regex",
                                                                                                                                                        "is_slidable": true
                                                                                                                                                      },
                                                                                                                                                      "properties": {
                                                                                                                                                        "content": {
                                                                                                                                                          "entries": {
                                                                                                                                                            "0": {
                                                                                                                                                              "type": "InjectedValue",
                                                                                                                                                              "is_slidable": false
                                                                                                                                                            }
                                                                                                                                                          },
                                                                                                                                                          "type": "TextExpression"
                                                                                                                                                        },
                                                                                                                                                        "delimiter": {
                                                                                                                                                          "entries": {
                                                                                                                                                            "0": ";"
                                                                                                                                                          },
                                                                                                                                                          "type": "TextExpression"
                                                                                                                                                        }
                                                                                                                                                      },
                                                                                                                                                      "type": "Message",
                                                                                                                                                      "name": "format_as_text",
                                                                                                                                                      "is_slidable": true
                                                                                                                                                    },
                                                                                                                                                    "type": "Message",
                                                                                                                                                    "name": "png_image_text",
                                                                                                                                                    "is_slidable": false
                                                                                                                                                  },
                                                                                                                                                  "type": "Message",
                                                                                                                                                  "name": "files_list_custom_file",
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
                                                                                                                                    "name": "not_equals",
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
                                                                                                                              "name": "_api_c2_user_image",
                                                                                                                              "is_slidable": false
                                                                                                                            },
                                                                                                                            "type": "InjectedValue",
                                                                                                                            "is_slidable": false
                                                                                                                          },
                                                                                                                          "6": ""
                                                                                                                        },
                                                                                                                        "type": "TextExpression",
                                                                                                                        "said": "a2Vsdm8tMzE4ODQ="
                                                                                                                      }
                                                                                                                    },
                                                                                                                    "type": "Message",
                                                                                                                    "name": "format_boolean",
                                                                                                                    "is_slidable": true
                                                                                                                  },
                                                                                                                  "type": "Message",
                                                                                                                  "name": "contains",
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
                                                                  "next": {
                                                                    "args": {
                                                                      "next": {
                                                                        "type": "Message",
                                                                        "name": "mime_type",
                                                                        "is_slidable": false
                                                                      },
                                                                      "properties": {
                                                                        "option_set": "option.file_types__os_",
                                                                        "option_value": "webp"
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
                                                                                                                                                "next": {
                                                                                                                                                  "next": {
                                                                                                                                                    "args": "cdn.bubble.io",
                                                                                                                                                    "next": {
                                                                                                                                                      "next": {
                                                                                                                                                        "properties": {
                                                                                                                                                          "find": {
                                                                                                                                                            "entries": {
                                                                                                                                                              "0": "https:https:"
                                                                                                                                                            },
                                                                                                                                                            "type": "TextExpression"
                                                                                                                                                          },
                                                                                                                                                          "replace": {
                                                                                                                                                            "entries": {
                                                                                                                                                              "0": "https:"
                                                                                                                                                            },
                                                                                                                                                            "type": "TextExpression"
                                                                                                                                                          }
                                                                                                                                                        },
                                                                                                                                                        "type": "Message",
                                                                                                                                                        "name": "find_replace",
                                                                                                                                                        "is_slidable": true
                                                                                                                                                      },
                                                                                                                                                      "properties": {
                                                                                                                                                        "formatting_for_true": {
                                                                                                                                                          "entries": {
                                                                                                                                                            "0": "https:",
                                                                                                                                                            "1": {
                                                                                                                                                              "next": {
                                                                                                                                                                "type": "Message",
                                                                                                                                                                "name": "_api_c2_user_image",
                                                                                                                                                                "is_slidable": false
                                                                                                                                                              },
                                                                                                                                                              "type": "InjectedValue",
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
                                                                                                                                                                  "next": {
                                                                                                                                                                    "next": {
                                                                                                                                                                      "args": "svg",
                                                                                                                                                                      "next": {
                                                                                                                                                                        "properties": {
                                                                                                                                                                          "formatting_for_true": {
                                                                                                                                                                            "entries": {
                                                                                                                                                                              "0": "",
                                                                                                                                                                              "1": {
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
                                                                                                                                                                                            "name": "first_element",
                                                                                                                                                                                            "is_slidable": false
                                                                                                                                                                                          },
                                                                                                                                                                                          "properties": {
                                                                                                                                                                                            "regex": {
                                                                                                                                                                                              "entries": {
                                                                                                                                                                                                "0": "",
                                                                                                                                                                                                "1": {
                                                                                                                                                                                                  "properties": {
                                                                                                                                                                                                    "arbitrary_text": {
                                                                                                                                                                                                      "entries": {
                                                                                                                                                                                                        "0": "https:\\/\\/",
                                                                                                                                                                                                        "1": {
                                                                                                                                                                                                          "next": {
                                                                                                                                                                                                            "next": {
                                                                                                                                                                                                              "properties": {
                                                                                                                                                                                                                "formatting_for_true": {
                                                                                                                                                                                                                  "entries": {
                                                                                                                                                                                                                    "0": "playgram-version-test"
                                                                                                                                                                                                                  },
                                                                                                                                                                                                                  "type": "TextExpression"
                                                                                                                                                                                                                },
                                                                                                                                                                                                                "formatting_for_false": {
                                                                                                                                                                                                                  "entries": {
                                                                                                                                                                                                                    "0": "frala"
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
                                                                                                                                                                                                          "is_slidable": false
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "2": "\\.b-cdn\\.net\\/",
                                                                                                                                                                                                        "3": {
                                                                                                                                                                                                          "next": {
                                                                                                                                                                                                            "next": {
                                                                                                                                                                                                              "next": {
                                                                                                                                                                                                                "args": 4,
                                                                                                                                                                                                                "type": "Message",
                                                                                                                                                                                                                "name": "specific_item",
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
                                                                                                                                                                                                            "name": "_api_c2_user_image",
                                                                                                                                                                                                            "is_slidable": false
                                                                                                                                                                                                          },
                                                                                                                                                                                                          "type": "InjectedValue",
                                                                                                                                                                                                          "is_slidable": false
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "4": "\\/",
                                                                                                                                                                                                        "5": {
                                                                                                                                                                                                          "next": {
                                                                                                                                                                                                            "next": {
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
                                                                                                                                                                                                                "name": "last_element",
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
                                                                                                                                                                                                            "name": "_api_c2_user_image",
                                                                                                                                                                                                            "is_slidable": false
                                                                                                                                                                                                          },
                                                                                                                                                                                                          "type": "InjectedValue",
                                                                                                                                                                                                          "is_slidable": false
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "6": "[^;]*"
                                                                                                                                                                                                      },
                                                                                                                                                                                                      "type": "TextExpression"
                                                                                                                                                                                                    }
                                                                                                                                                                                                  },
                                                                                                                                                                                                  "type": "ArbitraryText"
                                                                                                                                                                                                },
                                                                                                                                                                                                "2": ""
                                                                                                                                                                                              },
                                                                                                                                                                                              "type": "TextExpression"
                                                                                                                                                                                            }
                                                                                                                                                                                          },
                                                                                                                                                                                          "type": "Message",
                                                                                                                                                                                          "name": "extract_regex",
                                                                                                                                                                                          "is_slidable": true
                                                                                                                                                                                        },
                                                                                                                                                                                        "properties": {
                                                                                                                                                                                          "content": {
                                                                                                                                                                                            "entries": {
                                                                                                                                                                                              "0": {
                                                                                                                                                                                                "type": "InjectedValue",
                                                                                                                                                                                                "is_slidable": false
                                                                                                                                                                                              }
                                                                                                                                                                                            },
                                                                                                                                                                                            "type": "TextExpression"
                                                                                                                                                                                          },
                                                                                                                                                                                          "delimiter": {
                                                                                                                                                                                            "entries": {
                                                                                                                                                                                              "0": ";"
                                                                                                                                                                                            },
                                                                                                                                                                                            "type": "TextExpression"
                                                                                                                                                                                          }
                                                                                                                                                                                        },
                                                                                                                                                                                        "type": "Message",
                                                                                                                                                                                        "name": "format_as_text",
                                                                                                                                                                                        "is_slidable": true
                                                                                                                                                                                      },
                                                                                                                                                                                      "type": "Message",
                                                                                                                                                                                      "name": "png_image_text",
                                                                                                                                                                                      "is_slidable": false
                                                                                                                                                                                    },
                                                                                                                                                                                    "type": "Message",
                                                                                                                                                                                    "name": "files_list_custom_file",
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
                                                                                                                                                                      "name": "not_equals",
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
                                                                                                                                                                "name": "_api_c2_user_image",
                                                                                                                                                                "is_slidable": false
                                                                                                                                                              },
                                                                                                                                                              "type": "InjectedValue",
                                                                                                                                                              "is_slidable": false
                                                                                                                                                            },
                                                                                                                                                            "6": ""
                                                                                                                                                          },
                                                                                                                                                          "type": "TextExpression",
                                                                                                                                                          "said": "a2Vsdm8tMzE4ODQ="
                                                                                                                                                        }
                                                                                                                                                      },
                                                                                                                                                      "type": "Message",
                                                                                                                                                      "name": "format_boolean",
                                                                                                                                                      "is_slidable": true
                                                                                                                                                    },
                                                                                                                                                    "type": "Message",
                                                                                                                                                    "name": "contains",
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
                                                                                                                                                "next": {
                                                                                                                                                  "next": {
                                                                                                                                                    "args": "cdn.bubble.io",
                                                                                                                                                    "next": {
                                                                                                                                                      "next": {
                                                                                                                                                        "properties": {
                                                                                                                                                          "find": {
                                                                                                                                                            "entries": {
                                                                                                                                                              "0": "https:https:"
                                                                                                                                                            },
                                                                                                                                                            "type": "TextExpression"
                                                                                                                                                          },
                                                                                                                                                          "replace": {
                                                                                                                                                            "entries": {
                                                                                                                                                              "0": "https:"
                                                                                                                                                            },
                                                                                                                                                            "type": "TextExpression"
                                                                                                                                                          }
                                                                                                                                                        },
                                                                                                                                                        "type": "Message",
                                                                                                                                                        "name": "find_replace",
                                                                                                                                                        "is_slidable": true
                                                                                                                                                      },
                                                                                                                                                      "properties": {
                                                                                                                                                        "formatting_for_true": {
                                                                                                                                                          "entries": {
                                                                                                                                                            "0": "https:",
                                                                                                                                                            "1": {
                                                                                                                                                              "next": {
                                                                                                                                                                "type": "Message",
                                                                                                                                                                "name": "_api_c2_user_image",
                                                                                                                                                                "is_slidable": false
                                                                                                                                                              },
                                                                                                                                                              "type": "InjectedValue",
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
                                                                                                                                                                  "next": {
                                                                                                                                                                    "next": {
                                                                                                                                                                      "args": "svg",
                                                                                                                                                                      "next": {
                                                                                                                                                                        "properties": {
                                                                                                                                                                          "formatting_for_true": {
                                                                                                                                                                            "entries": {
                                                                                                                                                                              "0": "",
                                                                                                                                                                              "1": {
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
                                                                                                                                                                                            "name": "first_element",
                                                                                                                                                                                            "is_slidable": false
                                                                                                                                                                                          },
                                                                                                                                                                                          "properties": {
                                                                                                                                                                                            "regex": {
                                                                                                                                                                                              "entries": {
                                                                                                                                                                                                "0": "",
                                                                                                                                                                                                "1": {
                                                                                                                                                                                                  "properties": {
                                                                                                                                                                                                    "arbitrary_text": {
                                                                                                                                                                                                      "entries": {
                                                                                                                                                                                                        "0": "https:\\/\\/",
                                                                                                                                                                                                        "1": {
                                                                                                                                                                                                          "next": {
                                                                                                                                                                                                            "next": {
                                                                                                                                                                                                              "properties": {
                                                                                                                                                                                                                "formatting_for_true": {
                                                                                                                                                                                                                  "entries": {
                                                                                                                                                                                                                    "0": "playgram-version-test"
                                                                                                                                                                                                                  },
                                                                                                                                                                                                                  "type": "TextExpression"
                                                                                                                                                                                                                },
                                                                                                                                                                                                                "formatting_for_false": {
                                                                                                                                                                                                                  "entries": {
                                                                                                                                                                                                                    "0": "frala"
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
                                                                                                                                                                                                          "is_slidable": false
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "2": "\\.b-cdn\\.net\\/",
                                                                                                                                                                                                        "3": {
                                                                                                                                                                                                          "next": {
                                                                                                                                                                                                            "next": {
                                                                                                                                                                                                              "next": {
                                                                                                                                                                                                                "args": 4,
                                                                                                                                                                                                                "type": "Message",
                                                                                                                                                                                                                "name": "specific_item",
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
                                                                                                                                                                                                            "name": "_api_c2_user_image",
                                                                                                                                                                                                            "is_slidable": false
                                                                                                                                                                                                          },
                                                                                                                                                                                                          "type": "InjectedValue",
                                                                                                                                                                                                          "is_slidable": false
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "4": "\\/",
                                                                                                                                                                                                        "5": {
                                                                                                                                                                                                          "next": {
                                                                                                                                                                                                            "next": {
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
                                                                                                                                                                                                                "name": "last_element",
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
                                                                                                                                                                                                            "name": "_api_c2_user_image",
                                                                                                                                                                                                            "is_slidable": false
                                                                                                                                                                                                          },
                                                                                                                                                                                                          "type": "InjectedValue",
                                                                                                                                                                                                          "is_slidable": false
                                                                                                                                                                                                        },
                                                                                                                                                                                                        "6": "[^;]*"
                                                                                                                                                                                                      },
                                                                                                                                                                                                      "type": "TextExpression"
                                                                                                                                                                                                    }
                                                                                                                                                                                                  },
                                                                                                                                                                                                  "type": "ArbitraryText"
                                                                                                                                                                                                },
                                                                                                                                                                                                "2": ""
                                                                                                                                                                                              },
                                                                                                                                                                                              "type": "TextExpression"
                                                                                                                                                                                            }
                                                                                                                                                                                          },
                                                                                                                                                                                          "type": "Message",
                                                                                                                                                                                          "name": "extract_regex",
                                                                                                                                                                                          "is_slidable": true
                                                                                                                                                                                        },
                                                                                                                                                                                        "properties": {
                                                                                                                                                                                          "content": {
                                                                                                                                                                                            "entries": {
                                                                                                                                                                                              "0": {
                                                                                                                                                                                                "type": "InjectedValue",
                                                                                                                                                                                                "is_slidable": false
                                                                                                                                                                                              }
                                                                                                                                                                                            },
                                                                                                                                                                                            "type": "TextExpression"
                                                                                                                                                                                          },
                                                                                                                                                                                          "delimiter": {
                                                                                                                                                                                            "entries": {
                                                                                                                                                                                              "0": ";"
                                                                                                                                                                                            },
                                                                                                                                                                                            "type": "TextExpression"
                                                                                                                                                                                          }
                                                                                                                                                                                        },
                                                                                                                                                                                        "type": "Message",
                                                                                                                                                                                        "name": "format_as_text",
                                                                                                                                                                                        "is_slidable": true
                                                                                                                                                                                      },
                                                                                                                                                                                      "type": "Message",
                                                                                                                                                                                      "name": "png_image_text",
                                                                                                                                                                                      "is_slidable": false
                                                                                                                                                                                    },
                                                                                                                                                                                    "type": "Message",
                                                                                                                                                                                    "name": "files_list_custom_file",
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
                                                                                                                                                                      "name": "not_equals",
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
                                                                                                                                                                "name": "_api_c2_user_image",
                                                                                                                                                                "is_slidable": false
                                                                                                                                                              },
                                                                                                                                                              "type": "InjectedValue",
                                                                                                                                                              "is_slidable": false
                                                                                                                                                            },
                                                                                                                                                            "6": ""
                                                                                                                                                          },
                                                                                                                                                          "type": "TextExpression",
                                                                                                                                                          "said": "a2Vsdm8tMzE4ODQ="
                                                                                                                                                        }
                                                                                                                                                      },
                                                                                                                                                      "type": "Message",
                                                                                                                                                      "name": "format_boolean",
                                                                                                                                                      "is_slidable": true
                                                                                                                                                    },
                                                                                                                                                    "type": "Message",
                                                                                                                                                    "name": "contains",
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
                                                                                                                                "next": {
                                                                                                                                  "next": {
                                                                                                                                    "args": "cdn.bubble.io",
                                                                                                                                    "next": {
                                                                                                                                      "next": {
                                                                                                                                        "properties": {
                                                                                                                                          "find": {
                                                                                                                                            "entries": {
                                                                                                                                              "0": "https:https:"
                                                                                                                                            },
                                                                                                                                            "type": "TextExpression"
                                                                                                                                          },
                                                                                                                                          "replace": {
                                                                                                                                            "entries": {
                                                                                                                                              "0": "https:"
                                                                                                                                            },
                                                                                                                                            "type": "TextExpression"
                                                                                                                                          }
                                                                                                                                        },
                                                                                                                                        "type": "Message",
                                                                                                                                        "name": "find_replace",
                                                                                                                                        "is_slidable": true
                                                                                                                                      },
                                                                                                                                      "properties": {
                                                                                                                                        "formatting_for_true": {
                                                                                                                                          "entries": {
                                                                                                                                            "0": "https:",
                                                                                                                                            "1": {
                                                                                                                                              "next": {
                                                                                                                                                "type": "Message",
                                                                                                                                                "name": "_api_c2_user_image",
                                                                                                                                                "is_slidable": false
                                                                                                                                              },
                                                                                                                                              "type": "InjectedValue",
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
                                                                                                                                                  "next": {
                                                                                                                                                    "next": {
                                                                                                                                                      "args": "svg",
                                                                                                                                                      "next": {
                                                                                                                                                        "properties": {
                                                                                                                                                          "formatting_for_true": {
                                                                                                                                                            "entries": {
                                                                                                                                                              "0": "",
                                                                                                                                                              "1": {
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
                                                                                                                                                                            "name": "first_element",
                                                                                                                                                                            "is_slidable": false
                                                                                                                                                                          },
                                                                                                                                                                          "properties": {
                                                                                                                                                                            "regex": {
                                                                                                                                                                              "entries": {
                                                                                                                                                                                "0": "",
                                                                                                                                                                                "1": {
                                                                                                                                                                                  "properties": {
                                                                                                                                                                                    "arbitrary_text": {
                                                                                                                                                                                      "entries": {
                                                                                                                                                                                        "0": "https:\\/\\/",
                                                                                                                                                                                        "1": {
                                                                                                                                                                                          "next": {
                                                                                                                                                                                            "next": {
                                                                                                                                                                                              "properties": {
                                                                                                                                                                                                "formatting_for_true": {
                                                                                                                                                                                                  "entries": {
                                                                                                                                                                                                    "0": "playgram-version-test"
                                                                                                                                                                                                  },
                                                                                                                                                                                                  "type": "TextExpression"
                                                                                                                                                                                                },
                                                                                                                                                                                                "formatting_for_false": {
                                                                                                                                                                                                  "entries": {
                                                                                                                                                                                                    "0": "frala"
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
                                                                                                                                                                                          "is_slidable": false
                                                                                                                                                                                        },
                                                                                                                                                                                        "2": "\\.b-cdn\\.net\\/",
                                                                                                                                                                                        "3": {
                                                                                                                                                                                          "next": {
                                                                                                                                                                                            "next": {
                                                                                                                                                                                              "next": {
                                                                                                                                                                                                "args": 4,
                                                                                                                                                                                                "type": "Message",
                                                                                                                                                                                                "name": "specific_item",
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
                                                                                                                                                                                            "name": "_api_c2_user_image",
                                                                                                                                                                                            "is_slidable": false
                                                                                                                                                                                          },
                                                                                                                                                                                          "type": "InjectedValue",
                                                                                                                                                                                          "is_slidable": false
                                                                                                                                                                                        },
                                                                                                                                                                                        "4": "\\/",
                                                                                                                                                                                        "5": {
                                                                                                                                                                                          "next": {
                                                                                                                                                                                            "next": {
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
                                                                                                                                                                                                "name": "last_element",
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
                                                                                                                                                                                            "name": "_api_c2_user_image",
                                                                                                                                                                                            "is_slidable": false
                                                                                                                                                                                          },
                                                                                                                                                                                          "type": "InjectedValue",
                                                                                                                                                                                          "is_slidable": false
                                                                                                                                                                                        },
                                                                                                                                                                                        "6": "[^;]*"
                                                                                                                                                                                      },
                                                                                                                                                                                      "type": "TextExpression"
                                                                                                                                                                                    }
                                                                                                                                                                                  },
                                                                                                                                                                                  "type": "ArbitraryText"
                                                                                                                                                                                },
                                                                                                                                                                                "2": ""
                                                                                                                                                                              },
                                                                                                                                                                              "type": "TextExpression"
                                                                                                                                                                            }
                                                                                                                                                                          },
                                                                                                                                                                          "type": "Message",
                                                                                                                                                                          "name": "extract_regex",
                                                                                                                                                                          "is_slidable": true
                                                                                                                                                                        },
                                                                                                                                                                        "properties": {
                                                                                                                                                                          "content": {
                                                                                                                                                                            "entries": {
                                                                                                                                                                              "0": {
                                                                                                                                                                                "type": "InjectedValue",
                                                                                                                                                                                "is_slidable": false
                                                                                                                                                                              }
                                                                                                                                                                            },
                                                                                                                                                                            "type": "TextExpression"
                                                                                                                                                                          },
                                                                                                                                                                          "delimiter": {
                                                                                                                                                                            "entries": {
                                                                                                                                                                              "0": ";"
                                                                                                                                                                            },
                                                                                                                                                                            "type": "TextExpression"
                                                                                                                                                                          }
                                                                                                                                                                        },
                                                                                                                                                                        "type": "Message",
                                                                                                                                                                        "name": "format_as_text",
                                                                                                                                                                        "is_slidable": true
                                                                                                                                                                      },
                                                                                                                                                                      "type": "Message",
                                                                                                                                                                      "name": "png_image_text",
                                                                                                                                                                      "is_slidable": false
                                                                                                                                                                    },
                                                                                                                                                                    "type": "Message",
                                                                                                                                                                    "name": "files_list_custom_file",
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
                                                                                                                                                      "name": "not_equals",
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
                                                                                                                                                "name": "_api_c2_user_image",
                                                                                                                                                "is_slidable": false
                                                                                                                                              },
                                                                                                                                              "type": "InjectedValue",
                                                                                                                                              "is_slidable": false
                                                                                                                                            },
                                                                                                                                            "6": ""
                                                                                                                                          },
                                                                                                                                          "type": "TextExpression",
                                                                                                                                          "said": "a2Vsdm8tMzE4ODQ="
                                                                                                                                        }
                                                                                                                                      },
                                                                                                                                      "type": "Message",
                                                                                                                                      "name": "format_boolean",
                                                                                                                                      "is_slidable": true
                                                                                                                                    },
                                                                                                                                    "type": "Message",
                                                                                                                                    "name": "contains",
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
                                                                    "name": "contains",
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
                                                              "name": "_api_c2_image",
                                                              "is_slidable": false
                                                            },
                                                            "type": "InjectedValue",
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
                              "element_id": "bTtan0"
                            },
                            "type": "GetElement",
                            "is_slidable": false
                          },
                          "2": ""
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_true": {
                        "entries": {
                          "0": "",
                          "1": {
                            "next": {
                              "next": {
                                "args": {
                                  "next": {
                                    "args": 10,
                                    "type": "Message",
                                    "name": "minus",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "btype_id": "number",
                                    "event_id": "bTacv0",
                                    "optional": false,
                                    "param_id": "bTtxt0",
                                    "param_name": "current_cell_index"
                                  },
                                  "type": "CurrentWorkflowItem",
                                  "is_slidable": false
                                },
                                "next": {
                                  "args": {
                                    "next": {
                                      "args": 1,
                                      "type": "Message",
                                      "name": "minus",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "btype_id": "number",
                                      "event_id": "bTacv0",
                                      "optional": false,
                                      "param_id": "bTtxt0",
                                      "param_name": "current_cell_index"
                                    },
                                    "type": "CurrentWorkflowItem",
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
                                                                                                "next": {
                                                                                                  "next": {
                                                                                                    "args": "cdn.bubble.io",
                                                                                                    "next": {
                                                                                                      "next": {
                                                                                                        "properties": {
                                                                                                          "find": {
                                                                                                            "entries": {
                                                                                                              "0": "https:https:"
                                                                                                            },
                                                                                                            "type": "TextExpression"
                                                                                                          },
                                                                                                          "replace": {
                                                                                                            "entries": {
                                                                                                              "0": "https:"
                                                                                                            },
                                                                                                            "type": "TextExpression"
                                                                                                          }
                                                                                                        },
                                                                                                        "type": "Message",
                                                                                                        "name": "find_replace",
                                                                                                        "is_slidable": true
                                                                                                      },
                                                                                                      "properties": {
                                                                                                        "formatting_for_true": {
                                                                                                          "entries": {
                                                                                                            "0": "https:",
                                                                                                            "1": {
                                                                                                              "next": {
                                                                                                                "type": "Message",
                                                                                                                "name": "_api_c2_user_image",
                                                                                                                "is_slidable": false
                                                                                                              },
                                                                                                              "type": "InjectedValue",
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
                                                                                                                  "next": {
                                                                                                                    "next": {
                                                                                                                      "args": "svg",
                                                                                                                      "next": {
                                                                                                                        "properties": {
                                                                                                                          "formatting_for_true": {
                                                                                                                            "entries": {
                                                                                                                              "0": "",
                                                                                                                              "1": {
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
                                                                                                                                            "name": "first_element",
                                                                                                                                            "is_slidable": false
                                                                                                                                          },
                                                                                                                                          "properties": {
                                                                                                                                            "regex": {
                                                                                                                                              "entries": {
                                                                                                                                                "0": "",
                                                                                                                                                "1": {
                                                                                                                                                  "properties": {
                                                                                                                                                    "arbitrary_text": {
                                                                                                                                                      "entries": {
                                                                                                                                                        "0": "https:\\/\\/",
                                                                                                                                                        "1": {
                                                                                                                                                          "next": {
                                                                                                                                                            "next": {
                                                                                                                                                              "properties": {
                                                                                                                                                                "formatting_for_true": {
                                                                                                                                                                  "entries": {
                                                                                                                                                                    "0": "playgram-version-test"
                                                                                                                                                                  },
                                                                                                                                                                  "type": "TextExpression"
                                                                                                                                                                },
                                                                                                                                                                "formatting_for_false": {
                                                                                                                                                                  "entries": {
                                                                                                                                                                    "0": "frala"
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
                                                                                                                                                          "is_slidable": false
                                                                                                                                                        },
                                                                                                                                                        "2": "\\.b-cdn\\.net\\/",
                                                                                                                                                        "3": {
                                                                                                                                                          "next": {
                                                                                                                                                            "next": {
                                                                                                                                                              "next": {
                                                                                                                                                                "args": 4,
                                                                                                                                                                "type": "Message",
                                                                                                                                                                "name": "specific_item",
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
                                                                                                                                                            "name": "_api_c2_user_image",
                                                                                                                                                            "is_slidable": false
                                                                                                                                                          },
                                                                                                                                                          "type": "InjectedValue",
                                                                                                                                                          "is_slidable": false
                                                                                                                                                        },
                                                                                                                                                        "4": "\\/",
                                                                                                                                                        "5": {
                                                                                                                                                          "next": {
                                                                                                                                                            "next": {
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
                                                                                                                                                                "name": "last_element",
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
                                                                                                                                                            "name": "_api_c2_user_image",
                                                                                                                                                            "is_slidable": false
                                                                                                                                                          },
                                                                                                                                                          "type": "InjectedValue",
                                                                                                                                                          "is_slidable": false
                                                                                                                                                        },
                                                                                                                                                        "6": "[^;]*"
                                                                                                                                                      },
                                                                                                                                                      "type": "TextExpression"
                                                                                                                                                    }
                                                                                                                                                  },
                                                                                                                                                  "type": "ArbitraryText"
                                                                                                                                                },
                                                                                                                                                "2": ""
                                                                                                                                              },
                                                                                                                                              "type": "TextExpression"
                                                                                                                                            }
                                                                                                                                          },
                                                                                                                                          "type": "Message",
                                                                                                                                          "name": "extract_regex",
                                                                                                                                          "is_slidable": true
                                                                                                                                        },
                                                                                                                                        "properties": {
                                                                                                                                          "content": {
                                                                                                                                            "entries": {
                                                                                                                                              "0": {
                                                                                                                                                "type": "InjectedValue",
                                                                                                                                                "is_slidable": false
                                                                                                                                              }
                                                                                                                                            },
                                                                                                                                            "type": "TextExpression"
                                                                                                                                          },
                                                                                                                                          "delimiter": {
                                                                                                                                            "entries": {
                                                                                                                                              "0": ";"
                                                                                                                                            },
                                                                                                                                            "type": "TextExpression"
                                                                                                                                          }
                                                                                                                                        },
                                                                                                                                        "type": "Message",
                                                                                                                                        "name": "format_as_text",
                                                                                                                                        "is_slidable": true
                                                                                                                                      },
                                                                                                                                      "type": "Message",
                                                                                                                                      "name": "png_image_text",
                                                                                                                                      "is_slidable": false
                                                                                                                                    },
                                                                                                                                    "type": "Message",
                                                                                                                                    "name": "files_list_custom_file",
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
                                                                                                                      "name": "not_equals",
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
                                                                                                                "name": "_api_c2_user_image",
                                                                                                                "is_slidable": false
                                                                                                              },
                                                                                                              "type": "InjectedValue",
                                                                                                              "is_slidable": false
                                                                                                            },
                                                                                                            "6": ""
                                                                                                          },
                                                                                                          "type": "TextExpression",
                                                                                                          "said": "a2Vsdm8tMzE4ODQ="
                                                                                                        }
                                                                                                      },
                                                                                                      "type": "Message",
                                                                                                      "name": "format_boolean",
                                                                                                      "is_slidable": true
                                                                                                    },
                                                                                                    "type": "Message",
                                                                                                    "name": "contains",
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
                              "element_id": "bTtan0"
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
                  "type": "Message",
                  "name": "and_",
                  "is_slidable": false
                },
                "args": {
                  "properties": {
                    "option_set": "option.llm_providers__os_",
                    "option_value": "gemini"
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
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "param_id": "bTtyD0"
      },
      "5": {
        "param_id": "bTtyE0",
        "arg_value": {
          "properties": {
            "btype_id": "custom.file",
            "event_id": "bTacv0",
            "optional": true,
            "param_id": "bTaeu0",
            "param_name": "chat_file"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "6": {
        "param_id": "bTtyJ",
        "arg_value": {
          "properties": {
            "btype_id": "date",
            "event_id": "bTacv0",
            "optional": false,
            "param_id": "bTtyF0",
            "param_name": "user_message_date"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "7": {
        "param_id": "bTwED0",
        "arg_value": {
          "type": "Empty"
        }
      }
    },
    "delay": 0,
    "custom_event": "bTtgP0"
  },
  "type": "ScheduleCustom",
  "id": "bTtxm0"
};
