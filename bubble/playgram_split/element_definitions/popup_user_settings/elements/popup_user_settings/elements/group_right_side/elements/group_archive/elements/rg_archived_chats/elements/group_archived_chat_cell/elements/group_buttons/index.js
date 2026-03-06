export const group_buttons = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 16.796875,
    "width": 0,
    "zindex": 33,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "custom.chat",
    "vertical_centering": true,
    "order": 4,
    "use_gap": false,
    "fit_width": true,
    "column_gap": 8,
    "fit_height": true,
    "single_width": true,
    "min_width_css": "45px",
    "single_height": false,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "space-between"
  },
  "type": "Group",
  "id": "bTLEv",
  "default_name": "Group S",
  "elements": {
    "bTLFB": {
      "properties": {
        "height": 30,
        "left": -181.5546875,
        "top": 0,
        "width": 30,
        "zindex": 32,
        "icon": "feather trash-2",
        "icon_color": "var(--color_bTkRL4_default)",
        "vertical_centering": true,
        "order": 4,
        "unique_id": {
          "entries": {
            "0": "deleteChat"
          },
          "type": "TextExpression"
        },
        "fit_height": false,
        "single_width": true,
        "min_width_css": "16px",
        "single_height": true,
        "min_height_css": "16px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
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
            "icon_color": "var(--color_bTkRP4_default)"
          },
          "type": "State"
        },
        "1": {
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
            "icon_color": "var(--color_bTsrq2_default)"
          },
          "type": "State"
        },
        "2": {
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
            "icon_color": "var(--color_bTsrp2_default)"
          },
          "type": "State"
        }
      },
      "type": "Icon",
      "id": "bTLEN",
      "current_parent": "bTLDQ",
      "default_name": "Icon F"
    },
    "bTLFC": {
      "properties": {
        "height": 30,
        "left": -181.5546875,
        "top": 0,
        "width": 30,
        "zindex": 32,
        "icon": "feather minus-circle",
        "icon_color": "var(--color_bTkRL4_default)",
        "vertical_centering": true,
        "order": 1,
        "unique_id": {
          "entries": {
            "0": "unarchive"
          },
          "type": "TextExpression"
        },
        "fit_height": false,
        "single_width": true,
        "min_width_css": "16px",
        "single_height": true,
        "min_height_css": "16px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
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
            "icon_color": "var(--color_bTkRP4_default)"
          },
          "type": "State"
        },
        "1": {
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
            "icon_color": "var(--color_bTsrq2_default)"
          },
          "type": "State"
        },
        "2": {
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
            "icon_color": "var(--color_bTsrp2_default)"
          },
          "type": "State"
        }
      },
      "type": "Icon",
      "id": "bTLEH",
      "default_name": "Icon E"
    },
    "bTLFP": {
      "properties": {
        "height": 1,
        "left": 0,
        "top": 0,
        "width": 1,
        "zindex": 3,
        "AAD": {
          "entries": {
            "0": "unarchive"
          },
          "type": "TextExpression"
        },
        "AAE": {
          "entries": {
            "0": "Unarchive chat"
          },
          "type": "TextExpression"
        },
        "AAG": "right bottom",
        "AAH": "top left",
        "AAI": "dark",
        "AAK": true,
        "AAN": {
          "entries": {
            "0": "unarchive"
          },
          "type": "TextExpression"
        },
        "AAe": false,
        "ABS": true,
        "ABT": "var(--color_bTGzr_default)",
        "ABU": "var(--color_bTGzr_default)",
        "ABV": "var(--color_primary_contrast_default)",
        "ABW": "var(--color_bTGzr_default)",
        "ABX": "var(--color_primary_contrast_default)",
        "ABY": true,
        "ABZ": {
          "entries": {
            "0": "12"
          },
          "type": "TextExpression"
        },
        "ABa": {
          "entries": {
            "0": "\"Inter\""
          },
          "type": "TextExpression"
        },
        "ABn": {
          "entries": {
            "0": ""
          },
          "type": "TextExpression"
        },
        "ABo": {
          "entries": {
            "0": "8"
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
        "min_width_css": "20px",
        "single_height": true,
        "min_height_css": "20px",
        "horiz_alignment": "flex-start",
        "nonant_alignment": "bc",
        "collapse_when_hidden": true
      },
      "type": "1498171554228x105618760361836540-AAC",
      "id": "bTLFN",
      "current_parent": "bTLEv",
      "default_name": "Airtooltip A",
      "name": "Airtooltip Unarchive"
    },
    "bTLFV": {
      "properties": {
        "height": 1,
        "left": 10,
        "top": 10,
        "width": 1,
        "zindex": 3,
        "AAD": {
          "entries": {
            "0": "deleteChat"
          },
          "type": "TextExpression"
        },
        "AAE": {
          "entries": {
            "0": "Delete chat"
          },
          "type": "TextExpression"
        },
        "AAG": "right bottom",
        "AAH": "top left",
        "AAI": "dark",
        "AAK": true,
        "AAN": {
          "entries": {
            "0": "deleteChat"
          },
          "type": "TextExpression"
        },
        "AAe": false,
        "ABS": true,
        "ABT": "var(--color_bTGzr_default)",
        "ABU": "var(--color_bTGzr_default)",
        "ABV": "var(--color_primary_contrast_default)",
        "ABW": "var(--color_bTGzr_default)",
        "ABX": "var(--color_primary_contrast_default)",
        "ABY": true,
        "ABZ": {
          "entries": {
            "0": "12"
          },
          "type": "TextExpression"
        },
        "ABa": {
          "entries": {
            "0": "\"Inter\""
          },
          "type": "TextExpression"
        },
        "ABn": {
          "entries": {
            "0": ""
          },
          "type": "TextExpression"
        },
        "ABo": {
          "entries": {
            "0": "8"
          },
          "type": "TextExpression"
        },
        "ABp": {
          "entries": {
            "0": "0"
          },
          "type": "TextExpression"
        },
        "order": 3,
        "fit_height": false,
        "single_width": true,
        "min_width_css": "20px",
        "single_height": true,
        "min_height_css": "20px",
        "horiz_alignment": "flex-start",
        "nonant_alignment": "bc",
        "collapse_when_hidden": true
      },
      "type": "1498171554228x105618760361836540-AAC",
      "id": "bTLFT",
      "current_parent": "bTLEv",
      "default_name": "Airtooltip B",
      "name": "Airtooltip Delete Chat"
    }
  },
  "name": "Group Buttons",
  "style": "Group_transparent_",
};
