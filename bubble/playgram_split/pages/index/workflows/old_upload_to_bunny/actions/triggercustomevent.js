export const triggercustomevent = {
  "properties": {
    "condition": {
      "next": {
        "args": "yes",
        "type": "Message",
        "name": "equals",
        "is_slidable": false
      },
      "properties": {
        "arbitrary_text": {
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
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "",
                          "1": {
                            "next": {
                              "next": {
                                "next": {
                                  "args": {
                                    "next": {
                                      "next": {
                                        "args": 1,
                                        "type": "Message",
                                        "name": "plus_hours",
                                        "is_slidable": false
                                      },
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
                                  "type": "Message",
                                  "name": "less_than",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "signed_url_token_date_date",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "current_organization_custom_organization",
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
                                      "event_id": "bTcKR",
                                      "optional": false,
                                      "param_id": "bTQRj0",
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
                                              "next": {
                                                "args": {
                                                  "next": {
                                                    "next": {
                                                      "args": 1,
                                                      "type": "Message",
                                                      "name": "plus_hours",
                                                      "is_slidable": false
                                                    },
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
                                                "type": "Message",
                                                "name": "less_than",
                                                "is_slidable": false
                                              },
                                              "type": "Message",
                                              "name": "signed_url_token_date_date",
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
                                                "next": {
                                                  "args": {
                                                    "next": {
                                                      "next": {
                                                        "args": 1,
                                                        "type": "Message",
                                                        "name": "plus_hours",
                                                        "is_slidable": false
                                                      },
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
                                                  "type": "Message",
                                                  "name": "less_than",
                                                  "is_slidable": false
                                                },
                                                "type": "Message",
                                                "name": "signed_url_token_date_date",
                                                "is_slidable": false
                                              },
                                              "type": "Message",
                                              "name": "project_custom_project",
                                              "is_slidable": false
                                            },
                                            "properties": {
                                              "btype_id": "custom.chat",
                                              "event_id": "bTcKR",
                                              "optional": false,
                                              "param_id": "bTQRj0",
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
                              "event_id": "bTcKR",
                              "optional": false,
                              "param_id": "bTQRj0",
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
                "event_id": "bTcKR",
                "optional": false,
                "param_id": "bTQRj0",
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
      "type": "ArbitraryText"
    },
    "arguments": {
      "0": {
        "param_id": "bTQpF0",
        "arg_value": {
          "properties": {
            "btype_id": "custom.chat",
            "event_id": "bTcKR",
            "optional": false,
            "param_id": "bTQRj0",
            "param_name": "chat"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "1": {
        "param_id": "bTcQp0",
        "arg_value": {
          "next": {
            "type": "Message",
            "name": "_api_c2_body.response.file_url",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTrTt0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      }
    },
    "custom_event": "bTtkT"
  },
  "type": "TriggerCustomEvent",
  "id": "bTcRX0"
};
