import { elements } from './elements/index.js';

export const group_canvas = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 14,
    "boxshadow_horizontal": 0,
    "boxshadow_style": "outset",
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "var(--color_bTGzr_default)",
    "boxshadow_color": "rgba(0,0,0,0.1)",
    "boxshadow_spread": 8,
    "order": 2,
    "row_gap": 20,
    "use_gap": true,
    "fit_width": false,
    "fit_height": false,
    "padding_top": 20,
    "padding_left": 20,
    "single_width": false,
    "max_width_css": "50%",
    "padding_right": 20,
    "single_height": false,
    "padding_bottom": 20,
    "vert_alignment": "stretch",
    "horiz_alignment": "flex-end",
    "container_layout": "column",
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
        "bgcolor": "var(--color_bTspn2_default)"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTUll0",
  "default_name": "Group QZ",
  "name": "Group Canvas ",
  "style": "Group_transparent_",
};
