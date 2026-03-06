export const add_message_to_weaviate = {
  "properties": {
    "expose": false,
    "wf_name": "add_message_to_weaviate",
    "parameters": {
      "0": {
        "key": "sort_number",
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
        "key": "user_message_created_date",
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
      "2": {
        "key": "user_name",
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
        "key": "profile_photo",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "4": {
        "key": "user_image",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "5": {
        "key": "file_url",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "6": {
        "key": "user_id",
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
      "8": {
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
      "9": {
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
      "10": {
        "key": "project_id",
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
        "key": "organization_id",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "12": {
        "key": "tenant_name",
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
      "13": {
        "key": "workspace_id",
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
      "14": {
        "key": "file_id",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "15": {
        "key": "image",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "16": {
        "key": "llm_model",
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
      "17": {
        "key": "context",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      },
      "18": {
        "key": "chat_file",
        "value": "custom.file",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      }
    }
  },
  "type": "APIEvent",
  "id": "bTsnh0",
  "actions": {
    "0": {
      "properties": {
        "breakpoint": false,
        "body_params_class": {
          "entries": {
            "0": "Messages_v3"
          },
          "type": "TextExpression"
        },
        "body_params_image": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTsnh0",
                "param_id": "image",
                "param_name": "image"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_chat_id": {
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
                "btype_id": "custom.chat",
                "event_id": "bTsnh0",
                "param_id": "chat",
                "param_name": "chat"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_file_id": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTsnh0",
                "param_id": "file_id",
                "param_name": "file_id"
              },
              "type": "APIEventParameter",
              "is_slidable": false
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
              "type": "CurrentUser",
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
        "body_params_file_url": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTsnh0",
                "param_id": "file_url",
                "param_name": "file_url"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "1": ""
          },
          "type": "TextExpression"
        },
        "body_params_llm_model": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTsnh0",
                "param_id": "llm_model",
                "param_name": "llm_model"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_llm_reply": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTsnh0",
                "param_id": "llm_reply",
                "param_name": "llm_reply"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_user_name": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTsnh0",
                "param_id": "user_name",
                "param_name": "user_name"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_project_id": {
          "entries": {
            "0": "",
            "1": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTsnh0",
                "param_id": "project_id",
                "param_name": "project_id"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "body_params_used_tools": {
          "type": "TextExpression"
        },
        "body_params_user_image": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTsnh0",
                "param_id": "user_image",
                "param_name": "user_image"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_sort_number": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTsnh0",
                "param_id": "sort_number",
                "param_name": "sort_number"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_tenant_name": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTsnh0",
                "param_id": "tenant_name",
                "param_name": "tenant_name"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_created_date": {
          "entries": {
            "0": "",
            "1": {
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
              "is_slidable": false
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "body_params_user_message": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTsnh0",
                "param_id": "user_message",
                "param_name": "user_message"
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
              "properties": {
                "btype_id": "text",
                "event_id": "bTsnh0",
                "param_id": "workspace_id",
                "param_name": "workspace_id"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_profile_photo": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTsnh0",
                "param_id": "profile_photo",
                "param_name": "profile_photo"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_organization_id": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTsnh0",
                "param_id": "organization_id",
                "param_name": "organization_id"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
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
            "0": "\"",
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
            "2": "\""
          },
          "type": "TextExpression"
        },
        "body_params_user_message_created_date": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTsnh0",
                "param_id": "user_message_created_date",
                "param_name": "user_message_created_date"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "1": ""
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHIF0.bTHIv0",
      "id": "bTsnn0"
    },
    "1": {
      "properties": {
        "changes": {
          "0": {
            "key": "log_regex_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2_error.body",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTsnn0"
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
      "id": "bTsoL0"
    },
    "2": {
      "properties": {
        "condition": {
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
              "name": "not_equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "type_option_chat_type__os_",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTsnh0",
            "param_id": "chat",
            "param_name": "chat"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "date": {
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTJTB0",
        "_wf_param_chat": {
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTsnh0",
            "param_id": "chat",
            "param_name": "chat"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "_wf_param_user": {
          "type": "CurrentUser",
          "is_slidable": false
        },
        "_wf_param_context": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "[",
                    "1": {
                      "properties": {
                        "btype_id": "text",
                        "event_id": "bTsnh0",
                        "optional": true,
                        "param_id": "context",
                        "param_name": "context"
                      },
                      "type": "APIEventParameter",
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
        "_wf_param_chat_file": {
          "properties": {
            "btype_id": "custom.file",
            "event_id": "bTsnh0",
            "param_id": "chat_file",
            "param_name": "chat_file"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "_wf_param_llm_reply": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_api_c2_body.properties.llm_reply",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTsnn0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_object_id": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "type": "Message",
                        "name": "_api_c2_body.id",
                        "is_slidable": false
                      },
                      "properties": {
                        "action_id": "bTsnn0"
                      },
                      "type": "PreviousStep",
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
            "1": ""
          },
          "type": "TextExpression"
        },
        "_wf_param_user_message": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_api_c2_body.properties.user_message",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTsnn0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_workspace_user": {
          "next": {
            "next": {
              "next": {
                "type": "Message",
                "name": "first_element",
                "is_slidable": false
              },
              "properties": {
                "constraints": {
                  "0": {
                    "key": "organization_workspace_custom_organization",
                    "value": {
                      "next": {
                        "type": "Message",
                        "name": "organization_custom_organization",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "custom.chat",
                        "event_id": "bTsnh0",
                        "param_id": "chat",
                        "param_name": "chat"
                      },
                      "type": "APIEventParameter",
                      "is_slidable": false
                    },
                    "constraint_type": "equals"
                  }
                }
              },
              "type": "Message",
              "name": "filtered",
              "is_slidable": true
            },
            "type": "Message",
            "name": "workspaces_list_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        },
        "_wf_param_current_pair_id": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTUnd0",
                "optional": false,
                "param_id": "bTHdq",
                "param_name": "message uuid"
              },
              "type": "CurrentWorkflowItem",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_current_pair_sort": {
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
        "_wf_param_for_api_organization_id": {
          "type": "TextExpression"
        },
        "_wf_param_normalized_user_message": {
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
                                "0": "(?<=[\u201c\"]normalized[\u201d\"]\\s*:\\s*[\u201c\"])([^\u201d\"]+)"
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
                    "name": "_api_c2_content",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "_api_c2_body.output",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTMZm0"
              },
              "type": "PreviousStep",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTsnp0"
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "_api_c2_body.id",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTsnn0"
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
                      "length": 3,
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
          },
          "1": {
            "key": "need_reset_boolean",
            "value": true,
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTsnh0",
            "param_id": "chat",
            "param_name": "chat"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTsnz0"
    },
    "4": {
      "properties": {
        "condition": {
          "next": {
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
                    "event_id": "bTsnh0",
                    "param_id": "chat_file",
                    "param_name": "chat_file"
                  },
                  "type": "APIEventParameter",
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
            "type": "Message",
            "name": "_api_c2_body.id",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTsnn0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "string_for_library_update_number",
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
                      "length": 5,
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
          "next": {
            "type": "Message",
            "name": "organization_custom_organization",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTsnh0",
            "param_id": "chat",
            "param_name": "chat"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTsoN0"
    }
  }
};
