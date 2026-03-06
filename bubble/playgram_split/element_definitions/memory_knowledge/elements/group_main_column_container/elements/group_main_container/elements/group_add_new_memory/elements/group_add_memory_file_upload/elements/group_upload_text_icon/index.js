export const group_upload_text_icon = {
  "properties": {
    "height": 33.1953,
    "left": -45.41399999999999,
    "top": 7.3984375,
    "width": 245.414,
    "zindex": 2,
    "vertical_centering": true,
    "use_gap": true,
    "fit_width": false,
    "fit_height": true,
    "padding_top": 12,
    "padding_left": 12,
    "single_width": false,
    "padding_right": 12,
    "single_height": false,
    "padding_bottom": 12,
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "nonant_alignment": "ab",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 460,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTdDD1",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "row_gap": 12,
        "margin_top": 4,
        "container_horiz_alignment": "center"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTchy",
  "default_name": "Group X",
  "elements": {
    "bTORr0": {
      "properties": {
        "height": 16.7969,
        "left": 0,
        "top": 0,
        "width": 286.312,
        "zindex": 4,
        "vertical_centering": true,
        "order": 2,
        "row_gap": 4,
        "use_gap": true,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "single_height": false,
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "container_layout": "column",
        "nonant_alignment": "ab",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "args": 460,
              "type": "Message",
              "name": "less_or_equal_than",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTdDD1",
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
      "id": "bTchz",
      "default_name": "Group X",
      "elements": {
        "bTORa0": {
          "properties": {
            "text": {
              "entries": {
                "0": "Drag and drop file here"
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
            "horiz_alignment": "flex-start",
            "nonant_alignment": "ab",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "args": 460,
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
                    "0": "Drag and drop file here or [b][u]browse[/u][/b]"
                  },
                  "type": "TextExpression"
                },
                "horiz_alignment": "center"
              },
              "type": "State"
            }
          },
          "type": "Text",
          "id": "bTciD",
          "default_name": "Text G",
          "style": "Text_inter___400___14px___white_"
        },
        "bTORb0": {
          "properties": {
            "text": {
              "entries": {
                "0": "Supports documents and text files"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": 0,
            "width": 100,
            "zindex": 3,
            "order": 2,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "horiz_alignment": "flex-start",
            "nonant_alignment": "ab",
            "collapse_when_hidden": true
          },
          "states": {
            "0": {
              "condition": {
                "next": {
                  "args": 460,
                  "type": "Message",
                  "name": "less_or_equal_than",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTdDD1",
                  "name": "Current Page Width"
                },
                "type": "PageData",
                "is_slidable": false
              },
              "properties": {
                "horiz_alignment": "center"
              },
              "type": "State"
            }
          },
          "type": "Text",
          "id": "bTciE",
          "current_parent": "bTORB0",
          "default_name": "Text G",
          "style": "Text_inter___400___16px___neutral_copy_copy_copy_"
        }
      },
      "name": "Group Text",
      "style": "Group_transparent_"
    },
    "bTORs0": {
      "properties": {
        "height": 30,
        "left": 0,
        "top": 0,
        "width": 30,
        "zindex": 5,
        "icon": "feather upload",
        "icon_color": "var(--color_bTkRL4_default)",
        "vertical_centering": true,
        "order": 1,
        "fit_height": false,
        "margin_right": 10,
        "single_width": true,
        "min_width_css": "18px",
        "single_height": true,
        "min_height_css": "18px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "nonant_alignment": "ab",
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
              "name": "custom.file_is_loading_",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTMGw"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "icon": "phosphor regular circle-notch",
            "spin_icon": true
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
      "id": "bTciF",
      "default_name": "Icon F"
    },
    "bTORy0": {
      "properties": {
        "text": {
          "entries": {
            "0": "Browse"
          },
          "type": "TextExpression"
        },
        "height": 44,
        "left": 50,
        "top": 17.6171875,
        "width": 150,
        "zindex": 6,
        "icon": "feather file-text",
        "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.3)",
        "border_roundness": 6,
        "font_size": 14,
        "is_visible": false,
        "vertical_centering": true,
        "background_style": "none",
        "bgcolor": "var(--color_text_default)",
        "border_style": "solid",
        "order": 5,
        "fit_width": true,
        "icon_size": 18,
        "button_gap": 8,
        "fit_height": true,
        "button_type": "label_icon",
        "padding_left": 15,
        "single_width": false,
        "min_width_css": "60px",
        "padding_right": 15,
        "single_height": false,
        "min_height_css": "36px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
          "condition": {
            "next": {
              "args": 460,
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
            "is_visible": false
          },
          "type": "State"
        }
      },
      "type": "Button",
      "id": "bTciJ",
      "default_name": "Button C",
      "style": "Button_filled_light_primary_"
    },
    "bTnUF1": {
      "properties": {
        "height": 280,
        "left": -80,
        "top": -80,
        "width": 280,
        "zindex": 7,
        "border_roundness": 12,
        "vertical_centering": true,
        "background_style": "bgcolor",
        "bgcolor": "rgba(27,27,29,1)",
        "order": 4,
        "use_gap": true,
        "fit_width": false,
        "column_gap": 8,
        "fit_height": true,
        "padding_top": 8,
        "padding_left": 10,
        "single_width": false,
        "max_width_css": "98px",
        "min_width_css": "40px",
        "padding_right": 10,
        "single_height": false,
        "min_height_css": "36px",
        "padding_bottom": 8,
        "horiz_alignment": "flex-start",
        "container_layout": "row",
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
            "bgcolor": "var(--color_bTspn2_default)"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bTnUD1",
      "default_name": "Group AZ",
      "elements": {
        "bTnUL1": {
          "properties": {
            "height": 240,
            "left": -120,
            "top": -40,
            "width": 240,
            "zindex": 2,
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766058321534x287375292983111940/Icon%20R%20%282%29.svg"
              },
              "type": "TextExpression"
            },
            "order": 1,
            "fit_height": true,
            "single_width": true,
            "min_width_css": "20px",
            "single_height": false,
            "min_height_css": "240px",
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
                "is_slidable": false
              },
              "properties": {
                "src": {
                  "entries": {
                    "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769865304056x337791451289519700/Icon%20R%20%2811%29.svg"
                  },
                  "type": "TextExpression"
                }
              },
              "type": "State"
            }
          },
          "type": "Image",
          "id": "bTnUJ1",
          "default_name": "Image B",
          "style": "Image_standard_image_"
        },
        "bTnUR1": {
          "properties": {
            "text": {
              "entries": {
                "0": "Browse"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 0,
            "top": 0,
            "width": 100,
            "zindex": 2,
            "order": 2,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "nonant_alignment": "ab",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTnUP1",
          "current_parent": "bTnUD1",
          "default_name": "Text K",
          "style": "Text_inter___400___16px___neutral_copy_copy_"
        }
      },
      "name": "Group Browse",
      "style": "Group_transparent_"
    }
  },
  "name": "Group Upload Text/Icon",
  "style": "Group_transparent_",
};
