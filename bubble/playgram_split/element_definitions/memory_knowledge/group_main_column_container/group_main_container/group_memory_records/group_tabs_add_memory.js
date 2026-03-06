export const Group_Tabs_Add_Memory = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 32,
    "vertical_centering": true,
    "order": 4,
    "row_gap": 16,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 20,
    "fit_height": true,
    "single_width": false,
    "margin_bottom": 16,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "space-between"
  },
  "type": "Group",
  "id": "bTNnr",
  "default_name": "Group N",
  "elements": {
    "bTddZ2": {
      "properties": {
        "height": 0,
        "left": -24,
        "top": -24,
        "width": 0,
        "zindex": 32,
        "vertical_centering": true,
        "order": 1,
        "row_gap": 10,
        "use_gap": true,
        "fit_width": false,
        "column_gap": 10,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "40px",
        "single_height": false,
        "min_height_css": "36px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "collapse_when_hidden": true,
        "container_horiz_alignment": "space-between"
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "args": 1440,
              "next": {
                "args": {
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
            "is_slidable": false
          },
          "properties": {
            "min_width_css": "100%",
            "container_horiz_alignment": "flex-start"
          },
          "type": "State"
        },
        "1": {
          "condition": {
            "next": {
              "args": 1270,
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
            "container_horiz_alignment": "flex-start"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTNqB",
      "default_name": "Group R",
      "elements": {
        "bTNqH": {
          "properties": {
            "height": 36,
            "left": 0,
            "top": -46,
            "width": 446,
            "zindex": 20,
            "vertical_centering": true,
            "order": 1,
            "fit_width": false,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "200px",
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
                  "args": 1440,
                  "next": {
                    "args": {
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
                "is_slidable": false
              },
              "properties": {
                "max_width_css": {
                  "type": "Empty"
                }
              },
              "type": "State"
            },
            "1": {
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
                "max_width_css": {
                  "type": "Empty"
                }
              },
              "type": "State"
            }
          },
          "type": "Group",
          "id": "bTNnZ",
          "current_parent": "bTNkb",
          "default_name": "Group J",
          "elements": {
            "bTJNl": {
              "properties": {
                "height": 48,
                "left": -10,
                "top": -10,
                "width": 250,
                "zindex": 2,
                "mandatory": false,
                "content": {
                  "entries": {
                    "0": ""
                  },
                  "type": "TextExpression"
                },
                "placeholder": {
                  "entries": {
                    "0": "Search memory..."
                  },
                  "type": "TextExpression"
                },
                "order": 3,
                "unique_id": {
                  "entries": {
                    "0": "searchMemory"
                  },
                  "type": "TextExpression"
                },
                "fit_height": false,
                "padding_left": 44,
                "single_width": false,
                "single_height": true,
                "min_height_css": "36px",
                "horiz_alignment": "flex-start",
                "nonant_alignment": "bb",
                "collapse_when_hidden": true
              },
              "type": "Input",
              "id": "bTNnb",
              "default_name": "Input A",
              "name": "Input Search Memories",
              "style": "Input_standart_new_input_"
            },
            "bTnmL": {
              "properties": {
                "height": 240,
                "left": 14,
                "top": -40,
                "width": 240,
                "zindex": 5,
                "src": {
                  "entries": {
                    "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766472465646x543659952419592000/Search.svg"
                  },
                  "type": "TextExpression"
                },
                "fit_height": true,
                "margin_left": 14,
                "single_width": true,
                "min_width_css": "20px",
                "single_height": false,
                "min_height_css": "240px",
                "horiz_alignment": "flex-start",
                "nonant_alignment": "ab",
                "use_aspect_ratio": true,
                "aspect_ratio_width": 1,
                "aspect_ratio_height": 1,
                "collapse_when_hidden": true
              },
              "type": "Image",
              "id": "bTnmJ",
              "default_name": "Image A",
              "style": "Image_standard_image_"
            },
            "bTOUB0": {
              "properties": {
                "bold": false,
                "font_face": "var(--font_default):::600",
                "height": 44,
                "left": 50,
                "top": 26.9140625,
                "width": 150,
                "zindex": 4,
                "icon": "feather plus",
                "border_roundness": 6,
                "font_color": "var(--color_primary_contrast_default)",
                "font_size": 16,
                "icon_color": "var(--color_primary_contrast_default)",
                "is_visible": false,
                "line_height": 1.4,
                "letter_spacing": 0,
                "vertical_centering": true,
                "background_style": "bgcolor",
                "bgcolor": "rgba(var(--color_bTGzr_default_rgb), 0.6)",
                "fit_width": true,
                "icon_size": 16,
                "button_gap": 12,
                "fit_height": true,
                "button_type": "icon",
                "font_family": "var(--font_default)",
                "font_weight": "600",
                "padding_top": 0,
                "margin_right": 8,
                "single_width": false,
                "min_width_css": "25px",
                "single_height": false,
                "min_height_css": "25px",
                "padding_bottom": 0,
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
                            "next": {
                              "type": "Message",
                              "name": "is_false",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "isnt_clickable",
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
                      "name": "is_hovered",
                      "is_slidable": false
                    },
                    "type": "ThisElement",
                    "is_slidable": false
                  },
                  "properties": {
                    "bgcolor": "var(--color_bTGzr_default)"
                  },
                  "type": "State"
                },
                "1": {
                  "condition": {
                    "next": {
                      "type": "Message",
                      "name": "isnt_clickable",
                      "is_slidable": false
                    },
                    "type": "ThisElement",
                    "is_slidable": false
                  },
                  "properties": {
                    "opacity": 25
                  },
                  "type": "State"
                }
              },
              "type": "Button",
              "id": "bTOTw0",
              "default_name": "Button B",
              "name": "Button Add Memory (from Search)",
              "transitions": {
                "background_style": {
                  "fn": "ease",
                  "duration": 200
                }
              }
            }
          },
          "name": "Group Parent Input Search Member",
          "style": "Group_transparent_"
        },
        "bTeFd2": {
          "properties": {
            "height": 0,
            "left": 168.0390625,
            "top": 0,
            "width": 0,
            "zindex": 35,
            "vertical_centering": true,
            "order": 2,
            "row_gap": 10,
            "use_gap": true,
            "fit_width": true,
            "column_gap": 10,
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
                  "args": 940,
                  "next": {
                    "args": {
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
                "min_width_css": "100%"
              },
              "type": "State"
            }
          },
          "type": "Group",
          "id": "bTeFb2",
          "default_name": "Group CZ",
          "elements": {
            "bTeFh2": {
              "properties": {
                "height": 48,
                "left": -114.015625,
                "top": 0,
                "width": 250,
                "zindex": 34,
                "mandatory": true,
                "default": {
                  "properties": {
                    "option_set": "option.memory_type__os_",
                    "option_value": "all_types"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "data_source": {
                  "properties": {
                    "option_set": "option.memory_type__os_"
                  },
                  "type": "AllOptionValue",
                  "is_slidable": false
                },
                "order": 1,
                "fit_height": false,
                "dynamic_type": "option.memory_type__os_",
                "single_width": false,
                "choices_style": "dynamic",
                "max_width_css": "150px",
                "min_width_css": "150px",
                "single_height": true,
                "computed_value": "number",
                "min_height_css": "36px",
                "vert_alignment": "center",
                "horiz_alignment": "flex-start",
                "collapse_when_hidden": true,
                "option_display_expression": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "type": "Message",
                        "name": "display",
                        "is_slidable": false
                      },
                      "type": "InjectedValue"
                    },
                    "2": ""
                  },
                  "type": "TextExpression"
                }
              },
              "states": {
                "3": {
                  "condition": {
                    "next": {
                      "args": 940,
                      "next": {
                        "args": {
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
                    "is_slidable": false
                  },
                  "properties": {
                    "max_width_css": {
                      "type": "Empty"
                    },
                    "min_width_css": "40%"
                  },
                  "type": "State"
                },
                "4": {
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
                    "max_width_css": {
                      "type": "Empty"
                    }
                  },
                  "type": "State"
                }
              },
              "type": "Dropdown",
              "id": "bTOUC0",
              "default_name": "Dropdown C",
              "name": "Dropdown Memory Type",
              "style": "Dropdown_new_dropdown_14px_"
            },
            "bTeFi2": {
              "properties": {
                "height": 48,
                "left": -114.015625,
                "top": 0,
                "width": 250,
                "zindex": 34,
                "mandatory": false,
                "data_source": {
                  "next": {
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
                "is_visible": false,
                "placeholder": {
                  "entries": {
                    "0": "Choose a project..."
                  },
                  "type": "TextExpression"
                },
                "order": 2,
                "fit_height": false,
                "dynamic_type": "custom.project",
                "single_width": false,
                "choices_style": "dynamic",
                "max_width_css": "200px",
                "min_width_css": "160px",
                "single_height": true,
                "computed_value": "number",
                "min_height_css": "36px",
                "vert_alignment": "center",
                "horiz_alignment": "flex-start",
                "collapse_when_hidden": true,
                "option_display_expression": {
                  "entries": {
                    "0": "",
                    "1": {
                      "next": {
                        "type": "Message",
                        "name": "name_text",
                        "is_slidable": false
                      },
                      "type": "InjectedValue"
                    },
                    "2": ""
                  },
                  "type": "TextExpression"
                }
              },
              "states": {
                "0": {
                  "condition": {
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
                    "is_visible": true
                  },
                  "type": "State"
                },
                "1": {
                  "condition": {
                    "next": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "is_empty",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "first_element",
                        "is_slidable": false
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
                  "properties": {
                    "is_visible": false
                  },
                  "type": "State"
                },
                "2": {
                  "condition": {
                    "next": {
                      "args": 940,
                      "next": {
                        "args": {
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
                    "is_slidable": false
                  },
                  "properties": {
                    "max_width_css": {
                      "type": "Empty"
                    },
                    "min_width_css": "40%"
                  },
                  "type": "State"
                },
                "3": {
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
                    "max_width_css": {
                      "type": "Empty"
                    }
                  },
                  "type": "State"
                }
              },
              "type": "Dropdown",
              "id": "bTOWT0",
              "current_parent": "bTNqB",
              "default_name": "Dropdown D",
              "name": "Dropdown Filter by Project",
              "style": "Dropdown_new_dropdown_14px_"
            }
          },
          "name": "Group Dropdown Container",
          "style": "Group_transparent_"
        }
      },
      "name": "Group Search/Filters",
      "style": "Group_transparent_"
    },
    "bTnVf1": {
      "properties": {
        "height": 280,
        "left": 0,
        "top": 0,
        "width": 280,
        "zindex": 34,
        "vertical_centering": true,
        "order": 2,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "40px",
        "single_height": true,
        "min_height_css": "1px",
        "horiz_alignment": "flex-start",
        "border_color_top": "rgba(42, 42, 45, 1)",
        "border_style_top": "dashed",
        "container_layout": "column",
        "four_border_style": true,
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
            "border_color_top": "rgba(234,236,240,1)"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTnVd1",
      "current_parent": "bTNnr",
      "default_name": "Group KZ",
      "name": "Group divider",
      "style": "Group_transparent_"
    },
    "bTnVl1": {
      "properties": {
        "height": 0,
        "left": 0,
        "top": 69,
        "width": 0,
        "zindex": 35,
        "vertical_centering": true,
        "order": 3,
        "row_gap": 10,
        "use_gap": true,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "40px",
        "single_height": false,
        "min_height_css": "38px",
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "collapse_when_hidden": true,
        "container_horiz_alignment": "space-between"
      },
      "type": "Group",
      "id": "bTnVj1",
      "default_name": "Group MZ",
      "elements": {
        "bTnVp1": {
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
          "style": "RepeatingGroup_transparent_"
        },
        "bTnVv1": {
          "properties": {
            "text": {
              "entries": {
                "0": "Category"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": 0,
            "width": 100,
            "zindex": 2,
            "order": 1,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTnVq1",
          "current_parent": "bTnVj1",
          "default_name": "Text Q",
          "style": "Text_inter___400___16px___neutral_copy_copy_"
        }
      },
      "style": "Group_transparent_"
    }
  },
  "name": "Group Tabs/Add Memory",
  "style": "Group_transparent_"
};
