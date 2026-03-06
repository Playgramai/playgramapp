export const triggercustomevent_1 = {
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
                              "args": "image",
                              "type": "Message",
                              "name": "not_contains",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "mime_type",
                            "is_slidable": false
                          },
                          "type": "InjectedValue",
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
        "event_id": "bTcKR",
        "optional": false,
        "param_id": "bTQRY0",
        "param_name": "file"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    },
    "arguments": {
      "0": {
        "param_id": "bTcLL",
        "arg_value": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "",
                      "1": {
                        "next": {
                          "type": "Message",
                          "name": "bTcRR0",
                          "is_slidable": false
                        },
                        "properties": {
                          "action_id": "bTcRX0"
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
                                        "0": "https://playgram-version-test.b-cdn.net"
                                      },
                                      "type": "TextExpression"
                                    },
                                    "formatting_for_false": {
                                      "entries": {
                                        "0": "https://frala.b-cdn.net"
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
                                "is_slidable": false
                              },
                              "2": "",
                              "3": {
                                "next": {
                                  "next": {
                                    "args": {
                                      "properties": {
                                        "option_set": "option.chat_type__os_",
                                        "option_value": "team"
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
                                                "type": "Message",
                                                "name": "signed_url_token_text",
                                                "is_slidable": false
                                              },
                                              "properties": {
                                                "btype_id": "custom.organization",
                                                "event_id": "bTcKR",
                                                "optional": false,
                                                "param_id": "bTQRX0",
                                                "param_name": "organization"
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
                                                "next": {
                                                  "args": {
                                                    "properties": {
                                                      "option_set": "option.chat_type__os_",
                                                      "option_value": "personal"
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
                                                              "option_set": "option.chat_type__os_",
                                                              "option_value": "temporary"
                                                            },
                                                            "type": "OneOptionValue",
                                                            "is_slidable": false
                                                          },
                                                          "type": "Message",
                                                          "name": "equals",
                                                          "is_slidable": false
                                                        },
                                                        "type": "Message",
                                                        "name": "type_option_chat_type__os_",
                                                        "is_slidable": false
                                                      },
                                                      "properties": {
                                                        "btype_id": "custom.chat",
                                                        "event_id": "bTcKR",
                                                        "optional": false,
                                                        "param_id": "bTQRj0",
                                                        "param_name": "chat"
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
                                                                "name": "signed_url_token_text",
                                                                "is_slidable": false
                                                              },
                                                              "properties": {
                                                                "btype_id": "user",
                                                                "event_id": "bTcKR",
                                                                "optional": true,
                                                                "param_id": "bTTCp",
                                                                "param_name": "user"
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
                                                                "next": {
                                                                  "type": "Message",
                                                                  "name": "signed_url_token_text",
                                                                  "is_slidable": false
                                                                },
                                                                "type": "Message",
                                                                "name": "project_custom_project",
                                                                "is_slidable": false
                                                              },
                                                              "properties": {
                                                                "btype_id": "custom.chat",
                                                                "event_id": "bTcKR",
                                                                "optional": false,
                                                                "param_id": "bTQRj0",
                                                                "param_name": "chat"
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
                                                "type": "Message",
                                                "name": "type_option_chat_type__os_",
                                                "is_slidable": false
                                              },
                                              "properties": {
                                                "btype_id": "custom.chat",
                                                "event_id": "bTcKR",
                                                "optional": false,
                                                "param_id": "bTQRj0",
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
                                      "type": "Message",
                                      "name": "format_boolean",
                                      "is_slidable": true
                                    },
                                    "type": "Message",
                                    "name": "equals",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "type_option_chat_type__os_",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "btype_id": "custom.chat",
                                  "event_id": "bTcKR",
                                  "optional": false,
                                  "param_id": "bTQRj0",
                                  "param_name": "chat"
                                },
                                "type": "CurrentWorkflowItem",
                                "said": "a2Vsdm8tMzE4ODQ=",
                                "is_slidable": false
                              },
                              "4": "/",
                              "5": {
                                "next": {
                                  "next": {
                                    "args": {
                                      "properties": {
                                        "option_set": "option.chat_type__os_",
                                        "option_value": "team"
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
                                                  "properties": {
                                                    "formatting_type": "url_encode",
                                                    "replace_space": false
                                                  },
                                                  "type": "Message",
                                                  "name": "format_text",
                                                  "is_slidable": true
                                                },
                                                "type": "Message",
                                                "name": "bunny_folder_text",
                                                "is_slidable": false
                                              },
                                              "properties": {
                                                "btype_id": "custom.organization",
                                                "event_id": "bTcKR",
                                                "optional": false,
                                                "param_id": "bTQRX0",
                                                "param_name": "organization"
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
                                                "next": {
                                                  "args": {
                                                    "properties": {
                                                      "option_set": "option.chat_type__os_",
                                                      "option_value": "personal"
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
                                                              "option_set": "option.chat_type__os_",
                                                              "option_value": "temporary"
                                                            },
                                                            "type": "OneOptionValue",
                                                            "is_slidable": false
                                                          },
                                                          "type": "Message",
                                                          "name": "equals",
                                                          "is_slidable": false
                                                        },
                                                        "type": "Message",
                                                        "name": "type_option_chat_type__os_",
                                                        "is_slidable": false
                                                      },
                                                      "properties": {
                                                        "btype_id": "custom.chat",
                                                        "event_id": "bTcKR",
                                                        "optional": false,
                                                        "param_id": "bTQRj0",
                                                        "param_name": "chat"
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
                                                                  "properties": {
                                                                    "formatting_type": "url_encode",
                                                                    "replace_space": false
                                                                  },
                                                                  "type": "Message",
                                                                  "name": "format_text",
                                                                  "is_slidable": true
                                                                },
                                                                "type": "Message",
                                                                "name": "bunny_folder_text",
                                                                "is_slidable": false
                                                              },
                                                              "properties": {
                                                                "btype_id": "user",
                                                                "event_id": "bTcKR",
                                                                "optional": true,
                                                                "param_id": "bTTCp",
                                                                "param_name": "user"
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
                                                                "next": {
                                                                  "next": {
                                                                    "properties": {
                                                                      "formatting_type": "url_encode",
                                                                      "replace_space": false
                                                                    },
                                                                    "type": "Message",
                                                                    "name": "format_text",
                                                                    "is_slidable": true
                                                                  },
                                                                  "type": "Message",
                                                                  "name": "bunny_folder_text",
                                                                  "is_slidable": false
                                                                },
                                                                "type": "Message",
                                                                "name": "project_custom_project",
                                                                "is_slidable": false
                                                              },
                                                              "properties": {
                                                                "btype_id": "custom.chat",
                                                                "event_id": "bTcKR",
                                                                "optional": false,
                                                                "param_id": "bTQRj0",
                                                                "param_name": "chat"
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
                                                "type": "Message",
                                                "name": "type_option_chat_type__os_",
                                                "is_slidable": false
                                              },
                                              "properties": {
                                                "btype_id": "custom.chat",
                                                "event_id": "bTcKR",
                                                "optional": false,
                                                "param_id": "bTQRj0",
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
                                      "type": "Message",
                                      "name": "format_boolean",
                                      "is_slidable": true
                                    },
                                    "type": "Message",
                                    "name": "equals",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "type_option_chat_type__os_",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "btype_id": "custom.chat",
                                  "event_id": "bTcKR",
                                  "optional": false,
                                  "param_id": "bTQRj0",
                                  "param_name": "chat"
                                },
                                "type": "CurrentWorkflowItem",
                                "said": "a2Vsdm8tMzE4ODQ=",
                                "is_slidable": false
                              },
                              "6": "/",
                              "7": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "type": "Message",
                                      "name": "last_element",
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
                                  "name": "url",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "btype_id": "file",
                                  "event_id": "bTcKR",
                                  "optional": false,
                                  "param_id": "bTQRY0",
                                  "param_name": "file"
                                },
                                "type": "CurrentWorkflowItem",
                                "is_slidable": false
                              },
                              "8": ""
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
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "bTcRR0",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTcRX0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "1": {
        "param_id": "bTcLM",
        "arg_value": {
          "properties": {
            "btype_id": "option.llm_providers__os_",
            "event_id": "bTcKR",
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
            "event_id": "bTcKR",
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
          "next": {
            "type": "Message",
            "name": "_api_c2_body.response.file_url",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTrTt0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "4": {
        "param_id": "bTcNd",
        "arg_value": {
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTcKR",
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
  "id": "bTcLA"
};
