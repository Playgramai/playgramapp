export const _6 = {
  "properties": {
    "condition": {
      "next": {
        "args": "yes",
        "next": {
          "args": {
            "next": {
              "next": {
                "type": "Message",
                "name": "is_not_empty",
                "is_slidable": false
              },
              "type": "Message",
              "name": "_api_c2_body.response.file_url",
              "is_slidable": false
            },
            "properties": {
              "action_id": "bTthe0"
            },
            "type": "PreviousStep",
            "is_slidable": false
          },
          "type": "Message",
          "name": "and_",
          "is_slidable": false
        },
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
                                        "args": -1,
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
                                      "action_id": "bTthZ0"
                                    },
                                    "type": "PreviousStep",
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
                                                      "args": -1,
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
                                                        "args": -1,
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
                                              "action_id": "bTthZ0"
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
                              "action_id": "bTthZ0"
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
                  "name": "equals",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "type_option_chat_type__os_",
                "is_slidable": false
              },
              "properties": {
                "action_id": "bTthZ0"
              },
              "type": "PreviousStep",
              "is_slidable": false
            },
            "2": ""
          },
          "type": "TextExpression"
        }
      },
      "type": "ArbitraryText"
    },
    "date": {
      "properties": {
        "name": "Current Date/Time"
      },
      "type": "PageData",
      "is_slidable": false
    },
    "api_event": "bTvPz0",
    "_wf_param_date": {
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
    "_wf_param_type": {
      "entries": {
        "0": {
          "next": {
            "next": {
              "type": "Message",
              "name": "display",
              "is_slidable": false
            },
            "type": "Message",
            "name": "type_option_chat_type__os_",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTthZ0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    },
    "_wf_param_user": {
      "type": "CurrentUser",
      "is_slidable": false
    },
    "_wf_param_project": {
      "next": {
        "type": "Message",
        "name": "project_custom_project",
        "is_slidable": false
      },
      "properties": {
        "action_id": "bTthZ0"
      },
      "type": "PreviousStep",
      "is_slidable": false
    },
    "_wf_param_input_url": {
      "entries": {
        "0": {
          "next": {
            "type": "Message",
            "name": "_api_c2_body.response.file_url",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTthe0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    }
  },
  "type": "ScheduleAPIEvent",
  "id": "bTvQZ0"
};
