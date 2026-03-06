export const actions = {
  "0": {
    "properties": {
      "headers_displayName": {
        "entries": {
          "0": {
            "properties": {
              "arbitrary_text": {
                "entries": {
                  "0": "",
                  "1": {
                    "next": {
                      "type": "Message",
                      "name": "_id",
                      "is_slidable": false
                    },
                    "properties": {
                      "btype_id": "custom.file",
                      "event_id": "bTghb0",
                      "param_id": "chat_file",
                      "param_name": "chat_file"
                    },
                    "type": "APIEventParameter",
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  },
                  "2": "",
                  "3": {
                    "next": {
                      "type": "Message",
                      "name": "_id",
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
                  "4": "",
                  "5": {
                    "next": {
                      "properties": {
                        "component_to_extract": "UNIX"
                      },
                      "type": "Message",
                      "name": "extract_from_date",
                      "is_slidable": true
                    },
                    "properties": {
                      "name": "Current Date/Time"
                    },
                    "type": "PageData",
                    "is_slidable": false
                  },
                  "6": ""
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
    "type": "apiconnector2-bTHFF0.bTgfk",
    "id": "bTghh0"
  },
  "1": {
    "properties": {
      "url_params_store_name": {
        "entries": {
          "0": {
            "next": {
              "type": "Message",
              "name": "_api_c2_body.name",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTghh0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "headers_X-Goog-Upload-Header-Content-Type": {
        "entries": {
          "0": {
            "properties": {
              "arbitrary_text": {
                "entries": {
                  "0": "",
                  "1": {
                    "next": {
                      "type": "Message",
                      "name": "mime_type_text",
                      "is_slidable": false
                    },
                    "properties": {
                      "btype_id": "custom.file",
                      "event_id": "bTghb0",
                      "param_id": "chat_file",
                      "param_name": "chat_file"
                    },
                    "type": "APIEventParameter",
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  },
                  "2": "",
                  "3": {
                    "next": {
                      "type": "Message",
                      "name": "mime_type_text",
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
                  "4": "",
                  "5": {
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
                                  "type": "OptionValue",
                                  "said": "a2Vsdm8tMzE4ODQ="
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
                  "6": ""
                },
                "type": "TextExpression"
              }
            },
            "type": "ArbitraryText"
          }
        },
        "type": "TextExpression"
      },
      "headers_X-Goog-Upload-Header-Content-Length": {
        "entries": {
          "0": "1"
        },
        "type": "TextExpression"
      }
    },
    "type": "apiconnector2-bTHFF0.bTggf",
    "id": "bTghj0"
  },
  "2": {
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
    "id": "bTgho0"
  },
  "3": {
    "properties": {
      "url_params_store_name": {
        "entries": {
          "0": {
            "next": {
              "type": "Message",
              "name": "_api_c2_body.name",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTghh0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "headers_X-Goog-Upload-Header-Content-Type": {
        "entries": {
          "0": {
            "properties": {
              "arbitrary_text": {
                "entries": {
                  "0": "",
                  "1": {
                    "next": {
                      "type": "Message",
                      "name": "mime_type_text",
                      "is_slidable": false
                    },
                    "properties": {
                      "btype_id": "custom.file",
                      "event_id": "bTghb0",
                      "param_id": "chat_file",
                      "param_name": "chat_file"
                    },
                    "type": "APIEventParameter",
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  },
                  "2": "",
                  "3": {
                    "next": {
                      "type": "Message",
                      "name": "mime_type_text",
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
                  "4": "",
                  "5": {
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
                                  "type": "OptionValue",
                                  "said": "a2Vsdm8tMzE4ODQ="
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
                  "6": ""
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
      "headers_X-Goog-Upload-Header-Content-Length": {
        "entries": {
          "0": "",
          "1": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "properties": {
                  "regex": {
                    "entries": {
                      "0": "(?<=Current size is )\\d+"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "extract_regex",
                "is_slidable": true
              },
              "type": "Message",
              "name": "_api_c2_error.body",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTgho0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          },
          "2": ""
        },
        "type": "TextExpression"
      }
    },
    "type": "apiconnector2-bTHFF0.bTggf",
    "id": "bTgiL0"
  },
  "4": {
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
            "type": "ArbitraryText",
            "said": "a2Vsdm8tMzE4ODQ="
          }
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
              "action_id": "bTgiL0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      }
    },
    "type": "apiconnector2-bTHFF0.bTggr",
    "id": "bTgiN0"
  },
  "5": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "type": "Message",
          "name": "_api_c2_body.name",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTgiN0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "body_params_store_name": {
        "entries": {
          "0": {
            "next": {
              "type": "Message",
              "name": "_api_c2_body.name",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTghh0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      }
    },
    "type": "apiconnector2-bTHFF0.bTggz",
    "id": "bTgiS0"
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
                    "type": "Message",
                    "name": "is_not_empty",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "_api_c2_retrievedContext.text",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "type": "Message",
              "name": "_api_c2_groundingMetadata.groundingChunks",
              "is_slidable": false
            },
            "type": "Message",
            "name": "first_element",
            "is_slidable": false
          },
          "type": "Message",
          "name": "_api_c2_body.candidates",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTgiS0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "data_source": {
        "next": {
          "next": {
            "next": {
              "type": "Message",
              "name": "_api_c2_retrievedContext.text",
              "is_slidable": false
            },
            "type": "Message",
            "name": "_api_c2_groundingMetadata.groundingChunks",
            "is_slidable": false
          },
          "type": "Message",
          "name": "_api_c2_body.candidates",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTgiS0"
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
      "api_event": "bTStp0",
      "type_of_list": "text",
      "_wf_param_file": {
        "entries": {
          "0": {
            "next": {
              "type": "Message",
              "name": "bunny_url_text",
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
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_text": {
        "entries": {
          "0": {
            "type": "InjectedValue",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_project": {
        "next": {
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
      "_wf_param_file_url": {
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
                            "properties": {
                              "formatting_for_true": {
                                "entries": {
                                  "0": "",
                                  "1": {
                                    "next": {
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
              "btype_id": "custom.file",
              "event_id": "bTghb0",
              "param_id": "chat_file",
              "param_name": "chat_file"
            },
            "type": "APIEventParameter",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_last_file": {
        "entries": {
          "0": {
            "properties": {
              "btype_id": "text",
              "event_id": "bTghb0",
              "param_id": "last_file",
              "param_name": "last_file"
            },
            "type": "APIEventParameter",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_last_chunk": {
        "entries": {
          "0": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "last_element",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "_api_c2_retrievedContext.text",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "_api_c2_groundingMetadata.groundingChunks",
                "is_slidable": false
              },
              "type": "Message",
              "name": "_api_c2_body.candidates",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTgiS0"
            },
            "type": "PreviousStep",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_document_id": {
        "entries": {
          "0": {
            "properties": {
              "btype_id": "text",
              "event_id": "bTghb0",
              "param_id": "document_id",
              "param_name": "document_id"
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
            "properties": {
              "btype_id": "text",
              "event_id": "bTghb0",
              "param_id": "tenant_name",
              "param_name": "tenant_name"
            },
            "type": "APIEventParameter",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "_wf_param_current_user": {
        "properties": {
          "btype_id": "user",
          "event_id": "bTghb0",
          "param_id": "user",
          "param_name": "user"
        },
        "type": "APIEventParameter",
        "is_slidable": false
      },
      "_wf_param_organization": {
        "properties": {
          "btype_id": "custom.organization",
          "event_id": "bTghb0",
          "param_id": "organization",
          "param_name": "organization"
        },
        "type": "APIEventParameter",
        "is_slidable": false
      },
      "_wf_param_workspace_id": {
        "properties": {
          "btype_id": "custom.workspace",
          "event_id": "bTghb0",
          "param_id": "workspace_id",
          "param_name": "workspace_id"
        },
        "type": "APIEventParameter",
        "is_slidable": false
      },
      "_wf_param_workspace_user": {
        "properties": {
          "btype_id": "custom.workspace",
          "event_id": "bTghb0",
          "param_id": "workspace_user",
          "param_name": "workspace_user"
        },
        "type": "APIEventParameter",
        "is_slidable": false
      }
    },
    "type": "ScheduleAPIEventOnList",
    "id": "bTgiX0",
    "name": "Schedule API Workflow save_chunks_to_weaviate on a list"
  },
  "7": {
    "properties": {
      "condition": {
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
          "action_id": "bTgiX0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "url_params_document_name": {
        "entries": {
          "0": {
            "next": {
              "type": "Message",
              "name": "_api_c2_body.name",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTgiN0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      }
    },
    "type": "apiconnector2-bTHFF0.bTghF",
    "id": "bThdu1"
  },
  "8": {
    "properties": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_false",
            "is_slidable": false
          },
          "type": "Message",
          "name": "_api_c2_returned_an_error",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bThdu1"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "url_params_store_name": {
        "entries": {
          "0": {
            "next": {
              "type": "Message",
              "name": "_api_c2_body.name",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTghh0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      }
    },
    "type": "apiconnector2-bTHFF0.bTghP",
    "id": "bTheR1"
  },
  "9": {
    "properties": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_not_empty",
          "is_slidable": false
        },
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
      "url_to_delete": {
        "properties": {
          "btype_id": "text",
          "event_id": "bTghb0",
          "optional": true,
          "param_id": "file_from_memory_knowledge",
          "param_name": "file_from_memory_knowledge"
        },
        "type": "APIEventParameter",
        "is_slidable": false
      }
    },
    "type": "DeleteUploadedFile",
    "id": "bTjvB0"
  }
};
