import { elements } from './elements/index.js';

export const group_workspace_image = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 33,
    "vertical_centering": true,
    "order": 2,
    "fit_width": true,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": false,
    "min_height_css": "40px",
    "vert_alignment": "flex-end",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
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
        "vert_alignment": "center"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTpWv4",
  "default_name": "Group QZ",
  "name": "Group workspace image",
  "style": "Group_transparent_",
};
