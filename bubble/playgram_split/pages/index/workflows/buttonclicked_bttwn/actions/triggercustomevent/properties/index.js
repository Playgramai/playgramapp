export const properties = {
  "arguments": {
    "0": {
      "param_id": "bTadB0",
      "arg_value": {
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
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      }
    },
    "1": {
      "param_id": "bTadC0",
      "arg_value": {
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
      }
    },
    "2": {
      "param_id": "bTadD0",
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
    "3": {
      "param_id": "bTadT0",
      "arg_value": {
        "next": {
          "next": {
            "type": "Message",
            "name": "first_element",
            "is_slidable": false
          },
          "properties": {
            "regex": {
              "entries": {
                "0": "(?<=user_message: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
    "4": {
      "param_id": "bTadU0",
      "arg_value": {
        "next": {
          "next": {
            "next": {
              "next": {
                "type": "Message",
                "name": "_api_c2_user_message_created_date",
                "is_slidable": false
              },
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
    "5": {
      "param_id": "bTada0",
      "arg_value": {
        "next": {
          "next": {
            "type": "Message",
            "name": "enabled_tools_list_option_llm_tool__os_",
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
    "6": {
      "param_id": "bTaeu0",
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
                                                  "0": "(?<=user_message_image: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                                    },
                                    "formatting_for_false": {
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
                                                  "0": "(?<=user_message_file_url: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
                                  "0": "(?<=user_message_image: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
    },
    "7": {
      "param_id": "bTtwF1",
      "arg_value": {
        "next": {
          "next": {
            "next": {
              "type": "Message",
              "name": "convert_to_number",
              "is_slidable": false
            },
            "type": "Message",
            "name": "first_element",
            "is_slidable": false
          },
          "properties": {
            "regex": {
              "entries": {
                "0": "(?<=sort: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
    "8": {
      "param_id": "bTtxt0",
      "arg_value": {
        "type": "CurrentCellsIndex",
        "is_slidable": false
      }
    },
    "9": {
      "param_id": "bTtyF0",
      "arg_value": {
        "next": {
          "next": {
            "next": {
              "next": {
                "type": "Message",
                "name": "_api_c2_user_message_created_date",
                "is_slidable": false
              },
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
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      }
    }
  },
  "custom_event": "bTacv0",
};
