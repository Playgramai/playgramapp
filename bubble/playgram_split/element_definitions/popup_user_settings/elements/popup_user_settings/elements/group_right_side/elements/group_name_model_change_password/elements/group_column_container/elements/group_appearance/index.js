export const group_appearance = {
  "properties": {
    "height": 280,
    "left": -80,
    "top": -80,
    "width": 280,
    "zindex": 30,
    "is_visible": true,
    "vertical_centering": true,
    "order": 5,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": false,
    "min_height_css": "40px",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "space-between"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_false",
          "is_slidable": false
        },
        "properties": {
          "name": "AppIsTest"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTsqP2",
  "default_name": "Group GZ",
  "elements": {
    "bTsqX2": {
      "properties": {
        "text": {
          "entries": {
            "0": "Appearance"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": 0,
        "width": 100,
        "zindex": 23,
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
      "id": "bTsqV2",
      "current_parent": "bTsqP2",
      "default_name": "Text R",
      "style": "Text_inter___400___14px___white_"
    },
    "bTsrR2": {
      "properties": {
        "height": 0,
        "left": 80.53125,
        "top": 11.6015625,
        "width": 0,
        "zindex": 26,
        "border_roundness": 12,
        "vertical_centering": true,
        "order": 5,
        "use_gap": true,
        "fit_width": true,
        "column_gap": 16,
        "fit_height": true,
        "padding_left": 10,
        "single_width": false,
        "min_width_css": "114px",
        "padding_right": 10,
        "single_height": false,
        "min_height_css": "40px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "four_border_style": true,
        "border_roundness_top": 12,
        "collapse_when_hidden": true,
        "border_roundness_left": 12,
        "border_roundness_right": 12,
        "border_roundness_bottom": 12,
        "container_horiz_alignment": "space-between"
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
            "background_style": "bgcolor",
            "bgcolor": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "#f2f3f5"
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "#323436"
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
              "type": "Message",
              "name": "is_visible",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTwKB2"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "background_style": "bgcolor",
            "bgcolor": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "#f2f3f5"
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "#323436"
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
            "border_roundness_left": 0,
            "border_roundness_bottom": 0
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTsrM2",
      "default_name": "Group JZ",
      "elements": {
        "bTsrT2": {
          "properties": {
            "height": 0,
            "left": -80.53125,
            "top": 0,
            "width": 0,
            "zindex": 25,
            "vertical_centering": true,
            "order": 1,
            "use_gap": true,
            "fit_width": true,
            "column_gap": 8,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "40px",
            "single_height": false,
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "container_layout": "row",
            "collapse_when_hidden": true
          },
          "type": "Group",
          "id": "bTsrB2",
          "default_name": "Group IZ",
          "elements": {
            "bTsrH2": {
              "properties": {
                "height": 240,
                "left": 0,
                "top": 0,
                "width": 240,
                "zindex": 24,
                "src": {
                  "entries": {
                    "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1768821485439x599004980616576000/Moon.svg"
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
                    "said": "a2Vsdm8tMzE4ODQ=",
                    "is_slidable": false
                  },
                  "properties": {
                    "src": {
                      "entries": {
                        "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1768821495823x442083820721337340/Sun.svg"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "State"
                }
              },
              "type": "Image",
              "id": "bTsqp2",
              "default_name": "Image F",
              "style": "Image_standard_image_"
            },
            "bTsrL2": {
              "properties": {
                "text": {
                  "entries": {
                    "0": "Dark"
                  },
                  "type": "TextExpression"
                },
                "height": 36,
                "left": -80.53125,
                "top": 0,
                "width": 100,
                "zindex": 23,
                "order": 2,
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
                    "text": {
                      "entries": {
                        "0": "Light"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "State"
                }
              },
              "type": "Text",
              "id": "bTsqj2",
              "current_parent": "bTsqP2",
              "default_name": "Text V",
              "style": "Text_inter___400___16px___neutral_copy_"
            }
          },
          "name": "Group mode",
          "style": "Group_transparent_"
        },
        "bTwLL2": {
          "properties": {
            "height": 30,
            "left": 71.640625,
            "top": 21.40625,
            "width": 30,
            "zindex": 26,
            "icon": "feather chevron-down",
            "icon_color": "var(--color_bTkRL4_default)",
            "vertical_centering": true,
            "order": 2,
            "fit_height": false,
            "single_width": true,
            "min_width_css": "16px",
            "single_height": true,
            "min_height_css": "16px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "type": "Message",
                  "name": "is_visible",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTwKB2"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "properties": {
                "icon": "feather chevron-up"
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
                "icon_color": "var(--color_bTsrp2_default)"
              },
              "type": "State"
            }
          },
          "type": "Icon",
          "id": "bTwLJ2",
          "default_name": "Icon I"
        }
      },
      "name": "Group choose mode",
      "style": "Group_transparent_"
    }
  },
  "name": "Group Appearance",
  "style": "Group_transparent_",
};
