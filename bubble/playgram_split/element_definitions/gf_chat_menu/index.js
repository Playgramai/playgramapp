import { elements } from './elements.js';
import { workflows } from './workflows/index.js';

export const GF_Chat_Menu = {
  "elements": elements,
  "workflows": workflows,
  "properties": {
    "height": 200,
    "width": 200,
    "element_type": "Group",
    "group_type": "custom.chat",
    "background_style": "none",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "boolean",
        "optional": true,
        "param_id": "bTJsF",
        "param_name": "from_header?",
        "editor_type": "DynamicValue"
      },
      "1": {
        "is_list": false,
        "btype_id": "boolean",
        "optional": true,
        "param_id": "bTLHT",
        "param_name": "from_project?",
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
  "id": "bTIml0",
  "name": "GF Chat Menu",
  "custom_states": {
    "chat_": {
      "display": "chat",
      "value": "custom.chat",
      "rank": 2,
      "make_static": true
    },
    "mode_": {
      "display": "rename",
      "value": "boolean",
      "rank": 0,
      "make_static": true
    },
    "shortcut_": {
      "display": "shortcut",
      "value": "text",
      "rank": 3,
      "make_static": true
    },
    "visible__": {
      "display": "visible?",
      "value": "boolean",
      "rank": 1,
      "make_static": true
    }
  },
};
