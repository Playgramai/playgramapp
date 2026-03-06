export const apiconnector2_btmbs0_btrsm0 = {
  "properties": {
    "params_path": {
      "entries": {
        "0": {
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
        }
      },
      "type": "TextExpression"
    },
    "params_base64": {
      "entries": {
        "0": ""
      },
      "type": "TextExpression"
    },
    "params_file_url": {
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
            "event_id": "bTcKR",
            "optional": false,
            "param_id": "bTQRY0",
            "param_name": "file"
          },
          "type": "CurrentWorkflowItem",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    },
    "params_file_name": {
      "entries": {
        "0": {
          "properties": {
            "arbitrary_text": {
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
                    "name": "file_name",
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
                "2": "_",
                "3": {
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
                "4": ".",
                "5": {
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
                    "name": "file_name",
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
  "type": "apiconnector2-bTMBs0.bTrSm0",
  "id": "bTrTt0"
};
