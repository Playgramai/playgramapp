export const _1648049058728x629621556620034000_AAR_bTvxk1 = {
  "properties": {
    "element_id": "bTVaE",
    "breakpoint": true,
    "workflow_disabled": true
  },
  "type": "1648049058728x629621556620034000-AAR",
  "id": "bTvxR1",
  "actions": {
    "0": {
      "properties": {
        "value": true,
        "element_id": "bTUdV0",
        "custom_state": "custom.file_is_loading_"
      },
      "type": "SetCustomState",
      "id": "bTvxT1"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "args": "no",
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
                      "next": {
                        "args": {
                          "properties": {
                            "option_set": "option.input_type__os_0",
                            "option_value": "file"
                          },
                          "type": "OneOptionValue",
                          "is_slidable": false
                        },
                        "next": {
                          "args": {
                            "next": {
                              "next": {
                                "next": {
                                  "next": {
                                    "args": {
                                      "next": {
                                        "type": "Message",
                                        "name": "display",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "option_set": "option.file_types__os_",
                                        "option_value": "all values"
                                      },
                                      "type": "OptionValue"
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
                              "name": "get_AAE",
                              "is_slidable": false
                            },
                            "properties": {
                              "element_id": "bTVaE"
                            },
                            "type": "ThisElement",
                            "is_slidable": false
                          },
                          "next": {
                            "properties": {
                              "formatting_for_true": {
                                "entries": {
                                  "0": "yes"
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
                                            "properties": {
                                              "option_set": "option.input_type__os_0",
                                              "option_value": "image"
                                            },
                                            "type": "OneOptionValue",
                                            "is_slidable": false
                                          },
                                          "next": {
                                            "args": {
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
                                                                      "next": {
                                                                        "next": {
                                                                          "args": "image",
                                                                          "type": "Message",
                                                                          "name": "equals",
                                                                          "is_slidable": false
                                                                        },
                                                                        "type": "Message",
                                                                        "name": "first_element",
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
                                                "name": "get_AAE",
                                                "is_slidable": false
                                              },
                                              "properties": {
                                                "element_id": "bTVaE"
                                              },
                                              "type": "ThisElement",
                                              "is_slidable": false
                                            },
                                            "next": {
                                              "properties": {
                                                "formatting_for_true": {
                                                  "entries": {
                                                    "0": "yes"
                                                  },
                                                  "type": "TextExpression"
                                                },
                                                "formatting_for_false": {
                                                  "entries": {
                                                    "0": "no"
                                                  },
                                                  "type": "TextExpression"
                                                }
                                              },
                                              "type": "Message",
                                              "name": "format_boolean",
                                              "is_slidable": true
                                            },
                                            "type": "Message",
                                            "name": "and_",
                                            "is_slidable": false
                                          },
                                          "type": "Message",
                                          "name": "contains",
                                          "is_slidable": false
                                        },
                                        "type": "Message",
                                        "name": "supported_input_types",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "get_group_data",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "element_id": "bTcdF"
                                    },
                                    "type": "GetElement",
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
                          "name": "and_",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "contains",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "supported_input_types",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTcdF"
                  },
                  "type": "GetElement",
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
            "param_id": "bTvYv",
            "arg_value": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_AAL",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTVaE"
              },
              "type": "ThisElement",
              "is_slidable": false
            }
          }
        },
        "custom_event": "bTvQe0"
      },
      "type": "TriggerCustomEvent",
      "id": "bTvxX1"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_true",
              "is_slidable": false
            },
            "type": "Message",
            "name": "bTvZB",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTvxX1"
          },
          "type": "PreviousStep",
          "is_slidable": false
        }
      },
      "type": "TerminateWorkflow",
      "id": "bTvxY1"
    },
    "3": {
      "properties": {
        "params_path": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTvZj"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "params_base64": {
          "entries": {
            "0": "",
            "1": {
              "next": {
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
                          "0": "base64,"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "split_by",
                    "is_slidable": true
                  },
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_AAL",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTVaE"
              },
              "type": "ThisElement",
              "is_slidable": false
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "params_file_url": {
          "entries": {
            "0": ""
          },
          "type": "TextExpression"
        },
        "params_file_name": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "first_element",
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
                        "name": "get_AAE",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTVaE"
                      },
                      "type": "ThisElement",
                      "is_slidable": false
                    },
                    "2": "_",
                    "3": {
                      "next": {
                        "properties": {
                          "component_to_extract": "UNIX"
                        },
                        "type": "Message",
                        "name": "extract_from_date",
                        "is_slidable": true
                      },
                      "properties": {
                        "name": "Current Date/Time"
                      },
                      "type": "PageData",
                      "is_slidable": false
                    },
                    "4": ".",
                    "5": {
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
                        "name": "get_AAE",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTVaE"
                      },
                      "type": "ThisElement",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    },
                    "6": ""
                  },
                  "type": "TextExpression"
                }
              },
              "type": "ArbitraryText",
              "said": "a2Vsdm8tMzE4ODQ="
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
      "type": "apiconnector2-bTMBs0.bTrSm0",
      "id": "bTvxZ1",
      "name": "Own backend - Upload Bunny File"
    },
    "4": {
      "properties": {
        "changes": {
          "0": {
            "key": "uploaded_input_file_text",
            "value": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "_api_c2_body.response.file_url",
                    "is_slidable": false
                  },
                  "properties": {
                    "action_id": "bTvxZ1"
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
          }
        },
        "to_change": {
          "next": {
            "type": "Message",
            "name": "current_workspace_custom_workspace",
            "is_slidable": false
          },
          "type": "CurrentUser",
          "is_slidable": false
        }
      },
      "type": "ChangeThing",
      "id": "bTvxd1"
    },
    "5": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTvxd1"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "value": false,
        "element_id": "bTUdV0",
        "custom_state": "custom.file_is_loading_"
      },
      "type": "SetCustomState",
      "id": "bTvxe1"
    },
    "6": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "next": {
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "args": -1,
                          "next": {
                            "properties": {
                              "component_to_extract": "UNIX"
                            },
                            "type": "Message",
                            "name": "extract_from_date",
                            "is_slidable": true
                          },
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
                  "name": "convert_to_number",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "last_element",
                "is_slidable": false
              },
              "properties": {
                "separator": {
                  "entries": {
                    "0": ";"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "Message",
              "name": "split_by",
              "is_slidable": true
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUiv0"
          },
          "type": "GetElement",
          "is_slidable": false
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
                "args": {
                  "next": {
                    "type": "Message",
                    "name": "display",
                    "is_slidable": false
                  },
                  "properties": {
                    "option_set": "option.chat_type__os_",
                    "option_value": "team"
                  },
                  "type": "OptionValue"
                },
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "Team"
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
                                "properties": {
                                  "formatting_for_true": {
                                    "entries": {
                                      "0": "Project"
                                    },
                                    "type": "TextExpression"
                                  },
                                  "formatting_for_false": {
                                    "entries": {
                                      "0": "Personal"
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
                            "name": "get_group_data",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTUif0"
                          },
                          "type": "GetElement",
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
                "parameter_name": {
                  "entries": {
                    "0": "type"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "GetParamFromUrl",
              "said": "a2Vsdm8tMzE4ODQ="
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
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUif0"
          },
          "type": "GetElement",
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
                "action_id": "bTvxZ1"
              },
              "type": "PreviousStep",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "ScheduleAPIEvent",
      "id": "bTvxf1"
    },
    "7": {
      "properties": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTvxd1"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "element_id": "bTVaE",
        "AAu": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "get_AAL",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTVaE"
              },
              "type": "ThisElement",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "1648049058728x629621556620034000-AAt",
      "id": "bTvxj1"
    }
  }
};
