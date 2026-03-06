export const group_create_project_chat = {
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 8,
    "border_roundness": 4,
    "is_visible": false,
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "rgba(217,217,217,0.2)",
    "order": 7,
    "fit_width": true,
    "unique_id": {
      "entries": {
        "0": "createTeamChat"
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "single_width": false,
    "min_width_css": "20px",
    "single_height": false,
    "min_height_css": "20px",
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "relative",
    "collapse_when_hidden": false
  },
  "states": {
    "0": {
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
        "bgcolor": "rgba(247,248,249,1)"
      },
      "type": "State"
    },
    "1": {
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
        "bgcolor": "var(--color_bTkRW4_default)"
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_hovered",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTIJR0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bToON",
  "current_parent": "bTIJR0",
  "default_name": "Group FZZ",
  "elements": {
    "bTkiP2": {
      "properties": {
        "height": 240,
        "left": -120,
        "top": -40,
        "width": 240,
        "zindex": 3,
        "src": {
          "entries": {
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765210427344x985400163541736800/Pencil%20%281%29.svg"
          },
          "type": "TextExpression"
        },
        "order": 1,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "14px",
        "single_height": false,
        "min_height_css": "240px",
        "horiz_alignment": "flex-start",
        "nonant_alignment": "bb",
        "use_aspect_ratio": true,
        "aspect_ratio_width": 1,
        "aspect_ratio_height": 1,
        "collapse_when_hidden": true
      },
      "states": {
        "0": {
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
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769874294698x287912115901699520/Folder%20List%202%20%281%29.svg"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        },
        "1": {
          "condition": {
            "next": {
              "type": "Message",
              "name": "is_hovered",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bToON"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "src": {
              "entries": {
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765366903630x723559948150347600/Pencil%20%282%29.svg"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        }
      },
      "type": "Image",
      "id": "bToOw",
      "default_name": "Image Y",
      "name": "Image add team chat",
      "style": "Image_standard_image_"
    },
    "bTnoz2": {
      "properties": {
        "height": 1,
        "left": 0,
        "top": 0,
        "width": 1,
        "zindex": 4,
        "AAD": {
          "entries": {
            "0": "createProjectChat"
          },
          "type": "TextExpression"
        },
        "AAE": {
          "entries": {
            "0": "Create team chat"
          },
          "type": "TextExpression"
        },
        "AAG": "left top",
        "AAH": "right bottom",
        "AAI": "dark",
        "AAK": true,
        "AAN": {
          "entries": {
            "0": "createProjectChat"
          },
          "type": "TextExpression"
        },
        "AAe": false,
        "ABS": true,
        "ABT": "rgba(37,38,39,1)",
        "ABU": "rgba(37,38,39,1)",
        "ABV": "var(--color_bTkRL4_default)",
        "ABW": "var(--color_bTGzr_default)",
        "ABX": "var(--color_primary_contrast_default)",
        "ABY": true,
        "ABZ": {
          "entries": {
            "0": "14"
          },
          "type": "TextExpression"
        },
        "ABa": {
          "entries": {
            "0": "\"Inter\""
          },
          "type": "TextExpression"
        },
        "ABd": 0,
        "ABk": {
          "entries": {
            "0": "8"
          },
          "type": "TextExpression"
        },
        "ABl": {
          "entries": {
            "0": "8"
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
        "order": 7,
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
      "id": "bToOx",
      "current_parent": "bTIfw",
      "default_name": "Airtooltip E",
      "name": "Airtooltip Create Project"
    }
  },
  "name": "Group Create Project Chat"
};
