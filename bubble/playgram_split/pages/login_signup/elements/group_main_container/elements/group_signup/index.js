import { elements } from './elements/index.js';

export const group_signup = {
  "elements": elements,
  "properties": {
    "height": 0,
    "width": 0,
    "zindex": 16,
    "is_visible": false,
    "vertical_centering": true,
    "order": 6,
    "use_gap": false,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": false,
    "min_height_css": "40px",
    "horiz_alignment": "center",
    "container_layout": "column",
    "collapse_when_hidden": true,
    "container_vert_alignment": "center"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": "signup",
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "properties": {
          "parameter_name": {
            "entries": {
              "0": "mode"
            },
            "type": "TextExpression"
          }
        },
        "type": "GetParamFromUrl"
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTKRq",
  "current_parent": "bTKPI",
  "default_name": "Group D",
  "name": "Group Signup",
  "style": "Group_transparent_",
};
