export const get_chunks_upload_file_to_gemini = {
  "properties": {
    "event_name": "[get chunks] upload_file_to_gemini",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "file",
        "optional": false,
        "param_id": "bTYPS",
        "param_name": "file"
      },
      "1": {
        "is_list": false,
        "btype_id": "file",
        "optional": false,
        "param_id": "bTYPZ",
        "param_name": "last_file"
      }
    },
    "return_types": {
      "0": {
        "display": "summary",
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "return_id": "bTYQN"
      },
      "1": {
        "display": "chunks",
        "is_list": true,
        "btype_id": "api.apiconnector2.bTHFF0.bTYOd.body.candidates",
        "optional": false,
        "return_id": "bTYQT"
      },
      "2": {
        "display": "file_uri",
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "return_id": "bTYQf"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTYPL",
  "actions": {
    "0": {
      "properties": {
        "body_params_name": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "file_name",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "file",
                "event_id": "bTYPL",
                "optional": false,
                "param_id": "bTYPS",
                "param_name": "file"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "headers_X-Goog-Upload-Header-Content-Type": {
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
                                "event_id": "bTYPL",
                                "optional": false,
                                "param_id": "bTYPS",
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
        "headers_X-Goog-Upload-Header-Content-Length": {
          "entries": {
            "0": "1"
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHFF0.bTPPd",
      "id": "bTYPk"
    },
    "1": {
      "properties": {
        "params_file": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "url",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "file",
                "event_id": "bTYPL",
                "optional": false,
                "param_id": "bTYPS",
                "param_name": "file"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
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
                "action_id": "bTYPk"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHFF0.bTSAY",
      "id": "bTYPr"
    },
    "2": {
      "properties": {
        "body_params_name": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "file_name",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "file",
                "event_id": "bTYPL",
                "optional": false,
                "param_id": "bTYPS",
                "param_name": "file"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "headers_X-Goog-Upload-Header-Content-Type": {
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
                                "event_id": "bTYPL",
                                "optional": false,
                                "param_id": "bTYPS",
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
                "action_id": "bTYPr"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHFF0.bTPPd",
      "id": "bTYPw"
    },
    "3": {
      "properties": {
        "params_file": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "url",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "file",
                "event_id": "bTYPL",
                "optional": false,
                "param_id": "bTYPS",
                "param_name": "file"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
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
                "action_id": "bTYPw"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHFF0.bTSAY",
      "id": "bTYQB"
    },
    "4": {
      "properties": {
        "body_params_file_data": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "{\"file_data\":{\"mime_type\": \"",
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
                                        "event_id": "bTYPL",
                                        "optional": false,
                                        "param_id": "bTYPS",
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
                      "type": "OptionValue",
                      "said": "a2Vsdm8tMzE4ODQ="
                    },
                    "2": "\", \"file_uri\": \"",
                    "3": {
                      "next": {
                        "type": "Message",
                        "name": "_api_c2_body.file.uri",
                        "is_slidable": false
                      },
                      "properties": {
                        "action_id": "bTYQB"
                      },
                      "type": "PreviousStep",
                      "is_slidable": false
                    },
                    "4": "\"}}"
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
        "body_params_message_text": {
          "entries": {
            "0": " "
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHFF0.bTYOd",
      "id": "bTYQD"
    },
    "5": {
      "properties": {
        "changes": {
          "0": {
            "key": "log_test_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "type": "Message",
                          "name": "_api_c2_error.status_message",
                          "is_slidable": false
                        },
                        "properties": {
                          "action_id": "bTYQD"
                        },
                        "type": "PreviousStep",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "append",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "_api_c2_error.body",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTYQD"
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
          }
        }
      },
      "type": "MakeChangeCurrentUser",
      "id": "bTezX"
    },
    "6": {
      "properties": {
        "return_values": {
          "0": {
            "return_id": "bTYQN",
            "return_value": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "next": {
                        "next": {
                          "next": {
                            "next": {
                              "properties": {
                                "regex": {
                                  "entries": {
                                    "0": "(?<='summary'\\s*:\\s*')[^']+"
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "Message",
                              "name": "extract_regex",
                              "is_slidable": true
                            },
                            "type": "Message",
                            "name": "_api_c2_text",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "first_element",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "_api_c2_content.parts",
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
                    "action_id": "bTYQD"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            }
          },
          "1": {
            "return_id": "bTYQT",
            "return_value": {
              "next": {
                "type": "Message",
                "name": "_api_c2_body.candidates",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTYQD"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "2": {
            "return_id": "bTYQf",
            "return_value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2_body.file.uri",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTYQB"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "TerminateWorkflow",
      "id": "bTYQO"
    }
  },
};
