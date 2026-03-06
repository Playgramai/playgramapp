export const create_chat_file = {
  "properties": {
    "event_name": "create_chat_file",
    "breakpoint": true,
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "custom.organization",
        "optional": false,
        "param_id": "bTQRX0",
        "param_name": "organization"
      },
      "1": {
        "is_list": false,
        "btype_id": "file",
        "optional": false,
        "param_id": "bTQRY0",
        "param_name": "file"
      },
      "2": {
        "is_list": false,
        "btype_id": "custom.chat",
        "optional": false,
        "param_id": "bTQRj0",
        "param_name": "chat"
      },
      "3": {
        "is_list": false,
        "btype_id": "option.llm_providers__os_",
        "optional": false,
        "param_id": "bTQTz0",
        "param_name": "provider"
      },
      "4": {
        "is_list": false,
        "btype_id": "user",
        "optional": true,
        "param_id": "bTTCp",
        "param_name": "user"
      },
      "5": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTtuJ0",
        "param_name": "signed_url"
      },
      "6": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTwEI0",
        "param_name": "file_path"
      }
    },
    "return_types": {
      "0": {
        "display": "chat_file",
        "is_list": false,
        "btype_id": "custom.file",
        "optional": true,
        "return_id": "bTQSO0"
      },
      "1": {
        "display": "user_image",
        "is_list": false,
        "btype_id": "image",
        "optional": true,
        "return_id": "bTcNn"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTttr0",
  "name": "create_chat_file",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "display",
                        "is_slidable": false
                      },
                      "properties": {
                        "constraints": {
                          "0": {
                            "key": "_advanced_search_constraint",
                            "value": {
                              "next": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "args": "image",
                                      "type": "Message",
                                      "name": "contains",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "first_element",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "separator": {
                                      "entries": {
                                        "0": "/"
                                      },
                                      "type": "TextExpression"
                                    }
                                  },
                                  "type": "Message",
                                  "name": "split_by",
                                  "is_slidable": true
                                },
                                "type": "Message",
                                "name": "mime_type",
                                "is_slidable": false
                              },
                              "type": "InjectedValue",
                              "said": "a2Vsdm8tMzE4ODQ=",
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
                      "option_set": "option.file_types__os_",
                      "option_value": "all values"
                    },
                    "type": "OptionValue"
                  },
                  "type": "Message",
                  "name": "is_contained_by_list",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "last_element",
                "is_slidable": false
              },
              "properties": {
                "separator": {
                  "entries": {
                    "0": "."
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "split_by",
              "is_slidable": true
            },
            "type": "Message",
            "name": "url",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "file",
            "event_id": "bTttr0",
            "optional": false,
            "param_id": "bTQRY0",
            "param_name": "file"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "arguments": {
          "0": {
            "param_id": "bTtUz0",
            "arg_value": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "https:",
                    "1": {
                      "next": {
                        "type": "Message",
                        "name": "url",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "file",
                        "event_id": "bTttr0",
                        "optional": false,
                        "param_id": "bTQRY0",
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
            }
          },
          "1": {
            "param_id": "bTtVA0",
            "arg_value": {
              "properties": {
                "btype_id": "custom.chat",
                "event_id": "bTttr0",
                "optional": false,
                "param_id": "bTQRj0",
                "param_name": "chat"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "2": {
            "param_id": "bTwDj0",
            "arg_value": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTttr0",
                "optional": false,
                "param_id": "bTwEI0",
                "param_name": "file_path"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          }
        },
        "custom_event": "bTttd0"
      },
      "type": "TriggerCustomEvent",
      "id": "bTtuB0"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "display",
                        "is_slidable": false
                      },
                      "properties": {
                        "constraints": {
                          "0": {
                            "key": "_advanced_search_constraint",
                            "value": {
                              "next": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "args": "image",
                                      "type": "Message",
                                      "name": "not_contains",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "first_element",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "separator": {
                                      "entries": {
                                        "0": "/"
                                      },
                                      "type": "TextExpression"
                                    }
                                  },
                                  "type": "Message",
                                  "name": "split_by",
                                  "is_slidable": true
                                },
                                "type": "Message",
                                "name": "mime_type",
                                "is_slidable": false
                              },
                              "type": "InjectedValue",
                              "said": "a2Vsdm8tMzE4ODQ=",
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
                      "option_set": "option.file_types__os_",
                      "option_value": "all values"
                    },
                    "type": "OptionValue"
                  },
                  "type": "Message",
                  "name": "is_contained_by_list",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "last_element",
                "is_slidable": false
              },
              "properties": {
                "separator": {
                  "entries": {
                    "0": "."
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "split_by",
              "is_slidable": true
            },
            "type": "Message",
            "name": "url",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "file",
            "event_id": "bTttr0",
            "optional": false,
            "param_id": "bTQRY0",
            "param_name": "file"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "arguments": {
          "0": {
            "param_id": "bTcLL"
          },
          "1": {
            "param_id": "bTcLM",
            "arg_value": {
              "properties": {
                "btype_id": "option.llm_providers__os_",
                "event_id": "bTttr0",
                "optional": false,
                "param_id": "bTQTz0",
                "param_name": "provider"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "2": {
            "param_id": "bTcLf",
            "arg_value": {
              "properties": {
                "btype_id": "file",
                "event_id": "bTttr0",
                "optional": false,
                "param_id": "bTQRY0",
                "param_name": "file"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "3": {
            "param_id": "bTcNc",
            "arg_value": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "https:",
                    "1": {
                      "next": {
                        "type": "Message",
                        "name": "url",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "file",
                        "event_id": "bTttr0",
                        "optional": false,
                        "param_id": "bTQRY0",
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
              "type": "ArbitraryText",
              "said": "a2Vsdm8tMzE4ODQ="
            }
          },
          "4": {
            "param_id": "bTcNd",
            "arg_value": {
              "properties": {
                "btype_id": "custom.chat",
                "event_id": "bTttr0",
                "optional": false,
                "param_id": "bTQRj0",
                "param_name": "chat"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          }
        },
        "custom_event": "bTcLF"
      },
      "type": "TriggerCustomEvent",
      "id": "bTtuC0"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "current_workspace_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "uploaded_input_file_text",
            "value": {
              "entries": {
                "0": {
                  "type": "Empty"
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
          "next": {
            "type": "Message",
            "name": "current_workspace_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTwEV0"
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "uploaded_input_file_file",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTttr0",
            "optional": false,
            "param_id": "bTQRj0",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "uploaded_input_file_file",
            "value": {
              "entries": {
                "0": {
                  "type": "Empty"
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
            "btype_id": "custom.chat",
            "event_id": "bTttr0",
            "optional": false,
            "param_id": "bTQRj0",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTwEa0"
    },
    "4": {
      "properties": {
        "return_values": {
          "0": {
            "return_id": "bTQSO0",
            "return_value": {
              "next": {
                "next": {
                  "next": {
                    "args": {
                      "next": {
                        "type": "Message",
                        "name": "bTcNj",
                        "is_slidable": false
                      },
                      "properties": {
                        "action_id": "bTtuC0"
                      },
                      "type": "PreviousStep",
                      "is_slidable": false
                    },
                    "next": {
                      "type": "Message",
                      "name": "first_element",
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
                "name": "bTtUo0",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTtuB0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "1": {
            "return_id": "bTcNn",
            "return_value": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": {
                            "next": {
                              "next": {
                                "type": "Message",
                                "name": "bunny_url_text",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "bTtUo0",
                              "is_slidable": false
                            },
                            "properties": {
                              "action_id": "bTtuB0"
                            },
                            "type": "PreviousStep",
                            "is_slidable": false
                          }
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
                "name": "bTtUo0",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTtuB0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          }
        }
      },
      "type": "TerminateWorkflow",
      "id": "bTtuH0"
    }
  },
};
