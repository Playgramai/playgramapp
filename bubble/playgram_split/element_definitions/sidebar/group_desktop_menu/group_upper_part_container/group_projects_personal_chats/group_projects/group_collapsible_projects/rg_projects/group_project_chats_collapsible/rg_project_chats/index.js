import { elements } from './elements.js';

export const RG_Project_Chats = {
  "elements": elements,
  "properties": {
    "height": 350,
    "width": 280,
    "zindex": 5,
    "data_source": {
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
      "type": "ElementParent",
      "is_slidable": false
    },
    "group_type": "custom.chat",
    "is_visible": true,
    "separator_color": "rgba(150,150,150,0)",
    "separator_width": 0,
    "order": 1,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": "collapse",
        "1": {
          "type": "CurrentCellsIndex",
          "is_slidable": false
        },
        "2": ""
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "fixed_rows": false,
    "single_width": false,
    "single_height": false,
    "show_all_items": true,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "border_color_left": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "border_style_left": "solid",
    "four_border_style": false,
    "cell_min_height_css": "100%",
    "collapse_when_hidden": true
  },
  "type": "RepeatingGroup",
  "id": "bTIKM0",
  "current_parent": "bTIJL0",
  "default_name": "RepeatingGroup D",
  "name": "RG Project Chats",
  "style": "RepeatingGroup_transparent_",
};
