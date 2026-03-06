export const properties = {
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
                        "args": {
                          "properties": {
                            "option_set": "option.input_type__os_0",
                            "option_value": "file"
                          },
                          "type": "OneOptionValue",
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
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "properties": {
                              "content": {
                                "entries": {
                                  "0": ".",
                                  "1": {
                                    "next": {
                                      "type": "Message",
                                      "name": "display",
                                      "is_slidable": false
                                    },
                                    "type": "InjectedValue",
                                    "is_slidable": false
                                  },
                                  "2": ""
                                },
                                "type": "TextExpression",
                                "said": "a2Vsdm8tMzE4ODQ="
                              },
                              "delimiter": {
                                "entries": {
                                  "0": ","
                                },
                                "type": "TextExpression"
                              }
                            },
                            "type": "Message",
                            "name": "format_as_text",
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
                                "args": {
                                  "properties": {
                                    "option_set": "option.input_type__os_0",
                                    "option_value": "image"
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
                                              "properties": {
                                                "content": {
                                                  "entries": {
                                                    "0": ".",
                                                    "1": {
                                                      "next": {
                                                        "type": "Message",
                                                        "name": "display",
                                                        "is_slidable": false
                                                      },
                                                      "type": "InjectedValue",
                                                      "is_slidable": false
                                                    },
                                                    "2": ""
                                                  },
                                                  "type": "TextExpression"
                                                },
                                                "delimiter": {
                                                  "entries": {
                                                    "0": ","
                                                  },
                                                  "type": "TextExpression"
                                                }
                                              },
                                              "type": "Message",
                                              "name": "format_as_text",
                                              "is_slidable": true
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
                                                            "name": "contains",
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
                                                "args": {
                                                  "properties": {
                                                    "option_set": "option.input_type__os_0",
                                                    "option_value": "file"
                                                  },
                                                  "type": "OneOptionValue",
                                                  "is_slidable": false
                                                },
                                                "next": {
                                                  "properties": {
                                                    "formatting_for_true": {
                                                      "entries": {
                                                        "0": {
                                                          "next": {
                                                            "next": {
                                                              "properties": {
                                                                "content": {
                                                                  "entries": {
                                                                    "0": ".",
                                                                    "1": {
                                                                      "next": {
                                                                        "type": "Message",
                                                                        "name": "display",
                                                                        "is_slidable": false
                                                                      },
                                                                      "type": "InjectedValue",
                                                                      "is_slidable": false
                                                                    },
                                                                    "2": ""
                                                                  },
                                                                  "type": "TextExpression"
                                                                },
                                                                "delimiter": {
                                                                  "entries": {
                                                                    "0": ","
                                                                  },
                                                                  "type": "TextExpression"
                                                                }
                                                              },
                                                              "type": "Message",
                                                              "name": "format_as_text",
                                                              "is_slidable": true
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
                                                                            "name": "not_contains",
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
                                                          "type": "OptionValue",
                                                          "said": "a2Vsdm8tMzE4ODQ="
                                                        }
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
                                  "type": "Message",
                                  "name": "format_boolean",
                                  "is_slidable": true
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
        "is_slidable": false
      },
      "2": ""
    },
    "type": "TextExpression"
  }
};
