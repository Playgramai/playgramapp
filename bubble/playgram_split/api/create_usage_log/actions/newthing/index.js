export const newthing = {
  "properties": {
    "initial_values": {
      "0": {
        "key": "embedding_for_search_tokens_number",
        "value": {
          "properties": {
            "btype_id": "number",
            "event_id": "bTPLV0",
            "optional": true,
            "param_id": "embedding_for_first_search",
            "param_name": "embedding_for_first_search"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "1": {
        "key": "embedding_for_search_usd_number",
        "value": {
          "next": {
            "args": 2e-08,
            "type": "Message",
            "name": "times",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "number",
            "event_id": "bTPLV0",
            "optional": true,
            "param_id": "embedding_for_first_search",
            "param_name": "embedding_for_first_search"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "2": {
        "key": "normalization_input_tokens_number",
        "value": {
          "properties": {
            "btype_id": "number",
            "event_id": "bTPLV0",
            "param_id": "first_normalization_input",
            "param_name": "first_normalization_input"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "3": {
        "key": "normalization_input_usd_number",
        "value": {
          "next": {
            "args": 3e-07,
            "type": "Message",
            "name": "times",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "number",
            "event_id": "bTPLV0",
            "optional": true,
            "param_id": "first_normalization_input",
            "param_name": "first_normalization_input"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "4": {
        "key": "normalization_output_tokens_number",
        "value": {
          "properties": {
            "btype_id": "number",
            "event_id": "bTPLV0",
            "optional": false,
            "param_id": "first_normalization_output",
            "param_name": "first_normalization_output"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "5": {
        "key": "normalization_output_usd_number",
        "value": {
          "next": {
            "args": 3e-07,
            "type": "Message",
            "name": "times",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "number",
            "event_id": "bTPLV0",
            "optional": true,
            "param_id": "first_normalization_output",
            "param_name": "first_normalization_output"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "6": {
        "key": "streaming_input_tokens_number",
        "value": {
          "properties": {
            "btype_id": "number",
            "event_id": "bTPLV0",
            "param_id": "streaming_input",
            "param_name": "streaming_input"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "7": {
        "key": "streaming_input_usd_number",
        "value": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "args": {
                        "properties": {
                          "btype_id": "number",
                          "event_id": "bTPLV0",
                          "optional": true,
                          "param_id": "streaming_input",
                          "param_name": "streaming_input"
                        },
                        "type": "APIEventParameter",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "greater_than",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "token_price_change_point",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "option.llm_models__os_",
                    "event_id": "bTPLV0",
                    "optional": true,
                    "param_id": "streaming_model",
                    "param_name": "streaming_model"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "convert_to_number",
                    "is_slidable": false
                  },
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "args": {
                              "next": {
                                "type": "Message",
                                "name": "input_tokens_cost_high",
                                "is_slidable": false
                              },
                              "properties": {
                                "btype_id": "option.llm_models__os_",
                                "event_id": "bTPLV0",
                                "param_id": "streaming_model",
                                "param_name": "streaming_model"
                              },
                              "type": "APIEventParameter",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "times",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "number",
                            "event_id": "bTPLV0",
                            "param_id": "streaming_input",
                            "param_name": "streaming_input"
                          },
                          "type": "APIEventParameter",
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
                            "args": {
                              "next": {
                                "type": "Message",
                                "name": "input_tokens_cost",
                                "is_slidable": false
                              },
                              "properties": {
                                "btype_id": "option.llm_models__os_",
                                "event_id": "bTPLV0",
                                "param_id": "streaming_model",
                                "param_name": "streaming_model"
                              },
                              "type": "APIEventParameter",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "times",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "number",
                            "event_id": "bTPLV0",
                            "param_id": "streaming_input",
                            "param_name": "streaming_input"
                          },
                          "type": "APIEventParameter",
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
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "token_price_change_point",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "option.llm_models__os_",
            "event_id": "bTPLV0",
            "optional": true,
            "param_id": "streaming_model",
            "param_name": "streaming_model"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "8": {
        "key": "streaming_model_option_llm_models__os_",
        "value": {
          "properties": {
            "btype_id": "option.llm_models__os_",
            "event_id": "bTPLV0",
            "param_id": "streaming_model",
            "param_name": "streaming_model"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "9": {
        "key": "streaming_output_tokens_number",
        "value": {
          "properties": {
            "btype_id": "number",
            "event_id": "bTPLV0",
            "param_id": "streaming_output",
            "param_name": "streaming_output"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "10": {
        "key": "streaming_output_usd_number",
        "value": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "args": {
                        "properties": {
                          "btype_id": "number",
                          "event_id": "bTPLV0",
                          "optional": true,
                          "param_id": "streaming_input",
                          "param_name": "streaming_input"
                        },
                        "type": "APIEventParameter",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "greater_than",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "token_price_change_point",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "option.llm_models__os_",
                    "event_id": "bTPLV0",
                    "optional": true,
                    "param_id": "streaming_model",
                    "param_name": "streaming_model"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "convert_to_number",
                    "is_slidable": false
                  },
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "args": {
                              "next": {
                                "type": "Message",
                                "name": "output_tokens_cost_high",
                                "is_slidable": false
                              },
                              "properties": {
                                "btype_id": "option.llm_models__os_",
                                "event_id": "bTPLV0",
                                "param_id": "streaming_model",
                                "param_name": "streaming_model"
                              },
                              "type": "APIEventParameter",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "times",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "number",
                            "event_id": "bTPLV0",
                            "optional": true,
                            "param_id": "streaming_output",
                            "param_name": "streaming_output"
                          },
                          "type": "APIEventParameter",
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
                            "args": {
                              "next": {
                                "type": "Message",
                                "name": "output_tokens_cost",
                                "is_slidable": false
                              },
                              "properties": {
                                "btype_id": "option.llm_models__os_",
                                "event_id": "bTPLV0",
                                "param_id": "streaming_model",
                                "param_name": "streaming_model"
                              },
                              "type": "APIEventParameter",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "times",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "number",
                            "event_id": "bTPLV0",
                            "optional": true,
                            "param_id": "streaming_output",
                            "param_name": "streaming_output"
                          },
                          "type": "APIEventParameter",
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
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "token_price_change_point",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "option.llm_models__os_",
            "event_id": "bTPLV0",
            "optional": true,
            "param_id": "streaming_model",
            "param_name": "streaming_model"
          },
          "type": "APIEventParameter",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "11": {
        "key": "tools_usage_usd_number",
        "value": {
          "next": {
            "args": 1e-05,
            "next": {
              "args": {
                "next": {
                  "args": 4e-05,
                  "type": "Message",
                  "name": "times",
                  "is_slidable": false
                },
                "properties": {
                  "btype_id": "number",
                  "event_id": "bTPLV0",
                  "optional": true,
                  "param_id": "OpenAi_image_gen_output",
                  "param_name": "OpenAi_image_gen_output"
                },
                "type": "APIEventParameter",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "properties": {
                        "formatting_for_true": 0.03
                      },
                      "type": "Message",
                      "name": "format_boolean_number",
                      "is_slidable": true
                    },
                    "type": "Message",
                    "name": "is_true",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "boolean",
                    "event_id": "bTPLV0",
                    "optional": true,
                    "param_id": "OpenAi_new_container",
                    "param_name": "OpenAi_new_container"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "args": 0.025,
                      "type": "Message",
                      "name": "times",
                      "is_slidable": false
                    },
                    "properties": {
                      "btype_id": "number",
                      "event_id": "bTPLV0",
                      "optional": true,
                      "param_id": "grok_web_sources_count",
                      "param_name": "grok_web_sources_count"
                    },
                    "type": "APIEventParameter",
                    "is_slidable": false
                  },
                  "next": {
                    "args": {
                      "next": {
                        "args": 0.01,
                        "type": "Message",
                        "name": "times",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "number",
                        "event_id": "bTPLV0",
                        "param_id": "claude_web_requests_count",
                        "param_name": "claude_web_requests_count"
                      },
                      "type": "APIEventParameter",
                      "is_slidable": false
                    },
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "properties": {
                              "formatting_for_true": 0.00416667
                            },
                            "type": "Message",
                            "name": "format_boolean_number",
                            "is_slidable": true
                          },
                          "type": "Message",
                          "name": "is_true",
                          "is_slidable": false
                        },
                        "properties": {
                          "btype_id": "boolean",
                          "event_id": "bTPLV0",
                          "param_id": "claude_code_exec_use",
                          "param_name": "claude_code_exec_use"
                        },
                        "type": "APIEventParameter",
                        "is_slidable": false
                      },
                      "next": {
                        "args": {
                          "next": {
                            "next": {
                              "properties": {
                                "formatting_for_true": 0.01
                              },
                              "type": "Message",
                              "name": "format_boolean_number",
                              "is_slidable": true
                            },
                            "type": "Message",
                            "name": "is_true",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "boolean",
                            "event_id": "bTPLV0",
                            "param_id": "OpenAI_web_search_use",
                            "param_name": "OpenAI_web_search_use"
                          },
                          "type": "APIEventParameter",
                          "is_slidable": false
                        },
                        "next": {
                          "args": {
                            "next": {
                              "next": {
                                "args": 1500,
                                "next": {
                                  "args": {
                                    "next": {
                                      "args": {
                                        "properties": {
                                          "option_set": "option.llm_models__os_",
                                          "option_value": "gemini_2_5_pro"
                                        },
                                        "type": "OneOptionValue",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "not_equals",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "btype_id": "option.llm_models__os_",
                                      "event_id": "bTPLV0",
                                      "optional": true,
                                      "param_id": "streaming_model",
                                      "param_name": "streaming_model"
                                    },
                                    "type": "APIEventParameter",
                                    "is_slidable": false
                                  },
                                  "next": {
                                    "args": {
                                      "next": {
                                        "next": {
                                          "args": 1500,
                                          "next": {
                                            "args": {
                                              "next": {
                                                "args": {
                                                  "properties": {
                                                    "option_set": "option.llm_models__os_",
                                                    "option_value": "gemini_2_5_pro"
                                                  },
                                                  "type": "OneOptionValue",
                                                  "is_slidable": false
                                                },
                                                "type": "Message",
                                                "name": "equals",
                                                "is_slidable": false
                                              },
                                              "properties": {
                                                "btype_id": "option.llm_models__os_",
                                                "event_id": "bTPLV0",
                                                "optional": true,
                                                "param_id": "streaming_model",
                                                "param_name": "streaming_model"
                                              },
                                              "type": "APIEventParameter",
                                              "is_slidable": false
                                            },
                                            "type": "Message",
                                            "name": "and_",
                                            "is_slidable": false
                                          },
                                          "type": "Message",
                                          "name": "greater_than",
                                          "is_slidable": false
                                        },
                                        "type": "Message",
                                        "name": "gemimini_pro_web_search_counter_number",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "action_id": "bTUIg"
                                      },
                                      "type": "PreviousStep",
                                      "is_slidable": false
                                    },
                                    "next": {
                                      "properties": {
                                        "formatting_for_true": 0.035
                                      },
                                      "type": "Message",
                                      "name": "format_boolean_number",
                                      "is_slidable": true
                                    },
                                    "type": "Message",
                                    "name": "or_",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "and_",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "greater_than",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "gemimini_flash_web_search_counter_number",
                              "is_slidable": false
                            },
                            "properties": {
                              "action_id": "bTUIg"
                            },
                            "type": "PreviousStep",
                            "is_slidable": false
                          },
                          "next": {
                            "args": {
                              "next": {
                                "next": {
                                  "properties": {
                                    "formatting_for_true": 0.00125
                                  },
                                  "type": "Message",
                                  "name": "format_boolean_number",
                                  "is_slidable": true
                                },
                                "type": "Message",
                                "name": "is_true",
                                "is_slidable": false
                              },
                              "properties": {
                                "btype_id": "boolean",
                                "event_id": "bTPLV0",
                                "param_id": "OpenAI_file_search_usage",
                                "param_name": "OpenAI_file_search_usage"
                              },
                              "type": "APIEventParameter",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "plus",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "plus",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "plus",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "plus",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "plus",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "plus",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "plus",
                "is_slidable": false
              },
              "type": "Message",
              "name": "plus",
              "is_slidable": false
            },
            "type": "Message",
            "name": "times",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "number",
            "event_id": "bTPLV0",
            "optional": true,
            "param_id": "OpenAi_image_gen_input",
            "param_name": "OpenAi_image_gen_input"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "12": {
        "key": "used_tools_list_option_llm_tool__os_",
        "value": {
          "next": {
            "properties": {
              "constraints": {
                "0": {
                  "key": "_advanced_search_constraint",
                  "value": {
                    "next": {
                      "next": {
                        "args": {
                          "next": {
                            "properties": {
                              "separator": {
                                "entries": {
                                  "0": ", "
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
                                "0": "",
                                "1": {
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
                                                "option_set": "option.llm_tool__os_",
                                                "option_value": "image_generation"
                                              },
                                              "type": "OptionValue",
                                              "said": "a2Vsdm8tMzE4ODQ="
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
                                  "properties": {
                                    "btype_id": "number",
                                    "event_id": "bTPLV0",
                                    "optional": true,
                                    "param_id": "OpenAi_image_gen_input",
                                    "param_name": "OpenAi_image_gen_input"
                                  },
                                  "type": "APIEventParameter",
                                  "is_slidable": false
                                },
                                "2": ", ",
                                "3": {
                                  "next": {
                                    "args": 0,
                                    "next": {
                                      "args": {
                                        "next": {
                                          "args": 0,
                                          "type": "Message",
                                          "name": "greater_than",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "btype_id": "number",
                                          "event_id": "bTPLV0",
                                          "optional": true,
                                          "param_id": "claude_web_requests_count",
                                          "param_name": "claude_web_requests_count"
                                        },
                                        "type": "APIEventParameter",
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
                                            "event_id": "bTPLV0",
                                            "optional": true,
                                            "param_id": "OpenAI_web_search_use",
                                            "param_name": "OpenAI_web_search_use"
                                          },
                                          "type": "APIEventParameter",
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
                                              "event_id": "bTPLV0",
                                              "optional": true,
                                              "param_id": "gemini_web_search_use",
                                              "param_name": "gemini_web_search_use"
                                            },
                                            "type": "APIEventParameter",
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
                                                      "name": "display",
                                                      "is_slidable": false
                                                    },
                                                    "properties": {
                                                      "option_set": "option.llm_tool__os_",
                                                      "option_value": "web_search"
                                                    },
                                                    "type": "OptionValue",
                                                    "said": "a2Vsdm8tMzE4ODQ="
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
                                        "name": "or_",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "or_",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "greater_than",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "btype_id": "number",
                                    "event_id": "bTPLV0",
                                    "optional": true,
                                    "param_id": "grok_web_sources_count",
                                    "param_name": "grok_web_sources_count"
                                  },
                                  "type": "APIEventParameter",
                                  "is_slidable": false
                                },
                                "4": ""
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "ArbitraryText"
                        },
                        "type": "Message",
                        "name": "is_contained_by_list",
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
            "option_set": "option.llm_tool__os_",
            "option_value": "all values"
          },
          "type": "OptionValue"
        },
        "action": "set_list"
      },
      "13": {
        "key": "pair_normalization_input_tokens_number",
        "value": {
          "properties": {
            "btype_id": "number",
            "event_id": "bTPLV0",
            "optional": true,
            "param_id": "pair_normalization_input_tokens",
            "param_name": "pair_normalization_input_tokens"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "14": {
        "key": "pair_normalization_input_usd_number",
        "value": {
          "next": {
            "args": 2e-07,
            "type": "Message",
            "name": "times",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "number",
            "event_id": "bTPLV0",
            "optional": true,
            "param_id": "pair_normalization_input_tokens",
            "param_name": "pair_normalization_input_tokens"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "15": {
        "key": "pair_normalization_output_tokens_number",
        "value": {
          "properties": {
            "btype_id": "number",
            "event_id": "bTPLV0",
            "optional": true,
            "param_id": "pair_normalization_output_tokens",
            "param_name": "pair_normalization_output_tokens"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "16": {
        "key": "pair_normalization_output_usd_number",
        "value": {
          "next": {
            "args": 6e-07,
            "type": "Message",
            "name": "times",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "number",
            "event_id": "bTPLV0",
            "optional": true,
            "param_id": "pair_normalization_output_tokens",
            "param_name": "pair_normalization_output_tokens"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "17": {
        "key": "remove_duplicates_input_tokens_number",
        "value": {
          "properties": {
            "btype_id": "number",
            "event_id": "bTPLV0",
            "optional": true,
            "param_id": "remove_duplicates_input_tokens",
            "param_name": "remove_duplicates_input_tokens"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "18": {
        "key": "remove_duplicates_input_usd_number",
        "value": {
          "next": {
            "args": 2e-07,
            "type": "Message",
            "name": "times",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "number",
            "event_id": "bTPLV0",
            "optional": true,
            "param_id": "remove_duplicates_input_tokens",
            "param_name": "remove_duplicates_input_tokens"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "19": {
        "key": "remove_duplicates_output_tokens_number",
        "value": {
          "properties": {
            "btype_id": "number",
            "event_id": "bTPLV0",
            "optional": true,
            "param_id": "remove_duplicates_output_tokens",
            "param_name": "remove_duplicates_output_tokens"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "20": {
        "key": "remove_duplicates_output_usd_number",
        "value": {
          "next": {
            "args": 6e-07,
            "type": "Message",
            "name": "times",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "number",
            "event_id": "bTPLV0",
            "optional": true,
            "param_id": "remove_duplicates_output_tokens",
            "param_name": "remove_duplicates_output_tokens"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "21": {
        "key": "stream_chat_title_input_number",
        "value": {
          "properties": {
            "btype_id": "number",
            "event_id": "bTPLV0",
            "optional": true,
            "param_id": "chat_title_input",
            "param_name": "chat_title_input"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "22": {
        "key": "stream_chat_title_input_usd_number",
        "value": {
          "next": {
            "args": 3e-07,
            "type": "Message",
            "name": "times",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "number",
            "event_id": "bTPLV0",
            "optional": true,
            "param_id": "chat_title_input",
            "param_name": "chat_title_input"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "23": {
        "key": "streaming_chat_title_output_number",
        "value": {
          "properties": {
            "btype_id": "number",
            "event_id": "bTPLV0",
            "optional": true,
            "param_id": "chat_title_output",
            "param_name": "chat_title_output"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "24": {
        "key": "stream_chat_title_output_usd_number",
        "value": {
          "next": {
            "args": 3e-07,
            "type": "Message",
            "name": "times",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "number",
            "event_id": "bTPLV0",
            "optional": true,
            "param_id": "chat_title_output",
            "param_name": "chat_title_output"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "25": {
        "key": "embedding_for_pair_tokens_number",
        "value": {
          "properties": {
            "btype_id": "number",
            "event_id": "bTPLV0",
            "optional": true,
            "param_id": "embedding_for_pair_tokens",
            "param_name": "embedding_for_pair_tokens"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "26": {
        "key": "embedding_for_pair_usd_number",
        "value": {
          "next": {
            "args": 2e-08,
            "type": "Message",
            "name": "times",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "number",
            "event_id": "bTPLV0",
            "optional": true,
            "param_id": "embedding_for_pair_tokens",
            "param_name": "embedding_for_pair_tokens"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "27": {
        "key": "speech_to_text_tokens_number",
        "value": {
          "properties": {
            "btype_id": "number",
            "event_id": "bTPLV0",
            "optional": true,
            "param_id": "speech_to_text_seconds",
            "param_name": "speech_to_text_seconds"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "28": {
        "key": "speech_to_text_usd_number",
        "value": {
          "next": {
            "args": 0.0001,
            "type": "Message",
            "name": "times",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "number",
            "event_id": "bTPLV0",
            "optional": true,
            "param_id": "speech_to_text_seconds",
            "param_name": "speech_to_text_seconds"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      }
    },
    "thing_type": "custom.log"
  },
  "type": "NewThing",
  "id": "bTPLb0",
};
