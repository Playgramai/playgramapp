import { elements } from './elements/index.js';

export const group_team_name_logo = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 33,
    "vertical_centering": true,
    "order": 1,
    "row_gap": 8,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 24,
    "fit_height": true,
    "single_width": false,
    "margin_bottom": 36,
    "single_height": false,
    "horiz_alignment": "center",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "space-between"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 420,
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
        "column_gap": 16
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTdSF1",
  "default_name": "Group B",
  "name": "Group Team Name/Logo",
  "style": "Group_transparent_",
};
