import { elements } from './elements.js';

export const G_Analytics_Tabel = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 0,
    "top": 152.796875,
    "width": 0,
    "zindex": 21,
    "border_color": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "is_visible": true,
    "vertical_centering": true,
    "border_style": "none",
    "order": 17,
    "fit_width": false,
    "fit_height": true,
    "single_width": false,
    "min_width_css": "40px",
    "single_height": false,
    "min_height_css": "40px",
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "border_color_left": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "border_style_left": "solid",
    "four_border_style": false,
    "border_color_bottom": "rgba(var(--color_primary_contrast_default_rgb), 0.15)",
    "border_style_bottom": "solid",
    "collapse_when_hidden": true,
    "border_roundness_left": 10,
    "border_roundness_bottom": 10
  },
  "states": {
    "0": {
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
        "properties": {
          "element_id": "bTfQP0"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
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
          "name": "param_bTtAw0",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTdDD1"
        },
        "type": "GetElement",
        "is_slidable": false
      },
      "properties": {
        "is_visible": false
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTfJf1",
  "default_name": "Group S",
  "name": "G Analytics Tabel",
  "style": "Group_transparent_",
};
