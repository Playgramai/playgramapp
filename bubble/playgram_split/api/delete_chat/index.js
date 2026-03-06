export const delete_chat = {
  "properties": {
    "expose": false,
    "wf_name": "delete_chat",
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
        "optional": {
          "type": "Empty"
        }
      },
      "1": {
        "key": "delete_memory",
        "value": "boolean",
        "in_url": {
          "type": "Empty"
        },
        "is_list": {
          "type": "Empty"
        },
        "optional": false
      },
      "2": {
        "key": "organization_workspace",
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
      }
    }
  },
  "type": "APIEvent",
  "id": "bTIyT",
  "actions": {
    "0": {
      "properties": {
        "data_source": {
          "next": {
            "next": {
              "next": {
                "type": "Message",
                "name": "bunny_url_text",
                "is_slidable": false
              },
              "properties": {
                "constraints": {
                  "0": {
                    "key": "mime_type_text",
                    "value": {
                      "entries": {
                        "0": "image",
                        "1": {
                          "type": "Empty"
                        }
                      },
                      "type": "TextExpression"
                    },
                    "constraint_type": "text contains string"
                  },
                  "1": {
                    "key": "bunny_url_text",
                    "value": {
                      "entries": {
                        "0": "cdn.bubble.io",
                        "1": {
                          "type": "Empty"
                        }
                      },
                      "type": "TextExpression"
                    },
                    "constraint_type": "not text contains string"
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
            "event_id": "bTIyT",
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
        "api_event": "bTcSN0",
        "type_of_list": "image",
        "_wf_param_file": {
          "type": "InjectedValue",
          "is_slidable": false
        },
        "_wf_param_image": {
          "type": "InjectedValue",
          "is_slidable": false
        },
        "_wf_param_file_url": {
          "entries": {
            "0": {
              "type": "InjectedValue",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bTcSI0"
    },
    "1": {
      "properties": {
        "data_source": {
          "next": {
            "next": {
              "next": {
                "type": "Message",
                "name": "png_image_text",
                "is_slidable": false
              },
              "properties": {
                "constraints": {
                  "0": {
                    "key": "mime_type_text",
                    "value": {
                      "entries": {
                        "0": "image",
                        "1": {
                          "type": "Empty"
                        }
                      },
                      "type": "TextExpression"
                    },
                    "constraint_type": "text contains string"
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
            "event_id": "bTIyT",
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
        "api_event": "bTcSN0",
        "type_of_list": "image",
        "_wf_param_file": {
          "type": "InjectedValue",
          "is_slidable": false
        },
        "_wf_param_image": {
          "type": "InjectedValue",
          "is_slidable": false
        },
        "_wf_param_file_url": {
          "entries": {
            "0": {
              "type": "InjectedValue",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bTtqX0"
    },
    "2": {
      "properties": {
        "data_source": {
          "next": {
            "next": {
              "next": {
                "type": "Message",
                "name": "bunny_url_text",
                "is_slidable": false
              },
              "properties": {
                "constraints": {
                  "0": {
                    "key": "bunny_url_text",
                    "value": {
                      "entries": {
                        "0": "cdn.bubble.io",
                        "1": {
                          "type": "Empty"
                        }
                      },
                      "type": "TextExpression"
                    },
                    "constraint_type": "text contains string"
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
            "event_id": "bTIyT",
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
        "api_event": "bTSsV0",
        "type_of_list": "file",
        "_wf_param_file": {
          "type": "InjectedValue",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bTwET0"
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
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
                    "action_id": "bTtqX0"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                },
                "next": {
                  "args": {
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
                      "action_id": "bTwET0"
                    },
                    "type": "PreviousStep",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "or_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "or_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "first_element",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTcSI0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "to_delete": {
          "next": {
            "next": {
              "properties": {
                "constraints": {
                  "0": {
                    "key": "mime_type_text",
                    "value": {
                      "entries": {
                        "0": "image",
                        "1": {
                          "type": "Empty"
                        }
                      },
                      "type": "TextExpression"
                    },
                    "constraint_type": "text contains string"
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
            "event_id": "bTIyT",
            "param_id": "chat",
            "param_name": "chat"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "type_to_delete": "custom.file"
      },
      "type": "DeleteListOfThings",
      "id": "bTtqe0"
    },
    "4": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_true",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "boolean",
            "event_id": "bTIyT",
            "optional": false,
            "param_id": "delete_memory",
            "param_name": "delete_memory"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "data_source": {
          "next": {
            "next": {
              "properties": {
                "constraints": {
                  "0": {
                    "key": "mime_type_text",
                    "value": {
                      "entries": {
                        "1": "image"
                      },
                      "type": "TextExpression"
                    },
                    "constraint_type": "not text contains string"
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
            "event_id": "bTIyT",
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
        "api_event": "bTSug0",
        "type_of_list": "custom.file",
        "_wf_param_uuid": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "weaviate_document_id_text",
                "is_slidable": false
              },
              "type": "InjectedValue",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_tenant": {
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
                "event_id": "bTIyT",
                "param_id": "chat",
                "param_name": "chat"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "_wf_param_chat_file": {
          "type": "InjectedValue",
          "is_slidable": false
        },
        "_wf_param_delete_only_chunks_from_weaviate": false
      },
      "type": "ScheduleAPIEventOnList",
      "id": "bTjEB0"
    },
    "5": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_true",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "boolean",
            "event_id": "bTIyT",
            "optional": false,
            "param_id": "delete_memory",
            "param_name": "delete_memory"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "body_params_class": {
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
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "text",
                "event_id": "bTIyT",
                "param_id": "organization_workspace",
                "param_name": "organization_workspace"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "body_params_filter_field_value": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "custom.chat",
                "event_id": "bTIyT",
                "param_id": "chat",
                "param_name": "chat"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHIF0.bTICV0",
      "id": "bTIyZ"
    },
    "6": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_false",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "boolean",
            "event_id": "bTIyT",
            "optional": false,
            "param_id": "delete_memory",
            "param_name": "delete_memory"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "body_params_class": {
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
                "event_id": "bTIyT",
                "param_id": "chat",
                "param_name": "chat"
              },
              "type": "APIEventParameter",
              "said": "a2Vsdm8tMzE4ODQ=",
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
                "type": "Message",
                "name": "_id",
                "is_slidable": false
              },
              "properties": {
                "btype_id": "text",
                "event_id": "bTIyT",
                "param_id": "organization_workspace",
                "param_name": "organization_workspace"
              },
              "type": "APIEventParameter",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHIF0.bTKAV",
      "id": "bTKAt"
    },
    "7": {
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
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "type_option_chat_type__os_",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTIyT",
            "param_id": "chat",
            "param_name": "chat"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "scheduled_id": {
          "next": {
            "type": "Message",
            "name": "scheduled_delete_api_text",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTIyT",
            "param_id": "chat",
            "param_name": "chat"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "CancelScheduledAPIEvent",
      "id": "bTLJu"
    },
    "8": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_not_empty",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "_api_c2_body.output",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTKAt"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "or_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "_api_c2_body.output",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTIyZ"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "to_delete": {
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTIyT",
            "param_id": "chat",
            "param_name": "chat"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "DeleteThing",
      "id": "bTIyb"
    }
  },
};
