export const gf_alert = {
  "properties": {
    "height": 280,
    "left": 0,
    "top": 0,
    "width": 280,
    "zindex": 8,
    "border_roundness": 0,
    "boxshadow_style": "none",
    "vertical_centering": true,
    "background_style": "none",
    "bgcolor": "rgba(var(--color_surface_default_rgb), 0)",
    "order": 23,
    "reference": "bTiHD1",
    "fit_height": true,
    "offset_top": 8,
    "offset_left": -125,
    "padding_left": 10,
    "single_width": false,
    "max_width_css": "240px",
    "min_width_css": "240px",
    "padding_right": 10,
    "single_height": false,
    "min_height_css": "36px",
    "padding_bottom": 10,
    "horiz_alignment": "flex-start",
    "container_layout": "relative",
    "collapse_when_hidden": true
  },
  "type": "GroupFocus",
  "id": "bTiRL1",
  "default_name": "GroupFocus A",
  "elements": {
    "bTkGZ": {
      "properties": {
        "height": 150,
        "left": 0,
        "top": 0,
        "width": 280,
        "zindex": 16,
        "html": {
          "entries": {
            "0": "<style>\n#gfShare {\n  transform: translateX(100px) translateY(36px) !important;\n}\n</style>\n"
          },
          "type": "TextExpression"
        },
        "vertical_centering": true,
        "order": 2,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "0px",
        "single_height": true,
        "min_height_css": "0px",
        "horiz_alignment": "flex-start",
        "nonant_alignment": "ab",
        "collapse_when_hidden": true
      },
      "type": "HTML",
      "id": "bTkGX",
      "current_parent": "bTiRL1",
      "default_name": "HTML S",
      "name": "HTML Move Share Alert",
      "style": "HTML_default_"
    },
    "bTmQv3": {
      "properties": {
        "height": 14.398400000000002,
        "left": 23.586000000000013,
        "top": 66,
        "width": 296.414,
        "zindex": 2,
        "border_color": "rgba(var(--color_bTkRR4_default_rgb), 0.16)",
        "boxshadow_horizontal": 0,
        "border_roundness": 10,
        "boxshadow_style": "none",
        "boxshadow_vertical": 1,
        "vertical_centering": true,
        "background_style": "bgcolor",
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
                      "0": "#252627"
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
        },
        "border_style": "none",
        "boxshadow_blur": 10,
        "boxshadow_color": "rgba(var(--color_bTkRR4_default_rgb), 0.12)",
        "order": 4,
        "fit_width": false,
        "fit_height": true,
        "padding_top": 6,
        "padding_left": 10,
        "single_width": false,
        "min_width_css": "40px",
        "padding_right": 10,
        "single_height": false,
        "min_height_css": "32px",
        "padding_bottom": 6,
        "horiz_alignment": "flex-start",
        "container_layout": "relative",
        "nonant_alignment": "bb",
        "collapse_when_hidden": true
      },
      "type": "Group",
      "id": "bTmQp3",
      "current_parent": "bTiRL1",
      "default_name": "Group JZZZZ",
      "elements": {
        "bTlkl2": {
          "properties": {
            "text": {
              "entries": {
                "0": "Link copied. Public access on."
              },
              "type": "TextExpression"
            },
            "height": 36,
            "left": -10,
            "top": -26,
            "width": 100,
            "zindex": 1,
            "is_visible": true,
            "order": 4,
            "fit_width": true,
            "fit_height": true,
            "margin_top": 0,
            "single_width": false,
            "max_width_css": "400px",
            "min_width_css": "0px",
            "single_height": false,
            "min_height_css": "0px",
            "vert_alignment": "center",
            "horiz_alignment": "flex-start",
            "nonant_alignment": "bb",
            "collapse_when_hidden": true
          },
          "type": "Text",
          "id": "bTmQr3",
          "current_parent": "bTliW2",
          "default_name": "Text IZ",
          "style": "Text_inter___400___16px___neutral_copy_copy_copy_copy_"
        }
      },
      "style": "Group_transparent_"
    }
  },
  "name": "GF Alert",
  "style": "GroupFocus_shadow_"
};
