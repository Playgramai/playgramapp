export const properties = {
  "arguments": {
    "0": {
      "param_id": "bTtBP",
      "arg_value": {
        "properties": {
          "btype_id": "option.llm_models__os_",
          "event_id": "bTtNr0",
          "optional": false,
          "param_id": "bTTGf",
          "param_name": "streaming_model"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      }
    },
    "1": {
      "param_id": "bTtBT",
      "arg_value": {
        "properties": {
          "btype_id": "custom.file",
          "event_id": "bTtNr0",
          "optional": false,
          "param_id": "bTTGT",
          "param_name": "file"
        },
        "type": "CurrentWorkflowItem",
        "is_slidable": false
      }
    },
    "2": {
      "param_id": "bTtBU",
      "arg_value": {
        "next": {
          "next": {
            "next": {
              "properties": {
                "formatting_for_true": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "type": "Message",
                        "name": "_api_c2_response.signed_url",
                        "is_slidable": false
                      },
                      "properties": {
                        "action_id": "bTtNx0"
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
                        "next": {
                          "args": {
                            "properties": {
                              "option_set": "option.chat_type__os_",
                              "option_value": "team"
                            },
                            "type": "OneOptionValue",
                            "is_slidable": false
                          },
                          "next": {
                            "next": {
                              "args": "yes",
                              "type": "Message",
                              "name": "equals",
                              "is_slidable": false
                            },
                            "properties": {
                              "formatting_for_true": {
                                "entries": {
                                  "0": "",
                                  "1": {
                                    "next": {
                                      "next": {
                                        "type": "Message",
                                        "name": "signed_url_token_text",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "organization_workspace_custom_organization",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "btype_id": "custom.workspace",
                                      "event_id": "bTnXb0",
                                      "optional": false,
                                      "param_id": "bTTGn",
                                      "param_name": "workspace_user"
                                    },
                                    "type": "CurrentWorkflowItem",
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
                                                    "option_value": "personal"
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
                                              "event_id": "bTnXb0",
                                              "optional": false,
                                              "param_id": "bTTGH",
                                              "param_name": "chat"
                                            },
                                            "type": "CurrentWorkflowItem",
                                            "is_slidable": false
                                          },
                                          "next": {
                                            "properties": {
                                              "formatting_for_true": {
                                                "entries": {
                                                  "0": "",
                                                  "1": {
                                                    "next": {
                                                      "type": "Message",
                                                      "name": "signed_url_token_text",
                                                      "is_slidable": false
                                                    },
                                                    "type": "CurrentUser",
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
                                                      "next": {
                                                        "args": {
                                                          "properties": {
                                                            "option_set": "option.chat_type__os_",
                                                            "option_value": "project"
                                                          },
                                                          "type": "OneOptionValue",
                                                          "is_slidable": false
                                                        },
                                                        "next": {
                                                          "properties": {
                                                            "formatting_for_true": {
                                                              "entries": {
                                                                "0": "",
                                                                "1": {
                                                                  "next": {
                                                                    "next": {
                                                                      "type": "Message",
                                                                      "name": "signed_url_token_text",
                                                                      "is_slidable": false
                                                                    },
                                                                    "type": "Message",
                                                                    "name": "project_custom_project",
                                                                    "is_slidable": false
                                                                  },
                                                                  "properties": {
                                                                    "btype_id": "custom.chat",
                                                                    "event_id": "bTnXb0",
                                                                    "optional": false,
                                                                    "param_id": "bTTGH",
                                                                    "param_name": "chat"
                                                                  },
                                                                  "type": "CurrentWorkflowItem",
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
                                                        "name": "equals",
                                                        "is_slidable": false
                                                      },
                                                      "type": "Message",
                                                      "name": "type_option_chat_type__os_",
                                                      "is_slidable": false
                                                    },
                                                    "properties": {
                                                      "btype_id": "custom.chat",
                                                      "event_id": "bTnXb0",
                                                      "optional": false,
                                                      "param_id": "bTTGH",
                                                      "param_name": "chat"
                                                    },
                                                    "type": "CurrentWorkflowItem",
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
                                      "event_id": "bTnXb0",
                                      "optional": false,
                                      "param_id": "bTTGH",
                                      "param_name": "chat"
                                    },
                                    "type": "CurrentWorkflowItem",
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
                          "name": "equals",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "type_option_chat_type__os_",
                        "is_slidable": false
                      },
                      "properties": {
                        "btype_id": "custom.chat",
                        "event_id": "bTnXb0",
                        "optional": false,
                        "param_id": "bTTGH",
                        "param_name": "chat"
                      },
                      "type": "CurrentWorkflowItem",
                      "said": "a2Vsdm8tMzE4ODQ=",
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
            "name": "is_not_empty",
            "is_slidable": false
          },
          "type": "Message",
          "name": "_api_c2_response.signed_url",
          "is_slidable": false
        },
        "properties": {
          "action_id": "bTtNx0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      }
    },
    "3": {
      "param_id": "bTtFc",
      "arg_value": {
        "properties": {
          "action_id": "bTtNt0"
        },
        "type": "PreviousStep",
        "is_slidable": false
      }
    }
  },
  "custom_event": "bTtMv0",
};
