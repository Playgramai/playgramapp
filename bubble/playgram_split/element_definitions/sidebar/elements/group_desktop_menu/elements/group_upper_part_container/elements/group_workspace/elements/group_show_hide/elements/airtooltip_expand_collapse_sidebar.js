export const airtooltip_expand_collapse_sidebar = {
  "properties": {
    "height": 2,
    "left": 0,
    "top": 0,
    "width": 2,
    "zindex": 7,
    "AAD": {
      "entries": {
        "0": "collapseExpand"
      },
      "type": "TextExpression"
    },
    "AAE": {
      "entries": {
        "0": "",
        "1": {
          "next": {
            "next": {
              "next": {
                "properties": {
                  "formatting_for_true": {
                    "entries": {
                      "0": "Collapse sidebar"
                    },
                    "type": "TextExpression"
                  },
                  "formatting_for_false": {
                    "entries": {
                      "0": "Expand sidebar"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "format_boolean",
                "is_slidable": true
              },
              "type": "Message",
              "name": "is_true",
              "is_slidable": false
            },
            "type": "Message",
            "name": "custom.open__",
            "is_slidable": false
          },
          "properties": {
            "element_id": "bTHoP"
          },
          "type": "GetElement",
          "is_slidable": false,
          "moved_to_top": true
        },
        "2": ""
      },
      "type": "TextExpression"
    },
    "AAG": "top left",
    "AAH": "bottom right",
    "AAI": "dark",
    "AAK": true,
    "AAN": {
      "entries": {
        "0": "collapseExpand"
      },
      "type": "TextExpression"
    },
    "AAe": false,
    "ABS": true,
    "ABT": {
      "next": {
        "next": {
          "next": {
            "properties": {
              "formatting_for_true": {
                "entries": {
                  "0": "#e5e7eb"
                },
                "type": "TextExpression"
              },
              "formatting_for_false": {
                "entries": {
                  "0": "#252627"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "format_boolean",
            "is_slidable": true
          },
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
    "ABU": "var(--color_primary_contrast_default)",
    "ABV": {
      "next": {
        "next": {
          "next": {
            "properties": {
              "formatting_for_true": {
                "entries": {
                  "0": "#555557"
                },
                "type": "TextExpression"
              },
              "formatting_for_false": {
                "entries": {
                  "0": "#acacad"
                },
                "type": "TextExpression"
              }
            },
            "type": "Message",
            "name": "format_boolean",
            "is_slidable": true
          },
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
    "ABZ": {
      "entries": {
        "0": "14"
      },
      "type": "TextExpression"
    },
    "ABa": {
      "entries": {
        "0": "Inter"
      },
      "type": "TextExpression"
    },
    "ABk": {
      "entries": {
        "0": "4"
      },
      "type": "TextExpression"
    },
    "ABl": {
      "entries": {
        "0": "4"
      },
      "type": "TextExpression"
    },
    "ABm": {
      "entries": {
        "0": "4"
      },
      "type": "TextExpression"
    },
    "ABn": {
      "entries": {
        "0": "4"
      },
      "type": "TextExpression"
    },
    "ABo": {
      "entries": {
        "0": "10"
      },
      "type": "TextExpression"
    },
    "ABp": {
      "entries": {
        "0": "0"
      },
      "type": "TextExpression"
    },
    "order": 2,
    "fit_height": false,
    "single_width": true,
    "min_width_css": "5px",
    "single_height": true,
    "min_height_css": "3px",
    "horiz_alignment": "flex-start",
    "nonant_alignment": "bb",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 768,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTHoP",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    }
  },
  "type": "1498171554228x105618760361836540-AAC",
  "id": "bToND",
  "current_parent": "bTHpr",
  "default_name": "Airtooltip D",
  "name": "Airtooltip Expand/Collapse Sidebar"
};
