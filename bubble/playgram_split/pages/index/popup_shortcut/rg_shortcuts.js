export const RG_shortcuts = {
  "properties": {
    "height": 350,
    "left": -16,
    "top": -72,
    "width": 280,
    "zindex": 17,
    "data_source": {
      "next": {
        "properties": {
          "constraints": {
            "0": {
              "key": "_advanced_search_constraint",
              "value": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "is_true",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "visible0",
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
        "option_set": "option.shortcuts"
      },
      "type": "AllOptionValue",
      "is_slidable": false
    },
    "group_type": "option.shortcuts",
    "is_visible": false,
    "separator_style": "none",
    "order": 29,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": "rg-shortcuts"
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "fixed_rows": false,
    "auto_fit_row": true,
    "single_width": false,
    "min_width_css": "140px",
    "single_height": false,
    "max_height_css": "400px",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "nonant_alignment": "bb",
    "cell_min_height_css": "30px",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "flex-start"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": "popup_palette",
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.last_shortcut_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0"
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
          "next": {
            "next": {
              "args": 0,
              "type": "Message",
              "name": "greater_than",
              "is_slidable": false
            },
            "type": "Message",
            "name": "count",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_AAa",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTulP1"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "data_source": {
          "next": {
            "type": "Message",
            "name": "get_AAa",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTulP1"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_data",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTulJ1"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "data_source": {
          "next": {
            "type": "Message",
            "name": "get_AAa",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTulP1"
          },
          "type": "GetElement",
          "said": "a2Vsdm8tMzE4ODQ=",
          "is_slidable": false
        }
      },
      "type": "State"
    },
    "3": {
      "condition": {
        "next": {
          "next": {
            "args": "popup_palette",
            "next": {
              "args": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "is_not_empty",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_data",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTulJ1"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "next": {
                        "args": 0,
                        "type": "Message",
                        "name": "equals",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "count",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "get_AAa",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTulP1"
                  },
                  "type": "GetElement",
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
            "name": "contains",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.last_shortcut_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0"
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
  "type": "RepeatingGroup",
  "id": "bTulV1",
  "default_name": "RepeatingGroup A",
  "elements": {
    "bTpwv0": {
      "properties": {
        "height": 0,
        "left": 0,
        "top": 0,
        "width": 0,
        "zindex": 4,
        "border_roundness": 6,
        "data_source": {
          "type": "ElementParent"
        },
        "group_type": "option.shortcuts",
        "vertical_centering": true,
        "order": 2,
        "row_gap": 12,
        "use_gap": true,
        "fit_width": false,
        "unique_id": {
          "entries": {
            "0": "shortcut-cell-",
            "1": {
              "type": "CurrentCellsIndex",
              "is_slidable": false
            },
            "2": ""
          },
          "type": "TextExpression"
        },
        "column_gap": 12,
        "fit_height": true,
        "padding_top": 8,
        "margin_right": 4,
        "padding_left": 8,
        "single_width": false,
        "margin_bottom": 8,
        "padding_right": 8,
        "single_height": false,
        "padding_bottom": 8,
        "vert_alignment": "flex-start",
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "collapse_when_hidden": true,
        "container_horiz_alignment": "space-between"
      },
      "states": {
        "1": {
          "condition": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "args": {
                      "next": {
                        "type": "Message",
                        "name": "get_data",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTulp1"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "CurrentCellsIndex",
                  "is_slidable": false
                },
                "next": {
                  "args": {
                    "next": {
                      "next": {
                        "args": {
                          "next": {
                            "args": {
                              "next": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "type": "Message",
                                      "name": "convert_to_number",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "last_element",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "separator": {
                                      "entries": {
                                        "0": "hover"
                                      },
                                      "type": "TextExpression"
                                    }
                                  },
                                  "type": "Message",
                                  "name": "split_by",
                                  "is_slidable": true
                                },
                                "type": "Message",
                                "name": "get_AAV",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTuQJ1"
                              },
                              "type": "GetElement",
                              "is_slidable": false
                            },
                            "next": {
                              "args": {
                                "next": {
                                  "next": {
                                    "args": "arrowIndex",
                                    "type": "Message",
                                    "name": "not_contains",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "get_AAV",
                                  "is_slidable": false
                                },
                                "properties": {
                                  "element_id": "bTuQJ1"
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
                          "type": "CurrentCellsIndex",
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
                  "type": "Message",
                  "name": "or_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "and_",
                "is_slidable": false
              },
              "type": "Message",
              "name": "isnt_hovered",
              "is_slidable": false
            },
            "type": "ThisElement",
            "is_slidable": false
          },
          "properties": {
            "background_style": "bgcolor",
            "bgcolor": "rgba(128,189,203,0.16)"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTulW1",
      "default_name": "Group P",
      "elements": {
        "bTpwz0": {
          "properties": {
            "text": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "description",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "1": " "
              },
              "type": "TextExpression"
            },
            "height": 36,
            "width": 100,
            "zindex": 2,
            "font_color": "var(--color_bTkRL4_default)",
            "font_size": 14,
            "order": 1,
            "fit_width": true,
            "fit_height": true,
            "font_weight": "500",
            "single_width": false,
            "max_width_css": "80%",
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "next": {
                    "args": {
                      "next": {
                        "args": {
                          "next": {
                            "type": "Message",
                            "name": "get_data",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTulp1"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "equals",
                        "is_slidable": false
                      },
                      "type": "CurrentCellsIndex",
                      "is_slidable": false
                    },
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "args": {
                              "next": {
                                "args": {
                                  "next": {
                                    "next": {
                                      "next": {
                                        "next": {
                                          "type": "Message",
                                          "name": "convert_to_number",
                                          "is_slidable": false
                                        },
                                        "type": "Message",
                                        "name": "last_element",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "separator": {
                                          "entries": {
                                            "0": "hover"
                                          },
                                          "type": "TextExpression"
                                        }
                                      },
                                      "type": "Message",
                                      "name": "split_by",
                                      "is_slidable": true
                                    },
                                    "type": "Message",
                                    "name": "get_AAV",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "element_id": "bTuQJ1"
                                  },
                                  "type": "GetElement",
                                  "is_slidable": false
                                },
                                "next": {
                                  "args": {
                                    "next": {
                                      "next": {
                                        "args": "arrowIndex",
                                        "type": "Message",
                                        "name": "not_contains",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "get_AAV",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "element_id": "bTuQJ1"
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
                              "type": "CurrentCellsIndex",
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
                        "properties": {
                          "element_id": "bTulW1"
                        },
                        "type": "GetElement",
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
                  "name": "isnt_hovered",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTulW1"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "font_color": "var(--color_bTkRP4_default)"
              },
              "type": "State"
            }
          },
          "type": "Text",
          "id": "bTulX1",
          "default_name": "Text D",
          "style": "Text_body_16_"
        },
        "bTpxA0": {
          "properties": {
            "text": {
              "entries": {
                "0": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "to_capitalized_words",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "key",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "height": 36,
            "width": 100,
            "zindex": 3,
            "border_color": "rgba(174,174,200,0.08)",
            "border_roundness": 4,
            "font_alignment": "center",
            "font_color": "var(--color_bTkRL4_default)",
            "font_size": 14,
            "background_style": "bgcolor",
            "bgcolor": "rgba(174,174,200,0.08)",
            "border_style": "solid",
            "order": 2,
            "fit_width": true,
            "fit_height": true,
            "font_weight": "500",
            "padding_top": 4,
            "padding_left": 4,
            "single_width": false,
            "min_width_css": "20px",
            "padding_right": 4,
            "single_height": true,
            "min_height_css": "20px",
            "padding_bottom": 4,
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "next": {
                    "args": {
                      "next": {
                        "args": {
                          "next": {
                            "type": "Message",
                            "name": "get_data",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTulp1"
                          },
                          "type": "GetElement",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "equals",
                        "is_slidable": false
                      },
                      "type": "CurrentCellsIndex",
                      "is_slidable": false
                    },
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "args": {
                              "next": {
                                "args": {
                                  "next": {
                                    "next": {
                                      "next": {
                                        "next": {
                                          "type": "Message",
                                          "name": "convert_to_number",
                                          "is_slidable": false
                                        },
                                        "type": "Message",
                                        "name": "last_element",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "separator": {
                                          "entries": {
                                            "0": "hover"
                                          },
                                          "type": "TextExpression"
                                        }
                                      },
                                      "type": "Message",
                                      "name": "split_by",
                                      "is_slidable": true
                                    },
                                    "type": "Message",
                                    "name": "get_AAV",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "element_id": "bTuQJ1"
                                  },
                                  "type": "GetElement",
                                  "is_slidable": false
                                },
                                "next": {
                                  "args": {
                                    "next": {
                                      "next": {
                                        "args": "arrowIndex",
                                        "type": "Message",
                                        "name": "not_contains",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "get_AAV",
                                      "is_slidable": false
                                    },
                                    "properties": {
                                      "element_id": "bTuQJ1"
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
                              "type": "CurrentCellsIndex",
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
                        "properties": {
                          "element_id": "bTulW1"
                        },
                        "type": "GetElement",
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
                  "name": "isnt_hovered",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTulW1"
                },
                "type": "GetElement",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "properties": {
                "font_color": "var(--color_bTkRP4_default)",
                "bgcolor": "rgba(128,189,203,0.16)"
              },
              "type": "State"
            }
          },
          "type": "Text",
          "id": "bTulb1",
          "default_name": "Text D",
          "style": "Text_body_16_"
        }
      },
      "style": "Group_transparent_"
    }
  },
  "name": "RG - shortcuts",
  "style": "RepeatingGroup_transparent_"
};
