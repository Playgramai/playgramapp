export const g_header = {
  "properties": {
    "height": 0,
    "width": 0,
    "zindex": 10,
    "border_roundness": 10,
    "is_visible": true,
    "vertical_centering": true,
    "background_style": "none",
    "order": 6,
    "row_gap": 8,
    "use_gap": true,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": "scrollTo"
      },
      "type": "TextExpression"
    },
    "column_gap": 12,
    "fit_height": true,
    "single_width": false,
    "margin_bottom": 20,
    "max_width_css": "900px",
    "single_height": false,
    "horiz_alignment": "center",
    "container_layout": "row",
    "nonant_alignment": "aa",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "flex-start"
  },
  "type": "Group",
  "id": "bTdHr1",
  "current_parent": "bTNjp",
  "default_name": "Group F",
  "elements": {
    "bTHpX": {
      "properties": {
        "text": {
          "entries": {
            "0": "Workspace Settings"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": 0,
        "width": 100,
        "zindex": 2,
        "order": 4,
        "fit_width": false,
        "fit_height": true,
        "single_width": false,
        "min_width_css": "0px",
        "single_height": false,
        "min_height_css": "0px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
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
              "element_id": "bTdDD1",
              "name": "Current Page Width"
            },
            "type": "PageData",
            "is_slidable": false
          },
          "properties": {
            "font_size": 22
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTdHv1",
      "default_name": "Text C",
      "style": "Text_inter___400___24px___white_"
    },
    "bTNkJ": {
      "properties": {
        "height": 30,
        "left": 33,
        "top": 36,
        "width": 30,
        "src": {
          "entries": {
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766689012527x190009328880616830/Settings%20%283%29.svg"
          },
          "type": "TextExpression"
        },
        "order": 3,
        "fit_height": false,
        "single_width": true,
        "min_width_css": "28px",
        "single_height": true,
        "min_height_css": "28px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "use_aspect_ratio": true,
        "aspect_ratio_width": 1,
        "aspect_ratio_height": 1,
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
              "element_id": "bTdDD1",
              "name": "Current Page Width"
            },
            "type": "PageData",
            "is_slidable": false
          },
          "properties": {
            "min_width_css": "22px"
          },
          "type": "State"
        },
        "1": {
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
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770124727819x226033085641584640/Settings%20%284%29.svg"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        }
      },
      "type": "Image",
      "id": "bTdHw1",
      "default_name": "Image D",
      "name": "Image Header Icon"
    }
  },
  "name": "G Header",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  }
};
