import { elements } from './elements.js';

export const Group_Add_File_Tool = {
  "elements": elements,
  "properties": {
    "height": 40,
    "left": 8,
    "top": 26.390625,
    "width": 764,
    "zindex": 4,
    "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.08)",
    "border_roundness": 24,
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "rgba(var(--color_bTkRL4_default_rgb), 0.12)",
    "border_style": "solid",
    "order": 1,
    "use_gap": true,
    "fit_width": true,
    "column_gap": 10,
    "fit_height": true,
    "margin_top": -2,
    "margin_left": -2,
    "single_width": true,
    "margin_bottom": -2,
    "min_width_css": "36px",
    "single_height": true,
    "min_height_css": "36px",
    "vert_alignment": "flex-start",
    "horiz_alignment": "flex-start",
    "container_layout": "relative",
    "nonant_alignment": "aa",
    "collapse_when_hidden": true
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "next": {
            "type": "Message",
            "name": "is_true",
            "is_slidable": false
          },
          "type": "Message",
          "name": "get_AAE",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUik0"
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
          "name": "dark_mode_boolean",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "said": "a2Vsdm8tMzE4ODQ=",
        "is_slidable": false
      },
      "properties": {
        "border_color": "rgba(168,210,220,1)",
        "background_style": "none"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTUeu0",
  "default_name": "Group VZ",
  "name": "Group Add File/Tool",
  "style": "Group_transparent_",
};
