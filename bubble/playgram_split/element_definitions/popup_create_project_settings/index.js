import { elements } from './elements/index.js';
import { workflows } from './workflows/index.js';

export const Popup_Create_Project_Settings = {
  "elements": elements,
  "workflows": workflows,
  "properties": {
    "height": 200,
    "width": 200,
    "element_type": "Group",
    "group_type": "custom.project",
    "background_style": "none",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": false,
        "param_id": "bTkbY1",
        "param_name": "prefix",
        "editor_type": "DynamicValue"
      }
    },
    "min_width_px": 0,
    "default_width": 1,
    "min_height_px": 1,
    "element_version": 5,
    "container_layout": "column",
    "custom_element_platform": "web"
  },
  "type": "CustomDefinition",
  "id": "bTJjV",
  "name": "Popup Create Project/Settings",
  "custom_states": {
    "empty_": {
      "display": "empty",
      "value": "boolean",
      "rank": 1,
      "default_val": false,
      "make_static": true
    },
    "shortcut_": {
      "display": "shortcut",
      "value": "text",
      "rank": 0,
      "make_static": true
    }
  },
};
