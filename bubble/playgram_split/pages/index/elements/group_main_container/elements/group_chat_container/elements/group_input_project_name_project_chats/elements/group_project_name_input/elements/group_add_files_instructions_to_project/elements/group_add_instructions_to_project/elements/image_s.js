export const image_s = {
  "properties": {
    "height": 240,
    "left": 0,
    "top": 0,
    "width": 240,
    "zindex": 7,
    "src": {
      "entries": {
        "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769508895621x403179918408170800/Wrap%20Icon%20%285%29.svg"
      },
      "type": "TextExpression"
    },
    "order": 1,
    "fit_height": true,
    "single_width": true,
    "min_width_css": "32px",
    "single_height": false,
    "min_height_css": "240px",
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
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769508845651x647224653210808300/Wrap%20Icon%20%283%29.svg"
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    }
  },
  "type": "Image",
  "id": "bTmUV1",
  "current_parent": "bTUfT0",
  "default_name": "Image S",
  "style": "Image_standard_image_"
};
