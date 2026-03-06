import { elements } from './elements/index.js';

export const group_user_message = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 557.6484375,
    "top": 74.3984375,
    "width": 0,
    "zindex": 10,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "text",
    "is_visible": true,
    "vertical_centering": true,
    "order": 6,
    "row_gap": 8,
    "use_gap": true,
    "fit_width": true,
    "fit_height": true,
    "single_width": false,
    "margin_bottom": 42,
    "single_height": false,
    "horiz_alignment": "flex-end",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 1,
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "type": "CurrentCellsIndex",
        "is_slidable": false
      },
      "properties": {
        "margin_top": 16
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTtbx0",
  "default_name": "Group A",
  "name": "Group User Message",
  "style": "Group_transparent_",
};
