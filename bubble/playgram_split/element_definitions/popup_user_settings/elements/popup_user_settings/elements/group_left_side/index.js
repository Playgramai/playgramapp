import { elements } from './elements/index.js';

export const group_left_side = {
  "elements": elements,
  "properties": {
    "height": 280,
    "left": -80,
    "top": -80,
    "width": 280,
    "zindex": 32,
    "vertical_centering": true,
    "background_style": "none",
    "bgcolor": "rgba(27,27,29,1)",
    "order": 3,
    "fit_width": false,
    "fit_height": true,
    "padding_top": 16,
    "padding_left": 16,
    "single_width": false,
    "max_width_css": "200px",
    "padding_right": 16,
    "single_height": false,
    "padding_bottom": 16,
    "vert_alignment": "stretch",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "four_border_style": true,
    "border_color_right": "rgba(var(--color_bTkRL4_default_rgb), 0.08)",
    "border_style_right": "solid",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 560,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTKdH0",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "min_width_css": "100%"
      },
      "type": "State"
    },
    "2": {
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
        "background_style": "bgcolor",
        "bgcolor": "rgba(247,248,249,1)"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTLAV",
  "default_name": "Group C",
  "name": "Group Left Side",
  "style": "Group_transparent_",
};
