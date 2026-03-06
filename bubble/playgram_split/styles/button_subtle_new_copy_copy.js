export const Button_subtle_new_copy_copy = {
  "display": "Destructive new",
  "properties": {
    "bold": false,
    "font_face": "var(--font_default):::600",
    "border_roundness": 12,
    "font_color": "var(--color_bTGzw_default)",
    "font_size": 14,
    "icon_color": "var(--color_bTGzw_default)",
    "line_height": 1.2,
    "letter_spacing": 0,
    "background_style": "bgcolor",
    "bgcolor": "rgba(180,35,24,0.12)",
    "icon_size": 20,
    "button_gap": 12,
    "font_family": "var(--font_default)",
    "font_weight": "500",
    "padding_top": 8,
    "padding_left": 10,
    "padding_right": 10,
    "padding_bottom": 8
  },
  "states": {
    "bTnVY1": {
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
        "font_color": "rgba(253,162,155,1)",
        "icon_color": "rgba(253,162,155,1)",
        "bgcolor": "rgba(180,35,24,0.24)"
      },
      "type": "State"
    },
    "bTnVZ1": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "isnt_clickable",
          "is_slidable": false
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "properties": {
        "font_color": "rgba(112,112,114,1)",
        "icon_color": "rgba(112,112,114,1)",
        "bgcolor": "rgba(42,42,45,1)"
      },
      "type": "State"
    }
  },
  "type": "Button",
  "id": "Button_subtle_new_copy_copy_",
  "transitions": {
    "font_color": {
      "fn": "ease",
      "duration": 200
    },
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  }
};
