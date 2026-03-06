export const bunny_sign_token_empty_chat = {
  "properties": {
    "event_name": "bunny_sign_token_empty_chat",
    "breakpoint": true,
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTcQp0",
        "param_name": "input_url"
      },
      "1": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTtlB",
        "param_name": "type"
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
  "id": "bTtkk",
  "name": "bunny_sign_token_empty_chat",
  "actions": {
    "0": {
      "properties": {
        "params_url": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTtkk",
                "optional": false,
                "param_id": "bTcQp0",
                "param_name": "input_url"
              },
              "type": "CurrentWorkflowItem",
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
                "event_id": "bTtkk",
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
      "id": "bTtkp"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "args": "Team",
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "option.chat_type__os_",
                    "event_id": "bTtkk",
                    "optional": false,
                    "param_id": "bTtlB",
                    "param_name": "type"
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
            "action_id": "bTtkp"
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
                    "action_id": "bTtkp"
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
            "next": {
              "type": "Message",
              "name": "organization_workspace_custom_organization",
              "is_slidable": false
            },
            "type": "Message",
            "name": "current_workspace_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTtkq"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "args": "Personal",
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "option.chat_type__os_",
                    "event_id": "bTtkk",
                    "optional": false,
                    "param_id": "bTtlB",
                    "param_name": "type"
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
            "action_id": "bTtkp"
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
                    "action_id": "bTtkp"
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
          "type": "CurrentUser",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTtkr"
    },
    "3": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "args": "Project",
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "properties": {
                    "btype_id": "option.chat_type__os_",
                    "event_id": "bTtkk",
                    "optional": false,
                    "param_id": "bTtlB",
                    "param_name": "type"
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
            "action_id": "bTtkp"
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
                    "action_id": "bTtkp"
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
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUif0"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTtkv"
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
                    "action_id": "bTtkp"
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
      "id": "bTtkw"
    }
  },
};
