export const Link_filled_dark_destructive = {
  "display": "Filled Dark Destructive",
  "properties": {
    "border_roundness": 4,
    "font_alignment": "center",
    "font_color": "var(--color_destructive_default)",
    "font_size": 16,
    "line_height": 1.4,
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "var(--color_bTHAU_default)",
    "font_weight": "600",
    "padding_left": 20,
    "padding_right": 20
  },
  "states": {
    "bTHBt": {
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
        "bgcolor": "var(--color_bTHAV_default)"
      },
      "type": "State"
    },
    "bTHBu": {
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
        "opacity": 40
      },
      "type": "State"
    }
  },
  "type": "Link",
  "id": "Link_filled_dark_destructive_",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  }
};
