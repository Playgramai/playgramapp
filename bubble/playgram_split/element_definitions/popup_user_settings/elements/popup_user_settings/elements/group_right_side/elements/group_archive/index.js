import { elements } from './elements/index.js';

export const group_archive = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 16,
    "top": 64,
    "width": 0,
    "zindex": 32,
    "is_visible": false,
    "vertical_centering": true,
    "order": 7,
    "fit_width": false,
    "fit_height": true,
    "padding_left": 16,
    "single_width": false,
    "min_width_css": "0px",
    "padding_right": 16,
    "single_height": false,
    "min_height_css": "0px",
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
                "option_set": "option.user_settings__os_",
                "option_value": "archive"
              },
              "type": "OneOptionValue",
              "is_slidable": false
            },
            "type": "Message",
            "name": "equals",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.tab_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTKdM0"
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
  "id": "bTLCx",
  "default_name": "Group P",
  "name": "Group Archive",
  "style": "Group_transparent_",
};
