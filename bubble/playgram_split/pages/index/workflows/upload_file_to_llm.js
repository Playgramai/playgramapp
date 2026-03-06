export const upload_file_to_llm = {
  "properties": {
    "event_name": "upload_file_to_llm",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTcLL",
        "param_name": "signed_url"
      },
      "1": {
        "is_list": false,
        "btype_id": "option.llm_providers__os_",
        "optional": false,
        "param_id": "bTcLM",
        "param_name": "provider"
      },
      "2": {
        "is_list": false,
        "btype_id": "file",
        "optional": false,
        "param_id": "bTcLf",
        "param_name": "file"
      },
      "3": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTcNc",
        "param_name": "url"
      },
      "4": {
        "is_list": false,
        "btype_id": "custom.chat",
        "optional": false,
        "param_id": "bTcNd",
        "param_name": "chat"
      }
    },
    "return_types": {
      "0": {
        "display": "chat_file",
        "is_list": false,
        "btype_id": "custom.file",
        "optional": false,
        "return_id": "bTcNj"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTcLF",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.llm_providers__os_",
                "option_value": "claude"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "option.llm_providers__os_",
            "event_id": "bTcLF",
            "optional": false,
            "param_id": "bTcLM",
            "param_name": "provider"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "params_file": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "file",
                "event_id": "bTcLF",
                "optional": false,
                "param_id": "bTcLf",
                "param_name": "file"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHER0.bTPLQ",
      "id": "bTcLN"
    },
    "1": {
      "properties": {
        "condition": {
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
                                "0": "csv,xls,xlsx"
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
                  "event_id": "bTcLF",
                  "optional": false,
                  "param_id": "bTcLf",
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
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "option.llm_providers__os_",
            "event_id": "bTcLF",
            "optional": false,
            "param_id": "bTcLM",
            "param_name": "provider"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "arguments": {
          "0": {
            "param_id": "bTtKV",
            "arg_value": {
              "properties": {
                "btype_id": "file",
                "event_id": "bTcLF",
                "optional": false,
                "param_id": "bTcLf",
                "param_name": "file"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "1": {
            "param_id": "bTtKZ"
          }
        },
        "custom_event": "bTtKP"
      },
      "type": "TriggerCustomEvent",
      "id": "bTtKN",
      "name": "Trigger upload_csv_xls"
    },
    "2": {
      "properties": {
        "condition": {
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
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "option.llm_providers__os_",
            "event_id": "bTcLF",
            "optional": false,
            "param_id": "bTcLM",
            "param_name": "provider"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "params_file": {
          "entries": {
            "0": {
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
                              "name": "bTtLu",
                              "is_slidable": false
                            },
                            "properties": {
                              "action_id": "bTtKN"
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
                            "next": {
                              "type": "Message",
                              "name": "url",
                              "is_slidable": false
                            },
                            "properties": {
                              "btype_id": "file",
                              "event_id": "bTcLF",
                              "optional": false,
                              "param_id": "bTcLf",
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
                  "name": "is_not_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "bTtLu",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTtKN"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHDh0.bTPPL",
      "id": "bTcLS"
    },
    "3": {
      "properties": {
        "condition": {
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
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "option.llm_providers__os_",
            "event_id": "bTcLF",
            "optional": false,
            "param_id": "bTcLM",
            "param_name": "provider"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "body_params_file_id": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_api_c2_body.id",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTcLS"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHDh0.bTPQr",
      "id": "bTcLX"
    },
    "4": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "_api_c2_body.id",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTcLX"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "url_to_delete": {
          "next": {
            "type": "Message",
            "name": "bTtLu",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTtKN"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "DeleteUploadedFile",
      "id": "bTtHn"
    },
    "5": {
      "properties": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.llm_providers__os_",
                "option_value": "gemini"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "option.llm_providers__os_",
            "event_id": "bTcLF",
            "optional": false,
            "param_id": "bTcLM",
            "param_name": "provider"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "arguments": {
          "0": {
            "param_id": "bTjCP",
            "arg_value": {
              "properties": {
                "btype_id": "file",
                "event_id": "bTcLF",
                "optional": false,
                "param_id": "bTcLf",
                "param_name": "file"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          }
        },
        "custom_event": "bTjCH"
      },
      "type": "TriggerCustomEvent",
      "id": "bTjCT"
    },
    "6": {
      "properties": {
        "initial_values": {
          "0": {
            "key": "bunny_url_text",
            "value": {
              "entries": {
                "0": {
                  "properties": {
                    "btype_id": "text",
                    "event_id": "bTcLF",
                    "optional": false,
                    "param_id": "bTcNc",
                    "param_name": "bunny_url"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "claude_id_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2_body.id",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTcLN"
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
          },
          "2": {
            "key": "gemini_id_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "bTjCr",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTjCT"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                },
                "1": ""
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          },
          "3": {
            "key": "openai_id_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2_body.id",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTcLS"
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
          },
          "4": {
            "key": "openai_vector_store_id_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2_body.id",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTcLX"
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
          },
          "5": {
            "key": "file_size_number",
            "value": {
              "next": {
                "type": "Message",
                "name": "bTjCs",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTjCT"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "6": {
            "key": "gemini_file_name_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "bTjCt",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTjCT"
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
          },
          "7": {
            "key": "mime_type_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "mime_type",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "first_element",
                      "is_slidable": false
                    },
                    "properties": {
                      "constraints": {
                        "0": {
                          "key": "_advanced_search_constraint",
                          "value": {
                            "next": {
                              "next": {
                                "args": {
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
                                    "event_id": "bTcLF",
                                    "optional": false,
                                    "param_id": "bTcLf",
                                    "param_name": "file"
                                  },
                                  "type": "CurrentWorkflowItem",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "equals",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "display",
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
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          },
          "8": {
            "key": "gemini_delete_scheduled_api_text",
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
          },
          "9": {
            "key": "claude_delete_scheduled_api_text",
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
          },
          "10": {
            "key": "openai_delete_scheduled_api_text",
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
          },
          "11": {
            "key": "chat_custom_chat",
            "value": {
              "properties": {
                "btype_id": "custom.chat",
                "event_id": "bTcLF",
                "optional": false,
                "param_id": "bTcNd",
                "param_name": "chat"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "12": {
            "key": "chat_type_option_chat_type__os_",
            "value": {
              "next": {
                "type": "Message",
                "name": "type_option_chat_type__os_",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.chat",
                "event_id": "bTcLF",
                "optional": false,
                "param_id": "bTcNd",
                "param_name": "chat"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "13": {
            "key": "organization_custom_organization",
            "value": {
              "next": {
                "type": "Message",
                "name": "organization_custom_organization",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.chat",
                "event_id": "bTcLF",
                "optional": false,
                "param_id": "bTcNd",
                "param_name": "chat"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "14": {
            "key": "project_custom_project",
            "value": {
              "next": {
                "type": "Message",
                "name": "project_custom_project",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.chat",
                "event_id": "bTcLF",
                "optional": false,
                "param_id": "bTcNd",
                "param_name": "chat"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          },
          "15": {
            "key": "shared_access_chat__boolean",
            "value": {
              "next": {
                "type": "Message",
                "name": "share_access_boolean",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.chat",
                "event_id": "bTcLF",
                "optional": false,
                "param_id": "bTcNd",
                "param_name": "chat"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "thing_type": "custom.file"
      },
      "type": "NewThing",
      "id": "bTcNV"
    },
    "7": {
      "properties": {
        "changes": {
          "0": {
            "key": "files_list_custom_file",
            "value": {
              "properties": {
                "action_id": "bTcNV"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "action": "add"
          }
        },
        "to_change": {
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTcLF",
            "optional": false,
            "param_id": "bTcNd",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTcNX"
    },
    "8": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTcNX"
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
        "api_event": "bTTKJ",
        "_wf_param_file": {
          "properties": {
            "action_id": "bTcNV"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "_wf_param_provider": {
          "properties": {
            "btype_id": "option.llm_providers__os_",
            "event_id": "bTcLF",
            "optional": false,
            "param_id": "bTcLM",
            "param_name": "provider"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTcNh"
    },
    "9": {
      "properties": {
        "return_values": {
          "0": {
            "return_id": "bTcNj",
            "return_value": {
              "properties": {
                "action_id": "bTcNV"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          }
        }
      },
      "type": "TerminateWorkflow",
      "id": "bTcMI"
    }
  }
};
