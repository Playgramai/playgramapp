import { elements } from './elements.js';
import { workflows } from './workflows/index.js';

export const Sidebar = {
  "elements": elements,
  "workflows": workflows,
  "properties": {
    "height": 200,
    "width": 200,
    "border_roundness": 16,
    "element_type": "Group",
    "bgcolor": "rgba(var(--color_bTkRJ4_default_rgb), 1)",
    "opacity": 100,
    "parameters": {
      "0": {
        "is_list": false,
        "btype_id": "option.theme_colors__os_",
        "optional": true,
        "param_id": "bTcEP",
        "param_name": "test_theme",
        "editor_type": "DynamicValue"
      }
    },
    "padding_top": 12,
    "min_width_px": 0,
    "padding_left": 12,
    "default_width": 252,
    "min_height_px": 700,
    "padding_right": 12,
    "padding_bottom": 10,
    "element_version": 5,
    "container_layout": "column",
    "four_border_style": false,
    "border_color_right": "var(--color_bTGzr_default)",
    "border_style_right": "solid",
    "custom_element_platform": "web",
    "container_vert_alignment": "space-between"
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "args": 768,
          "next": {
            "args": {
              "next": {
                "next": {
                  "type": "Message",
                  "name": "is_false",
                  "is_slidable": false
                },
                "type": "Message",
                "name": "custom.expand_",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTHoP"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTHoP",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "border_roundness": 10,
        "padding_top": 0,
        "padding_left": 0,
        "padding_right": 0,
        "padding_bottom": 0
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
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "bgcolor": "var(--color_bTspn2_default)"
      },
      "type": "State"
    }
  },
  "type": "CustomDefinition",
  "id": "bTHoP",
  "name": "Sidebar",
  "custom_states": {
    "open__": {
      "display": "opened?",
      "value": "boolean",
      "rank": 0,
      "default_val": true,
      "make_static": true
    },
    "expand_": {
      "display": "expand",
      "value": "boolean",
      "rank": 4,
      "default_val": false,
      "make_static": true
    },
    "submenu_": {
      "display": "submenu",
      "value": "text",
      "rank": 6,
      "make_static": true
    },
    "shortcut_": {
      "display": "shortcut",
      "value": "text",
      "rank": 8,
      "make_static": true
    },
    "hide_members_": {
      "display": "hide_tables",
      "value": "boolean",
      "rank": 7,
      "make_static": true
    },
    "selected_chat_": {
      "display": "selected_chat",
      "value": "custom.chat",
      "rank": 3,
      "make_static": true
    },
    "selected_project_": {
      "display": "selected_project",
      "value": "custom.project",
      "rank": 5,
      "make_static": true
    },
    "unsended_messages_": {
      "display": "unsended_messages",
      "value": "list.text",
      "rank": 2,
      "make_static": true
    }
  },
};
