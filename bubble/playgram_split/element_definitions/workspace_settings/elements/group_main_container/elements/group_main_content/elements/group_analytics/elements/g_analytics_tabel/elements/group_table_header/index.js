import { elements } from './elements/index.js';

export const group_table_header = {
  "elements": elements,
  "properties": {
    "height": 280,
    "left": 0,
    "top": 0,
    "width": 280,
    "zindex": 6,
    "border_roundness": 10,
    "is_visible": true,
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.18)",
    "order": 2,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 20,
    "fit_height": true,
    "padding_left": 16,
    "single_width": false,
    "min_width_css": "40px",
    "padding_right": 16,
    "single_height": false,
    "min_height_css": "26px",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "four_border_style": true,
    "border_roundness_top": 12,
    "collapse_when_hidden": true,
    "border_roundness_right": 12
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 980,
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
        "is_visible": false
      },
      "type": "State"
    },
    "1": {
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
        "bgcolor": "var(--color_bTsrr2_default)"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTfYB",
  "current_parent": "bTfQP0",
  "default_name": "Group Y",
  "name": "Group Table Header",
  "style": "Group_transparent_",
};
