export const Button_secondary_new = {
  "display": "Secondary new",
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
    "bgcolor": "rgba(var(--color_bTkRR4_default_rgb), 0.06)",
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
    "bTnVT1": {
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
        "font_color": "rgba(168,210,220,1)",
        "icon_color": "rgba(168,210,220,1)",
        "bgcolor": "rgba(var(--color_bTkRR4_default_rgb), 0.16)"
      },
      "type": "State"
    },
    "bTnVX1": {
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
        "border_color": "rgba(42,42,45,1)",
        "font_color": "rgba(112,112,114,1)",
        "icon_color": "rgba(112,112,114,1)",
        "background_style": "none",
        "border_style": "solid"
      },
      "type": "State"
    },
    "bTwBZ3": {
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
        "font_color": "rgba(128,189,203,1)",
        "icon_color": "rgba(128,189,203,1)",
        "bgcolor": "rgba(128,189,203,0.16)"
      },
      "type": "State"
    },
    "bTwBa3": {
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
        "font_color": "var(--color_bToSr_default)",
        "icon_color": "var(--color_bToSr_default)",
        "bgcolor": "rgba(var(--color_bTkRR4_default_rgb), 0.3)"
      },
      "type": "State",
      "said": "a2Vsdm8tMzE4ODQ="
    },
    "bTwBb3": {
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
        "border_color": "var(--color_bTsrr2_default)",
        "font_color": "rgba(var(--color_bTsrp2_default_rgb), 0.3)",
        "icon_color": "rgba(var(--color_bTsrp2_default_rgb), 0.3)",
        "background_style": "none",
        "border_style": "solid"
      },
      "type": "State",
      "said": "a2Vsdm8tMzE4ODQ="
    }
  },
  "type": "Button",
  "id": "Button_secondary_new_",
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
