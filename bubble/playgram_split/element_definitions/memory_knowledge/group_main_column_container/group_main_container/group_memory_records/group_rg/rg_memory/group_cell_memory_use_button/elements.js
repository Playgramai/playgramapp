export const elements = {
  "bTkED": {
    "properties": {
      "height": 0,
      "left": 16,
      "top": 19.600006103515625,
      "width": 0,
      "zindex": 12,
      "data_source": {
        "type": "ElementParent"
      },
      "group_type": "text",
      "vertical_centering": true,
      "order": 5,
      "fit_width": false,
      "fit_height": true,
      "padding_left": 16,
      "single_width": false,
      "min_width_css": "300px",
      "single_height": false,
      "min_height_css": "0px",
      "vert_alignment": "center",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "args": 540,
            "type": "Message",
            "name": "less_or_equal_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTMGw",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "max_width_css": "62%",
          "min_width_css": "62%",
          "vert_alignment": "flex-start"
        },
        "type": "State"
      },
      "1": {
        "condition": {
          "next": {
            "args": 400,
            "type": "Message",
            "name": "less_or_equal_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTMGw",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "max_width_css": "56%",
          "min_width_css": "56%"
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTkEB",
    "default_name": "Group P",
    "elements": {
      "bTkEH": {
        "properties": {
          "text": {
            "entries": {
              "0": {
                "next": {
                  "next": {
                    "next": {
                      "properties": {
                        "formatting_for_true": {
                          "entries": {
                            "0": "",
                            "1": {
                              "next": {
                                "type": "Message",
                                "name": "get_AAI",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTiKz2"
                              },
                              "type": "GetElement",
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
                                  "next": {
                                    "next": {
                                      "properties": {
                                        "find": {
                                          "entries": {
                                            "0": "_(\\d+)(?=\\.[^.]+$)"
                                          },
                                          "type": "TextExpression"
                                        },
                                        "use_regex": true
                                      },
                                      "type": "Message",
                                      "name": "find_replace",
                                      "is_slidable": true
                                    },
                                    "type": "Message",
                                    "name": "last_element",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "separator": {
                                      "entries": {
                                        "0": "/"
                                      },
                                      "type": "TextExpression"
                                    }
                                  },
                                  "type": "Message",
                                  "name": "split_by",
                                  "is_slidable": true
                                },
                                "type": "Message",
                                "name": "get_AAI",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTiLT2"
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
                      "type": "Message",
                      "name": "format_boolean",
                      "is_slidable": true
                    },
                    "type": "Message",
                    "name": "is_not_empty",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_AAI",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTiKz2"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "1": ""
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": -16,
          "top": -16,
          "width": 100,
          "zindex": 3,
          "order": 2,
          "fit_width": false,
          "fit_height": true,
          "single_width": false,
          "single_height": false,
          "max_height_css": "40px",
          "min_height_css": "0px",
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "Text",
        "id": "bTNkz",
        "default_name": "Text I",
        "name": "Text readJSON user_messag",
        "style": "Text_inter___400___14px___white_"
      },
      "bTkEN": {
        "properties": {
          "text": {
            "entries": {
              "0": "Content"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": 0,
          "top": 0,
          "width": 100,
          "zindex": 2,
          "font_size": 12,
          "is_visible": false,
          "order": 1,
          "fit_width": false,
          "fit_height": true,
          "single_width": false,
          "margin_bottom": 4,
          "min_width_css": "100%",
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
                "args": 540,
                "type": "Message",
                "name": "less_or_equal_than",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTMGw",
                "name": "Current Page Width"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "properties": {
              "is_visible": true
            },
            "type": "State"
          }
        },
        "type": "Text",
        "id": "bTkEI",
        "current_parent": "bTkEB",
        "default_name": "Text B",
        "style": "Text_inter___400___14px____afafaf_"
      }
    },
    "style": "Group_transparent_"
  },
  "bTkFt": {
    "properties": {
      "height": 0,
      "left": 200,
      "top": 28.59999942779541,
      "width": 0,
      "zindex": 13,
      "data_source": {
        "type": "ElementParent"
      },
      "group_type": "text",
      "vertical_centering": true,
      "order": 10,
      "fit_width": false,
      "fit_height": true,
      "padding_left": 16,
      "single_width": false,
      "max_width_css": "200px",
      "min_width_css": "40px",
      "single_height": false,
      "min_height_css": "0px",
      "vert_alignment": "center",
      "horiz_alignment": "flex-start",
      "container_layout": "column",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "args": 540,
            "type": "Message",
            "name": "less_or_equal_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTMGw",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "min_width_css": "80%"
        },
        "type": "State"
      },
      "1": {
        "condition": {
          "next": {
            "args": 540,
            "type": "Message",
            "name": "less_or_equal_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTMGw",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "max_width_css": "62%",
          "min_width_css": "62%"
        },
        "type": "State"
      },
      "2": {
        "condition": {
          "next": {
            "args": 400,
            "type": "Message",
            "name": "less_or_equal_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTMGw",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "max_width_css": "56%",
          "min_width_css": "56%"
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTkFo",
    "default_name": "Group S",
    "elements": {
      "bTkFu": {
        "properties": {
          "height": 150,
          "left": -16,
          "top": -16.000001907348633,
          "width": 280,
          "zindex": 11,
          "html": {
            "entries": {
              "0": "<div data-timestamp=\"",
              "1": {
                "next": {
                  "type": "Message",
                  "name": "get_AAI",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTiLN2"
                },
                "type": "GetElement",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "2": "\">\n  <span data-ts-date></span>\n<div style=\"margin-top:6px;\"></div>\n  <span data-ts-time></span>\n</div>\n"
            },
            "type": "TextExpression"
          },
          "is_visible": true,
          "vertical_centering": true,
          "order": 2,
          "fit_height": true,
          "single_width": false,
          "max_width_css": "200px",
          "single_height": false,
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "type": "HTML",
        "id": "bTjqu0",
        "default_name": "HTML D",
        "name": "HTML Date",
        "style": "HTML_default_"
      },
      "bTkGG": {
        "properties": {
          "text": {
            "entries": {
              "0": "Date"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": 0,
          "top": 0,
          "width": 100,
          "zindex": 2,
          "is_visible": false,
          "order": 1,
          "fit_width": false,
          "fit_height": true,
          "single_width": false,
          "margin_bottom": 4,
          "min_width_css": "100%",
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
                "args": 540,
                "type": "Message",
                "name": "less_or_equal_than",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTMGw",
                "name": "Current Page Width"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "properties": {
              "is_visible": true
            },
            "type": "State"
          }
        },
        "type": "Text",
        "id": "bTkFv",
        "current_parent": "bTkFo",
        "default_name": "Text F",
        "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
      }
    },
    "style": "Group_transparent_"
  },
  "bTOYb0": {
    "properties": {
      "height": 0,
      "left": 200,
      "top": 16,
      "width": 0,
      "zindex": 7,
      "data_source": {
        "type": "ElementParent"
      },
      "group_type": "text",
      "vertical_centering": true,
      "order": 7,
      "fit_width": false,
      "fit_height": true,
      "padding_left": 16,
      "single_width": false,
      "min_width_css": "40px",
      "single_height": false,
      "vert_alignment": "center",
      "horiz_alignment": "flex-start",
      "container_layout": "row",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "args": 962,
            "type": "Message",
            "name": "less_or_equal_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTMGw",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "padding_left": 0,
          "max_width_css": "108px"
        },
        "type": "State"
      },
      "1": {
        "condition": {
          "next": {
            "args": 540,
            "type": "Message",
            "name": "less_or_equal_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTMGw",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "padding_left": 0,
          "min_width_css": "30%"
        },
        "type": "State"
      },
      "2": {
        "condition": {
          "next": {
            "args": 400,
            "type": "Message",
            "name": "less_or_equal_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTMGw",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "padding_left": 0,
          "min_width_css": "108px"
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTOYW0",
    "default_name": "Group W",
    "elements": {
      "bTkFn": {
        "properties": {
          "text": {
            "entries": {
              "0": "Type"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": 0,
          "top": 0,
          "width": 100,
          "zindex": 2,
          "font_size": 12,
          "is_visible": false,
          "order": 1,
          "fit_width": false,
          "fit_height": true,
          "single_width": false,
          "margin_bottom": 4,
          "min_width_css": "100%",
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
                "args": 540,
                "type": "Message",
                "name": "less_or_equal_than",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTMGw",
                "name": "Current Page Width"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "properties": {
              "is_visible": true
            },
            "type": "State"
          }
        },
        "type": "Text",
        "id": "bTkEO",
        "current_parent": "bTOYW0",
        "default_name": "Text D",
        "style": "Text_inter___400___14px____afafaf_"
      },
      "bTOYc0": {
        "properties": {
          "text": {
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
                                "type": "Message",
                                "name": "display",
                                "is_slidable": false
                              },
                              "properties": {
                                "option_set": "option.memory_type__os_",
                                "option_value": "uploaded0"
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
                                  "args": "true",
                                  "next": {
                                    "properties": {
                                      "formatting_for_true": {
                                        "entries": {
                                          "0": "",
                                          "1": {
                                            "next": {
                                              "type": "Message",
                                              "name": "display",
                                              "is_slidable": false
                                            },
                                            "properties": {
                                              "option_set": "option.memory_type__os_",
                                              "option_value": "manual"
                                            },
                                            "type": "OptionValue"
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
                                              "type": "Message",
                                              "name": "display",
                                              "is_slidable": false
                                            },
                                            "properties": {
                                              "option_set": "option.memory_type__os_",
                                              "option_value": "auto_saved"
                                            },
                                            "type": "OptionValue",
                                            "said": "a2Vsdm8tMzE4ODQ="
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
                                  "name": "equals",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "get_AAI",
                                "is_slidable": false
                              },
                              "properties": {
                                "element_id": "bTiKt2"
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
                      "type": "Message",
                      "name": "format_boolean",
                      "is_slidable": true
                    },
                    "type": "Message",
                    "name": "is_empty",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "get_AAI",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTiKz2"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "2": ""
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": -192.71875,
          "top": -16,
          "width": 100,
          "zindex": 5,
          "border_color": {
            "next": {
              "next": {
                "next": {
                  "properties": {
                    "formatting_for_true": {
                      "entries": {
                        "0": "#3a3b3c"
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
              "name": "get_AAI",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTiLT2"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "border_roundness": 16,
          "font_color": "var(--color_bTkRL4_default)",
          "font_size": 12,
          "line_height": 1.4,
          "vertical_centering": true,
          "background_style": "bgcolor",
          "bgcolor": "rgba(42,42,45,1)",
          "border_style": "none",
          "order": 2,
          "fit_width": true,
          "fit_height": true,
          "padding_top": 2,
          "padding_left": 8,
          "single_width": false,
          "max_width_css": "150px",
          "min_width_css": "0px",
          "padding_right": 8,
          "single_height": false,
          "max_height_css": "28px",
          "min_height_css": "0px",
          "padding_bottom": 2,
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
            "properties": {
              "font_color": "var(--color_bTsrp2_default)",
              "bgcolor": "var(--color_bTsrr2_default)"
            },
            "type": "State"
          },
          "1": {
            "condition": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_not_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_AAI",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTiLT2"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "properties": {
              "border_color": "var(--color_bTGzr_default)",
              "border_style": "solid"
            },
            "type": "State"
          }
        },
        "type": "Text",
        "id": "bTOVV0",
        "default_name": "Text Z"
      }
    },
    "name": "Group Chat Type Container",
    "style": "Group_transparent_"
  },
  "bTidk2": {
    "properties": {
      "height": 0,
      "left": 0,
      "top": 0,
      "width": 0,
      "zindex": 10,
      "data_source": {
        "type": "ElementParent"
      },
      "group_type": "text",
      "vertical_centering": true,
      "order": 14,
      "fit_width": true,
      "fit_height": true,
      "single_width": false,
      "single_height": false,
      "vert_alignment": "center",
      "horiz_alignment": "flex-start",
      "container_layout": "row",
      "collapse_when_hidden": true
    },
    "states": {
      "0": {
        "condition": {
          "next": {
            "args": 540,
            "type": "Message",
            "name": "less_or_equal_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTMGw",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "min_width_css": "30%"
        },
        "type": "State"
      },
      "1": {
        "condition": {
          "next": {
            "args": 400,
            "type": "Message",
            "name": "less_or_equal_than",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTMGw",
            "name": "Current Page Width"
          },
          "type": "PageData",
          "is_slidable": false
        },
        "properties": {
          "min_width_css": "108px"
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTidZ2",
    "default_name": "Group Y",
    "elements": {
      "bTkGT": {
        "properties": {
          "text": {
            "entries": {
              "0": "Actions"
            },
            "type": "TextExpression"
          },
          "height": 36,
          "left": 0,
          "top": 0,
          "width": 100,
          "zindex": 2,
          "font_size": 12,
          "is_visible": false,
          "order": 1,
          "fit_width": false,
          "fit_height": true,
          "single_width": false,
          "margin_bottom": 4,
          "min_width_css": "100%",
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
                "args": 540,
                "type": "Message",
                "name": "less_or_equal_than",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTMGw",
                "name": "Current Page Width"
              },
              "type": "PageData",
              "is_slidable": false
            },
            "properties": {
              "is_visible": true
            },
            "type": "State"
          }
        },
        "type": "Text",
        "id": "bTkGR",
        "current_parent": "bTidZ2",
        "default_name": "Text J",
        "style": "Text_inter___400___14px____afafaf_"
      },
      "bTidl2": {
        "properties": {
          "height": 0,
          "left": -652.671875,
          "top": -16,
          "width": 0,
          "zindex": 6,
          "border_roundness": 6,
          "vertical_centering": true,
          "order": 4,
          "use_gap": true,
          "fit_width": true,
          "column_gap": 10,
          "fit_height": true,
          "single_width": false,
          "single_height": false,
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "collapse_when_hidden": true,
          "container_horiz_alignment": "flex-end"
        },
        "states": {
          "0": {
            "condition": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_AAI",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTiKz2"
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
        "id": "bTOVo0",
        "default_name": "Group T",
        "elements": {
          "bTOpU0": {
            "properties": {
              "height": 20,
              "left": 39,
              "top": 0,
              "width": 31,
              "zindex": 4,
              "border_roundness": 6,
              "vertical_centering": true,
              "order": 7,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "min_width_css": "34px",
              "single_height": false,
              "min_height_css": "34px",
              "vert_alignment": "flex-start",
              "horiz_alignment": "flex-start",
              "container_layout": "relative",
              "collapse_when_hidden": true
            },
            "states": {
              "0": {
                "condition": {
                  "next": {
                    "args": 768,
                    "type": "Message",
                    "name": "less_or_equal_than",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTUdV0",
                    "name": "Current Page Width"
                  },
                  "type": "PageData",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "background_style": "bgcolor",
                  "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.1)"
                },
                "type": "State"
              }
            },
            "type": "Group",
            "id": "bTOpP0",
            "default_name": "Group O",
            "elements": {
              "bTOwd0": {
                "properties": {
                  "height": 200,
                  "left": 0,
                  "top": 0,
                  "width": 200,
                  "zindex": 2,
                  "floating_reference": "top",
                  "custom_id": "bTOpg0",
                  "data_source": {
                    "type": "ElementParent",
                    "is_slidable": false
                  },
                  "order": 2,
                  "max_width": 100,
                  "min_width": 0,
                  "fit_height": true,
                  "param_bTZBz": {
                    "next": {
                      "next": {
                        "args": {
                          "properties": {
                            "option_set": "option.memory_management_tabs__os_0",
                            "option_value": "project"
                          },
                          "type": "OneOptionValue",
                          "is_slidable": false
                        },
                        "next": {
                          "next": {
                            "args": "yes",
                            "type": "Message",
                            "name": "equals",
                            "is_slidable": false
                          },
                          "properties": {
                            "formatting_for_true": {
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
                                                    "next": {
                                                      "args": {
                                                        "next": {
                                                          "type": "Message",
                                                          "name": "current_workspace_custom_workspace",
                                                          "is_slidable": false
                                                        },
                                                        "type": "CurrentUser",
                                                        "is_slidable": false
                                                      },
                                                      "type": "Message",
                                                      "name": "contains",
                                                      "is_slidable": false
                                                    },
                                                    "type": "Message",
                                                    "name": "admins_list_custom_workspace",
                                                    "is_slidable": false
                                                  },
                                                  "type": "Message",
                                                  "name": "get_data",
                                                  "is_slidable": false
                                                },
                                                "properties": {
                                                  "element_id": "bTOWT0"
                                                },
                                                "type": "GetElement",
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
                                                    "next": {
                                                      "next": {
                                                        "next": {
                                                          "args": {
                                                            "next": {
                                                              "type": "Message",
                                                              "name": "current_workspace_custom_workspace",
                                                              "is_slidable": false
                                                            },
                                                            "type": "CurrentUser",
                                                            "is_slidable": false
                                                          },
                                                          "type": "Message",
                                                          "name": "contains",
                                                          "is_slidable": false
                                                        },
                                                        "type": "Message",
                                                        "name": "admins_list_custom_workspace",
                                                        "is_slidable": false
                                                      },
                                                      "type": "Message",
                                                      "name": "first_element",
                                                      "is_slidable": false
                                                    },
                                                    "properties": {
                                                      "constraints": {
                                                        "0": {
                                                          "key": "_id",
                                                          "value": {
                                                            "next": {
                                                              "type": "Message",
                                                              "name": "get_AAI",
                                                              "is_slidable": false
                                                            },
                                                            "properties": {
                                                              "element_id": "bTifn2"
                                                            },
                                                            "type": "GetElement",
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
                                                  "name": "get_list_data",
                                                  "is_slidable": false
                                                },
                                                "properties": {
                                                  "element_id": "bTOQj0"
                                                },
                                                "type": "GetElement",
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
                                    "name": "get_data",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "element_id": "bTOWT0"
                                  },
                                  "type": "GetElement",
                                  "is_slidable": false
                                },
                                "2": ""
                              },
                              "type": "TextExpression"
                            },
                            "formatting_for_false": {
                              "entries": {
                                "0": "no"
                              },
                              "type": "TextExpression"
                            }
                          },
                          "type": "Message",
                          "name": "format_boolean",
                          "is_slidable": true
                        },
                        "type": "Message",
                        "name": "equals",
                        "is_slidable": false
                      },
                      "type": "Message",
                      "name": "custom.tab_",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTMGw"
                    },
                    "type": "GetElement",
                    "is_slidable": false
                  },
                  "param_bTaEp": {
                    "entries": {
                      "0": {
                        "next": {
                          "type": "Message",
                          "name": "get_AAI",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTifh2"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      }
                    },
                    "type": "TextExpression"
                  },
                  "param_bTOxT0": {
                    "entries": {
                      "0": {
                        "next": {
                          "type": "Message",
                          "name": "get_AAI",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTifJ2"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      }
                    },
                    "type": "TextExpression"
                  },
                  "param_bTOxX0": {
                    "entries": {
                      "0": {
                        "next": {
                          "type": "Message",
                          "name": "get_AAI",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTiKz2"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      }
                    },
                    "type": "TextExpression"
                  },
                  "param_bTOxY0": {
                    "entries": {
                      "0": {
                        "next": {
                          "type": "Message",
                          "name": "get_AAI",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTifP2"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      }
                    },
                    "type": "TextExpression"
                  },
                  "param_bTPCD1": {
                    "entries": {
                      "0": {
                        "next": {
                          "type": "Message",
                          "name": "get_AAI",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTifb2"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      }
                    },
                    "type": "TextExpression"
                  },
                  "param_bTjsb0": {
                    "entries": {
                      "0": {
                        "next": {
                          "type": "Message",
                          "name": "get_AAI",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTiLT2"
                        },
                        "type": "GetElement",
                        "is_slidable": false
                      }
                    },
                    "type": "TextExpression"
                  },
                  "param_bTvuv2": {
                    "entries": {
                      "0": {
                        "next": {
                          "type": "Message",
                          "name": "custom.shortcut_",
                          "is_slidable": false
                        },
                        "properties": {
                          "element_id": "bTMGw"
                        },
                        "type": "GetElement",
                        "is_slidable": false,
                        "moved_to_top": true
                      }
                    },
                    "type": "TextExpression"
                  },
                  "single_width": true,
                  "min_width_css": "0px",
                  "single_height": true,
                  "min_height_css": "0px",
                  "horiz_alignment": "flex-start",
                  "floating_reference_horizontal": "none",
                  "floating_reference_horizontal_resp": "left"
                },
                "type": "CustomElement",
                "id": "bTOtJ0",
                "default_name": "[Element] RG Memory Menu A"
              },
              "bTOwh0": {
                "properties": {
                  "height": 30,
                  "left": 43.5,
                  "top": 24.3203125,
                  "width": 30,
                  "zindex": 1,
                  "icon": "feather more-horizontal",
                  "icon_color": "var(--color_bTkRL4_default)",
                  "vertical_centering": true,
                  "order": 4,
                  "fit_height": false,
                  "single_width": true,
                  "min_width_css": "14px",
                  "single_height": true,
                  "min_height_css": "14px",
                  "vert_alignment": "center",
                  "horiz_alignment": "flex-start",
                  "nonant_alignment": "bb",
                  "collapse_when_hidden": true
                },
                "states": {
                  "0": {
                    "condition": {
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
                    "properties": {
                      "icon_color": "var(--color_bTsrp2_default)"
                    },
                    "type": "State"
                  },
                  "1": {
                    "condition": {
                      "next": {
                        "type": "Message",
                        "name": "is_hovered",
                        "is_slidable": false
                      },
                      "type": "ThisElement",
                      "is_slidable": false
                    },
                    "properties": {
                      "icon_color": {
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
                        "said": "a2Vsdm8tMzE4ODQ=",
                        "is_slidable": false
                      }
                    },
                    "type": "State"
                  }
                },
                "type": "Icon",
                "id": "bTOpa0",
                "current_parent": "bTOVo0",
                "default_name": "Icon E",
                "name": "Icon Menu",
                "transitions": {
                  "icon_color": {
                    "fn": "ease",
                    "duration": 200
                  }
                }
              }
            },
            "name": "Group Parent Element",
            "style": "Group_transparent_"
          }
        },
        "name": "Group Action/Hidden HTML",
        "style": "Group_transparent_"
      },
      "bTidp2": {
        "properties": {
          "height": 30,
          "width": 30,
          "zindex": 4,
          "icon": "feather trash-2",
          "icon_color": "var(--color_bTGzw_default)",
          "is_visible": false,
          "vertical_centering": true,
          "order": 2,
          "fit_height": false,
          "padding_top": 0,
          "padding_left": 0,
          "single_width": true,
          "min_width_css": "18px",
          "padding_right": 0,
          "single_height": true,
          "min_height_css": "18px",
          "padding_bottom": 0,
          "vert_alignment": "center",
          "horiz_alignment": "flex-start",
          "collapse_when_hidden": true
        },
        "states": {
          "0": {
            "condition": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_empty",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_AAI",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTiKz2"
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
        "id": "bTiaY2",
        "current_parent": "bTNky",
        "default_name": "Icon D",
        "name": "Icon Delete Search Memory File"
      },
      "bTidq2": {
        "properties": {
          "height": 1,
          "left": -652.671875,
          "top": -16,
          "width": 22,
          "zindex": 9,
          "data_source": {
            "type": "ElementParent"
          },
          "group_type": "text",
          "vertical_centering": true,
          "order": 3,
          "fit_width": true,
          "fit_height": true,
          "single_width": true,
          "min_width_css": "1px",
          "single_height": true,
          "min_height_css": "1px",
          "vert_alignment": "flex-start",
          "horiz_alignment": "flex-start",
          "container_layout": "relative",
          "collapse_when_hidden": true
        },
        "type": "Group",
        "id": "bTiLF2",
        "default_name": "Group FZ",
        "elements": {
          "bTiLL2": {
            "properties": {
              "height": 1,
              "left": -16,
              "top": -16,
              "width": 1,
              "zindex": 3,
              "AAD": {
                "entries": {
                  "0": "saved_manually"
                },
                "type": "TextExpression"
              },
              "AAm": {
                "entries": {
                  "0": {
                    "type": "ElementParent",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "order": 2,
              "nonant_alignment": "ab",
              "collapse_when_hidden": true
            },
            "type": "1596550286614x704580898847195100-AAC",
            "id": "bTiKt2",
            "default_name": "readJSON A",
            "name": "readJSON saved_manually"
          },
          "bTiLM2": {
            "properties": {
              "height": 1,
              "left": -16,
              "top": -16,
              "width": 1,
              "zindex": 1,
              "AAD": {
                "entries": {
                  "0": "user_message"
                },
                "type": "TextExpression"
              },
              "AAm": {
                "entries": {
                  "0": {
                    "type": "ElementParent",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "order": 4,
              "nonant_alignment": "cb",
              "collapse_when_hidden": true
            },
            "type": "1596550286614x704580898847195100-AAC",
            "id": "bTiKz2",
            "current_parent": "bTNky",
            "default_name": "readJSON B",
            "name": "readJSON user_message"
          },
          "bTiLS2": {
            "properties": {
              "height": 1,
              "left": -6,
              "top": -6,
              "width": 1,
              "zindex": 4,
              "AAD": {
                "entries": {
                  "0": "_additional.creationTimeUnix"
                },
                "type": "TextExpression"
              },
              "AAm": {
                "entries": {
                  "0": {
                    "type": "ElementParent",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "order": 2,
              "nonant_alignment": "ab",
              "collapse_when_hidden": true
            },
            "type": "1596550286614x704580898847195100-AAC",
            "id": "bTiLN2",
            "current_parent": "bTiLF2",
            "default_name": "readJSON C",
            "name": "readJSON creation time unix"
          },
          "bTiLY2": {
            "properties": {
              "height": 1,
              "left": 4,
              "top": 4,
              "width": 1,
              "zindex": 7,
              "AAD": {
                "entries": {
                  "0": "file_url"
                },
                "type": "TextExpression"
              },
              "AAm": {
                "entries": {
                  "0": {
                    "type": "ElementParent",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "order": 2,
              "nonant_alignment": "ab",
              "collapse_when_hidden": true
            },
            "type": "1596550286614x704580898847195100-AAC",
            "id": "bTiLT2",
            "current_parent": "bTiLF2",
            "default_name": "readJSON D",
            "name": "readJSON file_url"
          },
          "bTifL2": {
            "properties": {
              "height": 1,
              "left": 4,
              "top": 4,
              "width": 1,
              "zindex": 6,
              "AAD": {
                "entries": {
                  "0": "_additional.id"
                },
                "type": "TextExpression"
              },
              "AAm": {
                "entries": {
                  "0": {
                    "type": "ElementParent",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "order": 2,
              "nonant_alignment": "ab",
              "collapse_when_hidden": true
            },
            "type": "1596550286614x704580898847195100-AAC",
            "id": "bTifJ2",
            "current_parent": "bTiLF2",
            "default_name": "readJSON E",
            "name": "readJSON uuid"
          },
          "bTifR2": {
            "properties": {
              "height": 1,
              "left": -6,
              "top": -6,
              "width": 1,
              "zindex": 2,
              "AAD": {
                "entries": {
                  "0": "llm_reply"
                },
                "type": "TextExpression"
              },
              "AAm": {
                "entries": {
                  "0": {
                    "type": "ElementParent",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "order": 4,
              "nonant_alignment": "cb",
              "collapse_when_hidden": true
            },
            "type": "1596550286614x704580898847195100-AAC",
            "id": "bTifP2",
            "current_parent": "bTiLF2",
            "default_name": "readJSON F",
            "name": "readJSON llm_reply"
          },
          "bTifd2": {
            "properties": {
              "height": 1,
              "left": 4,
              "top": 4,
              "width": 1,
              "zindex": 5,
              "AAD": {
                "entries": {
                  "0": "chat_id"
                },
                "type": "TextExpression"
              },
              "AAm": {
                "entries": {
                  "0": {
                    "type": "ElementParent",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "order": 2,
              "nonant_alignment": "ab",
              "collapse_when_hidden": true
            },
            "type": "1596550286614x704580898847195100-AAC",
            "id": "bTifb2",
            "current_parent": "bTiLF2",
            "default_name": "readJSON G",
            "name": "readJSON chat_id"
          },
          "bTifj2": {
            "properties": {
              "height": 1,
              "left": 14,
              "top": 14,
              "width": 1,
              "zindex": 9,
              "AAD": {
                "entries": {
                  "0": "saved_by_user_id"
                },
                "type": "TextExpression"
              },
              "AAm": {
                "entries": {
                  "0": {
                    "type": "ElementParent",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "order": 2,
              "nonant_alignment": "ab",
              "collapse_when_hidden": true
            },
            "type": "1596550286614x704580898847195100-AAC",
            "id": "bTifh2",
            "current_parent": "bTiLF2",
            "default_name": "readJSON H",
            "name": "readJSON saved_by_user_id"
          },
          "bTifp2": {
            "properties": {
              "height": 1,
              "left": 24,
              "top": 24,
              "width": 1,
              "zindex": 10,
              "AAD": {
                "entries": {
                  "0": "project_id"
                },
                "type": "TextExpression"
              },
              "AAm": {
                "entries": {
                  "0": {
                    "type": "ElementParent",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "order": 2,
              "nonant_alignment": "ab",
              "collapse_when_hidden": true
            },
            "type": "1596550286614x704580898847195100-AAC",
            "id": "bTifn2",
            "current_parent": "bTiLF2",
            "default_name": "readJSON I",
            "name": "readJSON project_id"
          },
          "bTjst0": {
            "properties": {
              "height": 1,
              "left": 14,
              "top": 14,
              "width": 1,
              "zindex": 8,
              "AAD": {
                "entries": {
                  "0": "organization_id"
                },
                "type": "TextExpression"
              },
              "AAm": {
                "entries": {
                  "0": {
                    "type": "ElementParent",
                    "is_slidable": false
                  }
                },
                "type": "TextExpression"
              },
              "order": 2,
              "nonant_alignment": "ab",
              "collapse_when_hidden": true
            },
            "type": "1596550286614x704580898847195100-AAC",
            "id": "bTjsr0",
            "current_parent": "bTiLF2",
            "default_name": "readJSON J",
            "name": "readJSON organization_id"
          }
        },
        "name": "Group ReadJson Elements",
        "style": "Group_transparent_"
      }
    },
    "name": "Group Actions/JS elements",
    "style": "Group_transparent_"
  }
};
