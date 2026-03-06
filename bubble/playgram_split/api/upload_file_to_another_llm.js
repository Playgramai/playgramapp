export const upload_file_to_another_llm = {
  "properties": {
    "expose": false,
    "wf_name": "upload_file_to_another_llm",
    "parameters": {
      "0": {
        "key": "organization",
        "value": "custom.organization",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "1": {
        "key": "file",
        "value": "custom.file",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "2": {
        "key": "chat",
        "value": "custom.chat",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "3": {
        "key": "provider",
        "value": "option.llm_providers__os_",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "4": {
        "key": "upload_job",
        "value": "custom.upload_job",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      },
      "5": {
        "key": "sign_url_token",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": {
          "type": "Empty"
        }
      }
    }
  },
  "type": "APIEvent",
  "id": "bTQUL0",
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
            "event_id": "bTQUL0",
            "param_id": "provider",
            "param_name": "provider"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "params_file": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
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
                        "event_id": "bTQUL0",
                        "param_id": "file",
                        "param_name": "file"
                      },
                      "type": "APIEventParameter",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "2": "",
                    "3": {
                      "properties": {
                        "btype_id": "text",
                        "event_id": "bTQUL0",
                        "param_id": "sign_url_token",
                        "param_name": "sign_url_token"
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
                                    "event_id": "bTQUL0",
                                    "param_id": "file",
                                    "param_name": "file"
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
                        "name": "bunny_url_text",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "custom.file",
                        "event_id": "bTQUL0",
                        "param_id": "file",
                        "param_name": "file"
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
        }
      },
      "type": "apiconnector2-bTHER0.bTPLQ",
      "id": "bTQUT0"
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
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "option.llm_providers__os_",
            "event_id": "bTQUL0",
            "param_id": "provider",
            "param_name": "provider"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "params_file": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
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
                        "event_id": "bTQUL0",
                        "param_id": "file",
                        "param_name": "file"
                      },
                      "type": "APIEventParameter",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "2": "",
                    "3": {
                      "properties": {
                        "btype_id": "text",
                        "event_id": "bTQUL0",
                        "param_id": "sign_url_token",
                        "param_name": "sign_url_token"
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
                                    "event_id": "bTQUL0",
                                    "param_id": "file",
                                    "param_name": "file"
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
                        "name": "bunny_url_text",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "custom.file",
                        "event_id": "bTQUL0",
                        "param_id": "file",
                        "param_name": "file"
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
        }
      },
      "type": "apiconnector2-bTHDh0.bTPPL",
      "id": "bTQUY0"
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
            "event_id": "bTQUL0",
            "param_id": "provider",
            "param_name": "provider"
          },
          "type": "APIEventParameter",
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
                "action_id": "bTQUY0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHDh0.bTPQr",
      "id": "bTQUd0"
    },
    "3": {
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
            "event_id": "bTQUL0",
            "param_id": "provider",
            "param_name": "provider"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "body_params_name": {
          "entries": {
            "0": {
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
                "name": "bunny_url_text",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.file",
                "event_id": "bTQUL0",
                "param_id": "file",
                "param_name": "file"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "headers_X-Goog-Upload-Header-Content-Type": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "mime_type_text",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.file",
                "event_id": "bTQUL0",
                "param_id": "file",
                "param_name": "file"
              },
              "type": "APIEventParameter",
              "is_slidable": false
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
      "type": "apiconnector2-bTHFF0.bTPPd",
      "id": "bTQUf0"
    },
    "4": {
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
            "event_id": "bTQUL0",
            "param_id": "provider",
            "param_name": "provider"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "body_params_name": {
          "entries": {
            "0": {
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
                "name": "bunny_url_text",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "text",
                "event_id": "bTSsn0",
                "param_id": "file",
                "param_name": "file"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "headers_X-Goog-Upload-Header-Content-Type": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "mime_type_text",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.file",
                "event_id": "bTQUL0",
                "param_id": "file",
                "param_name": "file"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "headers_X-Goog-Upload-Header-Content-Length": {
          "entries": {
            "0": {
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
                "action_id": "bTQUf0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHFF0.bTPPd",
      "id": "bTSxg0"
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
            "event_id": "bTQUL0",
            "param_id": "provider",
            "param_name": "provider"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "params_file": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
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
                        "event_id": "bTQUL0",
                        "param_id": "file",
                        "param_name": "file"
                      },
                      "type": "APIEventParameter",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "2": "",
                    "3": {
                      "properties": {
                        "btype_id": "text",
                        "event_id": "bTQUL0",
                        "param_id": "sign_url_token",
                        "param_name": "sign_url_token"
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
                                    "event_id": "bTQUL0",
                                    "param_id": "file",
                                    "param_name": "file"
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
                        "name": "bunny_url_text",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "custom.file",
                        "event_id": "bTQUL0",
                        "param_id": "file",
                        "param_name": "file"
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
        "url_params_upload_url": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_api_c2_headers.x-goog-upload-url",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTSxg0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHFF0.bTSAY",
      "id": "bTSxl0"
    },
    "6": {
      "properties": {
        "changes": {
          "0": {
            "key": "claude_id_text",
            "value": {
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
                                  "name": "_api_c2_body.id",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "action_id": "bTQUT0"
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
                                  "name": "claude_id_text",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "btype_id": "custom.file",
                                  "event_id": "bTQUL0",
                                  "param_id": "file",
                                  "param_name": "file"
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
                    "type": "Message",
                    "name": "_api_c2_body.id",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTQUT0"
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
          "1": {
            "key": "gemini_id_text",
            "value": {
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
                                  "name": "_api_c2_body.file.uri",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "action_id": "bTSxl0"
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
                                  "name": "gemini_id_text",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "btype_id": "custom.file",
                                  "event_id": "bTQUL0",
                                  "param_id": "file",
                                  "param_name": "file"
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
                    "type": "Message",
                    "name": "_api_c2_body.file.uri",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTSxl0"
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
          "2": {
            "key": "openai_id_text",
            "value": {
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
                                  "name": "_api_c2_body.id",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "action_id": "bTQUY0"
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
                                  "name": "openai_id_text",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "btype_id": "custom.file",
                                  "event_id": "bTQUL0",
                                  "param_id": "file",
                                  "param_name": "file"
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
                    "type": "Message",
                    "name": "_api_c2_body.id",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTQUY0"
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
          "3": {
            "key": "openai_vector_store_id_text",
            "value": {
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
                                  "name": "_api_c2_body.id",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "action_id": "bTQUd0"
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
                                  "name": "openai_vector_store_id_text",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "btype_id": "custom.file",
                                  "event_id": "bTQUL0",
                                  "param_id": "file",
                                  "param_name": "file"
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
                    "type": "Message",
                    "name": "_api_c2_body.id",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTQUd0"
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
            "key": "gemini_file_name_text",
            "value": {
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
                                  "name": "_api_c2_body.file.name",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "action_id": "bTSxl0"
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
                                  "name": "gemini_file_name_text",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "btype_id": "custom.file",
                                  "event_id": "bTQUL0",
                                  "param_id": "file",
                                  "param_name": "file"
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
                    "type": "Message",
                    "name": "_api_c2_body.file.name",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTSxl0"
                  },
                  "type": "PreviousStep",
                  "said": "a2Vsdm8tMzE4ODQ=",
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
            "key": "upload_job_custom_upload_job",
            "value": {
              "properties": {
                "btype_id": "custom.upload_job",
                "event_id": "bTQUL0",
                "param_id": "upload_job",
                "param_name": "upload_job"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "properties": {
            "btype_id": "custom.file",
            "event_id": "bTQUL0",
            "param_id": "file",
            "param_name": "file"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTQUp0"
    }
  }
};
