import { elements } from './elements/index.js';
import { workflows } from './workflows/index.js';

export const Library = {
  "elements": elements,
  "workflows": workflows,
  "properties": {
    "height": 200,
    "width": 200,
    "element_type": "Group",
    "background_style": "none",
    "bgcolor": "var(--color_bTkRQ4_default)",
    "padding_top": 50,
    "max_width_px": 900,
    "min_width_px": 0,
    "padding_left": 50,
    "default_width": 700,
    "min_height_px": 700,
    "padding_right": 50,
    "padding_bottom": 50,
    "wf_folder_list": {
      "bTkIQ3": "Images"
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
          "element_id": "bTUdV0",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "padding_top": 50,
        "padding_left": 8,
        "padding_right": 8,
        "padding_bottom": 8
      },
      "type": "State"
    }
  },
  "type": "CustomDefinition",
  "id": "bTjEp1",
  "name": "Library",
  "custom_states": {
    "tab_": {
      "display": "tab",
      "value": "option.memory_management_tabs__os_0",
      "default_val": "all_types",
      "make_static": true
    },
    "file_": {
      "display": "file",
      "value": "list.file",
      "make_static": true
    },
    "file_is_loading_": {
      "display": "file_is_loading",
      "value": "boolean",
      "make_static": true
    },
    "memory_records_tab_": {
      "display": "memory_records_tab",
      "value": "option.memory_records_tabs__os_",
      "default_val": "messages",
      "make_static": true
    }
  },
};
