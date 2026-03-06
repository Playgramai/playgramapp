import { elements } from './elements.js';

export const Group_RG = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 30,
    "vertical_centering": true,
    "order": 7,
    "fit_width": false,
    "fit_height": true,
    "margin_right": -5,
    "single_width": false,
    "single_height": false,
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
            "args": {
              "next": {
                "type": "Message",
                "name": "is_visible",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTNwC"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "type": "Message",
            "name": "or_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "is_visible",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTNkl"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTNnO",
  "default_name": "Group H",
  "name": "Group RG",
  "style": "Group_transparent_",
};
