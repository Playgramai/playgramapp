import { elements } from './elements/index.js';

export const group_input_add_memory_content = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": 39.1953125,
    "width": 0,
    "zindex": 4,
    "vertical_centering": true,
    "order": 17,
    "row_gap": 8,
    "use_gap": true,
    "fit_width": false,
    "fit_height": true,
    "margin_top": 16,
    "single_width": false,
    "margin_bottom": 16,
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
          "next": {
            "args": {
              "properties": {
                "option_set": "option.memory_input_types__os_",
                "option_value": "upload_files"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.memory_input_type_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTchB"
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
  "id": "bTchV",
  "default_name": "Group X",
  "name": "Group Input Add Memory Content",
  "style": "Group_transparent_",
};
