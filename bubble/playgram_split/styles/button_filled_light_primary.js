export const Button_filled_light_primary = {
  "display": "Filled Light Primary",
  "properties": {
    "bold": false,
    "font_face": "var(--font_default):::600",
    "border_roundness": 4,
    "font_color": "var(--color_primary_contrast_default)",
    "font_size": 16,
    "icon_color": "var(--color_primary_contrast_default)",
    "line_height": 1.4,
    "letter_spacing": 0,
    "background_style": "bgcolor",
    "bgcolor": "var(--color_primary_default)",
    "button_gap": 12,
    "font_family": "var(--font_default)",
    "font_weight": "600",
    "padding_top": 0,
    "padding_left": 20,
    "padding_right": 20,
    "padding_bottom": 0
  },
  "states": {
    "bTHBh": {
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
        "opacity": 25
      },
      "type": "State"
    },
    "bTGmy0": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_false",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "isnt_clickable",
                "is_slidable": false
              },
              "type": "ThisElement",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "is_hovered",
          "is_slidable": false
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "properties": {
        "bgcolor": "var(--color_bTHAC_default)"
      },
      "type": "State"
    }
  },
  "type": "Button",
  "id": "Button_filled_light_primary_",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  }
};
