import { elements } from './elements/index.js';

export const Group_LLM_Message = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 26,
    "top": 90.796875,
    "width": 0,
    "zindex": 25,
    "is_visible": false,
    "vertical_centering": true,
    "order": 13,
    "row_gap": 8,
    "use_gap": true,
    "fit_width": false,
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
          "next": {
            "type": "Message",
            "name": "is_not_empty",
            "is_slidable": false
          },
          "type": "Message",
          "name": "param_bTOxY0",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTOpg0"
        },
        "type": "GetElement",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTOvU0",
  "current_parent": "bTOej0",
  "default_name": "Group G",
  "name": "Group LLM Message",
  "style": "Group_transparent_",
};
