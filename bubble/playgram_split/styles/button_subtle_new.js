export const Button_subtle_new = {
  "display": "Subtle new",
  "properties": {
    "bold": false,
    "font_face": "var(--font_default):::600",
    "border_roundness": 12,
    "font_color": "var(--color_bTkRL4_default)",
    "font_size": 14,
    "icon_color": "var(--color_bTkRL4_default)",
    "line_height": 1.2,
    "letter_spacing": 0,
    "background_style": "bgcolor",
    "bgcolor": "rgba(27,27,29,1)",
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
          "name": "is_hovered",
          "is_slidable": false
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "properties": {
        "font_color": "rgba(209,209,209,1)",
        "icon_color": "rgba(209,209,209,1)",
        "bgcolor": "rgba(38,38,41,1)"
      },
      "type": "State"
    },
    "bTnVZ1": {
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
        "font_color": "rgba(112,112,114,1)",
        "icon_color": "rgba(112,112,114,1)",
        "bgcolor": "rgba(42,42,45,1)"
      },
      "type": "State"
    },
    "bTwDF3": {
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
        "font_color": "var(--color_bTsrp2_default)",
        "icon_color": "var(--color_bTsrp2_default)",
        "bgcolor": "var(--color_bTspn2_default)"
      },
      "type": "State"
    },
    "bTwDG3": {
      "condition": {
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
          "name": "is_hovered",
          "is_slidable": false
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "properties": {
        "font_color": "var(--color_bTsrq2_default)",
        "icon_color": "var(--color_bTsrq2_default)",
        "bgcolor": "var(--color_bTsrr2_default)"
      },
      "type": "State",
      "said": "a2Vsdm8tMzE4ODQ="
    }
  },
  "type": "Button",
  "id": "Button_subtle_new_",
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
