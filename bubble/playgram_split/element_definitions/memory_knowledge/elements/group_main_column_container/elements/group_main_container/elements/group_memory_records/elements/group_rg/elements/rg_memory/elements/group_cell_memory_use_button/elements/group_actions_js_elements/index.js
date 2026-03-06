import { elements } from './elements/index.js';

export const group_actions_js_elements = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 10,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "text",
    "vertical_centering": true,
    "order": 14,
    "fit_width": true,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 540,
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
        "min_width_css": "30%"
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "args": 400,
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
        "min_width_css": "108px"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTidZ2",
  "default_name": "Group Y",
  "name": "Group Actions/JS elements",
  "style": "Group_transparent_",
};
