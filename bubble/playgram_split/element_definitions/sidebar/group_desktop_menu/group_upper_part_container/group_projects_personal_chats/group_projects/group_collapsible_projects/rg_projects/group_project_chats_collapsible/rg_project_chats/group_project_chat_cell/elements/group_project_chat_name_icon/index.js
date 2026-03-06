import { elements } from './elements/index.js';

export const Group_Project_Chat_Name_Icon = {
  "elements": elements,
  "properties": {
    "height": 33,
    "left": 0,
    "top": 0,
    "width": 195,
    "zindex": 19,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "custom.chat",
    "vertical_centering": true,
    "order": 6,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "relative",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_focused",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTJYl"
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
  "id": "bTscp",
  "default_name": "Group KZZ",
  "name": "Group Project Chat Name/Icon",
  "style": "Group_transparent_",
};
