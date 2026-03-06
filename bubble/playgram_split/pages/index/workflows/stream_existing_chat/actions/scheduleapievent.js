export const scheduleapievent = {
  "properties": {
    "date": {
      "properties": {
        "name": "Current Date/Time"
      },
      "type": "PageData",
      "is_slidable": false
    },
    "api_event": "bTtgc0",
    "_wf_param_Chat": {
      "next": {
        "type": "Message",
        "name": "get_group_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTUiZ0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "_wf_param_sort": {
      "properties": {
        "btype_id": "number",
        "event_id": "bTtgP0",
        "optional": false,
        "param_id": "bTsqL1",
        "param_name": "sort"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    },
    "_wf_param_model": {
      "next": {
        "next": {
          "type": "Message",
          "name": "llm_model_option_llm_models__os_",
          "is_slidable": false
        },
        "type": "Message",
        "name": "get_group_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTUiZ0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "_wf_param_file_url": {
      "entries": {
        "0": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "",
                          "1": {
                            "next": {
                              "next": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "next": {
                                        "args": {
                                          "next": {
                                            "next": {
                                              "type": "Message",
                                              "name": "display",
                                              "is_slidable": false
                                            },
                                            "properties": {
                                              "constraints": {
                                                "0": {
                                                  "key": "_advanced_search_constraint",
                                                  "value": {
                                                    "next": {
                                                      "next": {
                                                        "args": "image",
                                                        "type": "Message",
                                                        "name": "contains",
                                                        "is_slidable": false
                                                      },
                                                      "type": "Message",
                                                      "name": "mime_type",
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
                                                      "name": "uploaded_input_file_file",
                                                      "is_slidable": false
                                                    },
                                                    "type": "Message",
                                                    "name": "get_group_data",
                                                    "is_slidable": false
                                                  },
                                                  "properties": {
                                                    "element_id": "bTUiZ0"
                                                  },
                                                  "type": "GetElement",
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
                                        "name": "is_not_contained_by_list",
                                        "is_slidable": false
                                      },
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
                                "type": "Message",
                                "name": "uploaded_input_file_file",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "get_group_data",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTUiZ0"
                            },
                            "type": "GetElement",
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
                  "name": "is_not_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "url",
                "is_slidable": false
              },
              "type": "Message",
              "name": "uploaded_input_file_file",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUiZ0"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    },
    "_wf_param_user_image": {
      "entries": {
        "0": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "",
                          "1": {
                            "next": {
                              "next": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "next": {
                                        "args": {
                                          "next": {
                                            "next": {
                                              "type": "Message",
                                              "name": "display",
                                              "is_slidable": false
                                            },
                                            "properties": {
                                              "constraints": {
                                                "0": {
                                                  "key": "_advanced_search_constraint",
                                                  "value": {
                                                    "next": {
                                                      "next": {
                                                        "args": "image",
                                                        "type": "Message",
                                                        "name": "contains",
                                                        "is_slidable": false
                                                      },
                                                      "type": "Message",
                                                      "name": "mime_type",
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
                                                      "name": "uploaded_input_file_file",
                                                      "is_slidable": false
                                                    },
                                                    "type": "Message",
                                                    "name": "get_group_data",
                                                    "is_slidable": false
                                                  },
                                                  "properties": {
                                                    "element_id": "bTUiZ0"
                                                  },
                                                  "type": "GetElement",
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
                                        "name": "is_contained_by_list",
                                        "is_slidable": false
                                      },
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
                                "type": "Message",
                                "name": "uploaded_input_file_file",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "get_group_data",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTUiZ0"
                            },
                            "type": "GetElement",
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
                  "name": "is_not_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "url",
                "is_slidable": false
              },
              "type": "Message",
              "name": "uploaded_input_file_file",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUiZ0"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    },
    "ignore_privacy_rules": true,
    "_wf_param_user_message": {
      "entries": {
        "0": {
          "properties": {
            "btype_id": "text",
            "event_id": "bTtgP0",
            "optional": false,
            "param_id": "bTtwk",
            "param_name": "user_message"
          },
          "type": "CurrentWorkflowItem",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    },
    "_wf_param_Workspace & User": {
      "next": {
        "type": "Message",
        "name": "current_workspace_custom_workspace",
        "is_slidable": false
      },
      "type": "CurrentUser",
      "is_slidable": false
    }
  },
  "type": "ScheduleAPIEvent",
  "id": "bTtgW0"
};
