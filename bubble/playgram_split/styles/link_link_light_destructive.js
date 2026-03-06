export const Link_link_light_destructive = {
  "display": "Link Light Destructive",
  "properties": {
    "border_roundness": 0,
    "font_alignment": "center",
    "font_color": "var(--color_destructive_default)",
    "font_size": 16,
    "line_height": 1.4,
    "vertical_centering": true,
    "background_style": "none",
    "bgcolor": "var(--color_primary_default)",
    "font_weight": "600",
    "padding_left": 0,
    "padding_right": 0
  },
  "states": {
    "bTHCG": {
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
        "underline": true
      },
      "type": "State"
    },
    "bTHCH": {
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
  "id": "Link_link_light_destructive_"
};
