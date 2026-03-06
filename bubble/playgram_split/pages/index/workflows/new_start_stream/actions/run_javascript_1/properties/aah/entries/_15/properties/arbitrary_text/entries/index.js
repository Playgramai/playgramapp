import { _21 } from './_21/index.js';

export const entries = {
  "21": _21,
  "0": "model: \"",
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
    "is_slidable": false
  },
  "2": "\",\n    stream: true,\n   ",
  "3": {
    "next": {
      "next": {
        "args": {
          "next": {
            "next": {
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
                  "type": "Message",
                  "name": "and_",
                  "is_slidable": false
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
                  "0": "(?<=file_id:)[^\\s}]+"
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
            "event_id": "bTUoZ0",
            "optional": true,
            "param_id": "bTHfj",
            "param_name": "last_messages"
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
                    "args": 30,
                    "type": "Message",
                    "name": "plus_days",
                    "is_slidable": false
                  },
                  "properties": {
                    "name": "Current Date/Time"
                  },
                  "type": "PageData",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "greater_than",
                "is_slidable": false
              },
              "type": "Message",
              "name": "claude_last_container_date_date",
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
                  "0": "container: \"",
                  "1": {
                    "next": {
                      "type": "Message",
                      "name": "claude_last_container_id_text",
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
                  "2": "\","
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
          "name": "and_",
          "is_slidable": false
        },
        "type": "Message",
        "name": "or_",
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
  "4": "\n   ",
  "5": {
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
              "0": "thinking: { type: \"enabled\", budget_tokens: 10000 },"
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
  "6": "\n",
  "7": {
    "next": {
      "next": {
        "properties": {
          "formatting_for_true": {
            "entries": {
              "0": "betas: [\"code-execution-2025-08-25\", \"files-api-2025-04-14\"],\n"
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
    "said": "a2Vsdm8tMzE4ODQ=",
    "is_slidable": false
  },
  "8": "\n    max_tokens: ",
  "9": {
    "next": {
      "type": "Message",
      "name": "max_tokens",
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
  "10": ",\n    tools: [{\n            type: \"code_execution_20250825\",\n            name: \"code_execution\"\n        \t}",
  "11": {
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
                "0": ", {type: \"web_search_20250305\",             name: \"web_search\", max_uses: 6}"
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
  "12": "],\n   system: ",
  "13": {
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
  "14": ",\n    messages: [",
  "15": {
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
                          "event_id": "bTUoZ0",
                          "optional": true,
                          "param_id": "bTHfj",
                          "param_name": "last_messages"
                        },
                        "type": "CurrentWorkflowItem",
                        "is_slidable": false
                      },
                      "2": ","
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
              "name": "is_not_empty",
              "is_slidable": false
            },
            "properties": {
              "btype_id": "text",
              "event_id": "bTUoZ0",
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
  "16": "\n      {\n        role: \"user\",\n        content: [\n          {type: \"text\", text: ",
  "17": {
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
  "18": "}",
  "19": {
    "properties": {
      "arbitrary_text": {
        "entries": {
          "0": "",
          "1": {
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
                        "0": ", {type: \"container_upload\", file_id: \"",
                        "1": {
                          "next": {
                            "type": "Message",
                            "name": "claude_id_text",
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
                        "2": "\"}"
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
          "2": ""
        },
        "type": "TextExpression"
      }
    },
    "type": "ArbitraryText"
  },
  "20": "",
  "22": "\n        ]\n      }\n    ]",
};
