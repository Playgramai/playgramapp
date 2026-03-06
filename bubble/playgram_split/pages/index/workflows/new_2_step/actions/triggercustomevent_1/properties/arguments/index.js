import { entry_0 } from './entry_0/index.js';
import { entry_25 } from './entry_25/index.js';

export const arguments = {
  "0": entry_0,
  "1": {
    "param_id": "bTTGH",
    "arg_value": {
      "properties": {
        "btype_id": "custom.chat",
        "event_id": "bTnYl0",
        "optional": false,
        "param_id": "bTPGG",
        "param_name": "chat"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "2": {
    "param_id": "bTTGI",
    "arg_value": {
      "properties": {
        "btype_id": "text",
        "event_id": "bTnYl0",
        "optional": false,
        "param_id": "bTPHg0",
        "param_name": "context"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "3": {
    "param_id": "bTTGN",
    "arg_value": {
      "properties": {
        "btype_id": "text",
        "event_id": "bTnYl0",
        "optional": true,
        "param_id": "bTMET0",
        "param_name": "custom_instructions"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "4": {
    "param_id": "bTTGO",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "bTVCF0",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTnYq0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    }
  },
  "5": {
    "param_id": "bTTGP",
    "arg_value": {
      "properties": {
        "btype_id": "list.option.llm_tool__os_",
        "event_id": "bTnYl0",
        "optional": true,
        "param_id": "bTPGk0",
        "param_name": "enabled_tools"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "6": {
    "param_id": "bTTGT",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "first_element",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.file",
        "event_id": "bTnYl0",
        "optional": true,
        "param_id": "bTQSa0",
        "param_name": "file"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "7": {
    "param_id": "bTTGU",
    "arg_value": {
      "properties": {
        "btype_id": "text",
        "event_id": "bTnYl0",
        "optional": true,
        "param_id": "bTMEJ0",
        "param_name": "last_messages"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "8": {
    "param_id": "bTTGV",
    "arg_value": {
      "next": {
        "next": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "find": {
                    "entries": {
                      "0": "\"$"
                    },
                    "type": "TextExpression"
                  },
                  "use_regex": true
                },
                "type": "Message",
                "name": "find_replace",
                "is_slidable": true
              },
              "properties": {
                "find": {
                  "entries": {
                    "0": "^\""
                  },
                  "type": "TextExpression"
                },
                "use_regex": true
              },
              "type": "Message",
              "name": "find_replace",
              "is_slidable": true
            },
            "properties": {
              "formatting_for_true": {
                "entries": {
                  "0": "",
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
                              "type": "Message",
                              "name": "bTVBa0",
                              "is_slidable": false
                            },
                            "properties": {
                              "action_id": "bTnYq0"
                            },
                            "type": "PreviousStep",
                            "is_slidable": false
                          },
                          "2": ";",
                          "3": {
                            "next": {
                              "type": "Message",
                              "name": "bTVBb0",
                              "is_slidable": false
                            },
                            "properties": {
                              "action_id": "bTnYq0"
                            },
                            "type": "PreviousStep",
                            "is_slidable": false
                          },
                          "4": ""
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "ArbitraryText"
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
                        "type": "Message",
                        "name": "format_json_encode",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "bTVBZ0",
                      "is_slidable": false
                    },
                    "properties": {
                      "action_id": "bTnYq0"
                    },
                    "type": "PreviousStep",
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
          "name": "is_empty",
          "is_slidable": false
        },
        "type": "Message",
        "name": "bTVBZ0",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTnYq0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    }
  },
  "9": {
    "param_id": "bTTGa",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "_api_c2_body.usage.prompt_tokens",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTnYp0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    }
  },
  "10": {
    "param_id": "bTTGb",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "_api_c2_body.usage.completion_tokens",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTnYp0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    }
  },
  "11": {
    "param_id": "bTTGf",
    "arg_value": {
      "properties": {
        "btype_id": "option.llm_models__os_",
        "event_id": "bTnYl0",
        "optional": false,
        "param_id": "bTQFB0",
        "param_name": "streaming_model"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "12": {
    "param_id": "bTTGg",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "bTVBh0",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTnYq0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    }
  },
  "13": {
    "param_id": "bTTGh",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "bTVBl0",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTnYq0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    }
  },
  "14": {
    "param_id": "bTTGm",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "format_json_encode",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "text",
        "event_id": "bTnYl0",
        "optional": false,
        "param_id": "bTHVN0",
        "param_name": "message"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "15": {
    "param_id": "bTTGn",
    "arg_value": {
      "properties": {
        "btype_id": "custom.workspace",
        "event_id": "bTnYl0",
        "optional": false,
        "param_id": "bTPxP0",
        "param_name": "workspace_user"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "16": {
    "param_id": "bTYTg",
    "arg_value": {
      "properties": {
        "btype_id": "date",
        "event_id": "bTnYl0",
        "optional": false,
        "param_id": "bTYTf",
        "param_name": "user_message_date"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "17": {
    "param_id": "bTiRx2",
    "arg_value": {
      "properties": {
        "btype_id": "image",
        "event_id": "bTnYl0",
        "optional": true,
        "param_id": "bTcNo",
        "param_name": "user_image"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "18": {
    "param_id": "bTiTJ2",
    "arg_value": {
      "properties": {
        "btype_id": "text",
        "event_id": "bTnYl0",
        "optional": true,
        "param_id": "bTeBI",
        "param_name": "project_instructions"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "19": {
    "param_id": "bTiTK2",
    "arg_value": {
      "properties": {
        "btype_id": "text",
        "event_id": "bTnYl0",
        "optional": true,
        "param_id": "bTeBJ",
        "param_name": "team_instructions"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "20": {
    "param_id": "bTiTL2",
    "arg_value": {
      "properties": {
        "btype_id": "text",
        "event_id": "bTnYl0",
        "optional": true,
        "param_id": "bTeBN",
        "param_name": "long_term_context"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "21": {
    "param_id": "bTiTP2",
    "arg_value": {
      "properties": {
        "btype_id": "text",
        "event_id": "bTnYl0",
        "optional": true,
        "param_id": "bTfHc0",
        "param_name": "project_context"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "22": {
    "param_id": "bTkgi0",
    "arg_value": {
      "next": {
        "args": {
          "properties": {
            "option_set": "option.llm_tool__os_",
            "option_value": "web_search"
          },
          "type": "OneOptionValue",
          "is_slidable": false
        },
        "type": "Message",
        "name": "contains",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "list.option.llm_tool__os_",
        "event_id": "bTnYl0",
        "optional": true,
        "param_id": "bTPGk0",
        "param_name": "enabled_tools"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "23": {
    "param_id": "bTkgj0",
    "arg_value": {
      "next": {
        "next": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "args": "true",
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "properties": {
                  "regex": {
                    "entries": {
                      "0": "(?<='code_interpreter'\\s*:\\s*')[^']+"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "extract_regex",
                "is_slidable": true
              },
              "properties": {
                "find": {
                  "entries": {
                    "0": "\""
                  },
                  "type": "TextExpression"
                },
                "replace": {
                  "entries": {
                    "0": "'"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "find_replace",
              "is_slidable": true
            },
            "type": "Message",
            "name": "_api_c2_message.content",
            "is_slidable": false
          },
          "type": "Message",
          "name": "first_element",
          "is_slidable": false
        },
        "type": "Message",
        "name": "_api_c2_body.choices",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTnYp0"
      },
      "type": "PreviousStep",
      "said": "a2Vsdm8tMzE4ODQ=",
      "is_slidable": false
    }
  },
  "24": {
    "param_id": "bTpbj2",
    "arg_value": {
      "next": {
        "next": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "args": "true",
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "properties": {
                  "regex": {
                    "entries": {
                      "0": "(?<='image_gen'\\s*:\\s*')[^']+"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "extract_regex",
                "is_slidable": true
              },
              "properties": {
                "find": {
                  "entries": {
                    "0": "\""
                  },
                  "type": "TextExpression"
                },
                "replace": {
                  "entries": {
                    "0": "'"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "find_replace",
              "is_slidable": true
            },
            "type": "Message",
            "name": "_api_c2_message.content",
            "is_slidable": false
          },
          "type": "Message",
          "name": "first_element",
          "is_slidable": false
        },
        "type": "Message",
        "name": "_api_c2_body.choices",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTnYp0"
      },
      "type": "PreviousStep",
      "said": "a2Vsdm8tMzE4ODQ=",
      "is_slidable": false
    }
  },
  "25": entry_25,
  "26": {
    "param_id": "bTtwB0",
    "arg_value": {
      "properties": {
        "btype_id": "number",
        "event_id": "bTnYl0",
        "optional": false,
        "param_id": "bTtkL0",
        "param_name": "sort"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
};
