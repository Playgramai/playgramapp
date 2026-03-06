import { elements } from './elements/index.js';

export const group_username_avatar = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 10,
    "top": 11,
    "width": 0,
    "zindex": 8,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "custom.workspace",
    "vertical_centering": true,
    "order": 2,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 10,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "30%",
    "single_height": false,
    "min_height_css": "40px",
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "collapse_when_hidden": true
  },
  "states": {
    "1": {
      "condition": {
        "next": {
          "args": 640,
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
        "min_width_css": "100%"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTgjT0",
  "default_name": "Group O",
  "name": "Group Username/Avatar",
  "style": "Group_transparent_",
};
