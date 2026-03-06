export const apiconnector2_btmbs0_btrig1 = {
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
};
