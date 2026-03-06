import { elements } from './elements/index.js';

export const group_input_file = {
  "elements": elements,
  "properties": {
    "height": 58.390600000000006,
    "left": 8,
    "top": 8,
    "width": 764,
    "zindex": 3,
    "vertical_centering": true,
    "fit_width": false,
    "fit_height": true,
    "margin_top": 12,
    "margin_left": 12,
    "margin_right": 12,
    "single_width": false,
    "margin_bottom": 12,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "nonant_alignment": "aa",
    "collapse_when_hidden": true
  },
  "states": {
    "2": {
      "condition": {
        "next": {
          "next": {
            "args": 30,
            "type": "Message",
            "name": "greater_or_equal_than",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_height",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUec0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "margin_bottom": 20
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTUeP0",
  "default_name": "Group YZ",
  "name": "Group Input/File",
  "style": "Group_transparent_",
  "transitions": {
    "padding_bottom": {
      "fn": "ease",
      "duration": 200
    }
  },
};
