export const entries = {
  "0": "",
  "1": {
    "next": {
      "args": {
        "properties": {
          "option_set": "option.llm_tool__os_",
          "option_value": "web_search"
        },
        "type": "OneOptionValue",
        "is_slidable": false
      },
      "next": {
        "properties": {
          "formatting_for_true": {
            "entries": {
              "0": "tools: [{google_search: {}}],"
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
      "name": "contains",
      "is_slidable": false
    },
    "properties": {
      "btype_id": "list.option.llm_tool__os_",
      "event_id": "bTlOF0",
      "optional": true,
      "param_id": "bTPGl0",
      "param_name": "enabled_tools"
    },
    "type": "CurrentWorkflowItem",
    "said": "a2Vsdm8tMzE4ODQ=",
    "is_slidable": false
  },
  "2": "",
  "4": "\n\ncontents: [\n{role: \"system\",\n      parts: [{text: ",
  "5": {
    "properties": {
      "btype_id": "text",
      "event_id": "bTnWy0",
      "optional": false,
      "param_id": "bTkFz2",
      "param_name": "system_prompt"
    },
    "type": "CurrentWorkflowItem",
    "is_slidable": false
  },
  "6": "}]\n},",
  "7": {
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
                      "properties": {
                        "find": {
                          "entries": {
                            "0": "null"
                          },
                          "type": "TextExpression"
                        },
                        "replace": {
                          "entries": {
                            "0": "generated image"
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
                          "0": "parts: [,{ text:"
                        },
                        "type": "TextExpression"
                      },
                      "replace": {
                        "entries": {
                          "0": "parts: [{ text:"
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
                        "0": "\\{\\s*inline_data\\s*:\\s*\\{\\s*mime_type\\s*:\\s*\"image\\/[^\"]*\"\\s*,\\s*data\\s*:\\s*\"[^\"]*\"\\s*\\}\\s*\\}"
                      },
                      "type": "TextExpression"
                    },
                    "use_regex": true
                  },
                  "type": "Message",
                  "name": "find_replace",
                  "is_slidable": true
                },
                "properties": {
                  "btype_id": "text",
                  "event_id": "bTnWy0",
                  "optional": true,
                  "param_id": "bTHfj",
                  "param_name": "last_messages"
                },
                "type": "CurrentWorkflowItem",
                "is_slidable": false
              },
              "2": ","
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
      "btype_id": "text",
      "event_id": "bTnWy0",
      "optional": true,
      "param_id": "bTHfj",
      "param_name": "last_messages"
    },
    "type": "CurrentWorkflowItem",
    "is_slidable": false
  },
  "8": "\n    {\"role\": \"user\",\n      parts: [",
  "10": "\n        {\n          text: prompt\n        }",
  "11": {
    "properties": {
      "arbitrary_text": {
        "entries": {
          "0": "",
          "1": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.llm_tool__os_",
                  "option_value": "image_generation"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "type": "Message",
                          "name": "is_not_empty",
                          "is_slidable": false
                        },
                        "properties": {
                          "btype_id": "custom.file",
                          "event_id": "bTnWy0",
                          "optional": true,
                          "param_id": "bTQSV0",
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
                    "name": "is_empty",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "image",
                    "event_id": "bTnWy0",
                    "optional": true,
                    "param_id": "bTcNt",
                    "param_name": "user_image"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                },
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": {
                          "next": {
                            "next": {
                              "args": "image",
                              "next": {
                                "properties": {
                                  "formatting_for_true": {
                                    "entries": {
                                      "0": ", {\n        \"fileData\": {\n          \"mimeType\": \"",
                                      "1": {
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
                                                    "0": "text/csv,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/json,application/typescript,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                                  },
                                                  "type": "TextExpression"
                                                }
                                              },
                                              "type": "ArbitraryText"
                                            },
                                            "next": {
                                              "properties": {
                                                "formatting_for_true": {
                                                  "entries": {
                                                    "0": "text/plain"
                                                  },
                                                  "type": "TextExpression"
                                                },
                                                "formatting_for_false": {
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
                                                        "event_id": "bTnWy0",
                                                        "optional": true,
                                                        "param_id": "bTQSV0",
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
                                            "name": "is_contained_by_list",
                                            "is_slidable": false
                                          },
                                          "type": "Message",
                                          "name": "mime_type_text",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "btype_id": "custom.file",
                                          "event_id": "bTnWy0",
                                          "optional": true,
                                          "param_id": "bTQSV0",
                                          "param_name": "file"
                                        },
                                        "type": "CurrentWorkflowItem",
                                        "is_slidable": false
                                      },
                                      "2": "\",\n          \"fileUri\": \"",
                                      "3": {
                                        "next": {
                                          "type": "Message",
                                          "name": "gemini_id_text",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "btype_id": "custom.file",
                                          "event_id": "bTnWy0",
                                          "optional": true,
                                          "param_id": "bTQSV0",
                                          "param_name": "file"
                                        },
                                        "type": "CurrentWorkflowItem",
                                        "is_slidable": false
                                      },
                                      "4": "\"\n        }\n      }"
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
                              "name": "not_contains",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "mime_type_text",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "custom.file",
                            "event_id": "bTnWy0",
                            "optional": true,
                            "param_id": "bTQSV0",
                            "param_name": "file"
                          },
                          "type": "CurrentWorkflowItem",
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
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "not_contains",
              "is_slidable": false
            },
            "properties": {
              "btype_id": "list.option.llm_tool__os_",
              "event_id": "bTnWy0",
              "optional": true,
              "param_id": "bTPGl0",
              "param_name": "enabled_tools"
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
    "type": "ArbitraryText"
  },
  "12": " ",
  "13": {
    "properties": {
      "arbitrary_text": {
        "entries": {
          "0": "",
          "1": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.llm_tool__os_",
                  "option_value": "image_generation"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "type": "Message",
                          "name": "is_not_empty",
                          "is_slidable": false
                        },
                        "properties": {
                          "btype_id": "custom.file",
                          "event_id": "bTnWy0",
                          "optional": true,
                          "param_id": "bTQSV0",
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
                    "name": "is_not_empty",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "image",
                    "event_id": "bTnWy0",
                    "optional": true,
                    "param_id": "bTcNt",
                    "param_name": "user_image"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                },
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": ", {\n        \"fileData\": {\n          \"mimeType\": \"image/",
                        "1": {
                          "next": {
                            "next": {
                              "next": {
                                "properties": {
                                  "formatting_for_true": {
                                    "entries": {
                                      "0": "png"
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
                                              "next": {
                                                "properties": {
                                                  "find": {
                                                    "entries": {
                                                      "0": "jpg"
                                                    },
                                                    "type": "TextExpression"
                                                  },
                                                  "replace": {
                                                    "entries": {
                                                      "0": "jpeg"
                                                    },
                                                    "type": "TextExpression"
                                                  }
                                                },
                                                "type": "Message",
                                                "name": "find_replace",
                                                "is_slidable": true
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
                                          "name": "bunny_url_text",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "btype_id": "custom.file",
                                          "event_id": "bTnWy0",
                                          "optional": true,
                                          "param_id": "bTQSV0",
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
                            "name": "png_image_text",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "custom.file",
                            "event_id": "bTnWy0",
                            "optional": true,
                            "param_id": "bTQSV0",
                            "param_name": "file"
                          },
                          "type": "CurrentWorkflowItem",
                          "is_slidable": false
                        },
                        "2": "\",\n          \"fileUri\": \"",
                        "3": {
                          "properties": {
                            "arbitrary_text": {
                              "entries": {
                                "0": "",
                                "1": {
                                  "next": {
                                    "properties": {
                                      "formatting_for_true": {
                                        "entries": {
                                          "0": "https://playgram-version-test.b-cdn.net/"
                                        },
                                        "type": "TextExpression"
                                      },
                                      "formatting_for_false": {
                                        "entries": {
                                          "0": "https://frala.b-cdn.net/"
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
                                  "said": "a2Vsdm8tMzE4ODQ=",
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
                                                  "next": {
                                                    "type": "Message",
                                                    "name": "signed_url_token_text",
                                                    "is_slidable": false
                                                  },
                                                  "type": "Message",
                                                  "name": "organization_custom_organization",
                                                  "is_slidable": false
                                                },
                                                "properties": {
                                                  "btype_id": "custom.chat",
                                                  "event_id": "bTnWy0",
                                                  "optional": false,
                                                  "param_id": "bTPGd",
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
                                                          "event_id": "bTnWy0",
                                                          "optional": false,
                                                          "param_id": "bTPGd",
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
                                                                  "event_id": "bTnWy0",
                                                                  "optional": false,
                                                                  "param_id": "bTPGd",
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
                                                  "event_id": "bTnWy0",
                                                  "optional": false,
                                                  "param_id": "bTPGd",
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
                                    "event_id": "bTnWy0",
                                    "optional": false,
                                    "param_id": "bTPGd",
                                    "param_name": "chat"
                                  },
                                  "type": "CurrentWorkflowItem",
                                  "is_slidable": false
                                },
                                "4": "/",
                                "5": {
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
                                                    "properties": {
                                                      "find": {
                                                        "entries": {
                                                          "0": "",
                                                          "1": {
                                                            "next": {
                                                              "properties": {
                                                                "formatting_for_true": {
                                                                  "entries": {
                                                                    "0": "https://playgram-version-test.b-cdn.net/"
                                                                  },
                                                                  "type": "TextExpression"
                                                                },
                                                                "formatting_for_false": {
                                                                  "entries": {
                                                                    "0": "https://frala.b-cdn.net/"
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
                                                            "said": "a2Vsdm8tMzE4ODQ=",
                                                            "is_slidable": false
                                                          },
                                                          "2": ""
                                                        },
                                                        "type": "TextExpression"
                                                      }
                                                    },
                                                    "type": "Message",
                                                    "name": "find_replace",
                                                    "is_slidable": true
                                                  },
                                                  "type": "Message",
                                                  "name": "png_image_text",
                                                  "is_slidable": false
                                                },
                                                "properties": {
                                                  "btype_id": "custom.file",
                                                  "event_id": "bTnWy0",
                                                  "optional": true,
                                                  "param_id": "bTQSV0",
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
                                              "0": "",
                                              "1": {
                                                "next": {
                                                  "next": {
                                                    "properties": {
                                                      "find": {
                                                        "entries": {
                                                          "0": {
                                                            "next": {
                                                              "properties": {
                                                                "formatting_for_true": {
                                                                  "entries": {
                                                                    "0": "https://playgram-version-test.b-cdn.net/"
                                                                  },
                                                                  "type": "TextExpression"
                                                                },
                                                                "formatting_for_false": {
                                                                  "entries": {
                                                                    "0": "https://frala.b-cdn.net/"
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
                                                  "name": "url",
                                                  "is_slidable": false
                                                },
                                                "properties": {
                                                  "btype_id": "image",
                                                  "event_id": "bTnWy0",
                                                  "optional": true,
                                                  "param_id": "bTcNt",
                                                  "param_name": "user_image"
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
                                    "name": "png_image_text",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "btype_id": "custom.file",
                                    "event_id": "bTnWy0",
                                    "optional": true,
                                    "param_id": "bTQSV0",
                                    "param_name": "file"
                                  },
                                  "type": "CurrentWorkflowItem",
                                  "is_slidable": false
                                },
                                "6": ""
                              },
                              "type": "TextExpression",
                              "said": "a2Vsdm8tMzE4ODQ="
                            }
                          },
                          "type": "ArbitraryText"
                        },
                        "4": "\"\n        }\n      }"
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
            "properties": {
              "btype_id": "list.option.llm_tool__os_",
              "event_id": "bTnWy0",
              "optional": true,
              "param_id": "bTPGl0",
              "param_name": "enabled_tools"
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
    "type": "ArbitraryText"
  },
  "14": "\n      ]\n    }\n  ]\n",
  "15": {
    "next": {
      "next": {
        "properties": {
          "formatting_for_true": {
            "entries": {
              "0": ",\n  tools: [\n    {\n      code_execution: {\n      }\n    }\n  ],\n  tool_config: {\n    function_calling_config: {\n      mode: \"ANY\" \n    }\n  }"
            },
            "type": "TextExpression"
          },
          "formatting_for_false": {
            "entries": {
              "0": {
                "next": {
                  "args": {
                    "properties": {
                      "option_set": "option.llm_models__os_",
                      "option_value": "gemini_3_flash"
                    },
                    "type": "OneOptionValue",
                    "is_slidable": false
                  },
                  "next": {
                    "args": {
                      "next": {
                        "args": {
                          "properties": {
                            "option_set": "option.llm_models__os_",
                            "option_value": "gemini_3_pro"
                          },
                          "type": "OneOptionValue",
                          "is_slidable": false
                        },
                        "next": {
                          "args": {
                            "next": {
                              "args": {
                                "properties": {
                                  "option_set": "option.llm_tool__os_",
                                  "option_value": "image_generation"
                                },
                                "type": "OneOptionValue",
                                "is_slidable": false
                              },
                              "next": {
                                "args": {
                                  "next": {
                                    "type": "Message",
                                    "name": "is_false",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "btype_id": "boolean",
                                    "event_id": "bTnWy0",
                                    "optional": false,
                                    "param_id": "bTpbc1",
                                    "param_name": "image_gen_needed"
                                  },
                                  "type": "CurrentWorkflowItem",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "and_",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "not_contains",
                              "is_slidable": false
                            },
                            "properties": {
                              "btype_id": "list.option.llm_tool__os_",
                              "event_id": "bTnWy0",
                              "optional": true,
                              "param_id": "bTPGl0",
                              "param_name": "enabled_tools"
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
                        "btype_id": "option.llm_models__os_",
                        "event_id": "bTnWy0",
                        "optional": false,
                        "param_id": "bTPyv",
                        "param_name": "streaming_model"
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
                                "args": {
                                  "properties": {
                                    "option_set": "option.llm_tool__os_",
                                    "option_value": "reasoning"
                                  },
                                  "type": "OneOptionValue",
                                  "is_slidable": false
                                },
                                "next": {
                                  "properties": {
                                    "formatting_for_true": {
                                      "entries": {
                                        "0": ", generationConfig: { thinkingConfig: { thinkingLevel: \"high\" } },\n"
                                      },
                                      "type": "TextExpression"
                                    },
                                    "formatting_for_false": {
                                      "entries": {
                                        "0": "",
                                        "1": {
                                          "next": {
                                            "args": {
                                              "properties": {
                                                "option_set": "option.llm_models__os_",
                                                "option_value": "gemini_3_flash"
                                              },
                                              "type": "OneOptionValue",
                                              "is_slidable": false
                                            },
                                            "next": {
                                              "properties": {
                                                "formatting_for_true": {
                                                  "entries": {
                                                    "0": ", generationConfig: { thinkingConfig: { thinkingLevel: \"minimal\" } }"
                                                  },
                                                  "type": "TextExpression"
                                                },
                                                "formatting_for_false": {
                                                  "entries": {
                                                    "0": ", generationConfig: { thinkingConfig: { thinkingLevel: \"low\" } }\n"
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
                                          "properties": {
                                            "btype_id": "option.llm_models__os_",
                                            "event_id": "bTnWy0",
                                            "optional": false,
                                            "param_id": "bTPyv",
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
                                "name": "contains",
                                "is_slidable": false
                              },
                              "properties": {
                                "btype_id": "list.option.llm_tool__os_",
                                "event_id": "bTlOF0",
                                "optional": true,
                                "param_id": "bTPGl0",
                                "param_name": "enabled_tools"
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
                                "args": {
                                  "properties": {
                                    "option_set": "option.llm_tool__os_",
                                    "option_value": "reasoning"
                                  },
                                  "type": "OneOptionValue",
                                  "is_slidable": false
                                },
                                "next": {
                                  "properties": {
                                    "formatting_for_true": {
                                      "entries": {
                                        "0": ", generationConfig: { thinkingConfig: { thinkingBudget: -1 } }\n"
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
                                "name": "contains",
                                "is_slidable": false
                              },
                              "properties": {
                                "btype_id": "list.option.llm_tool__os_",
                                "event_id": "bTlOF0",
                                "optional": true,
                                "param_id": "bTPGl0",
                                "param_name": "enabled_tools"
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
                "properties": {
                  "btype_id": "option.llm_models__os_",
                  "event_id": "bTnWy0",
                  "optional": false,
                  "param_id": "bTPyv",
                  "param_name": "streaming_model"
                },
                "type": "CurrentWorkflowItem",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              }
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
      "btype_id": "boolean",
      "event_id": "bTnWy0",
      "optional": false,
      "param_id": "bTkhX",
      "param_name": "code_interpreter_needed"
    },
    "type": "CurrentWorkflowItem",
    "is_slidable": false
  },
  "16": "",
  "18": "",
  "20": ""
};
