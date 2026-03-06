export const apiconnector2_btmbs0_btrsm0 = {
  "properties": {
    "condition": {
      "next": {
        "next": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "next": {
                    "next": {
                      "args": "stream_ended",
                      "type": "Message",
                      "name": "equals",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "last_element",
                    "is_slidable": false
                  },
                  "properties": {
                    "separator": {
                      "entries": {
                        "0": "<#NANI?>"
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
                  "event_id": "bTsfv0",
                  "optional": false,
                  "param_id": "bTkdL0",
                  "param_name": "data"
                },
                "type": "CurrentWorkflowItem",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "type": "Message",
                        "name": "is_not_empty",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "first_element",
                      "is_slidable": false
                    },
                    "properties": {
                      "regex": {
                        "entries": {
                          "0": "(?<=open_ai_container_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                        },
                        "type": "TextExpression"
                      }
                    },
                    "type": "Message",
                    "name": "extract_regex",
                    "is_slidable": true
                  },
                  "properties": {
                    "btype_id": "text",
                    "event_id": "bTsfv0",
                    "optional": false,
                    "param_id": "bTkdL0",
                    "param_name": "data"
                  },
                  "type": "CurrentWorkflowItem",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "is_not_empty",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "regex": {
                          "entries": {
                            "0": "(?<=file_base64: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "extract_regex",
                      "is_slidable": true
                    },
                    "properties": {
                      "btype_id": "text",
                      "event_id": "bTshP",
                      "optional": false,
                      "param_id": "bTkdL0",
                      "param_name": "data"
                    },
                    "type": "CurrentWorkflowItem",
                    "is_slidable": false
                  },
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "is_not_empty",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "bTvku1",
                        "is_slidable": false
                      },
                      "properties": {
                        "action_id": "bTvlN1"
                      },
                      "type": "PreviousStep",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "or_",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "or_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "or_",
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
          "name": "first_element",
          "is_slidable": false
        },
        "properties": {
          "regex": {
            "entries": {
              "0": "(?<=image_base64: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
            },
            "type": "TextExpression"
          }
        },
        "type": "Message",
        "name": "extract_regex",
        "is_slidable": true
      },
      "properties": {
        "btype_id": "text",
        "event_id": "bTsfv0",
        "optional": false,
        "param_id": "bTkdL0",
        "param_name": "data"
      },
      "type": "CurrentWorkflowItem",
      "is_slidable": false
    },
    "params_path": {
      "entries": {
        "0": {
          "next": {
            "next": {
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "properties": {
              "regex": {
                "entries": {
                  "0": "(?<=image_path: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "extract_regex",
            "is_slidable": true
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTthY0",
            "optional": false,
            "param_id": "bTkdL0",
            "param_name": "data"
          },
          "type": "CurrentWorkflowItem",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "1": ""
      },
      "type": "TextExpression"
    },
    "params_base64": {
      "entries": {
        "0": {
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
                                  "properties": {
                                    "formatting_for_true": {
                                      "entries": {
                                        "0": "",
                                        "1": {
                                          "next": {
                                            "next": {
                                              "type": "Message",
                                              "name": "first_element",
                                              "is_slidable": false
                                            },
                                            "properties": {
                                              "regex": {
                                                "entries": {
                                                  "0": "(?<=image_base64: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                                },
                                                "type": "TextExpression"
                                              }
                                            },
                                            "type": "Message",
                                            "name": "extract_regex",
                                            "is_slidable": true
                                          },
                                          "properties": {
                                            "btype_id": "text",
                                            "event_id": "bTshP",
                                            "optional": false,
                                            "param_id": "bTkdL0",
                                            "param_name": "data"
                                          },
                                          "type": "CurrentWorkflowItem",
                                          "said": "a2Vsdm8tMzE4ODQ=",
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
                                                "next": {
                                                  "properties": {
                                                    "formatting_for_true": {
                                                      "entries": {
                                                        "0": "",
                                                        "1": {
                                                          "next": {
                                                            "next": {
                                                              "type": "Message",
                                                              "name": "first_element",
                                                              "is_slidable": false
                                                            },
                                                            "properties": {
                                                              "regex": {
                                                                "entries": {
                                                                  "0": "(?<=file_base64: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                                                },
                                                                "type": "TextExpression"
                                                              }
                                                            },
                                                            "type": "Message",
                                                            "name": "extract_regex",
                                                            "is_slidable": true
                                                          },
                                                          "properties": {
                                                            "btype_id": "text",
                                                            "event_id": "bTshP",
                                                            "optional": false,
                                                            "param_id": "bTkdL0",
                                                            "param_name": "data"
                                                          },
                                                          "type": "CurrentWorkflowItem",
                                                          "said": "a2Vsdm8tMzE4ODQ=",
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
                                              "name": "first_element",
                                              "is_slidable": false
                                            },
                                            "properties": {
                                              "regex": {
                                                "entries": {
                                                  "0": "(?<=file_base64: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                                },
                                                "type": "TextExpression"
                                              }
                                            },
                                            "type": "Message",
                                            "name": "extract_regex",
                                            "is_slidable": true
                                          },
                                          "properties": {
                                            "btype_id": "text",
                                            "event_id": "bTshP",
                                            "optional": false,
                                            "param_id": "bTkdL0",
                                            "param_name": "data"
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
                              "name": "first_element",
                              "is_slidable": false
                            },
                            "properties": {
                              "regex": {
                                "entries": {
                                  "0": "(?<=image_base64: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                },
                                "type": "TextExpression"
                              }
                            },
                            "type": "Message",
                            "name": "extract_regex",
                            "is_slidable": true
                          },
                          "properties": {
                            "btype_id": "text",
                            "event_id": "bTshP",
                            "optional": false,
                            "param_id": "bTkdL0",
                            "param_name": "data"
                          },
                          "type": "CurrentWorkflowItem",
                          "said": "a2Vsdm8tMzE4ODQ=",
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
                "name": "is_empty",
                "is_slidable": false
              },
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "properties": {
              "regex": {
                "entries": {
                  "0": "(?<=open_ai_container_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "extract_regex",
            "is_slidable": true
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTshP",
            "optional": false,
            "param_id": "bTkdL0",
            "param_name": "data"
          },
          "type": "CurrentWorkflowItem",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "1": ""
      },
      "type": "TextExpression"
    },
    "params_file_url": {
      "entries": {
        "0": {
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
                          "name": "bTvXP1",
                          "is_slidable": false
                        },
                        "properties": {
                          "action_id": "bTvXm1"
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
                          "name": "bTvku1",
                          "is_slidable": false
                        },
                        "properties": {
                          "action_id": "bTvlN1"
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
              "name": "is_not_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "bTvXP1",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTvXm1"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "1": ""
      },
      "type": "TextExpression"
    },
    "params_file_name": {
      "entries": {
        "0": {
          "next": {
            "properties": {
              "tz_type": "browser",
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
        "1": "",
        "2": {
          "next": {
            "next": {
              "next": {
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
                                  "name": "is_not_empty",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "bTvku1",
                                "is_slidable": false
                              },
                              "properties": {
                                "action_id": "bTvlN1"
                              },
                              "type": "PreviousStep",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "or_",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "is_not_empty",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
                      },
                      "properties": {
                        "regex": {
                          "entries": {
                            "0": "(?<=file_base64: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "extract_regex",
                      "is_slidable": true
                    },
                    "properties": {
                      "btype_id": "text",
                      "event_id": "bTshP",
                      "optional": false,
                      "param_id": "bTkdL0",
                      "param_name": "data"
                    },
                    "type": "CurrentWorkflowItem",
                    "is_slidable": false
                  },
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": {
                            "next": {
                              "next": {
                                "next": {
                                  "next": {
                                    "properties": {
                                      "formatting_for_true": {
                                        "entries": {
                                          "0": ".",
                                          "1": {
                                            "next": {
                                              "next": {
                                                "next": {
                                                  "type": "Message",
                                                  "name": "display",
                                                  "is_slidable": false
                                                },
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
                                                                "type": "Message",
                                                                "name": "first_element",
                                                                "is_slidable": false
                                                              },
                                                              "properties": {
                                                                "regex": {
                                                                  "entries": {
                                                                    "0": "(?<=file_mime: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                                                  },
                                                                  "type": "TextExpression"
                                                                }
                                                              },
                                                              "type": "Message",
                                                              "name": "extract_regex",
                                                              "is_slidable": true
                                                            },
                                                            "properties": {
                                                              "btype_id": "text",
                                                              "event_id": "bTthY0",
                                                              "optional": false,
                                                              "param_id": "bTkdL0",
                                                              "param_name": "data"
                                                            },
                                                            "type": "CurrentWorkflowItem",
                                                            "is_slidable": false
                                                          },
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
                                            "type": "OptionValue",
                                            "said": "a2Vsdm8tMzE4ODQ="
                                          },
                                          "2": ""
                                        },
                                        "type": "TextExpression",
                                        "said": "a2Vsdm8tMzE4ODQ="
                                      },
                                      "formatting_for_false": {
                                        "entries": {
                                          "0": {
                                            "next": {
                                              "next": {
                                                "next": {
                                                  "properties": {
                                                    "formatting_for_true": {
                                                      "entries": {
                                                        "0": ".",
                                                        "1": {
                                                          "next": {
                                                            "next": {
                                                              "next": {
                                                                "type": "Message",
                                                                "name": "display",
                                                                "is_slidable": false
                                                              },
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
                                                                        "next": {
                                                                          "type": "Message",
                                                                          "name": "bTvXT1",
                                                                          "is_slidable": false
                                                                        },
                                                                        "properties": {
                                                                          "action_id": "bTvXm1"
                                                                        },
                                                                        "type": "PreviousStep",
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
                                                            "option_set": "option.file_types__os_",
                                                            "option_value": "all values"
                                                          },
                                                          "type": "OptionValue",
                                                          "said": "a2Vsdm8tMzE4ODQ="
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
                                                                "properties": {
                                                                  "formatting_for_true": {
                                                                    "entries": {
                                                                      "0": ".",
                                                                      "1": {
                                                                        "next": {
                                                                          "next": {
                                                                            "next": {
                                                                              "type": "Message",
                                                                              "name": "display",
                                                                              "is_slidable": false
                                                                            },
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
                                                                                            "type": "Message",
                                                                                            "name": "display",
                                                                                            "is_slidable": false
                                                                                          },
                                                                                          "type": "Message",
                                                                                          "name": "bTvkv1",
                                                                                          "is_slidable": false
                                                                                        },
                                                                                        "properties": {
                                                                                          "action_id": "bTvlN1"
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
                                                            "name": "bTvku1",
                                                            "is_slidable": false
                                                          },
                                                          "properties": {
                                                            "action_id": "bTvlN1"
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
                                                "name": "is_not_empty",
                                                "is_slidable": false
                                              },
                                              "type": "Message",
                                              "name": "bTvXP1",
                                              "is_slidable": false
                                            },
                                            "properties": {
                                              "action_id": "bTvXm1"
                                            },
                                            "type": "PreviousStep",
                                            "is_slidable": false
                                          }
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
                                "name": "first_element",
                                "is_slidable": false
                              },
                              "properties": {
                                "regex": {
                                  "entries": {
                                    "0": "(?<=file_base64: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                  },
                                  "type": "TextExpression"
                                }
                              },
                              "type": "Message",
                              "name": "extract_regex",
                              "is_slidable": true
                            },
                            "properties": {
                              "btype_id": "text",
                              "event_id": "bTshP",
                              "optional": false,
                              "param_id": "bTkdL0",
                              "param_name": "data"
                            },
                            "type": "CurrentWorkflowItem",
                            "is_slidable": false
                          },
                          "1": ""
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": ".webp"
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
                "name": "is_not_empty",
                "is_slidable": false
              },
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "properties": {
              "regex": {
                "entries": {
                  "0": "(?<=open_ai_container_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "extract_regex",
            "is_slidable": true
          },
          "properties": {
            "btype_id": "text",
            "event_id": "bTsfv0",
            "optional": false,
            "param_id": "bTkdL0",
            "param_name": "data"
          },
          "type": "CurrentWorkflowItem",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        },
        "3": ""
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
  "id": "bTthe0",
};
