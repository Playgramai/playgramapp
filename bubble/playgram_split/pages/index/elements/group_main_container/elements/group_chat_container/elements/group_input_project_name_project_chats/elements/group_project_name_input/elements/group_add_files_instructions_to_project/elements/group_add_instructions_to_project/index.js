import { elements } from './elements/index.js';

export const group_add_instructions_to_project = {
  "elements": elements,
  "properties": {
    "height": 0,
    "left": 30,
    "top": 33.796875,
    "width": 0,
    "zindex": 17,
    "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
    "border_roundness": 12,
    "data_source": {
      "type": "ElementParent"
    },
    "group_type": "custom.project",
    "vertical_centering": true,
    "border_style": "solid",
    "order": 4,
    "use_gap": true,
    "fit_width": false,
    "column_gap": 10,
    "fit_height": true,
    "padding_top": 10,
    "padding_left": 10,
    "single_width": false,
    "padding_right": 10,
    "single_height": false,
    "min_height_css": "88px",
    "padding_bottom": 10,
    "vert_alignment": "center",
    "horiz_alignment": "flex-start",
    "container_layout": "row",
    "four_border_style": false,
    "collapse_when_hidden": true,
    "border_roundness_right": 19,
    "border_roundness_bottom": 19
  },
  "states": {
    "0": {
      "condition": {
        "next": {
          "type": "Message",
          "name": "is_hovered",
          "is_slidable": false
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "properties": {
        "border_color": "rgba(36,86,98,1)"
      },
      "type": "State"
    },
    "1": {
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
        "is_slidable": false
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "args": 490,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTUdV0",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "padding_top": 16,
        "padding_left": 16,
        "padding_right": 16,
        "padding_bottom": 16
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTUfT0",
  "current_parent": "bTKme0",
  "default_name": "Group IZ",
  "name": "Group Add instructions to Project",
  "style": "Group_transparent_",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  },
};
