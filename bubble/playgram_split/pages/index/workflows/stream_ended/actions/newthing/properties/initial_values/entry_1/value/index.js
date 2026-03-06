export const value = {
  "entries": {
    "0": {
      "next": {
        "next": {
          "next": {
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
                                    "0": {
                                      "next": {
                                        "type": "Message",
                                        "name": "mime_type",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "option_set": "option.file_types__os_",
                                        "option_value": "webp"
                                      },
                                      "type": "OptionValue"
                                    }
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
                                                    "0": {
                                                      "next": {
                                                        "next": {
                                                          "next": {
                                                            "type": "Message",
                                                            "name": "mime_type",
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
                                                                    "next": {
                                                                      "args": {
                                                                        "next": {
                                                                          "type": "Message",
                                                                          "name": "mime_type",
                                                                          "is_slidable": false
                                                                        },
                                                                        "type": "InjectedValue",
                                                                        "is_slidable": false
                                                                      },
                                                                      "type": "Message",
                                                                      "name": "contains",
                                                                      "is_slidable": false
                                                                    },
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
                                                                  "event_id": "bTshP",
                                                                  "optional": false,
                                                                  "param_id": "bTkdL0",
                                                                  "param_name": "data"
                                                                },
                                                                "type": "CurrentWorkflowItem",
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
                                                    "0": "",
                                                    "1": {
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
                                                                        "name": "mime_type",
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
                    }
                  },
                  "type": "TextExpression"
                },
                "formatting_for_false": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "mime_type",
                          "is_slidable": false
                        },
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
        "event_id": "bTsfv0",
        "optional": false,
        "param_id": "bTkdL0",
        "param_name": "data"
      },
      "type": "CurrentWorkflowItem",
      "said": "a2Vsdm8tMzE4ODQ=",
      "is_slidable": false
    }
  },
  "type": "TextExpression",
};
