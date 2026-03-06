export const elements = {
  "bTIGK": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 0,
      "width": 0,
      "zindex": 4,
      "border_roundness": 0,
      "data_source": {
        "type": "ElementParent"
      },
      "group_type": "custom.chat",
      "vertical_centering": true,
      "order": 3,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 8,
      "fit_height": true,
      "margin_left": 16,
      "padding_left": 16,
      "single_width": false,
      "padding_right": 8,
      "single_height": false,
      "min_height_css": "36px",
      "button_disabled": false,
      "horiz_alignment": "flex-start",
      "container_layout": "row",
      "border_color_left": {
        "next": {
          "next": {
            "next": {
              "properties": {
                "formatting_for_true": {
                  "entries": {
                    "0": "#e5e7eb"
                  },
                  "type": "TextExpression"
                },
                "formatting_for_false": {
                  "entries": {
                    "0": "#2a2a2d"
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
          "type": "Message",
          "name": "dark_mode_boolean",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      },
      "border_style_left": "solid",
      "four_border_style": true,
      "collapse_when_hidden": true,
      "container_horiz_alignment": "flex-start"
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "args": {
              "type": "ElementParent",
              "is_slidable": false
            },
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
          "border_color_left": "var(--color_bTkRR4_default)"
        },
        "type": "State"
      },
      "1": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_false",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.open__",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTHoP"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "properties": {
          "max_width_css": "36px"
        },
        "type": "State"
      },
      "2": {
        "condition": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_true",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.visible__",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTIni0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "properties": {
          "border_color_left": "var(--color_bTkRR4_default)"
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
          "button_disabled": true
        },
        "type": "State"
      },
      "4": {
        "condition": {
          "next": {
            "type": "Message",
            "name": "is_focused",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTIqn0"
          },
          "type": "GetElement",
          "is_slidable": false
        },
        "properties": {
          "button_disabled": true
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTIGD",
    "current_parent": "bTIFr",
    "default_name": "Group E",
    "elements": {
      "bTscj": {
        "properties": {
          "height": 30,
          "left": 1,
          "top": 3,
          "width": 199,
          "zindex": 19,
          "data_source": {
            "type": "ElementParent"
          },
          "group_type": "custom.chat",
          "vertical_centering": true,
          "order": 6,
          "fit_width": false,
          "fit_height": true,
          "single_width": false,
          "single_height": false,
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "container_layout": "relative",
          "collapse_when_hidden": true
        },
        "states": {
          "0": {
            "condition": {
              "next": {
                "type": "Message",
                "name": "is_focused",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTIqn0"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "properties": {
              "is_visible": false
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bTsce",
        "default_name": "Group JZZ",
        "elements": {
          "bTsck": {
            "properties": {
              "height": 30,
              "left": -16,
              "top": 0,
              "width": 30,
              "zindex": 2,
              "icon": "feather more-horizontal",
              "icon_color": {
                "next": {
                  "next": {
                    "next": {
                      "properties": {
                        "formatting_for_true": {
                          "entries": {
                            "0": "#555557"
                          },
                          "type": "TextExpression"
                        },
                        "formatting_for_false": {
                          "entries": {
                            "0": "#f7f8f9"
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
                  "type": "Message",
                  "name": "dark_mode_boolean",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              },
              "is_visible": false,
              "vertical_centering": true,
              "order": 7,
              "fit_height": false,
              "padding_top": 1,
              "padding_left": 0,
              "single_width": true,
              "min_width_css": "20px",
              "padding_right": 0,
              "single_height": true,
              "min_height_css": "20px",
              "padding_bottom": 1,
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "nonant_alignment": "cb",
              "collapse_when_hidden": true
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "args": 1024,
                          "type": "Message",
                          "name": "less_or_equal_than",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTHoP",
                          "name": "Current Page Width"
                        },
                        "type": "PageData",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "or_",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "is_hovered",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTIGD"
                  },
                  "type": "GetElement",
                  "is_slidable": false
                },
                "properties": {
                  "is_visible": true
                },
                "type": "State"
              }
            },
            "type": "Icon",
            "id": "bTImD0",
            "default_name": "Icon K",
            "name": "Icon Edit Personal Chat"
          },
          "bTscl": {
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
            "style": "Text_inter___400___16px___neutral_copy_copy_"
          }
        },
        "name": "Group Personal Chat Name/Icon",
        "style": "Group_transparent_"
      },
      "bTInp0": {
        "properties": {
          "height": 200,
          "left": 0,
          "top": 0,
          "width": 200,
          "zindex": 17,
          "floating_reference": "top",
          "custom_id": "bTIml0",
          "data_source": {
            "type": "ElementParent",
            "is_slidable": false
          },
          "order": 8,
          "fit_width": true,
          "max_width": 100,
          "min_width": 0,
          "fit_height": true,
          "single_width": false,
          "min_width_css": "0px",
          "single_height": false,
          "min_height_css": "0px",
          "horiz_alignment": "flex-start",
          "floating_reference_horizontal": "none",
          "floating_reference_horizontal_resp": "left"
        },
        "type": "CustomElement",
        "id": "bTIni0",
        "default_name": "[Element] Edit/Delete Chat A"
      },
      "bTIqp0": {
        "properties": {
          "font_face": "var(--font_default):::400",
          "height": 48,
          "left": 0,
          "top": 12.8125,
          "width": 250,
          "zindex": 18,
          "mandatory": true,
          "border_color": "var(--color_bTHBV_default)",
          "border_roundness": 0,
          "border_width": 2,
          "content": {
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
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              }
            },
            "type": "TextExpression"
          },
          "font_color": {
            "next": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "#121213"
                      },
                      "type": "TextExpression"
                    },
                    "formatting_for_false": {
                      "entries": {
                        "0": "#f7f8f9"
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
              "type": "Message",
              "name": "dark_mode_boolean",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "is_slidable": false
          },
          "font_size": 14,
          "is_visible": true,
          "letter_spacing": 0,
          "vertical_centering": true,
          "background_style": "none",
          "border_style": "none",
          "order": 4,
          "disabled": false,
          "unique_id": {
            "entries": {
              "0": "input",
              "1": {
                "next": {
                  "next": {
                    "args": 5,
                    "type": "Message",
                    "name": "truncated_right",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "_id",
                  "is_slidable": false
                },
                "type": "ElementParent",
                "is_slidable": false
              },
              "2": ""
            },
            "type": "TextExpression"
          },
          "bind_field": "title_text",
          "fit_height": false,
          "font_family": "var(--font_default)",
          "font_weight": "400",
          "padding_top": 0,
          "auto_binding": true,
          "single_width": false,
          "single_height": true,
          "min_height_css": "18px",
          "padding_bottom": 0,
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "placeholder_color": "rgba(var(--color_bTHBW_default_rgb), 0)",
          "not_submit_on_enter": true,
          "collapse_when_hidden": true
        },
        "states": {
          "3": {
            "condition": {
              "next": {
                "type": "Message",
                "name": "is_focused",
                "is_slidable": false
              },
              "type": "ThisElement",
              "is_slidable": false
            },
            "properties": {
              "is_visible": true
            },
            "type": "State"
          }
        },
        "type": "Input",
        "id": "bTIqn0",
        "default_name": "Input B",
        "name": "Input Personal Chat Name",
        "transitions": {
          "border_color": {
            "fn": "ease",
            "duration": 200
          },
          "font_color": {
            "fn": "ease",
            "duration": 200
          }
        }
      }
    },
    "name": "Group Personal Chat Cell",
    "style": "Group_transparent_",
    "transitions": {
      "background_style": {
        "fn": "ease",
        "duration": 200
      }
    }
  }
};
