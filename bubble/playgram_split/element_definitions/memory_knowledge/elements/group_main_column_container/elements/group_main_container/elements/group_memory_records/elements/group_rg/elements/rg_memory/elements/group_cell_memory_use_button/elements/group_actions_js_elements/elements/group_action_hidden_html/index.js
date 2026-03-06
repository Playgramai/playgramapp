import { elements } from './elements/index.js';

export const group_action_hidden_html = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": -652.671875,
    "top": -16,
    "width": 0,
    "zindex": 6,
    "border_roundness": 6,
    "vertical_centering": true,
    "order": 4,
    "use_gap": true,
    "fit_width": true,
    "column_gap": 10,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_horiz_alignment": "flex-end"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_empty",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_AAI",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTiKz2"
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
  "id": "bTOVo0",
  "default_name": "Group T",
  "name": "Group Action/Hidden HTML",
  "style": "Group_transparent_",
};
