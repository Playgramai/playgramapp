export const rg_tabs = {
  "properties": {
    "height": 350,
    "left": 0,
    "top": -69,
    "width": 280,
    "zindex": 27,
    "border_color": "var(--color_bTGzr_default)",
    "border_roundness": 12,
    "columns": 4,
    "data_source": {
      "properties": {
        "option_set": "option.memory_management_tabs__os_0"
      },
      "type": "AllOptionValue",
      "is_slidable": false
    },
    "group_type": "option.memory_management_tabs__os_0",
    "rows": 1,
    "separator_width": 10,
    "background_style": "bgcolor",
    "bgcolor": "rgba(27,27,29,1)",
    "border_style": "none",
    "order": 2,
    "fit_width": true,
    "fit_height": true,
    "fixed_rows": true,
    "single_width": false,
    "fixed_columns": true,
    "single_height": false,
    "min_height_css": "38px",
    "show_all_items": true,
    "vert_alignment": "center",
    "auto_fit_column": true,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "scroll_direction": "flex_row",
    "cell_min_width_css": "100px",
    "cell_min_height_css": "100%",
    "collapse_when_hidden": true,
    "container_vert_alignment": "center"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 940,
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
        "min_width_css": "100%",
        "cell_min_width_css": "90px"
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
        "cell_min_width_css": "60px"
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
        "bgcolor": "var(--color_bTspn2_default)"
      },
      "type": "State"
    }
  },
  "type": "RepeatingGroup",
  "id": "bTMNf",
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
        "group_type": "option.memory_management_tabs__os_0",
        "vertical_centering": true,
        "order": 1,
        "row_gap": 3,
        "use_gap": true,
        "fit_width": false,
        "column_gap": 8,
        "fit_height": true,
        "padding_top": 6,
        "padding_left": 12,
        "single_width": false,
        "min_width_css": "40px",
        "padding_right": 12,
        "single_height": false,
        "min_height_css": "30px",
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
                  "type": "ElementParent",
                  "is_slidable": false
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
        "4": {
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
        "5": {
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
      "id": "bTMHN",
      "current_parent": "bTJFz",
      "default_name": "Group A",
      "elements": {
        "bTHpX": {
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
            "font_color": "rgba(112,112,114,1)",
            "font_size": 12,
            "order": 5,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "editor_preview_text": "All categories",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "args": 890,
                  "next": {
                    "args": {
                      "next": {
                        "args": {
                          "properties": {
                            "option_set": "option.memory_management_tabs__os_0",
                            "option_value": "all_types"
                          },
                          "type": "OneOptionValue",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "not_equals",
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
                  "name": "less_or_equal_than",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTMGw",
                  "name": "Current Page Width"
                },
                "type": "PageData",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "properties": {
                "font_alignment": "center",
                "font_size": 12,
                "min_width_css": "100%"
              },
              "type": "State"
            },
            "1": {
              "condition": {
                "next": {
                  "args": 890,
                  "next": {
                    "args": {
                      "next": {
                        "args": {
                          "properties": {
                            "option_set": "option.memory_management_tabs__os_0",
                            "option_value": "all_types"
                          },
                          "type": "OneOptionValue",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "equals",
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
                  "name": "less_or_equal_than",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTMGw",
                  "name": "Current Page Width"
                },
                "type": "PageData",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "properties": {
                "text": {
                  "entries": {
                    "0": "All\nCategories"
                  },
                  "type": "TextExpression"
                },
                "font_alignment": "center",
                "font_size": 12,
                "line_height": 1.3,
                "min_width_css": "100%"
              },
              "type": "State"
            },
            "2": {
              "condition": {
                "next": {
                  "args": 400,
                  "next": {
                    "args": {
                      "next": {
                        "args": {
                          "properties": {
                            "option_set": "option.memory_management_tabs__os_0",
                            "option_value": "all_types"
                          },
                          "type": "OneOptionValue",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "equals",
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
                  "name": "less_or_equal_than",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTMGw",
                  "name": "Current Page Width"
                },
                "type": "PageData",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "properties": {
                "text": {
                  "entries": {
                    "0": "All"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "State"
            },
            "3": {
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
                "font_color": "var(--color_bTsrq2_default)"
              },
              "type": "State"
            },
            "4": {
              "condition": {
                "next": {
                  "next": {
                    "args": {
                      "type": "ElementParent",
                      "is_slidable": false
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
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
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
          "id": "bTMHO",
          "default_name": "Text A",
          "style": "Text_inter___400___14px___white_"
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
