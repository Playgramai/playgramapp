import { elements } from './elements/index.js';

export const group_team_chat_name_icon = {
  "elements": elements,
  "properties": {
    "height": 33,
    "left": -15,
    "top": 0,
    "width": 215,
    "zindex": 3,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "custom.chat",
    "vertical_centering": true,
    "order": 5,
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
          "element_id": "bTJVF"
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
  "id": "bTsdN",
  "default_name": "Group LZZ",
  "name": "Group Team Chat Name/Icon",
  "style": "Group_transparent_",
};
