import { elements } from './elements/index.js';

export const group_toggle_projects = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 26,
    "data_source": {
      "next": {
        "type": "Message",
        "name": "current_workspace_custom_workspace",
        "is_slidable": false
      },
      "type": "CurrentUser",
      "is_slidable": false
    },
    "group_type": "custom.workspace",
    "vertical_centering": true,
    "order": 4,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 10,
    "fit_height": true,
    "single_width": false,
    "max_width_css": "332px",
    "single_height": false,
    "vert_alignment": "flex-start",
    "horiz_alignment": "center",
    "container_layout": "row",
    "collapse_when_hidden": true,
    "container_vert_alignment": "center"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 768,
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
        "vert_alignment": "center"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTdSn1",
  "current_parent": "bTQCl",
  "default_name": "Group B",
  "name": "Group Toggle Projects",
  "style": "Group_transparent_",
};
