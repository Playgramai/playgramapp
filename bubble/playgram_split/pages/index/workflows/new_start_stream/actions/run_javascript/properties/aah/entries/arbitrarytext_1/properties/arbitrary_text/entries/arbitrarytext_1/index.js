export const arbitrarytext_1 = {
  "properties": {
    "arbitrary_text": {
      "entries": {
        "0": "",
        "1": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.llm_tool__os_",
                "option_value": "reasoning"
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
                          "args": {
                            "properties": {
                              "option_set": "option.llm_providers__os_",
                              "option_value": "open_ai"
                            },
                            "type": "OneOptionValue",
                            "is_slidable": false
                          },
                          "next": {
                            "args": {
                              "next": {
                                "next": {
                                  "args": {
                                    "properties": {
                                      "option_set": "option.llm_providers__os_",
                                      "option_value": "deepseek"
                                    },
                                    "type": "OneOptionValue",
                                    "is_slidable": false
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
                              "is_slidable": false
                            },
                            "next": {
                              "properties": {
                                "formatting_for_true": {
                                  "entries": {
                                    "0": "reasoning: {effort: \"high\", summary: \"auto\"},"
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
                          "properties": {
                            "option_set": "option.llm_models__os_",
                            "option_value": "chatgpt_4_1"
                          },
                          "type": "OneOptionValue",
                          "is_slidable": false
                        },
                        "next": {
                          "args": {
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
                          "next": {
                            "properties": {
                              "formatting_for_true": {
                                "entries": {
                                  "0": "",
                                  "1": {
                                    "next": {
                                      "next": {
                                        "args": {
                                          "properties": {
                                            "option_set": "option.llm_providers__os_",
                                            "option_value": "kimi"
                                          },
                                          "type": "OneOptionValue",
                                          "is_slidable": false
                                        },
                                        "next": {
                                          "properties": {
                                            "formatting_for_true": {
                                              "entries": {
                                                "0": "extra_body: {\n      reasoning: { effort: \"none\" }\n    },"
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
                                        "properties": {
                                          "option_set": "option.llm_models__os_",
                                          "option_value": "gpt_5_2"
                                        },
                                        "type": "OneOptionValue",
                                        "is_slidable": false
                                      },
                                      "next": {
                                        "properties": {
                                          "formatting_for_true": {
                                            "entries": {
                                              "0": "reasoning: {effort: \"none\", summary: \"auto\"},"
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
                                                        "next": {
                                                          "type": "Message",
                                                          "name": "is_false",
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
                                                        "args": {
                                                          "next": {
                                                            "type": "Message",
                                                            "name": "is_false",
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
                                                        },
                                                        "next": {
                                                          "args": {
                                                            "next": {
                                                              "next": {
                                                                "args": {
                                                                  "next": {
                                                                    "type": "Message",
                                                                    "name": "is_empty",
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
                                                                "type": "Message",
                                                                "name": "and_",
                                                                "is_slidable": false
                                                              },
                                                              "type": "Message",
                                                              "name": "is_false",
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
                                                                  "0": "reasoning: {effort: \"minimal\", summary: \"auto\"},"
                                                                },
                                                                "type": "TextExpression"
                                                              },
                                                              "formatting_for_false": {
                                                                "entries": {
                                                                  "0": "reasoning: {effort: \"low\", summary: \"auto\"},"
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
                                                        "name": "and_",
                                                        "is_slidable": false
                                                      },
                                                      "type": "Message",
                                                      "name": "and_",
                                                      "is_slidable": false
                                                    },
                                                    "type": "Message",
                                                    "name": "is_empty",
                                                    "is_slidable": false
                                                  },
                                                  "type": "Message",
                                                  "name": "first_element",
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
          "properties": {
            "btype_id": "list.option.llm_tool__os_",
            "event_id": "bTnWy0",
            "optional": true,
            "param_id": "bTPGl0",
            "param_name": "enabled_tools"
          },
          "type": "CurrentWorkflowItem",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "2": ""
      },
      "type": "TextExpression"
    }
  },
  "type": "ArbitraryText",
};
