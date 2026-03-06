import { elements } from './elements/index.js';

export const group_main_container = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": -50,
    "top": -50,
    "width": 0,
    "zindex": 28,
    "vertical_centering": true,
    "order": 4,
    "row_gap": 20,
    "use_gap": true,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "center",
    "overflow_scroll": false,
    "container_layout": "column",
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
          "element_id": "bTMGw",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "row_gap": 16
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTNkb",
  "default_name": "Group G",
  "name": "Group Main Container",
  "style": "Group_transparent_",
};
