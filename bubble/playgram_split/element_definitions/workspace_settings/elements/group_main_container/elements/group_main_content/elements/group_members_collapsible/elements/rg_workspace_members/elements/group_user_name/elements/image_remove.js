export const image_remove = {
  "properties": {
    "height": 240,
    "left": 0,
    "top": 0,
    "width": 320,
    "zindex": 12,
    "is_visible": true,
    "src": {
      "entries": {
        "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1765980914301x713749252887868400/Trash%20Can.svg"
      },
      "type": "TextExpression"
    },
    "order": 18,
    "fit_height": true,
    "single_width": true,
    "min_width_css": "20px",
    "single_height": false,
    "min_height_css": "240px",
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "use_aspect_ratio": true,
    "collapse_when_hidden": false
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "type": "CurrentUser",
              "is_slidable": false
            },
            "next": {
              "args": {
                "next": {
                  "type": "Message",
                  "name": "is_visible",
                  "is_slidable": false
                },
                "properties": {
                  "element_id": "bTdVz1"
                },
                "type": "GetElement",
                "is_slidable": false
              },
              "type": "Message",
              "name": "or_",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "user_user",
          "is_slidable": false
        },
        "type": "ElementParent",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "args": 640,
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
        "vert_alignment": "flex-end"
      },
      "type": "State"
    }
  },
  "type": "Image",
  "id": "bTpei0",
  "current_parent": "bTdVn1",
  "default_name": "Image G",
  "name": "Image Remove",
  "style": "Image_standard_image_"
};
