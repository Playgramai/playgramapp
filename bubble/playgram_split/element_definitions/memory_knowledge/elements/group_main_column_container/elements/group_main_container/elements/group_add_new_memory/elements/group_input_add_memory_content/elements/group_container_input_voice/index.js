import { elements } from './elements/index.js';

export const group_container_input_voice = {
  "elements": elements,
  "properties": {
    "height": 100,
    "left": -850,
    "top": 24.796875,
    "width": 1050,
    "zindex": 4,
    "border_color": "rgba(42,42,45,1)",
    "border_roundness": 12,
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "rgba(38,38,41,1)",
    "border_style": "solid",
    "order": 2,
    "row_gap": 10,
    "use_gap": true,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "min_height_css": "120px",
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
            "name": "is_true",
            "is_slidable": false
          },
          "type": "Message",
          "name": "dark_mode_boolean",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      },
      "properties": {
        "border_color": "rgba(234,236,240,1)",
        "bgcolor": "rgba(234,236,240,1)"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTchZ",
  "default_name": "Group X",
  "name": "Group Container Input/Voice",
  "style": "Group_transparent_",
};
