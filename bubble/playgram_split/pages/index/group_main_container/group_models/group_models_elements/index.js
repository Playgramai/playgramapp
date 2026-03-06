import { elements } from './elements.js';

export const Group_models_elements = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 24,
    "top": 24,
    "width": 0,
    "zindex": 23,
    "vertical_centering": true,
    "order": 7,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "padding_bottom": 12,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "four_border_style": true,
    "border_color_bottom": "rgba(var(--color_bTkRL4_default_rgb), 0.08)",
    "border_style_bottom": "solid",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 768,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "padding_bottom": 10
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTnPw1",
  "default_name": "Group NZZZZ",
  "name": "Group models elements",
  "style": "Group_transparent_",
};
