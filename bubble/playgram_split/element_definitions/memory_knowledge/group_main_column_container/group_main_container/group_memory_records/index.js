import { elements } from './elements.js';

export const Group_Memory_Records = {
  "elements": elements,
  "properties": {
    "height": 280,
    "left": -70,
    "top": -70,
    "width": 280,
    "zindex": 31,
    "order": 4,
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
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "padding_top": 16,
        "padding_left": 16,
        "padding_right": 16,
        "padding_bottom": 16
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTOSh0",
  "current_parent": "bTNkb",
  "default_name": "Group GZ",
  "name": "Group Memory Records",
  "style": "Group_border_",
};
