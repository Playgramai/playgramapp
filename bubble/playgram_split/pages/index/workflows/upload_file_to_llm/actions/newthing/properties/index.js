export const properties = {
  "initial_values": {
    "0": {
      "key": "bunny_url_text",
      "value": {
        "entries": {
          "0": {
            "properties": {
              "btype_id": "text",
              "event_id": "bTcLF",
              "optional": false,
              "param_id": "bTcNc",
              "param_name": "bunny_url"
            },
            "type": "CurrentWorkflowItem",
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
      "key": "claude_id_text",
      "value": {
        "entries": {
          "0": {
            "next": {
              "type": "Message",
              "name": "_api_c2_body.id",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTcLN"
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
    "2": {
      "key": "gemini_id_text",
      "value": {
        "entries": {
          "0": {
            "next": {
              "type": "Message",
              "name": "bTjCr",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTjCT"
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
    "3": {
      "key": "openai_id_text",
      "value": {
        "entries": {
          "0": {
            "next": {
              "type": "Message",
              "name": "_api_c2_body.id",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTcLS"
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
      "key": "openai_vector_store_id_text",
      "value": {
        "entries": {
          "0": {
            "next": {
              "type": "Message",
              "name": "_api_c2_body.id",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTcLX"
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
    "5": {
      "key": "file_size_number",
      "value": {
        "next": {
          "type": "Message",
          "name": "bTjCs",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTjCT"
        },
        "type": "PreviousStep",
        "is_slidable": false
      },
      "action": {
        "type": "Empty"
      }
    },
    "6": {
      "key": "gemini_file_name_text",
      "value": {
        "entries": {
          "0": {
            "next": {
              "type": "Message",
              "name": "bTjCt",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTjCT"
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
    "7": {
      "key": "mime_type_text",
      "value": {
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
                              "event_id": "bTcLF",
                              "optional": false,
                              "param_id": "bTcLf",
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
      "action": {
        "type": "Empty"
      }
    },
    "8": {
      "key": "gemini_delete_scheduled_api_text",
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
    },
    "9": {
      "key": "claude_delete_scheduled_api_text",
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
    },
    "10": {
      "key": "openai_delete_scheduled_api_text",
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
    },
    "11": {
      "key": "chat_custom_chat",
      "value": {
        "properties": {
          "btype_id": "custom.chat",
          "event_id": "bTcLF",
          "optional": false,
          "param_id": "bTcNd",
          "param_name": "chat"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "action": {
        "type": "Empty"
      }
    },
    "12": {
      "key": "chat_type_option_chat_type__os_",
      "value": {
        "next": {
          "type": "Message",
          "name": "type_option_chat_type__os_",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "custom.chat",
          "event_id": "bTcLF",
          "optional": false,
          "param_id": "bTcNd",
          "param_name": "chat"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "action": {
        "type": "Empty"
      }
    },
    "13": {
      "key": "organization_custom_organization",
      "value": {
        "next": {
          "type": "Message",
          "name": "organization_custom_organization",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "custom.chat",
          "event_id": "bTcLF",
          "optional": false,
          "param_id": "bTcNd",
          "param_name": "chat"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "action": {
        "type": "Empty"
      }
    },
    "14": {
      "key": "project_custom_project",
      "value": {
        "next": {
          "type": "Message",
          "name": "project_custom_project",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "custom.chat",
          "event_id": "bTcLF",
          "optional": false,
          "param_id": "bTcNd",
          "param_name": "chat"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "action": {
        "type": "Empty"
      }
    },
    "15": {
      "key": "shared_access_chat__boolean",
      "value": {
        "next": {
          "type": "Message",
          "name": "share_access_boolean",
          "is_slidable": false
        },
        "properties": {
          "btype_id": "custom.chat",
          "event_id": "bTcLF",
          "optional": false,
          "param_id": "bTcNd",
          "param_name": "chat"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      },
      "action": {
        "type": "Empty"
      }
    }
  },
  "thing_type": "custom.file",
};
