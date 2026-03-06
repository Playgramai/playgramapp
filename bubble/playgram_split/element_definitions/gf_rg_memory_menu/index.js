import { elements } from './elements/index.js';
import { workflows } from './workflows/index.js';

export const GF_RG_Memory_Menu = {
  "elements": elements,
  "workflows": workflows,
  "properties": {
    "height": 200,
    "width": 200,
    "element_type": "Group",
    "background_style": "none",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTOxT0",
        "param_name": "uuid",
        "editor_type": "DynamicValue"
      },
      "1": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTOxX0",
        "param_name": "user_message",
        "editor_type": "DynamicValue"
      },
      "2": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTOxY0",
        "param_name": "llm_reply",
        "editor_type": "DynamicValue"
      },
      "3": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTPCD1",
        "param_name": "chat_id",
        "editor_type": "DynamicValue"
      },
      "4": {
        "is_list": false,
        "btype_id": "boolean",
        "optional": true,
        "param_id": "bTZBz",
        "param_name": "project_admin?",
        "editor_type": "DynamicValue"
      },
      "5": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTaEp",
        "param_name": "saved_by_user_id",
        "editor_type": "DynamicValue"
      },
      "6": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTjsb0",
        "param_name": "file_url",
        "editor_type": "DynamicValue"
      },
      "7": {
        "is_list": false,
        "btype_id": "text",
        "optional": true,
        "param_id": "bTvuv2",
        "param_name": "shortcut",
        "editor_type": "DynamicValue"
      }
    },
    "min_width_px": 0,
    "default_width": 200,
    "min_height_px": 1,
    "element_version": 5,
    "container_layout": "column",
    "custom_element_platform": "web"
  },
  "type": "CustomDefinition",
  "id": "bTOpg0",
  "name": "GF RG Memory Menu",
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
