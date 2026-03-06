import { elements } from './elements/index.js';
import { workflows } from './workflows/index.js';

export const Popup_User_Settings = {
  "elements": elements,
  "workflows": workflows,
  "properties": {
    "height": 200,
    "width": 200,
    "element_type": "Group",
    "background_style": "none",
    "min_width_px": 0,
    "default_width": 700,
    "min_height_px": 0,
    "element_version": 5,
    "container_layout": "column",
    "custom_element_platform": "web"
  },
  "type": "CustomDefinition",
  "id": "bTKdH0",
  "name": "Popup User Settings",
  "custom_states": {
    "shortcut_": {
      "display": "shortcut",
      "value": "text",
      "rank": 1,
      "make_static": true
    },
    "empty_list_": {
      "display": "empty_list",
      "value": "list.text",
      "rank": 0,
      "make_static": true
    }
  },
};
