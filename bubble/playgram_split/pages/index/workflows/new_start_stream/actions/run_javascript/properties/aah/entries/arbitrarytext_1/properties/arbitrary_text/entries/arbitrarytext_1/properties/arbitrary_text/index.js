export const arbitrary_text = {
  "entries": {
    "0": "",
    "1": {
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
          "next": {
            "properties": {
              "formatting_for_true": {
                "entries": {
                  "0": {
                    "next": {
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": " {\n      type: \"code_interpreter\",\n    container: ",
                              "1": {
                                "properties": {
                                  "arbitrary_text": {
                                    "entries": {
                                      "0": "",
                                      "1": {
                                        "next": {
                                          "args": {
                                            "next": {
                                              "type": "Message",
                                              "name": "openai_last_container_date_date",
                                              "is_slidable": false
                                            },
                                            "properties": {
                                              "btype_id": "custom.chat",
                                              "event_id": "bTnWy0",
                                              "optional": false,
                                              "param_id": "bTPGd",
                                              "param_name": "chat"
                                            },
                                            "type": "CurrentWorkflowItem",
                                            "is_slidable": false
                                          },
                                          "next": {
                                            "next": {
                                              "args": 20,
                                              "next": {
                                                "args": {
                                                  "next": {
                                                    "next": {
                                                      "type": "Message",
                                                      "name": "is_not_empty",
                                                      "is_slidable": false
                                                    },
                                                    "type": "Message",
                                                    "name": "openai_last_container_id_text",
                                                    "is_slidable": false
                                                  },
                                                  "properties": {
                                                    "btype_id": "custom.chat",
                                                    "event_id": "bTnWy0",
                                                    "optional": false,
                                                    "param_id": "bTPGd",
                                                    "param_name": "chat"
                                                  },
                                                  "type": "CurrentWorkflowItem",
                                                  "is_slidable": false
                                                },
                                                "next": {
                                                  "properties": {
                                                    "formatting_for_true": {
                                                      "entries": {
                                                        "0": "\"",
                                                        "1": {
                                                          "next": {
                                                            "type": "Message",
                                                            "name": "openai_last_container_id_text",
                                                            "is_slidable": false
                                                          },
                                                          "properties": {
                                                            "btype_id": "custom.chat",
                                                            "event_id": "bTnWy0",
                                                            "optional": false,
                                                            "param_id": "bTPGd",
                                                            "param_name": "chat"
                                                          },
                                                          "type": "CurrentWorkflowItem",
                                                          "is_slidable": false
                                                        },
                                                        "2": "\""
                                                      },
                                                      "type": "TextExpression"
                                                    },
                                                    "formatting_for_false": {
                                                      "entries": {
                                                        "0": "{ type: \"auto\" }"
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
                                              "name": "less_than",
                                              "is_slidable": false
                                            },
                                            "type": "Message",
                                            "name": "to_minutes",
                                            "is_slidable": false
                                          },
                                          "type": "Message",
                                          "name": "minus",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "name": "Current Date/Time"
                                        },
                                        "type": "PageData",
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
                              "2": "\n}<#NANI?>"
                            },
                            "type": "TextExpression",
                            "said": "a2Vsdm8tMzE4ODQ="
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
                      "name": "is_true",
                      "is_slidable": false
                    },
                    "properties": {
                      "btype_id": "boolean",
                      "event_id": "bTnWy0",
                      "optional": false,
                      "param_id": "bTkhX",
                      "param_name": "code_interpreter_needed"
                    },
                    "type": "CurrentWorkflowItem",
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
          "name": "equals",
          "is_slidable": false
        },
        "type": "Message",
        "name": "provider",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "option.llm_models__os_",
        "event_id": "bTnWy0",
        "optional": false,
        "param_id": "bTPyv",
        "param_name": "streaming_model"
      },
      "type": "CurrentWorkflowItem",
      "said": "a2Vsdm8tMzE4ODQ=",
      "is_slidable": false
    },
    "2": "",
    "3": {
      "properties": {
        "arbitrary_text": {
          "entries": {
            "0": "",
            "1": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.llm_tool__os_",
                    "option_value": "image_generation"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "args": {
                          "next": {
                            "next": {
                              "args": {
                                "properties": {
                                  "option_set": "option.llm_tool__os_",
                                  "option_value": "image_generation"
                                },
                                "type": "OneOptionValue",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "contains",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "tools",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "option.llm_models__os_",
                            "event_id": "bTnWy0",
                            "optional": false,
                            "param_id": "bTPyv",
                            "param_name": "streaming_model"
                          },
                          "type": "CurrentWorkflowItem",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "and_",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "is_true",
                      "is_slidable": false
                    },
                    "properties": {
                      "btype_id": "boolean",
                      "event_id": "bTnWy0",
                      "optional": false,
                      "param_id": "bTpbc1",
                      "param_name": "image_gen_needed"
                    },
                    "type": "CurrentWorkflowItem",
                    "is_slidable": false
                  },
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "{type: \"image_generation\", model: \"",
                          "1": {
                            "next": {
                              "type": "Message",
                              "name": "image_gen_model",
                              "is_slidable": false
                            },
                            "properties": {
                              "btype_id": "option.llm_models__os_",
                              "event_id": "bTnWy0",
                              "optional": false,
                              "param_id": "bTPyv",
                              "param_name": "streaming_model"
                            },
                            "type": "CurrentWorkflowItem",
                            "is_slidable": false
                          },
                          "2": "\", partial_images: 3, quality: \"low\", output_format: \"webp\", output_compression: 80}<#NANI?>"
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
                  "name": "or_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "contains",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "list.option.llm_tool__os_",
                "event_id": "bTnWy0",
                "optional": true,
                "param_id": "bTPGl0",
                "param_name": "enabled_tools"
              },
              "type": "CurrentWorkflowItem",
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
    "4": "",
    "5": {
      "properties": {
        "arbitrary_text": {
          "entries": {
            "0": "",
            "1": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.llm_tool__os_",
                    "option_value": "web_search"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "is_true",
                      "is_slidable": false
                    },
                    "properties": {
                      "btype_id": "boolean",
                      "event_id": "bTnWy0",
                      "optional": false,
                      "param_id": "bTkhT",
                      "param_name": "web_search_needed"
                    },
                    "type": "CurrentWorkflowItem",
                    "is_slidable": false
                  },
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "",
                          "1": {
                            "next": {
                              "args": {
                                "properties": {
                                  "option_set": "option.llm_models__os_",
                                  "option_value": "grok_3_latest"
                                },
                                "type": "OneOptionValue",
                                "is_slidable": false
                              },
                              "next": {
                                "properties": {
                                  "formatting_for_true": {
                                    "entries": {
                                      "0": "{type: \"web_search\"}<#NANI?>"
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
                              "name": "not_equals",
                              "is_slidable": false
                            },
                            "properties": {
                              "btype_id": "option.llm_models__os_",
                              "event_id": "bTnWy0",
                              "optional": false,
                              "param_id": "bTPyv",
                              "param_name": "streaming_model"
                            },
                            "type": "CurrentWorkflowItem",
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
                  "name": "or_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "contains",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "list.option.llm_tool__os_",
                "event_id": "bTnWy0",
                "optional": true,
                "param_id": "bTPGl0",
                "param_name": "enabled_tools"
              },
              "type": "CurrentWorkflowItem",
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
    "6": "",
    "7": {
      "properties": {
        "arbitrary_text": {
          "entries": {
            "0": "",
            "1": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "next": {
                          "next": {
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": ",",
                                    "1": {
                                      "next": {
                                        "next": {
                                          "next": {
                                            "next": {
                                              "properties": {
                                                "content": {
                                                  "entries": {
                                                    "0": "{type: \"file_search\", vector_store_ids: [\"",
                                                    "1": {
                                                      "type": "InjectedValue",
                                                      "is_slidable": false
                                                    },
                                                    "2": "\"]}"
                                                  },
                                                  "type": "TextExpression"
                                                },
                                                "delimiter": {
                                                  "entries": {
                                                    "0": ","
                                                  },
                                                  "type": "TextExpression"
                                                }
                                              },
                                              "type": "Message",
                                              "name": "format_as_text",
                                              "is_slidable": true
                                            },
                                            "type": "Message",
                                            "name": "openai_vector_store_id_text",
                                            "is_slidable": false
                                          },
                                          "properties": {
                                            "constraints": {
                                              "0": {
                                                "key": "_id",
                                                "value": {
                                                  "next": {
                                                    "properties": {
                                                      "regex": {
                                                        "entries": {
                                                          "0": "(?<=file_id:)\\d+x\\d+"
                                                        },
                                                        "type": "TextExpression"
                                                      }
                                                    },
                                                    "type": "Message",
                                                    "name": "extract_regex",
                                                    "is_slidable": true
                                                  },
                                                  "properties": {
                                                    "btype_id": "text",
                                                    "event_id": "bTTVJ",
                                                    "optional": true,
                                                    "param_id": "bTHfj",
                                                    "param_name": "last_messages"
                                                  },
                                                  "type": "CurrentWorkflowItem",
                                                  "is_slidable": false
                                                },
                                                "constraint_type": "in"
                                              }
                                            }
                                          },
                                          "type": "Message",
                                          "name": "filtered",
                                          "is_slidable": true
                                        },
                                        "type": "Message",
                                        "name": "files_list_custom_file",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "btype_id": "custom.chat",
                                        "event_id": "bTnWy0",
                                        "optional": false,
                                        "param_id": "bTPGd",
                                        "param_name": "chat"
                                      },
                                      "type": "CurrentWorkflowItem",
                                      "is_slidable": false
                                    },
                                    "2": ""
                                  },
                                  "type": "TextExpression"
                                },
                                "formatting_for_false": {
                                  "entries": {
                                    "0": " "
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
                          "name": "first_element",
                          "is_slidable": false
                        },
                        "properties": {
                          "regex": {
                            "entries": {
                              "0": "(?<=file_id:)\\d+x\\d+"
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "extract_regex",
                        "is_slidable": true
                      },
                      "properties": {
                        "btype_id": "text",
                        "event_id": "bTTVJ",
                        "optional": true,
                        "param_id": "bTHfj",
                        "param_name": "last_messages"
                      },
                      "type": "CurrentWorkflowItem",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "2": "",
                    "3": {
                      "next": {
                        "next": {
                          "args": {
                            "next": {
                              "type": "Message",
                              "name": "is_empty",
                              "is_slidable": false
                            },
                            "properties": {
                              "btype_id": "image",
                              "event_id": "bTnWy0",
                              "optional": true,
                              "param_id": "bTcNt",
                              "param_name": "user_image"
                            },
                            "type": "CurrentWorkflowItem",
                            "is_slidable": false
                          },
                          "next": {
                            "properties": {
                              "formatting_for_true": {
                                "entries": {
                                  "0": "{type: \"file_search\", vector_store_ids: [\"",
                                  "1": {
                                    "next": {
                                      "type": "Message",
                                      "name": "openai_vector_store_id_text",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "btype_id": "custom.file",
                                      "event_id": "bTnWy0",
                                      "optional": true,
                                      "param_id": "bTQSV0",
                                      "param_name": "file"
                                    },
                                    "type": "CurrentWorkflowItem",
                                    "is_slidable": false
                                  },
                                  "2": "\"]}"
                                },
                                "type": "TextExpression",
                                "said": "a2Vsdm8tMzE4ODQ="
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
                          "name": "and_",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "is_not_empty",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "custom.file",
                        "event_id": "bTnWy0",
                        "optional": true,
                        "param_id": "bTQSV0",
                        "param_name": "file"
                      },
                      "type": "CurrentWorkflowItem",
                      "is_slidable": false
                    },
                    "4": ""
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText",
              "said": "a2Vsdm8tMzE4ODQ="
            },
            "2": ""
          },
          "type": "TextExpression"
        }
      },
      "type": "ArbitraryText",
      "said": "a2Vsdm8tMzE4ODQ="
    },
    "8": ""
  },
  "type": "TextExpression",
};
