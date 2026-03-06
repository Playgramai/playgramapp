export const transfer_file_to_bunny = {
  "properties": {
    "expose": false,
    "wf_name": "transfer_file_to_bunny",
    "parameters": {
      "0": {
        "key": "file_url",
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
      },
      "1": {
        "key": "chat_file",
        "value": "custom.file",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": false
      },
      "2": {
        "key": "file_path",
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
    },
    "ignore_privacy_rules": true
  },
  "type": "APIEvent",
  "id": "bTwCP1",
  "actions": {
    "0": {
      "properties": {
        "params_path": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTwCP1",
                "param_id": "file_path",
                "param_name": "file_path"
              },
              "type": "APIEventParameter",
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
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTwCP1",
                "param_id": "file_url",
                "param_name": "file_url"
              },
              "type": "APIEventParameter",
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
                      "properties": {
                        "btype_id": "text",
                        "event_id": "bTwCP1",
                        "param_id": "file_url",
                        "param_name": "file_url"
                      },
                      "type": "APIEventParameter",
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
                        "event_id": "bTwCP1",
                        "param_id": "file_url",
                        "param_name": "file_url"
                      },
                      "type": "APIEventParameter",
                      "said": "a2Vsdm8tMzE4ODQ=",
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
        }
      },
      "type": "apiconnector2-bTMBs0.bTrSm0",
      "id": "bTwCd1"
    },
    "1": {
      "properties": {
        "url_to_delete": {
          "properties": {
            "btype_id": "text",
            "event_id": "bTwCP1",
            "param_id": "file_url",
            "param_name": "file_url"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "DeleteUploadedFile",
      "id": "bTwCR1"
    },
    "2": {
      "properties": {
        "url_params_uuid": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "message_id_text",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.file",
                "event_id": "bTwCP1",
                "optional": false,
                "param_id": "chat_file",
                "param_name": "chat_file"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_query": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "{\"class\":\"Messages_v3\",\"id\":\"",
                    "1": {
                      "next": {
                        "type": "Message",
                        "name": "message_id_text",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "custom.file",
                        "event_id": "bTwCP1",
                        "optional": false,
                        "param_id": "chat_file",
                        "param_name": "chat_file"
                      },
                      "type": "APIEventParameter",
                      "is_slidable": false
                    },
                    "2": "\",\"tenant\":\"",
                    "3": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "_id",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "organization_custom_organization",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "custom.file",
                        "event_id": "bTwCP1",
                        "optional": false,
                        "param_id": "chat_file",
                        "param_name": "chat_file"
                      },
                      "type": "APIEventParameter",
                      "is_slidable": false
                    },
                    "4": "\",\"properties\":{",
                    "5": {
                      "properties": {
                        "arbitrary_text": {
                          "entries": {
                            "0": "",
                            "1": {
                              "next": {
                                "next": {
                                  "next": {
                                    "args": {
                                      "next": {
                                        "next": {
                                          "type": "Message",
                                          "name": "display",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "constraints": {
                                            "0": {
                                              "key": "_advanced_search_constraint",
                                              "value": {
                                                "next": {
                                                  "next": {
                                                    "args": "image",
                                                    "type": "Message",
                                                    "name": "contains",
                                                    "is_slidable": false
                                                  },
                                                  "type": "Message",
                                                  "name": "mime_type",
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
                                    },
                                    "next": {
                                      "properties": {
                                        "formatting_for_true": {
                                          "entries": {
                                            "0": "\"user_image\":\"",
                                            "1": {
                                              "next": {
                                                "type": "Message",
                                                "name": "_api_c2_body.response.file_url",
                                                "is_slidable": false
                                              },
                                              "properties": {
                                                "action_id": "bTwCd1"
                                              },
                                              "type": "PreviousStep",
                                              "said": "a2Vsdm8tMzE4ODQ=",
                                              "is_slidable": false
                                            },
                                            "2": "\""
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
                              "properties": {
                                "btype_id": "text",
                                "event_id": "bTwCP1",
                                "param_id": "file_url",
                                "param_name": "file_url"
                              },
                              "type": "APIEventParameter",
                              "is_slidable": false
                            },
                            "2": ""
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "ArbitraryText"
                    },
                    "6": "",
                    "7": {
                      "properties": {
                        "arbitrary_text": {
                          "entries": {
                            "0": "",
                            "1": {
                              "next": {
                                "next": {
                                  "next": {
                                    "args": {
                                      "next": {
                                        "next": {
                                          "type": "Message",
                                          "name": "display",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "constraints": {
                                            "0": {
                                              "key": "_advanced_search_constraint",
                                              "value": {
                                                "next": {
                                                  "next": {
                                                    "args": "image",
                                                    "type": "Message",
                                                    "name": "contains",
                                                    "is_slidable": false
                                                  },
                                                  "type": "Message",
                                                  "name": "mime_type",
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
                                    },
                                    "next": {
                                      "properties": {
                                        "formatting_for_true": {
                                          "entries": {
                                            "0": "\"file_url\":\"",
                                            "1": {
                                              "next": {
                                                "type": "Message",
                                                "name": "_api_c2_body.response.file_url",
                                                "is_slidable": false
                                              },
                                              "properties": {
                                                "action_id": "bTwCd1"
                                              },
                                              "type": "PreviousStep",
                                              "is_slidable": false
                                            },
                                            "2": "\""
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
                                    "name": "is_not_contained_by_list",
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
                              "properties": {
                                "btype_id": "text",
                                "event_id": "bTwCP1",
                                "param_id": "file_url",
                                "param_name": "file_url"
                              },
                              "type": "APIEventParameter",
                              "is_slidable": false
                            },
                            "2": ""
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "ArbitraryText",
                      "said": "a2Vsdm8tMzE4ODQ="
                    },
                    "8": "}}\n"
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
        "url_params_endpoint": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "2o38skivtzypqttgw5haa.c0.us-west3.gcp.weaviate.cloud"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "ugsj5mtstmaoe4gwkzrxg.c0.europe-west3.gcp.weaviate.cloud"
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
        }
      },
      "type": "apiconnector2-bTHIF0.bTLrL",
      "id": "bTwJf0"
    },
    "3": {
      "properties": {
        "changes": {
          "0": {
            "key": "bunny_url_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2_body.response.file_url",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTwCd1"
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
          "1": {
            "key": "message_id_text",
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
          }
        },
        "to_change": {
          "properties": {
            "btype_id": "custom.file",
            "event_id": "bTwCP1",
            "optional": false,
            "param_id": "chat_file",
            "param_name": "chat_file"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTwDk0"
    }
  }
};
