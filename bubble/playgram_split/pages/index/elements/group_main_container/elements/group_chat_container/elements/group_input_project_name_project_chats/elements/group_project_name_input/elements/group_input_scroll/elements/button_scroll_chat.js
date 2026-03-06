export const button_scroll_chat = {
  "properties": {
    "bold": false,
    "font_face": "var(--font_default):::600",
    "height": 15,
    "left": 0,
    "top": -525.609375,
    "width": 37,
    "zindex": 4,
    "icon": "feather arrow-down",
    "border_color": "rgba(var(--color_surface_default_rgb), 0.15)",
    "border_roundness": 20,
    "boxshadow_style": "none",
    "font_color": "var(--color_surface_default)",
    "font_size": 16,
    "icon_color": {
      "next": {
        "next": {
          "next": {
            "properties": {
              "formatting_for_true": {
                "entries": {
                  "0": "#555557"
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
      "is_slidable": false
    },
    "is_visible": true,
    "line_height": 1.5,
    "vertical_centering": true,
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
                  "0": "#121213"
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
    "border_style": "solid",
    "order": 2,
    "opacity": 0,
    "fit_width": true,
    "icon_size": 18,
    "unique_id": {
      "entries": {
        "0": "scrollButton"
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "margin_top": -55,
    "button_type": "icon",
    "font_weight": "600",
    "padding_left": 0,
    "single_width": true,
    "margin_bottom": 20,
    "min_width_css": "35px",
    "padding_right": 0,
    "single_height": true,
    "min_height_css": "35px",
    "padding_bottom": 0,
    "button_disabled": false,
    "horiz_alignment": "center",
    "nonant_alignment": "cc",
    "collapse_when_hidden": false
  },
  "type": "Button",
  "id": "bTUeJ0",
  "current_parent": "bTHTt0",
  "default_name": "Button A",
  "name": "Button scroll chat",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    },
    "opacity": {
      "fn": "ease",
      "duration": 100
    }
  }
};
