import { elements } from './elements/index.js';
import { workflows } from './workflows/index.js';

export const GF_User_Menu = {
  "elements": elements,
  "workflows": workflows,
  "properties": {
    "height": 200,
    "width": 200,
    "element_type": "Group",
    "group_type": "custom.workspace",
    "background_style": "none",
    "min_width_px": 0,
    "default_width": 200,
    "min_height_px": 1,
    "element_version": 5,
    "container_layout": "column",
    "custom_element_platform": "web"
  },
  "type": "CustomDefinition",
  "id": "bTJIo",
  "name": "GF User Menu",
  "custom_states": {
    "mode_": {
      "display": "rename",
      "value": "boolean",
      "make_static": true
    },
    "visible__": {
      "display": "visible?",
      "value": "boolean",
      "make_static": true
    }
  },
};
