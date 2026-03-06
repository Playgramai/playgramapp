export const rg_memory_level = {
  "properties": {
    "height": 350,
    "left": -80,
    "top": -150,
    "width": 280,
    "zindex": 3,
    "border_roundness": 10,
    "columns": 3,
    "data_source": {
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
        "name": "minus_element",
        "is_slidable": false
      },
      "properties": {
        "option_set": "option.memory_management_tabs__os_0"
      },
      "type": "AllOptionValue",
      "is_slidable": false
    },
    "group_type": "option.memory_management_tabs__os_0",
    "rows": 1,
    "background_style": "bgcolor",
    "bgcolor": "rgba(27,27,29,1)",
    "order": 2,
    "fit_width": true,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "min_height_css": "38px",
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "cell_min_height_css": "56px",
    "collapse_when_hidden": true,
    "container_vert_alignment": "center"
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
        "bgcolor": "var(--color_bTspn2_default)"
      },
      "type": "State"
    }
  },
  "type": "RepeatingGroup",
  "id": "bTnUh1",
  "default_name": "RepeatingGroup B",
  "elements": {
    "bTnUp1": {
      "properties": {
        "height": 280,
        "left": -80,
        "top": -80,
        "width": 280,
        "zindex": 2,
        "border_roundness": 8,
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "group_type": "option.memory_management_tabs__os_0",
        "vertical_centering": true,
        "order": 1,
        "fit_width": false,
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
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
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
        "1": {
          "condition": {
            "next": {
              "args": 3,
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
        },
        "2": {
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
              "name": "custom.memory_level_",
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
        }
      },
      "type": "Group",
      "id": "bTnUn1",
      "default_name": "Group JZ",
      "elements": {
        "bTnUv1": {
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
            "line_height": 1,
            "order": 1,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "editor_preview_text": "Team",
            "collapse_when_hidden": true
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
                  "name": "custom.memory_level_",
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
                "font_color": "var(--color_bTsrq2_default)"
              },
              "type": "State",
              "said": "a2Vsdm8tMzE4ODQ="
            },
            "2": {
              "condition": {
                "next": {
                  "args": {
                    "properties": {
                      "breakpoint_id": "built-in-mobile"
                    },
                    "type": "Breakpoint",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "less_than",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "",
                  "name": "Current Page Width"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "properties": {
                "font_size": 14
              },
              "type": "State"
            }
          },
          "type": "Text",
          "id": "bTnUt1",
          "current_parent": "bTnUn1",
          "default_name": "Text O",
          "style": "Text_inter___400___14px___white_"
        }
      },
      "style": "Group_transparent_"
    }
  },
  "name": "RG Memory level",
  "style": "RepeatingGroup_transparent_",
};
