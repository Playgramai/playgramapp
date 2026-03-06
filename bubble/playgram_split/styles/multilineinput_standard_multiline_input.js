export const MultiLineInput_standard_multiline_input = {
  "display": "Standard New",
  "properties": {
    "font_face": "var(--font_default):::regular",
    "border_color": "rgba(42,42,45,1)",
    "border_roundness": 12,
    "border_width": 2,
    "font_color": "var(--color_bTkRP4_default)",
    "font_size": 14,
    "line_height": 1.4,
    "background_style": "bgcolor",
    "bgcolor": "rgba(42,42,45,1)",
    "border_style": "none",
    "font_family": "var(--font_default)",
    "font_weight": "400",
    "padding_top": 14,
    "padding_left": 14,
    "padding_right": 14,
    "padding_bottom": 14,
    "placeholder_color": "var(--color_bTkRL4_default)"
  },
  "states": {
    "bTuNF2": {
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
        "border_style": "solid",
        "placeholder_color": "var(--color_bTsrp2_default)"
      },
      "type": "State",
      "said": "a2Vsdm8tMzE4ODQ="
    }
  },
  "type": "MultiLineInput",
  "id": "MultiLineInput_standard_multiline_input_",
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
