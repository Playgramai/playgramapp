export const group_parent_input_search_member = {
  "properties": {
    "height": 36,
    "left": -246,
    "top": 0,
    "width": 446,
    "zindex": 20,
    "vertical_centering": true,
    "order": 6,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "margin_bottom": 24,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "relative",
    "collapse_when_hidden": true
  },
  "type": "Group",
  "id": "bTdWB1",
  "default_name": "Group C",
  "elements": {
    "bTJNl": {
      "properties": {
        "height": 48,
        "left": 0,
        "top": 0,
        "width": 250,
        "zindex": 2,
        "mandatory": false,
        "content": {
          "entries": {
            "0": ""
          },
          "type": "TextExpression"
        },
        "placeholder": {
          "entries": {
            "0": "Search by email..."
          },
          "type": "TextExpression"
        },
        "order": 3,
        "unique_id": {
          "entries": {
            "0": "searchMember"
          },
          "type": "TextExpression"
        },
        "fit_height": false,
        "padding_left": 42,
        "single_width": false,
        "single_height": true,
        "min_height_css": "36px",
        "horiz_alignment": "flex-start",
        "nonant_alignment": "bb",
        "collapse_when_hidden": true
      },
      "type": "Input",
      "id": "bTdWF1",
      "default_name": "Input B",
      "name": "Input Search Member",
      "style": "Input_standart_new_input_"
    },
    "bTpXI4": {
      "properties": {
        "height": 240,
        "left": 14,
        "top": 0,
        "width": 240,
        "zindex": 4,
        "src": {
          "entries": {
            "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1766692358781x503502162722679400/Search%20%281%29.svg"
          },
          "type": "TextExpression"
        },
        "fit_height": true,
        "margin_left": 14,
        "single_width": true,
        "min_width_css": "20px",
        "single_height": false,
        "min_height_css": "240px",
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
                "0": "//95f9e0563b2591b21b05569dd7f94a27.cdn.bubble.io/f1770132284327x994665709256047400/Search%20%282%29.svg"
              },
              "type": "TextExpression"
            }
          },
          "type": "State"
        }
      },
      "type": "Image",
      "id": "bTpXD4",
      "default_name": "Image E",
      "style": "Image_standard_image_"
    }
  },
  "name": "Group Parent Input Search Member",
  "style": "Group_transparent_"
};
