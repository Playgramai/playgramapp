export const group_change_password_button = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 31,
    "vertical_centering": true,
    "order": 7,
    "use_gap": true,
    "fit_width": true,
    "column_gap": 4,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true
  },
  "type": "Group",
  "id": "bTKjj0",
  "default_name": "Group K",
  "elements": {
    "bTnpu": {
      "properties": {
        "height": 240,
        "left": 0,
        "top": 0,
        "width": 240,
        "zindex": 31,
        "src": {
          "entries": {
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766492092371x868173398159043600/Icon%20R%20%283%29.svg"
          },
          "type": "TextExpression"
        },
        "order": 2,
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
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769267377264x303512211347723800/Icon%20R%20%2810%29.svg"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        }
      },
      "type": "Image",
      "id": "bTnpp",
      "default_name": "Image C",
      "style": "Image_standard_image_"
    },
    "bTKjq0": {
      "properties": {
        "text": {
          "entries": {
            "0": "Change password"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": -84.796875,
        "width": 100,
        "zindex": 29,
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
              "element_id": "bTKjj0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "underline": true,
            "font_color": "var(--color_bTkRP4_default)"
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
              "element_id": "bTKjj0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "underline": true,
            "font_color": "var(--color_bTsrq2_default)"
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTKjG0",
      "default_name": "Text I",
      "style": "Text_inter___400___16px___neutral_copy_copy_"
    }
  },
  "name": "Group Change Password Button",
  "style": "Group_transparent_"
};
