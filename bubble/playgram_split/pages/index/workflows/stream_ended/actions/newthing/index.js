export const newthing = {
  "properties": {
    "condition": {
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
    "initial_values": {
      "0": {
        "key": "bunny_url_text",
        "value": {
          "entries": {
            "0": {
              "properties": {
                "arbitrary_text": {
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
              "type": "ArbitraryText",
              "said": "a2Vsdm8tMzE4ODQ="
            }
          },
          "type": "TextExpression"
        },
        "action": {
          "type": "Empty"
        }
      },
      "1": {
        "key": "mime_type_text",
        "value": {
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
          "type": "TextExpression"
        },
        "action": {
          "type": "Empty"
        }
      },
      "2": {
        "key": "chat_custom_chat",
        "value": {
          "properties": {
            "action_id": "bTthZ0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "3": {
        "key": "chat_type_option_chat_type__os_",
        "value": {
          "next": {
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
        "action": {
          "type": "Empty"
        }
      },
      "4": {
        "key": "organization_custom_organization",
        "value": {
          "next": {
            "type": "Message",
            "name": "organization_custom_organization",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTthZ0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      },
      "5": {
        "key": "project_custom_project",
        "value": {
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
        "action": {
          "type": "Empty"
        }
      },
      "6": {
        "key": "shared_access_chat__boolean",
        "value": {
          "next": {
            "type": "Message",
            "name": "share_access_boolean",
            "is_slidable": false
          },
          "properties": {
            "action_id": "bTthZ0"
          },
          "type": "PreviousStep",
          "is_slidable": false
        },
        "action": {
          "type": "Empty"
        }
      }
    },
    "thing_type": "custom.file"
  },
  "type": "NewThing",
  "id": "bTthk0",
};
