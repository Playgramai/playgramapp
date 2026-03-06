export const format_as_text = {
  "properties": {
    "content": {
      "entries": {
        "0": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "next": {
                        "properties": {
                          "find": {
                            "entries": {
                              "0": "<llm_message>"
                            },
                            "type": "TextExpression"
                          },
                          "replace": {
                            "entries": {
                              "0": {
                                "next": {
                                  "next": {
                                    "args": "null",
                                    "next": {
                                      "type": "Message",
                                      "name": "format_json_encode",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "defaulting_to",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "_api_c2_llm_reply",
                                  "is_slidable": false
                                },
                                "type": "InjectedValue",
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
                      "properties": {
                        "find": {
                          "entries": {
                            "0": "<user_message>"
                          },
                          "type": "TextExpression"
                        },
                        "replace": {
                          "entries": {
                            "0": {
                              "next": {
                                "next": {
                                  "type": "Message",
                                  "name": "format_json_encode",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "_api_c2_user_message",
                                "is_slidable": false
                              },
                              "type": "InjectedValue",
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
                    "properties": {
                      "find": {
                        "entries": {
                          "0": "<user_image>"
                        },
                        "type": "TextExpression"
                      },
                      "replace": {
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
                                            "next": {
                                              "next": {
                                                "next": {
                                                  "next": {
                                                    "properties": {
                                                      "find": {
                                                        "entries": {
                                                          "0": "<user_image>"
                                                        },
                                                        "type": "TextExpression"
                                                      },
                                                      "replace": {
                                                        "entries": {
                                                          "0": {
                                                            "next": {
                                                              "next": {
                                                                "args": "cdn.bubble.io",
                                                                "next": {
                                                                  "next": {
                                                                    "properties": {
                                                                      "find": {
                                                                        "entries": {
                                                                          "0": "https:https:"
                                                                        },
                                                                        "type": "TextExpression"
                                                                      },
                                                                      "replace": {
                                                                        "entries": {
                                                                          "0": "https:"
                                                                        },
                                                                        "type": "TextExpression"
                                                                      }
                                                                    },
                                                                    "type": "Message",
                                                                    "name": "find_replace",
                                                                    "is_slidable": true
                                                                  },
                                                                  "properties": {
                                                                    "formatting_for_true": {
                                                                      "entries": {
                                                                        "0": "https:",
                                                                        "1": {
                                                                          "next": {
                                                                            "next": {
                                                                              "next": {
                                                                                "next": {
                                                                                  "args": "svg",
                                                                                  "next": {
                                                                                    "properties": {
                                                                                      "formatting_for_true": {
                                                                                        "entries": {
                                                                                          "0": "",
                                                                                          "1": {
                                                                                            "next": {
                                                                                              "type": "Message",
                                                                                              "name": "_api_c2_user_image",
                                                                                              "is_slidable": false
                                                                                            },
                                                                                            "type": "InjectedValue",
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
                                                                                                                        "name": "get_group_data",
                                                                                                                        "is_slidable": false
                                                                                                                      },
                                                                                                                      "properties": {
                                                                                                                        "element_id": "bTUiZ0"
                                                                                                                      },
                                                                                                                      "type": "GetElement",
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
                                                                                                                                "name": "get_group_data",
                                                                                                                                "is_slidable": false
                                                                                                                              },
                                                                                                                              "properties": {
                                                                                                                                "element_id": "bTUiZ0"
                                                                                                                              },
                                                                                                                              "type": "GetElement",
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
                                                                                                              "name": "get_group_data",
                                                                                                              "is_slidable": false
                                                                                                            },
                                                                                                            "properties": {
                                                                                                              "element_id": "bTUiZ0"
                                                                                                            },
                                                                                                            "type": "GetElement",
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
                                                                                              "name": "get_group_data",
                                                                                              "is_slidable": false
                                                                                            },
                                                                                            "properties": {
                                                                                              "element_id": "bTUiZ0"
                                                                                            },
                                                                                            "type": "GetElement",
                                                                                            "is_slidable": false
                                                                                          },
                                                                                          "4": "/",
                                                                                          "5": {
                                                                                            "next": {
                                                                                              "next": {
                                                                                                "next": {
                                                                                                  "next": {
                                                                                                    "args": "svg",
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
                                                                                                                "name": "_api_c2_user_image",
                                                                                                                "is_slidable": false
                                                                                                              },
                                                                                                              "type": "InjectedValue",
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
                                                                                                                    "next": {
                                                                                                                      "next": {
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
                                                                                                                          "name": "first_element",
                                                                                                                          "is_slidable": false
                                                                                                                        },
                                                                                                                        "properties": {
                                                                                                                          "regex": {
                                                                                                                            "entries": {
                                                                                                                              "0": "",
                                                                                                                              "1": {
                                                                                                                                "properties": {
                                                                                                                                  "arbitrary_text": {
                                                                                                                                    "entries": {
                                                                                                                                      "0": "https:\\/\\/",
                                                                                                                                      "1": {
                                                                                                                                        "next": {
                                                                                                                                          "next": {
                                                                                                                                            "properties": {
                                                                                                                                              "formatting_for_true": {
                                                                                                                                                "entries": {
                                                                                                                                                  "0": "playgram-version-test"
                                                                                                                                                },
                                                                                                                                                "type": "TextExpression"
                                                                                                                                              },
                                                                                                                                              "formatting_for_false": {
                                                                                                                                                "entries": {
                                                                                                                                                  "0": "frala"
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
                                                                                                                                        "is_slidable": false
                                                                                                                                      },
                                                                                                                                      "2": "\\.b-cdn\\.net\\/",
                                                                                                                                      "3": {
                                                                                                                                        "next": {
                                                                                                                                          "next": {
                                                                                                                                            "next": {
                                                                                                                                              "args": 4,
                                                                                                                                              "type": "Message",
                                                                                                                                              "name": "specific_item",
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
                                                                                                                                          "name": "_api_c2_user_image",
                                                                                                                                          "is_slidable": false
                                                                                                                                        },
                                                                                                                                        "type": "InjectedValue",
                                                                                                                                        "is_slidable": false
                                                                                                                                      },
                                                                                                                                      "4": "\\/",
                                                                                                                                      "5": {
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
                                                                                                                                          "name": "_api_c2_user_image",
                                                                                                                                          "is_slidable": false
                                                                                                                                        },
                                                                                                                                        "type": "InjectedValue",
                                                                                                                                        "is_slidable": false
                                                                                                                                      },
                                                                                                                                      "6": "[^;]*"
                                                                                                                                    },
                                                                                                                                    "type": "TextExpression"
                                                                                                                                  }
                                                                                                                                },
                                                                                                                                "type": "ArbitraryText"
                                                                                                                              },
                                                                                                                              "2": ""
                                                                                                                            },
                                                                                                                            "type": "TextExpression"
                                                                                                                          }
                                                                                                                        },
                                                                                                                        "type": "Message",
                                                                                                                        "name": "extract_regex",
                                                                                                                        "is_slidable": true
                                                                                                                      },
                                                                                                                      "properties": {
                                                                                                                        "content": {
                                                                                                                          "entries": {
                                                                                                                            "0": {
                                                                                                                              "type": "InjectedValue",
                                                                                                                              "is_slidable": false
                                                                                                                            }
                                                                                                                          },
                                                                                                                          "type": "TextExpression"
                                                                                                                        },
                                                                                                                        "delimiter": {
                                                                                                                          "entries": {
                                                                                                                            "0": ";"
                                                                                                                          },
                                                                                                                          "type": "TextExpression"
                                                                                                                        }
                                                                                                                      },
                                                                                                                      "type": "Message",
                                                                                                                      "name": "format_as_text",
                                                                                                                      "is_slidable": true
                                                                                                                    },
                                                                                                                    "type": "Message",
                                                                                                                    "name": "png_image_text",
                                                                                                                    "is_slidable": false
                                                                                                                  },
                                                                                                                  "type": "Message",
                                                                                                                  "name": "files_list_custom_file",
                                                                                                                  "is_slidable": false
                                                                                                                },
                                                                                                                "type": "Message",
                                                                                                                "name": "get_group_data",
                                                                                                                "is_slidable": false
                                                                                                              },
                                                                                                              "properties": {
                                                                                                                "element_id": "bTUiZ0"
                                                                                                              },
                                                                                                              "type": "GetElement",
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
                                                                                                    "name": "not_equals",
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
                                                                                              "name": "_api_c2_user_image",
                                                                                              "is_slidable": false
                                                                                            },
                                                                                            "type": "InjectedValue",
                                                                                            "is_slidable": false
                                                                                          },
                                                                                          "6": ""
                                                                                        },
                                                                                        "type": "TextExpression",
                                                                                        "said": "a2Vsdm8tMzE4ODQ="
                                                                                      }
                                                                                    },
                                                                                    "type": "Message",
                                                                                    "name": "format_boolean",
                                                                                    "is_slidable": true
                                                                                  },
                                                                                  "type": "Message",
                                                                                  "name": "not_equals",
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
                                                                            "name": "_api_c2_user_image",
                                                                            "is_slidable": false
                                                                          },
                                                                          "type": "InjectedValue",
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
                                                                                                      "name": "get_group_data",
                                                                                                      "is_slidable": false
                                                                                                    },
                                                                                                    "properties": {
                                                                                                      "element_id": "bTUiZ0"
                                                                                                    },
                                                                                                    "type": "GetElement",
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
                                                                                                              "name": "get_group_data",
                                                                                                              "is_slidable": false
                                                                                                            },
                                                                                                            "properties": {
                                                                                                              "element_id": "bTUiZ0"
                                                                                                            },
                                                                                                            "type": "GetElement",
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
                                                                                            "name": "get_group_data",
                                                                                            "is_slidable": false
                                                                                          },
                                                                                          "properties": {
                                                                                            "element_id": "bTUiZ0"
                                                                                          },
                                                                                          "type": "GetElement",
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
                                                                            "name": "get_group_data",
                                                                            "is_slidable": false
                                                                          },
                                                                          "properties": {
                                                                            "element_id": "bTUiZ0"
                                                                          },
                                                                          "type": "GetElement",
                                                                          "is_slidable": false
                                                                        },
                                                                        "4": "/",
                                                                        "5": {
                                                                          "next": {
                                                                            "next": {
                                                                              "next": {
                                                                                "next": {
                                                                                  "args": "svg",
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
                                                                                              "name": "_api_c2_user_image",
                                                                                              "is_slidable": false
                                                                                            },
                                                                                            "type": "InjectedValue",
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
                                                                                                  "next": {
                                                                                                    "next": {
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
                                                                                                        "name": "first_element",
                                                                                                        "is_slidable": false
                                                                                                      },
                                                                                                      "properties": {
                                                                                                        "regex": {
                                                                                                          "entries": {
                                                                                                            "0": "",
                                                                                                            "1": {
                                                                                                              "properties": {
                                                                                                                "arbitrary_text": {
                                                                                                                  "entries": {
                                                                                                                    "0": "https:\\/\\/",
                                                                                                                    "1": {
                                                                                                                      "next": {
                                                                                                                        "next": {
                                                                                                                          "properties": {
                                                                                                                            "formatting_for_true": {
                                                                                                                              "entries": {
                                                                                                                                "0": "playgram-version-test"
                                                                                                                              },
                                                                                                                              "type": "TextExpression"
                                                                                                                            },
                                                                                                                            "formatting_for_false": {
                                                                                                                              "entries": {
                                                                                                                                "0": "frala"
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
                                                                                                                      "is_slidable": false
                                                                                                                    },
                                                                                                                    "2": "\\.b-cdn\\.net\\/",
                                                                                                                    "3": {
                                                                                                                      "next": {
                                                                                                                        "next": {
                                                                                                                          "next": {
                                                                                                                            "args": 4,
                                                                                                                            "type": "Message",
                                                                                                                            "name": "specific_item",
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
                                                                                                                        "name": "_api_c2_user_image",
                                                                                                                        "is_slidable": false
                                                                                                                      },
                                                                                                                      "type": "InjectedValue",
                                                                                                                      "is_slidable": false
                                                                                                                    },
                                                                                                                    "4": "\\/",
                                                                                                                    "5": {
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
                                                                                                                        "name": "_api_c2_user_image",
                                                                                                                        "is_slidable": false
                                                                                                                      },
                                                                                                                      "type": "InjectedValue",
                                                                                                                      "is_slidable": false
                                                                                                                    },
                                                                                                                    "6": "[^;]*"
                                                                                                                  },
                                                                                                                  "type": "TextExpression"
                                                                                                                }
                                                                                                              },
                                                                                                              "type": "ArbitraryText"
                                                                                                            },
                                                                                                            "2": ""
                                                                                                          },
                                                                                                          "type": "TextExpression"
                                                                                                        }
                                                                                                      },
                                                                                                      "type": "Message",
                                                                                                      "name": "extract_regex",
                                                                                                      "is_slidable": true
                                                                                                    },
                                                                                                    "properties": {
                                                                                                      "content": {
                                                                                                        "entries": {
                                                                                                          "0": {
                                                                                                            "type": "InjectedValue",
                                                                                                            "is_slidable": false
                                                                                                          }
                                                                                                        },
                                                                                                        "type": "TextExpression"
                                                                                                      },
                                                                                                      "delimiter": {
                                                                                                        "entries": {
                                                                                                          "0": ";"
                                                                                                        },
                                                                                                        "type": "TextExpression"
                                                                                                      }
                                                                                                    },
                                                                                                    "type": "Message",
                                                                                                    "name": "format_as_text",
                                                                                                    "is_slidable": true
                                                                                                  },
                                                                                                  "type": "Message",
                                                                                                  "name": "png_image_text",
                                                                                                  "is_slidable": false
                                                                                                },
                                                                                                "type": "Message",
                                                                                                "name": "files_list_custom_file",
                                                                                                "is_slidable": false
                                                                                              },
                                                                                              "type": "Message",
                                                                                              "name": "get_group_data",
                                                                                              "is_slidable": false
                                                                                            },
                                                                                            "properties": {
                                                                                              "element_id": "bTUiZ0"
                                                                                            },
                                                                                            "type": "GetElement",
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
                                                                                  "name": "not_equals",
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
                                                                            "name": "_api_c2_user_image",
                                                                            "is_slidable": false
                                                                          },
                                                                          "type": "InjectedValue",
                                                                          "is_slidable": false
                                                                        },
                                                                        "6": ""
                                                                      },
                                                                      "type": "TextExpression",
                                                                      "said": "a2Vsdm8tMzE4ODQ="
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
                                                              "type": "Message",
                                                              "name": "_api_c2_user_image",
                                                              "is_slidable": false
                                                            },
                                                            "type": "InjectedValue",
                                                            "said": "a2Vsdm8tMzE4ODQ=",
                                                            "is_slidable": false
                                                          },
                                                          "1": ""
                                                        },
                                                        "type": "TextExpression"
                                                      }
                                                    },
                                                    "type": "Message",
                                                    "name": "find_replace",
                                                    "is_slidable": true
                                                  },
                                                  "type": "Message",
                                                  "name": "new_image_context_body",
                                                  "is_slidable": false
                                                },
                                                "type": "Message",
                                                "name": "provider",
                                                "is_slidable": false
                                              },
                                              "type": "Message",
                                              "name": "llm_model_option_llm_models__os_",
                                              "is_slidable": false
                                            },
                                            "type": "Message",
                                            "name": "get_group_data",
                                            "is_slidable": false
                                          },
                                          "properties": {
                                            "element_id": "bTUiZ0"
                                          },
                                          "type": "GetElement",
                                          "said": "a2Vsdm8tMzE4ODQ=",
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
                                "name": "is_not_empty",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "_api_c2_user_image",
                              "is_slidable": false
                            },
                            "type": "InjectedValue",
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
                  "name": "new_context_body",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "provider",
                "is_slidable": false
              },
              "type": "Message",
              "name": "llm_model_option_llm_models__os_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUiZ0"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "1": ""
      },
      "type": "TextExpression"
    },
    "delimiter": {
      "entries": {
        "0": ", "
      },
      "type": "TextExpression"
    }
  },
  "type": "Message",
  "name": "format_as_text",
  "is_slidable": true
};
