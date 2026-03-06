export const formatting_for_true = {
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
  "type": "TextExpression",
};
