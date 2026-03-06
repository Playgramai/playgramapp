export const start_move_bunny_files = {
  "properties": {
    "expose": false,
    "wf_name": "start_move_bunny_files",
    "parameters": {
      "0": {
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
      "1": {
        "key": "uuid",
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
      "3": {
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
      "4": {
        "key": "new_type",
        "value": "option.chat_type__os_",
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
  "id": "bTrWd0",
  "actions": {
    "0": {
      "properties": {
        "changes": {
          "0": {
            "key": "chat_type_option_chat_type__os_",
            "value": {
              "next": {
                "next": {
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
                          "args": {
                            "properties": {
                              "btype_id": "option.chat_type__os_",
                              "event_id": "bTrWd0",
                              "param_id": "new_type",
                              "param_name": "new_type"
                            },
                            "type": "APIEventParameter",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "equals",
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
                "option_set": "option.chat_type__os_",
                "option_value": "all values"
              },
              "type": "OptionValue"
            },
            "action": {
              "type": "Empty"
            }
          },
          "1": {
            "key": "project_custom_project",
            "value": {
              "properties": {
                "btype_id": "custom.project",
                "event_id": "bTrWd0",
                "optional": true,
                "param_id": "project",
                "param_name": "project"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
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
                    "key": "bunny_url_text",
                    "value": {
                      "entries": {
                        "0": {
                          "properties": {
                            "btype_id": "text",
                            "event_id": "bTrWd0",
                            "param_id": "file_url",
                            "param_name": "file_url"
                          },
                          "type": "APIEventParameter",
                          "is_slidable": false
                        }
                      },
                      "type": "TextExpression"
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
            "name": "files_list_custom_file",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTrWd0",
            "param_id": "chat",
            "param_name": "chat"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTrWj0"
    },
    "1": {
      "properties": {
        "arguments": {
          "0": {
            "param_id": "bTrYI0",
            "arg_value": {
              "next": {
                "type": "Message",
                "name": "bunny_url_text",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTrWj0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          }
        },
        "custom_event": "bTrYC0"
      },
      "type": "TriggerCustomEvent",
      "id": "bTrYl0"
    },
    "2": {
      "properties": {
        "changes": {
          "0": {
            "key": "bunny_url_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "bTrYJ0",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTrYl0"
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
            "key": "chat_type_option_chat_type__os_",
            "value": {
              "properties": {
                "btype_id": "option.chat_type__os_",
                "event_id": "bTrWd0",
                "param_id": "new_type",
                "param_name": "new_type"
              },
              "type": "APIEventParameter",
              "is_slidable": false
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "properties": {
            "action_id": "bTrWj0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTrXF0"
    },
    "3": {
      "properties": {
        "url_params_uuid": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTrXH0",
                "param_id": "uuid",
                "param_name": "uuid"
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
                    "0": "{ \"class\": \"Messages_v3\", \"properties\":{",
                    "1": {
                      "properties": {
                        "arbitrary_text": {
                          "entries": {
                            "0": "\"file_url\": \"",
                            "1": {
                              "next": {
                                "type": "Message",
                                "name": "bTrYJ0",
                                "is_slidable": false
                              },
                              "properties": {
                                "action_id": "bTrYl0"
                              },
                              "type": "PreviousStep",
                              "is_slidable": false
                            },
                            "2": "\""
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "ArbitraryText"
                    },
                    "2": "}, \"id\": \"",
                    "3": {
                      "properties": {
                        "btype_id": "text",
                        "event_id": "bTrXH0",
                        "param_id": "uuid",
                        "param_name": "uuid"
                      },
                      "type": "APIEventParameter",
                      "is_slidable": false
                    },
                    "4": "\", \"tenant\": \"",
                    "5": {
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
                        "event_id": "bTrXH0",
                        "param_id": "chat",
                        "param_name": "chat"
                      },
                      "type": "APIEventParameter",
                      "is_slidable": false
                    },
                    "6": "\"}"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText"
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
        "url_params_collection": {
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHIF0.bTLrL",
      "id": "bTrYr0"
    }
  },
};
