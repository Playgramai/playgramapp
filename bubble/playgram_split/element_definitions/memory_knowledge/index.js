import { elements } from './elements.js';
import { workflows } from './workflows/index.js';

export const Memory_Knowledge = {
  "elements": elements,
  "workflows": workflows,
  "properties": {
    "height": 200,
    "width": 200,
    "element_type": "Group",
    "background_style": "none",
    "bgcolor": "var(--color_bTGzq_default)",
    "padding_top": 50,
    "min_width_px": 0,
    "padding_left": 50,
    "default_width": 700,
    "min_height_px": 700,
    "padding_right": 50,
    "padding_bottom": 50,
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
    }
  },
  "type": "CustomDefinition",
  "id": "bTMGw",
  "name": "Memory & Knowledge",
  "custom_states": {
    "tab_": {
      "display": "tab",
      "value": "option.memory_management_tabs__os_0",
      "rank": 2,
      "default_val": "all_types",
      "make_static": true
    },
    "file_": {
      "display": "file",
      "value": "list.file",
      "rank": 0,
      "make_static": true
    },
    "shortcut_": {
      "display": "shortcut",
      "value": "text",
      "rank": 4,
      "make_static": true
    },
    "memory_level_": {
      "display": "memory_level",
      "value": "option.memory_management_tabs__os_0",
      "rank": 3,
      "default_val": "personal",
      "make_static": true
    },
    "file_is_loading_": {
      "display": "file_is_loading",
      "value": "boolean",
      "rank": 1,
      "make_static": true
    }
  },
};
