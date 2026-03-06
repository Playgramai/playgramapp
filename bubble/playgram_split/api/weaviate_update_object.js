export const weaviate_update_object = {
  "properties": {
    "expose": false,
    "wf_name": "weaviate_update_object",
    "parameters": {
      "0": {
        "key": "chat",
        "value": "custom.chat",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "1": {
        "key": "object_id",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "2": {
        "key": "user_message",
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
      "3": {
        "key": "llm_reply",
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
      "4": {
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
      "5": {
        "key": "full_text",
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
      "6": {
        "key": "normalized",
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
      "7": {
        "key": "sort",
        "value": "number",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "8": {
        "key": "saved_manually",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "9": {
        "key": "memory_level",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "10": {
        "key": "for_api_organization_id",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "11": {
        "key": "workspace_user",
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
      },
      "12": {
        "key": "normalization_input_tokens",
        "value": "number",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "13": {
        "key": "normalization_output_tokens",
        "value": "number",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      }
    },
    "auth_unecessary": false
  },
  "type": "APIEvent",
  "id": "bTLtD",
  "name": "weaviate_update_object",
  "actions": {
    "0": {
      "properties": {
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
                      "properties": {
                        "btype_id": "text",
                        "event_id": "bTLtD",
                        "param_id": "normalized",
                        "param_name": "normalized"
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
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHDh0.bTHDr0",
      "id": "bTQOq"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "args": "true",
                  "type": "Message",
                  "name": "equals",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "trimmed",
                "is_slidable": false
              },
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "properties": {
              "regex": {
                "entries": {
                  "0": "(?<='save_to_long_term'\\s*:\\s*')[^']+"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "extract_regex",
            "is_slidable": true
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTLtD",
            "param_id": "full_text",
            "param_name": "full_text"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "url_params_uuid": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTLtD",
                "optional": true,
                "param_id": "object_id",
                "param_name": "object_id"
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
        "url_params_tenant_id": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "_id",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "organization_workspace_custom_organization",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.workspace",
                "event_id": "bTLtD",
                "param_id": "workspace_user",
                "param_name": "workspace_user"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "url_params_collection": {
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHIF0.bTJUb0",
      "id": "bTOYL0"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "args": "true",
                  "type": "Message",
                  "name": "equals",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "trimmed",
                "is_slidable": false
              },
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "properties": {
              "regex": {
                "entries": {
                  "0": "(?<='save_to_long_term'\\s*:\\s*')[^']+"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "extract_regex",
            "is_slidable": true
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTLtD",
            "param_id": "full_text",
            "param_name": "full_text"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "url_params_uuid": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTLtD",
                "param_id": "object_id",
                "param_name": "object_id"
              },
              "type": "APIEventParameter",
              "said": "a2Vsdm8tMzE4ODQ=",
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
                    "0": "{ \"class\": \"Messages_v3\", \"properties\":{\"vectorized_content\": ",
                    "1": {
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
                              "properties": {
                                "btype_id": "text",
                                "event_id": "bTLtD",
                                "param_id": "normalized",
                                "param_name": "normalized"
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
                    "2": ", \"already_saved\": \"true\", ",
                    "3": {
                      "next": {
                        "args": "true",
                        "next": {
                          "properties": {
                            "formatting_for_true": {
                              "entries": {
                                "0": "\"saved_manually\": \"true\", "
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
                        "btype_id": "text",
                        "event_id": "bTLtD",
                        "optional": true,
                        "param_id": "saved_manually",
                        "param_name": "saved_manually"
                      },
                      "type": "APIEventParameter",
                      "is_slidable": false
                    },
                    "4": "  ",
                    "5": {
                      "next": {
                        "next": {
                          "args": {
                            "next": {
                              "next": {
                                "args": {
                                  "properties": {
                                    "btype_id": "text",
                                    "event_id": "bTLtD",
                                    "optional": true,
                                    "param_id": "memory_level",
                                    "param_name": "memory_level"
                                  },
                                  "type": "APIEventParameter",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "not_contains",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "_api_c2_body.properties.memory_level_with_id",
                              "is_slidable": false
                            },
                            "properties": {
                              "action_id": "bTOYL0"
                            },
                            "type": "PreviousStep",
                            "is_slidable": false
                          },
                          "next": {
                            "properties": {
                              "formatting_for_true": {
                                "entries": {
                                  "0": "\"memory_level_with_id\": [",
                                  "1": {
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
                                                        "properties": {
                                                          "content": {
                                                            "entries": {
                                                              "0": "\"",
                                                              "1": {
                                                                "type": "InjectedValue",
                                                                "is_slidable": false
                                                              },
                                                              "2": "\""
                                                            },
                                                            "type": "TextExpression"
                                                          },
                                                          "delimiter": {
                                                            "entries": {
                                                              "0": ","
                                                            },
                                                            "type": "TextExpression"
                                                          }
                                                        },
                                                        "type": "Message",
                                                        "name": "format_as_text",
                                                        "is_slidable": true
                                                      },
                                                      "type": "Message",
                                                      "name": "_api_c2_body.properties.memory_level_with_id",
                                                      "is_slidable": false
                                                    },
                                                    "properties": {
                                                      "action_id": "bTOYL0"
                                                    },
                                                    "type": "PreviousStep",
                                                    "is_slidable": false
                                                  },
                                                  "2": ",",
                                                  "3": {
                                                    "next": {
                                                      "type": "Message",
                                                      "name": "format_json_encode",
                                                      "is_slidable": false
                                                    },
                                                    "properties": {
                                                      "btype_id": "text",
                                                      "event_id": "bTLtD",
                                                      "optional": true,
                                                      "param_id": "memory_level",
                                                      "param_name": "memory_level"
                                                    },
                                                    "type": "APIEventParameter",
                                                    "is_slidable": false
                                                  },
                                                  "4": ""
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
                                                        "name": "format_json_encode",
                                                        "is_slidable": false
                                                      },
                                                      "type": "Message",
                                                      "name": "_id",
                                                      "is_slidable": false
                                                    },
                                                    "properties": {
                                                      "btype_id": "user",
                                                      "event_id": "bTLtD",
                                                      "param_id": "user",
                                                      "param_name": "user"
                                                    },
                                                    "type": "APIEventParameter",
                                                    "is_slidable": false
                                                  },
                                                  "2": ",",
                                                  "3": {
                                                    "next": {
                                                      "type": "Message",
                                                      "name": "format_json_encode",
                                                      "is_slidable": false
                                                    },
                                                    "properties": {
                                                      "btype_id": "text",
                                                      "event_id": "bTLtD",
                                                      "optional": true,
                                                      "param_id": "memory_level",
                                                      "param_name": "memory_level"
                                                    },
                                                    "type": "APIEventParameter",
                                                    "is_slidable": false
                                                  },
                                                  "4": ""
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
                                        "name": "first_element",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "_api_c2_body.properties.memory_level_with_id",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "action_id": "bTOYL0"
                                    },
                                    "type": "PreviousStep",
                                    "is_slidable": false
                                  },
                                  "2": "],"
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
                        "name": "is_not_empty",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "text",
                        "event_id": "bTLtD",
                        "optional": true,
                        "param_id": "memory_level",
                        "param_name": "memory_level"
                      },
                      "type": "APIEventParameter",
                      "is_slidable": false
                    },
                    "6": "  \"token_count\": ",
                    "7": {
                      "properties": {
                        "arbitrary_text": {
                          "entries": {
                            "0": "",
                            "1": {
                              "next": {
                                "next": {
                                  "args": 2.7,
                                  "type": "Message",
                                  "name": "divide",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "length",
                                "is_slidable": false
                              },
                              "properties": {
                                "btype_id": "text",
                                "event_id": "bTLtD",
                                "param_id": "normalized",
                                "param_name": "normalized"
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
                    "8": "},      \"id\": \"",
                    "9": {
                      "properties": {
                        "btype_id": "text",
                        "event_id": "bTLtD",
                        "param_id": "object_id",
                        "param_name": "object_id"
                      },
                      "type": "APIEventParameter",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "10": "\",   \"tenant\": \"",
                    "11": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "_id",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "organization_workspace_custom_organization",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "custom.workspace",
                        "event_id": "bTLtD",
                        "param_id": "workspace_user",
                        "param_name": "workspace_user"
                      },
                      "type": "APIEventParameter",
                      "is_slidable": false
                    },
                    "12": "\" , \"vector\":",
                    "13": {
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
                                "action_id": "bTQOq"
                              },
                              "type": "PreviousStep",
                              "is_slidable": false
                            },
                            "2": "]"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "ArbitraryText"
                    },
                    "14": "}"
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
        },
        "url_params_collection": {
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHIF0.bTLrL",
      "id": "bTLtX"
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "args": "true",
                  "type": "Message",
                  "name": "equals",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "trimmed",
                "is_slidable": false
              },
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "properties": {
              "regex": {
                "entries": {
                  "0": "(?<='save_to_current_chat'\\s*:\\s*')[^']+"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "extract_regex",
            "is_slidable": true
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTLtD",
            "param_id": "full_text",
            "param_name": "full_text"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "additional_context_list_text",
            "value": {
              "entries": {
                "0": {
                  "properties": {
                    "arbitrary_text": {
                      "entries": {
                        "0": "created_date_unix_ms: ",
                        "1": {
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
                        "2": ";\n",
                        "3": {
                          "next": {
                            "next": {
                              "next": {
                                "next": {
                                  "args": "original",
                                  "next": {
                                    "properties": {
                                      "formatting_for_true": {
                                        "entries": {
                                          "0": "user_message: ",
                                          "1": {
                                            "properties": {
                                              "btype_id": "text",
                                              "event_id": "bTLtD",
                                              "param_id": "user_message",
                                              "param_name": "user_message"
                                            },
                                            "type": "APIEventParameter",
                                            "is_slidable": false
                                          },
                                          "2": "{#NANI}llm_reply: ",
                                          "3": {
                                            "properties": {
                                              "btype_id": "text",
                                              "event_id": "bTLtD",
                                              "param_id": "llm_reply",
                                              "param_name": "llm_reply"
                                            },
                                            "type": "APIEventParameter",
                                            "is_slidable": false
                                          },
                                          "4": ""
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
                                                    "args": "normalized",
                                                    "next": {
                                                      "properties": {
                                                        "formatting_for_true": {
                                                          "entries": {
                                                            "0": "",
                                                            "1": {
                                                              "properties": {
                                                                "btype_id": "text",
                                                                "event_id": "bTLtD",
                                                                "param_id": "normalized",
                                                                "param_name": "normalized"
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
                                                                    "name": "trimmed",
                                                                    "is_slidable": false
                                                                  },
                                                                  "type": "Message",
                                                                  "name": "first_element",
                                                                  "is_slidable": false
                                                                },
                                                                "properties": {
                                                                  "regex": {
                                                                    "entries": {
                                                                      "0": "(?<='data_to_save'\\s*:\\s*')[^']+"
                                                                    },
                                                                    "type": "TextExpression"
                                                                  }
                                                                },
                                                                "type": "Message",
                                                                "name": "extract_regex",
                                                                "is_slidable": true
                                                              },
                                                              "properties": {
                                                                "btype_id": "text",
                                                                "event_id": "bTLtD",
                                                                "param_id": "full_text",
                                                                "param_name": "full_text"
                                                              },
                                                              "type": "APIEventParameter",
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
                                                    "name": "equals",
                                                    "is_slidable": false
                                                  },
                                                  "type": "Message",
                                                  "name": "trimmed",
                                                  "is_slidable": false
                                                },
                                                "type": "Message",
                                                "name": "first_element",
                                                "is_slidable": false
                                              },
                                              "properties": {
                                                "regex": {
                                                  "entries": {
                                                    "0": "(?<='data_to_save'\\s*:\\s*')[^']+"
                                                  },
                                                  "type": "TextExpression"
                                                }
                                              },
                                              "type": "Message",
                                              "name": "extract_regex",
                                              "is_slidable": true
                                            },
                                            "properties": {
                                              "btype_id": "text",
                                              "event_id": "bTLtD",
                                              "param_id": "full_text",
                                              "param_name": "full_text"
                                            },
                                            "type": "APIEventParameter",
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
                                  "name": "equals",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "trimmed",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "first_element",
                              "is_slidable": false
                            },
                            "properties": {
                              "regex": {
                                "entries": {
                                  "0": "(?<='data_to_save'\\s*:\\s*')[^']+"
                                },
                                "type": "TextExpression"
                              }
                            },
                            "type": "Message",
                            "name": "extract_regex",
                            "is_slidable": true
                          },
                          "properties": {
                            "btype_id": "text",
                            "event_id": "bTLtD",
                            "param_id": "full_text",
                            "param_name": "full_text"
                          },
                          "type": "APIEventParameter",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        },
                        "4": ""
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
            "action": "add"
          },
          "1": {
            "key": "context_message_ids_list_text",
            "value": {
              "entries": {
                "0": {
                  "properties": {
                    "btype_id": "text",
                    "event_id": "bTLtD",
                    "optional": true,
                    "param_id": "object_id",
                    "param_name": "object_id"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": "add"
          }
        },
        "to_change": {
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTLtD",
            "param_id": "chat",
            "param_name": "chat"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTLtP"
    },
    "4": {
      "properties": {
        "changes": {
          "0": {
            "key": "log_step_2_list_text",
            "value": {
              "entries": {
                "0": {
                  "properties": {
                    "btype_id": "text",
                    "event_id": "bTLtD",
                    "param_id": "full_text",
                    "param_name": "full_text"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": "add"
          },
          "1": {
            "key": "for_memory_update_number",
            "value": {
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
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "properties": {
            "btype_id": "user",
            "event_id": "bTLtD",
            "param_id": "user",
            "param_name": "user"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTLtV"
    },
    "5": {
      "properties": {
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTNaj0",
        "_wf_param_user": {
          "properties": {
            "btype_id": "user",
            "event_id": "bTLtD",
            "param_id": "user",
            "param_name": "user"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "_wf_param_vector": {
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
                "action_id": "bTQOq"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "2": "]"
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
            "btype_id": "custom.chat",
            "event_id": "bTLtD",
            "param_id": "chat",
            "param_name": "chat"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "_wf_param_memory_level": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "trimmed",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "properties": {
                  "regex": {
                    "entries": {
                      "0": "(?<='memory_level'\\s*:\\s*')[^']+"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "extract_regex",
                "is_slidable": true
              },
              "properties": {
                "btype_id": "text",
                "event_id": "bTLtD",
                "param_id": "full_text",
                "param_name": "full_text"
              },
              "type": "APIEventParameter",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_workspace_user": {
          "properties": {
            "btype_id": "custom.workspace",
            "event_id": "bTLtD",
            "param_id": "workspace_user",
            "param_name": "workspace_user"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "_wf_param_embedding_tokens": {
          "next": {
            "type": "Message",
            "name": "_api_c2_body.usage.prompt_tokens",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTQOq"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "_wf_param_normalized_content": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTLtD",
                "param_id": "normalized",
                "param_name": "normalized"
              },
              "type": "APIEventParameter",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTNhC0"
    },
    "6": {
      "properties": {
        "changes": {
          "0": {
            "key": "string_for_update_number",
            "value": {
              "next": {
                "next": {
                  "args": 1,
                  "type": "Message",
                  "name": "plus",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "string_for_update_number",
                "is_slidable": false
              },
              "type": "InjectedValue",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTLtD",
            "param_id": "chat",
            "param_name": "chat"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTQOf"
    }
  }
};
