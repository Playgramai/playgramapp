export const add_memory_to_weaviate = {
  "properties": {
    "expose": false,
    "wf_name": "add_memory_to_weaviate",
    "parameters": {
      "0": {
        "key": "message",
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
        "key": "user",
        "value": "user",
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
        "key": "project",
        "value": "custom.project",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "3": {
        "key": "organization",
        "value": "custom.organization",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "4": {
        "key": "memory_level",
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
      "5": {
        "key": "user_workspace",
        "value": "custom.workspace",
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
  "id": "bTcrb",
  "actions": {
    "0": {
      "properties": {
        "body_params_message": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "format_json_encode",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "text",
                "event_id": "bTcrb",
                "param_id": "message",
                "param_name": "message"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTPLJ.bTdRI2",
      "id": "bTdbP2"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_not_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "_api_c2_message.content",
                "is_slidable": false
              },
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "type": "Message",
            "name": "_api_c2_body.choices",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTdbP2"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "body_params_text": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "format_json_encode",
                "is_slidable": false
              },
              "properties": {
                "arbitrary_text": {
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
                                    "0": "\""
                                  },
                                  "type": "TextExpression"
                                },
                                "replace": {
                                  "entries": {
                                    "0": "'"
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "Message",
                              "name": "find_replace",
                              "is_slidable": true
                            },
                            "type": "Message",
                            "name": "_api_c2_message.content",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "first_element",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "_api_c2_body.choices",
                        "is_slidable": false
                      },
                      "properties": {
                        "action_id": "bTdbP2"
                      },
                      "type": "PreviousStep",
                      "is_slidable": false
                    },
                    "2": ""
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
      "type": "apiconnector2-bTHDh0.bTHDr0",
      "id": "bTcrj"
    },
    "2": {
      "properties": {
        "body_params_class": {
          "type": "TextExpression"
        },
        "body_params_vector": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "[",
                    "1": {
                      "next": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "_api_c2_embedding",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "first_element",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "_api_c2_body.data",
                        "is_slidable": false
                      },
                      "properties": {
                        "action_id": "bTcrj"
                      },
                      "type": "PreviousStep",
                      "is_slidable": false
                    },
                    "2": "]"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText",
              "said": "a2Vsdm8tMzE4ODQ="
            },
            "1": ""
          },
          "type": "TextExpression"
        },
        "body_params_user_id": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "format_json_encode",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "user",
                "event_id": "bTcrb",
                "param_id": "user",
                "param_name": "user"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
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
        },
        "body_params_project_id": {
          "entries": {
            "0": {
              "next": {
                "args": "project",
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "next": {
                              "type": "Message",
                              "name": "format_json_encode",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "_id",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "custom.project",
                            "event_id": "bTcrb",
                            "optional": true,
                            "param_id": "project",
                            "param_name": "project"
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
                "name": "equals",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "option.chat_type__os_",
                "event_id": "bTcrb",
                "param_id": "memory_level",
                "param_name": "memory_level"
              },
              "type": "APIEventParameter",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_sort_number": {
          "entries": {
            "0": {
              "next": {
                "properties": {
                  "tz_type": "static",
                  "tz_static": "GMT+0",
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
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_tenant_name": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "_id",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "current_organization_custom_organization",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "user",
                "event_id": "bTcrb",
                "param_id": "user",
                "param_name": "user"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "1": ""
          },
          "type": "TextExpression"
        },
        "body_params_created_date": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "format_json_encode",
                    "is_slidable": false
                  },
                  "properties": {
                    "formatting_type": "number",
                    "decimal_place": 0
                  },
                  "type": "Message",
                  "name": "format_number",
                  "is_slidable": true
                },
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
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_user_message": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "format_json_encode",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "text",
                "event_id": "bTcrb",
                "param_id": "message",
                "param_name": "message"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_workspace_id": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "format_json_encode",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.workspace",
                "event_id": "bTcrb",
                "param_id": "user_workspace",
                "param_name": "user_workspace"
              },
              "type": "APIEventParameter",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_already_saved": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "\"true\""
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText"
            }
          },
          "type": "TextExpression"
        },
        "body_params_saved_manually": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "\"true\""
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
        "body_params_organization_id": {
          "entries": {
            "0": {
              "next": {
                "args": "team",
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "next": {
                              "type": "Message",
                              "name": "format_json_encode",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "_id",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "custom.organization",
                            "event_id": "bTcrb",
                            "optional": true,
                            "param_id": "organization",
                            "param_name": "organization"
                          },
                          "type": "APIEventParameter",
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
                "name": "equals",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "option.chat_type__os_",
                "event_id": "bTcrb",
                "param_id": "memory_level",
                "param_name": "memory_level"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "1": ""
          },
          "type": "TextExpression"
        },
        "body_params_workspace_model": {
          "entries": {
            "0": ""
          },
          "type": "TextExpression"
        },
        "body_params_llm_created_date": {
          "entries": {
            "0": ""
          },
          "type": "TextExpression"
        },
        "body_params_vectorized_content": {
          "entries": {
            "0": {
              "next": {
                "next": {
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
                                        "type": "Message",
                                        "name": "format_json_encode",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "_api_c2_message.content",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "first_element",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "_api_c2_body.choices",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "action_id": "bTdbP2"
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
                    "name": "_api_c2_message.content",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "_api_c2_body.choices",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTdbP2"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_memory_level_with_id": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "[",
                    "1": {
                      "next": {
                        "args": "project",
                        "next": {
                          "properties": {
                            "formatting_for_true": {
                              "entries": {
                                "0": "",
                                "1": {
                                  "next": {
                                    "next": {
                                      "type": "Message",
                                      "name": "format_json_encode",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "_id",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "btype_id": "user",
                                    "event_id": "bTcrb",
                                    "param_id": "user",
                                    "param_name": "user"
                                  },
                                  "type": "APIEventParameter",
                                  "said": "a2Vsdm8tMzE4ODQ=",
                                  "is_slidable": false
                                },
                                "2": ",",
                                "3": {
                                  "next": {
                                    "next": {
                                      "type": "Message",
                                      "name": "format_json_encode",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "_id",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "btype_id": "custom.project",
                                    "event_id": "bTcrb",
                                    "optional": true,
                                    "param_id": "project",
                                    "param_name": "project"
                                  },
                                  "type": "APIEventParameter",
                                  "is_slidable": false
                                },
                                "4": ",\"project\""
                              },
                              "type": "TextExpression",
                              "said": "a2Vsdm8tMzE4ODQ="
                            },
                            "formatting_for_false": {
                              "entries": {
                                "0": "",
                                "1": {
                                  "next": {
                                    "args": "team",
                                    "next": {
                                      "properties": {
                                        "formatting_for_true": {
                                          "entries": {
                                            "0": "",
                                            "1": {
                                              "next": {
                                                "next": {
                                                  "type": "Message",
                                                  "name": "format_json_encode",
                                                  "is_slidable": false
                                                },
                                                "type": "Message",
                                                "name": "_id",
                                                "is_slidable": false
                                              },
                                              "properties": {
                                                "btype_id": "user",
                                                "event_id": "bTcrb",
                                                "param_id": "user",
                                                "param_name": "user"
                                              },
                                              "type": "APIEventParameter",
                                              "said": "a2Vsdm8tMzE4ODQ=",
                                              "is_slidable": false
                                            },
                                            "2": ",\"team\""
                                          },
                                          "type": "TextExpression",
                                          "said": "a2Vsdm8tMzE4ODQ="
                                        },
                                        "formatting_for_false": {
                                          "entries": {
                                            "0": "",
                                            "1": {
                                              "next": {
                                                "next": {
                                                  "type": "Message",
                                                  "name": "format_json_encode",
                                                  "is_slidable": false
                                                },
                                                "type": "Message",
                                                "name": "_id",
                                                "is_slidable": false
                                              },
                                              "properties": {
                                                "btype_id": "user",
                                                "event_id": "bTcrb",
                                                "param_id": "user",
                                                "param_name": "user"
                                              },
                                              "type": "APIEventParameter",
                                              "is_slidable": false
                                            },
                                            "2": ",\"personal\""
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
                                    "name": "equals",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "btype_id": "option.chat_type__os_",
                                    "event_id": "bTcrb",
                                    "param_id": "memory_level",
                                    "param_name": "memory_level"
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
                      "properties": {
                        "btype_id": "option.chat_type__os_",
                        "event_id": "bTcrb",
                        "param_id": "memory_level",
                        "param_name": "memory_level"
                      },
                      "type": "APIEventParameter",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "2": "]"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText"
            }
          },
          "type": "TextExpression"
        },
        "body_params_user_message_created_date": {
          "entries": {
            "0": ""
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHIF0.bTHIv0",
      "id": "bTcro"
    },
    "3": {
      "properties": {
        "changes": {
          "0": {
            "key": "custom_memory_added__text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "type": "Message",
                          "name": "convert_to_number",
                          "is_slidable": false
                        },
                        "properties": {
                          "length": 2,
                          "numbers": true,
                          "formula_type": "RandomString"
                        },
                        "type": "Formulas"
                      },
                      "type": "Message",
                      "name": "plus",
                      "is_slidable": false
                    },
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
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          },
          "1": {
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
                          "action_id": "bTcro"
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
                    "action_id": "bTcro"
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
        },
        "to_change": {
          "properties": {
            "btype_id": "user",
            "event_id": "bTcrb",
            "param_id": "user",
            "param_name": "user"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTdCl2"
    },
    "4": {
      "properties": {
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTPLV0",
        "ignore_privacy_rules": true,
        "_wf_param_first_normalization_input": {
          "next": {
            "type": "Message",
            "name": "_api_c2_body.usage.prompt_tokens",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTdbP2"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "_wf_param_embedding_for_first_search": {
          "next": {
            "type": "Message",
            "name": "_api_c2_body.usage.prompt_tokens",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTcrj"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTdCs2"
    }
  }
};
