export const Link_outline_dark_primary = {
  "display": "Outline Dark Primary",
  "properties": {
    "border_color": "var(--color_primary_contrast_default)",
    "border_roundness": 4,
    "border_width": 2,
    "font_alignment": "center",
    "font_color": "var(--color_primary_contrast_default)",
    "font_size": 16,
    "line_height": 1.4,
    "vertical_centering": true,
    "background_style": "none",
    "bgcolor": "var(--color_primary_default)",
    "border_style": "solid",
    "font_weight": "600",
    "padding_left": 20,
    "padding_right": 20
  },
  "states": {
    "bTHCS": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "is_clickable",
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
        "background_style": "bgcolor",
        "bgcolor": "var(--color_primary_contrast_default)"
      },
      "type": "State"
    },
    "bTHCT": {
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
    }
  },
  "type": "Link",
  "id": "Link_outline_dark_primary_",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  }
};
