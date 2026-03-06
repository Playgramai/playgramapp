import { elements } from './elements/index.js';

export const group_main_s = {
  "elements": elements,
  "properties": {
    "height": 280,
    "left": 0,
    "top": 0,
    "width": 280,
    "zindex": 31,
    "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
    "border_roundness": 20,
    "is_visible": true,
    "vertical_centering": true,
    "border_style": "solid",
    "order": 3,
    "fit_width": false,
    "unique_id": {
      "entries": {
        "0": "addNewMemory"
      },
      "type": "TextExpression"
    },
    "fit_height": true,
    "padding_top": 24,
    "padding_left": 24,
    "single_width": false,
    "min_width_css": "40px",
    "padding_right": 24,
    "single_height": false,
    "min_height_css": "40px",
    "padding_bottom": 24,
    "horiz_alignment": "flex-start",
    "container_layout": "column",
    "collapse_when_hidden": true
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
        "padding_top": 16,
        "padding_left": 16,
        "padding_right": 16,
        "padding_bottom": 16
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
        "border_color": "var(--color_bTsrr2_default)"
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTjGV1",
  "current_parent": "bTNkb",
  "default_name": "Group X",
  "name": "Group Main[S]",
  "style": "Group_transparent_",
  "custom_states": {
    "memory_input_type_": {
      "display": "tab",
      "value": "option.library__os_",
      "rank": 0,
      "default_val": "images",
      "make_static": true
    }
  },
};
