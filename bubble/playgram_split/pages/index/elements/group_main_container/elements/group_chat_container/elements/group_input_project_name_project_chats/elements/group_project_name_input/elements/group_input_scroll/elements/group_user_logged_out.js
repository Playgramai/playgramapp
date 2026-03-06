export const group_user_logged_out = {
  "properties": {
    "height": 0,
    "left": 35,
    "top": 60,
    "width": 0,
    "zindex": 5,
    "border_color": "rgba(128,189,203,0.06)",
    "border_roundness": 12,
    "is_visible": false,
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "rgba(18,18,19,1)",
    "border_style": "solid",
    "order": 6,
    "row_gap": 10,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 20,
    "fit_height": true,
    "padding_top": 16,
    "padding_left": 16,
    "single_width": false,
    "margin_bottom": 30,
    "max_width_css": "785px",
    "padding_right": 16,
    "single_height": false,
    "padding_bottom": 16,
    "horiz_alignment": "center",
    "container_layout": "row",
    "four_border_style": false,
    "border_roundness_top": 20,
    "collapse_when_hidden": true,
    "border_roundness_right": 20,
    "container_horiz_alignment": "center"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "not_logged_in",
          "is_slidable": false
        },
        "type": "CurrentUser",
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
        "is_slidable": false
      },
      "properties": {
        "margin_left": 8,
        "margin_right": 8
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTgsr2",
  "current_parent": "bTUeF0",
  "default_name": "Group ZZZZ",
  "elements": {
    "bTgvI2": {
      "properties": {
        "text": {
          "entries": {
            "0": "Want to start using Playgram? [color=#ACACAD]Click to Sign up button to get started[/color]"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": 0,
        "width": 100,
        "zindex": 2,
        "font_color": "var(--color_bTkRP4_default)",
        "order": 1,
        "fit_width": true,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "vert_alignment": "center",
        "horiz_alignment": "center",
        "collapse_when_hidden": true
      },
      "states": {
        "bTHqa": {
          "condition": {
            "next": {
              "args": {
                "properties": {
                  "breakpoint_id": "built-in-mobile-landing"
                },
                "type": "Breakpoint",
                "is_slidable": false
              },
              "type": "Message",
              "name": "less_or_equal_than",
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
      "id": "bTgvD2",
      "default_name": "Text LZ",
      "style": "Text_inter___400___16px___white_"
    },
    "bToMV1": {
      "properties": {
        "height": 280,
        "left": 523.59375,
        "top": 34,
        "width": 280,
        "zindex": 5,
        "border_roundness": 12,
        "vertical_centering": true,
        "background_style": "bgcolor",
        "bgcolor": "rgba(36,86,98,1)",
        "order": 2,
        "fit_width": true,
        "fit_height": true,
        "padding_top": 8,
        "padding_left": 24,
        "single_width": false,
        "min_width_css": "127px",
        "padding_right": 24,
        "single_height": false,
        "min_height_css": "36px",
        "padding_bottom": 8,
        "horiz_alignment": "flex-start",
        "container_layout": "row",
        "collapse_when_hidden": true,
        "container_horiz_alignment": "space-between"
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
            "max_width_css": "100px"
          },
          "type": "State"
        }
      },
      "type": "Group",
      "id": "bToMT1",
      "default_name": "Group QZZZZ",
      "elements": {
        "bToMb1": {
          "properties": {
            "text": {
              "entries": {
                "0": "Sign up"
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": 21.8828125,
            "top": 14,
            "width": 100,
            "zindex": 2,
            "font_color": "rgba(196,225,231,1)",
            "font_size": 14,
            "order": 1,
            "fit_width": true,
            "fit_height": true,
            "single_width": false,
            "min_width_css": "50px",
            "single_height": false,
            "min_height_css": "0px",
            "horiz_alignment": "flex-start",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bToMZ1",
          "default_name": "Text QZ",
          "style": "Text_body_16_"
        },
        "bToMh1": {
          "properties": {
            "height": 240,
            "left": 100.1484375,
            "top": 17,
            "width": 240,
            "zindex": 3,
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766564852163x949474834984274000/Icon%20R%20%286%29.svg"
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
          "type": "Image",
          "id": "bToMf1",
          "default_name": "Image T",
          "style": "Image_standard_image_"
        }
      },
      "name": "Group Button Signup",
      "style": "Group_transparent_"
    }
  },
  "name": "Group User Logged out",
  "style": "Group_transparent_"
};
