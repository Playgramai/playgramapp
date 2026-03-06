// Original path: pages/index/workflows/old_trigger_stream_existing_chat/actions/schedulecustom/properties/arguments/entry_3/arg_value/get_group_data/provider/not_equals/and/format_boolean/properties/formatting_for_true/entries/getelement/get_list_data/list_from/limit_to/sorted/format_as_text/properties/content/entries
export const replace = {
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
  "type": "TextExpression",
};
