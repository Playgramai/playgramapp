import { elements } from './elements/index.js';

export const rg_project_chats = {
  "elements": elements,
  "properties": {
    "height": 350,
    "left": 0,
    "top": -55,
    "width": 280,
    "zindex": 11,
    "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.1)",
    "border_roundness": 0,
    "data_source": {
      "next": {
        "next": {
          "next": {
            "properties": {
              "constraints": {
                "0": {
                  "key": "archived__boolean",
                  "value": false,
                  "constraint_type": "equals"
                }
              },
              "descending": true,
              "sort_field": "string_for_update_number"
            },
            "type": "Message",
            "name": "filtered",
            "is_slidable": true
          },
          "type": "Message",
          "name": "chats_list_custom_chat",
          "is_slidable": false
        },
        "type": "Message",
        "name": "get_group_data",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTUif0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "group_type": "custom.chat",
    "is_visible": true,
    "separator_color": "rgba(var(--color_primary_contrast_default_rgb), 0)",
    "separator_style": "solid",
    "separator_width": 8,
    "border_style": "solid",
    "order": 3,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": ""
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "fixed_rows": false,
    "margin_top": 0,
    "margin_right": 0,
    "single_width": false,
    "min_width_css": "0%",
    "single_height": false,
    "show_all_items": true,
    "horiz_alignment": "center",
    "container_layout": "column",
    "nonant_alignment": "aa",
    "four_border_style": true,
    "cell_min_height_css": "100%",
    "collapse_when_hidden": true
  },
  "type": "RepeatingGroup",
  "id": "bTUdn0",
  "current_parent": "bTHTi0",
  "default_name": "RepeatingGroup C",
  "name": "RG Project Chats",
  "style": "RepeatingGroup_transparent_",
};
