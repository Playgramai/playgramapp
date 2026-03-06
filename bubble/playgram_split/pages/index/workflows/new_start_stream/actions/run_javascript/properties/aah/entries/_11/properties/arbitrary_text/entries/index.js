import { _15 } from './_15/index.js';
import { _5 } from './_5.js';

export const entries = {
  "15": _15,
  "5": _5,
  "7": {
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
    "type": "ArbitraryText"
  },
  "1": {
    "next": {
      "args": {
        "properties": {
          "option_set": "option.llm_models__os_",
          "option_value": "grok_4_fast"
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
                          "0": "grok-4-fast-reasoning"
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "grok-4-fast-non-reasoning"
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
                  "type": "Message",
                  "name": "id0",
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
  "11": {
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
                        "properties": {
                          "btype_id": "text",
                          "event_id": "bTVNV0",
                          "optional": true,
                          "param_id": "bTHfj",
                          "param_name": "last_messages"
                        },
                        "type": "CurrentWorkflowItem",
                        "is_slidable": false
                      },
                      "2": ","
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
            "properties": {
              "btype_id": "text",
              "event_id": "bTVNV0",
              "optional": true,
              "param_id": "bTHfj",
              "param_name": "last_messages"
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
    "type": "ArbitraryText"
  },
  "3": {
    "properties": {
      "arbitrary_text": {
        "entries": {
          "0": "",
          "1": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.llm_models__os_",
                  "option_value": "kimi_k2_5"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "\ntemperature: 0.6,"
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
    "type": "ArbitraryText"
  },
  "9": {
    "properties": {
      "btype_id": "text",
      "event_id": "bTnWy0",
      "optional": false,
      "param_id": "bTkFz2",
      "param_name": "system_prompt"
    },
    "type": "CurrentWorkflowItem",
    "is_slidable": false
  },
  "13": {
    "properties": {
      "btype_id": "text",
      "event_id": "bTnWy0",
      "optional": false,
      "param_id": "bTHfh",
      "param_name": "input"
    },
    "type": "CurrentWorkflowItem",
    "is_slidable": false
  },
  "12": "\n              { \n              role: \"user\", \n              content: [\n                        {\n                        type: \"input_text\",\n                        text: ",
  "8": "\n      input: [\n              {\n                role: \"system\",\n                content: ",
  "4": "\n      stream_options: {include_obfuscation: false},\n      tools: [",
  "16": "\n                      ] \n              }\n            ]    ",
  "2": "\",        \n      stream: true,",
  "14": "\n                        }",
  "10": "\n              },",
  "6": "\n            ],",
  "0": "      model: \"",
};
