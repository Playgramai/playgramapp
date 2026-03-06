export const create_message = {
  "properties": {
    "expose": false,
    "wf_name": "create_message",
    "parameters": {
      "0": {
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
      "1": {
        "key": "model",
        "value": "option.llm_models__os_",
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
        "key": "Chat",
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
        "key": "Workspace & User",
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
      "4": {
        "key": "sort",
        "value": "number",
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
        "key": "user_image",
        "value": "text",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": true
      }
    },
    "ignore_privacy_rules": true
  },
  "type": "APIEvent",
  "id": "bTtgc0",
  "actions": {
    "0": {
      "properties": {
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
                "event_id": "bTtgc0",
                "param_id": "Chat",
                "param_name": "Chat"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_user_id": {
          "entries": {
            "0": {
              "next": {
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
                "type": "Message",
                "name": "user_user",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "text",
                "event_id": "bTtgc0",
                "param_id": "Workspace & User",
                "param_name": "Workspace & User"
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
        "body_params_file_url": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "type": "Message",
                            "name": "format_json_encode",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "text",
                            "event_id": "bTtgc0",
                            "optional": true,
                            "param_id": "file_url",
                            "param_name": "file_url"
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
                "name": "is_not_empty",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "text",
                "event_id": "bTtgc0",
                "optional": true,
                "param_id": "file_url",
                "param_name": "file_url"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_llm_model": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "format_json_encode",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "display",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "option.llm_models__os_",
                "event_id": "bTtgc0",
                "param_id": "model",
                "param_name": "model"
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
              "next": {
                "next": {
                  "type": "Message",
                  "name": "format_json_encode",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "name_text",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.workspace",
                "event_id": "bTtgc0",
                "param_id": "Workspace & User",
                "param_name": "Workspace & User"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_user_image": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "type": "Message",
                            "name": "format_json_encode",
                            "is_slidable": false
                          },
                          "properties": {
                            "btype_id": "text",
                            "event_id": "bTtgc0",
                            "optional": true,
                            "param_id": "user_image",
                            "param_name": "user_image"
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
                "name": "is_not_empty",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "text",
                "event_id": "bTtgc0",
                "optional": true,
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
                "btype_id": "number",
                "event_id": "bTtgc0",
                "param_id": "sort",
                "param_name": "sort"
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
                "event_id": "bTtgc0",
                "param_id": "Chat",
                "param_name": "Chat"
              },
              "type": "APIEventParameter",
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
                "event_id": "bTtgc0",
                "param_id": "user_message",
                "param_name": "user_message"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_user_message_created_date": {
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
        }
      },
      "type": "apiconnector2-bTHIF0.bTHIv0",
      "id": "bTtgh0",
      "name": "Weaviate - Add Object to Collection"
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
            "name": "_api_c2_body.id",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTtgh0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "string_for_update_number",
            "value": {
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
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTtgc0",
            "param_id": "Chat",
            "param_name": "Chat"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTtgi0"
    }
  },
};
