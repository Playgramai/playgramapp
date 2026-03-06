import { elements } from './elements/index.js';

export const rg_project_files = {
  "elements": elements,
  "properties": {
    "height": 350,
    "left": -16,
    "top": -286,
    "width": 280,
    "zindex": 36,
    "border_color": "rgba(var(--color_background_default_rgb), 0.15)",
    "border_roundness": 0,
    "data_source": {
      "next": {
        "next": {
          "properties": {
            "constraints": {
              "0": {
                "key": "deleted__boolean",
                "value": false,
                "constraint_type": "equals"
              }
            }
          },
          "type": "Message",
          "name": "filtered",
          "is_slidable": true
        },
        "type": "Message",
        "name": "custom.file_ids_",
        "is_slidable": false
      },
      "properties": {
        "element_id": "bTUjN0"
      },
      "type": "GetElement",
      "is_slidable": false
    },
    "group_type": "custom.project_instruction_file",
    "separator_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "separator_style": "none",
    "border_style": "none",
    "order": 9,
    "fit_width": false,
    "fit_height": true,
    "fixed_rows": false,
    "single_width": false,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "border_color_top": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "border_style_top": "solid",
    "container_layout": "column",
    "border_color_left": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "border_style_left": "solid",
    "four_border_style": false,
    "border_color_right": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "border_style_right": "solid",
    "border_color_bottom": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "border_style_bottom": "solid",
    "cell_min_height_css": "100%",
    "border_roundness_top": 12,
    "collapse_when_hidden": true,
    "border_roundness_left": 12,
    "border_roundness_right": 12,
    "border_roundness_bottom": 12
  },
  "states": {
    "1": {
      "condition": {
        "next": {
          "next": {
            "next": {
              "type": "Message",
              "name": "is_empty",
              "is_slidable": false
            },
            "type": "Message",
            "name": "first_element",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_list_data",
          "is_slidable": false
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    }
  },
  "type": "RepeatingGroup",
  "id": "bTUjV0",
  "current_parent": "bTMZN0",
  "default_name": "RepeatingGroup H",
  "name": "RG Project Files",
  "style": "RepeatingGroup_transparent_",
};
