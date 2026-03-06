export const icon_j = {
  "properties": {
    "height": 30,
    "left": -16,
    "top": -16,
    "width": 30,
    "zindex": 4,
    "icon": "feather x",
    "icon_color": "var(--color_bTkRL4_default)",
    "vertical_centering": true,
    "order": 4,
    "fit_height": false,
    "margin_right": 10,
    "single_width": true,
    "min_width_css": "24px",
    "single_height": true,
    "min_height_css": "24px",
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "nonant_alignment": "cb",
    "collapse_when_hidden": true
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
        "icon_color": {
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
                      "0": "#f7f8f9"
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
  "type": "Icon",
  "id": "bTulF1",
  "default_name": "Icon J",
  "style": "Icon_standard_icon_"
};
