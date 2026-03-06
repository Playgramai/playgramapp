import { elements } from './elements/index.js';

export const group_dictate_use_button = {
  "elements": elements,
  "properties": {
    "height": 24,
    "left": 0,
    "top": -110,
    "width": 24,
    "zindex": 3,
    "border_roundness": 50,
    "vertical_centering": true,
    "order": 2,
    "fit_width": true,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "30px",
    "single_height": false,
    "min_height_css": "30px",
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "nonant_alignment": "cc",
    "collapse_when_hidden": true,
    "container_vert_alignment": "center"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_hovered",
          "is_slidable": false
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "properties": {
        "background_style": "bgcolor",
        "bgcolor": "rgba(var(--color_bTGzv_default_rgb), 0.2)"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTchf",
  "current_parent": "bTaqJ",
  "default_name": "Group X",
  "name": "Group Dictate (use button)",
  "style": "Group_transparent_",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  },
};
