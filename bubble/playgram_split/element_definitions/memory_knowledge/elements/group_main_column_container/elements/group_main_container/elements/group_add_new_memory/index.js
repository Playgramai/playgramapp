import { elements } from './elements/index.js';

export const group_add_new_memory = {
  "elements": elements,
  "properties": {
    "height": 280,
    "left": 0,
    "top": 0,
    "width": 280,
    "zindex": 31,
    "is_visible": true,
    "order": 3,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": "addNewMemory"
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": false,
    "min_height_css": "40px",
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
  "id": "bTchB",
  "current_parent": "bTNkb",
  "default_name": "Group X",
  "name": "Group Add New Memory",
  "style": "Group_border_",
  "custom_states": {
    "memory_input_type_": {
      "display": "memory_input_type",
      "value": "option.memory_input_types__os_",
      "default_val": "manual_input",
      "make_static": true
    }
  },
};
