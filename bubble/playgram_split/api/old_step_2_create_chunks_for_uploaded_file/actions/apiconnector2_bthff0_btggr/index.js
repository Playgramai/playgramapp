export const apiconnector2_bthff0_btggr = {
  "properties": {
    "params_file": {
      "entries": {
        "0": {
          "properties": {
            "arbitrary_text": {
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
                                  "args": 24,
                                  "type": "Message",
                                  "name": "truncated",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "bunny_url_text",
                                "is_slidable": false
                              },
                              "properties": {
                                "btype_id": "custom.file",
                                "event_id": "bTghb0",
                                "optional": true,
                                "param_id": "chat_file",
                                "param_name": "chat_file"
                              },
                              "type": "APIEventParameter",
                              "is_slidable": false
                            },
                            "2": "",
                            "3": {
                              "next": {
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
                                                "event_id": "bTghb0",
                                                "param_id": "organization",
                                                "param_name": "organization"
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
                                                          "type": "Message",
                                                          "name": "chat_custom_chat",
                                                          "is_slidable": false
                                                        },
                                                        "properties": {
                                                          "btype_id": "custom.file",
                                                          "event_id": "bTghb0",
                                                          "optional": true,
                                                          "param_id": "chat_file",
                                                          "param_name": "chat_file"
                                                        },
                                                        "type": "APIEventParameter",
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
                                                                  "event_id": "bTghb0",
                                                                  "param_id": "user",
                                                                  "param_name": "user"
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
                                                                      "name": "signed_url_token_text",
                                                                      "is_slidable": false
                                                                    },
                                                                    "type": "Message",
                                                                    "name": "project_custom_project",
                                                                    "is_slidable": false
                                                                  },
                                                                  "type": "Message",
                                                                  "name": "chat_custom_chat",
                                                                  "is_slidable": false
                                                                },
                                                                "properties": {
                                                                  "btype_id": "custom.file",
                                                                  "event_id": "bTghb0",
                                                                  "optional": true,
                                                                  "param_id": "chat_file",
                                                                  "param_name": "chat_file"
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
                                                "type": "Message",
                                                "name": "chat_custom_chat",
                                                "is_slidable": false
                                              },
                                              "properties": {
                                                "btype_id": "custom.file",
                                                "event_id": "bTghb0",
                                                "optional": true,
                                                "param_id": "chat_file",
                                                "param_name": "chat_file"
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
                                    "name": "equals",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "type_option_chat_type__os_",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "chat_custom_chat"
                              },
                              "properties": {
                                "btype_id": "custom.file",
                                "event_id": "bTghb0",
                                "optional": true,
                                "param_id": "chat_file",
                                "param_name": "chat_file"
                              },
                              "type": "APIEventParameter",
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
                                            "next": {
                                              "args": 24,
                                              "type": "Message",
                                              "name": "truncated",
                                              "is_slidable": false
                                            },
                                            "type": "Message",
                                            "name": "bunny_url_text",
                                            "is_slidable": false
                                          },
                                          "properties": {
                                            "btype_id": "custom.file",
                                            "event_id": "bTghb0",
                                            "optional": true,
                                            "param_id": "chat_file",
                                            "param_name": "chat_file"
                                          },
                                          "type": "APIEventParameter",
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
                                "name": "bunny_url_text",
                                "is_slidable": false
                              },
                              "properties": {
                                "btype_id": "custom.file",
                                "event_id": "bTghb0",
                                "optional": true,
                                "param_id": "chat_file",
                                "param_name": "chat_file"
                              },
                              "type": "APIEventParameter",
                              "is_slidable": false
                            },
                            "6": ""
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
                  "properties": {
                    "btype_id": "custom.file",
                    "event_id": "bTghb0",
                    "param_id": "chat_file",
                    "param_name": "chat_file"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "1": "",
                "2": {
                  "next": {
                    "next": {
                      "properties": {
                        "formatting_for_true": {
                          "entries": {
                            "0": "",
                            "1": {
                              "next": {
                                "next": {
                                  "args": 24,
                                  "type": "Message",
                                  "name": "truncated",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "file_bunny_url_text",
                                "is_slidable": false
                              },
                              "properties": {
                                "btype_id": "custom.project_instruction_file",
                                "event_id": "bTghb0",
                                "optional": true,
                                "param_id": "project_file",
                                "param_name": "project_file"
                              },
                              "type": "APIEventParameter",
                              "is_slidable": false
                            },
                            "2": "",
                            "3": {
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
                                "btype_id": "custom.project_instruction_file",
                                "event_id": "bTghb0",
                                "optional": true,
                                "param_id": "project_file",
                                "param_name": "project_file"
                              },
                              "type": "APIEventParameter",
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
                                            "next": {
                                              "args": 24,
                                              "type": "Message",
                                              "name": "truncated",
                                              "is_slidable": false
                                            },
                                            "type": "Message",
                                            "name": "file_bunny_url_text",
                                            "is_slidable": false
                                          },
                                          "properties": {
                                            "btype_id": "custom.project_instruction_file",
                                            "event_id": "bTghb0",
                                            "optional": true,
                                            "param_id": "project_file",
                                            "param_name": "project_file"
                                          },
                                          "type": "APIEventParameter",
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
                                "name": "file_bunny_url_text",
                                "is_slidable": false
                              },
                              "properties": {
                                "btype_id": "custom.project_instruction_file",
                                "event_id": "bTghb0",
                                "optional": true,
                                "param_id": "project_file",
                                "param_name": "project_file"
                              },
                              "type": "APIEventParameter",
                              "is_slidable": false
                            },
                            "6": ""
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
                  "properties": {
                    "btype_id": "custom.project_instruction_file",
                    "event_id": "bTghb0",
                    "optional": true,
                    "param_id": "project_file",
                    "param_name": "project_file"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "3": "",
                "4": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "type": "Message",
                          "name": "is_empty",
                          "is_slidable": false
                        },
                        "properties": {
                          "btype_id": "custom.project_instruction_file",
                          "event_id": "bTghb0",
                          "optional": true,
                          "param_id": "project_file",
                          "param_name": "project_file"
                        },
                        "type": "APIEventParameter",
                        "is_slidable": false
                      },
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "",
                              "1": {
                                "properties": {
                                  "btype_id": "text",
                                  "event_id": "bTghb0",
                                  "optional": true,
                                  "param_id": "file_from_memory_knowledge",
                                  "param_name": "file_from_memory_knowledge"
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
                    "name": "is_empty",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "custom.file",
                    "event_id": "bTghb0",
                    "optional": true,
                    "param_id": "chat_file",
                    "param_name": "chat_file"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                },
                "5": ""
              },
              "type": "TextExpression"
            }
          },
          "type": "ArbitraryText"
        },
        "1": ""
      },
      "type": "TextExpression"
    },
    "url_params_upload_url": {
      "entries": {
        "0": {
          "next": {
            "type": "Message",
            "name": "_api_c2_headers.x-goog-upload-url",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTghj0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    }
  },
  "type": "apiconnector2-bTHFF0.bTggr",
  "id": "bTgho0",
};
