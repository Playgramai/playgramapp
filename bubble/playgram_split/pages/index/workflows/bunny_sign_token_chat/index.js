export const bunny_sign_token_chat = {
  "properties": {
    "event_name": "bunny_sign_token_chat",
    "breakpoint": false,
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "custom.chat",
        "optional": false,
        "param_id": "bTQpF0",
        "param_name": "chat"
      },
      "1": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTcQp0",
        "param_name": "input_url"
      }
    },
    "return_types": {
      "0": {
        "display": "signed_url",
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "return_id": "bTcRR0"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTtkT",
  "name": "bunny_sign_token_chat",
  "actions": {
    "0": {
      "properties": {
        "params_url": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTtkT",
                "optional": false,
                "param_id": "bTcQp0",
                "param_name": "input_url"
              },
              "type": "CurrentWorkflowItem",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "params_path": {
          "entries": {
            "0": "/",
            "1": {
              "next": {
                "next": {
                  "args": 4,
                  "type": "Message",
                  "name": "specific_item",
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
                "event_id": "bTtkT",
                "optional": false,
                "param_id": "bTcQp0",
                "param_name": "input_url"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            },
            "2": "/"
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
        },
        "url_params_app version": {
          "entries": {
            "0": {
              "properties": {
                "name": "AppVersion"
              },
              "type": "PageData",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTMBs0.bTrIG1",
      "id": "bTtkY"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "args": {
                        "properties": {
                          "option_set": "option.chat_type__os_",
                          "option_value": "team"
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
                    "event_id": "bTtkT",
                    "optional": false,
                    "param_id": "bTQpF0",
                    "param_name": "chat"
                  },
                  "type": "CurrentWorkflowItem",
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
            "name": "_api_c2_response.signed_url",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTtkY"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "signed_url_token_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "next": {
                        "args": 4,
                        "type": "Message",
                        "name": "specific_item",
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
                    "type": "Message",
                    "name": "_api_c2_response.signed_url",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTtkY"
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
            "key": "signed_url_token_date_date",
            "value": {
              "next": {
                "type": "Message",
                "name": "get_AAV",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTVPN"
              },
              "type": "GetElement",
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
            "event_id": "bTtkT",
            "optional": false,
            "param_id": "bTQpF0",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTtkZ"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "args": {
                        "properties": {
                          "option_set": "option.chat_type__os_",
                          "option_value": "personal"
                        },
                        "type": "OneOptionValue",
                        "is_slidable": false
                      },
                      "next": {
                        "args": {
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
                            "event_id": "bTtkT",
                            "optional": false,
                            "param_id": "bTQpF0",
                            "param_name": "chat"
                          },
                          "type": "CurrentWorkflowItem",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "or_",
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
                    "event_id": "bTtkT",
                    "optional": false,
                    "param_id": "bTQpF0",
                    "param_name": "chat"
                  },
                  "type": "CurrentWorkflowItem",
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
            "name": "_api_c2_response.signed_url",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTtkY"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "signed_url_token_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "next": {
                        "args": 4,
                        "type": "Message",
                        "name": "specific_item",
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
                    "type": "Message",
                    "name": "_api_c2_response.signed_url",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTtkY"
                  },
                  "type": "PreviousStep",
                  "said": "a2Vsdm8tMzE4ODQ=",
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
            "key": "signed_url_token_date_date",
            "value": {
              "next": {
                "type": "Message",
                "name": "get_AAV",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTVPN"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
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
            "name": "Created By",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTtkT",
            "optional": false,
            "param_id": "bTQpF0",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTtkd"
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
                      "args": {
                        "properties": {
                          "option_set": "option.chat_type__os_",
                          "option_value": "project"
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
                    "event_id": "bTtkT",
                    "optional": false,
                    "param_id": "bTQpF0",
                    "param_name": "chat"
                  },
                  "type": "CurrentWorkflowItem",
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
            "name": "_api_c2_response.signed_url",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTtkY"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "changes": {
          "0": {
            "key": "signed_url_token_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "next": {
                        "args": 4,
                        "type": "Message",
                        "name": "specific_item",
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
                    "type": "Message",
                    "name": "_api_c2_response.signed_url",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTtkY"
                  },
                  "type": "PreviousStep",
                  "said": "a2Vsdm8tMzE4ODQ=",
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
            "key": "signed_url_token_date_date",
            "value": {
              "next": {
                "type": "Message",
                "name": "get_AAV",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTVPN"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
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
            "name": "project_custom_project",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTtkT",
            "optional": false,
            "param_id": "bTQpF0",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTtke"
    },
    "4": {
      "properties": {
        "return_values": {
          "0": {
            "return_id": "bTcRR0",
            "return_value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2_response.signed_url",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTtkY"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            }
          }
        }
      },
      "type": "TerminateWorkflow",
      "id": "bTtkf"
    }
  },
};
