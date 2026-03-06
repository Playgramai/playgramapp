export const new_1_step = {
  "properties": {
    "event_name": "new_1_step",
    "wf_folder": "InputChanged",
    "breakpoint": true,
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "custom.chat",
        "optional": false,
        "param_id": "bTPGF",
        "param_name": "chat"
      },
      "1": {
        "is_list": false,
        "btype_id": "custom.project",
        "optional": false,
        "param_id": "bTPGH",
        "param_name": "project"
      },
      "2": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTPHh0",
        "param_name": "context"
      },
      "3": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTPHl0",
        "param_name": "last_messages"
      },
      "4": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTPHm0",
        "param_name": "new_message"
      },
      "5": {
        "is_list": false,
        "btype_id": "custom.workspace",
        "optional": false,
        "param_id": "bTPxH0",
        "param_name": "workspace_user"
      },
      "6": {
        "is_list": false,
        "btype_id": "option.llm_models__os_",
        "optional": false,
        "param_id": "bTQFp0",
        "param_name": "streaming_model"
      },
      "7": {
        "is_list": true,
        "btype_id": "option.llm_tool__os_",
        "optional": true,
        "param_id": "bTQFq0",
        "param_name": "enabled_tools"
      },
      "8": {
        "is_list": false,
        "btype_id": "file",
        "optional": true,
        "param_id": "bTQSU0",
        "param_name": "file"
      },
      "9": {
        "is_list": false,
        "btype_id": "date",
        "optional": false,
        "param_id": "bTYTb",
        "param_name": "user_message_date"
      },
      "10": {
        "is_list": false,
        "btype_id": "boolean",
        "optional": true,
        "param_id": "bTaeV0",
        "param_name": "regenerate"
      },
      "11": {
        "is_list": false,
        "btype_id": "custom.file",
        "optional": true,
        "param_id": "bTaet0",
        "param_name": "chat_file_regenerate"
      },
      "12": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTagJ0",
        "param_name": "message_id_regenerate"
      },
      "13": {
        "is_list": false,
        "btype_id": "number",
        "optional": true,
        "param_id": "bTagT0",
        "param_name": "message_date_text_regenerate"
      },
      "14": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTcZD",
        "param_name": "regenerate_user_image_url"
      },
      "15": {
        "is_list": false,
        "btype_id": "number",
        "optional": false,
        "param_id": "bTtkB0",
        "param_name": "sort"
      },
      "16": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTwEC0",
        "param_name": "file_path"
      }
    },
    "event_color": "green"
  },
  "type": "CustomEvent",
  "id": "bTnZH0",
  "name": "new 1 step",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_false",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "boolean",
            "event_id": "bTnZH0",
            "optional": true,
            "param_id": "bTaeV0",
            "param_name": "regenerate"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "element_id": "bTUeL0"
      },
      "type": "ResetGroup",
      "id": "bTnZJ0"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_false",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "boolean",
            "event_id": "bTnZH0",
            "optional": true,
            "param_id": "bTaeV0",
            "param_name": "regenerate"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "AAh": {
          "entries": {
            "0": "bubble_fn_inputValue();\nwindow.clearCurrentChatDraft();"
          },
          "type": "TextExpression"
        },
        "AAi": false
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTnZN0"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "args": 1,
                      "type": "Message",
                      "name": "greater_than",
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
                  "element_id": "bTtcm0"
                },
                "type": "GetElement",
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
            "event_id": "bTnZH0",
            "optional": true,
            "param_id": "bTaeV0",
            "param_name": "regenerate"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "AAh": {
          "entries": {
            "0": "(function () {\n  const container = document.getElementById(\"parentContainer\");\n  if (!container) return;\n\n  container.scrollTo({\n    top: container.scrollHeight,\n    behavior: \"smooth\"\n  });\n})();\n"
          },
          "type": "TextExpression"
        },
        "AAi": false
      },
      "type": "1488796042609x768734193128308700-AAg",
      "id": "bTnZO0",
      "name": "Run javascript Scroll first message"
    },
    "3": {
      "properties": {
        "condition": {
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
                  "event_id": "bTnZH0",
                  "optional": true,
                  "param_id": "bTaeV0",
                  "param_name": "regenerate"
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
          "properties": {
            "btype_id": "file",
            "event_id": "bTnZH0",
            "optional": true,
            "param_id": "bTQSU0",
            "param_name": "file"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "arguments": {
          "0": {
            "param_id": "bTQRX0",
            "arg_value": {
              "next": {
                "type": "Message",
                "name": "current_organization_custom_organization",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "is_slidable": false
            }
          },
          "1": {
            "param_id": "bTQRY0",
            "arg_value": {
              "properties": {
                "btype_id": "file",
                "event_id": "bTnZH0",
                "optional": true,
                "param_id": "bTQSU0",
                "param_name": "file"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "2": {
            "param_id": "bTQRj0",
            "arg_value": {
              "properties": {
                "btype_id": "custom.chat",
                "event_id": "bTnZH0",
                "optional": false,
                "param_id": "bTPGF",
                "param_name": "chat"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "3": {
            "param_id": "bTQTz0",
            "arg_value": {
              "next": {
                "type": "Message",
                "name": "provider",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "option.llm_models__os_",
                "event_id": "bTnZH0",
                "optional": false,
                "param_id": "bTQFp0",
                "param_name": "streaming_model"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "4": {
            "param_id": "bTTCp",
            "arg_value": {
              "type": "CurrentUser",
              "is_slidable": false
            }
          },
          "5": {
            "param_id": "bTtuJ0",
            "arg_value": {
              "next": {
                "next": {
                  "args": "cdn.bubble.io",
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": ""
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "",
                          "1": {
                            "properties": {
                              "arbitrary_text": {
                                "entries": {
                                  "0": "",
                                  "1": {
                                    "next": {
                                      "properties": {
                                        "formatting_for_true": {
                                          "entries": {
                                            "0": "https://playgram-version-test.b-cdn.net/"
                                          },
                                          "type": "TextExpression"
                                        },
                                        "formatting_for_false": {
                                          "entries": {
                                            "0": "https://frala.b-cdn.net/"
                                          },
                                          "type": "TextExpression"
                                        }
                                      },
                                      "type": "Message",
                                      "name": "format_boolean",
                                      "is_slidable": true
                                    },
                                    "properties": {
                                      "name": "AppIsTest"
                                    },
                                    "type": "PageData",
                                    "said": "a2Vsdm8tMzE4ODQ=",
                                    "is_slidable": false
                                  },
                                  "2": "",
                                  "3": {
                                    "next": {
                                      "next": {
                                        "next": {
                                          "type": "Message",
                                          "name": "first_element",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "separator": {
                                            "entries": {
                                              "0": ";"
                                            },
                                            "type": "TextExpression"
                                          }
                                        },
                                        "type": "Message",
                                        "name": "split_by",
                                        "is_slidable": true
                                      },
                                      "type": "Message",
                                      "name": "get_group_data",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "element_id": "bTUiv0"
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
                                                  "properties": {
                                                    "formatting_for_true": {
                                                      "entries": {
                                                        "0": "https://playgram-version-test.b-cdn.net/"
                                                      },
                                                      "type": "TextExpression"
                                                    },
                                                    "formatting_for_false": {
                                                      "entries": {
                                                        "0": "https://frala.b-cdn.net/"
                                                      },
                                                      "type": "TextExpression"
                                                    }
                                                  },
                                                  "type": "Message",
                                                  "name": "format_boolean",
                                                  "is_slidable": true
                                                },
                                                "properties": {
                                                  "name": "AppIsTest"
                                                },
                                                "type": "PageData",
                                                "said": "a2Vsdm8tMzE4ODQ=",
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
                                      "name": "url",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "btype_id": "file",
                                      "event_id": "bTnZH0",
                                      "optional": true,
                                      "param_id": "bTQSU0",
                                      "param_name": "file"
                                    },
                                    "type": "CurrentWorkflowItem",
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
                "type": "Message",
                "name": "url",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "file",
                "event_id": "bTnZH0",
                "optional": true,
                "param_id": "bTQSU0",
                "param_name": "file"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "6": {
            "param_id": "bTwEI0",
            "arg_value": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTnZH0",
                "optional": true,
                "param_id": "bTwEC0",
                "param_name": "file_path"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          }
        },
        "custom_event": "bTttr0"
      },
      "type": "TriggerCustomEvent",
      "id": "bTnZP0"
    },
    "4": {
      "properties": {
        "arguments": {
          "0": {
            "param_id": "bTHVN0",
            "arg_value": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTnZH0",
                "optional": true,
                "param_id": "bTPHm0",
                "param_name": "new_message"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "1": {
            "param_id": "bTMEJ0",
            "arg_value": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTnZH0",
                "optional": false,
                "param_id": "bTPHl0",
                "param_name": "last_messages"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "2": {
            "param_id": "bTMET0",
            "arg_value": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "personal_instructions_list_text",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "current_workspace_custom_workspace",
                        "is_slidable": false
                      },
                      "type": "CurrentUser",
                      "is_slidable": false
                    },
                    "2": ""
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText",
              "said": "a2Vsdm8tMzE4ODQ="
            }
          },
          "3": {
            "param_id": "bTPGG",
            "arg_value": {
              "properties": {
                "btype_id": "custom.chat",
                "event_id": "bTnZH0",
                "optional": false,
                "param_id": "bTPGF",
                "param_name": "chat"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "4": {
            "param_id": "bTPGR",
            "arg_value": {
              "properties": {
                "btype_id": "custom.project",
                "event_id": "bTnZH0",
                "optional": false,
                "param_id": "bTPGH",
                "param_name": "project"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "5": {
            "param_id": "bTPGk0",
            "arg_value": {
              "properties": {
                "btype_id": "list.option.llm_tool__os_",
                "event_id": "bTnZH0",
                "optional": true,
                "param_id": "bTQFq0",
                "param_name": "enabled_tools"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "6": {
            "param_id": "bTPHg0",
            "arg_value": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTnZH0",
                "optional": false,
                "param_id": "bTPHh0",
                "param_name": "context"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "7": {
            "param_id": "bTPxP0",
            "arg_value": {
              "properties": {
                "btype_id": "custom.workspace",
                "event_id": "bTnZH0",
                "optional": false,
                "param_id": "bTPxH0",
                "param_name": "workspace_user"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "8": {
            "param_id": "bTQFB0",
            "arg_value": {
              "properties": {
                "btype_id": "option.llm_models__os_",
                "event_id": "bTnZH0",
                "optional": false,
                "param_id": "bTQFp0",
                "param_name": "streaming_model"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "9": {
            "param_id": "bTQSa0",
            "arg_value": {
              "next": {
                "next": {
                  "next": {
                    "args": {
                      "properties": {
                        "btype_id": "custom.file",
                        "event_id": "bTnZH0",
                        "optional": true,
                        "param_id": "bTaet0",
                        "param_name": "chat_file_regenerate"
                      },
                      "type": "CurrentWorkflowItem",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "plus_element",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "convert_to_list",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "bTQSO0",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTnZP0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "10": {
            "param_id": "bTYTf",
            "arg_value": {
              "properties": {
                "btype_id": "date",
                "event_id": "bTnZH0",
                "optional": false,
                "param_id": "bTYTb",
                "param_name": "user_message_date"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "11": {
            "param_id": "bTaeX0",
            "arg_value": {
              "properties": {
                "btype_id": "boolean",
                "event_id": "bTnZH0",
                "optional": true,
                "param_id": "bTaeV0",
                "param_name": "regenerate"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "12": {
            "param_id": "bTafX0",
            "arg_value": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTnZH0",
                "optional": true,
                "param_id": "bTagJ0",
                "param_name": "message_id_regenerate"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "13": {
            "param_id": "bTagV0",
            "arg_value": {
              "properties": {
                "btype_id": "number",
                "event_id": "bTnZH0",
                "optional": true,
                "param_id": "bTagT0",
                "param_name": "message_date_text_regenerate"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "14": {
            "param_id": "bTcNo",
            "arg_value": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "type": "Message",
                        "name": "bTcNn",
                        "is_slidable": false
                      },
                      "properties": {
                        "action_id": "bTnZP0"
                      },
                      "type": "PreviousStep",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "2": "",
                    "3": {
                      "properties": {
                        "btype_id": "text",
                        "event_id": "bTnZH0",
                        "optional": true,
                        "param_id": "bTcZD",
                        "param_name": "regenerate_user_image_url"
                      },
                      "type": "CurrentWorkflowItem",
                      "is_slidable": false
                    },
                    "4": ""
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText"
            }
          },
          "15": {
            "param_id": "bTeBI",
            "arg_value": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "new_custom_instructions_text",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "project_custom_project",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.chat",
                "event_id": "bTnZH0",
                "optional": false,
                "param_id": "bTPGF",
                "param_name": "chat"
              },
              "type": "CurrentWorkflowItem",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "16": {
            "param_id": "bTeBJ",
            "arg_value": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "custom_instructions_list_text",
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
                }
              },
              "type": "ArbitraryText",
              "said": "a2Vsdm8tMzE4ODQ="
            }
          },
          "17": {
            "param_id": "bTeBN",
            "arg_value": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "next": {
                          "properties": {
                            "content": {
                              "entries": {
                                "0": "{",
                                "1": {
                                  "type": "InjectedValue",
                                  "is_slidable": false
                                },
                                "2": "}"
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
                        "name": "additional_context_list_text",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "custom.chat",
                        "event_id": "bTnZH0",
                        "optional": false,
                        "param_id": "bTPGF",
                        "param_name": "chat"
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
            }
          },
          "18": {
            "param_id": "bTfHc0",
            "arg_value": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "relevant_context_text",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "project_custom_project",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "custom.chat",
                        "event_id": "bTnZH0",
                        "optional": false,
                        "param_id": "bTPGF",
                        "param_name": "chat"
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
            }
          },
          "19": {
            "param_id": "bTtkL0",
            "arg_value": {
              "properties": {
                "btype_id": "number",
                "event_id": "bTnZH0",
                "optional": false,
                "param_id": "bTtkB0",
                "param_name": "sort"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "20": {
            "param_id": "bTwEB0",
            "arg_value": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTnZH0",
                "optional": true,
                "param_id": "bTwEC0",
                "param_name": "file_path"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          }
        },
        "breakpoint": false,
        "custom_event": "bTnYl0"
      },
      "type": "TriggerCustomEvent",
      "id": "bTnZT0"
    }
  }
};
