import { _4 } from './_4/index.js';

export const arguments = {
  "4": _4,
  "0": {
    "param_id": "bTsqL1",
    "arg_value": {
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
      "said": "a2Vsdm8tMzE4ODQ=",
      "is_slidable": false
    }
  },
  "1": {
    "param_id": "bTtwk",
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
  "2": {
    "param_id": "bTtwT",
    "arg_value": {
      "type": "Empty"
    }
  },
  "3": {
    "param_id": "bTtxz0",
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
              "element_id": "bTtan0"
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
                "element_id": "bTtan0"
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
        "element_id": "bTtan0"
      },
      "type": "GetElement",
      "said": "a2Vsdm8tMzE4ODQ=",
      "is_slidable": false
    }
  },
  "5": {
    "param_id": "bTtyE0",
    "arg_value": {
      "type": "Empty"
    }
  },
  "6": {
    "param_id": "bTtyJ",
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
  "7": {
    "param_id": "bTwED0",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "get_group_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTvZj"
      },
      "type": "GetElement",
      "is_slidable": false
    }
  },
};
