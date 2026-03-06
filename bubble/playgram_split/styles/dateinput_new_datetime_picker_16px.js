export const DateInput_new_datetime_picker_16px = {
  "display": "New DateTime Picker - 16px",
  "properties": {
    "font_face": "Lato:::",
    "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "border_roundness": 12,
    "border_width": 1,
    "font_color": "var(--color_primary_contrast_default)",
    "font_size": 16,
    "vertical_centering": true,
    "background_style": "none",
    "font_family": "var(--font_default)",
    "font_weight": "400",
    "padding_left": 12,
    "padding_right": 12,
    "placeholder_color": "rgba(var(--color_primary_contrast_default_rgb), 0.5)"
  },
  "states": {
    "bTdqP1": {
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
    "bTdqQ1": {
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
    "bTdqR1": {
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
  "id": "DateInput_new_datetime_picker___16px_",
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
