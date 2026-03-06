export const schedule_delete_files_llm = {
  "properties": {
    "expose": false,
    "wf_name": "schedule_delete_files_llm",
    "parameters": {
      "0": {
        "key": "file",
        "value": "custom.file",
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
        "key": "provider",
        "value": "option.llm_providers__os_",
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
  "id": "bTTKJ",
  "actions": {
    "0": {
      "properties": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.llm_providers__os_",
                "option_value": "open_ai"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "option.llm_providers__os_",
            "event_id": "bTTKJ",
            "param_id": "provider",
            "param_name": "provider"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "date": {
          "next": {
            "args": 1,
            "type": "Message",
            "name": "plus_hours",
            "is_slidable": false
          },
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTTJN",
        "_wf_param_file": {
          "properties": {
            "btype_id": "custom.file",
            "event_id": "bTTKJ",
            "param_id": "file",
            "param_name": "file"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTTKP"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.llm_providers__os_",
                "option_value": "claude"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "option.llm_providers__os_",
            "event_id": "bTTKJ",
            "param_id": "provider",
            "param_name": "provider"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "date": {
          "next": {
            "args": 30,
            "type": "Message",
            "name": "plus_days",
            "is_slidable": false
          },
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTTJf",
        "_wf_param_file": {
          "properties": {
            "btype_id": "custom.file",
            "event_id": "bTTKJ",
            "param_id": "file",
            "param_name": "file"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTTKc"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.llm_providers__os_",
                "option_value": "gemini"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "properties": {
            "btype_id": "option.llm_providers__os_",
            "event_id": "bTTKJ",
            "param_id": "provider",
            "param_name": "provider"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        },
        "date": {
          "next": {
            "args": 48,
            "type": "Message",
            "name": "plus_hours",
            "is_slidable": false
          },
          "properties": {
            "name": "Current Date/Time"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "api_event": "bTTJs",
        "_wf_param_file": {
          "properties": {
            "btype_id": "custom.file",
            "event_id": "bTTKJ",
            "param_id": "file",
            "param_name": "file"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTTKh"
    },
    "3": {
      "properties": {
        "changes": {
          "0": {
            "key": "openai_delete_scheduled_api_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "args": {
                      "properties": {
                        "option_set": "option.llm_providers__os_",
                        "option_value": "open_ai"
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
                              "properties": {
                                "action_id": "bTTKP"
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
                                "name": "openai_delete_scheduled_api_text",
                                "is_slidable": false
                              },
                              "type": "InjectedValue",
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
                  "properties": {
                    "btype_id": "option.llm_providers__os_",
                    "event_id": "bTTKJ",
                    "param_id": "provider",
                    "param_name": "provider"
                  },
                  "type": "APIEventParameter",
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
            "key": "claude_delete_scheduled_api_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "args": {
                      "properties": {
                        "option_set": "option.llm_providers__os_",
                        "option_value": "claude"
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
                              "properties": {
                                "action_id": "bTTKc"
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
                                "name": "claude_delete_scheduled_api_text",
                                "is_slidable": false
                              },
                              "type": "InjectedValue",
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
                  "properties": {
                    "btype_id": "option.llm_providers__os_",
                    "event_id": "bTTKJ",
                    "param_id": "provider",
                    "param_name": "provider"
                  },
                  "type": "APIEventParameter",
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
            "key": "gemini_delete_scheduled_api_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "args": {
                      "properties": {
                        "option_set": "option.llm_providers__os_",
                        "option_value": "gemini"
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
                              "properties": {
                                "action_id": "bTTKh"
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
                                "name": "gemini_delete_scheduled_api_text",
                                "is_slidable": false
                              },
                              "type": "InjectedValue",
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
                  "properties": {
                    "btype_id": "option.llm_providers__os_",
                    "event_id": "bTTKJ",
                    "param_id": "provider",
                    "param_name": "provider"
                  },
                  "type": "APIEventParameter",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "action": {
              "type": "Empty"
            }
          }
        },
        "to_change": {
          "properties": {
            "btype_id": "custom.file",
            "event_id": "bTTKJ",
            "param_id": "file",
            "param_name": "file"
          },
          "type": "APIEventParameter",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTTKR"
    }
  },
};
