export const _1648049058728x629621556620034000_AAR_bTVad = {
  "properties": {
    "element_id": "bTVaE",
    "breakpoint": true,
    "workflow_disabled": false
  },
  "type": "1648049058728x629621556620034000-AAR",
  "id": "bTVab",
  "actions": {
    "0": {
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
      "id": "bTvZR"
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
      "id": "bTvzQ1"
    },
    "2": {
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
        }
      },
      "type": "TerminateWorkflow",
      "id": "bTccF"
    },
    "3": {
      "properties": {
        "element_id": "bTVaE",
        "AAT": {
          "type": "TextExpression"
        }
      },
      "type": "1648049058728x629621556620034000-AAG",
      "id": "bTvxl1"
    },
    "4": {
      "properties": {
        "data_source": {
          "properties": {
            "arbitrary_text": {
              "entries": {
                "0": "",
                "1": {
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
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "2": "<#NANI?>",
                "3": {
                  "next": {
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
                "4": ""
              },
              "type": "TextExpression"
            }
          },
          "type": "ArbitraryText"
        },
        "element_id": "bTtqp0"
      },
      "type": "DisplayGroupData",
      "id": "bTvyz1",
      "name": "Display data in Group Attached Input File"
    }
  },
};
