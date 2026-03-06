import { _17 } from './_17/index.js';

export const arguments = {
  "17": _17,
  "0": {
    "param_id": "bTHfh",
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
      "said": "a2Vsdm8tMzE4ODQ=",
      "is_slidable": false
    }
  },
  "1": {
    "param_id": "bTHfi",
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
                    "type": "ArbitraryText",
                    "said": "a2Vsdm8tMzE4ODQ="
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
  "2": {
    "param_id": "bTHfj",
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
  "3": {
    "param_id": "bTIcB0",
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
    "param_id": "bTKsr",
    "arg_value": {
      "next": {
        "next": {
          "next": {
            "type": "Message",
            "name": "to_lowercase",
            "is_slidable": false
          },
          "type": "Message",
          "name": "display",
          "is_slidable": false
        },
        "type": "Message",
        "name": "type_option_chat_type__os_",
        "is_slidable": false
      },
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
  "5": {
    "param_id": "bTKsv",
    "arg_value": {
      "next": {
        "next": {
          "properties": {
            "find": {
              "entries": {
                "0": "\\\\"
              },
              "type": "TextExpression"
            },
            "replace": {
              "entries": {
                "0": "\\"
              },
              "type": "TextExpression"
            }
          },
          "type": "Message",
          "name": "find_replace",
          "is_slidable": true
        },
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
                "name": "name_text",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.project",
                "event_id": "bTnYl0",
                "optional": false,
                "param_id": "bTPGR",
                "param_name": "project"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "2": "\\"
          },
          "type": "TextExpression"
        }
      },
      "type": "ArbitraryText"
    }
  },
  "6": {
    "param_id": "bTPGd",
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
  "7": {
    "param_id": "bTPGl0",
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
  "8": {
    "param_id": "bTPyv",
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
  "9": {
    "param_id": "bTQSV0",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "first_element",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "file",
        "event_id": "bTnYl0",
        "optional": true,
        "param_id": "bTQSa0",
        "param_name": "file"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "10": {
    "param_id": "bTQSg0",
    "arg_value": {
      "next": {
        "type": "Message",
        "name": "organization_workspace_custom_organization",
        "is_slidable": false
      },
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
  "11": {
    "param_id": "bTVPl",
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
  "12": {
    "param_id": "bTcNt",
    "arg_value": {
      "properties": {
        "btype_id": "text",
        "event_id": "bTnYl0",
        "optional": true,
        "param_id": "bTcNo",
        "param_name": "user_image"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    }
  },
  "13": {
    "param_id": "bTdyy",
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
  "14": {
    "param_id": "bTdyz",
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
  "15": {
    "param_id": "bTdzb",
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
  "16": {
    "param_id": "bTfHd0",
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
  "18": {
    "param_id": "bTkSH0",
    "arg_value": {
      "properties": {
        "btype_id": "date",
        "event_id": "bTioX0",
        "optional": false,
        "param_id": "bTYTf",
        "param_name": "user_message_date"
      },
      "type": "CurrentWorkflowItem",
      "said": "a2Vsdm8tMzE4ODQ=",
      "is_slidable": false
    }
  },
  "19": {
    "param_id": "bTkhT",
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
                      "0": "(?<='web_search'\\s*:\\s*')[^']+"
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
      "is_slidable": false
    }
  },
  "20": {
    "param_id": "bTkhX",
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
      "is_slidable": false
    }
  },
  "21": {
    "param_id": "bTlhH",
    "arg_value": {
      "next": {
        "next": {
          "type": "Message",
          "name": "jwt_text",
          "is_slidable": false
        },
        "type": "Message",
        "name": "organization_workspace_custom_organization",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "custom.workspace",
        "event_id": "bTioX0",
        "optional": false,
        "param_id": "bTPxP0",
        "param_name": "workspace_user"
      },
      "type": "CurrentWorkflowItem",
      "said": "a2Vsdm8tMzE4ODQ=",
      "is_slidable": false
    }
  },
  "22": {
    "param_id": "bTpbc1",
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
  "23": {
    "param_id": "bTtkM0",
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
