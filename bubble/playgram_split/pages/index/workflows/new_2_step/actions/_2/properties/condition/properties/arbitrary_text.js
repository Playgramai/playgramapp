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
            "next": {
              "properties": {
                "separator": {
                  "entries": {
                    "0": ","
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "split_by",
              "is_slidable": true
            },
            "properties": {
              "formatting_for_true": {
                "entries": {
                  "0": "",
                  "1": {
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
                                        "type": "Message",
                                        "name": "_id",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "constraints": {
                                          "0": {
                                            "key": "openai_id_text",
                                            "value": {
                                              "type": "Empty"
                                            },
                                            "constraint_type": "is_empty"
                                          },
                                          "1": {
                                            "key": "_id",
                                            "value": {
                                              "next": {
                                                "properties": {
                                                  "regex": {
                                                    "entries": {
                                                      "0": "(?<=file_id\\s*:\\s*)[^;]+"
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
                                                "event_id": "bTnYl0",
                                                "optional": true,
                                                "param_id": "bTMEJ0",
                                                "param_name": "last_messages"
                                              },
                                              "type": "CurrentWorkflowItem",
                                              "is_slidable": false
                                            },
                                            "constraint_type": "in"
                                          },
                                          "2": {
                                            "key": "mime_type_text",
                                            "value": {
                                              "entries": {
                                                "0": "image",
                                                "1": {
                                                  "type": "Empty"
                                                }
                                              },
                                              "type": "TextExpression"
                                            },
                                            "constraint_type": "not text contains string"
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
                                    "event_id": "bTnYl0",
                                    "optional": false,
                                    "param_id": "bTPGG",
                                    "param_name": "chat"
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
                                    "next": {
                                      "next": {
                                        "args": "image",
                                        "next": {
                                          "args": {
                                            "next": {
                                              "next": {
                                                "next": {
                                                  "type": "Message",
                                                  "name": "is_empty",
                                                  "is_slidable": false
                                                },
                                                "type": "Message",
                                                "name": "openai_id_text",
                                                "is_slidable": false
                                              },
                                              "type": "Message",
                                              "name": "first_element",
                                              "is_slidable": false
                                            },
                                            "properties": {
                                              "btype_id": "list.custom.file",
                                              "event_id": "bTnYl0",
                                              "optional": true,
                                              "param_id": "bTQSa0",
                                              "param_name": "file"
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
                                                      "type": "Message",
                                                      "name": "_id",
                                                      "is_slidable": false
                                                    },
                                                    "properties": {
                                                      "btype_id": "list.custom.file",
                                                      "event_id": "bTnYl0",
                                                      "optional": true,
                                                      "param_id": "bTQSa0",
                                                      "param_name": "file"
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
                                          "name": "and_",
                                          "is_slidable": false
                                        },
                                        "type": "Message",
                                        "name": "not_contains",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "mime_type_text",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "first_element",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "btype_id": "list.custom.file",
                                    "event_id": "bTnYl0",
                                    "optional": true,
                                    "param_id": "bTQSa0",
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
                          "type": "Message",
                          "name": "format_boolean",
                          "is_slidable": true
                        },
                        "type": "Message",
                        "name": "is_empty",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "custom.regenerate_chat_id_",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTUdV0"
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
                  "0": "",
                  "1": {
                    "next": {
                      "next": {
                        "args": {
                          "properties": {
                            "option_set": "option.llm_providers__os_",
                            "option_value": "claude"
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
                                      "next": {
                                        "properties": {
                                          "formatting_for_true": {
                                            "entries": {
                                              "0": "",
                                              "1": {
                                                "next": {
                                                  "next": {
                                                    "next": {
                                                      "type": "Message",
                                                      "name": "_id",
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
                                                                    "0": "(?<=file_id\\s*:\\s*)[^;]+"
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
                                                              "event_id": "bTnYl0",
                                                              "optional": true,
                                                              "param_id": "bTMEJ0",
                                                              "param_name": "last_messages"
                                                            },
                                                            "type": "CurrentWorkflowItem",
                                                            "is_slidable": false
                                                          },
                                                          "constraint_type": "in"
                                                        },
                                                        "1": {
                                                          "key": "mime_type_text",
                                                          "value": {
                                                            "entries": {
                                                              "0": "image",
                                                              "1": {
                                                                "type": "Empty"
                                                              }
                                                            },
                                                            "type": "TextExpression"
                                                          },
                                                          "constraint_type": "not text contains string"
                                                        },
                                                        "2": {
                                                          "key": "claude_id_text",
                                                          "constraint_type": "is_empty"
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
                                                  "event_id": "bTnYl0",
                                                  "optional": false,
                                                  "param_id": "bTPGG",
                                                  "param_name": "chat"
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
                                                  "next": {
                                                    "next": {
                                                      "args": "image",
                                                      "next": {
                                                        "args": {
                                                          "next": {
                                                            "next": {
                                                              "next": {
                                                                "type": "Message",
                                                                "name": "is_empty",
                                                                "is_slidable": false
                                                              },
                                                              "type": "Message",
                                                              "name": "claude_id_text",
                                                              "is_slidable": false
                                                            },
                                                            "type": "Message",
                                                            "name": "first_element",
                                                            "is_slidable": false
                                                          },
                                                          "properties": {
                                                            "btype_id": "list.custom.file",
                                                            "event_id": "bTnYl0",
                                                            "optional": true,
                                                            "param_id": "bTQSa0",
                                                            "param_name": "file"
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
                                                                    "type": "Message",
                                                                    "name": "_id",
                                                                    "is_slidable": false
                                                                  },
                                                                  "properties": {
                                                                    "btype_id": "list.custom.file",
                                                                    "event_id": "bTnYl0",
                                                                    "optional": true,
                                                                    "param_id": "bTQSa0",
                                                                    "param_name": "file"
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
                                                        "name": "and_",
                                                        "is_slidable": false
                                                      },
                                                      "type": "Message",
                                                      "name": "not_contains",
                                                      "is_slidable": false
                                                    },
                                                    "type": "Message",
                                                    "name": "mime_type_text",
                                                    "is_slidable": false
                                                  },
                                                  "type": "Message",
                                                  "name": "first_element",
                                                  "is_slidable": false
                                                },
                                                "properties": {
                                                  "btype_id": "list.custom.file",
                                                  "event_id": "bTnYl0",
                                                  "optional": true,
                                                  "param_id": "bTQSa0",
                                                  "param_name": "file"
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
                                      "name": "is_empty",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "custom.regenerate_chat_id_",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "element_id": "bTUdV0"
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
                                "0": "",
                                "1": {
                                  "next": {
                                    "next": {
                                      "args": {
                                        "properties": {
                                          "option_set": "option.llm_providers__os_",
                                          "option_value": "gemini"
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
                                                    "next": {
                                                      "properties": {
                                                        "formatting_for_true": {
                                                          "entries": {
                                                            "0": "",
                                                            "1": {
                                                              "next": {
                                                                "next": {
                                                                  "next": {
                                                                    "type": "Message",
                                                                    "name": "_id",
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
                                                                                  "0": "(?<=file_id\\s*:\\s*)[^;]+"
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
                                                                            "event_id": "bTnYl0",
                                                                            "optional": true,
                                                                            "param_id": "bTMEJ0",
                                                                            "param_name": "last_messages"
                                                                          },
                                                                          "type": "CurrentWorkflowItem",
                                                                          "is_slidable": false
                                                                        },
                                                                        "constraint_type": "in"
                                                                      },
                                                                      "1": {
                                                                        "key": "mime_type_text",
                                                                        "value": {
                                                                          "entries": {
                                                                            "0": "image",
                                                                            "1": {
                                                                              "type": "Empty"
                                                                            }
                                                                          },
                                                                          "type": "TextExpression"
                                                                        },
                                                                        "constraint_type": "not text contains string"
                                                                      },
                                                                      "2": {
                                                                        "key": "gemini_id_text",
                                                                        "constraint_type": "is_empty"
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
                                                                "event_id": "bTnYl0",
                                                                "optional": false,
                                                                "param_id": "bTPGG",
                                                                "param_name": "chat"
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
                                                                "next": {
                                                                  "next": {
                                                                    "args": "image",
                                                                    "next": {
                                                                      "args": {
                                                                        "next": {
                                                                          "next": {
                                                                            "next": {
                                                                              "type": "Message",
                                                                              "name": "is_empty",
                                                                              "is_slidable": false
                                                                            },
                                                                            "type": "Message",
                                                                            "name": "gemini_id_text",
                                                                            "is_slidable": false
                                                                          },
                                                                          "type": "Message",
                                                                          "name": "first_element",
                                                                          "is_slidable": false
                                                                        },
                                                                        "properties": {
                                                                          "btype_id": "list.custom.file",
                                                                          "event_id": "bTnYl0",
                                                                          "optional": true,
                                                                          "param_id": "bTQSa0",
                                                                          "param_name": "file"
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
                                                                                  "type": "Message",
                                                                                  "name": "_id",
                                                                                  "is_slidable": false
                                                                                },
                                                                                "properties": {
                                                                                  "btype_id": "list.custom.file",
                                                                                  "event_id": "bTnYl0",
                                                                                  "optional": true,
                                                                                  "param_id": "bTQSa0",
                                                                                  "param_name": "file"
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
                                                                      "name": "and_",
                                                                      "is_slidable": false
                                                                    },
                                                                    "type": "Message",
                                                                    "name": "not_contains",
                                                                    "is_slidable": false
                                                                  },
                                                                  "type": "Message",
                                                                  "name": "mime_type_text",
                                                                  "is_slidable": false
                                                                },
                                                                "type": "Message",
                                                                "name": "first_element",
                                                                "is_slidable": false
                                                              },
                                                              "properties": {
                                                                "btype_id": "list.custom.file",
                                                                "event_id": "bTnYl0",
                                                                "optional": true,
                                                                "param_id": "bTQSa0",
                                                                "param_name": "file"
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
                                                    "name": "is_empty",
                                                    "is_slidable": false
                                                  },
                                                  "type": "Message",
                                                  "name": "custom.regenerate_chat_id_",
                                                  "is_slidable": false
                                                },
                                                "properties": {
                                                  "element_id": "bTUdV0"
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
                                      "name": "equals",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "provider",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "btype_id": "option.llm_models__os_",
                                    "event_id": "bTnYl0",
                                    "optional": false,
                                    "param_id": "bTQFB0",
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
                        "name": "equals",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "provider",
                      "is_slidable": false
                    },
                    "properties": {
                      "btype_id": "option.llm_models__os_",
                      "event_id": "bTnYl0",
                      "optional": false,
                      "param_id": "bTQFB0",
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
          "name": "equals",
          "is_slidable": false
        },
        "type": "Message",
        "name": "provider",
        "is_slidable": false
      },
      "properties": {
        "btype_id": "option.llm_models__os_",
        "event_id": "bTnYl0",
        "optional": false,
        "param_id": "bTQFB0",
        "param_name": "streaming_model"
      },
      "type": "CurrentWorkflowItem",
      "said": "a2Vsdm8tMzE4ODQ=",
      "is_slidable": false
    },
    "2": "",
    "3": {
      "next": {
        "next": {
          "next": {
            "properties": {
              "formatting_for_true": {
                "entries": {
                  "0": ",",
                  "1": {
                    "next": {
                      "type": "Message",
                      "name": "bTVBm0",
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
        "name": "bTVBm0",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTnYq0"
      },
      "type": "PreviousStep",
      "said": "a2Vsdm8tMzE4ODQ=",
      "is_slidable": false
    },
    "4": ""
  },
  "type": "TextExpression"
};
