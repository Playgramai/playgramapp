export const image_az = {
  "properties": {
    "height": 240,
    "left": 6,
    "top": 0,
    "width": 240,
    "zindex": 2,
    "src": {
      "entries": {
        "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765464287355x386265884483869100/Bookmark--add.svg"
      },
      "type": "TextExpression"
    },
    "order": 2,
    "fit_height": true,
    "margin_left": 6,
    "margin_right": 6,
    "single_width": true,
    "min_width_css": "14px",
    "single_height": false,
    "min_height_css": "240px",
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "nonant_alignment": "ab",
    "use_aspect_ratio": true,
    "aspect_ratio_width": 1,
    "aspect_ratio_height": 1,
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
        "properties": {
          "element_id": "bTtau0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "src": {
          "entries": {
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765464304898x651998843556944560/Bookmark--add-1.svg"
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
              "args": "true",
              "type": "Message",
              "name": "equals",
              "is_slidable": false
            },
            "type": "Message",
            "name": "first_element",
            "is_slidable": false
          },
          "properties": {
            "regex": {
              "entries": {
                "0": "(?<=already_saved: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
              },
              "type": "TextExpression"
            }
          },
          "type": "Message",
          "name": "extract_regex",
          "is_slidable": true
        },
        "type": "ElementParent",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "src": {
          "entries": {
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766608069006x107633227516634510/Bookmark--add-1%201%201.svg"
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "first_element",
                  "is_slidable": false
                },
                "properties": {
                  "regex": {
                    "entries": {
                      "0": "(?<=message_id: \")[\\s\\S]*?(?=\"<#NANI\\?>)"
                    },
                    "type": "TextExpression"
                  }
                },
                "type": "Message",
                "name": "extract_regex",
                "is_slidable": true
              },
              "type": "ElementParent",
              "is_slidable": false
            },
            "type": "Message",
            "name": "contains",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.current_saved_message_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    },
    "3": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "isnt_clickable",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTtau0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "opacity": 50
      },
      "type": "State"
    },
    "4": {
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
        "is_visible": false
      },
      "type": "State"
    }
  },
  "type": "Image",
  "id": "bTtbA0",
  "current_parent": "bTVDB0",
  "default_name": "Image AZ",
  "style": "Image_standard_image_"
};
