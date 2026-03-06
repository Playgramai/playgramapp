export const Group_Team_Chat_Cell = {
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
    "order": 4,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 8,
    "fit_height": true,
    "margin_left": 16,
    "padding_top": 0,
    "padding_left": 16,
    "single_width": false,
    "padding_right": 8,
    "single_height": false,
    "min_height_css": "36px",
    "padding_bottom": 0,
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
          "element_id": "bTJVB"
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
          "type": "Message",
          "name": "is_focused",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTJVF"
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
  "id": "bTJUu",
  "current_parent": "bTIYd",
  "default_name": "Group GZZ",
  "elements": {
    "bTsdP": {
      "properties": {
        "height": 33,
        "left": -15,
        "top": 0,
        "width": 215,
        "zindex": 3,
        "data_source": {
          "type": "ElementParent"
        },
        "group_type": "custom.chat",
        "vertical_centering": true,
        "order": 5,
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
              "element_id": "bTJVF"
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
      "id": "bTsdN",
      "default_name": "Group LZZ",
      "elements": {
        "bTsdT": {
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
            "left": -127.328125,
            "top": 0,
            "width": 100,
            "zindex": 2,
            "is_visible": true,
            "order": 5,
            "fit_width": false,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": true,
            "max_height_css": "17px",
            "min_height_css": "25px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "nonant_alignment": "cc",
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
                        "element_id": "bTJVA"
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
                        "element_id": "bTJVA"
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
                        "element_id": "bTJVA"
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
                "type": "GetParamFromUrl"
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
          "id": "bTJUz",
          "default_name": "Text BZ",
          "style": "Text_inter___400___16px___neutral_copy_copy_"
        },
        "bTsdU": {
          "properties": {
            "height": 30,
            "width": 30,
            "zindex": 3,
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
            "order": 6,
            "fit_height": false,
            "padding_top": 1,
            "padding_left": 0,
            "single_width": true,
            "min_width_css": "22px",
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
                  "element_id": "bTJUu"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "is_visible": true
              },
              "type": "State"
            },
            "1": {
              "condition": {
                "next": {
                  "args": {
                    "next": {
                      "type": "Message",
                      "name": "Created By",
                      "is_slidable": false
                    },
                    "type": "ElementParent",
                    "is_slidable": false
                  },
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "next": {
                            "args": {
                              "type": "CurrentUser",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "not_equals",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "owner_user",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "organization_custom_organization",
                        "is_slidable": false
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
                                "next": {
                                  "args": {
                                    "properties": {
                                      "option_set": "option.user_type__os_",
                                      "option_value": "admin"
                                    },
                                    "type": "OneOptionValue",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "not_equals",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "user_type_option_user_type__os_",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "first_element",
                              "is_slidable": false
                            },
                            "properties": {
                              "constraints": {
                                "0": {
                                  "key": "organization_workspace_custom_organization",
                                  "value": {
                                    "next": {
                                      "type": "Message",
                                      "name": "organization_custom_organization",
                                      "is_slidable": false
                                    },
                                    "type": "ElementParent",
                                    "is_slidable": false
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
                          "name": "workspaces_list_custom_workspace",
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
                    "name": "and_",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "not_equals",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              },
              "properties": {
                "is_visible": false
              },
              "type": "State"
            }
          },
          "type": "Icon",
          "id": "bTJVA",
          "default_name": "Icon W",
          "name": "Icon Edit Team Chat"
        }
      },
      "name": "Group Team Chat Name/Icon",
      "style": "Group_transparent_"
    },
    "bTInp0": {
      "properties": {
        "height": 200,
        "left": 0,
        "top": 0,
        "width": 200,
        "zindex": 4,
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
      "id": "bTJVB",
      "default_name": "[Element] GF Chat Menu A",
      "custom_definition_name": "[Element] GF Chat Menu"
    },
    "bTIqp0": {
      "properties": {
        "font_face": "var(--font_default):::400",
        "height": 48,
        "left": -50,
        "top": 12.8125,
        "width": 250,
        "zindex": 2,
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
        "four_border_style": false,
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
      "id": "bTJVF",
      "default_name": "Input F",
      "name": "Input Team Chat Name",
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
  "name": "Group Team Chat Cell",
  "style": "Group_transparent_",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  }
};
