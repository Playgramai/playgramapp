export const group_delete_chat = {
  "properties": {
    "height": 0,
    "left": 20,
    "top": 20,
    "width": 0,
    "zindex": 4,
    "border_roundness": 6,
    "is_visible": true,
    "vertical_centering": true,
    "order": 10,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 12,
    "fit_height": true,
    "padding_top": 6,
    "padding_left": 6,
    "single_width": false,
    "padding_right": 6,
    "single_height": false,
    "min_height_css": "32px",
    "padding_bottom": 6,
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "flex-start"
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
        "background_style": "bgcolor",
        "bgcolor": "rgba(180,35,24,0.12)"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTInJ0",
  "current_parent": "bTIgr",
  "default_name": "Group A",
  "elements": {
    "bTHpX": {
      "properties": {
        "text": {
          "entries": {
            "0": "Delete"
          },
          "type": "TextExpression"
        },
        "height": 36,
        "left": 0,
        "top": 0,
        "width": 100,
        "zindex": 2,
        "order": 5,
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
              "next": {
                "type": "Message",
                "name": "is_true",
                "is_slidable": false
              },
              "type": "Message",
              "name": "param_bTJsF",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTIml0"
            },
            "type": "GetElement",
            "is_slidable": false
          },
          "properties": {
            "text": {
              "entries": {
                "0": "Delete chat"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        },
        "1": {
          "condition": {
            "next": {
              "next": {
                "next": {
                  "args": {
                    "next": {
                      "args": 768,
                      "type": "Message",
                      "name": "less_or_equal_than",
                      "is_slidable": false
                    },
                    "properties": {
                      "element_id": "bTIml0",
                      "name": "Current Page Width"
                    },
                    "type": "PageData",
                    "is_slidable": false
                  },
                  "type": "Message",
                  "name": "and_",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "is_false",
                "is_slidable": false
              },
              "type": "Message",
              "name": "param_bTJsF",
              "is_slidable": false
            },
            "properties": {
              "element_id": "bTIml0"
            },
            "type": "GetElement",
            "said": "a2Vsdm8tMzE4ODQ=",
            "is_slidable": false
          },
          "properties": {
            "is_visible": false
          },
          "type": "State"
        }
      },
      "type": "Text",
      "id": "bTInK0",
      "default_name": "Text A",
      "style": "Text_inter___400___14px____ee6b6b_"
    },
    "bTmPv3": {
      "properties": {
        "height": 240,
        "left": 0,
        "top": 0,
        "width": 240,
        "zindex": 5,
        "src": {
          "entries": {
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765980914301x713749252887868400/Trash%20Can.svg"
          },
          "type": "TextExpression"
        },
        "order": 1,
        "fit_height": true,
        "single_width": true,
        "min_width_css": "20px",
        "single_height": false,
        "min_height_css": "240px",
        "vert_alignment": "center",
        "horiz_alignment": "flex-start",
        "use_aspect_ratio": true,
        "aspect_ratio_width": 1,
        "aspect_ratio_height": 1,
        "collapse_when_hidden": true
      },
      "type": "Image",
      "id": "bTmPt3",
      "current_parent": "bTInJ0",
      "default_name": "Image E",
      "style": "Image_standard_image_"
    }
  },
  "name": "Group Delete Chat",
  "style": "Group_transparent_",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  }
};
