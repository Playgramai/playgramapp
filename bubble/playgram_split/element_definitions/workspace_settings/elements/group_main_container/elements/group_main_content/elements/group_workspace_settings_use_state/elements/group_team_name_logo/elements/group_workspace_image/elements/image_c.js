export const image_c = {
  "properties": {
    "height": 240,
    "left": 0,
    "top": 0,
    "width": 240,
    "zindex": 32,
    "src": {
      "entries": {
        "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766493536619x937873437585606700/Buttons%20%281%29.svg"
      },
      "type": "TextExpression"
    },
    "order": 2,
    "fit_height": true,
    "margin_left": -28,
    "single_width": true,
    "min_width_css": "44px",
    "single_height": false,
    "min_height_css": "240px",
    "vert_alignment": "flex-end",
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
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1769268189226x516437932788496900/Buttons%20%283%29.svg"
          },
          "type": "TextExpression"
        }
      },
      "type": "State"
    }
  },
  "type": "Image",
  "id": "bTpWp4",
  "current_parent": "bTdSF1",
  "default_name": "Image C",
  "style": "Image_standard_image_"
};
