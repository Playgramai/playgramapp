export const actions = {
  "0": {
    "properties": {
      "body_params_context": {
        "entries": {
          "0": {
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
                    "properties": {
                      "btype_id": "list.text",
                      "event_id": "bTJTB0",
                      "optional": true,
                      "param_id": "context",
                      "param_name": "context"
                    },
                    "type": "APIEventParameter",
                    "is_slidable": false
                  },
                  "2": "\\"
                },
                "type": "TextExpression"
              }
            },
            "type": "ArbitraryText",
            "said": "a2Vsdm8tMzE4ODQ="
          }
        },
        "type": "TextExpression"
      },
      "body_params_chat_type": {
        "entries": {
          "0": {
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
                          "event_id": "bTJTB0",
                          "optional": true,
                          "param_id": "chat",
                          "param_name": "chat"
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
                        "properties": {
                          "btype_id": "text",
                          "event_id": "bTJTB0",
                          "optional": true,
                          "param_id": "chat_type",
                          "param_name": "chat_type"
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
              "name": "is_not_empty",
              "is_slidable": false
            },
            "properties": {
              "btype_id": "custom.chat",
              "event_id": "bTJTB0",
              "param_id": "chat",
              "param_name": "chat"
            },
            "type": "APIEventParameter",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "body_params_llm_reply": {
        "entries": {
          "0": {
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
                    "properties": {
                      "btype_id": "text",
                      "event_id": "bTJTB0",
                      "param_id": "llm_reply",
                      "param_name": "llm_reply"
                    },
                    "type": "APIEventParameter",
                    "is_slidable": false
                  },
                  "2": "\\"
                },
                "type": "TextExpression"
              }
            },
            "type": "ArbitraryText",
            "said": "a2Vsdm8tMzE4ODQ="
          }
        },
        "type": "TextExpression"
      },
      "body_params_user_message": {
        "entries": {
          "0": {
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
                    "properties": {
                      "btype_id": "text",
                      "event_id": "bTJTB0",
                      "param_id": "user_message",
                      "param_name": "user_message"
                    },
                    "type": "APIEventParameter",
                    "is_slidable": false
                  },
                  "2": "\\"
                },
                "type": "TextExpression"
              }
            },
            "type": "ArbitraryText",
            "said": "a2Vsdm8tMzE4ODQ="
          }
        },
        "type": "TextExpression"
      }
    },
    "type": "apiconnector2-bTPLJ.bTUQX0",
    "id": "bTUQY0"
  },
  "1": {
    "properties": {
      "changes": {
        "0": {
          "key": "log_text",
          "value": {
            "entries": {
              "0": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2_message.content",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "_api_c2_body.choices",
                  "is_slidable": false
                },
                "properties": {
                  "action_id": "bTUQY0"
                },
                "type": "PreviousStep",
                "is_slidable": false
              }
            },
            "type": "TextExpression"
          },
          "action": {
            "type": "Empty"
          }
        }
      },
      "to_change": {
        "properties": {
          "btype_id": "user",
          "event_id": "bTJTB0",
          "param_id": "user",
          "param_name": "user"
        },
        "type": "APIEventParameter",
        "is_slidable": false
      }
    },
    "type": "ChangeThing",
    "id": "bTKBX0"
  },
  "2": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
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
                          "0": "(?<='normalized'\\s*:\\s*')[^']+"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "extract_regex",
                    "is_slidable": true
                  },
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "properties": {
                  "separator": {
                    "entries": {
                      "0": "},"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "split_by",
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
          "action_id": "bTUQY0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "data_source": {
        "next": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "separator": {
                    "entries": {
                      "0": "},"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "split_by",
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
          "action_id": "bTUQY0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "date": {
        "properties": {
          "name": "Current Date/Time"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "api_event": "bTLtD",
      "type_of_list": "text",
      "_wf_param_chat": {
        "properties": {
          "btype_id": "custom.chat",
          "event_id": "bTJTB0",
          "param_id": "chat",
          "param_name": "chat"
        },
        "type": "APIEventParameter",
        "is_slidable": false
      },
      "_wf_param_sort": {
        "properties": {
          "btype_id": "text",
          "event_id": "bTJTB0",
          "param_id": "current_pair_sort",
          "param_name": "current_pair_sort"
        },
        "type": "APIEventParameter",
        "is_slidable": false
      },
      "_wf_param_user": {
        "properties": {
          "btype_id": "user",
          "event_id": "bTJTB0",
          "param_id": "user",
          "param_name": "user"
        },
        "type": "APIEventParameter",
        "is_slidable": false
      },
      "_wf_param_vector": {
        "entries": {
          "0": "[",
          "1": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "_api_c2_embedding",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "type": "Message",
              "name": "_api_c2_body.data",
              "is_slidable": false
            },
            "properties": {
              "provider": "apiconnector2.bTHDh0.bTHDm0",
              "body_params_text": {
                "entries": {
                  "0": {
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
                              "properties": {
                                "regex": {
                                  "entries": {
                                    "0": "(?<='normalized'\\s*:\\s*')[^']+"
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "Message",
                              "name": "extract_regex",
                              "is_slidable": true
                            },
                            "type": "InjectedValue",
                            "is_slidable": false
                          },
                          "2": ""
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "ArbitraryText"
                  }
                },
                "type": "TextExpression"
              }
            },
            "type": "GetDataFromAPI",
            "said": "a2Vsdm8tMzE4ODQ="
          },
          "2": "]"
        },
        "type": "TextExpression"
      },
      "_wf_param_context": {
        "properties": {
          "btype_id": "list.text",
          "event_id": "bTJTB0",
          "optional": true,
          "param_id": "context",
          "param_name": "context"
        },
        "type": "APIEventParameter",
        "is_slidable": false
      },
      "_wf_param_full_text": {
        "entries": {
          "0": {
            "next": {
              "next": {
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
                          "0": "},"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "split_by",
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
              "action_id": "bTUQY0"
            },
            "type": "PreviousStep",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_llm_reply": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "args": "current",
                    "next": {
                      "properties": {
                        "formatting_for_true": {
                          "entries": {
                            "0": "",
                            "1": {
                              "properties": {
                                "btype_id": "text",
                                "event_id": "bTJTB0",
                                "param_id": "llm_reply",
                                "param_name": "llm_reply"
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
                  "name": "trimmed",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "regex": {
                  "entries": {
                    "0": "(?<='source_pair_id'\\s*:\\s*')[^']+"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "extract_regex",
              "is_slidable": true
            },
            "type": "InjectedValue",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_object_id": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "args": "current",
                    "next": {
                      "properties": {
                        "formatting_for_true": {
                          "entries": {
                            "0": "",
                            "1": {
                              "properties": {
                                "btype_id": "text",
                                "event_id": "bTJTB0",
                                "param_id": "object_id",
                                "param_name": "object_id"
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
                                "next": {
                                  "next": {
                                    "type": "Message",
                                    "name": "trimmed",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "first_element",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "regex": {
                                    "entries": {
                                      "0": "(?<='source_pair_id'\\s*:\\s*')[^']+"
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "Message",
                                "name": "extract_regex",
                                "is_slidable": true
                              },
                              "type": "InjectedValue",
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
                  "type": "Message",
                  "name": "trimmed",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "regex": {
                  "entries": {
                    "0": "(?<='source_pair_id'\\s*:\\s*')[^']+"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "extract_regex",
              "is_slidable": true
            },
            "type": "InjectedValue",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_normalized": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "trimmed",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "regex": {
                  "entries": {
                    "0": "(?<='normalized'\\s*:\\s*')[^']+"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "extract_regex",
              "is_slidable": true
            },
            "type": "InjectedValue",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_manual_input": {
        "entries": {
          "0": {
            "properties": {
              "btype_id": "text",
              "event_id": "bTJTB0",
              "optional": true,
              "param_id": "manual_input",
              "param_name": "manual_input"
            },
            "type": "APIEventParameter",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_memory_level": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "regex": {
                  "entries": {
                    "0": "(?<='memory_level'\\s*:\\s*')[^']+"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "extract_regex",
              "is_slidable": true
            },
            "type": "InjectedValue",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_user_message": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "args": "current",
                    "next": {
                      "properties": {
                        "formatting_for_true": {
                          "entries": {
                            "0": "",
                            "1": {
                              "properties": {
                                "btype_id": "text",
                                "event_id": "bTJTB0",
                                "param_id": "user_message",
                                "param_name": "user_message"
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
                  "name": "trimmed",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "regex": {
                  "entries": {
                    "0": "(?<='source_pair_id'\\s*:\\s*')[^']+"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "extract_regex",
              "is_slidable": true
            },
            "type": "InjectedValue",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "1": ""
        },
        "type": "TextExpression"
      },
      "_wf_param_saved_manually": {
        "entries": {
          "0": {
            "properties": {
              "btype_id": "text",
              "event_id": "bTJTB0",
              "optional": true,
              "param_id": "saved_manually",
              "param_name": "saved_manually"
            },
            "type": "APIEventParameter",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_workspace_user": {
        "properties": {
          "btype_id": "custom.workspace",
          "event_id": "bTJTB0",
          "param_id": "workspace_user",
          "param_name": "workspace_user"
        },
        "type": "APIEventParameter",
        "is_slidable": false
      },
      "_wf_param_for_api_organization_id": {
        "entries": {
          "0": {
            "properties": {
              "btype_id": "text",
              "event_id": "bTJTB0",
              "optional": true,
              "param_id": "for_api_organization_id",
              "param_name": "for_api_organization_id"
            },
            "type": "APIEventParameter",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_normalization_input_tokens": {
        "next": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "args": {
                      "type": "InjectedValue",
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
                                "type": "Message",
                                "name": "_api_c2_body.usage.prompt_tokens",
                                "is_slidable": false
                              },
                              "properties": {
                                "action_id": "bTUQY0"
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
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "properties": {
                  "separator": {
                    "entries": {
                      "0": "},"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "split_by",
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
          "action_id": "bTUQY0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "_wf_param_normalization_output_tokens": {
        "next": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "args": {
                      "type": "InjectedValue",
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
                                "type": "Message",
                                "name": "_api_c2_body.usage.completion_tokens",
                                "is_slidable": false
                              },
                              "properties": {
                                "action_id": "bTUQY0"
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
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "properties": {
                  "separator": {
                    "entries": {
                      "0": "},"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "split_by",
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
          "action_id": "bTUQY0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      }
    },
    "type": "ScheduleAPIEventOnList",
    "id": "bTJTN0"
  },
  "3": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "next": {
                          "next": {
                            "next": {
                              "next": {
                                "args": "team",
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
                                  "0": "(?<='memory_level'\\s*:\\s*')[^']+"
                                },
                                "type": "TextExpression"
                              }
                            },
                            "type": "Message",
                            "name": "extract_regex",
                            "is_slidable": true
                          },
                          "type": "Message",
                          "name": "first_element",
                          "is_slidable": false
                        },
                        "properties": {
                          "separator": {
                            "entries": {
                              "0": "},"
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "split_by",
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
                  "action_id": "bTUQY0"
                },
                "type": "PreviousStep",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "is_not_empty",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "custom.file",
                    "event_id": "bTJTB0",
                    "optional": true,
                    "param_id": "chat_file",
                    "param_name": "chat_file"
                  },
                  "type": "APIEventParameter",
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
            "name": "is_not_empty",
            "is_slidable": false
          },
          "type": "Message",
          "name": "first_element",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTJTN0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "date": {
        "properties": {
          "name": "Current Date/Time"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "api_event": "bTSsn0",
      "_wf_param_chat_file": {
        "properties": {
          "btype_id": "custom.file",
          "event_id": "bTJTB0",
          "optional": true,
          "param_id": "chat_file",
          "param_name": "chat_file"
        },
        "type": "APIEventParameter",
        "is_slidable": false
      },
      "_wf_param_last_file": {
        "entries": {
          "0": {
            "next": {
              "type": "Message",
              "name": "bunny_url_text",
              "is_slidable": false
            },
            "properties": {
              "btype_id": "custom.file",
              "event_id": "bTJTB0",
              "optional": true,
              "param_id": "chat_file",
              "param_name": "chat_file"
            },
            "type": "APIEventParameter",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_tenant_name": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "_id",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "organization_workspace_custom_organization",
                "is_slidable": false
              },
              "type": "Message",
              "name": "current_workspace_custom_workspace",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_current_user": {
        "type": "CurrentUser",
        "is_slidable": false
      },
      "_wf_param_organization": {
        "next": {
          "type": "Message",
          "name": "organization_custom_organization",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "custom.chat",
          "event_id": "bTJTB0",
          "optional": true,
          "param_id": "chat",
          "param_name": "chat"
        },
        "type": "APIEventParameter",
        "is_slidable": false
      },
      "_wf_param_workspace_id": {
        "next": {
          "type": "Message",
          "name": "current_workspace_custom_workspace",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      }
    },
    "type": "ScheduleAPIEvent",
    "id": "bTjEF0"
  },
  "4": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "next": {
                          "next": {
                            "next": {
                              "next": {
                                "args": {
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
                                    "arbitrary_text": {
                                      "entries": {
                                        "0": "personal,temporary"
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
                              "name": "first_element",
                              "is_slidable": false
                            },
                            "properties": {
                              "regex": {
                                "entries": {
                                  "0": "(?<='memory_level'\\s*:\\s*')[^']+"
                                },
                                "type": "TextExpression"
                              }
                            },
                            "type": "Message",
                            "name": "extract_regex",
                            "is_slidable": true
                          },
                          "type": "Message",
                          "name": "first_element",
                          "is_slidable": false
                        },
                        "properties": {
                          "separator": {
                            "entries": {
                              "0": "},"
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "split_by",
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
                  "action_id": "bTUQY0"
                },
                "type": "PreviousStep",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "is_not_empty",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "custom.file",
                    "event_id": "bTJTB0",
                    "optional": true,
                    "param_id": "chat_file",
                    "param_name": "chat_file"
                  },
                  "type": "APIEventParameter",
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
            "name": "is_not_empty",
            "is_slidable": false
          },
          "type": "Message",
          "name": "first_element",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTJTN0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "date": {
        "properties": {
          "name": "Current Date/Time"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "api_event": "bTSsn0",
      "_wf_param_user_id": {
        "type": "CurrentUser",
        "is_slidable": false
      },
      "_wf_param_chat_file": {
        "properties": {
          "btype_id": "custom.file",
          "event_id": "bTJTB0",
          "optional": true,
          "param_id": "chat_file",
          "param_name": "chat_file"
        },
        "type": "APIEventParameter",
        "is_slidable": false
      },
      "_wf_param_last_file": {
        "entries": {
          "0": {
            "next": {
              "type": "Message",
              "name": "bunny_url_text",
              "is_slidable": false
            },
            "properties": {
              "btype_id": "custom.file",
              "event_id": "bTJTB0",
              "optional": true,
              "param_id": "chat_file",
              "param_name": "chat_file"
            },
            "type": "APIEventParameter",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_tenant_name": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "_id",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "organization_workspace_custom_organization",
                "is_slidable": false
              },
              "type": "Message",
              "name": "current_workspace_custom_workspace",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_current_user": {
        "type": "CurrentUser",
        "is_slidable": false
      },
      "_wf_param_workspace_id": {
        "next": {
          "type": "Message",
          "name": "current_workspace_custom_workspace",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      }
    },
    "type": "ScheduleAPIEvent",
    "id": "bTjEH0"
  },
  "5": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "next": {
                          "next": {
                            "next": {
                              "next": {
                                "args": "project",
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
                                  "0": "(?<='memory_level'\\s*:\\s*')[^']+"
                                },
                                "type": "TextExpression"
                              }
                            },
                            "type": "Message",
                            "name": "extract_regex",
                            "is_slidable": true
                          },
                          "type": "Message",
                          "name": "first_element",
                          "is_slidable": false
                        },
                        "properties": {
                          "separator": {
                            "entries": {
                              "0": "},"
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "split_by",
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
                  "action_id": "bTUQY0"
                },
                "type": "PreviousStep",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "is_not_empty",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "custom.file",
                    "event_id": "bTJTB0",
                    "optional": true,
                    "param_id": "chat_file",
                    "param_name": "chat_file"
                  },
                  "type": "APIEventParameter",
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
            "name": "is_not_empty",
            "is_slidable": false
          },
          "type": "Message",
          "name": "first_element",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTJTN0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "date": {
        "properties": {
          "name": "Current Date/Time"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "api_event": "bTSsn0",
      "_wf_param_project": {
        "next": {
          "type": "Message",
          "name": "project_custom_project",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "custom.chat",
          "event_id": "bTJTB0",
          "optional": true,
          "param_id": "chat",
          "param_name": "chat"
        },
        "type": "APIEventParameter",
        "is_slidable": false
      },
      "_wf_param_chat_file": {
        "properties": {
          "btype_id": "custom.file",
          "event_id": "bTJTB0",
          "optional": true,
          "param_id": "chat_file",
          "param_name": "chat_file"
        },
        "type": "APIEventParameter",
        "is_slidable": false
      },
      "_wf_param_last_file": {
        "entries": {
          "0": {
            "next": {
              "type": "Message",
              "name": "bunny_url_text",
              "is_slidable": false
            },
            "properties": {
              "btype_id": "custom.file",
              "event_id": "bTJTB0",
              "optional": true,
              "param_id": "chat_file",
              "param_name": "chat_file"
            },
            "type": "APIEventParameter",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_tenant_name": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "_id",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "organization_workspace_custom_organization",
                "is_slidable": false
              },
              "type": "Message",
              "name": "current_workspace_custom_workspace",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_current_user": {
        "type": "CurrentUser",
        "is_slidable": false
      },
      "_wf_param_workspace_id": {
        "next": {
          "type": "Message",
          "name": "current_workspace_custom_workspace",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      }
    },
    "type": "ScheduleAPIEvent",
    "id": "bTjEM0"
  },
  "6": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "is_empty",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "first_element",
                      "is_slidable": false
                    },
                    "properties": {
                      "regex": {
                        "entries": {
                          "0": "(?<='normalized'\\s*:\\s*')[^']+"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "extract_regex",
                    "is_slidable": true
                  },
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "properties": {
                  "separator": {
                    "entries": {
                      "0": "},"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "split_by",
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
          "action_id": "bTUQY0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "date": {
        "properties": {
          "name": "Current Date/Time"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "api_event": "bTPLV0",
      "ignore_privacy_rules": true,
      "_wf_param_pair_normalization_input_tokens": {
        "next": {
          "type": "Message",
          "name": "_api_c2_body.usage.prompt_tokens",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTUQY0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "_wf_param_pair_normalization_output_tokens": {
        "next": {
          "type": "Message",
          "name": "_api_c2_body.usage.completion_tokens",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTUQY0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      }
    },
    "type": "ScheduleAPIEvent",
    "id": "bTQRG"
  }
};
