import { elements } from './elements/index.js';

export const g_images = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": 58,
    "width": 0,
    "zindex": 35,
    "is_visible": false,
    "vertical_centering": true,
    "order": 8,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": false,
    "min_height_css": "40px",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "center"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "properties": {
                "option_set": "option.library__os_",
                "option_value": "images"
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
          "element_id": "bTjGV1"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTkHb3",
  "default_name": "Group H",
  "name": "G Images",
  "style": "Group_transparent_",
};
