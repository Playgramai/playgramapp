export const actions = {
  "0": {
    "properties": {
      "initial_values": {
        "0": {
          "key": "chat_custom_chat",
          "value": {
            "properties": {
              "btype_id": "custom.chat",
              "event_id": "bTtNr0",
              "optional": false,
              "param_id": "bTTGH",
              "param_name": "chat"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          },
          "action": {
            "type": "Empty"
          }
        },
        "1": {
          "key": "context_text",
          "value": {
            "entries": {
              "0": {
                "properties": {
                  "btype_id": "text",
                  "event_id": "bTtNr0",
                  "optional": false,
                  "param_id": "bTTGI",
                  "param_name": "context"
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
        "2": {
          "key": "count_number",
          "value": {
            "next": {
              "type": "Message",
              "name": "count",
              "is_slidable": false
            },
            "properties": {
              "btype_id": "list.text",
              "event_id": "bTtNr0",
              "optional": false,
              "param_id": "bTTFv",
              "param_name": "file_id"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          },
          "action": {
            "type": "Empty"
          }
        },
        "3": {
          "key": "custom_instructions_text",
          "value": {
            "entries": {
              "0": {
                "properties": {
                  "btype_id": "text",
                  "event_id": "bTtNr0",
                  "optional": false,
                  "param_id": "bTTGN",
                  "param_name": "custom_instructions"
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
        "4": {
          "key": "embedding_tokens_number",
          "value": {
            "properties": {
              "btype_id": "number",
              "event_id": "bTtNr0",
              "optional": false,
              "param_id": "bTTGO",
              "param_name": "embedding_tokens"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          },
          "action": {
            "type": "Empty"
          }
        },
        "5": {
          "key": "enabled_tools_list_option_llm_tool__os_",
          "value": {
            "properties": {
              "btype_id": "list.option.llm_tool__os_",
              "event_id": "bTtNr0",
              "optional": false,
              "param_id": "bTTGP",
              "param_name": "enabled_tools"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          },
          "action": "set_list"
        },
        "6": {
          "key": "last_messages_text",
          "value": {
            "entries": {
              "0": {
                "properties": {
                  "btype_id": "text",
                  "event_id": "bTtNr0",
                  "optional": false,
                  "param_id": "bTTGU",
                  "param_name": "last_messages"
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
        "7": {
          "key": "memories_text",
          "value": {
            "entries": {
              "0": {
                "properties": {
                  "btype_id": "text",
                  "event_id": "bTtNr0",
                  "optional": false,
                  "param_id": "bTTGV",
                  "param_name": "memories"
                },
                "type": "CurrentWorkflowItem",
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
        "8": {
          "key": "normalization_input_number",
          "value": {
            "properties": {
              "btype_id": "text",
              "event_id": "bTtNr0",
              "optional": false,
              "param_id": "bTTGa",
              "param_name": "normalization_input"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          },
          "action": {
            "type": "Empty"
          }
        },
        "9": {
          "key": "normalization_output_number",
          "value": {
            "properties": {
              "btype_id": "number",
              "event_id": "bTtNr0",
              "optional": false,
              "param_id": "bTTGb",
              "param_name": "normalization_output"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          },
          "action": {
            "type": "Empty"
          }
        },
        "10": {
          "key": "streaming_model_option_llm_models__os_",
          "value": {
            "properties": {
              "btype_id": "option.llm_models__os_",
              "event_id": "bTtNr0",
              "optional": false,
              "param_id": "bTTGf",
              "param_name": "streaming_model"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          },
          "action": {
            "type": "Empty"
          }
        },
        "11": {
          "key": "summarization_input_number",
          "value": {
            "properties": {
              "btype_id": "number",
              "event_id": "bTtNr0",
              "optional": false,
              "param_id": "bTTGg",
              "param_name": "summarization_input"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          },
          "action": {
            "type": "Empty"
          }
        },
        "12": {
          "key": "summarization_output_number",
          "value": {
            "properties": {
              "btype_id": "number",
              "event_id": "bTtNr0",
              "optional": false,
              "param_id": "bTTGh",
              "param_name": "summarization_output"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          },
          "action": {
            "type": "Empty"
          }
        },
        "13": {
          "key": "user_message_text",
          "value": {
            "entries": {
              "0": {
                "properties": {
                  "btype_id": "text",
                  "event_id": "bTtNr0",
                  "optional": false,
                  "param_id": "bTTGm",
                  "param_name": "user_message"
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
        "14": {
          "key": "workspace_user_custom_workspace",
          "value": {
            "properties": {
              "btype_id": "custom.workspace",
              "event_id": "bTtNr0",
              "optional": false,
              "param_id": "bTTGn",
              "param_name": "Workspace_user"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          },
          "action": {
            "type": "Empty"
          }
        },
        "15": {
          "key": "file_custom_file",
          "value": {
            "properties": {
              "btype_id": "custom.file",
              "event_id": "bTtNr0",
              "optional": false,
              "param_id": "bTTGT",
              "param_name": "file"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          },
          "action": {
            "type": "Empty"
          }
        },
        "16": {
          "key": "user_message_date_date",
          "value": {
            "properties": {
              "btype_id": "date",
              "event_id": "bTtNr0",
              "optional": false,
              "param_id": "bTYTg",
              "param_name": "user_message_date"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          },
          "action": {
            "type": "Empty"
          }
        },
        "17": {
          "key": "long_term_context_text",
          "value": {
            "entries": {
              "0": {
                "properties": {
                  "btype_id": "text",
                  "event_id": "bTtNr0",
                  "optional": true,
                  "param_id": "bTiTL2",
                  "param_name": "long_term_context"
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
        "18": {
          "key": "project_context_text",
          "value": {
            "entries": {
              "0": {
                "properties": {
                  "btype_id": "text",
                  "event_id": "bTtNr0",
                  "optional": true,
                  "param_id": "bTiTP2",
                  "param_name": "project_context"
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
        "19": {
          "key": "project_instructions_text",
          "value": {
            "entries": {
              "0": {
                "properties": {
                  "btype_id": "text",
                  "event_id": "bTtNr0",
                  "optional": true,
                  "param_id": "bTiTJ2",
                  "param_name": "project_instructions"
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
        "20": {
          "key": "team_instructions_text",
          "value": {
            "entries": {
              "0": {
                "properties": {
                  "btype_id": "text",
                  "event_id": "bTtNr0",
                  "optional": true,
                  "param_id": "bTiTK2",
                  "param_name": "team_instructions"
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
        "21": {
          "key": "user_image_text",
          "value": {
            "entries": {
              "0": {
                "properties": {
                  "btype_id": "image",
                  "event_id": "bTtNr0",
                  "optional": true,
                  "param_id": "bTiRx2",
                  "param_name": "user_image"
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
        "22": {
          "key": "web_search_needed_boolean",
          "value": {
            "properties": {
              "btype_id": "boolean",
              "event_id": "bTtNr0",
              "optional": true,
              "param_id": "bTkgi0",
              "param_name": "web_search_needed"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          },
          "action": {
            "type": "Empty"
          }
        },
        "23": {
          "key": "code_interpreter_needed_boolean",
          "value": {
            "properties": {
              "btype_id": "boolean",
              "event_id": "bTtNr0",
              "optional": true,
              "param_id": "bTkgj0",
              "param_name": "code_interpreter_needed"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          },
          "action": {
            "type": "Empty"
          }
        },
        "24": {
          "key": "image_gen_needed_boolean",
          "value": {
            "properties": {
              "btype_id": "boolean",
              "event_id": "bTtNr0",
              "optional": true,
              "param_id": "bTpbj2",
              "param_name": "image_gen_needed"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          },
          "action": {
            "type": "Empty"
          }
        },
        "25": {
          "key": "sort_number",
          "value": {
            "properties": {
              "btype_id": "number",
              "event_id": "bTtNr0",
              "optional": false,
              "param_id": "bTtwB0",
              "param_name": "sort"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          },
          "action": {
            "type": "Empty"
          }
        }
      },
      "thing_type": "custom.upload_job"
    },
    "type": "NewThing",
    "id": "bTtNt0"
  },
  "1": {
    "properties": {
      "condition": {
        "next": {
          "args": "yes",
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "properties": {
          "arbitrary_text": {
            "entries": {
              "0": "",
              "1": {
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
                                  "next": {
                                    "args": {
                                      "next": {
                                        "next": {
                                          "args": 1,
                                          "type": "Message",
                                          "name": "plus_hours",
                                          "is_slidable": false
                                        },
                                        "type": "Message",
                                        "name": "get_AAV",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "element_id": "bTVPN"
                                      },
                                      "type": "GetElement",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "less_than",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "signed_url_token_date_date",
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
                                        "event_id": "bTtNr0",
                                        "optional": false,
                                        "param_id": "bTTGH",
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
                                                  "args": {
                                                    "next": {
                                                      "next": {
                                                        "args": 1,
                                                        "type": "Message",
                                                        "name": "plus_hours",
                                                        "is_slidable": false
                                                      },
                                                      "type": "Message",
                                                      "name": "get_AAV",
                                                      "is_slidable": false
                                                    },
                                                    "properties": {
                                                      "element_id": "bTVPN"
                                                    },
                                                    "type": "GetElement",
                                                    "is_slidable": false
                                                  },
                                                  "type": "Message",
                                                  "name": "less_than",
                                                  "is_slidable": false
                                                },
                                                "type": "Message",
                                                "name": "signed_url_token_date_date",
                                                "is_slidable": false
                                              },
                                              "type": "CurrentUser",
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
                                                    "args": {
                                                      "next": {
                                                        "next": {
                                                          "args": 1,
                                                          "type": "Message",
                                                          "name": "plus_hours",
                                                          "is_slidable": false
                                                        },
                                                        "type": "Message",
                                                        "name": "get_AAV",
                                                        "is_slidable": false
                                                      },
                                                      "properties": {
                                                        "element_id": "bTVPN"
                                                      },
                                                      "type": "GetElement",
                                                      "is_slidable": false
                                                    },
                                                    "type": "Message",
                                                    "name": "less_than",
                                                    "is_slidable": false
                                                  },
                                                  "type": "Message",
                                                  "name": "signed_url_token_date_date",
                                                  "is_slidable": false
                                                },
                                                "type": "Message",
                                                "name": "project_custom_project",
                                                "is_slidable": false
                                              },
                                              "properties": {
                                                "btype_id": "custom.chat",
                                                "event_id": "bTtNr0",
                                                "optional": false,
                                                "param_id": "bTTGH",
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
                                "event_id": "bTtNr0",
                                "optional": false,
                                "param_id": "bTTGH",
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
                  "event_id": "bTtNr0",
                  "optional": false,
                  "param_id": "bTTGH",
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
        "type": "ArbitraryText"
      },
      "params_url": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "properties": {
                          "find": {
                            "entries": {
                              "0": "+"
                            },
                            "type": "TextExpression"
                          },
                          "replace": {
                            "entries": {
                              "0": "%2B"
                            },
                            "type": "TextExpression"
                          }
                        },
                        "type": "Message",
                        "name": "find_replace",
                        "is_slidable": true
                      },
                      "properties": {
                        "find": {
                          "entries": {
                            "0": "@"
                          },
                          "type": "TextExpression"
                        },
                        "replace": {
                          "entries": {
                            "0": "%40"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "find_replace",
                      "is_slidable": true
                    },
                    "type": "Message",
                    "name": "bunny_url_text",
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
                              "properties": {
                                "btype_id": "list.text",
                                "event_id": "bTtNr0",
                                "optional": false,
                                "param_id": "bTTFv",
                                "param_name": "file_id"
                              },
                              "type": "CurrentWorkflowItem",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "is_contained_by_list",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "_id",
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
              "type": "Message",
              "name": "files_list_custom_file",
              "is_slidable": false
            },
            "properties": {
              "btype_id": "custom.chat",
              "event_id": "bTtNr0",
              "optional": false,
              "param_id": "bTTGH",
              "param_name": "chat"
            },
            "type": "CurrentWorkflowItem",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "params_path": {
        "entries": {
          "0": "/",
          "1": {
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
                            "name": "organization_custom_organization",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "custom.chat",
                            "event_id": "bTtNr0",
                            "optional": false,
                            "param_id": "bTTGH",
                            "param_name": "chat"
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
                                    "event_id": "bTtNr0",
                                    "optional": false,
                                    "param_id": "bTTGH",
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
                                            "name": "Created By",
                                            "is_slidable": false
                                          },
                                          "properties": {
                                            "btype_id": "custom.chat",
                                            "event_id": "bTtNr0",
                                            "optional": false,
                                            "param_id": "bTTGH",
                                            "param_name": "chat"
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
                                            "event_id": "bTtNr0",
                                            "optional": false,
                                            "param_id": "bTTGH",
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
                            "event_id": "bTtNr0",
                            "optional": false,
                            "param_id": "bTTGH",
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
              "event_id": "bTtNr0",
              "optional": false,
              "param_id": "bTTGH",
              "param_name": "chat"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          },
          "2": "/"
        },
        "type": "TextExpression"
      },
      "url_params_version": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "/version-",
                      "1": {
                        "properties": {
                          "name": "AppVersion"
                        },
                        "type": "PageData",
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
              "name": "is_true",
              "is_slidable": false
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
      },
      "url_params_app version": {
        "entries": {
          "0": {
            "properties": {
              "name": "AppVersion"
            },
            "type": "PageData",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      }
    },
    "type": "apiconnector2-bTMBs0.bTrIG1",
    "id": "bTtNx0"
  },
  "2": {
    "properties": {
      "arguments": {
        "0": {
          "param_id": "bTtBP",
          "arg_value": {
            "properties": {
              "btype_id": "option.llm_models__os_",
              "event_id": "bTtNr0",
              "optional": false,
              "param_id": "bTTGf",
              "param_name": "streaming_model"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          }
        },
        "1": {
          "param_id": "bTtBT",
          "arg_value": {
            "properties": {
              "btype_id": "custom.file",
              "event_id": "bTtNr0",
              "optional": false,
              "param_id": "bTTGT",
              "param_name": "file"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          }
        },
        "2": {
          "param_id": "bTtBU",
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
                            "name": "_api_c2_response.signed_url",
                            "is_slidable": false
                          },
                          "properties": {
                            "action_id": "bTtNx0"
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
                                "next": {
                                  "args": "yes",
                                  "type": "Message",
                                  "name": "equals",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "formatting_for_true": {
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
                                          "name": "organization_workspace_custom_organization",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "btype_id": "custom.workspace",
                                          "event_id": "bTnXb0",
                                          "optional": false,
                                          "param_id": "bTTGn",
                                          "param_name": "workspace_user"
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
                                                        "option_value": "personal"
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
                                                  "event_id": "bTnXb0",
                                                  "optional": false,
                                                  "param_id": "bTTGH",
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
                                                        "type": "CurrentUser",
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
                                                                "option_value": "project"
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
                                                                        "event_id": "bTnXb0",
                                                                        "optional": false,
                                                                        "param_id": "bTTGH",
                                                                        "param_name": "chat"
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
                                                            "name": "equals",
                                                            "is_slidable": false
                                                          },
                                                          "type": "Message",
                                                          "name": "type_option_chat_type__os_",
                                                          "is_slidable": false
                                                        },
                                                        "properties": {
                                                          "btype_id": "custom.chat",
                                                          "event_id": "bTnXb0",
                                                          "optional": false,
                                                          "param_id": "bTTGH",
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
                                          "event_id": "bTnXb0",
                                          "optional": false,
                                          "param_id": "bTTGH",
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
                            "event_id": "bTnXb0",
                            "optional": false,
                            "param_id": "bTTGH",
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
                "name": "is_not_empty",
                "is_slidable": false
              },
              "type": "Message",
              "name": "_api_c2_response.signed_url",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTtNx0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "3": {
          "param_id": "bTtFc",
          "arg_value": {
            "properties": {
              "action_id": "bTtNt0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        }
      },
      "custom_event": "bTtMv0"
    },
    "type": "TriggerCustomEvent",
    "id": "bTtNy0"
  },
  "3": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "args": 0,
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "is_empty",
                  "is_slidable": false
                },
                "properties": {
                  "name": "Current Date/Time"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "not_equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "count_number",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTtNt0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "field": "count_number",
      "custom_event": "bTnXL0",
      "workflow_thing": {
        "properties": {
          "action_id": "bTtNt0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      }
    },
    "type": "TriggerCustomOnChange",
    "id": "bTtNz0",
    "name": "Trigger new_upload_job_finished when a Upload Job's count changes"
  },
  "4": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "args": 0,
            "type": "Message",
            "name": "not_equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "count_number",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTtNt0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "arguments": {
        "0": {
          "param_id": "bTTHn",
          "arg_value": {
            "properties": {
              "action_id": "bTtNt0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        }
      },
      "custom_event": "bTnXL0"
    },
    "type": "TriggerCustomEvent",
    "id": "bTtOD0"
  },
  "5": {
    "properties": {
      "return_values": {
        "0": {
          "return_id": "bTVCJ0",
          "return_value": true
        }
      }
    },
    "type": "TerminateWorkflow",
    "id": "bTtOE0"
  }
};
