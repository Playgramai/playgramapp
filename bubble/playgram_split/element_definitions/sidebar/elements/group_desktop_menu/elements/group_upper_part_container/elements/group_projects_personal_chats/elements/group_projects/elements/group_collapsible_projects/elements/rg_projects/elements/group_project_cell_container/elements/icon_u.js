export const icon_u = {
  "properties": {
    "height": 30,
    "left": 0,
    "top": 0,
    "width": 30,
    "zindex": 2,
    "icon": "feather chevron-down",
    "icon_color": "var(--color_bTGzv_default)",
    "is_visible": false,
    "vertical_centering": true,
    "order": 4,
    "fit_height": false,
    "padding_top": 5,
    "padding_left": 5,
    "single_width": true,
    "min_width_css": "24px",
    "padding_right": 5,
    "single_height": true,
    "min_height_css": "24px",
    "padding_bottom": 5,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_visible",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTIKM0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "icon": "feather chevron-up"
      },
      "type": "State"
    }
  },
  "type": "Icon",
  "id": "bTNLS0",
  "current_parent": "bTIJR0",
  "default_name": "Icon U"
};
