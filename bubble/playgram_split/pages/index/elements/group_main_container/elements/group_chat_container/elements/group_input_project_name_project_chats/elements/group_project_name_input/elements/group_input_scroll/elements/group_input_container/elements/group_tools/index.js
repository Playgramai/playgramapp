import { elements } from './elements/index.js';

export const group_tools = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 248.890625,
    "top": 81.1875,
    "width": 0,
    "zindex": 8,
    "vertical_centering": true,
    "order": 27,
    "row_gap": 8,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 8,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": false,
    "min_height_css": "40px",
    "horiz_alignment": "center",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "center"
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
        "container_horiz_alignment": "center"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTqZx1",
  "default_name": "Group WZZZ",
  "name": "Group Tools",
  "style": "Group_transparent_",
};
