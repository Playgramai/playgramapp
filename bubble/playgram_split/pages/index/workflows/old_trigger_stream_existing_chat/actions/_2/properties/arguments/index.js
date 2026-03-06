import { _3 } from './_3/index.js';

export const arguments = {
  "3": _3,
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
  },
};
