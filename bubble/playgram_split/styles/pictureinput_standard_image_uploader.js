export const PictureInput_standard_image_uploader = {
  "display": "Standard",
  "properties": {
    "bold": false,
    "font_face": "var(--font_default):::400",
    "border_color": "var(--color_bTHBV_default)",
    "border_roundness": 4,
    "border_width": 2,
    "font_color": "var(--color_text_default)",
    "font_size": 16,
    "background_style": "none",
    "font_family": "var(--font_default)",
    "font_weight": "400",
    "padding_top": 12,
    "padding_left": 12,
    "padding_right": 12,
    "padding_bottom": 12
  },
  "states": {
    "0": {
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
    "1": {
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
    "2": {
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
  "type": "PictureInput",
  "id": "PictureInput_standard_image_uploader_",
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
