export const Group_Sidebar_Menu_OS = {
  "properties": {
    "height": 0,
    "left": -8,
    "top": -12,
    "width": 0,
    "zindex": 4,
    "border_roundness": 16,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "option.sidebar_menu__os_",
    "vertical_centering": true,
    "order": 1,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 8,
    "fit_height": true,
    "padding_top": 10,
    "padding_left": 10,
    "single_width": false,
    "padding_right": 10,
    "single_height": false,
    "min_height_css": "36px",
    "padding_bottom": 10,
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
        "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.12)"
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
        "border_roundness": 6,
        "max_width_css": "36px",
        "min_width_css": "36px",
        "container_horiz_alignment": "center"
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "args": {
            "next": {
              "type": "Message",
              "name": "url_formatted",
              "is_slidable": false
            },
            "properties": {
              "option_set": "option.sidebar_menu__os_",
              "option_value": "memory_management"
            },
            "type": "OneOptionValue",
            "is_slidable": false
          },
          "next": {
            "args": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.sidebar_menu__os_",
                    "option_value": "memory_management"
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
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "properties": {
          "value": "text",
          "parameter_name": {
            "entries": {
              "0": "tab"
            },
            "type": "TextExpression"
          }
        },
        "type": "GetParamFromUrl"
      },
      "properties": {
        "background_style": "bgcolor",
        "bgcolor": "var(--color_bTGzr_default)"
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
          "element_id": "bTHoP",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "container_horiz_alignment": "center"
      },
      "type": "State"
    },
    "4": {
      "condition": {
        "next": {
          "args": {
            "properties": {
              "option_set": "option.sidebar_menu__os_",
              "option_value": "new_chat"
            },
            "type": "OneOptionValue",
            "is_slidable": false
          },
          "next": {
            "args": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_true",
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
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "type": "ElementParent",
        "is_slidable": false
      },
      "properties": {
        "margin_bottom": 20,
        "min_height_css": "40px"
      },
      "type": "State"
    },
    "5": {
      "condition": {
        "next": {
          "args": {
            "properties": {
              "option_set": "option.sidebar_menu__os_",
              "option_value": "library0"
            },
            "type": "OneOptionValue",
            "is_slidable": false
          },
          "next": {
            "args": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_true",
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
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "type": "ElementParent",
        "is_slidable": false
      },
      "properties": {
        "margin_bottom": 20
      },
      "type": "State"
    },
    "6": {
      "condition": {
        "next": {
          "args": {
            "next": {
              "type": "Message",
              "name": "url_formatted",
              "is_slidable": false
            },
            "properties": {
              "option_set": "option.sidebar_menu__os_",
              "option_value": "library0"
            },
            "type": "OptionValue"
          },
          "next": {
            "args": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.sidebar_menu__os_",
                    "option_value": "library0"
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
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "properties": {
          "value": "text",
          "parameter_name": {
            "entries": {
              "0": "tab"
            },
            "type": "TextExpression"
          }
        },
        "type": "GetParamFromUrl"
      },
      "properties": {
        "background_style": "bgcolor",
        "bgcolor": "var(--color_bTGzr_default)"
      },
      "type": "State"
    },
    "7": {
      "condition": {
        "next": {
          "next": {
            "args": {
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
        "bgcolor": "var(--color_bTsrr2_default)"
      },
      "type": "State"
    },
    "8": {
      "condition": {
        "next": {
          "args": {
            "next": {
              "type": "Message",
              "name": "url_formatted",
              "is_slidable": false
            },
            "properties": {
              "option_set": "option.sidebar_menu__os_",
              "option_value": "memory_management"
            },
            "type": "OneOptionValue",
            "is_slidable": false
          },
          "next": {
            "args": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.sidebar_menu__os_",
                    "option_value": "memory_management"
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
            "next": {
              "args": {
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
              "type": "Message",
              "name": "and_",
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
          "value": "text",
          "parameter_name": {
            "entries": {
              "0": "tab"
            },
            "type": "TextExpression"
          }
        },
        "type": "GetParamFromUrl"
      },
      "properties": {
        "background_style": "bgcolor",
        "bgcolor": "var(--color_bTsrr2_default)"
      },
      "type": "State"
    },
    "9": {
      "condition": {
        "next": {
          "args": {
            "next": {
              "type": "Message",
              "name": "url_formatted",
              "is_slidable": false
            },
            "properties": {
              "option_set": "option.sidebar_menu__os_",
              "option_value": "library0"
            },
            "type": "OptionValue"
          },
          "next": {
            "args": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.sidebar_menu__os_",
                    "option_value": "library0"
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
            "next": {
              "args": {
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
              "type": "Message",
              "name": "and_",
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
          "value": "text",
          "parameter_name": {
            "entries": {
              "0": "tab"
            },
            "type": "TextExpression"
          }
        },
        "type": "GetParamFromUrl"
      },
      "properties": {
        "background_style": "bgcolor",
        "bgcolor": "var(--color_bTsrr2_default)"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTHpR",
  "default_name": "Group B",
  "elements": {
    "bTHpX": {
      "properties": {
        "text": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "display",
                "is_slidable": false
              },
              "type": "ElementParent",
              "is_slidable": false
            }
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": 0,
        "width": 100,
        "zindex": 2,
        "order": 3,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "editor_preview_text": "Memory & Knowledge",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
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
            "is_visible": false
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
            "properties": {
              "element_id": "bTHpR"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "font_color": "var(--color_bTkRP4_default)"
          },
          "type": "State"
        },
        "2": {
          "condition": {
            "next": {
              "next": {
                "args": {
                  "properties": {
                    "option_set": "option.screen_mode__os_",
                    "option_value": "light"
                  },
                  "type": "OneOptionValue",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "equals",
                "is_slidable": false
              },
              "type": "Message",
              "name": "screen_mode_option_screen_mode__os_",
              "is_slidable": false
            },
            "type": "CurrentUser",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "font_color": "var(--color_bTsrq2_default)"
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTHpB",
      "default_name": "Text A",
      "style": "Text_inter___400___16px___neutral_copy_"
    },
    "bTHpY": {
      "properties": {
        "height": 240,
        "left": 0,
        "top": 0,
        "width": 320,
        "zindex": 3,
        "src": {
          "entries": {
            "0": {
              "next": {
                "type": "Message",
                "name": "icon",
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
        "min_width_css": "20px",
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
              "args": 768,
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
          "properties": {
            "min_width_css": "16px"
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
            "src": {
              "entries": {
                "0": {
                  "next": {
                    "type": "Message",
                    "name": "icon_light_mode",
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
      "id": "bTHpL",
      "default_name": "Image A",
      "name": "Image Icon",
      "style": "Image_standard_image_"
    },
    "bTkWb2": {
      "properties": {
        "height": 280,
        "left": -80,
        "top": -80,
        "width": 280,
        "zindex": 4,
        "data_source": {
          "type": "ElementParent",
          "is_slidable": false
        },
        "group_type": "option.sidebar_menu__os_",
        "is_visible": false,
        "vertical_centering": true,
        "order": 4,
        "use_gap": true,
        "fit_width": true,
        "column_gap": 2,
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
              "args": {
                "properties": {
                  "option_set": "option.sidebar_menu__os_",
                  "option_value": "new_chat"
                },
                "type": "OneOptionValue",
                "is_slidable": false
              },
              "next": {
                "args": {
                  "next": {
                    "next": {
                      "args": {
                        "next": {
                          "next": {
                            "type": "Message",
                            "name": "is_true",
                            "is_slidable": false
                          },
                          "type": "Message",
                          "name": "shortcuts_on__boolean",
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
                  "properties": {
                    "element_id": "bTHpR"
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
            "type": "ElementParent",
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
            "is_visible": false
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTkWZ2",
      "default_name": "Group YZ",
      "elements": {
        "bTvJo1": {
          "properties": {
            "height": 240,
            "left": -110,
            "top": -30,
            "width": 240,
            "zindex": 2,
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769411699167x832991432764760700/letter_n_icon.svg"
              },
              "type": "TextExpression"
            },
            "order": 1,
            "fit_height": true,
            "single_width": true,
            "min_width_css": "20px",
            "single_height": true,
            "min_height_css": "20px",
            "horiz_alignment": "flex-start",
            "aspect_ratio_width": 1,
            "aspect_ratio_height": 1,
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
                "src": {
                  "entries": {
                    "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769877981669x961492759903585200/letter_n_icon%201%20%281%29.svg"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "State"
            }
          },
          "type": "Image",
          "id": "bTvJj1",
          "current_parent": "bTkWZ2",
          "default_name": "Image D",
          "style": "Image_standard_image_"
        }
      },
      "style": "Group_transparent_"
    }
  },
  "name": "Group Sidebar Menu (OS)",
  "style": "Group_transparent_",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  },
};
