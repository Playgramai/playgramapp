import { elements } from './elements/index.js';

export const group_add_memory_file_upload = {
  "elements": elements,
  "properties": {
    "height": 48,
    "left": -578,
    "top": 152,
    "width": 778,
    "zindex": 6,
    "border_color": "rgba(var(--color_bTkRL4_default_rgb), 0.1)",
    "border_roundness": 12,
    "is_visible": true,
    "vertical_centering": true,
    "background_style": "bgcolor",
    "bgcolor": "rgba(0,0,0,0)",
    "border_style": "dashed",
    "order": 22,
    "fit_width": false,
    "fit_height": true,
    "margin_top": 16,
    "single_width": false,
    "margin_bottom": 20,
    "single_height": false,
    "horiz_alignment": "flex-start",
    "container_layout": "relative",
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
          "name": "dark_mode_boolean",
          "is_slidable": false
        },
        "type": "CurrentUser",
        "is_slidable": false
      },
      "properties": {
        "border_color": "rgba(234,236,240,1)"
      },
      "type": "State"
    },
    "1": {
      "condition": {
        "next": {
          "next": {
            "args": {
              "next": {
                "type": "Message",
                "name": "isnt_visible",
                "is_slidable": false
              },
              "properties": {
                "element_id": "bTcid"
              },
              "type": "GetElement",
              "is_slidable": false
            },
            "type": "Message",
            "name": "and_",
            "is_slidable": false
          },
          "type": "Message",
          "name": "is_hovered",
          "is_slidable": false
        },
        "type": "ThisElement",
        "is_slidable": false
      },
      "properties": {
        "border_color": "var(--color_bTkRL4_default)"
      },
      "type": "State"
    },
    "2": {
      "condition": {
        "next": {
          "args": 768,
          "type": "Message",
          "name": "less_or_equal_than",
          "is_slidable": false
        },
        "properties": {
          "element_id": "bTMGw",
          "name": "Current Page Width"
        },
        "type": "PageData",
        "is_slidable": false
      },
      "properties": {
        "margin_top": 0
      },
      "type": "State"
    }
  },
  "type": "Group",
  "id": "bTcht",
  "default_name": "Group X",
  "name": "Group Add memory File Upload",
  "style": "Group_transparent_",
  "transitions": {
    "background_style": {
      "fn": "ease",
      "duration": 200
    }
  },
};
