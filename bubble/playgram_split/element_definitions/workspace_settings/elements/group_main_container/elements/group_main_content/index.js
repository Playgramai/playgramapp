import { elements } from './elements/index.js';

export const group_main_content = {
  "elements": elements,
  "properties": {
    "height": 280,
    "left": -70,
    "top": -70,
    "width": 280,
    "zindex": 3,
    "order": 5,
    "row_gap": 20,
    "use_gap": false,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": "target"
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "nonant_alignment": "bb",
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
          "element_id": "bTdDD1",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "padding_left": 16,
        "padding_right": 16
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "args": 768,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTdDD1",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "border_roundness": 12
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTdHZ1",
  "current_parent": "bTNkb",
  "default_name": "Group GZ",
  "name": "Group Main Content",
  "style": "Group_border_",
};
