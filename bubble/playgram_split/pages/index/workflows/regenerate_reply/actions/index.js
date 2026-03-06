import { _4 } from './_4/index.js';

export const actions = {
  "4": _4,
  "0": {
    "properties": {
      "data_source": {
        "next": {
          "next": {
            "args": 1,
            "next": {
              "args": {
                "next": {
                  "args": 1,
                  "type": "Message",
                  "name": "minus",
                  "is_slidable": false
                },
                "properties": {
                  "btype_id": "number",
                  "event_id": "bTacv0",
                  "optional": false,
                  "param_id": "bTtxt0",
                  "param_name": "current_cell_index"
                },
                "type": "CurrentWorkflowItem",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "properties": {
                    "arbitrary_text": {
                      "entries": {
                        "0": "<#NANI?>chat_id: \"",
                        "1": {
                          "next": {
                            "type": "Message",
                            "name": "_id",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "custom.chat",
                            "event_id": "bTacv0",
                            "optional": false,
                            "param_id": "bTadD0",
                            "param_name": "chat"
                          },
                          "type": "CurrentWorkflowItem",
                          "is_slidable": false
                        },
                        "2": "\"<#NANI?>user_message: \"",
                        "3": {
                          "properties": {
                            "btype_id": "text",
                            "event_id": "bTacv0",
                            "optional": false,
                            "param_id": "bTadT0",
                            "param_name": "message_text"
                          },
                          "type": "CurrentWorkflowItem",
                          "is_slidable": false
                        },
                        "4": "\"<#NANI?>model: \"",
                        "5": {
                          "next": {
                            "next": {
                              "next": {
                                "type": "Message",
                                "name": "display",
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
                        "6": "\"<#NANI?>user_message_image: \"",
                        "7": {
                          "next": {
                            "next": {
                              "args": "image",
                              "next": {
                                "properties": {
                                  "formatting_for_true": {
                                    "entries": {
                                      "0": {
                                        "next": {
                                          "type": "Message",
                                          "name": "bunny_url_text",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "btype_id": "custom.file",
                                          "event_id": "bTacv0",
                                          "optional": true,
                                          "param_id": "bTaeu0",
                                          "param_name": "chat_file"
                                        },
                                        "type": "CurrentWorkflowItem",
                                        "said": "a2Vsdm8tMzE4ODQ=",
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
                              "name": "contains",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "mime_type_text",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "custom.file",
                            "event_id": "bTacv0",
                            "optional": true,
                            "param_id": "bTaeu0",
                            "param_name": "chat_file"
                          },
                          "type": "CurrentWorkflowItem",
                          "is_slidable": false
                        },
                        "8": "\"<#NANI?>user_message_file_url: \"",
                        "9": {
                          "next": {
                            "next": {
                              "args": "image",
                              "next": {
                                "properties": {
                                  "formatting_for_true": {
                                    "entries": {
                                      "0": {
                                        "next": {
                                          "type": "Message",
                                          "name": "bunny_url_text",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "btype_id": "custom.file",
                                          "event_id": "bTacv0",
                                          "optional": true,
                                          "param_id": "bTaeu0",
                                          "param_name": "chat_file"
                                        },
                                        "type": "CurrentWorkflowItem",
                                        "said": "a2Vsdm8tMzE4ODQ=",
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
                              "name": "not_contains",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "mime_type_text",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "custom.file",
                            "event_id": "bTacv0",
                            "optional": true,
                            "param_id": "bTaeu0",
                            "param_name": "chat_file"
                          },
                          "type": "CurrentWorkflowItem",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        },
                        "10": "\"<#NANI?>"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "ArbitraryText"
                },
                "type": "Message",
                "name": "plus_element",
                "is_slidable": false
              },
              "type": "Message",
              "name": "limit_to",
              "is_slidable": false
            },
            "type": "Message",
            "name": "list_from",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_list_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTtcm0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "element_id": "bTtcm0"
    },
    "type": "DisplayListData",
    "id": "bTtxx0"
  },
  "1": {
    "properties": {
      "value": {
        "properties": {
          "btype_id": "text",
          "event_id": "bTacv0",
          "optional": false,
          "param_id": "bTadB0",
          "param_name": "message_id"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "element_id": "bTUdV0",
      "custom_state": "custom.regenerate_chat_id_",
      "custom_states_values": {
        "0": {
          "value": {
            "next": {
              "next": {
                "args": {
                  "properties": {
                    "btype_id": "custom.chat",
                    "event_id": "bTacv0",
                    "optional": false,
                    "param_id": "bTadD0",
                    "param_name": "chat"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "plus_element",
                "is_slidable": false
              },
              "type": "Message",
              "name": "custom.streaming_chats_",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUdV0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "custom_state": "custom.streaming_chats_"
        }
      }
    },
    "type": "SetCustomState",
    "id": "bTatb",
    "name": "Set states regenerate_message_id... of index"
  },
  "2": {
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
              "name": "first_element",
              "is_slidable": false
            },
            "properties": {
              "constraints": {
                "0": {
                  "key": "Created Date",
                  "value": {
                    "properties": {
                      "btype_id": "date",
                      "event_id": "bTacv0",
                      "optional": false,
                      "param_id": "bTadU0",
                      "param_name": "message_date"
                    },
                    "type": "CurrentWorkflowItem",
                    "is_slidable": false
                  },
                  "constraint_type": "less than"
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
          "event_id": "bTacv0",
          "optional": false,
          "param_id": "bTadD0",
          "param_name": "chat"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "date": {
        "properties": {
          "name": "Current Date/Time"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "api_event": "bTtvJ0",
      "_wf_param_chat": {
        "properties": {
          "btype_id": "custom.chat",
          "event_id": "bTacv0",
          "optional": false,
          "param_id": "bTadD0",
          "param_name": "chat"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "_wf_param_message_date": {
        "properties": {
          "btype_id": "date",
          "event_id": "bTacv0",
          "optional": false,
          "param_id": "bTadU0",
          "param_name": "message_date"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      }
    },
    "type": "ScheduleAPIEvent",
    "id": "bTtuz0"
  },
  "3": {
    "properties": {
      "body_params_query": {
        "entries": {
          "0": {
            "properties": {
              "arbitrary_text": {
                "entries": {
                  "0": "{\"match\":{\"class\":\"Messages_v3\",\"where\":{\"operator\":\"And\",\"operands\":[{\"path\":[\"chat_id\"],\"operator\":\"Equal\",\"valueText\":\"",
                  "1": {
                    "next": {
                      "type": "Message",
                      "name": "_id",
                      "is_slidable": false
                    },
                    "properties": {
                      "btype_id": "custom.chat",
                      "event_id": "bTcDb",
                      "optional": false,
                      "param_id": "bTadD0",
                      "param_name": "chat"
                    },
                    "type": "CurrentWorkflowItem",
                    "is_slidable": false
                  },
                  "2": "\"},{\"path\":[\"user_message_created_date\"],\"operator\":\"GreaterThanEqual\",\"valueText\":\"",
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
                      "btype_id": "date",
                      "event_id": "bTcDb",
                      "optional": false,
                      "param_id": "bTadU0",
                      "param_name": "message_date"
                    },
                    "type": "CurrentWorkflowItem",
                    "is_slidable": false
                  },
                  "4": "\"}]}}, \"output\":\"minimal\",\"dryRun\":false}"
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
      "body_params_chat_id": {
        "entries": {
          "0": {
            "next": {
              "type": "Message",
              "name": "_id",
              "is_slidable": false
            },
            "properties": {
              "btype_id": "custom.chat",
              "event_id": "bTacv0",
              "optional": false,
              "param_id": "bTadD0",
              "param_name": "chat"
            },
            "type": "CurrentWorkflowItem",
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
      "url_params_tenant_name": {
        "entries": {
          "0": {
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
              "btype_id": "custom.chat",
              "event_id": "bTacv0",
              "optional": false,
              "param_id": "bTadD0",
              "param_name": "chat"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      },
      "body_params_unix_timestamp_string": {
        "entries": {
          "0": {
            "next": {
              "properties": {
                "component_to_extract": "UNIX"
              },
              "type": "Message",
              "name": "extract_from_date",
              "is_slidable": true
            },
            "properties": {
              "btype_id": "date",
              "event_id": "bTacv0",
              "optional": false,
              "param_id": "bTadU0",
              "param_name": "message_date"
            },
            "type": "CurrentWorkflowItem",
            "is_slidable": false
          }
        },
        "type": "TextExpression"
      }
    },
    "type": "apiconnector2-bTHIF0.bTagN",
    "id": "bTagf0"
  },
};
