export const rg_tabs = {
  "properties": {
    "height": 350,
    "left": 0,
    "top": 0,
    "width": 280,
    "zindex": 27,
    "border_color": "var(--color_bTGzr_default)",
    "border_roundness": 10,
    "data_source": {
      "properties": {
        "option_set": "option.team_settings_menu__os_",
        "option_value": "all values"
      },
      "type": "OptionValue"
    },
    "group_type": "option.team_settings_menu__os_",
    "separator_width": 10,
    "background_style": "bgcolor",
    "bgcolor": "rgba(42,42,45,1)",
    "border_style": "none",
    "order": 1,
    "fit_width": true,
    "fit_height": true,
    "fixed_rows": false,
    "single_width": false,
    "fixed_columns": false,
    "margin_bottom": 36,
    "single_height": false,
    "min_height_css": "38px",
    "show_all_items": true,
    "vert_alignment": "center",
    "auto_fit_column": true,
    "column_cell_gap": 4,
    "horiz_alignment": "flex-start",
    "border_color_top": "var(--color_bTGzr_default)",
    "border_style_top": "none",
    "container_layout": "column",
    "scroll_direction": "flex_row",
    "border_color_left": "var(--color_bTGzr_default)",
    "border_style_left": "solid",
    "four_border_style": false,
    "border_color_right": "var(--color_bTGzr_default)",
    "border_style_right": "solid",
    "cell_min_width_css": "124px",
    "border_color_bottom": "var(--color_bTGzr_default)",
    "border_style_bottom": "solid",
    "cell_min_height_css": "100%",
    "border_roundness_top": 12,
    "collapse_when_hidden": true,
    "border_roundness_left": 12,
    "border_roundness_right": 12,
    "border_roundness_bottom": 12
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
          "element_id": "bTdDD1",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "min_width_css": "100%"
      },
      "type": "State"
    },
    "1": {
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
        "bgcolor": "var(--color_bTspn2_default)"
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
                "properties": {
                  "option_set": "option.user_type__os_",
                  "option_value": "owner"
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
          "name": "current_workspace_custom_workspace",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      },
      "properties": {
        "data_source": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.team_settings_menu__os_",
                "option_value": "subscription"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "type": "Message",
            "name": "minus_element",
            "is_slidable": false
          },
          "properties": {
            "option_set": "option.team_settings_menu__os_",
            "option_value": "all values"
          },
          "type": "OptionValue",
          "said": "a2Vsdm8tMzE4ODQ="
        }
      },
      "type": "State"
    }
  },
  "type": "RepeatingGroup",
  "id": "bTdGR1",
  "default_name": "RepeatingGroup A",
  "elements": {
    "bTMNm": {
      "properties": {
        "height": 0,
        "left": -16,
        "top": -60,
        "width": 0,
        "zindex": 4,
        "border_roundness": 8,
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "group_type": "option.team_settings_menu__os_",
        "vertical_centering": true,
        "order": 1,
        "use_gap": true,
        "fit_width": true,
        "column_gap": 8,
        "fit_height": true,
        "margin_top": 4,
        "padding_top": 6,
        "padding_left": 12,
        "single_width": false,
        "margin_bottom": 4,
        "min_width_css": "120px",
        "padding_right": 12,
        "single_height": false,
        "min_height_css": "36px",
        "padding_bottom": 6,
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "four_border_style": false,
        "border_roundness_top": 10,
        "collapse_when_hidden": true,
        "border_roundness_left": 10,
        "border_roundness_right": 10,
        "border_roundness_bottom": 10,
        "container_horiz_alignment": "center"
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "type": "Message",
                      "name": "to_lowercase",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "display",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "type": "Message",
              "name": "to_lowercase",
              "is_slidable": false
            },
            "properties": {
              "parameter_name": {
                "entries": {
                  "0": "sub_tab"
                },
                "type": "TextExpression"
              }
            },
            "type": "GetParamFromUrl"
          },
          "properties": {
            "border_color": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "#419DB2"
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "#245662"
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
            },
            "background_style": "bgcolor",
            "bgcolor": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "#80BDCB29"
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "#80bdcb2a"
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
            },
            "border_style": "solid"
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
            "background_style": "bgcolor",
            "bgcolor": "rgba(128,189,203,0.16)"
          },
          "type": "State"
        },
        "2": {
          "condition": {
            "next": {
              "args": 768,
              "type": "Message",
              "name": "less_or_equal_than",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTdDD1",
              "name": "Current Page Width"
            },
            "type": "PageData",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "padding_left": 4,
            "padding_right": 4,
            "horiz_alignment": "center"
          },
          "type": "State"
        },
        "3": {
          "condition": {
            "next": {
              "args": 1,
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "CurrentCellsIndex",
            "is_slidable": false
          },
          "properties": {
            "margin_left": 4
          },
          "type": "State"
        },
        "4": {
          "condition": {
            "next": {
              "args": 4,
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "CurrentCellsIndex",
            "is_slidable": false
          },
          "properties": {
            "margin_right": 4
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTdGV1",
      "current_parent": "bTJFz",
      "default_name": "Group A",
      "elements": {
        "bTNmw": {
          "properties": {
            "height": 240,
            "left": -120,
            "top": -40,
            "width": 320,
            "zindex": 3,
            "src": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "image",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                }
              },
              "type": "TextExpression"
            },
            "order": 1,
            "fit_height": true,
            "single_width": true,
            "min_width_css": "16px",
            "single_height": false,
            "min_height_css": "240px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "use_aspect_ratio": true,
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "args": 520,
                  "type": "Message",
                  "name": "less_or_equal_than",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTdDD1",
                  "name": "Current Page Width"
                },
                "type": "PageData",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "properties": {
                "min_width_css": "16px"
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
                          "name": "to_lowercase",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "display",
                        "is_slidable": false
                      },
                      "type": "ElementParent",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "to_lowercase",
                  "is_slidable": false
                },
                "properties": {
                  "parameter_name": {
                    "entries": {
                      "0": "sub_tab"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "GetParamFromUrl",
                "said": "a2Vsdm8tMzE4ODQ="
              },
              "properties": {
                "src": {
                  "entries": {
                    "0": {
                      "next": {
                        "type": "Message",
                        "name": "image_active",
                        "is_slidable": false
                      },
                      "type": "ElementParent",
                      "said": "a2Vsdm8tMzE4ODQ=",
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
                "src": {
                  "entries": {
                    "0": {
                      "next": {
                        "type": "Message",
                        "name": "image_light",
                        "is_slidable": false
                      },
                      "type": "ElementParent",
                      "said": "a2Vsdm8tMzE4ODQ=",
                      "is_slidable": false
                    }
                  },
                  "type": "TextExpression"
                }
              },
              "type": "State"
            }
          },
          "type": "Image",
          "id": "bTdGX1",
          "default_name": "Image A",
          "style": "Image_standard_image_"
        },
        "bTggP1": {
          "properties": {
            "text": {
              "entries": {
                "0": "",
                "1": {
                  "next": {
                    "type": "Message",
                    "name": "display",
                    "is_slidable": false
                  },
                  "type": "ElementParent",
                  "is_slidable": false
                },
                "2": ""
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": 0,
            "width": 100,
            "zindex": 2,
            "order": 5,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "editor_preview_text": "Subscription",
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
                  "element_id": "bTdDD1",
                  "name": "Current Page Width"
                },
                "type": "PageData",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "properties": {
                "margin_top": 2,
                "min_width_css": "100%"
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
                          "name": "to_lowercase",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "display",
                        "is_slidable": false
                      },
                      "type": "ElementParent",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "equals",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "to_lowercase",
                  "is_slidable": false
                },
                "properties": {
                  "parameter_name": {
                    "entries": {
                      "0": "sub_tab"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "GetParamFromUrl",
                "said": "a2Vsdm8tMzE4ODQ="
              },
              "properties": {
                "font_color": {
                  "next": {
                    "next": {
                      "next": {
                        "properties": {
                          "formatting_for_true": {
                            "entries": {
                              "0": "#245662"
                            },
                            "type": "TextExpression"
                          },
                          "formatting_for_false": {
                            "entries": {
                              "0": "#80BDCB"
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
          "type": "Text",
          "id": "bTdGW1",
          "default_name": "Text A",
          "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
        }
      },
      "name": "Group Tab",
      "style": "Group_transparent_",
      "transitions": {
        "background_style": {
          "fn": "ease",
          "duration": 200
        }
      }
    }
  },
  "name": "RG Tabs",
  "style": "RepeatingGroup_transparent_",
};
