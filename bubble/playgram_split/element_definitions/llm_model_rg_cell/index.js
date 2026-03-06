import { elements } from './elements/index.js';
import { workflows } from './workflows/index.js';

export const LLM_Model_RG_Cell = {
  "elements": elements,
  "workflows": workflows,
  "properties": {
    "height": 200,
    "width": 200,
    "element_type": "Group",
    "group_type": "option.llm_providers__os_",
    "background_style": "none",
    "bgcolor": "var(--color_bTGzr_default)",
    "use_gap": true,
    "column_gap": 4,
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "custom.chat",
        "optional": true,
        "param_id": "bTIIn0",
        "param_name": "chat",
        "editor_type": "DynamicValue"
      },
      "1": {
        "is_list": false,
        "btype_id": "option.llm_models__os_",
        "optional": true,
        "param_id": "bTPAS0",
        "param_name": "current_model",
        "editor_type": "DynamicValue"
      },
      "2": {
        "is_list": false,
        "btype_id": "file",
        "optional": true,
        "param_id": "bTYPA0",
        "param_name": "file_in_uploader",
        "editor_type": "DynamicValue"
      }
    },
    "min_width_px": 0,
    "default_width": 292,
    "min_height_px": 54,
    "element_version": 5,
    "container_layout": "relative",
    "custom_element_platform": "web"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_visible",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTbEr0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "args": "index-color-test",
          "type": "Message",
          "name": "equals",
          "is_slidable": false
        },
        "properties": {
          "name": "Current Page Name"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "type": "State"
    }
  },
  "type": "CustomDefinition",
  "id": "bTbDp0",
  "name": "LLM Model RG Cell",
  "custom_states": {
    "llm_provider_": {
      "display": "selected_provider",
      "value": "option.llm_providers__os_",
      "rank": 0,
      "make_static": true
    }
  },
};
