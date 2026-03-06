import { elements } from './elements/index.js';

export const Group_Assistant_Reply = {
  "elements": elements,
  "properties": {
    "height": 280,
    "left": 0,
    "top": 0,
    "width": 280,
    "zindex": 25,
    "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "border_roundness": 8,
    "vertical_centering": true,
    "border_style": "solid",
    "order": 3,
    "fit_width": false,
    "fit_height": true,
    "padding_top": 16,
    "padding_left": 16,
    "single_width": false,
    "padding_right": 16,
    "single_height": false,
    "max_height_css": "150px",
    "padding_bottom": 16,
    "horiz_alignment": "flex-start",
    "overflow_scroll": true,
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
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "border_color": "var(--color_bTspn2_default)",
        "background_style": "bgcolor",
        "bgcolor": "var(--color_bTspn2_default)"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTOvb0",
  "current_parent": "bTOlr0",
  "default_name": "Group G",
  "name": "Group Assistant Reply",
  "style": "Group_transparent_",
};
