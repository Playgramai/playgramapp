export const group_personal_heading_chevron = {
  "properties": {
    "height": 0,
    "left": 6,
    "top": 0,
    "width": 0,
    "zindex": 9,
    "vertical_centering": true,
    "order": 4,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 8,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true
  },
  "type": "Group",
  "id": "bTIpJ0",
  "default_name": "Group HZ",
  "elements": {
    "bTIpP0": {
      "properties": {
        "text": {
          "entries": {
            "0": "Personal Chats"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": -6,
        "top": 0,
        "width": 100,
        "zindex": 6,
        "is_visible": true,
        "order": 3,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
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
              "name": "is_visible",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTIbj"
            },
            "type": "GetElement",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "font_color": "var(--color_bTkRP4_default)"
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTIbX",
      "current_parent": "bTIJb0",
      "default_name": "Text L",
      "style": "Text_inter___400___16px___neutral_copy_"
    },
    "bTIpT0": {
      "properties": {
        "height": 30,
        "left": -6,
        "top": 0,
        "width": 30,
        "zindex": 2,
        "icon": "phosphor bold caret-down",
        "icon_color": "var(--color_bTkRL4_default)",
        "is_visible": true,
        "vertical_centering": true,
        "order": 5,
        "fit_height": false,
        "padding_top": 3,
        "padding_left": 3,
        "single_width": true,
        "min_width_css": "20px",
        "padding_right": 3,
        "single_height": true,
        "min_height_css": "20px",
        "padding_bottom": 3,
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
            "icon_color": "rgba(112,112,114,1)"
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
              "name": "is_visible",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTIbj"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "icon": "phosphor bold caret-up",
            "icon_color": "var(--color_bTkRP4_default)"
          },
          "type": "State"
        },
        "2": {
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
              "name": "is_visible",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTIbj"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "icon": "phosphor bold caret-up",
            "icon_color": "rgba(112,112,114,1)"
          },
          "type": "State"
        }
      },
      "type": "Icon",
      "id": "bTIbW",
      "current_parent": "bTIJb0",
      "default_name": "Icon F"
    },
    "bTkYH2": {
      "properties": {
        "height": 240,
        "left": 0,
        "top": 0,
        "width": 240,
        "zindex": 3,
        "src": {
          "entries": {
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1767002689306x110101864126320500/Frame%2011.svg"
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
        "aspect_ratio_width": 1,
        "aspect_ratio_height": 1,
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
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1768921684655x114473307067112450/Frame%2011.svg"
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
              "name": "is_visible",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTIbj"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1767002698362x138108167717214900/Frame%2010.svg"
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
              "name": "is_visible",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTIbj"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1768921709672x515481248528174600/Frame%2010.svg"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        }
      },
      "type": "Image",
      "id": "bTkYF2",
      "current_parent": "bTIpJ0",
      "default_name": "Image I",
      "name": "Image Icon",
      "style": "Image_standard_image_"
    },
    "bTkia2": {
      "properties": {
        "height": 0,
        "left": 0,
        "top": 0,
        "width": 0,
        "zindex": 8,
        "border_roundness": 4,
        "is_visible": false,
        "vertical_centering": true,
        "background_style": "bgcolor",
        "bgcolor": "rgba(217,217,217,0.2)",
        "order": 4,
        "fit_width": true,
        "unique_id": {
          "entries": {
            "0": "createPersonalChat"
          },
          "type": "TextExpression"
        },
        "fit_height": true,
        "single_width": false,
        "min_width_css": "20px",
        "single_height": false,
        "min_height_css": "20px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "container_layout": "relative",
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
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "bgcolor": "var(--color_bTkRW4_default)"
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
            "bgcolor": "rgba(247,248,249,1)"
          },
          "type": "State"
        },
        "2": {
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
            "bgcolor": "rgba(128,189,203,0.16)"
          },
          "type": "State"
        },
        "3": {
          "condition": {
            "next": {
              "type": "Message",
              "name": "is_hovered",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTIbR"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "is_visible": true
          },
          "type": "State"
        },
        "4": {
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
            "is_visible": true
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTIov0",
      "current_parent": "bTIbR",
      "default_name": "Group GZ",
      "elements": {
        "bTkiZ2": {
          "properties": {
            "height": 240,
            "left": 0,
            "top": 0,
            "width": 240,
            "zindex": 3,
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765210427344x985400163541736800/Pencil%20%281%29.svg"
              },
              "type": "TextExpression"
            },
            "order": 2,
            "fit_height": true,
            "single_width": true,
            "min_width_css": "14px",
            "single_height": false,
            "min_height_css": "240px",
            "horiz_alignment": "flex-start",
            "nonant_alignment": "bb",
            "use_aspect_ratio": true,
            "aspect_ratio_width": 1,
            "aspect_ratio_height": 1,
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
                  "element_id": "bTIov0"
                },
                "type": "GetElement",
                "said": "a2Vsdm8tMzE4ODQ=",
                "is_slidable": false
              },
              "properties": {
                "src": {
                  "entries": {
                    "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765366995531x597242289327369000/Pencil%20%282%29.svg"
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
                "src": {
                  "entries": {
                    "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769002652820x861811970721036800/Folder%20List%202.svg"
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
                "properties": {
                  "element_id": "bTIov0"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "src": {
                  "entries": {
                    "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769003046537x858163128416203300/Folder%20List%203.svg"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "State"
            }
          },
          "type": "Image",
          "id": "bTkiU2",
          "current_parent": "bTIov0",
          "default_name": "Image N",
          "name": "Image add personal chat",
          "style": "Image_standard_image_"
        },
        "bTnot2": {
          "properties": {
            "height": 1,
            "left": 0,
            "top": 0,
            "width": 1,
            "zindex": 4,
            "AAD": {
              "entries": {
                "0": "createPersonalChat"
              },
              "type": "TextExpression"
            },
            "AAE": {
              "entries": {
                "0": "Create personal chat"
              },
              "type": "TextExpression"
            },
            "AAG": "left top",
            "AAH": "right bottom",
            "AAI": "dark",
            "AAK": true,
            "AAN": {
              "entries": {
                "0": "createPersonalChat"
              },
              "type": "TextExpression"
            },
            "AAe": false,
            "ABS": true,
            "ABT": "rgba(37,38,39,1)",
            "ABU": "rgba(37,38,39,1)",
            "ABV": "var(--color_bTkRL4_default)",
            "ABW": "var(--color_bTGzr_default)",
            "ABX": "var(--color_primary_contrast_default)",
            "ABY": true,
            "ABZ": {
              "entries": {
                "0": "14"
              },
              "type": "TextExpression"
            },
            "ABa": {
              "entries": {
                "0": "\"Inter\""
              },
              "type": "TextExpression"
            },
            "ABd": 0,
            "ABk": {
              "entries": {
                "0": "8"
              },
              "type": "TextExpression"
            },
            "ABl": {
              "entries": {
                "0": "8"
              },
              "type": "TextExpression"
            },
            "ABm": {
              "entries": {
                "0": "4"
              },
              "type": "TextExpression"
            },
            "ABn": {
              "entries": {
                "0": "4"
              },
              "type": "TextExpression"
            },
            "ABo": {
              "entries": {
                "0": "10"
              },
              "type": "TextExpression"
            },
            "ABp": {
              "entries": {
                "0": "0"
              },
              "type": "TextExpression"
            },
            "order": 7,
            "fit_height": false,
            "single_width": true,
            "min_width_css": "20px",
            "single_height": true,
            "min_height_css": "20px",
            "horiz_alignment": "flex-start",
            "nonant_alignment": "bc",
            "collapse_when_hidden": true
          },
          "type": "1498171554228x105618760361836540-AAC",
          "id": "bTnor2",
          "current_parent": "bTIov0",
          "default_name": "Airtooltip B",
          "name": "Airtooltip Create Project"
        }
      },
      "name": "Group Create Personal Chat"
    }
  },
  "name": "Group Personal Heading/Chevron",
  "style": "Group_transparent_",
};
