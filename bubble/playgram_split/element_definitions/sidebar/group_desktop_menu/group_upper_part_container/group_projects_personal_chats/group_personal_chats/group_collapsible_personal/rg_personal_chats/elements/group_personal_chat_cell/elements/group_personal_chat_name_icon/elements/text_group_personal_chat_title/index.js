export const Text_Group_personal_chat_title = {
  "properties": {
    "text": {
      "entries": {
        "0": {
          "next": {
            "next": {
              "type": "Message",
              "name": "text_so_far",
              "is_slidable": false
            },
            "type": "Message",
            "name": "get_group_data",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTIWL"
          },
          "type": "GetElement",
          "is_slidable": false
        }
      },
      "type": "TextExpression"
    },
    "height": 36,
    "left": -16,
    "top": 0,
    "width": 100,
    "zindex": 1,
    "is_visible": true,
    "order": 6,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "single_height": true,
    "max_height_css": "17px",
    "min_height_css": "25px",
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "nonant_alignment": "ab",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "text_so_far",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_group_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTIWL"
        },
        "type": "GetElement",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "text": {
          "entries": {
            "0": ""
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "args": {
            "type": "ElementParent",
            "is_slidable": false
          },
          "next": {
            "args": {
              "next": {
                "next": {
                  "next": {
                    "args": "\"\"",
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "text_so_far",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTIWL"
              },
              "type": "GetElement",
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
        "properties": {
          "value": "custom.chat",
          "parameter_name": {
            "entries": {
              "0": "chat"
            },
            "type": "TextExpression"
          }
        },
        "type": "GetParamFromUrl"
      },
      "properties": {
        "text": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "next": {
                              "args": 20,
                              "type": "Message",
                              "name": "truncated",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "title_text",
                            "is_slidable": false
                          },
                          "type": "ElementParent",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        },
                        "2": "",
                        "3": {
                          "next": {
                            "next": {
                              "next": {
                                "args": 20,
                                "next": {
                                  "properties": {
                                    "formatting_for_true": {
                                      "entries": {
                                        "0": "..."
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
                                "name": "greater_than",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "length",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "title_text",
                            "is_slidable": false
                          },
                          "type": "ElementParent",
                          "is_slidable": false
                        },
                        "4": ""
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "next": {
                              "args": 15,
                              "type": "Message",
                              "name": "truncated",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "title_text",
                            "is_slidable": false
                          },
                          "type": "ElementParent",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        },
                        "2": "",
                        "3": {
                          "next": {
                            "next": {
                              "next": {
                                "args": 15,
                                "next": {
                                  "properties": {
                                    "formatting_for_true": {
                                      "entries": {
                                        "0": "..."
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
                                "name": "greater_than",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "length",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "title_text",
                            "is_slidable": false
                          },
                          "type": "ElementParent",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        },
                        "4": ""
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "format_boolean",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "isnt_visible",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTImD0"
              },
              "type": "GetElement",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "args": {
            "type": "ElementParent",
            "is_slidable": false
          },
          "next": {
            "args": {
              "next": {
                "next": {
                  "args": "New chat",
                  "type": "Message",
                  "name": "not_equals",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "title_text",
                "is_slidable": false
              },
              "type": "ElementParent",
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
        "properties": {
          "value": "custom.chat",
          "parameter_name": {
            "entries": {
              "0": "chat"
            },
            "type": "TextExpression"
          }
        },
        "type": "GetParamFromUrl",
        "said": "a2Vsdm8tMzE4ODQ="
      },
      "properties": {
        "text": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "next": {
                              "args": 20,
                              "type": "Message",
                              "name": "truncated",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "title_text",
                            "is_slidable": false
                          },
                          "type": "ElementParent",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        },
                        "2": "",
                        "3": {
                          "next": {
                            "next": {
                              "next": {
                                "args": 20,
                                "next": {
                                  "properties": {
                                    "formatting_for_true": {
                                      "entries": {
                                        "0": "..."
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
                                "name": "greater_than",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "length",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "title_text",
                            "is_slidable": false
                          },
                          "type": "ElementParent",
                          "is_slidable": false
                        },
                        "4": ""
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "next": {
                              "args": 15,
                              "type": "Message",
                              "name": "truncated",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "title_text",
                            "is_slidable": false
                          },
                          "type": "ElementParent",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        },
                        "2": "",
                        "3": {
                          "next": {
                            "next": {
                              "next": {
                                "args": 15,
                                "next": {
                                  "properties": {
                                    "formatting_for_true": {
                                      "entries": {
                                        "0": "..."
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
                                "name": "greater_than",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "length",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "title_text",
                            "is_slidable": false
                          },
                          "type": "ElementParent",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        },
                        "4": ""
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "format_boolean",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "isnt_visible",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTImD0"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    },
    "3": {
      "condition": {
        "next": {
          "args": {
            "type": "ElementParent",
            "is_slidable": false
          },
          "next": {
            "args": {
              "next": {
                "next": {
                  "next": {
                    "args": "\"\"",
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "text_so_far",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_group_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTIWL"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "type": "Message",
            "name": "or_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "properties": {
          "value": "custom.chat",
          "parameter_name": {
            "entries": {
              "0": "chat"
            },
            "type": "TextExpression"
          }
        },
        "type": "GetParamFromUrl"
      },
      "properties": {
        "text": {
          "entries": {
            "0": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "next": {
                              "args": 20,
                              "type": "Message",
                              "name": "truncated",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "title_text",
                            "is_slidable": false
                          },
                          "type": "ElementParent",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        },
                        "2": "",
                        "3": {
                          "next": {
                            "next": {
                              "next": {
                                "args": 20,
                                "next": {
                                  "properties": {
                                    "formatting_for_true": {
                                      "entries": {
                                        "0": "..."
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
                                "name": "greater_than",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "length",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "title_text",
                            "is_slidable": false
                          },
                          "type": "ElementParent",
                          "is_slidable": false
                        },
                        "4": ""
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "",
                        "1": {
                          "next": {
                            "next": {
                              "args": 15,
                              "type": "Message",
                              "name": "truncated",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "title_text",
                            "is_slidable": false
                          },
                          "type": "ElementParent",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        },
                        "2": "",
                        "3": {
                          "next": {
                            "next": {
                              "next": {
                                "args": 15,
                                "next": {
                                  "properties": {
                                    "formatting_for_true": {
                                      "entries": {
                                        "0": "..."
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
                                "name": "greater_than",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "length",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "title_text",
                            "is_slidable": false
                          },
                          "type": "ElementParent",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        },
                        "4": ""
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "Message",
                  "name": "format_boolean",
                  "is_slidable": true
                },
                "type": "Message",
                "name": "isnt_visible",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTImD0"
              },
              "type": "GetElement",
              "said": "a2Vsdm8tMzE4ODQ=",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    },
    "4": {
      "condition": {
        "next": {
          "args": {
            "type": "ElementParent",
            "is_slidable": false
          },
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
          "name": "equals",
          "is_slidable": false
        },
        "properties": {
          "value": "custom.chat",
          "parameter_name": {
            "entries": {
              "0": "chat"
            },
            "type": "TextExpression"
          }
        },
        "type": "GetParamFromUrl",
        "said": "a2Vsdm8tMzE4ODQ="
      },
      "properties": {
        "font_color": "var(--color_bTkRP4_default)"
      },
      "type": "State"
    },
    "5": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "is_hovered",
                  "is_slidable": false
                },
                "type": "ThisElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
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
      "properties": {
        "font_color": "var(--color_bTkRP4_default)"
      },
      "type": "State"
    }
  },
  "type": "Text",
  "id": "bTIGF",
  "default_name": "Text C",
  "name": "Text Group personal chat title",
  "style": "Text_inter___400___16px___neutral_copy_copy_",
};
