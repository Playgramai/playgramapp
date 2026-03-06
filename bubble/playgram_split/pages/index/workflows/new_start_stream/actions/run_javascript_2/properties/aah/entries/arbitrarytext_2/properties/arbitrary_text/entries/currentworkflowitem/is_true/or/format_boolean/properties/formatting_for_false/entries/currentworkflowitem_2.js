export const currentworkflowitem_2 = {
  "next": {
    "next": {
      "properties": {
        "formatting_for_true": {
          "entries": {
            "0": ",\n  tools: [\n    {\n      code_execution: {\n      }\n    }\n  ],\n  tool_config: {\n    function_calling_config: {\n      mode: \"ANY\" \n    }\n  }"
          },
          "type": "TextExpression"
        },
        "formatting_for_false": {
          "entries": {
            "0": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.llm_models__os_",
                    "option_value": "gemini_3_flash"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "args": {
                        "properties": {
                          "option_set": "option.llm_models__os_",
                          "option_value": "gemini_3_pro"
                        },
                        "type": "OneOptionValue",
                        "is_slidable": false
                      },
                      "next": {
                        "args": {
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
                              "type": "Message",
                              "name": "and_",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "not_contains",
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
                        "type": "Message",
                        "name": "and_",
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
                  "next": {
                    "properties": {
                      "formatting_for_true": {
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
                                      "0": ", generationConfig: { thinkingConfig: { thinkingLevel: \"high\" } },\n"
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
                                              "option_value": "gemini_3_flash"
                                            },
                                            "type": "OneOptionValue",
                                            "is_slidable": false
                                          },
                                          "next": {
                                            "properties": {
                                              "formatting_for_true": {
                                                "entries": {
                                                  "0": ", generationConfig: { thinkingConfig: { thinkingLevel: \"minimal\" } }"
                                                },
                                                "type": "TextExpression"
                                              },
                                              "formatting_for_false": {
                                                "entries": {
                                                  "0": ", generationConfig: { thinkingConfig: { thinkingLevel: \"low\" } }\n"
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
                              "name": "contains",
                              "is_slidable": false
                            },
                            "properties": {
                              "btype_id": "list.option.llm_tool__os_",
                              "event_id": "bTlOF0",
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
                      },
                      "formatting_for_false": {
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
                                      "0": ", generationConfig: { thinkingConfig: { thinkingBudget: -1 } }\n"
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
                              "name": "contains",
                              "is_slidable": false
                            },
                            "properties": {
                              "btype_id": "list.option.llm_tool__os_",
                              "event_id": "bTlOF0",
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
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
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
};
