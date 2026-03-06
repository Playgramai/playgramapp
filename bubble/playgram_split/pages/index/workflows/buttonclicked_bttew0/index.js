export const ButtonClicked_bTtew0 = {
  "properties": {
    "element_id": "bTtau0"
  },
  "type": "ButtonClicked",
  "id": "bTtel0",
  "actions": {
    "0": {
      "properties": {
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
                        "0": "(?<=message_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "extract_regex",
                  "is_slidable": true
                },
                "type": "ElementParent",
                "is_slidable": false
              },
              "type": "Message",
              "name": "plus_element",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.current_saved_message_",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTUdV0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "element_id": "bTUdV0",
        "custom_state": "custom.current_saved_message_"
      },
      "type": "SetCustomState",
      "id": "bTteq0",
      "name": "Set states current_memory... of index"
    },
    "1": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": "true",
                "type": "Message",
                "name": "not_equals",
                "is_slidable": false
              },
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "properties": {
              "regex": {
                "entries": {
                  "0": "(?<=already_saved: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "extract_regex",
            "is_slidable": true
          },
          "type": "ElementParent",
          "is_slidable": false
        },
        "delay": 0,
        "arguments": {
          "0": {
            "param_id": "bTMkB0",
            "arg_value": {
              "next": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "properties": {
                    "constraints": {
                      "0": {
                        "key": "_api_c2__additional.id",
                        "value": {
                          "entries": {
                            "0": {
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
                                        "properties": {
                                          "regex": {
                                            "entries": {
                                              "0": "(?<=message_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                            },
                                            "type": "TextExpression"
                                          }
                                        },
                                        "type": "Message",
                                        "name": "extract_regex",
                                        "is_slidable": true
                                      },
                                      "type": "ElementParent",
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
                          "type": "TextExpression"
                        },
                        "constraint_type": "equals"
                      }
                    }
                  },
                  "type": "Message",
                  "name": "filtered",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "get_list_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTtan0"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          },
          "1": {
            "param_id": "bTQPz0",
            "arg_value": {
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
            }
          },
          "2": {
            "param_id": "bTghX",
            "arg_value": {
              "next": {
                "next": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "first_element",
                      "is_slidable": false
                    },
                    "properties": {
                      "constraints": {
                        "0": {
                          "key": "bunny_url_text",
                          "value": {
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
                                        "0": "(?<=user_file_url: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                      },
                                      "type": "TextExpression"
                                    }
                                  },
                                  "type": "Message",
                                  "name": "extract_regex",
                                  "is_slidable": true
                                },
                                "type": "ElementParent",
                                "said": "a2Vsdm8tMzE4ODQ=",
                                "is_slidable": false
                              }
                            },
                            "type": "TextExpression"
                          },
                          "constraint_type": "equals"
                        }
                      }
                    },
                    "type": "Message",
                    "name": "filtered",
                    "is_slidable": true
                  },
                  "type": "Message",
                  "name": "files_list_custom_file",
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
          }
        },
        "custom_event": "bTUtt0"
      },
      "type": "ScheduleCustom",
      "id": "bTter0",
      "name": "Schedule start_save_to_memory after 0 seconds"
    },
    "2": {
      "properties": {
        "condition": {
          "next": {
            "next": {
              "next": {
                "args": "true",
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "type": "Message",
              "name": "first_element",
              "is_slidable": false
            },
            "properties": {
              "regex": {
                "entries": {
                  "0": "(?<=already_saved: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "extract_regex",
            "is_slidable": true
          },
          "type": "ElementParent",
          "is_slidable": false
        },
        "delay": 0,
        "arguments": {
          "0": {
            "param_id": "bTMkB0",
            "arg_value": {
              "next": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "first_element",
                    "is_slidable": false
                  },
                  "properties": {
                    "constraints": {
                      "0": {
                        "key": "_api_c2__additional.id",
                        "value": {
                          "entries": {
                            "0": {
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
                                        "properties": {
                                          "regex": {
                                            "entries": {
                                              "0": "(?<=message_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                            },
                                            "type": "TextExpression"
                                          }
                                        },
                                        "type": "Message",
                                        "name": "extract_regex",
                                        "is_slidable": true
                                      },
                                      "type": "ElementParent",
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
                          "type": "TextExpression"
                        },
                        "constraint_type": "equals"
                      }
                    }
                  },
                  "type": "Message",
                  "name": "filtered",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "get_list_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTtan0"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          },
          "1": {
            "param_id": "bTPxN0",
            "arg_value": {
              "next": {
                "type": "Message",
                "name": "current_organization_custom_organization",
                "is_slidable": false
              },
              "type": "CurrentUser",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "2": {
            "param_id": "bTWHL",
            "arg_value": {
              "next": {
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
          }
        },
        "custom_event": "bTUuB0"
      },
      "type": "ScheduleCustom",
      "id": "bTtev0"
    }
  },
};
