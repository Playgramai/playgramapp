import { elements } from './elements.js';
import { workflows } from './workflows/index.js';

export const Workspace_Settings = {
  "elements": elements,
  "workflows": workflows,
  "properties": {
    "height": 200,
    "width": 200,
    "element_type": "Group",
    "background_style": "bgcolor",
    "bgcolor": "var(--color_bTkRQ4_default)",
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "boolean",
        "optional": true,
        "param_id": "bTtAw0",
        "param_name": "hide_tables",
        "editor_type": "DynamicValue"
      }
    },
    "padding_top": 50,
    "min_width_px": 0,
    "padding_left": 50,
    "default_width": 900,
    "min_height_px": 500,
    "padding_right": 50,
    "padding_bottom": 50,
    "wf_folder_list": {
      "bTgik": "Analytics",
      "bTdat1": "Popup Delete Invitation",
      "bTdbD1": "Popup Delete Member",
      "bTdbE1": "General",
      "bTdbL1": "Members"
    },
    "element_version": 5,
    "container_layout": "column",
    "custom_element_platform": "web"
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
        "padding_top": 50,
        "padding_left": 8,
        "padding_right": 8
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_true",
            "is_slidable": false
          },
          "type": "Message",
          "name": "dark_mode_boolean",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      },
      "properties": {
        "background_style": "none"
      },
      "type": "State"
    }
  },
  "type": "CustomDefinition",
  "id": "bTdDD1",
  "name": "Workspace Settings",
  "custom_states": {
    "shortcut_": {
      "display": "shortcut",
      "value": "text",
      "rank": 2,
      "make_static": true
    }
  },
};
