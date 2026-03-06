import { Group_input_button } from './group_input_button/index.js';

export const elements = {
  "bTKdB0": Group_input_button,
  "bTqZz1": {
    "properties": {
      "height": 0,
      "left": 248.890625,
      "top": 81.1875,
      "width": 0,
      "zindex": 8,
      "vertical_centering": true,
      "order": 27,
      "row_gap": 8,
      "use_gap": true,
      "fit_width": false,
      "column_gap": 8,
      "fit_height": true,
      "single_width": false,
      "min_width_css": "40px",
      "single_height": false,
      "min_height_css": "40px",
      "horiz_alignment": "center",
      "container_layout": "row",
      "collapse_when_hidden": true,
      "container_horiz_alignment": "center"
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
          "is_slidable": false
        },
        "properties": {
          "container_horiz_alignment": "center"
        },
        "type": "State"
      }
    },
    "type": "Group",
    "id": "bTqZx1",
    "default_name": "Group WZZZ",
    "elements": {
      "bTqaD1": {
        "properties": {
          "height": 350,
          "left": 0,
          "top": -81.1875,
          "width": 280,
          "zindex": 7,
          "data_source": {
            "next": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "tools",
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
          "group_type": "option.llm_tool__os_",
          "order": 1,
          "fit_width": true,
          "fit_height": true,
          "fixed_rows": false,
          "margin_left": 0,
          "row_cell_gap": 8,
          "single_width": false,
          "fixed_columns": false,
          "single_height": false,
          "show_all_items": false,
          "vert_alignment": "center",
          "auto_fit_column": true,
          "column_cell_gap": 8,
          "horiz_alignment": "center",
          "container_layout": "column",
          "scroll_direction": "flex_row",
          "cell_min_width_css": "10px",
          "cell_min_height_css": "100%",
          "collapse_when_hidden": true,
          "container_vert_alignment": "center"
        },
        "states": {
          "0": {
            "condition": {
              "next": {
                "next": {
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "is_not_empty",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "custom.default_model_",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTUdV0"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "and_",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "is_empty",
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
            "properties": {
              "data_source": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "tools",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "custom.default_model_",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTUdV0"
                },
                "type": "GetElement",
                "is_slidable": false
              }
            },
            "type": "State"
          },
          "1": {
            "condition": {
              "next": {
                "next": {
                  "next": {
                    "args": {
                      "next": {
                        "next": {
                          "type": "Message",
                          "name": "is_empty",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "custom.default_model_",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTUdV0"
                      },
                      "type": "GetElement",
                      "is_slidable": false
                    },
                    "type": "Message",
                    "name": "and_",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "is_empty",
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
            "properties": {
              "data_source": {
                "next": {
                  "next": {
                    "type": "Message",
                    "name": "tools",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "default_model_option_llm_models__os_",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              }
            },
            "type": "State"
          },
          "2": {
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
              "type": "ThisElement",
              "is_slidable": false
            },
            "properties": {
              "is_visible": false
            },
            "type": "State"
          },
          "3": {
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
              "is_slidable": false
            },
            "properties": {
              "cell_min_height_css": "32px"
            },
            "type": "State"
          }
        },
        "type": "RepeatingGroup",
        "id": "bTUfA0",
        "default_name": "RepeatingGroup E",
        "elements": {
          "bTQqh0": {
            "properties": {
              "height": 0,
              "left": 0,
              "top": 0,
              "width": 0,
              "zindex": 4,
              "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
              "border_roundness": 16,
              "data_source": {
                "type": "ElementParent",
                "is_slidable": false
              },
              "group_type": "option.llm_tool__os_",
              "is_visible": true,
              "vertical_centering": true,
              "background_style": "none",
              "bgcolor": "rgba(73,73,73,1)",
              "border_style": "solid",
              "order": 1,
              "use_gap": true,
              "fit_width": false,
              "column_gap": 6,
              "fit_height": true,
              "padding_top": 6,
              "padding_left": 8,
              "single_width": false,
              "margin_bottom": 2,
              "min_width_css": "0px",
              "padding_right": 8,
              "single_height": false,
              "min_height_css": "30px",
              "padding_bottom": 6,
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "container_layout": "row",
              "collapse_when_hidden": true,
              "container_horiz_alignment": "flex-start"
            },
            "states": {
              "0": {
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
                  }
                },
                "type": "State"
              },
              "1": {
                "condition": {
                  "next": {
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
                              "name": "is_empty",
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
                        "next": {
                          "args": {
                            "next": {
                              "next": {
                                "next": {
                                  "args": {
                                    "type": "ElementParent",
                                    "is_slidable": false
                                  },
                                  "type": "Message",
                                  "name": "contains",
                                  "is_slidable": false
                                },
                                "type": "Message",
                                "name": "enabled_tools_list_option_llm_tool__os_",
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
                          "name": "or_",
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
                    "name": "custom.tool_",
                    "is_slidable": false
                  },
                  "properties": {
                    "element_id": "bTUdV0"
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
                  "bgcolor": "var(--color_bTkRW4_default)"
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
                    "element_id": "bTUdV0",
                    "name": "Current Page Width"
                  },
                  "type": "PageData",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "container_horiz_alignment": "center"
                },
                "type": "State"
              },
              "3": {
                "condition": {
                  "next": {
                    "args": 768,
                    "next": {
                      "args": {
                        "next": {
                          "args": {
                            "properties": {
                              "option_set": "option.llm_tool__os_",
                              "option_value": "web_search"
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
                    "element_id": "bTUdV0",
                    "name": "Current Page Width"
                  },
                  "type": "PageData",
                  "said": "a2Vsdm8tMzE4ODQ=",
                  "is_slidable": false
                },
                "properties": {
                  "min_width_css": "100%",
                  "horiz_alignment": "center",
                  "container_horiz_alignment": "center"
                },
                "type": "State"
              }
            },
            "type": "Group",
            "id": "bTUfB0",
            "current_parent": "bTPJN0",
            "default_name": "Group WZ",
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
                  "order": 8,
                  "fit_width": true,
                  "fit_height": true,
                  "single_width": false,
                  "single_height": false,
                  "min_height_css": "0px",
                  "vert_alignment": "center",
                  "horiz_alignment": "flex-start",
                  "collapse_when_hidden": true
                },
                "states": {
                  "1": {
                    "condition": {
                      "next": {
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
                                  "name": "is_empty",
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
                            "next": {
                              "args": {
                                "next": {
                                  "next": {
                                    "next": {
                                      "args": {
                                        "type": "ElementParent",
                                        "is_slidable": false
                                      },
                                      "type": "Message",
                                      "name": "contains",
                                      "is_slidable": false
                                    },
                                    "type": "Message",
                                    "name": "enabled_tools_list_option_llm_tool__os_",
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
                              "next": {
                                "args": {
                                  "next": {
                                    "type": "Message",
                                    "name": "is_hovered",
                                    "is_slidable": false
                                  },
                                  "properties": {
                                    "element_id": "bTUfB0"
                                  },
                                  "type": "GetElement",
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
                            "name": "and_",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "contains",
                          "is_slidable": false
                        },
                        "type": "Message",
                        "name": "custom.tool_",
                        "is_slidable": false
                      },
                      "properties": {
                        "element_id": "bTUdV0"
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
                                    "0": "#121213"
                                  },
                                  "type": "TextExpression"
                                },
                                "formatting_for_false": {
                                  "entries": {
                                    "0": "#80bdcb"
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
                      }
                    },
                    "type": "State"
                  }
                },
                "type": "Text",
                "id": "bTUfF0",
                "default_name": "Text V",
                "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
              },
              "bTPJx": {
                "properties": {
                  "height": 18,
                  "left": 8,
                  "top": 9,
                  "width": 18,
                  "zindex": 6,
                  "data_source": {
                    "type": "ElementParent"
                  },
                  "group_type": "option.llm_tool__os_",
                  "vertical_centering": true,
                  "order": 1,
                  "fit_width": true,
                  "fit_height": true,
                  "single_width": false,
                  "single_height": false,
                  "vert_alignment": "center",
                  "horiz_alignment": "flex-start",
                  "container_layout": "relative",
                  "collapse_when_hidden": true
                },
                "type": "Group",
                "id": "bTUfG0",
                "default_name": "Group UZ",
                "elements": {
                  "bTPKB": {
                    "properties": {
                      "height": 240,
                      "left": -8,
                      "top": -8,
                      "width": 320,
                      "zindex": 2,
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
                      "order": 2,
                      "fit_height": true,
                      "single_width": true,
                      "min_width_css": "16px",
                      "single_height": false,
                      "min_height_css": "240px",
                      "vert_alignment": "center",
                      "horiz_alignment": "flex-start",
                      "nonant_alignment": "bb",
                      "use_aspect_ratio": true,
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
                              "next": {
                                "args": {
                                  "next": {
                                    "next": {
                                      "type": "Message",
                                      "name": "is_empty",
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
                                "next": {
                                  "args": {
                                    "next": {
                                      "next": {
                                        "next": {
                                          "args": {
                                            "type": "ElementParent",
                                            "is_slidable": false
                                          },
                                          "type": "Message",
                                          "name": "contains",
                                          "is_slidable": false
                                        },
                                        "type": "Message",
                                        "name": "enabled_tools_list_option_llm_tool__os_",
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
                                  "next": {
                                    "args": {
                                      "next": {
                                        "type": "Message",
                                        "name": "is_hovered",
                                        "is_slidable": false
                                      },
                                      "properties": {
                                        "element_id": "bTUfB0"
                                      },
                                      "type": "GetElement",
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
                                "name": "and_",
                                "is_slidable": false
                              },
                              "type": "Message",
                              "name": "contains",
                              "is_slidable": false
                            },
                            "type": "Message",
                            "name": "custom.tool_",
                            "is_slidable": false
                          },
                          "properties": {
                            "element_id": "bTUdV0"
                          },
                          "type": "GetElement",
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        },
                        "properties": {
                          "src": {
                            "entries": {
                              "0": {
                                "next": {
                                  "type": "Message",
                                  "name": "image_black",
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
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        },
                        "properties": {
                          "is_visible": false
                        },
                        "type": "State"
                      }
                    },
                    "type": "Image",
                    "id": "bTUfH0",
                    "default_name": "Image D",
                    "style": "Image_standard_image_"
                  },
                  "bTtUD3": {
                    "properties": {
                      "height": 240,
                      "left": 2,
                      "top": 2,
                      "width": 320,
                      "zindex": 3,
                      "is_visible": false,
                      "src": {
                        "entries": {
                          "0": {
                            "next": {
                              "type": "Message",
                              "name": "image_light_mode",
                              "is_slidable": false
                            },
                            "type": "ElementParent",
                            "is_slidable": false
                          }
                        },
                        "type": "TextExpression"
                      },
                      "order": 2,
                      "fit_height": true,
                      "single_width": true,
                      "min_width_css": "16px",
                      "single_height": false,
                      "min_height_css": "240px",
                      "vert_alignment": "center",
                      "horiz_alignment": "flex-start",
                      "nonant_alignment": "bb",
                      "use_aspect_ratio": true,
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
                          "said": "a2Vsdm8tMzE4ODQ=",
                          "is_slidable": false
                        },
                        "properties": {
                          "is_visible": true
                        },
                        "type": "State"
                      }
                    },
                    "type": "Image",
                    "id": "bTtTa3",
                    "current_parent": "bTUfG0",
                    "default_name": "Image Z",
                    "name": "Image light",
                    "style": "Image_standard_image_"
                  }
                },
                "name": "Group Image Container/Remove Tool",
                "style": "Group_transparent_"
              }
            },
            "name": "Group Tool",
            "style": "Group_transparent_",
            "transitions": {
              "background_style": {
                "fn": "ease",
                "duration": 200
              }
            }
          }
        },
        "name": "RG Tools",
        "style": "RepeatingGroup_transparent_"
      },
      "bTrTX2": {
        "properties": {
          "height": 0,
          "left": -270.21875,
          "top": 0,
          "width": 0,
          "zindex": 4,
          "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
          "border_roundness": 16,
          "data_source": {
            "properties": {
              "option_set": "option.llm_tool__os_",
              "option_value": "image_generation"
            },
            "type": "OneOptionValue",
            "is_slidable": false
          },
          "group_type": "option.llm_tool__os_",
          "is_visible": false,
          "vertical_centering": true,
          "background_style": "none",
          "bgcolor": "rgba(73,73,73,1)",
          "border_style": "solid",
          "order": 2,
          "use_gap": true,
          "fit_width": true,
          "unique_id": {
            "entries": {
              "0": ""
            },
            "type": "TextExpression"
          },
          "column_gap": 6,
          "fit_height": true,
          "padding_top": 6,
          "padding_left": 8,
          "single_width": false,
          "margin_bottom": 2,
          "min_width_css": "0px",
          "padding_right": 8,
          "single_height": false,
          "min_height_css": "30px",
          "padding_bottom": 6,
          "vert_alignment": "center",
          "button_disabled": true,
          "horiz_alignment": "flex-start",
          "container_layout": "row",
          "collapse_when_hidden": true,
          "container_horiz_alignment": "flex-start"
        },
        "states": {
          "0": {
            "condition": {
              "next": {
                "next": {
                  "args": {
                    "properties": {
                      "option_set": "option.llm_tool__os_",
                      "option_value": "image_generation"
                    },
                    "type": "OneOptionValue",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "not_contains",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "get_list_data",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTUfA0"
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
              "button_disabled": false,
              "container_horiz_alignment": "center"
            },
            "type": "State"
          }
        },
        "type": "Group",
        "id": "bTqaE1",
        "current_parent": "bTqZx1",
        "default_name": "Group UZZZZ",
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
              "font_color": "var(--color_bTkRX4_default)",
              "font_size": 12,
              "line_height": 1.2,
              "vertical_centering": true,
              "order": 11,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "single_height": false,
              "min_height_css": "0px",
              "vert_alignment": "center",
              "button_disabled": true,
              "horiz_alignment": "flex-start",
              "title_attribute": {
                "entries": {
                  "0": ""
                },
                "type": "TextExpression"
              },
              "collapse_when_hidden": true
            },
            "states": {
              "0": {
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
            "id": "bTqaJ1",
            "default_name": "Text GZ"
          },
          "bTPJx": {
            "properties": {
              "height": 18,
              "left": 8,
              "top": 9,
              "width": 18,
              "zindex": 6,
              "data_source": {
                "type": "ElementParent"
              },
              "group_type": "option.llm_tool__os_",
              "vertical_centering": true,
              "order": 4,
              "fit_width": true,
              "fit_height": true,
              "single_width": false,
              "single_height": false,
              "vert_alignment": "center",
              "horiz_alignment": "flex-start",
              "container_layout": "relative",
              "collapse_when_hidden": true
            },
            "type": "Group",
            "id": "bTqaK1",
            "default_name": "Group UZZZZ",
            "elements": {
              "bTPKB": {
                "properties": {
                  "height": 240,
                  "left": -8,
                  "top": -8,
                  "width": 320,
                  "zindex": 2,
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
                  "order": 2,
                  "fit_height": true,
                  "single_width": true,
                  "min_width_css": "16px",
                  "single_height": false,
                  "min_height_css": "240px",
                  "vert_alignment": "center",
                  "horiz_alignment": "flex-start",
                  "title_attribute": {
                    "entries": {
                      "0": ""
                    },
                    "type": "TextExpression"
                  },
                  "nonant_alignment": "bb",
                  "use_aspect_ratio": true,
                  "collapse_when_hidden": true
                },
                "type": "Image",
                "id": "bTqaL1",
                "default_name": "Image X",
                "style": "Image_standard_image_"
              }
            },
            "name": "Group Image Container/Remove Tool",
            "style": "Group_transparent_"
          }
        },
        "name": "Group Tool Not Clickable",
        "style": "Group_transparent_",
        "transitions": {
          "background_style": {
            "fn": "ease",
            "duration": 200
          }
        }
      }
    },
    "name": "Group Tools",
    "style": "Group_transparent_"
  },
};
