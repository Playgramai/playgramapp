export const Button_primary_new = {
  "display": "Primary new",
  "properties": {
    "bold": false,
    "font_face": "var(--font_default):::600",
    "border_roundness": 12,
    "font_color": "rgba(196,225,231,1)",
    "font_size": 14,
    "icon_color": "rgba(196,225,231,1)",
    "line_height": 1.2,
    "letter_spacing": 0,
    "background_style": "bgcolor",
    "bgcolor": "rgba(36,86,98,1)",
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
    "bTnVR1": {
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
        "font_color": "var(--color_bTkRR4_default)",
        "icon_color": "var(--color_bTkRR4_default)"
      },
      "type": "State"
    },
    "bTnVS1": {
      "condition": {
        "next": {
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
                  "name": "dark_mode_boolean",
                  "is_slidable": false
                },
                "type": "CurrentUser",
                "is_slidable": false
              },
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "is_true",
            "is_slidable": false
          },
          "type": "Message",
          "name": "isnt_clickable",
          "is_slidable": false
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "properties": {
        "bgcolor": "rgba(var(--color_bTkRR4_default_rgb), 0.16)"
      },
      "type": "State"
    },
    "bTwDp3": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "args": {
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
              "type": "Message",
              "name": "and_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "is_true",
            "is_slidable": false
          },
          "type": "Message",
          "name": "isnt_clickable",
          "is_slidable": false
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "properties": {
        "opacity": 50
      },
      "type": "State",
      "said": "a2Vsdm8tMzE4ODQ="
    }
  },
  "type": "Button",
  "id": "Button_primary_new_",
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
