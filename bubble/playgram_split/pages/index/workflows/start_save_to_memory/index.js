export const start_save_to_memory = {
  "properties": {
    "event_name": "start_save_to_memory",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "api.apiconnector2.bTHIF0.bTHmN.body.data.Get.Messages_v3",
        "optional": false,
        "param_id": "bTMkB0",
        "param_name": "message"
      },
      "1": {
        "is_list": false,
        "btype_id": "custom.chat",
        "optional": false,
        "param_id": "bTQPz0",
        "param_name": "chat"
      },
      "2": {
        "is_list": false,
        "btype_id": "custom.file",
        "optional": true,
        "param_id": "bTghX",
        "param_name": "chat_file"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTUtt0",
  "actions": {
    "0": {
      "properties": {
        "url_params_uuid": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_api_c2__additional.id",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "api.apiconnector2.bTHIF0.bTHmN.body.data.Get.Messages_v3",
                "event_id": "bTUtt0",
                "optional": false,
                "param_id": "bTMkB0",
                "param_name": "message"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_query": {
          "entries": {
            "0": "",
            "1": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "{ \"class\": \"Messages_v3\", \"properties\":{ \"already_saved\": \"true\", \"saved_manually\": \"true\" , \"saved_by_user_id\":\"",
                    "1": {
                      "next": {
                        "type": "Message",
                        "name": "_id",
                        "is_slidable": false
                      },
                      "type": "CurrentUser",
                      "is_slidable": false
                    },
                    "2": "\"},      \"id\": \"",
                    "3": {
                      "next": {
                        "type": "Message",
                        "name": "_api_c2__additional.id",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "api.apiconnector2.bTHIF0.bTHmN.body.data.Get.Messages_v3",
                        "event_id": "bTUtt0",
                        "optional": false,
                        "param_id": "bTMkB0",
                        "param_name": "message"
                      },
                      "type": "CurrentWorkflowItem",
                      "is_slidable": false
                    },
                    "4": "\",   \"tenant\": \"",
                    "5": {
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
                      "type": "CurrentUser",
                      "is_slidable": false
                    },
                    "6": "\"}"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText"
            },
            "2": ""
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
      "id": "bTWFd"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "_api_c2_headers.date",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTWFd"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "string_for_update_number",
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
            "btype_id": "custom.chat",
            "event_id": "bTUtt0",
            "optional": false,
            "param_id": "bTQPz0",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTWFk"
    },
    "2": {
      "properties": {
        "length": 1400,
        "hide_status_bar": true
      },
      "type": "PauseWFClient",
      "id": "bTuFx"
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTWFk"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "value": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "_api_c2__additional.id",
                  "is_slidable": false
                },
                "properties": {
                  "btype_id": "api.apiconnector2.bTHIF0.bTHmN.body.data.Get.Messages_v3",
                  "event_id": "bTUtt0",
                  "optional": false,
                  "param_id": "bTMkB0",
                  "param_name": "message"
                },
                "type": "CurrentWorkflowItem",
                "is_slidable": false
              },
              "type": "Message",
              "name": "minus_element",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.current_saved_message_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUdV0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTUdV0",
        "custom_state": "custom.current_saved_message_"
      },
      "type": "SetCustomState",
      "id": "bTWFp"
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
        "api_event": "bTJTB0",
        "_wf_param_chat": {
          "next": {
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
        "_wf_param_user": {
          "type": "CurrentUser",
          "is_slidable": false
        },
        "_wf_param_context": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "next": {
                          "args": 10,
                          "type": "Message",
                          "name": "minus",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "count",
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
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "next": {
                            "args": 1,
                            "type": "Message",
                            "name": "minus",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "count",
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
                    "next": {
                      "properties": {
                        "content": {
                          "entries": {
                            "0": "{\n\"user\": \"",
                            "1": {
                              "next": {
                                "next": {
                                  "type": "Message",
                                  "name": "first_element",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "regex": {
                                    "entries": {
                                      "0": "(?<=user_message: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "Message",
                                "name": "extract_regex",
                                "is_slidable": true
                              },
                              "type": "InjectedValue",
                              "is_slidable": false
                            },
                            "2": "\"; \"llm\": \"",
                            "3": {
                              "next": {
                                "next": {
                                  "type": "Message",
                                  "name": "first_element",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "regex": {
                                    "entries": {
                                      "0": "(?<=llm_reply: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "Message",
                                "name": "extract_regex",
                                "is_slidable": true
                              },
                              "type": "InjectedValue",
                              "said": "a2Vsdm8tMzE4ODQ=",
                              "is_slidable": false
                            },
                            "4": "\"; \"already_saved\": ",
                            "5": {
                              "next": {
                                "next": {
                                  "type": "Message",
                                  "name": "first_element",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "regex": {
                                    "entries": {
                                      "0": "(?<=already_saved: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "Message",
                                "name": "extract_regex",
                                "is_slidable": true
                              },
                              "type": "InjectedValue",
                              "said": "a2Vsdm8tMzE4ODQ=",
                              "is_slidable": false
                            },
                            "6": "; \"created_at\": ",
                            "7": {
                              "next": {
                                "next": {
                                  "type": "Message",
                                  "name": "first_element",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "regex": {
                                    "entries": {
                                      "0": "(?<=sort: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "Message",
                                "name": "extract_regex",
                                "is_slidable": true
                              },
                              "type": "InjectedValue",
                              "said": "a2Vsdm8tMzE4ODQ=",
                              "is_slidable": false
                            },
                            "8": "; \"id\": \"",
                            "9": {
                              "next": {
                                "next": {
                                  "type": "Message",
                                  "name": "first_element",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "regex": {
                                    "entries": {
                                      "0": "(?<=message_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                    },
                                    "type": "TextExpression"
                                  }
                                },
                                "type": "Message",
                                "name": "extract_regex",
                                "is_slidable": true
                              },
                              "type": "InjectedValue",
                              "said": "a2Vsdm8tMzE4ODQ=",
                              "is_slidable": false
                            },
                            "10": "\"\n}"
                          },
                          "type": "TextExpression"
                        },
                        "delimiter": {
                          "entries": {
                            "0": ",\n"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "format_as_text",
                      "is_slidable": true
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
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_chat_file": {
          "properties": {
            "btype_id": "custom.file",
            "event_id": "bTUtt0",
            "optional": true,
            "param_id": "bTghX",
            "param_name": "chat_file"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        },
        "_wf_param_chat_type": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "to_lowercase",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "display",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "type_option_chat_type__os_",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "text",
                "event_id": "bTUtt0",
                "optional": false,
                "param_id": "bTQPz0",
                "param_name": "chat_type"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_llm_reply": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_api_c2_llm_reply",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "api.apiconnector2.bTHIF0.bTHmN.body.data.Get.Messages_v3",
                "event_id": "bTUtt0",
                "optional": false,
                "param_id": "bTMkB0",
                "param_name": "message"
              },
              "type": "CurrentWorkflowItem",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_object_id": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_api_c2__additional.id",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "api.apiconnector2.bTHIF0.bTHmN.body.data.Get.Messages_v3",
                "event_id": "bTUtt0",
                "optional": false,
                "param_id": "bTMkB0",
                "param_name": "message"
              },
              "type": "CurrentWorkflowItem",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_user_message": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "type": "Message",
                        "name": "_api_c2_user_message",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "api.apiconnector2.bTHIF0.bTHmN.body.data.Get.Messages_v3",
                        "event_id": "bTUtt0",
                        "optional": false,
                        "param_id": "bTMkB0",
                        "param_name": "message"
                      },
                      "type": "CurrentWorkflowItem",
                      "is_slidable": false
                    },
                    "2": ". And save it to memory."
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
        "_wf_param_saved_manually": {
          "entries": {
            "0": "true"
          },
          "type": "TextExpression"
        },
        "_wf_param_workspace_user": {
          "next": {
            "type": "Message",
            "name": "current_workspace_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "_wf_param_current_pair_sort": {
          "next": {
            "type": "Message",
            "name": "_api_c2_sort",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "api.apiconnector2.bTHIF0.bTHmN.body.data.Get.Messages_v3",
            "event_id": "bTUtt0",
            "optional": false,
            "param_id": "bTMkB0",
            "param_name": "message"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTUtu0",
      "name": "Schedule API Workflow weaviate_start_update_object_list"
    }
  },
};
