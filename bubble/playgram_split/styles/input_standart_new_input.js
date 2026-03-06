export const Input_standart_new_input = {
  "display": "Standart New Input",
  "properties": {
    "font_face": "var(--font_default):::400",
    "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
    "border_roundness": 12,
    "border_width": 1,
    "font_color": "var(--color_bTkRP4_default)",
    "font_size": 14,
    "letter_spacing": 0,
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "rgba(42,42,45,1)",
    "font_family": "var(--font_default)",
    "font_weight": "400",
    "padding_top": 8,
    "padding_left": 14,
    "padding_right": 14,
    "padding_bottom": 8,
    "placeholder_color": "rgba(112,112,114,1)"
  },
  "states": {
    "bTtFp1": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "isnt_valid",
          "is_slidable": false
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "properties": {
        "border_color": "var(--color_bTGzw_default)"
      },
      "type": "State"
    },
    "bTtnl0": {
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
        "border_color": "rgba(174,174,200,0.1)",
        "font_color": "var(--color_bTsrq2_default)",
        "bgcolor": "rgba(234,236,240,1)",
        "placeholder_color": "var(--color_bTsrp2_default)"
      },
      "type": "State"
    }
  },
  "type": "Input",
  "id": "Input_standart_new_input_",
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
