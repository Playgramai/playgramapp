import { elements } from './elements/index.js';

export const group_container = {
  "elements": elements,
  "properties": {
    "height": 280,
    "left": 101,
    "top": 39,
    "width": 280,
    "zindex": 2,
    "boxshadow_horizontal": 0,
    "border_roundness": 12,
    "boxshadow_style": "outset",
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "rgba(42,42,45,1)",
    "boxshadow_blur": 10,
    "boxshadow_color": "rgba(0,0,0,0.2)",
    "boxshadow_spread": 0,
    "order": 2,
    "fit_width": false,
    "fit_height": true,
    "padding_top": 12,
    "padding_left": 12,
    "single_width": false,
    "padding_right": 12,
    "single_height": false,
    "padding_bottom": 12,
    "horiz_alignment": "flex-start",
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
        "border_color": "rgba(234,236,240,1)",
        "bgcolor": "var(--color_background_default)",
        "border_style": "solid"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTPuP",
  "default_name": "Group N",
  "name": "Group Container",
  "style": "Group_transparent_",
};
