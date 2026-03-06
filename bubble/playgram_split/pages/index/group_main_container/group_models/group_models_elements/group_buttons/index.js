import { elements } from './elements.js';

export const Group_Buttons = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": -24,
    "top": -24,
    "width": 0,
    "zindex": 22,
    "data_source": {
      "next": {
        "type": "Message",
        "name": "get_group_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTUiZ0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "group_type": "custom.chat",
    "vertical_centering": true,
    "order": 3,
    "use_gap": true,
    "fit_width": true,
    "column_gap": 15,
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
          "args": 480,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "min_width_css": "140px"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTgpN2",
  "default_name": "Group UZZZ",
  "name": "Group Buttons",
  "style": "Group_transparent_",
};
