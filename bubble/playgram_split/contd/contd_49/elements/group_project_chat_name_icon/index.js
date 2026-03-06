// Original path: element_definitions/sidebar/elements/group_desktop_menu/elements/group_upper_part_container/elements/group_projects_personal_chats/elements/group_projects/elements/group_collapsible_projects/elements/rg_projects/elements/group_project_chats_collapsible/elements/rg_project_chats/elements/group_project_chat_cell
import { elements } from './elements/index.js';

export const group_project_chat_name_icon = {
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
