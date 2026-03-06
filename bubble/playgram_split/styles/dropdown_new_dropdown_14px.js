export const Dropdown_new_dropdown_14px = {
  "display": "New Dropdown 14px",
  "properties": {
    "font_face": "var(--font_default):::400",
    "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "border_roundness": 12,
    "border_width": 1,
    "font_color": "var(--color_bTkRP4_default)",
    "font_size": 14,
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "var(--color_bTHBc_default)",
    "border_style": "none",
    "font_family": "var(--font_default)",
    "font_weight": "400",
    "padding_top": 8,
    "padding_left": 10,
    "padding_right": 10,
    "computed_value": "number",
    "padding_bottom": 8,
    "placeholder_color": "rgba(112,112,114,1)"
  },
  "states": {
    "bTOUP0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_hovered"
        },
        "type": "ThisElement"
      },
      "properties": {
        "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
        "border_style": "solid"
      },
      "type": "State"
    },
    "bTOUT0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_focused"
        },
        "type": "ThisElement"
      },
      "properties": {
        "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
        "border_style": "solid"
      },
      "type": "State"
    },
    "bTvld1": {
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
        "font_color": "var(--color_bTsrq2_default)",
        "bgcolor": "var(--color_bTsrr2_default)"
      },
      "type": "State"
    }
  },
  "type": "Dropdown",
  "id": "Dropdown_new_dropdown_14px_",
  "transitions": {
    "border_color": {
      "fn": "ease",
      "duration": 200
    },
    "font_color": {
      "fn": "ease",
      "duration": 200
    }
  }
};
