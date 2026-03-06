export const gf_mode = {
  "properties": {
    "height": 280,
    "left": -80,
    "top": -80,
    "width": 280,
    "zindex": 46,
    "boxshadow_style": "none",
    "vertical_centering": true,
    "background_style": "none",
    "reference": "bTsrM2",
    "fit_height": true,
    "offset_left": -10,
    "padding_left": 10,
    "single_width": false,
    "max_width_css": "134px",
    "min_width_css": "134px",
    "padding_right": 10,
    "single_height": false,
    "max_height_css": "50px",
    "min_height_css": "50px",
    "padding_bottom": 10,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "type": "GroupFocus",
  "id": "bTwKB2",
  "default_name": "GroupFocus A",
  "elements": {
    "bTwKZ2": {
      "properties": {
        "height": 0,
        "left": 0,
        "top": 0,
        "width": 0,
        "zindex": 26,
        "border_roundness": 12,
        "vertical_centering": true,
        "background_style": "bgcolor",
        "bgcolor": "var(--color_bTpVj3_default)",
        "order": 1,
        "use_gap": true,
        "fit_width": false,
        "column_gap": 16,
        "fit_height": true,
        "padding_left": 10,
        "single_width": false,
        "min_width_css": "40px",
        "padding_right": 10,
        "single_height": false,
        "min_height_css": "40px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "four_border_style": true,
        "collapse_when_hidden": true,
        "border_roundness_left": 12,
        "border_roundness_bottom": 12
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
            "bgcolor": {
              "next": {
                "next": {
                  "next": {
                    "properties": {
                      "formatting_for_true": {
                        "entries": {
                          "0": "#e5e7eb"
                        },
                        "type": "TextExpression"
                      },
                      "formatting_for_false": {
                        "entries": {
                          "0": "#555557"
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
      "type": "Group",
      "id": "bTwKJ2",
      "current_parent": "bTwKB2",
      "default_name": "Group LZ",
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
          "id": "bTwKT2",
          "default_name": "Group LZ",
          "elements": {
            "bTsrH2": {
              "properties": {
                "height": 240,
                "left": -80.53125,
                "top": 0,
                "width": 240,
                "zindex": 24,
                "src": {
                  "entries": {
                    "0": ""
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
                        "name": "is_false",
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
                        "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770223852157x974435985875143300/Sun%202.svg"
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
                        "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770223866268x312324403466596860/Moon%202.svg"
                      },
                      "type": "TextExpression"
                    }
                  },
                  "type": "State"
                }
              },
              "type": "Image",
              "id": "bTwKU2",
              "default_name": "Image G",
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
                        "name": "is_false",
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
              "id": "bTwKV2",
              "current_parent": "bTsqP2",
              "default_name": "Text X",
              "style": "Text_inter___400___16px___neutral_copy_"
            }
          },
          "name": "Group mode",
          "style": "Group_transparent_"
        }
      },
      "name": "Group choose mode GF",
      "style": "Group_transparent_"
    }
  },
  "name": "GF mode",
  "style": "GroupFocus_shadow_"
};
