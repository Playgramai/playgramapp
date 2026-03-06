export const group_divider = {
  "properties": {
    "height": 280,
    "left": -80,
    "top": -80,
    "width": 280,
    "zindex": 34,
    "vertical_centering": true,
    "order": 14,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": true,
    "min_height_css": "1px",
    "horiz_alignment": "flex-start",
    "border_color_top": "rgba(42, 42, 45, 1)",
    "border_style_top": "dashed",
    "container_layout": "column",
    "four_border_style": true,
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
        "border_color_top": "rgba(234,236,240,1)"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTmVV1",
  "default_name": "Group U",
  "name": "Group divider",
  "style": "Group_transparent_"
};
