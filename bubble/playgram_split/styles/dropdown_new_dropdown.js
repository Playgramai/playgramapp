export const Dropdown_new_dropdown = {
  "display": "New Dropdown - 16px",
  "properties": {
    "font_face": "var(--font_default):::400",
    "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "border_roundness": 12,
    "border_width": 1,
    "font_color": "var(--color_primary_contrast_default)",
    "font_size": 16,
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "var(--color_bTGzq_default)",
    "font_family": "var(--font_default)",
    "font_weight": "400",
    "padding_top": 0,
    "padding_left": 12,
    "padding_right": 12,
    "computed_value": "number",
    "padding_bottom": 0,
    "placeholder_color": "rgba(var(--color_primary_contrast_default_rgb), 0.5)"
  },
  "states": {
    "bTOQp0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_hovered"
        },
        "type": "ThisElement"
      },
      "properties": {
        "border_color": "var(--color_primary_contrast_default)"
      },
      "type": "State"
    },
    "bTOQq0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_focused"
        },
        "type": "ThisElement"
      },
      "properties": {
        "border_color": "var(--color_primary_contrast_default)"
      },
      "type": "State"
    },
    "bTOQr0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "isnt_valid"
        },
        "type": "ThisElement"
      },
      "properties": {
        "border_color": "var(--color_bTGzw_default)"
      },
      "type": "State"
    }
  },
  "type": "Dropdown",
  "id": "Dropdown_new_dropdown_",
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
