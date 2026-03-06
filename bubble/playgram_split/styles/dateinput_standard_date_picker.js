export const DateInput_standard_date_picker = {
  "display": "Standard",
  "properties": {
    "font_face": "var(--font_default):::400",
    "border_color": "var(--color_bTHBV_default)",
    "border_roundness": 4,
    "border_width": 2,
    "font_color": "var(--color_text_default)",
    "font_size": 14,
    "background_style": "none",
    "font_family": "var(--font_default)",
    "font_weight": "400",
    "padding_left": 12,
    "padding_right": 12,
    "placeholder_color": "var(--color_bTHBW_default)"
  },
  "states": {
    "bTGmj0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_hovered"
        },
        "type": "ThisElement"
      },
      "properties": {
        "border_color": "var(--color_bTHBW_default)"
      },
      "type": "State"
    },
    "bTGmk0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_focused"
        },
        "type": "ThisElement"
      },
      "properties": {
        "border_color": "var(--color_bTGzw_default)"
      },
      "type": "State"
    },
    "bTGml0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "isnt_valid"
        },
        "type": "ThisElement"
      },
      "properties": {
        "border_color": "var(--color_destructive_default)"
      },
      "type": "State"
    }
  },
  "type": "DateInput",
  "id": "DateInput_standard_date_picker_",
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
