import { elements } from './elements/index.js';

export const group_invitations_to_workspaces = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": 0,
    "width": 0,
    "zindex": 23,
    "is_visible": false,
    "vertical_centering": true,
    "order": 23,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
  },
  "states": {
    "1": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_empty",
            "is_slidable": false
          },
          "type": "Message",
          "name": "custom.join_workspace_",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTKPI"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": true
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTQGm0",
  "current_parent": "bTPzw0",
  "default_name": "Group M",
  "name": "Group Invitations to Workspaces",
  "style": "Group_transparent_",
};
