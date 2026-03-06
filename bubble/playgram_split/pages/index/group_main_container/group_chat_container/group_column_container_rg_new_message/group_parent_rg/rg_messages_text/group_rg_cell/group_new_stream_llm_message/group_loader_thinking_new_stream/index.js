export const Group_Loader_Thinking_New_Stream = {
  "properties": {
    "height": 22.3984,
    "left": 0,
    "top": 0,
    "width": 449.18,
    "zindex": 6,
    "is_visible": true,
    "vertical_centering": true,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 4,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "nonant_alignment": "aa",
    "collapse_when_hidden": true
  },
  "states": {
    "1": {
      "condition": {
        "next": {
          "args": {
            "next": {
              "next": {
                "type": "Message",
                "name": "count",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_list_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTtcm0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "next": {
            "args": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_true",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_loading_status",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTtcm0"
              },
              "type": "GetElement",
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
                        "0": "(?<=llm_reply_date: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
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
              "next": {
                "args": {
                  "next": {
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
                            "0": "(?<=text: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                          },
                          "type": "TextExpression"
                        }
                      },
                      "type": "Message",
                      "name": "extract_regex",
                      "is_slidable": true
                    },
                    "type": "Message",
                    "name": "get_group_data",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTiXM0"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "args": "yes",
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
                                      "option_set": "option.llm_providers__os_",
                                      "option_value": "gemini"
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
                                              "args": "true",
                                              "next": {
                                                "args": {
                                                  "next": {
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
                                                            "0": "(?<=image_base64: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                                          },
                                                          "type": "TextExpression"
                                                        }
                                                      },
                                                      "type": "Message",
                                                      "name": "extract_regex",
                                                      "is_slidable": true
                                                    },
                                                    "type": "Message",
                                                    "name": "get_group_data",
                                                    "is_slidable": false
                                                  },
                                                  "properties": {
                                                    "element_id": "bTiXM0"
                                                  },
                                                  "type": "GetElement",
                                                  "is_slidable": false
                                                },
                                                "type": "Message",
                                                "name": "and_",
                                                "is_slidable": false
                                              },
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
                                                "0": "(?<=image_gen_triggered: \")[\\s\\S]*?(?=\"})"
                                              },
                                              "type": "TextExpression"
                                            }
                                          },
                                          "type": "Message",
                                          "name": "extract_regex",
                                          "is_slidable": true
                                        },
                                        "type": "Message",
                                        "name": "get_group_data",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "element_id": "bTiXM0"
                                      },
                                      "type": "GetElement",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "and_",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "equals",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "provider",
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
                  "next": {
                    "args": {
                      "next": {
                        "args": "yes",
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
                                        "option_set": "option.llm_providers__os_",
                                        "option_value": "gemini"
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
                                                "args": "false",
                                                "next": {
                                                  "args": {
                                                    "next": {
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
                                                              "0": "(?<=text: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                                            },
                                                            "type": "TextExpression"
                                                          }
                                                        },
                                                        "type": "Message",
                                                        "name": "extract_regex",
                                                        "is_slidable": true
                                                      },
                                                      "type": "Message",
                                                      "name": "get_group_data",
                                                      "is_slidable": false
                                                    },
                                                    "properties": {
                                                      "element_id": "bTiXM0"
                                                    },
                                                    "type": "GetElement",
                                                    "is_slidable": false
                                                  },
                                                  "type": "Message",
                                                  "name": "and_",
                                                  "is_slidable": false
                                                },
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
                                                  "0": "(?<=image_gen_triggered: \")[\\s\\S]*?(?=\"})"
                                                },
                                                "type": "TextExpression"
                                              }
                                            },
                                            "type": "Message",
                                            "name": "extract_regex",
                                            "is_slidable": true
                                          },
                                          "type": "Message",
                                          "name": "get_group_data",
                                          "is_slidable": false
                                        },
                                        "properties": {
                                          "element_id": "bTiXM0"
                                        },
                                        "type": "GetElement",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "and_",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "equals",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "provider",
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
                    "next": {
                      "args": {
                        "next": {
                          "args": "yes",
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
                                      "next": {
                                        "next": {
                                          "args": {
                                            "next": {
                                              "next": {
                                                "args": "code_interpreter_required",
                                                "type": "Message",
                                                "name": "not_contains",
                                                "is_slidable": false
                                              },
                                              "type": "Message",
                                              "name": "get_group_data",
                                              "is_slidable": false
                                            },
                                            "properties": {
                                              "element_id": "bTiXM0"
                                            },
                                            "type": "GetElement",
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
                                                "name": "get_group_data",
                                                "is_slidable": false
                                              },
                                              "properties": {
                                                "element_id": "bTUir0"
                                              },
                                              "type": "GetElement",
                                              "is_slidable": false
                                            },
                                            "next": {
                                              "args": {
                                                "next": {
                                                  "next": {
                                                    "next": {
                                                      "next": {
                                                        "args": "Qwen3 235B A22B Thinking",
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
                                                          "0": "(?<=model: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                                        },
                                                        "type": "TextExpression"
                                                      }
                                                    },
                                                    "type": "Message",
                                                    "name": "extract_regex",
                                                    "is_slidable": true
                                                  },
                                                  "type": "Message",
                                                  "name": "get_group_data",
                                                  "is_slidable": false
                                                },
                                                "properties": {
                                                  "element_id": "bTiXM0"
                                                },
                                                "type": "GetElement",
                                                "is_slidable": false
                                              },
                                              "type": "Message",
                                              "name": "and_",
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
                                          "0": "(?<=text: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                        },
                                        "type": "TextExpression"
                                      }
                                    },
                                    "type": "Message",
                                    "name": "extract_regex",
                                    "is_slidable": true
                                  },
                                  "type": "Message",
                                  "name": "get_group_data",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "element_id": "bTiXM0"
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
                      "next": {
                        "args": {
                          "next": {
                            "args": "yes",
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
                                        "next": {
                                          "args": "Qwen3 235B A22B Thinking",
                                          "next": {
                                            "args": {
                                              "next": {
                                                "next": {
                                                  "next": {
                                                    "next": {
                                                      "next": {
                                                        "next": {
                                                          "args": 1,
                                                          "type": "Message",
                                                          "name": "greater_than",
                                                          "is_slidable": false
                                                        },
                                                        "type": "Message",
                                                        "name": "count",
                                                        "is_slidable": false
                                                      },
                                                      "properties": {
                                                        "separator": {
                                                          "entries": {
                                                            "0": "</think>"
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
                                                  "properties": {
                                                    "regex": {
                                                      "entries": {
                                                        "0": "(?<=text: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                                      },
                                                      "type": "TextExpression"
                                                    }
                                                  },
                                                  "type": "Message",
                                                  "name": "extract_regex",
                                                  "is_slidable": true
                                                },
                                                "type": "Message",
                                                "name": "get_group_data",
                                                "is_slidable": false
                                              },
                                              "properties": {
                                                "element_id": "bTiXM0"
                                              },
                                              "type": "GetElement",
                                              "is_slidable": false
                                            },
                                            "type": "Message",
                                            "name": "and_",
                                            "is_slidable": false
                                          },
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
                                            "0": "(?<=model: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                                          },
                                          "type": "TextExpression"
                                        }
                                      },
                                      "type": "Message",
                                      "name": "extract_regex",
                                      "is_slidable": true
                                    },
                                    "type": "Message",
                                    "name": "get_group_data",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "element_id": "bTiXM0"
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
                        "next": {
                          "args": {
                            "next": {
                              "args": "yes",
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
                                          "next": {
                                            "args": "true",
                                            "next": {
                                              "args": {
                                                "next": {
                                                  "next": {
                                                    "next": {
                                                      "next": {
                                                        "args": {
                                                          "properties": {
                                                            "option_set": "option.llm_providers__os_",
                                                            "option_value": "gemini"
                                                          },
                                                          "type": "OneOptionValue",
                                                          "is_slidable": false
                                                        },
                                                        "type": "Message",
                                                        "name": "not_equals",
                                                        "is_slidable": false
                                                      },
                                                      "type": "Message",
                                                      "name": "provider",
                                                      "is_slidable": false
                                                    },
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
                                              "type": "Message",
                                              "name": "and_",
                                              "is_slidable": false
                                            },
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
                                              "0": "(?<=image_gen_triggered: \")[\\s\\S]*?(?=\"})"
                                            },
                                            "type": "TextExpression"
                                          }
                                        },
                                        "type": "Message",
                                        "name": "extract_regex",
                                        "is_slidable": true
                                      },
                                      "type": "Message",
                                      "name": "get_group_data",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "element_id": "bTiXM0"
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
              "name": "or_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "or_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "not_equals",
          "is_slidable": false
        },
        "type": "CurrentCellsIndex",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTtbl0",
  "default_name": "Group A",
  "elements": {
    "bToOM": {
      "properties": {
        "height": 150,
        "left": 0,
        "top": 0,
        "width": 280,
        "zindex": 68,
        "html": {
          "entries": {
            "0": "<style>\n  .container1 {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    background: transparent;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  /* \u041a\u0440\u0443\u0436\u043e\u043a \u0441 \u043c\u044f\u0433\u043a\u043e\u0439 \u0442\u0435\u043d\u044c\u044e \u0438 \u043f\u0443\u043b\u044c\u0441\u0430\u0446\u0438\u0435\u0439 */\n  .loader1 {\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    background: #68b0c1; /* \u043d\u043e\u0432\u044b\u0439 \u0446\u0432\u0435\u0442 */\n    box-shadow: 0 0 4px rgba(104, 176, 193, 0.6); /* \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0430\u044f \u0430\u043a\u043a\u0443\u0440\u0430\u0442\u043d\u0430\u044f \u0442\u0435\u043d\u044c */\n    animation: pulse1 2.2s ease-in-out infinite;\n  }\n\n  @keyframes pulse1 {\n    0% { transform: scale(0.75); }\n    50% { transform: scale(1.05); }\n    100% { transform: scale(0.75); }\n  }\n</style>\n\n<div class=\"container1\">\n  <div class=\"loader1\"></div>\n</div>\n"
          },
          "type": "TextExpression"
        },
        "vertical_centering": true,
        "order": 2,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "30px",
        "single_height": true,
        "min_height_css": "30px",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "type": "HTML",
      "id": "bTtbp0",
      "current_parent": "bTUgI0",
      "default_name": "HTML O",
      "name": "HTML Loader",
      "style": "HTML_default_"
    },
    "bTVEn0": {
      "properties": {
        "text": {
          "entries": {
            "0": "Thinking..."
          },
          "type": "TextExpression"
        },
        "height": 59,
        "left": 0,
        "top": 0,
        "width": 216,
        "zindex": 11,
        "is_visible": true,
        "order": 3,
        "fit_width": false,
        "unique_id": {
          "entries": {
            "0": ""
          },
          "type": "TextExpression"
        },
        "fit_height": true,
        "margin_top": 7,
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "vert_alignment": "flex-start",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "type": "Message",
                "name": "is_not_empty",
                "is_slidable": false
              },
              "type": "Message",
              "name": "get_group_data",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTUiw0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "text": {
              "entries": {
                "0": "",
                "1": {
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
                            "0": "\n"
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
                    "element_id": "bTUiw0"
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
          "type": "State"
        },
        "1": {
          "condition": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_false",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "dark_mode_boolean",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "is_hovered",
              "is_slidable": false
            },
            "type": "ThisElement",
            "is_slidable": false
          },
          "properties": {
            "font_color": "var(--color_bTkRL4_default)"
          },
          "type": "State"
        },
        "2": {
          "condition": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "is_true",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "dark_mode_boolean",
                    "is_slidable": false
                  },
                  "type": "CurrentUser",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "is_hovered",
              "is_slidable": false
            },
            "type": "ThisElement",
            "is_slidable": false
          },
          "properties": {
            "font_color": "var(--color_bTsrp2_default)"
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTtbq0",
      "current_parent": "bUfha1",
      "default_name": "Text OZ",
      "name": "Text Parent group's text ",
      "style": "Text_inter___400___16px___neutral_copy_copy_"
    }
  },
  "name": "Group Loader/Thinking New Stream",
  "style": "Group_transparent_",
};
