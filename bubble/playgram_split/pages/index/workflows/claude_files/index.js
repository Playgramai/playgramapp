export const claude_files = {
  "properties": {
    "event_name": "claude_files",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTvkt1",
        "param_name": "file_id"
      }
    },
    "return_types": {
      "0": {
        "display": "file_url",
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "return_id": "bTvku1"
      },
      "1": {
        "display": "mime_type",
        "is_list": false,
        "btype_id": "option.file_types__os_",
        "optional": false,
        "return_id": "bTvkv1"
      }
    }
  },
  "type": "CustomEvent",
  "id": "bTvkn1",
  "actions": {
    "0": {
      "properties": {
        "url_params_file_id": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTvkn1",
                "optional": false,
                "param_id": "bTvkt1",
                "param_name": "file_id"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHER0.bTvkF1",
      "id": "bTvkz1"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": "json",
              "type": "Message",
              "name": "not_contains",
              "is_slidable": false
            },
            "type": "Message",
            "name": "_api_c2_body.mime_type",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTvkz1"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "url_params_file_id": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTvkn1",
                "optional": false,
                "param_id": "bTvkt1",
                "param_name": "file_id"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTHER0.bTvWk1",
      "id": "bTvlB1"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "args": "json",
              "type": "Message",
              "name": "contains",
              "is_slidable": false
            },
            "type": "Message",
            "name": "_api_c2_body.mime_type",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTvkz1"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "params_jwt": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "jwt_text",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "current_organization_custom_organization",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "params_file_id": {
          "entries": {
            "0": {
              "properties": {
                "btype_id": "text",
                "event_id": "bTvkn1",
                "optional": false,
                "param_id": "bTvkt1",
                "param_name": "file_id"
              },
              "type": "CurrentWorkflowItem",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "params_provider": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "display",
                "is_slidable": false
              },
              "properties": {
                "option_set": "option.llm_providers__os_",
                "option_value": "claude"
              },
              "type": "OptionValue",
              "said": "a2Vsdm8tMzE4ODQ="
            }
          },
          "type": "TextExpression"
        },
        "params_file_name": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "_api_c2_body.filename",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTvkz1"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
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
        "params_container_id": {
          "entries": {
            "0": ""
          },
          "type": "TextExpression"
        }
      },
      "type": "apiconnector2-bTMBs0.bTvkJ1",
      "id": "bTvlG1"
    },
    "3": {
      "properties": {
        "return_values": {
          "0": {
            "return_id": "bTvku1",
            "return_value": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "args": "json",
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "",
                              "1": {
                                "next": {
                                  "type": "Message",
                                  "name": "url",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "action_id": "bTvlB1"
                                },
                                "type": "PreviousStep",
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
                                  "type": "Message",
                                  "name": "_api_c2_body.response.json_file",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "action_id": "bTvlG1"
                                },
                                "type": "PreviousStep",
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
                      "name": "not_contains",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "_api_c2_body.mime_type",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTvkz1"
                  },
                  "type": "PreviousStep",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            }
          },
          "1": {
            "return_id": "bTvkv1",
            "return_value": {
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
                                "name": "_api_c2_body.filename",
                                "is_slidable": false
                              },
                              "properties": {
                                "action_id": "bTvkz1"
                              },
                              "type": "PreviousStep",
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
              "type": "OptionValue",
              "said": "a2Vsdm8tMzE4ODQ="
            }
          }
        }
      },
      "type": "TerminateWorkflow",
      "id": "bTvlL1"
    }
  },
};
